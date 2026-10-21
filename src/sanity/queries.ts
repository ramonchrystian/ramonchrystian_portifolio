export const articlesQuery = `*[_type == "article"] | order(date desc) {
  _id,
  "id": coalesce(slug.current, _id),
  title,
  excerpt,
  url,
  date,
  featured
}`

export const workshopsQuery = `*[_type == "workshop"] | order(coalesce(dateSort, "1970-01-01") desc) {
  _id,
  "id": _id,
  title,
  event,
  institution,
  city,
  year,
  type
}`

export const ministryExperiencesQuery = `*[_type == "ministryExperience"] | order(startYear desc) {
  _id,
  "id": _id,
  church,
  role,
  period,
  startYear,
  isCurrent,
  photo,
  responsibilities,
  highlights
}`

export const videosQuery = `*[_type == "video"] {
  _id,
  "id": _id,
  title,
  description,
  youtubeId,
  startTime,
  tags,
  pillar
}`

export const digitalProjectsQuery = `*[_type == "digitalProject"] | order(coalesce(order, 99) asc) {
  _id,
  "id": _id,
  name,
  isFeatured,
  tagline,
  badge,
  context,
  objective,
  contribution,
  statusOrOutcome,
  tags,
  url,
  coverImage
}`

export const siteSettingsQuery = `*[_type == "siteSettings"][0] {
  portrait,
  heroHeadline,
  heroSubheadline,
  bioParagraphs,
  email,
  linkedInUrl,
  youtubeUrl,
  instagramUrl,
  curriculumPdf,
  googlePhotosAlbumUrl,
  isMaintenanceMode
}`

export const academicDegreesQuery = `*[_type == "academicDegree"] | order(order asc) {
  _id,
  "id": _id,
  title,
  institution,
  category,
  periodLabel,
  description,
  icon,
  isPrimary,
  order
}`

export const galleryImagesQuery = `*[_type == "galleryImage"] | order(order asc) {
  _id,
  "id": _id,
  title,
  caption,
  image,
  category,
  date,
  order
}`
