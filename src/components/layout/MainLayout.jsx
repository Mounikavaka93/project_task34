import Navbar from './Navbar'
import Footer from './Footer'
import PageTransition from '../motion/PageTransition'

export default function MainLayout() {
  return (
    <div className="flex min-h-svh flex-col overflow-x-clip">
      <Navbar />
      <main className="flex-1">
        <PageTransition className="h-full" />
      </main>
      <Footer />
    </div>
  )
}
