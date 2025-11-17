import { motion } from 'framer-motion'

export default function SectionHeader({ title, subtitle, imgUrl }){
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0">
        <img src={imgUrl} alt="" className="h-full w-full object-cover opacity-70" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(0,200,255,0.35),transparent_40%),radial-gradient(circle_at_80%_30%,rgba(0,46,109,0.35),transparent_40%),linear-gradient(to_bottom,rgba(255,255,255,0.85),rgba(255,255,255,0.9))]" />
      </div>
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        <motion.h1 initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-3xl md:text-5xl font-semibold tracking-tight text-neutral-900">
          {title}
        </motion.h1>
        {subtitle && (
          <motion.p initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.05 }} className="mt-3 max-w-2xl text-neutral-700">
            {subtitle}
          </motion.p>
        )}
      </div>
      <svg className="block w-full" viewBox="0 0 1440 120" preserveAspectRatio="none" aria-hidden>
        <path d="M0,96 C240,144 480,0 720,48 C960,96 1200,144 1440,96 L1440,0 L0,0 Z" fill="url(#river2)" fillOpacity="0.12" />
        <defs>
          <linearGradient id="river2" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#00C8FF" />
            <stop offset="100%" stopColor="#002E6D" />
          </linearGradient>
        </defs>
      </svg>
    </section>
  )
}
