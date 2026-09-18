import { useEffect, useMemo, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { Search, SlidersHorizontal, X } from 'lucide-react'
import CourseCard from '../components/ui/CourseCard'
import Reveal from '../components/ui/Reveal'
import { categories, courses, getInstructor, instructors } from '../data/courses'

export default function Courses() {
  const [params, setParams] = useSearchParams()
  const instructorFilter = params.get('instructor') || ''
  const [query, setQuery] = useState(params.get('q') || '')
  const [category, setCategory] = useState(params.get('category') || 'all')
  const [price, setPrice] = useState('all')
  const [sort, setSort] = useState('popular')

  useEffect(() => {
    setCategory(params.get('category') || 'all')
    setQuery(params.get('q') || '')
  }, [params])

  const instructorName = instructors.find((item) => item.id === instructorFilter)?.name

  const filtered = useMemo(() => {
    const term = query.trim().toLowerCase()
    let list = courses.filter((course) => {
      const instructor = getInstructor(course.instructorId)
      const haystack = `${course.title} ${course.category.replace('-', ' ')} ${instructor?.name || ''}`.toLowerCase()
      const matchesQuery = !term || haystack.includes(term)
      const matchesCategory = category === 'all' || course.category === category
      const matchesPrice = price === 'all' || (price === 'free' ? course.isFree : !course.isFree)
      const matchesInstructor = !instructorFilter || course.instructorId === instructorFilter
      return matchesQuery && matchesCategory && matchesPrice && matchesInstructor
    })

    if (sort === 'rating') list = [...list].sort((a, b) => b.rating - a.rating)
    if (sort === 'price-low') list = [...list].sort((a, b) => a.price - b.price)
    if (sort === 'price-high') list = [...list].sort((a, b) => b.price - a.price)
    if (sort === 'popular') list = [...list].sort((a, b) => b.students - a.students)
    return list
  }, [query, category, price, sort, instructorFilter])

  const writeParams = (patch) => {
    const next = new URLSearchParams(params)
    Object.entries(patch).forEach(([key, value]) => {
      if (!value || value === 'all') next.delete(key)
      else next.set(key, value)
    })
    setParams(next, { replace: true })
  }

  const updateCategory = (next) => {
    setCategory(next)
    writeParams({ category: next === 'all' ? '' : next })
  }

  const updateQuery = (value) => {
    setQuery(value)
    writeParams({ q: value.trim() })
  }

  const resetFilters = () => {
    setQuery('')
    setCategory('all')
    setPrice('all')
    setSort('popular')
    setParams({})
  }

  return (
    <div className="pb-12 lg:pb-16">
      <section className="bg-ink text-white">
        <div className="page-shell py-10 lg:py-12">
          <Reveal>
            <p className="text-sm font-semibold tracking-wide text-gold uppercase">Course listing</p>
            <h1 className="font-display mt-2 max-w-3xl text-[1.75rem] leading-tight font-extrabold tracking-tight md:text-4xl">Explore courses worth finishing</h1>
            <p className="mt-3 max-w-2xl text-white/70">
              Search the catalog, filter by category, and open any card for curriculum, reviews, and enrollment.
            </p>
          </Reveal>
        </div>
      </section>

      <div className="page-shell">
        <Reveal variant="down" className="relative z-10 -mt-6">
          <form
            className="rounded-3xl bg-white p-4 shadow-lg shadow-slate-200/80"
            onSubmit={(event) => event.preventDefault()}
            role="search"
          >
            <div className="flex flex-col gap-3 lg:flex-row lg:items-stretch">
              <label className="relative min-w-0 flex-1">
                <span className="sr-only">Search courses</span>
                <Search className="absolute top-1/2 left-3 -translate-y-1/2 text-slate-400" size={18} />
                <input
                  type="search"
                  value={query}
                  onChange={(event) => updateQuery(event.target.value)}
                  placeholder="Search by course, instructor, or skill"
                  className="h-12 w-full rounded-2xl border border-slate-200 bg-sand py-3 pr-10 pl-10 text-sm transition focus:border-brand-500"
                />
                {query ? (
                  <button
                    type="button"
                    onClick={() => updateQuery('')}
                    className="absolute top-1/2 right-3 -translate-y-1/2 text-slate-400 hover:text-ink"
                    aria-label="Clear search"
                  >
                    <X size={16} />
                  </button>
                ) : null}
              </label>
              <div className="flex flex-col gap-3 sm:flex-row">
                <select
                  value={price}
                  onChange={(event) => setPrice(event.target.value)}
                  className="h-12 rounded-2xl border border-slate-200 bg-white px-3 text-sm sm:min-w-[150px]"
                  aria-label="Filter by price"
                >
                  <option value="all">All prices</option>
                  <option value="free">Free</option>
                  <option value="paid">Paid</option>
                </select>
                <select
                  value={sort}
                  onChange={(event) => setSort(event.target.value)}
                  className="h-12 rounded-2xl border border-slate-200 bg-white px-3 text-sm sm:min-w-[180px]"
                  aria-label="Sort courses"
                >
                  <option value="popular">Most popular</option>
                  <option value="rating">Highest rated</option>
                  <option value="price-low">Price: low to high</option>
                  <option value="price-high">Price: high to low</option>
                </select>
              </div>
            </div>
          </form>
        </Reveal>

        <div className="mt-6">
          <p className="mb-3 text-sm font-semibold text-ink">Filter by category</p>
          <div className="flex flex-wrap gap-2">
            {categories.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => updateCategory(item.id)}
                className={`rounded-full px-4 py-2 text-sm font-semibold capitalize transition duration-200 hover:-translate-y-0.5 ${
                  category === item.id
                    ? 'bg-brand-600 text-white shadow-md'
                    : 'bg-white text-slate-600 hover:bg-brand-50'
                }`}
              >
                {item.name}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-5 flex items-center justify-between gap-3 text-sm text-slate-500">
          <p className="inline-flex items-center gap-2">
            <SlidersHorizontal size={16} />
            {filtered.length} course{filtered.length === 1 ? '' : 's'}
            {category !== 'all' ? ` in ${categories.find((item) => item.id === category)?.name}` : ''}
            {instructorName ? ` by ${instructorName}` : ''}
            {query.trim() ? ` matching “${query.trim()}”` : ''}
          </p>
          {instructorFilter || query || category !== 'all' || price !== 'all' ? (
            <button type="button" className="font-semibold text-brand-700" onClick={resetFilters}>
              Reset filters
            </button>
          ) : null}
        </div>

        {filtered.length ? (
          <div className="mt-5 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
            {filtered.map((course, index) => (
              <Reveal key={course.id} delay={Math.min(index * 0.04, 0.24)} className="h-full">
                <CourseCard course={course} />
              </Reveal>
            ))}
          </div>
        ) : (
          <div className="mt-16 rounded-3xl bg-white px-6 py-16 text-center">
            <p className="font-display text-xl font-bold">No courses match that search</p>
            <p className="mt-2 text-slate-500">Try another keyword or reset the filters.</p>
            <button
              type="button"
              onClick={resetFilters}
              className="mt-5 text-sm font-semibold text-brand-700"
            >
              Show all courses
            </button>
          </div>
        )}
      </div>
    </div>
  )
}
