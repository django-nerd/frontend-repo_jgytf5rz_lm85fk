import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { useState } from 'react'

export default function Auth(){
  const [mode, setMode] = useState('login')
  return (
    <div className="min-h-screen bg-[var(--nu-bg)]">
      <Navbar />
      <div className="mx-auto max-w-md px-4 sm:px-6 lg:px-8 py-12">
        <div className="rounded-2xl border border-black/10 bg-white p-6 shadow-sm">
          <div className="flex items-center justify-between">
            <h1 className="text-xl font-semibold">{mode === 'login' ? 'Log in' : 'Create your account'}</h1>
            <button onClick={() => setMode(mode === 'login' ? 'signup' : 'login')} className="text-sm text-[var(--nu-blue)]">
              {mode === 'login' ? 'Sign up' : 'Log in'} instead
            </button>
          </div>
          <div className="mt-4 grid gap-3">
            <input placeholder="Email" className="rounded-lg border border-black/10 px-3 py-2 text-sm" />
            <input placeholder="Password" type="password" className="rounded-lg border border-black/10 px-3 py-2 text-sm" />
            {mode === 'signup' && (
              <input placeholder="Full name" className="rounded-lg border border-black/10 px-3 py-2 text-sm" />
            )}
            <button className="mt-2 rounded-full bg-[var(--nu-blue)] text-white px-4 py-2 text-sm">
              {mode === 'login' ? 'Log in' : 'Create account'}
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}
