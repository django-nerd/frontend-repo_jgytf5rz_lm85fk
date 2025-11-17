import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { CalendarDays, Salad, Users2, Bus, Camera } from 'lucide-react'
import { motion } from 'framer-motion'
import { StatCard } from '../components/Charts'

function Card({ title, icon: Icon, children }){
  return (
    <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="relative overflow-hidden rounded-2xl border border-black/10 bg-white p-5 shadow-sm">
      <div className="absolute inset-0 bg-gradient-to-br from-white to-blue-50/40 pointer-events-none" />
      <div className="relative">
        <div className="flex items-center gap-2">
          <Icon className="text-[var(--nu-blue)]" size={18} />
          <h3 className="font-medium">{title}</h3>
        </div>
        <div className="mt-4">{children}</div>
      </div>
    </motion.div>
  )
}

export default function CampusServices(){
  return (
    <div className="min-h-screen bg-[var(--nu-bg)]">
      <Navbar />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="relative overflow-hidden rounded-3xl border border-black/10 bg-white shadow-sm">
          <img src="https://images.unsplash.com/photo-1543269865-cbf427effbad?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxTdHVkZW50c3xlbnwwfDB8fHwxNzYzMzkwMTg0fDA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80" alt="Students" className="h-64 w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-white via-white/60 to-transparent" />
          <div className="absolute bottom-0 p-6">
            <div className="rounded-full bg-white/80 backdrop-blur px-3 py-1 text-xs inline-block">Campus Services</div>
            <h1 className="mt-2 text-3xl font-semibold tracking-tight">Everything you need, in one place</h1>
            <p className="text-neutral-600 max-w-2xl">Ordering, reservations, groups, and transit — all unified for speed.</p>
          </div>
        </div>

        <div className="mt-8 grid md:grid-cols-2 gap-6">
          <Card title="Kitchen ordering" icon={Salad}>
            <div className="grid grid-cols-3 gap-3 text-sm">
              {['Shawarma', 'Pasta', 'Salad'].map((x) => (
                <button key={x} className="rounded-lg border border-black/10 p-3 hover:border-[var(--nu-blue)]/40 bg-gradient-to-br from-white to-cyan-50">{x}</button>
              ))}
            </div>
            <button className="mt-4 rounded-full bg-[var(--nu-blue)] text-white px-4 py-2 text-sm">Add to tray</button>
          </Card>

          <Card title="Court reservation" icon={CalendarDays}>
            <div className="grid grid-cols-7 gap-2 text-center text-xs">
              {[...Array(7)].map((_, d) => (
                <div key={d} className="rounded-lg bg-white ring-1 ring-black/5 p-2">
                  <div className="font-medium">{['Sun','Mon','Tue','Wed','Thu','Fri','Sat'][d]}</div>
                  <div className="mt-2 grid gap-1">
                    {['5pm','6pm','7pm'].map(t => (
                      <button key={t} className="rounded bg-[var(--nu-cyan)]/10 text-[var(--nu-blue)] px-2 py-1 hover:bg-[var(--nu-cyan)]/20">{t}</button>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </Card>

          <Card title="Study groups" icon={Users2}>
            <div className="space-y-3">
              {[1,2,3].map(i => (
                <div key={i} className="flex items-center justify-between rounded-lg border border-black/10 p-3 bg-gradient-to-r from-indigo-50 to-white">
                  <div>
                    <div className="font-medium">Algorithms — Week {i}</div>
                    <div className="text-xs text-neutral-600">Library, Room {100+i} · 6:00pm</div>
                  </div>
                  <button className="rounded-full border border-black/10 px-3 py-1.5 text-xs hover:bg-neutral-50">Join</button>
                </div>
              ))}
            </div>
          </Card>

          <Card title="Bus schedule" icon={Bus}>
            <div className="grid grid-cols-3 gap-3 text-sm">
              {['8:00', '10:00', '12:00', '14:00', '16:00', '18:00'].map(t => (
                <div key={t} className="rounded-lg bg-white ring-1 ring-black/5 p-3 text-center">{t}</div>
              ))}
            </div>
          </Card>
        </div>

        <div className="mt-10 grid md:grid-cols-4 gap-4">
          <StatCard label="Orders today" value="142" delta="+18" color="green" />
          <StatCard label="Courts booked" value="27" delta="+5" color="purple" />
          <StatCard label="Groups active" value="12" delta="+2" color="blue" />
          <StatCard label="Shuttle fills" value="78%" delta="Peak 8am" color="amber" />
        </div>
      </div>
      <Footer />
    </div>
  )
}
