import { useState } from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import { Eye, EyeOff } from 'lucide-react'
import Button from '../components/ui/Button'
import FormField, { inputClass } from '../components/ui/FormField'
import { useAuth } from '../context/AuthContext'

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

const passwordScore = (value) => {
  if (!value) return 0
  let score = 0
  if (value.length >= 8) score += 1
  if (value.length >= 12) score += 1
  if (/[A-Z]/.test(value) && /[a-z]/.test(value)) score += 1
  if (/\d/.test(value) || /[^\w\s]/.test(value)) score += 1
  return Math.min(score, 4)
}

export default function Register() {
  const { register, user } = useAuth()
  const navigate = useNavigate()
  const [show, setShow] = useState(false)
  const [error, setError] = useState('')
  const [touched, setTouched] = useState({})
  const [form, setForm] = useState({ name: '', email: '', password: '', confirm: '' })

  if (user) return <Navigate to="/dashboard" replace />

  const errors = {
    name: form.name.trim().length < 2 ? 'Enter your full name' : '',
    email: !form.email ? 'Email is required' : !emailPattern.test(form.email) ? 'Enter a valid email' : '',
    password: form.password.length < 8 ? 'Use at least 8 characters' : '',
    confirm: !form.confirm ? 'Confirm your password' : form.confirm !== form.password ? 'Passwords do not match' : '',
  }

  const score = passwordScore(form.password)
  const strengthLabel = ['Too short', 'Weak', 'Fair', 'Good', 'Strong'][score]

  const onChange = (event) => {
    setForm((prev) => ({ ...prev, [event.target.name]: event.target.value }))
    setError('')
  }

  const onSubmit = (event) => {
    event.preventDefault()
    setTouched({ name: true, email: true, password: true, confirm: true })
    if (Object.values(errors).some(Boolean)) return
    const result = register(form)
    if (!result.ok) {
      setError(result.message)
      return
    }
    navigate('/dashboard')
  }

  return (
    <div className="rounded-3xl bg-white p-7 shadow-xl shadow-slate-200/70">
      <p className="text-xs font-semibold tracking-[0.28em] text-brand-700 uppercase">Student registration</p>
      <h1 className="font-display mt-2 text-3xl font-extrabold">Create your classroom</h1>
      <p className="mt-2 text-sm text-slate-500">A free account unlocks enrollments, progress, and certificates.</p>
      <form onSubmit={onSubmit} className="mt-6 space-y-4" noValidate>
        <FormField label="Full name" error={errors.name} touched={touched.name} valid={!errors.name}>
          <input
            name="name"
            value={form.name}
            onBlur={() => setTouched((prev) => ({ ...prev, name: true }))}
            onChange={onChange}
            className={inputClass(touched.name, errors.name, touched.name && !errors.name ? 'pr-10' : '')}
            placeholder="Mounika Vaka"
            autoComplete="name"
          />
        </FormField>
        <FormField label="Email" error={errors.email} touched={touched.email} valid={!errors.email}>
          <input
            name="email"
            type="email"
            value={form.email}
            onBlur={() => setTouched((prev) => ({ ...prev, email: true }))}
            onChange={onChange}
            className={inputClass(touched.email, errors.email, touched.email && !errors.email ? 'pr-10' : '')}
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
          hint="At least 8 characters. Mix letters and numbers for a stronger password."
        >
          <input
            name="password"
            type={show ? 'text' : 'password'}
            value={form.password}
            onBlur={() => setTouched((prev) => ({ ...prev, password: true }))}
            onChange={onChange}
            className={inputClass(touched.password, errors.password, 'pr-12')}
            placeholder="At least 8 characters"
            autoComplete="new-password"
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
        {form.password ? (
          <div>
            <div className="grid grid-cols-4 gap-1">
              {Array.from({ length: 4 }).map((_, index) => (
                <span
                  key={index}
                  className={`h-1.5 rounded-full ${index < score ? 'bg-brand-600' : 'bg-slate-200'}`}
                />
              ))}
            </div>
            <p className="mt-1 text-xs text-slate-500">Strength: {strengthLabel}</p>
          </div>
        ) : null}
        <FormField
          label="Confirm password"
          error={errors.confirm}
          touched={touched.confirm}
          valid={!errors.confirm}
        >
          <input
            name="confirm"
            type="password"
            value={form.confirm}
            onBlur={() => setTouched((prev) => ({ ...prev, confirm: true }))}
            onChange={onChange}
            className={inputClass(touched.confirm, errors.confirm, touched.confirm && !errors.confirm ? 'pr-10' : '')}
            placeholder="Repeat password"
            autoComplete="new-password"
          />
        </FormField>
        {error ? <p className="animate-shake rounded-xl bg-red-50 px-3 py-2 text-sm text-red-600">{error}</p> : null}
        <Button type="submit" className="w-full" size="lg">
          Create account
        </Button>
      </form>
      <p className="mt-5 text-center text-sm text-slate-500">
        Already learning with us?{' '}
        <Link to="/login" className="font-semibold text-brand-700">
          Log in
        </Link>
      </p>
    </div>
  )
}
