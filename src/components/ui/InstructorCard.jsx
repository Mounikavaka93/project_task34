import { Link } from 'react-router-dom'
import { Star, Users } from 'lucide-react'

export default function InstructorCard({ instructor }) {
  return (
    <article className="group flex h-full flex-col rounded-3xl border border-slate-200/80 bg-white p-6 text-center shadow-sm transition duration-300 hover:-translate-y-2 hover:border-brand-200 hover:shadow-xl hover:shadow-brand-700/10">
      <div className="mx-auto mb-4 h-24 w-24 overflow-hidden rounded-full ring-4 ring-brand-50 transition duration-300 group-hover:ring-brand-200">
        <img
          src={instructor.avatar}
          alt={instructor.name}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
        />
      </div>
      <h3 className="font-display text-lg font-bold text-ink">{instructor.name}</h3>
      <p className="mt-1 min-h-[2.5rem] text-sm text-brand-700">{instructor.title}</p>
      <div className="mt-4 flex items-center justify-center gap-4 text-xs text-slate-500">
        <span className="inline-flex items-center gap-1">
          <Star size={13} className="fill-gold text-gold transition group-hover:scale-110" />
          {instructor.rating}
        </span>
        <span className="inline-flex items-center gap-1">
          <Users size={13} className="transition group-hover:text-brand-700" />
          {instructor.students.toLocaleString()}
        </span>
      </div>
      <div className="mt-4 flex min-h-[3.25rem] flex-wrap justify-center gap-2">
        {instructor.expertise.map((skill) => (
          <span key={skill} className="rounded-full bg-sand px-2.5 py-1 text-[11px] font-medium text-ink-soft transition group-hover:bg-brand-50">
            {skill}
          </span>
        ))}
      </div>
      <Link
        to={`/courses?instructor=${instructor.id}`}
        className="mt-auto inline-flex pt-5 text-sm font-semibold text-brand-700 transition hover:gap-1 hover:text-brand-500"
      >
        View courses
      </Link>
    </article>
  )
}
