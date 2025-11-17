import { motion } from 'framer-motion'
import { CalendarDays, Salad, Users2, Bus, GraduationCap, Blocks, Briefcase, Settings2 } from 'lucide-react'
import { Link } from 'react-router-dom'

const pillars = [
  {
    title: 'Campus Services',
    desc: 'Ordering, reservations, groups, and transit in one place.',
    to: '/campus-services',
    items: [
      { label: 'Kitchen ordering', icon: Salad },
      { label: 'Court reservation', icon: CalendarDays },
      { label: 'Study groups', icon: Users2 },
      { label: 'Bus schedule', icon: Bus },
    ],
    accent: 'from-cyan-400/20 to-blue-400/10',
  },
  {
    title: 'Core Advising',
    desc: 'Prerequisites, recommendations, and study plans.',
    to: '/core-advising',
    items: [
      { label: 'Prereq checker', icon: Settings2 },
      { label: 'Recommendations', icon: GraduationCap },
      { label: 'Plan timeline', icon: Blocks },
    ],
    accent: 'from-emerald-400/20 to-teal-400/10',
  },
  {
    title: 'Course Scheduling',
    desc: 'Build a conflict-free timetable that fits your life.',
    to: '/course-scheduling',
    items: [
      { label: 'Block picker', icon: Blocks },
      { label: 'Weekly preview', icon: CalendarDays },
    ],
    accent: 'from-indigo-400/20 to-purple-400/10',
  },
  {
    title: 'Career Advising',
    desc: 'Internships, skills, and application guidance.',
    to: '/career-advising',
    items: [
      { label: 'Internships', icon: Briefcase },
      { label: 'Skill gap', icon: Settings2 },
    ],
    accent: 'from-amber-400/20 to-orange-400/10',
  },
]

export default function FeaturePillars() {
  return (
    <section className="py-14 md:py-20 bg-gradient-to-b from-white to-white/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">Everything you need for NU life</h2>
            <p className="mt-2 text-neutral-600">A unified system for services, advising, scheduling, and careers.</p>
          </div>
          <Link to="/campus-services" className="hidden md:inline-flex rounded-full border border-black/10 bg-white px-4 py-2 text-sm font-medium hover:bg-neutral-50">Explore all</Link>
        </div>

        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {pillars.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 16, rotateX: -8 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ type: 'spring', stiffness: 120, damping: 16, delay: i * 0.05 }}
              className={`group relative rounded-2xl border border-black/10 bg-white p-5 shadow-sm hover:shadow-md transition-transform will-change-transform hover:-translate-y-0.5 overflow-hidden`}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${p.accent} opacity-60 pointer-events-none`} />
              <div className="relative">
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold text-neutral-900">{p.title}</h3>
                  <span className="text-[var(--nu-blue)] text-xs font-medium">Learn more →</span>
                </div>
                <p className="mt-1 text-sm text-neutral-600">{p.desc}</p>
                <div className="mt-4 grid grid-cols-2 gap-2">
                  {p.items.map(({ label, icon: Icon }) => (
                    <div key={label} className="flex items-center gap-2 rounded-lg bg-white/80 backdrop-blur px-3 py-2 ring-1 ring-black/5">
                      <Icon size={16} className="text-[var(--nu-blue)]" />
                      <span className="text-sm">{label}</span>
                    </div>
                  ))}
                </div>
                <Link to={p.to} className="mt-4 inline-flex rounded-full border border-black/10 bg-white px-3 py-1.5 text-xs font-medium hover:bg-neutral-50">Open section</Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
