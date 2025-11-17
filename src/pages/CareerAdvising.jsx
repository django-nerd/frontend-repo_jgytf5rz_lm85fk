import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { motion } from 'framer-motion'

export default function CareerAdvising(){
  return (
    <div className="min-h-screen bg-[var(--nu-bg)]">
      <Navbar />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-3xl font-semibold tracking-tight">Career Advising</h1>
        <p className="mt-2 text-neutral-600">Internships, skill insights, and application resources.</p>

        <div className="mt-8 grid lg:grid-cols-3 gap-6">
          <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="rounded-2xl border border-black/10 bg-white p-5 shadow-sm">
            <h3 className="font-medium">Internship listings</h3>
            <div className="mt-3 space-y-3">
              {["Frontend Intern @ TechCo","Data Analyst Intern @ RiverAI","Product Intern @ CampusLab"].map((t,i) => (
                <div key={i} className="rounded-lg border border-black/10 p-3">
                  <div className="font-medium">{t}</div>
                  <div className="text-xs text-neutral-600">Cairo · Hybrid · Stipend</div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="rounded-2xl border border-black/10 bg-white p-5 shadow-sm">
            <h3 className="font-medium">Skill gap chart</h3>
            <div className="mt-3 grid grid-cols-5 gap-2">
              {['JS','TS','DSA','SQL','ML'].map((s,i) => (
                <div key={s} className="h-24 rounded bg-gradient-to-b from-[var(--nu-cyan)]/30 to-[var(--nu-blue)]/20 relative">
                  <div className="absolute bottom-1 inset-x-0 text-center text-[10px]">{s}</div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="rounded-2xl border border-black/10 bg-white p-5 shadow-sm">
            <h3 className="font-medium">Resume & Interview</h3>
            <div className="mt-3 grid gap-3 text-sm">
              {['Resume template','Interview prep guide','Portfolio tips'].map(x => (
                <div key={x} className="rounded-lg bg-neutral-50 p-3">{x}</div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
      <Footer />
    </div>
  )
}
