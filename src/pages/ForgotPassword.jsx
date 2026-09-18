import { useState } from 'react'
import { Link } from 'react-router-dom'
import { CheckCircle2 } from 'lucide-react'
import Button from '../components/ui/Button'
import FormField, { inputClass } from '../components/ui/FormField'

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export default function ForgotPassword() {
  const [email, setEmail] = useState('')
  const [touched, setTouched] = useState(false)
  const [sent, setSent] = useState(false)
  const error = !email ? 'Email is required' : !emailPattern.test(email) ? 'Enter a valid email' : ''

  const onSubmit = (event) => {
    event.preventDefault()
    setTouched(true)
    if (error) return
    setSent(true)
  }

  return (
    <div className="rounded-3xl bg-white p-7 shadow-xl shadow-slate-200/70">
      {sent ? (
        <div className="text-center">
          <CheckCircle2 className="mx-auto mb-3 text-brand-600" size={42} />
          <h1 className="font-display text-3xl font-extrabold">Check your inbox</h1>
          <p className="mt-3 text-sm text-slate-500">
            If an account exists for <strong>{email}</strong>, we sent a reset link. This demo does not send real email.
          </p>
          <Link to="/login" className="mt-6 inline-block">
            <Button>Back to login</Button>
          </Link>
        </div>
      ) : (
        <>
          <p className="text-xs font-semibold tracking-[0.28em] text-brand-700 uppercase">Account recovery</p>
          <h1 className="font-display mt-2 text-3xl font-extrabold">Forgot password</h1>
          <p className="mt-2 text-sm text-slate-500">
            Enter the email on your Learnify student account and we will send a reset path.
          </p>
          <form onSubmit={onSubmit} className="mt-6 space-y-4" noValidate>
            <FormField label="Email" error={error} touched={touched} valid={!error}>
              <input
                type="email"
                value={email}
                onBlur={() => setTouched(true)}
                onChange={(event) => setEmail(event.target.value)}
                className={inputClass(touched, error, touched && !error ? 'pr-10' : '')}
                placeholder="you@email.com"
                autoComplete="email"
              />
            </FormField>
            <Button type="submit" className="w-full" size="lg">
              Send reset link
            </Button>
          </form>
          <p className="mt-5 text-center text-sm text-slate-500">
            Remembered it?{' '}
            <Link to="/login" className="font-semibold text-brand-700">
              Log in
            </Link>
          </p>
        </>
      )}
    </div>
  )
}
