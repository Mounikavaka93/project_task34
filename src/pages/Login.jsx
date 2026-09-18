import { useState } from 'react'
import { Link, Navigate, useLocation, useNavigate } from 'react-router-dom'
import { Eye, EyeOff } from 'lucide-react'
import Button from '../components/ui/Button'
import FormField, { inputClass } from '../components/ui/FormField'
import { useAuth } from '../context/AuthContext'

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export default function Login() {
  const { login, user } = useAuth()
  const navigate = useNavigate()
  const location = useLocation()
  const [show, setShow] = useState(false)
  const [error, setError] = useState('')
  const [touched, setTouched] = useState({})
  const [form, setForm] = useState({ email: '', password: '' })
  const [submitting, setSubmitting] = useState(false)

  if (user) return <Navigate to={location.state?.from || '/dashboard'} replace />

  const errors = {
    email: !form.email ? 'Email is required' : !emailPattern.test(form.email) ? 'Enter a valid email' : '',
    password: !form.password ? 'Password is required' : form.password.length < 6 ? 'Use at least 6 characters' : '',
  }

  const onChange = (event) => {
    setForm((prev) => ({ ...prev, [event.target.name]: event.target.value }))
    setError('')
  }

  const onSubmit = (event) => {
    event.preventDefault()
    setTouched({ email: true, password: true })
    if (errors.email || errors.password) return
    setSubmitting(true)
    const result = login(form.email, form.password)
    setSubmitting(false)
    if (!result.ok) {
      setError(result.message)
      return
    }
    navigate(location.state?.from || '/dashboard')
  }

  return (
    <div className="rounded-3xl bg-white p-7 shadow-xl shadow-slate-200/70">
      <p className="text-xs font-semibold tracking-[0.28em] text-brand-700 uppercase">Student login</p>
      <h1 className="font-display mt-2 text-3xl font-extrabold">Welcome back</h1>
      <p className="mt-2 text-sm text-slate-500">Sign in to continue your courses, progress, and certificates.</p>
      <form onSubmit={onSubmit} className="mt-6 space-y-4" noValidate>
        <FormField label="Email" error={errors.email} touched={touched.email} valid={!errors.email}>
          <input
            name="email"
            type="email"
            value={form.email}
            onBlur={() => setTouched((prev) => ({ ...prev, email: true }))}
            onChange={onChange}
            className={`${inputClass(touched.email, errors.email, touched.email && !errors.email ? 'pr-10' : '')}`}
            placeholder="you@email.com"
            autoComplete="email"
          />
        </FormField>
        <FormField
          label="Password"
          error={errors.password}
          touched={touched.password}
          valid={!errors.password}
          showValidIcon={false}
        >
          <input
            name="password"
            type={show ? 'text' : 'password'}
            value={form.password}
            onBlur={() => setTouched((prev) => ({ ...prev, password: true }))}
            onChange={onChange}
            className={inputClass(touched.password, errors.password, 'pr-12')}
            placeholder="Your password"
            autoComplete="current-password"
          />
          <button
            type="button"
            className="absolute top-1/2 right-3 -translate-y-1/2 text-slate-400"
            onClick={() => setShow((v) => !v)}
            aria-label="Toggle password visibility"
          >
            {show ? <EyeOff size={18} /> : <Eye size={18} />}
          </button>
        </FormField>
        <div className="flex justify-end">
          <Link to="/forgot-password" className="text-sm font-semibold text-brand-700">
            Forgot password?
          </Link>
        </div>
        {error ? <p className="animate-shake rounded-xl bg-red-50 px-3 py-2 text-sm text-red-600">{error}</p> : null}
        <Button type="submit" className="w-full" size="lg" disabled={submitting}>
          {submitting ? 'Signing in…' : 'Log in'}
        </Button>
      </form>
      <p className="mt-5 text-center text-sm text-slate-500">
        New here?{' '}
        <Link to="/register" className="font-semibold text-brand-700">
          Create an account
        </Link>
      </p>
      <p className="mt-4 rounded-2xl bg-sand px-3 py-2 text-xs text-slate-500">
        Demo student: student@learnify.com · learnify123
      </p>
    </div>
  )
}
