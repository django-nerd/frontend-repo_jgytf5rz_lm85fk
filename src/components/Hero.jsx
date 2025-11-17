import { motion, useScroll, useTransform } from 'framer-motion'
import Spline from '@splinetool/react-spline'
import { Link } from 'react-router-dom'

export default function Hero() {
  const { scrollYProgress } = useScroll()
  const y = useTransform(scrollYProgress, [0, 1], [0, 200])
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 8])
  const opacity = useTransform(scrollYProgress, [0, 0.3], [1, 0.7])

  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div className="absolute -top-32 -left-32 h-96 w-96 rounded-full bg-[radial-gradient(circle_at_center,rgba(0,46,109,0.25),transparent_60%)] blur-3xl" />
        <div className="absolute -bottom-32 -right-32 h-[28rem] w-[28rem] rounded-full bg-[radial-gradient(circle_at_center,rgba(0,200,255,0.18),transparent_60%)] blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-12 pb-20 md:pt-20 md:pb-28 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <motion.span style={{ opacity }} className="inline-flex items-center gap-2 rounded-full border border-black/10 px-3 py-1 text-xs font-medium tracking-wide text-[var(--nu-blue)] bg-white/70 backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-[var(--nu-cyan)]" /> New at Nile University
          </motion.span>
          <motion.h1 style={{ y }} className="mt-4 text-4xl md:text-6xl font-semibold tracking-tight leading-[1.05] text-neutral-900">
            <span className="block">Your Intelligent Companion</span>
            <span className="block text-[var(--nu-blue)]">for University Life.</span>
          </motion.h1>
          <motion.p style={{ y, opacity }} className="mt-5 text-neutral-600 md:text-lg">
            Academic advising, campus services, and career support — unified in one intelligent platform.
          </motion.p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Link to="/signup" className="rounded-full bg-[var(--nu-blue)] text-white px-5 py-3 text-sm font-medium shadow-sm shadow-[var(--nu-blue)]/20 hover:shadow-md hover:-translate-y-0.5 transition">Try NUPal</Link>
            <Link to="/campus-services" className="rounded-full border border-black/10 bg-white/70 backdrop-blur px-5 py-3 text-sm font-medium hover:bg-white">Explore Features</Link>
          </div>
        </div>

        <motion.div style={{ rotate }} className="relative h-[420px] md:h-[520px] rounded-2xl overflow-hidden ring-1 ring-black/5 bg-white">
          <Spline scene="https://prod.spline.design/VyGeZv58yuk8j7Yy/scene.splinecode" style={{ width: '100%', height: '100%' }} />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white/60 via-transparent to-white/0" />
        </motion.div>
      </div>

      <svg className="block w-full" viewBox="0 0 1440 120" preserveAspectRatio="none" aria-hidden>
        <path d="M0,96 C240,144 480,0 720,48 C960,96 1200,144 1440,96 L1440,0 L0,0 Z" fill="url(#river)" fillOpacity="0.08" />
        <defs>
          <linearGradient id="river" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#00C8FF" />
            <stop offset="100%" stopColor="#002E6D" />
          </linearGradient>
        </defs>
      </svg>
    </section>
  )
}
