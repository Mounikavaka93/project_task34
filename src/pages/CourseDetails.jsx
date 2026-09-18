import { useMemo, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { BookOpen, Check, ChevronDown, Clock3, Globe, PlayCircle, Users } from 'lucide-react'
import Button from '../components/ui/Button'
import CourseCard from '../components/ui/CourseCard'
import Reveal from '../components/ui/Reveal'
import StarRating from '../components/ui/StarRating'
import { useAuth } from '../context/AuthContext'
import { courses, getCourse, getInstructor } from '../data/courses'

export default function CourseDetails() {
  const { id } = useParams()
  const course = getCourse(id)
  const instructor = course ? getInstructor(course.instructorId) : null
  const { user, enroll } = useAuth()
  const navigate = useNavigate()
  const [openModule, setOpenModule] = useState(0)
  const [message, setMessage] = useState('')

  const related = useMemo(
    () => courses.filter((item) => item.category === course?.category && item.id !== course?.id).slice(0, 3),
    [course],
  )

  const ratingBars = useMemo(() => {
    if (!course) return []
    const total = course.reviewsList.length || 1
    return [5, 4, 3, 2, 1].map((stars) => {
      const count = course.reviewsList.filter((review) => Math.round(review.rating) === stars).length
      return { stars, count, percent: Math.round((count / total) * 100) }
    })
  }, [course])

  if (!course || !instructor) {
    return (
      <div className="page-shell py-24 text-center">
        <h1 className="font-display text-3xl font-bold">Course not found</h1>
        <Link to="/courses" className="mt-4 inline-block font-semibold text-brand-700">
          Back to catalog
        </Link>
      </div>
    )
  }

  const enrolled = user?.enrolled?.some((item) => item.courseId === course.id)
  const moduleCount = course.curriculum.length
  const lessonCount = course.curriculum.reduce((sum, module) => sum + module.lessons.length, 0)
  const categoryLabel = course.category.replace('-', ' ')

  const handleEnroll = () => {
    if (enrolled) {
      navigate('/dashboard')
      return
    }
    const result = enroll(course.id)
    if (result.needsAuth) {
      navigate('/login', { state: { from: `/courses/${course.id}` } })
      return
    }
    setMessage(
      result.already
        ? 'You are already enrolled. Continue in your dashboard.'
        : 'You are enrolled. The course is now on your dashboard.',
    )
  }

  const enrollCard = (
    <aside className="rounded-3xl bg-white p-6 text-ink shadow-2xl">
      <img src={course.thumbnail} alt={course.title} className="mb-4 h-40 w-full rounded-2xl object-cover" />
      <p className="font-display text-3xl font-extrabold">
        {course.isFree ? 'Free' : `$${course.price}`}
        {!course.isFree ? (
          <span className="ml-2 text-base font-medium text-slate-400 line-through">${course.originalPrice}</span>
        ) : null}
      </p>
      <Button className="mt-4 w-full" size="lg" onClick={handleEnroll}>
        {enrolled ? 'Continue learning' : 'Enroll Now'}
      </Button>
      {message ? <p className="mt-3 text-sm text-brand-700">{message}</p> : null}
      {enrolled ? (
        <Link to="/dashboard" className="mt-2 block text-center text-sm font-semibold text-brand-700">
          Open dashboard
        </Link>
      ) : null}
      <ul className="mt-5 space-y-2 text-sm text-slate-600">
        <li className="flex items-center gap-2">
          <Clock3 size={16} className="shrink-0" /> {course.duration} · {course.lectures} lectures
        </li>
        <li className="flex items-center gap-2">
          <BookOpen size={16} className="shrink-0" /> {moduleCount} modules · {lessonCount} lessons
        </li>
        <li className="flex items-center gap-2">
          <PlayCircle size={16} className="shrink-0" /> {course.level}
        </li>
        <li className="flex items-center gap-2">
          <Globe size={16} className="shrink-0" /> {course.language} · Updated {course.lastUpdated}
        </li>
      </ul>
    </aside>
  )

  return (
    <div className="pb-28 lg:pb-20">
      <section className="relative overflow-hidden bg-ink text-white">
        <img src={course.thumbnail} alt="" className="absolute inset-0 h-full w-full object-cover opacity-30" />
        <div className="absolute inset-0 bg-linear-to-r from-ink via-ink/88 to-ink/45" />
        <div className="page-shell relative grid items-start gap-8 py-10 lg:grid-cols-[minmax(0,1.2fr)_minmax(280px,0.8fr)] lg:gap-10 lg:py-12">
          <Reveal>
            <nav className="mb-4 text-sm text-white/60">
              <Link to="/courses" className="hover:text-gold">
                Courses
              </Link>
              <span className="mx-2">/</span>
              <Link to={`/courses?category=${course.category}`} className="capitalize hover:text-gold">
                {categoryLabel}
              </Link>
            </nav>
            <p className="text-sm font-semibold tracking-wide text-gold uppercase">{categoryLabel}</p>
            <h1 className="font-display mt-3 text-[1.75rem] leading-tight font-extrabold tracking-tight md:text-4xl lg:text-5xl">{course.title}</h1>
            <p className="mt-4 max-w-2xl text-white/80">{course.description}</p>
            <div className="mt-5 flex flex-wrap items-center gap-4 text-sm">
              <StarRating value={course.rating} showValue className="text-white" />
              <span className="text-white/70">{course.reviews.toLocaleString()} reviews</span>
              <span className="inline-flex items-center gap-1">
                <Users size={16} /> {course.students.toLocaleString()} students
              </span>
            </div>
            <div className="mt-6 flex items-center gap-3">
              <img src={instructor.avatar} alt={instructor.name} className="h-12 w-12 rounded-full object-cover" />
              <div>
                <p className="text-xs tracking-wide text-white/60 uppercase">Instructor</p>
                <p className="font-semibold">{instructor.name}</p>
                <p className="text-sm text-white/70">{instructor.title}</p>
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.12} variant="right" className="hidden lg:block">
            {enrollCard}
          </Reveal>
        </div>
      </section>

      <div className="page-shell pt-6 pb-12 lg:pt-10">
        <div className="lg:hidden">
          <div className="-mt-14 mb-8">{enrollCard}</div>
        </div>
        <div className="grid items-start gap-6 lg:grid-cols-[minmax(0,1.3fr)_minmax(260px,0.7fr)] lg:gap-8">
          <div className="space-y-6">
          <Reveal>
            <section id="description" className="rounded-3xl bg-white p-6 sm:p-8">
              <h2 className="font-display text-2xl font-bold">Course description</h2>
              <p className="mt-4 text-[15px] leading-relaxed text-slate-600">{course.description}</p>
              <p className="mt-3 text-[15px] leading-relaxed text-slate-600">
                This {course.level.toLowerCase()} path includes {course.lectures} lectures across {moduleCount} modules,
                taught in {course.language}. Last updated {course.lastUpdated}.
              </p>
            </section>
          </Reveal>

          <Reveal>
            <section id="outcomes" className="rounded-3xl bg-white p-6 sm:p-8">
              <h2 className="font-display text-2xl font-bold">What students will learn</h2>
              <ul className="mt-5 grid gap-3 md:grid-cols-2">
                {course.learningOutcomes.map((item) => (
                  <li key={item} className="flex gap-2 text-sm text-slate-600">
                    <Check className="mt-0.5 shrink-0 text-brand-600" size={16} />
                    {item}
                  </li>
                ))}
              </ul>
            </section>
          </Reveal>

          <Reveal>
            <section id="curriculum" className="rounded-3xl bg-white p-6 sm:p-8">
              <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
                <h2 className="font-display text-2xl font-bold">Course curriculum</h2>
                <p className="text-sm text-slate-500">
                  {moduleCount} modules · {lessonCount} lessons · {course.duration}
                </p>
              </div>
              <div className="mt-5 divide-y divide-slate-100 overflow-hidden rounded-2xl border border-slate-100">
                {course.curriculum.map((module, index) => (
                  <div key={module.title}>
                    <button
                      className="flex w-full items-center justify-between gap-4 bg-sand/60 px-4 py-4 text-left transition hover:bg-sand"
                      onClick={() => setOpenModule(openModule === index ? -1 : index)}
                      aria-expanded={openModule === index}
                    >
                      <span>
                        <span className="block text-xs font-semibold tracking-wide text-brand-700 uppercase">
                          Module {index + 1}
                        </span>
                        <span className="font-semibold text-ink">{module.title}</span>
                      </span>
                      <span className="flex shrink-0 items-center gap-3 text-sm text-slate-500">
                        {module.lessons.length} lessons · {module.duration}
                        <ChevronDown className={`transition ${openModule === index ? 'rotate-180' : ''}`} size={16} />
                      </span>
                    </button>
                    <div
                      className={`grid transition-all duration-300 ${
                        openModule === index ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                      }`}
                    >
                      <div className="overflow-hidden">
                        {module.lessons.map((lesson, lessonIndex) => (
                          <div key={lesson.title} className="flex items-center justify-between gap-4 px-4 py-3 text-sm transition hover:bg-brand-50/60">
                            <span className="inline-flex min-w-0 items-center gap-2">
                              <PlayCircle size={15} className="shrink-0 text-brand-600" />
                              <span>
                                {lessonIndex + 1}. {lesson.title}
                              </span>
                            </span>
                            <span className="shrink-0 text-slate-400">{lesson.duration}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </Reveal>

          <Reveal>
            <section id="reviews" className="rounded-3xl bg-white p-6 sm:p-8">
              <h2 className="font-display text-2xl font-bold">Reviews and ratings</h2>
              <div className="mt-5 grid gap-6 md:grid-cols-[160px_1fr] md:items-center">
                <div className="text-center md:text-left">
                  <p className="font-display text-4xl font-extrabold md:text-5xl">{course.rating.toFixed(1)}</p>
                  <StarRating value={course.rating} className="mt-2 justify-center md:justify-start" />
                  <p className="mt-2 text-sm text-slate-500">{course.reviews.toLocaleString()} student reviews</p>
                </div>
                <div className="space-y-2">
                  {ratingBars.map((bar) => (
                    <div key={bar.stars} className="flex items-center gap-3 text-sm">
                      <span className="w-10 shrink-0 text-slate-500">{bar.stars} star</span>
                      <div className="h-2 flex-1 overflow-hidden rounded-full bg-slate-100">
                        <div className="h-full rounded-full bg-gold" style={{ width: `${bar.percent}%` }} />
                      </div>
                      <span className="w-8 text-right text-slate-400">{bar.count}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="mt-6 space-y-5">
                {course.reviewsList.map((review) => (
                  <article key={review.name} className="border-t border-slate-100 pt-5">
                    <div className="flex items-center gap-3">
                      <img src={review.avatar} alt="" className="h-10 w-10 rounded-full object-cover" />
                      <div>
                        <p className="font-semibold">{review.name}</p>
                        <p className="text-xs text-slate-400">{review.date}</p>
                      </div>
                    </div>
                    <div className="mt-2">
                      <StarRating value={review.rating} />
                    </div>
                    <p className="mt-2 text-sm text-slate-600">{review.text}</p>
                  </article>
                ))}
              </div>
            </section>
          </Reveal>
        </div>

        <div className="space-y-6 lg:sticky lg:top-28">
          <Reveal variant="right">
            <section id="instructor" className="rounded-3xl bg-white p-6">
              <h2 className="font-display text-xl font-bold">Instructor information</h2>
              <div className="mt-4 flex items-center gap-3">
                <img src={instructor.avatar} alt={instructor.name} className="h-16 w-16 shrink-0 rounded-full object-cover" />
                <div>
                  <p className="font-semibold">{instructor.name}</p>
                  <p className="text-sm text-slate-500">{instructor.title}</p>
                </div>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-slate-600">{instructor.bio}</p>
              <p className="mt-3 text-xs text-slate-500">
                {instructor.students.toLocaleString()} students · {instructor.courses} courses · {instructor.rating} rating
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {instructor.expertise.map((skill) => (
                  <span key={skill} className="rounded-full bg-sand px-2.5 py-1 text-[11px] font-medium text-ink-soft">
                    {skill}
                  </span>
                ))}
              </div>
              <Link
                to={`/courses?instructor=${instructor.id}`}
                className="mt-5 inline-flex text-sm font-semibold text-brand-700"
              >
                View more courses by {instructor.name.split(' ')[0]}
              </Link>
            </section>
          </Reveal>
        </div>
        </div>

        {related.length ? (
          <section className="mt-10">
            <h2 className="font-display mb-5 text-2xl font-bold">Related courses</h2>
            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {related.map((item) => (
                <CourseCard key={item.id} course={item} />
              ))}
            </div>
          </section>
        ) : null}
      </div>

      <div className="fixed right-0 bottom-0 left-0 z-40 border-t border-slate-200 bg-white/95 px-4 py-3 backdrop-blur lg:hidden">
        <div className="page-shell flex items-center justify-between gap-3">
          <p className="font-display text-lg font-extrabold">
            {course.isFree ? 'Free' : `$${course.price}`}
          </p>
          <Button onClick={handleEnroll}>{enrolled ? 'Continue learning' : 'Enroll Now'}</Button>
        </div>
      </div>
    </div>
  )
}
