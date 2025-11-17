import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { motion } from 'framer-motion'
import { StatCard } from '../components/Charts'

function Timetable(){
  const days = ['Mon','Tue','Wed','Thu','Fri']
  const hours = ['8','9','10','11','12','1','2','3','4']
  return (
    <div className="grid grid-cols-6 gap-2">
      <div />
      {days.map(d => <div key={d} className="text-xs text-neutral-500 text-center">{d}</div>)}
      {hours.map(h => (
        <>
          <div key={`h-${h}`} className="text-xs text-neutral-500 text-right pr-2 col-span-1">{h}</div>
          {days.map(d => (
            <div key={`${d}-${h}`} className="h-16 rounded-lg bg-white ring-1 ring-black/5 relative overflow-hidden">
              {(d==='Mon' && h==='10') && <div className="absolute inset-1 rounded bg-gradient-to-r from-[var(--nu-blue)]/20 to-[var(--nu-cyan)]/20 text-[var(--nu-blue)] text-[10px] p-1">CSEN 301</div>}
              {(d==='Wed' && h==='12') && <div className="absolute inset-1 rounded bg-gradient-to-r from-[var(--nu-cyan)]/20 to-white text-[var(--nu-blue)] text-[10px] p-1">MATH 210</div>}
            </div>
          ))}
        </>
      ))}
    </div>
  )
}

export default function CourseScheduling(){
  return (
    <div className="min-h-screen bg-[var(--nu-bg)]">
      <Navbar />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-3xl font-semibold tracking-tight">Course Scheduling</h1>
        <p className="mt-2 text-neutral-600">Block picker, weekly timetable preview, and course info.</p>

        <div className="mt-8 grid lg:grid-cols-3 gap-6">
          <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="rounded-2xl border border-black/10 bg-white p-5 shadow-sm">
            <h3 className="font-medium">Block schedule picker</h3>
            <div className="mt-3 grid grid-cols-3 gap-2 text-sm">
              {['A','B','C','D','E','F'].map(b => (
                <button key={b} className="rounded-lg border border-black/10 px-3 py-2 hover:border-[var(--nu-blue)]/40 bg-gradient-to-br from-white to-cyan-50">Block {b}</button>
              ))}
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="rounded-2xl border border-black/10 bg-white p-5 shadow-sm lg:col-span-2">
            <h3 className="font-medium">Weekly timetable</h3>
            <div className="mt-3 overflow-auto">
              <Timetable />
            </div>
          </motion.div>
        </div>

        <div className="mt-8 grid md:grid-cols-4 gap-4">
          <StatCard label="Credits this term" value="18" delta="-3 available" color="amber" />
          <StatCard label="Conflicts" value="0" delta="Great!" color="green" />
          <StatCard label="Morning classes" value="3" delta="Mon/Wed/Thu" color="blue" />
          <StatCard label="Labs" value="1" delta="Wed 12:00" color="purple" />
        </div>
      </div>
      <Footer />
    </div>
  )
}
