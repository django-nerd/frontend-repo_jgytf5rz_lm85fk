import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { CalendarDays, Salad, Users2, Bus } from 'lucide-react'
import { motion } from 'framer-motion'

function Card({ title, icon: Icon, children }){
  return (
    <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="rounded-2xl border border-black/10 bg-white p-5 shadow-sm">
      <div className="flex items-center gap-2">
        <Icon className="text-[var(--nu-blue)]" size={18} />
        <h3 className="font-medium">{title}</h3>
      </div>
      <div className="mt-4">{children}</div>
    </motion.div>
  )
}

export default function CampusServices(){
  return (
    <div className="min-h-screen bg-[var(--nu-bg)]">
      <Navbar />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-3xl font-semibold tracking-tight">Campus Services</h1>
        <p className="mt-2 text-neutral-600">Quick previews of core service experiences.</p>

        <div className="mt-8 grid md:grid-cols-2 gap-6">
          <Card title="Kitchen ordering" icon={Salad}>
            <div className="grid grid-cols-3 gap-3 text-sm">
              {['Shawarma', 'Pasta', 'Salad'].map((x) => (
                <button key={x} className="rounded-lg border border-black/10 p-3 hover:border-[var(--nu-blue)]/40">{x}</button>
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
                <div key={i} className="flex items-center justify-between rounded-lg border border-black/10 p-3">
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
      </div>
      <Footer />
    </div>
  )
}
