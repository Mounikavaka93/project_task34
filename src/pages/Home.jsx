import { useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight, BookOpen, CheckCircle2, PlayCircle, Sparkles, Users } from 'lucide-react'
import Button from '../components/ui/Button'
import CourseCard from '../components/ui/CourseCard'
import HeroVisual from '../components/ui/HeroVisual'
import InstructorCard from '../components/ui/InstructorCard'
import Reveal, { Stagger, StaggerItem } from '../components/ui/Reveal'
import SectionHeader from '../components/ui/SectionHeader'
import SplitHeadline from '../components/ui/SplitHeadline'
import TestimonialCard from '../components/ui/TestimonialCard'
import { useAuth } from '../context/AuthContext'
import { categories, courses, instructors, platformStats, testimonials } from '../data/courses'
import { smoothScrollTo } from '../lib/smoothScroll'

const popular = courses.filter((course) => course.popular).slice(0, 6)
const featuredInstructors = instructors.slice(0, 4)

const highlights = [
  {
    icon: BookOpen,
    title: 'Courses built as products',
    text: 'Every path is a complete journey with projects, not a pile of disconnected clips.',
  },
  {
    icon: Users,
    title: 'Instructors who still ship',
    text: 'Learn from practitioners who teach the same standards they use at work.',
  },
  {
    icon: CheckCircle2,
    title: 'Progress you can see',
    text: 'Dashboards, certificates, and a weekly rhythm that keeps learning honest.',
  },
]

const fadeUp = {
  hidden: { opacity: 0, y: 22, filter: 'blur(8px)' },
  show: { opacity: 1, y: 0, filter: 'blur(0px)' },
}

export default function Home() {
  const { user } = useAuth()
  const location = useLocation()

  useEffect(() => {
    if (!location.hash) return
    const el = document.querySelector(location.hash)
    if (!el) return
    const timer = setTimeout(() => smoothScrollTo(el, { offset: -88 }), 80)
    return () => clearTimeout(timer)
  }, [location.hash])

  return (
    <div>
      <section id="home" className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(20,115,108,0.16),_transparent_42%),radial-gradient(circle_at_bottom_left,_rgba(244,185,66,0.18),_transparent_36%)]" />
        <motion.div
          aria-hidden
          className="animate-orbit pointer-events-none absolute top-16 -right-24 h-72 w-72 rounded-full border border-brand-200/70"
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
        />
        <div className="page-shell relative grid items-center gap-8 pt-8 pb-10 md:gap-10 md:pt-10 lg:grid-cols-2 lg:gap-12 lg:pt-12 lg:pb-12">
          <div>
            <motion.p
              variants={fadeUp}
              initial="hidden"
              animate="show"
              transition={{ duration: 0.6, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
              className="mb-4 inline-flex items-center gap-2 rounded-full bg-white px-3 py-1 text-xs font-semibold text-brand-800 shadow-sm"
            >
              <Sparkles size={14} className="text-gold" />
              Online classroom for focused learners
            </motion.p>
            <SplitHeadline
              text="Online learning that actually moves your work forward."
              delay={0.28}
              className="font-display text-[1.75rem] leading-[1.08] font-extrabold tracking-tight text-ink sm:text-4xl md:text-5xl lg:text-6xl"
            />
            <motion.p
              variants={fadeUp}
              initial="hidden"
              animate="show"
              transition={{ duration: 0.7, delay: 0.72, ease: [0.22, 1, 0.36, 1] }}
              className="mt-5 max-w-xl text-base leading-relaxed text-slate-600 sm:text-lg"
            >
              Explore expert-led courses in development, design, business, marketing, and data. Track your progress,
              earn certificates, and study with people who still make things.
            </motion.p>
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="show"
              transition={{ duration: 0.7, delay: 0.86, ease: [0.22, 1, 0.36, 1] }}
              className="mt-6 flex flex-col items-stretch gap-3 sm:flex-row sm:items-center"
            >
              <Link to="/courses" className="inline-flex w-full sm:w-auto">
                <Button size="lg" className="w-full sm:w-auto">
                  Explore Courses
                  <ArrowRight size={18} />
                </Button>
              </Link>
              <Link to={user ? '/dashboard' : '/register'} className="inline-flex w-full sm:w-auto">
                <Button variant="outline" size="lg" className="w-full sm:w-auto">
                  <PlayCircle size={18} />
                  Start Learning
                </Button>
              </Link>
            </motion.div>
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="show"
              transition={{ duration: 0.7, delay: 0.98, ease: [0.22, 1, 0.36, 1] }}
              className="mt-6 flex flex-wrap items-center gap-3 text-sm text-slate-500"
            >
              <div className="flex -space-x-2">
                {instructors.slice(0, 4).map((person) => (
                  <img
                    key={person.id}
                    src={person.avatar}
                    alt=""
                    className="h-8 w-8 rounded-full object-cover ring-2 ring-white"
                  />
                ))}
              </div>
              Trusted by 120,000 students worldwide
            </motion.div>
          </div>

          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 48, scale: 0.94, filter: 'blur(12px)' }}
            animate={{ opacity: 1, x: 0, scale: 1, filter: 'blur(0px)' }}
            transition={{ duration: 0.9, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          >
            <HeroVisual />
            <div className="absolute inset-x-4 bottom-4 z-10 grid grid-cols-2 gap-3 md:inset-x-auto md:left-6 md:w-[300px]">
              <motion.div
                className="rounded-2xl bg-white p-4 shadow-xl"
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: 0.95 }}
              >
                <p className="text-2xl font-extrabold text-brand-700">4.8</p>
                <p className="text-xs text-slate-500">Average course rating</p>
              </motion.div>
              <motion.div
                className="rounded-2xl bg-ink p-4 text-white shadow-xl"
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: 1.08 }}
              >
                <p className="text-2xl font-extrabold text-gold">Live</p>
                <p className="text-xs text-white/70">Progress that updates with you</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      <section id="stats" className="scroll-mt-24 bg-ink text-white">
        <div className="page-shell py-8 lg:py-10">
          <p className="mb-5 text-center text-xs font-semibold tracking-[0.28em] text-gold uppercase">Learnify in numbers</p>
          <Stagger className="grid grid-cols-2 gap-x-4 gap-y-6 md:grid-cols-4 md:gap-6" stagger={0.08}>
            {platformStats.map((stat) => (
              <StaggerItem key={stat.label} className="text-center">
                <p className="font-display text-3xl font-extrabold text-gold sm:text-4xl">{stat.value}</p>
                <p className="mt-1 text-sm text-white/70">{stat.label}</p>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <section className="page-shell section-y">
        <Reveal>
          <SectionHeader eyebrow="Browse by craft" title="Find your next classroom" />
        </Reveal>
        <Stagger className="grid grid-cols-2 gap-3 md:grid-cols-5" stagger={0.06}>
          {categories
            .filter((item) => item.id !== 'all')
            .map((category) => (
              <StaggerItem key={category.id}>
                <Link
                  to={`/courses?category=${category.id}`}
                  className="flex h-full min-h-[72px] items-center justify-center rounded-2xl border border-slate-200 bg-white px-3 py-4 text-center text-sm font-semibold transition duration-300 hover:-translate-y-1 hover:border-brand-300 hover:bg-brand-50 hover:shadow-lg md:px-4"
                >
                  {category.name}
                </Link>
              </StaggerItem>
            ))}
        </Stagger>
      </section>

      <section id="popular-courses" className="section-y scroll-mt-24 bg-white">
        <div className="page-shell">
          <Reveal>
            <SectionHeader
              eyebrow="Popular courses"
              title="Courses students finish"
              action={
                <Link to="/courses" className="inline-flex items-center gap-1 text-sm font-semibold text-brand-700 transition hover:gap-2">
                  View all courses <ArrowRight size={16} />
                </Link>
              }
            />
          </Reveal>
          <Stagger className="grid gap-5 md:grid-cols-2 lg:grid-cols-3" stagger={0.08}>
            {popular.map((course) => (
              <StaggerItem key={course.id} className="h-full">
                <CourseCard course={course} />
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <section className="page-shell section-y">
        <Reveal>
          <SectionHeader align="center" eyebrow="Why Learnify" title="A calmer way to study online" />
        </Reveal>
        <Stagger className="grid gap-5 md:grid-cols-3" stagger={0.1}>
          {highlights.map((item) => (
            <StaggerItem key={item.title} className="h-full">
              <article className="group flex h-full flex-col rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-100 transition duration-300 hover:-translate-y-1 hover:shadow-lg">
                <item.icon className="mb-4 text-brand-600 transition duration-300 group-hover:scale-110" />
                <h3 className="font-display text-xl font-bold">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{item.text}</p>
              </article>
            </StaggerItem>
          ))}
        </Stagger>
      </section>

      <section id="instructors" className="section-y scroll-mt-24 bg-sand">
        <div className="page-shell">
          <Reveal>
            <SectionHeader eyebrow="Featured instructors" title="Learn from people who still practice" />
          </Reveal>
          <Stagger className="grid gap-5 md:grid-cols-2 lg:grid-cols-4" stagger={0.08}>
            {featuredInstructors.map((instructor) => (
              <StaggerItem key={instructor.id} className="h-full">
                <InstructorCard instructor={instructor} />
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <section id="testimonials" className="section-y scroll-mt-24 page-shell">
        <Reveal>
          <SectionHeader eyebrow="Student testimonials" title="What it feels like to finish a path" />
        </Reveal>
        <Stagger className="grid gap-5 md:grid-cols-2 lg:grid-cols-4" stagger={0.08}>
          {testimonials.map((item) => (
            <StaggerItem key={item.id} className="h-full">
              <TestimonialCard item={item} />
            </StaggerItem>
          ))}
        </Stagger>
      </section>

      <section className="page-shell pb-12 lg:pb-16">
        <Reveal variant="scale">
          <div className="flex flex-col items-start justify-between gap-6 overflow-hidden rounded-[2rem] bg-brand-700 px-6 py-10 text-white sm:px-8 md:flex-row md:items-center">
            <div>
              <h2 className="font-display text-2xl font-bold md:text-3xl">Start this week, not someday.</h2>
              <p className="mt-2 max-w-xl text-white/80">
                Create a free account, enroll in a course, and watch your dashboard fill with real progress.
              </p>
            </div>
            <Link to={user ? '/dashboard' : '/register'} className="inline-flex w-full shrink-0 md:w-auto">
              <Button variant="gold" size="lg" className="w-full md:w-auto">
                {user ? 'Continue learning' : 'Create free account'}
              </Button>
            </Link>
          </div>
        </Reveal>
      </section>
    </div>
  )
}
