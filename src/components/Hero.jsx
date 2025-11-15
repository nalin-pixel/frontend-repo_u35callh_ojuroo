import { motion } from 'framer-motion'
import { Check, ArrowRight, Shield, Zap, Sparkles } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-24" id="home">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-white to-violet-50" />
        <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-indigo-200/40 blur-3xl" />
        <div className="absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-violet-200/40 blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <span className="inline-flex items-center gap-2 rounded-full bg-white/80 backdrop-blur px-3 py-1 text-xs font-medium text-gray-700 ring-1 ring-gray-200">
                <Sparkles size={14} className="text-indigo-600" />
                Launch faster with NovaSaaS
              </span>
            </motion.div>

            <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1, duration: 0.6 }} className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-gray-900">
              The clean SaaS landing page that converts
            </motion.h1>

            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.6 }} className="mt-6 text-lg text-gray-600">
              Beautiful by default, flexible by design. Ship a stunning marketing site in minutes with modern components and tasteful motion.
            </motion.p>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.6 }} className="mt-8 flex flex-col sm:flex-row gap-3">
              <a href="#cta" className="inline-flex items-center justify-center rounded-md bg-gray-900 px-6 py-3 text-white font-medium hover:bg-gray-800 transition-colors">
                Get started free
                <ArrowRight size={18} className="ml-2" />
              </a>
              <a href="#features" className="inline-flex items-center justify-center rounded-md bg-white px-6 py-3 text-gray-900 font-medium ring-1 ring-gray-200 hover:bg-gray-50 transition-colors">
                See features
              </a>
            </motion.div>

            <motion.ul initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4, duration: 0.6 }} className="mt-6 grid gap-2 text-sm text-gray-600">
              {[
                'No credit card required',
                '5-minute setup',
                'Secure by default',
              ].map((item) => (
                <li key={item} className="inline-flex items-center gap-2">
                  <Check size={16} className="text-indigo-600" />
                  {item}
                </li>
              ))}
            </motion.ul>
          </div>

          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.6 }} className="relative">
            <div className="relative rounded-2xl border border-black/5 bg-white p-4 shadow-xl shadow-black/5">
              <div className="aspect-video w-full rounded-lg bg-gradient-to-br from-indigo-500 via-violet-500 to-fuchsia-500" />
              <div className="mt-4 grid grid-cols-3 gap-4">
                {[Shield, Zap, Sparkles].map((Icon, i) => (
                  <div key={i} className="rounded-lg bg-gray-50 p-4 ring-1 ring-gray-200">
                    <Icon className="text-indigo-600" />
                    <p className="mt-2 text-sm text-gray-700">Crisp UI blocks</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
