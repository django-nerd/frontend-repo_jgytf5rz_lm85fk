import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { motion } from 'framer-motion'

export default function Dashboard(){
  return (
    <div className="min-h-screen bg-[var(--nu-bg)]">
      <Navbar />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-3xl font-semibold tracking-tight">Student Dashboard</h1>
        <p className="mt-2 text-neutral-600">Quick glance at your week.</p>

        <div className="mt-8 grid lg:grid-cols-3 gap-6">
          <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="rounded-2xl border border-black/10 bg-white p-5 shadow-sm">
            <h3 className="font-medium">Today</h3>
            <div className="mt-3 space-y-2 text-sm">
              <div className="rounded-lg bg-neutral-50 p-3">10:00 — CSEN 301</div>
              <div className="rounded-lg bg-neutral-50 p-3">12:00 — Study group</div>
              <div className="rounded-lg bg-neutral-50 p-3">15:00 — Career fair prep</div>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="rounded-2xl border border-black/10 bg-white p-5 shadow-sm">
            <h3 className="font-medium">Actions</h3>
            <div className="mt-3 grid gap-2 text-sm">
              {['Finish course plan','Reserve court','Apply for internship'].map(x => (
                <button key={x} className="rounded-lg border border-black/10 px-3 py-2 text-left hover:border-[var(--nu-blue)]/40">{x}</button>
              ))}
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="rounded-2xl border border-black/10 bg-white p-5 shadow-sm">
            <h3 className="font-medium">Messages</h3>
            <div className="mt-3 space-y-2 text-sm">
              {['Advisor: Meeting at 2pm','Career: Resume tips ready','Kitchen: Order pickup 12:20'].map(m => (
                <div key={m} className="rounded-lg bg-neutral-50 p-3">{m}</div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
      <Footer />
    </div>
  )
}
