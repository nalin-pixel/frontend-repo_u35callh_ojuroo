import { CheckCircle2, Rocket, Clock, Shield, Sparkles } from 'lucide-react'

const features = [
  {
    icon: Rocket,
    title: 'Launch-ready blocks',
    desc: 'Composable components that look great out of the box and scale with your brand.'
  },
  {
    icon: Clock,
    title: '5-minute setup',
    desc: 'Skip boilerplate. Connect, configure, and deploy faster than ever.'
  },
  {
    icon: Shield,
    title: 'Enterprise-grade',
    desc: 'Best practices baked in: accessibility, performance, and security.'
  },
]

export default function Features() {
  return (
    <section id="features" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-gray-900">Everything you need to launch</h2>
          <p className="mt-3 text-gray-600 max-w-2xl mx-auto">A thoughtful set of sections that cover the essentials for a high-converting SaaS landing page.</p>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="rounded-2xl border border-black/5 bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-indigo-600/10 text-indigo-600">
                <Icon size={20} />
              </div>
              <h3 className="mt-4 text-lg font-medium text-gray-900">{title}</h3>
              <p className="mt-2 text-gray-600 text-sm">{desc}</p>
              <ul className="mt-4 space-y-2 text-sm text-gray-600">
                {['Polished UI', 'Responsive', 'Accessible'].map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <CheckCircle2 size={16} className="text-indigo-600" /> {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
