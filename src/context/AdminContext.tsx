import { createContext, useContext, useState, type ReactNode } from 'react'

interface AdminContextType {
  isAdmin: boolean
  isMaintenance: boolean
  showLoginModal: boolean
  setShowLoginModal: (show: boolean) => void
  login: (username: string, pass: string) => boolean
  logout: () => void
  toggleMaintenance: () => void
  setMaintenance: (value: boolean) => void
}

const AdminContext = createContext<AdminContextType | undefined>(undefined)

const ADMIN_STORAGE_KEY = 'rc_admin_auth'
const MAINTENANCE_STORAGE_KEY = 'rc_maintenance_mode'

export function AdminProvider({ children }: { children: ReactNode }) {
  const [isAdmin, setIsAdmin] = useState<boolean>(() => {
    return localStorage.getItem(ADMIN_STORAGE_KEY) === 'true'
  })

  // Site is open to the public by default (false), unless toggled on by admin
  const [isMaintenance, setIsMaintenance] = useState<boolean>(() => {
    return localStorage.getItem(MAINTENANCE_STORAGE_KEY) === 'true'
  })

  const [showLoginModal, setShowLoginModal] = useState<boolean>(false)

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
  }

  const toggleMaintenance = () => {
    setIsMaintenance((prev) => {
      const next = !prev
      localStorage.setItem(MAINTENANCE_STORAGE_KEY, String(next))
      return next
    })
  }

  const setMaintenance = (value: boolean) => {
    setIsMaintenance(value)
    localStorage.setItem(MAINTENANCE_STORAGE_KEY, String(value))
  }

  return (
    <AdminContext.Provider
      value={{
        isAdmin,
        isMaintenance,
        showLoginModal,
        setShowLoginModal,
        login,
        logout,
        toggleMaintenance,
        setMaintenance,
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
