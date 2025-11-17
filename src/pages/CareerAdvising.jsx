import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { motion } from 'framer-motion'
import { PieChart as Pie, ProgressBars, StatCard } from '../components/Charts'

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
                <div key={i} className="rounded-lg border border-black/10 p-3 bg-gradient-to-r from-cyan-50 to-white">
                  <div className="font-medium">{t}</div>
                  <div className="text-xs text-neutral-600">Cairo · Hybrid · Stipend</div>
                </div>
              ))}
            </div>
          </motion.div>

          <Pie segments={[40, 30, 20, 10]} colors={["#00C8FF","#66E0FF","#002E6D","#E9E2D0"]} label="Skill distribution" />

          <ProgressBars data={[{ label: 'Portfolio', value: 70 }, { label: 'Interview prep', value: 45 }, { label: 'Networking', value: 30 }]} />
        </div>

        <div className="mt-8 grid md:grid-cols-4 gap-4">
          <StatCard label="Applications sent" value="24" delta="+3 this week" color="blue" />
          <StatCard label="Interviews" value="5" delta="+1" color="purple" />
          <StatCard label="Offers" value="2" delta="—" color="green" />
          <StatCard label="Events attended" value="7" delta="+2" color="amber" />
        </div>
      </div>
      <Footer />
    </div>
  )
}
