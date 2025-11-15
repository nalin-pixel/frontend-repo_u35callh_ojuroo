export default function CTA() {
  return (
    <section id="cta" className="py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-2xl border border-black/5 bg-gradient-to-r from-indigo-600 to-violet-600 p-8 sm:p-12 text-white">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;utf8,<svg xmlns=\'http://www.w3.org/2000/svg\' width=\'100%\' height=\'100%\'><defs><linearGradient id=\'g\' x1=\'0\' x2=\'1\'><stop stop-color=\'%23ffffff\' stop-opacity=\'0.08\'/><stop offset=\'1\' stop-color=\'%23ffffff\' stop-opacity=\'0\'/></linearGradient></defs><rect width=\'100%\' height=\'100%\' fill=\'url(%23g)\'/></svg>')] opacity-40" />
          <div className="relative">
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">Build your landing page today</h2>
            <p className="mt-3 text-white/90 max-w-2xl">Start free, customize to your brand, and launch with confidence. No heavy setup — just clean, modern design.</p>

            <form className="mt-8 grid sm:grid-cols-[1fr_auto] gap-3">
              <input type="email" required placeholder="Enter your email" className="rounded-md px-4 py-3 text-gray-900 ring-1 ring-white/30 bg-white/90 placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-white" />
              <button className="rounded-md bg-white text-gray-900 px-5 py-3 font-medium hover:bg-white/90 transition-colors">Get early access</button>
            </form>

            <p className="mt-3 text-xs text-white/80">By signing up you agree to our Terms and Privacy Policy.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
