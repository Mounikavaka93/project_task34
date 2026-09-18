import { Link } from 'react-router-dom'
import { Clock3 } from 'lucide-react'
import { getInstructor } from '../../data/courses'
import StarRating from './StarRating'

export default function CourseCard({ course }) {
  const instructor = getInstructor(course.instructorId)
  const categoryLabel = course.category.replace('-', ' ')

  return (
    <Link
      to={`/courses/${course.id}`}
      className="group flex h-full flex-col overflow-hidden rounded-3xl border border-slate-200/80 bg-white shadow-sm transition duration-300 hover:-translate-y-2 hover:border-brand-200 hover:shadow-xl hover:shadow-brand-700/10"
    >
      <div className="relative overflow-hidden">
        <img
          src={course.thumbnail}
          alt={course.title}
          className="h-44 w-full object-cover md:h-48 transition duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-linear-to-t from-ink/50 to-transparent opacity-60 transition group-hover:opacity-80" />
        <span className="absolute top-3 left-3 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-brand-800 capitalize transition duration-300 group-hover:scale-105">
          {categoryLabel}
        </span>
        <span
          className={`absolute top-3 right-3 rounded-full px-3 py-1 text-xs font-bold transition duration-300 group-hover:scale-105 ${
            course.isFree ? 'bg-brand-600 text-white' : 'bg-ink text-white'
          }`}
        >
          {course.isFree ? 'Free' : `$${course.price}`}
        </span>
      </div>
      <div className="flex flex-1 flex-col gap-3 p-5">
        <h3 className="font-display line-clamp-2 min-h-[3.25rem] text-lg leading-snug font-bold text-ink transition group-hover:text-brand-700">
          {course.title}
        </h3>
        <p className="text-sm text-slate-500">
          {instructor?.name ? `By ${instructor.name}` : 'Learnify instructor'}
        </p>
        <div className="flex flex-wrap items-center gap-2">
          <StarRating value={course.rating} showValue />
          <span className="text-sm text-slate-400">({course.reviews.toLocaleString()} reviews)</span>
        </div>
        <div className="mt-auto flex items-center justify-between gap-3 border-t border-slate-100 pt-3 text-sm">
          <span className="inline-flex items-center gap-1.5 text-slate-500 transition group-hover:text-brand-700">
            <Clock3 size={15} className="transition duration-300 group-hover:rotate-12" />
            {course.duration}
          </span>
          <span className={`font-bold ${course.isFree ? 'text-brand-700' : 'text-ink'}`}>
            {course.isFree ? 'Free' : `$${course.price}`}
          </span>
        </div>
      </div>
    </Link>
  )
}
