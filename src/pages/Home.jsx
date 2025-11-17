import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import FeaturePillars from '../components/FeaturePillars'
import Footer from '../components/Footer'

export default function Home(){
  return (
    <div className="min-h-screen bg-[var(--nu-bg)]">
      <Navbar />
      <Hero />
      <FeaturePillars />
      <Footer />
    </div>
  )
}
