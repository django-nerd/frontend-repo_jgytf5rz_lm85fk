import { motion } from 'framer-motion'

export function StatCard({ label, value, delta, color = 'blue' }){
  const colorMap = {
    blue: 'from-cyan-400/20 to-blue-400/10',
    green: 'from-emerald-400/20 to-teal-400/10',
    purple: 'from-indigo-400/20 to-purple-400/10',
    amber: 'from-amber-400/20 to-orange-400/10',
  }
  return (
    <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className={`relative overflow-hidden rounded-2xl border border-black/10 bg-white p-5 shadow-sm`}> 
      <div className={`absolute inset-0 bg-gradient-to-br ${colorMap[color]} opacity-60 pointer-events-none`} />
      <div className="relative">
        <div className="text-xs text-neutral-600">{label}</div>
        <div className="mt-1 text-2xl font-semibold">{value}</div>
        {delta && <div className="mt-1 text-xs text-emerald-600">{delta}</div>}
      </div>
    </motion.div>
  )
}

export function ProgressBars({ data }){
  return (
    <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="rounded-2xl border border-black/10 bg-white p-5 shadow-sm">
      <div className="text-sm font-medium">Progress</div>
      <div className="mt-3 space-y-3">
        {data.map(({ label, value }, i) => (
          <div key={i}>
            <div className="flex items-center justify-between text-xs text-neutral-600">
              <span>{label}</span>
              <span>{value}%</span>
            </div>
            <div className="mt-1 h-2 w-full rounded-full bg-neutral-100 overflow-hidden">
              <motion.div initial={{ width: 0 }} whileInView={{ width: `${value}%` }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.05 * i }} className="h-full rounded-full bg-gradient-to-r from-[var(--nu-cyan)] to-[var(--nu-blue)]" />
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  )
}

export function PieChart({ segments = [25, 35, 40], colors = ['#00C8FF','#002E6D','#E9E2D0'], label = 'Distribution' }){
  const total = segments.reduce((a, b) => a + b, 0)
  let cumulative = 0
  const arcs = segments.map((value, i) => {
    const start = (cumulative / total) * 2 * Math.PI
    cumulative += value
    const end = (cumulative / total) * 2 * Math.PI
    const large = end - start > Math.PI ? 1 : 0
    const r = 36
    const cx = 40
    const cy = 40
    const x1 = cx + r * Math.cos(start)
    const y1 = cy + r * Math.sin(start)
    const x2 = cx + r * Math.cos(end)
    const y2 = cy + r * Math.sin(end)
    return { d: `M ${cx} ${cy} L ${x1} ${y1} A ${r} ${r} 0 ${large} 1 ${x2} ${y2} Z`, color: colors[i % colors.length] }
  })

  return (
    <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="rounded-2xl border border-black/10 bg-white p-5 shadow-sm">
      <div className="text-sm font-medium">{label}</div>
      <div className="mt-4 flex items-center gap-4">
        <svg viewBox="0 0 80 80" className="h-28 w-28">
          {arcs.map((a, i) => (
            <motion.path key={i} d={a.d} fill={a.color} initial={{ scale: 0.9, opacity: 0 }} whileInView={{ scale: 1, opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.05 * i }} />
          ))}
        </svg>
        <div className="text-xs text-neutral-600 space-y-1">
          {segments.map((s, i) => (
            <div key={i} className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full" style={{ background: colors[i % colors.length] }} />
              <span>Segment {i + 1}: {s}%</span>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  )
}
