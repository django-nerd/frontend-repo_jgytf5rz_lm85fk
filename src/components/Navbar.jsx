import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Menu, X, Sparkles, LayoutGrid, CalendarDays, GraduationCap, Briefcase, LogIn, UserPlus, Home } from 'lucide-react'

const navItems = [
  { to: '/', label: 'Home', icon: Home },
  { to: '/campus-services', label: 'Campus Services', icon: LayoutGrid },
  { to: '/core-advising', label: 'Core Advising', icon: GraduationCap },
  { to: '/course-scheduling', label: 'Course Scheduling', icon: CalendarDays },
  { to: '/career-advising', label: 'Career Advising', icon: Briefcase },
  { to: '/dashboard', label: 'Dashboard', icon: Sparkles },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/70 dark:bg-neutral-900/70 border-b border-black/5">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-lg bg-[var(--nu-blue)]"></div>
            <span className="font-semibold tracking-tight">NUPal</span>
          </Link>

          <nav className="hidden md:flex items-center gap-2">
            {navItems.map(({ to, label, icon: Icon }) => (
              <NavLink
                key={to}
                to={to}
                className={({ isActive }) =>
                  `flex items-center gap-2 rounded-full px-3 py-2 text-sm transition-colors ${
                    isActive
                      ? 'bg-[var(--nu-blue)] text-white'
                      : 'hover:bg-black/5 dark:hover:bg-white/10'
                  }`
                }
              >
                <Icon size={16} />
                {label}
              </NavLink>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-2">
            <Link to="/login" className="rounded-full px-4 py-2 text-sm font-medium hover:bg-black/5 dark:hover:bg-white/10">Log in</Link>
            <Link to="/signup" className="rounded-full px-4 py-2 text-sm font-medium text-white bg-[var(--nu-blue)] hover:opacity-90">Try NUPal</Link>
          </div>

          <button className="md:hidden rounded-lg p-2 hover:bg-black/5 dark:hover:bg-white/10" onClick={() => setOpen(!open)}>
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-black/5">
          <div className="px-4 py-4 space-y-2">
            {navItems.map(({ to, label }) => (
              <NavLink key={to} to={to} className="block rounded-lg px-3 py-2 hover:bg-black/5" onClick={() => setOpen(false)}>
                {label}
              </NavLink>
            ))}
            <div className="flex gap-2 pt-2">
              <Link to="/login" className="flex-1 text-center rounded-lg px-4 py-2 text-sm font-medium hover:bg-black/5">Log in</Link>
              <Link to="/signup" className="flex-1 text-center rounded-lg px-4 py-2 text-sm font-medium text-white bg-[var(--nu-blue)]">Try NUPal</Link>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
