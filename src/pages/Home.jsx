import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import FeaturePillars from '../components/FeaturePillars'
import Footer from '../components/Footer'
import { StatCard, ProgressBars, PieChart } from '../components/Charts'
import { motion } from 'framer-motion'

export default function Home(){
  return (
    <div className="min-h-screen bg-[var(--nu-bg)]">
      <Navbar />
      <Hero />

      <section className="py-14 md:py-18">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-4">
            <StatCard label="Active students" value="12,482" delta="+4.2% this month" color="blue" />
            <StatCard label="Meals ordered" value="3,210" delta="+12%" color="green" />
            <StatCard label="Court reservations" value="864" delta="+6%" color="purple" />
            <StatCard label="Internship matches" value="126" delta="+9%" color="amber" />
          </div>

          <div className="mt-6 grid lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2">
              <ProgressBars data={[{ label: 'Degree completion', value: 62 }, { label: 'This semester', value: 48 }, { label: 'Career readiness', value: 35 }]} />
            </div>
            <PieChart segments={[32, 18, 25, 25]} colors={["#00C8FF","#002E6D","#E9E2D0","#66E0FF"]} label="Time allocation" />
          </div>
        </div>
      </section>

      <FeaturePillars />

      <section className="py-14 md:py-18">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="relative overflow-hidden rounded-3xl border border-black/10 bg-white shadow-sm">
            <img src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=2000&auto=format&fit=crop" alt="Campus" className="h-72 w-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-white via-white/60 to-transparent" />
            <div className="absolute bottom-0 p-6">
              <div className="rounded-full bg-white/80 backdrop-blur px-3 py-1 text-xs inline-block">Student Life</div>
              <h3 className="mt-2 text-2xl font-semibold">A vibrant campus community</h3>
              <p className="text-neutral-600 max-w-2xl">Study, collaborate, and grow with a supportive network. Events, clubs, and experiences designed for you.</p>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
