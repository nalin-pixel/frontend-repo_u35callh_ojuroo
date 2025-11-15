export default function Pricing() {
  return (
    <section id="pricing" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-gray-900">Simple, transparent pricing</h2>
          <p className="mt-3 text-gray-600">Start free. Upgrade when you grow. Cancel anytime.</p>
        </div>

        <div className="mt-12 grid lg:grid-cols-3 gap-6">
          {[{name:'Starter', price:'Free', features:['Unlimited pages','Basic components','Community support']},{name:'Pro', price:'$19/mo', highlight:true, features:['Everything in Starter','Premium components','Email support']},{name:'Business', price:'$49/mo', features:['Everything in Pro','Team seats','Priority support']}].map((tier) => (
            <div key={tier.name} className={`rounded-2xl border ${tier.highlight ? 'border-indigo-300 bg-white shadow-lg shadow-indigo-100' : 'border-black/5 bg-white shadow-sm'} p-6`}>
              <div className="flex items-baseline justify-between">
                <h3 className="text-lg font-medium text-gray-900">{tier.name}</h3>
                <span className="text-2xl font-semibold text-gray-900">{tier.price}</span>
              </div>
              <ul className="mt-6 space-y-3 text-sm text-gray-600">
                {tier.features.map((f) => (
                  <li key={f} className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-indigo-600 inline-block" /> {f}
                  </li>
                ))}
              </ul>
              <a href="#cta" className={`mt-8 block w-full text-center rounded-md px-4 py-2 font-medium transition-colors ${tier.highlight ? 'bg-indigo-600 text-white hover:bg-indigo-700' : 'bg-gray-900 text-white hover:bg-gray-800'}`}>Choose {tier.name}</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
