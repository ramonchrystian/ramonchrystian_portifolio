import { createContext, useContext, useState, useEffect, type ReactNode } from 'react'
import { client, writeClient } from '../sanity/client'
import { siteSettingsQuery } from '../sanity/queries'

interface AdminContextType {
  isAdmin: boolean
  isMaintenance: boolean
  adminPreviewSite: boolean
  toggleAdminPreviewSite: () => void
  setAdminPreviewSite: (preview: boolean) => void
  showLoginModal: boolean
  setShowLoginModal: (show: boolean) => void
  login: (username: string, pass: string) => boolean
  logout: () => void
  toggleMaintenance: () => Promise<void>
  setMaintenance: (value: boolean) => Promise<void>
  isUpdatingMaintenance: boolean
}

const AdminContext = createContext<AdminContextType | undefined>(undefined)

const ADMIN_STORAGE_KEY = 'rc_admin_auth'
const MAINTENANCE_STORAGE_KEY = 'rc_maintenance_mode'

export function AdminProvider({ children }: { children: ReactNode }) {
  const [isAdmin, setIsAdmin] = useState<boolean>(() => {
    return localStorage.getItem(ADMIN_STORAGE_KEY) === 'true'
  })

  const [isMaintenance, setIsMaintenance] = useState<boolean>(() => {
    return localStorage.getItem(MAINTENANCE_STORAGE_KEY) === 'true'
  })

  // When maintenance is active, adminPreviewSite allows admin to see the full site instead of the maintenance page
  const [adminPreviewSite, setAdminPreviewSite] = useState<boolean>(false)
  const [isUpdatingMaintenance, setIsUpdatingMaintenance] = useState<boolean>(false)
  const [showLoginModal, setShowLoginModal] = useState<boolean>(false)

  // On initial load, fetch cloud maintenance state from Sanity
  useEffect(() => {
    let isMounted = true
    client
      .fetch<{ isMaintenanceMode?: boolean } | null>(siteSettingsQuery)
      .then((res) => {
        if (isMounted && res && typeof res.isMaintenanceMode === 'boolean') {
          setIsMaintenance(res.isMaintenanceMode)
          localStorage.setItem(MAINTENANCE_STORAGE_KEY, String(res.isMaintenanceMode))
        }
      })
      .catch((err) => {
        console.warn('Sanity: aviso ao consultar modo manutenção, usando estado local.', err)
      })

    return () => {
      isMounted = false
    }
  }, [])

  const login = (username: string, pass: string): boolean => {
    if (username.trim().toLowerCase() === 'ramon' && pass === 'Podx3!ramonchrystian') {
      setIsAdmin(true)
      localStorage.setItem(ADMIN_STORAGE_KEY, 'true')
      return true
    }
    return false
  }

  const logout = () => {
    setIsAdmin(false)
    localStorage.removeItem(ADMIN_STORAGE_KEY)
    setAdminPreviewSite(false)
  }

  const toggleAdminPreviewSite = () => {
    setAdminPreviewSite((prev) => !prev)
  }

  const setMaintenance = async (value: boolean) => {
    setIsMaintenance(value)
    localStorage.setItem(MAINTENANCE_STORAGE_KEY, String(value))
    if (value) {
      // When turning maintenance ON, default adminPreviewSite to false so admin sees the maintenance screen immediately
      setAdminPreviewSite(false)
    }

    try {
      setIsUpdatingMaintenance(true)
      await writeClient
        .createIfNotExists({
          _id: 'siteSettings',
          _type: 'siteSettings',
          isMaintenanceMode: value,
        })
        .then(() =>
          writeClient.patch('siteSettings').set({ isMaintenanceMode: value }).commit()
        )
    } catch (err) {
      console.warn('Erro ao sincronizar manutenção com Sanity:', err)
    } finally {
      setIsUpdatingMaintenance(false)
    }
  }

  const toggleMaintenance = async () => {
    await setMaintenance(!isMaintenance)
  }

  return (
    <AdminContext.Provider
      value={{
        isAdmin,
        isMaintenance,
        adminPreviewSite,
        toggleAdminPreviewSite,
        setAdminPreviewSite,
        showLoginModal,
        setShowLoginModal,
        login,
        logout,
        toggleMaintenance,
        setMaintenance,
        isUpdatingMaintenance,
      }}
    >
      {children}
    </AdminContext.Provider>
  )
}

export function useAdmin() {
  const context = useContext(AdminContext)
  if (!context) {
    throw new Error('useAdmin must be used within an AdminProvider')
  }
  return context
}
