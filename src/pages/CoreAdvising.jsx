import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { motion } from 'framer-motion'
import { ProgressBars, StatCard, PieChart } from '../components/Charts'

export default function CoreAdvising(){
  return (
    <div className="min-h-screen bg-[var(--nu-bg)]">
      <Navbar />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-3xl font-semibold tracking-tight">Core Advising</h1>
        <p className="mt-2 text-neutral-600">Concepts for prerequisite lookup, recommendations, and study plans.</p>

        <div className="mt-8 grid lg:grid-cols-3 gap-6">
          <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="rounded-2xl border border-black/10 bg-white p-5 shadow-sm">
            <h3 className="font-medium">Course prerequisite checker</h3>
            <input placeholder="e.g., CSEN 401" className="mt-3 w-full rounded-lg border border-black/10 px-3 py-2 text-sm" />
            <div className="mt-4 space-y-2 text-sm">
              <div className="rounded-lg bg-neutral-50 p-3">Needs: CSEN 201, MATH 102</div>
              <div className="rounded-lg bg-emerald-50 p-3">Eligible next: CSEN 402</div>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="rounded-2xl border border-black/10 bg-white p-5 shadow-sm">
            <h3 className="font-medium">Recommendation cards</h3>
            <div className="mt-3 grid gap-3">
              {["Take Algorithms II","Join Data Club","Apply for TA"].map((t,i) => (
                <div key={i} className="rounded-lg border border-black/10 p-3 bg-gradient-to-r from-indigo-50 to-white">
                  <div className="font-medium">{t}</div>
                  <div className="text-xs text-neutral-600">Based on your progress</div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="rounded-2xl border border-black/10 bg-white p-5 shadow-sm">
            <h3 className="font-medium">Study plan timeline</h3>
            <div className="mt-3 grid grid-cols-2 gap-3 text-sm">
              {["Fall 24","Spring 25","Fall 25","Spring 26"].map((s,i) => (
                <div key={i} className="rounded-lg bg-white ring-1 ring-black/5 p-3">
                  <div className="font-medium">{s}</div>
                  <div className="mt-2 space-y-1">
                    {['CSEN 301','CSEN 321','MATH 210'].slice(0, 1 + (i%3)).map(c => (
                      <div key={c} className="rounded bg-[var(--nu-cyan)]/10 text-[var(--nu-blue)] px-2 py-1 inline-block mr-1">{c}</div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        <div className="mt-8 grid md:grid-cols-4 gap-4">
          <StatCard label="Credits completed" value="84 / 132" delta="+15 this year" color="green" />
          <StatCard label="Core courses done" value="12 / 20" delta="+2" color="blue" />
          <StatCard label="Electives" value="4 / 8" delta="—" color="amber" />
          <PieChart segments={[50,30,20]} colors={["#002E6D","#00C8FF","#E9E2D0"]} label="Focus areas" />
        </div>
      </div>
      <Footer />
    </div>
  )
}
