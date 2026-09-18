import { Quote } from 'lucide-react'

export default function TestimonialCard({ item }) {
  return (
    <figure className="group flex h-full flex-col rounded-3xl border border-slate-200/70 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1.5 hover:border-brand-200 hover:shadow-lg">
      <Quote className="mb-4 text-brand-400 transition duration-300 group-hover:rotate-6 group-hover:text-brand-600" size={28} />
      <blockquote className="flex-1 text-[15px] leading-relaxed text-slate-600">“{item.quote}”</blockquote>
      <figcaption className="mt-6 flex items-center gap-3">
        <img src={item.avatar} alt={item.name} className="h-11 w-11 rounded-full object-cover ring-2 ring-transparent transition group-hover:ring-brand-200" />
        <div>
          <p className="font-semibold text-ink">{item.name}</p>
          <p className="text-xs text-slate-500">{item.role}</p>
          {item.course ? <p className="mt-0.5 text-xs font-medium text-brand-700">{item.course}</p> : null}
        </div>
      </figcaption>
    </figure>
  )
}
