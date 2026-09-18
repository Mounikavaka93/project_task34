import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Award, BookOpen, CheckCircle2, Clock3, TrendingUp } from 'lucide-react'
import Button from '../components/ui/Button'
import ProgressBar from '../components/ui/ProgressBar'
import Reveal, { Stagger, StaggerItem } from '../components/ui/Reveal'
import { useAuth } from '../context/AuthContext'
import { getCourse, getInstructor } from '../data/courses'

export default function Dashboard() {
  const { user, updateProfile } = useAuth()
  const enrolled = (user?.enrolled || [])
    .map((item) => ({
      ...item,
      course: getCourse(item.courseId),
    }))
    .filter((item) => item.course)
  const inProgress = enrolled.filter((item) => item.progress < 100)
  const completed = enrolled.filter((item) => item.progress >= 100)
  const recent = [...enrolled].slice(0, 3)
  const avg =
    enrolled.length > 0
      ? Math.round(enrolled.reduce((sum, item) => sum + item.progress, 0) / enrolled.length)
      : 0

  const certificates = completed.map((item) => {
    const existing = user.certificates?.find((cert) => cert.courseId === item.courseId)
    return (
      existing || {
        id: `CERT-${item.courseId.toUpperCase()}`,
        courseId: item.courseId,
        issuedOn: 'This week',
      }
    )
  })

  const [profile, setProfile] = useState({
    name: user.name,
    title: user.title,
    location: user.location,
    bio: user.bio,
  })
  const [saved, setSaved] = useState(false)

  const saveProfile = (event) => {
    event.preventDefault()
    if (!profile.name.trim()) return
    updateProfile(profile)
    setSaved(true)
    window.setTimeout(() => setSaved(false), 2500)
  }

  return (
    <div id="overview" className="scroll-mt-24 space-y-6 pb-6">
      <Stagger className="grid grid-cols-2 gap-4 lg:grid-cols-4" stagger={0.08}>
        {[
          { label: 'Enrolled courses', value: enrolled.length, icon: BookOpen },
          { label: 'Average progress', value: `${avg}%`, icon: TrendingUp },
          { label: 'Completed', value: completed.length, icon: Award },
          { label: 'In progress', value: inProgress.length, icon: Clock3 },
        ].map((card) => (
          <StaggerItem key={card.label} className="h-full">
            <article className="h-full rounded-3xl bg-white p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-md">
              <card.icon className="mb-3 text-brand-600" size={20} />
              <p className="font-display text-2xl font-extrabold">{card.value}</p>
              <p className="text-sm text-slate-500">{card.label}</p>
            </article>
          </StaggerItem>
        ))}
      </Stagger>

      <Reveal>
        <section id="courses" className="scroll-mt-24 rounded-3xl bg-white p-6 shadow-sm">
          <div className="mb-5 flex items-center justify-between gap-3">
            <div>
              <h2 className="font-display text-xl font-bold">Overview of enrolled courses</h2>
              <p className="text-sm text-slate-500">Learning progress for every course on your path.</p>
            </div>
            <Link to="/courses" className="shrink-0 text-sm font-semibold text-brand-700">
              Browse more
            </Link>
          </div>
          {enrolled.length ? (
            <div className="space-y-4">
              {enrolled.map((item, index) => (
                <article key={item.courseId} className="rounded-2xl border border-slate-100 p-4 transition hover:border-brand-200 hover:shadow-sm">
                  <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
                    <img
                      src={item.course.thumbnail}
                      alt=""
                      className="h-24 w-full shrink-0 rounded-xl object-cover sm:w-36"
                    />
                    <div className="min-w-0 flex-1">
                      <div className="flex flex-wrap items-start justify-between gap-2">
                        <div>
                          <p className="font-semibold">{item.course.title}</p>
                          <p className="text-sm text-slate-500">{getInstructor(item.course.instructorId)?.name}</p>
                        </div>
                        <span
                          className={`rounded-full px-2.5 py-1 text-xs font-semibold ${
                            item.progress >= 100 ? 'bg-brand-50 text-brand-800' : 'bg-sand text-ink'
                          }`}
                        >
                          {item.progress >= 100 ? 'Completed' : 'In progress'}
                        </span>
                      </div>
                      <p className="mt-3 text-xs font-semibold tracking-wide text-slate-400 uppercase">Learning progress</p>
                      <div className="mt-2 flex items-center gap-3">
                        <ProgressBar value={item.progress} delay={index * 120} className="flex-1" />
                        <span className="text-sm font-bold text-brand-700">{item.progress}%</span>
                      </div>
                      <Link
                        to={`/courses/${item.courseId}`}
                        className="mt-3 inline-flex text-sm font-semibold text-brand-700"
                      >
                        {item.progress >= 100 ? 'Review course' : 'Continue learning'}
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <p className="text-slate-500">
              You have not enrolled yet.{' '}
              <Link to="/courses" className="font-semibold text-brand-700">
                Explore the catalog
              </Link>
              .
            </p>
          )}
        </section>
      </Reveal>

      <div className="grid items-stretch gap-5 lg:grid-cols-2">
        <section id="recent" className="scroll-mt-24 flex h-full flex-col rounded-3xl bg-white p-6 shadow-sm">
          <h2 className="font-display mb-4 text-xl font-bold">Recently accessed courses</h2>
          {recent.length ? (
            <div className="space-y-3">
              {recent.map((item, index) => (
                <Link
                  key={item.courseId}
                  to={`/courses/${item.courseId}`}
                  className="block rounded-2xl p-2 transition hover:-translate-y-0.5 hover:bg-sand"
                >
                  <div className="flex items-center gap-3">
                    <img src={item.course.thumbnail} alt="" className="h-14 w-20 shrink-0 rounded-xl object-cover" />
                    <div className="min-w-0 flex-1">
                      <p className="font-medium">{item.course.title}</p>
                      <p className="text-xs text-slate-500">{item.lastAccessed}</p>
                      <div className="mt-2 flex items-center gap-2">
                        <ProgressBar value={item.progress} delay={index * 80} className="flex-1" />
                        <span className="text-xs font-bold text-brand-700">{item.progress}%</span>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <p className="text-sm text-slate-500">Open a course and it will show up here.</p>
          )}
        </section>

        <section id="completed" className="scroll-mt-24 flex h-full flex-col rounded-3xl bg-white p-6 shadow-sm">
          <h2 className="font-display mb-4 text-xl font-bold">Completed courses</h2>
          {completed.length ? (
            completed.map((item) => (
              <Link
                key={item.courseId}
                to={`/courses/${item.courseId}`}
                className="mb-3 block rounded-2xl bg-brand-50 p-4 last:mb-0"
              >
                <div className="flex items-start justify-between gap-3">
                  <p className="font-semibold">{item.course.title}</p>
                  <CheckCircle2 size={18} className="shrink-0 text-brand-700" />
                </div>
                <p className="mt-1 text-xs text-brand-800">Finished · certificate unlocked</p>
                <ProgressBar value={100} className="mt-3" />
              </Link>
            ))
          ) : (
            <p className="text-sm text-slate-500">Finish a course to see it here.</p>
          )}
        </section>
      </div>

      <section id="certificates" className="scroll-mt-24 rounded-3xl bg-white p-6 shadow-sm">
        <h2 className="font-display mb-4 text-xl font-bold">Certificates</h2>
        {certificates.length ? (
          <div className="grid gap-4 md:grid-cols-2">
            {certificates.map((cert) => {
              const course = getCourse(cert.courseId)
              if (!course) return null
              return (
                <article
                  key={cert.id}
                  className="rounded-2xl border border-gold/40 bg-linear-to-br from-sand to-white p-5"
                >
                  <p className="text-xs font-bold tracking-widest text-brand-700 uppercase">Certificate of completion</p>
                  <h3 className="font-display mt-2 text-lg font-bold">{course.title}</h3>
                  <p className="mt-3 text-sm text-slate-600">Awarded to {user.name}</p>
                  <p className="mt-2 text-sm text-slate-500">Issued {cert.issuedOn}</p>
                  <p className="mt-1 font-mono text-xs text-slate-400">{cert.id}</p>
                </article>
              )
            })}
          </div>
        ) : (
          <p className="text-sm text-slate-500">Complete a course to unlock your first certificate.</p>
        )}
      </section>

      <section id="profile" className="scroll-mt-24 rounded-3xl bg-white p-6 shadow-sm">
        <h2 className="font-display mb-4 text-xl font-bold">Profile information</h2>
        <div className="mb-6 flex items-center gap-4">
          <img src={user.avatar} alt="" className="h-16 w-16 rounded-full object-cover" />
          <div>
            <p className="font-semibold">{user.name}</p>
            <p className="text-sm text-slate-500">{user.email}</p>
          </div>
        </div>
        <form onSubmit={saveProfile} className="grid gap-4 md:grid-cols-2">
          <label className="text-sm font-medium">
            Full name
            <input
              name="name"
              value={profile.name}
              onChange={(event) => setProfile((prev) => ({ ...prev, name: event.target.value }))}
              className="mt-1 w-full rounded-2xl border border-slate-200 px-3 py-2.5 focus:border-brand-500"
              required
            />
          </label>
          <label className="text-sm font-medium">
            Headline
            <input
              name="title"
              value={profile.title}
              onChange={(event) => setProfile((prev) => ({ ...prev, title: event.target.value }))}
              className="mt-1 w-full rounded-2xl border border-slate-200 px-3 py-2.5 focus:border-brand-500"
            />
          </label>
          <label className="text-sm font-medium">
            Location
            <input
              name="location"
              value={profile.location}
              onChange={(event) => setProfile((prev) => ({ ...prev, location: event.target.value }))}
              className="mt-1 w-full rounded-2xl border border-slate-200 px-3 py-2.5 focus:border-brand-500"
            />
          </label>
          <label className="text-sm font-medium">
            Email
            <input
              value={user.email}
              readOnly
              className="mt-1 w-full rounded-2xl border border-slate-200 bg-sand px-3 py-2.5 text-slate-500"
            />
          </label>
          <label className="text-sm font-medium md:col-span-2">
            Bio
            <textarea
              name="bio"
              value={profile.bio}
              onChange={(event) => setProfile((prev) => ({ ...prev, bio: event.target.value }))}
              rows={3}
              className="mt-1 w-full rounded-2xl border border-slate-200 px-3 py-2.5 focus:border-brand-500"
            />
          </label>
          <div className="flex items-center gap-3">
            <Button type="submit">Save profile</Button>
            {saved ? <p className="text-sm font-medium text-brand-700">Profile saved.</p> : null}
          </div>
        </form>
      </section>
    </div>
  )
}
