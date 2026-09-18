import { createContext, useContext, useMemo, useState } from 'react'

const STORAGE_KEY = 'learnify_session'
const ACCOUNTS_KEY = 'learnify_accounts'

const demoUser = {
  name: 'Mounika Vaka',
  email: 'student@learnify.com',
  password: 'learnify123',
  title: 'Product-minded learner',
  location: 'Hyderabad, India',
  bio: 'Building a stronger craft in product, data, and design — one focused week at a time.',
  avatar: 'https://ui-avatars.com/api/?name=Mounika+Vaka&background=14736c&color=fff&size=256',
  enrolled: [
    { courseId: 'react-mastery', progress: 68, lastAccessed: '2 hours ago' },
    { courseId: 'figma-product-design', progress: 42, lastAccessed: 'Yesterday' },
    { courseId: 'python-data-lab', progress: 91, lastAccessed: '3 days ago' },
    { courseId: 'sql-for-analysts', progress: 100, lastAccessed: '1 week ago' },
    { courseId: 'growth-marketing-lab', progress: 18, lastAccessed: '4 days ago' },
  ],
  certificates: [
    {
      id: 'CERT-2026-1842',
      courseId: 'sql-for-analysts',
      issuedOn: '12 Aug 2026',
    },
  ],
}

const applyDemoIdentity = (person) => {
  if (!person || person.email?.toLowerCase() !== demoUser.email) return person
  return {
    ...person,
    name: demoUser.name,
    title: demoUser.title,
    location: demoUser.location,
    bio: demoUser.bio,
    avatar: demoUser.avatar,
  }
}

const readSession = () => {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    const parsed = raw ? applyDemoIdentity(JSON.parse(raw)) : null
    if (parsed) localStorage.setItem(STORAGE_KEY, JSON.stringify(parsed))
    return parsed
  } catch {
    return null
  }
}

const readAccounts = () => {
  try {
    const raw = localStorage.getItem(ACCOUNTS_KEY)
    const parsed = raw ? JSON.parse(raw) : null
    if (Array.isArray(parsed) && parsed.length) {
      const synced = parsed.map(applyDemoIdentity)
      const hasDemo = synced.some((account) => account.email === demoUser.email)
      const next = hasDemo ? synced : [demoUser, ...synced]
      localStorage.setItem(ACCOUNTS_KEY, JSON.stringify(next))
      return next
    }
  } catch {
    return [demoUser]
  }
  return [demoUser]
}

const AuthContext = createContext(null)

export function AuthProvider({ children }) {
  const [user, setUser] = useState(() => readSession())
  const [accounts, setAccountsState] = useState(() => readAccounts())

  const setAccounts = (updater) => {
    setAccountsState((prev) => {
      const next = typeof updater === 'function' ? updater(prev) : updater
      localStorage.setItem(ACCOUNTS_KEY, JSON.stringify(next))
      return next
    })
  }

  const persist = (nextUser) => {
    setUser(nextUser)
    if (nextUser) localStorage.setItem(STORAGE_KEY, JSON.stringify(nextUser))
    else localStorage.removeItem(STORAGE_KEY)
  }

  const login = (email, password) => {
    const match = accounts.find(
      (account) => account.email.toLowerCase() === email.toLowerCase() && account.password === password,
    )
    if (!match) {
      return { ok: false, message: 'Email or password does not match our records.' }
    }
    const { password: _pw, ...safeUser } = match
    persist(safeUser)
    return { ok: true }
  }

  const register = ({ name, email, password }) => {
    const exists = accounts.some((account) => account.email.toLowerCase() === email.toLowerCase())
    if (exists) {
      return { ok: false, message: 'An account with this email already exists.' }
    }
    const created = {
      name,
      email,
      password,
      title: 'New Learnify student',
      location: 'Anywhere',
      bio: 'Excited to start a focused learning path.',
      avatar: `https://ui-avatars.com/api/?name=${encodeURIComponent(name)}&background=14736c&color=fff`,
      enrolled: [],
      certificates: [],
    }
    setAccounts((prev) => [...prev, created])
    const { password: _pw, ...safeUser } = created
    persist(safeUser)
    return { ok: true }
  }

  const logout = () => persist(null)

  const updateProfile = (patch) => {
    if (!user) return
    const next = { ...user, ...patch }
    persist(next)
    setAccounts((prev) =>
      prev.map((account) => (account.email === user.email ? { ...account, ...patch } : account)),
    )
  }

  const enroll = (courseId) => {
    if (!user) return { ok: false, needsAuth: true }
    if ((user.enrolled || []).some((item) => item.courseId === courseId)) {
      return { ok: true, already: true }
    }
    const enrolled = [{ courseId, progress: 8, lastAccessed: 'Just now' }, ...(user.enrolled || [])]
    const next = { ...user, enrolled }
    persist(next)
    setAccounts((prev) =>
      prev.map((account) => (account.email === user.email ? { ...account, enrolled } : account)),
    )
    return { ok: true, already: false }
  }

  const value = useMemo(
    () => ({ user, login, register, logout, updateProfile, enroll }),
    [user, accounts],
  )

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (!context) throw new Error('useAuth must be used within AuthProvider')
  return context
}
