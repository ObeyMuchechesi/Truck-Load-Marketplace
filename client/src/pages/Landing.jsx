import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const steps = [
  {
    title: 'Post the load',
    body: 'Shippers enter route, cargo weight and the rate per km they are willing to pay.',
  },
  {
    title: 'Match on rate and route',
    body: 'The engine only returns available trucks whose minimum rate fits the offer — no wasted calls.',
  },
  {
    title: 'Unlock and connect',
    body: 'Contact details stay masked until you spend a credit or activate a plan. The other side is notified.',
  },
];

export default function Landing() {
  const { user } = useAuth();

  return (
    <div className="space-y-20">
      <section className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-900 via-indigo-950 to-violet-900 px-6 py-16 text-white sm:px-12 sm:py-24">
        <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-indigo-500/30 blur-3xl" />
        <div className="absolute -bottom-32 left-1/3 h-72 w-72 rounded-full bg-violet-500/20 blur-3xl" />

        <div className="relative max-w-3xl">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-indigo-100 ring-1 ring-white/20">
            Freight matching · rate-first
          </span>
          <h1 className="mt-6 text-4xl font-bold leading-tight tracking-tight sm:text-6xl">
            Trucks that already accept your rate.
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-indigo-100/90">
            TruckLink connects carriers with shippers and drivers. Post a load, see only the trucks
            that fit the route, the cargo and the price — then unlock the contact and move freight.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              to={user ? '/dashboard' : '/register'}
              className="rounded-xl bg-white px-5 py-3 text-sm font-semibold text-indigo-700 transition hover:bg-indigo-50"
            >
              {user ? 'Go to dashboard' : 'Create an account'}
            </Link>
            <Link
              to="/pricing"
              className="rounded-xl bg-white/10 px-5 py-3 text-sm font-semibold text-white ring-1 ring-white/25 transition hover:bg-white/20"
            >
              See pricing
            </Link>
          </div>

          <dl className="mt-12 grid max-w-xl grid-cols-3 gap-6 border-t border-white/15 pt-8">
            <div>
              <dt className="text-xs uppercase tracking-wide text-indigo-200">Carriers</dt>
              <dd className="mt-1 text-lg font-semibold">Pay to be listed</dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-wide text-indigo-200">Shippers</dt>
              <dd className="mt-1 text-lg font-semibold">Pay per unlock</dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-wide text-indigo-200">Matching</dt>
              <dd className="mt-1 text-lg font-semibold">Rate + radius</dd>
            </div>
          </dl>
        </div>
      </section>

      <section>
        <div className="flex flex-col gap-2">
          <p className="text-xs font-semibold uppercase tracking-widest text-indigo-600">How it works</p>
          <h2 className="text-3xl font-bold tracking-tight text-slate-900">One flow, both sides paid</h2>
        </div>

        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {steps.map((step, index) => (
            <div key={step.title} className="card p-6">
              <span className="grid h-10 w-10 place-items-center rounded-xl bg-indigo-50 text-sm font-bold text-indigo-700">
                0{index + 1}
              </span>
              <h3 className="mt-4 text-lg font-semibold text-slate-900">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">{step.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="grid gap-6 lg:grid-cols-2">
        <div className="card p-8">
          <span className="pill bg-indigo-50 text-indigo-700">For carriers</span>
          <h3 className="mt-4 text-2xl font-bold text-slate-900">List your fleet, get matched loads</h3>
          <ul className="mt-4 space-y-2 text-sm text-slate-600">
            <li>• Add trucks and tankers with capacity, availability and your minimum rate.</li>
            <li>• See shipper loads filtered by your fleet's body type and weight.</li>
            <li>• Monthly plan for unlimited listings, or one credit per listing.</li>
          </ul>
          <Link to="/register" className="btn-primary mt-6">
            Register as a carrier
          </Link>
        </div>

        <div className="card p-8">
          <span className="pill bg-emerald-50 text-emerald-700">For shippers &amp; drivers</span>
          <h3 className="mt-4 text-2xl font-bold text-slate-900">Find a truck without the phone calls</h3>
          <ul className="mt-4 space-y-2 text-sm text-slate-600">
            <li>• Post a load with the rate you are willing to pay.</li>
            <li>• Only see trucks whose rate, type and capacity already match.</li>
            <li>• Unlock the carrier's phone and exact pickup address with one credit.</li>
          </ul>
          <Link to="/register" className="btn-emerald mt-6">
            Register as a shipper
          </Link>
        </div>
      </section>
    </div>
  );
}
