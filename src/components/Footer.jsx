export default function Footer(){
  return (
    <footer className="mt-20 border-t border-black/5 bg-white/80 backdrop-blur">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 grid md:grid-cols-2 gap-6 items-center">
        <div>
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-lg bg-[var(--nu-blue)]" />
            <span className="font-semibold">NUPal</span>
          </div>
          <p className="mt-2 text-sm text-neutral-600">The smartest way to navigate Nile University.</p>
        </div>
        <div className="md:text-right text-sm text-neutral-500">
          © {new Date().getFullYear()} NUPal — Concept demo.
        </div>
      </div>
    </footer>
  )
}
