const services = [
  {
    title: "AI-Powered MVP Sprint",
    price: "$6,800",
    description: "Launch-ready micro SaaS built with Next.js, Supabase, and OpenAI Genkit in 4 weeks.",
    features: [
      "Product strategy workshop",
      "Supabase schema & auth setup",
      "Core AI workflows powered by Genkit",
      "Responsive UI with Tailwind CSS",
    ],
  },
  {
    title: "Growth Acceleration",
    price: "$3,200 / mo",
    description: "Iterative feature delivery, analytics, and performance optimizations to scale traction.",
    features: [
      "Monthly feature roadmap",
      "A/B testing and funnel analytics",
      "Performance & accessibility tuning",
      "Quarterly architecture reviews",
    ],
  },
  {
    title: "AI Integration Retainer",
    price: "$2,400 / mo",
    description: "Embed AI copilots, automations, and data pipelines across your existing stack.",
    features: [
      "OpenAI and Genkit workflow design",
      "Supabase Edge Functions & webhooks",
      "Automated QA and monitoring",
      "Team enablement sessions",
    ],
  },
];

const processSteps = [
  {
    title: "Discover",
    description:
      "Co-create a clear product vision, define success metrics, and map the systems that power your business.",
  },
  {
    title: "Design",
    description:
      "Prototype user flows, craft accessible UI, and plan data models leveraging Supabase & Genkit.",
  },
  {
    title: "Deliver",
    description:
      "Ship production-ready releases with automated testing, analytics, and documentation for your team.",
  },
  {
    title: "Optimize",
    description:
      "Continuously iterate with growth experiments, AI tuning, and proactive performance insights.",
  },
];

const usps = [
  {
    title: "AI-Native Delivery",
    description: "We bake intelligence into every layer using OpenAI Genkit and responsible AI guidelines.",
  },
  {
    title: "Supabase Experts",
    description: "Certified Supabase specialists designing scalable data, auth, and realtime infrastructure.",
  },
  {
    title: "Transparent Pricing",
    description: "Predictable engagements engineered for SMB budgets without compromising craftsmanship.",
  },
  {
    title: "Velocity with Rigor",
    description: "Lean sprints, measurable outcomes, and senior engineering discipline from discovery to launch.",
  },
];

const teamHighlights = [
  "Full-stack engineers with 12+ years in SaaS and product-led growth",
  "Design technologists blending UX research with motion-rich interfaces",
  "Data scientists specialized in conversational AI and workflow automation",
];

export default function Home() {
  return (
    <main className="mx-auto flex max-w-6xl flex-col gap-24 px-6 py-16 md:gap-28 md:px-12">
      <section className="grid gap-12 md:grid-cols-[1.4fr_1fr] md:items-center">
        <div className="space-y-8">
          <span className="inline-flex items-center rounded-full bg-white/10 px-4 py-1 text-sm font-medium text-primary-200 ring-1 ring-white/20">
            Webapps • Micro SaaS • AI Systems
          </span>
          <h1 className="font-display text-4xl font-semibold tracking-tight text-white md:text-6xl">
            Build, launch, and grow AI-native products your customers will love.
          </h1>
          <p className="text-lg text-slate-300 md:text-xl">
            Ahso Studio partners with small and medium sized businesses to create high-impact digital
            experiences. We fuse Supabase, OpenAI Genkit, and modern design systems to ship products that
            accelerate revenue in weeks—not quarters.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <a
              href="#consult"
              className="inline-flex items-center justify-center rounded-lg bg-primary-500 px-6 py-3 text-base font-semibold text-white shadow-glow transition hover:bg-primary-400"
            >
              Request a Consultation
            </a>
            <a
              href="#services"
              className="inline-flex items-center justify-center rounded-lg border border-white/20 px-6 py-3 text-base font-semibold text-white/90 transition hover:border-primary-400/70 hover:text-primary-200"
            >
              Explore Services
            </a>
          </div>
          <div className="grid gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur">
            <div className="text-sm uppercase tracking-wide text-primary-200">Trusted by modern operators</div>
            <div className="grid gap-3 text-sm text-slate-300 md:grid-cols-3">
              <p>VC-backed SaaS teams needing velocity without bloated headcount.</p>
              <p>Bootstrapped founders validating new revenue streams in record time.</p>
              <p>Internal innovation squads modernizing workflows across finance, logistics, and healthcare.</p>
            </div>
          </div>
        </div>
        <div className="relative h-full w-full">
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary-500/80 via-primary-700/60 to-slate-900 shadow-glow" />
          <div className="relative z-10 flex h-full flex-col justify-between gap-6 rounded-3xl border border-white/20 bg-slate-950/70 p-8 backdrop-blur">
            <div>
              <p className="text-sm uppercase tracking-[0.25em] text-primary-200">Stack Snapshot</p>
              <h2 className="mt-4 font-display text-2xl font-semibold text-white">Supabase × Genkit × Next.js</h2>
              <p className="mt-3 text-sm text-slate-300">
                Future-proof architecture blending realtime data, secure auth, and AI copilots.
              </p>
            </div>
            <ul className="grid gap-4 text-sm text-slate-200">
              <li className="flex items-start gap-3">
                <span className="mt-1 h-2.5 w-2.5 rounded-full bg-primary-400" />
                Realtime dashboards, alerts, and automation using Supabase Edge Functions.
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 h-2.5 w-2.5 rounded-full bg-primary-400" />
                Genkit-driven assistants that orchestrate OpenAI and custom LLM workflows.
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 h-2.5 w-2.5 rounded-full bg-primary-400" />
                UI foundations built with TypeScript, Next.js App Router, and Tailwind CSS.
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section id="services" className="space-y-6">
        <div>
          <h2 className="section-title">Services crafted for momentum</h2>
          <p className="section-subtitle">
            Choose the engagement that fits your growth stage. Every package blends product strategy, design,
            and engineering to keep shipping effortless.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {services.map((service) => (
            <article
              key={service.title}
              className="flex h-full flex-col rounded-3xl border border-white/10 bg-white/[0.04] p-8 shadow-lg shadow-slate-950/40 transition hover:-translate-y-1 hover:border-primary-400/50 hover:shadow-primary-900/50"
            >
              <div className="flex items-baseline justify-between gap-4">
                <h3 className="font-display text-2xl text-white">{service.title}</h3>
                <span className="text-lg font-semibold text-primary-300">{service.price}</span>
              </div>
              <p className="mt-4 text-sm text-slate-300">{service.description}</p>
              <ul className="mt-6 space-y-3 text-sm text-slate-200">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <span className="mt-1 h-2 w-2 rounded-full bg-primary-400" />
                    {feature}
                  </li>
                ))}
              </ul>
              <a
                href="#consult"
                className="mt-8 inline-flex items-center text-sm font-semibold text-primary-200 hover:text-primary-100"
              >
                Book this service →
              </a>
            </article>
          ))}
        </div>
      </section>

      <section className="space-y-10">
        <div>
          <h2 className="section-title">A process built for clarity</h2>
          <p className="section-subtitle">
            Collaborate in focused, transparent sprints designed for busy SMB teams. No jargon, just momentum
            you can measure.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-4">
          {processSteps.map((step, index) => (
            <div
              key={step.title}
              className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 shadow-sm shadow-slate-950/40"
            >
              <div className="text-sm font-semibold uppercase tracking-widest text-primary-300">
                Step {index + 1}
              </div>
              <h3 className="mt-4 font-display text-xl text-white">{step.title}</h3>
              <p className="mt-3 text-sm text-slate-300">{step.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="space-y-10">
        <div>
          <h2 className="section-title">Why teams pick Ahso Studio</h2>
          <p className="section-subtitle">
            We blend product strategy, engineering, and AI expertise to deliver real business outcomes—not just
            prototypes.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {usps.map((usp) => (
            <div
              key={usp.title}
              className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.05] to-transparent p-8"
            >
              <h3 className="font-display text-2xl text-white">{usp.title}</h3>
              <p className="mt-4 text-sm text-slate-300">{usp.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="space-y-8 rounded-3xl border border-white/10 bg-white/[0.04] p-8 md:p-12">
        <div className="grid gap-10 md:grid-cols-[1.3fr_1fr] md:items-center">
          <div className="space-y-6">
            <h2 className="section-title">Who we are & what we do</h2>
            <p className="section-subtitle">
              We are a collective of builders who have shipped category-leading SaaS products, scaled design
              systems, and embedded AI copilots into daily workflows for thousands of users.
            </p>
            <ul className="space-y-3 text-sm text-slate-200">
              {teamHighlights.map((highlight) => (
                <li key={highlight} className="flex items-start gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-primary-400" />
                  {highlight}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-3xl border border-white/20 bg-slate-950/60 p-8 text-sm text-slate-300 shadow-inner">
            <h3 className="font-display text-2xl text-white">How we partner</h3>
            <p className="mt-4">
              Fractional product teams that integrate with your ops, leading discovery through delivery. We own the
              roadmap, stand up your data and AI infrastructure, and hand off clean, maintainable systems that your
              team can extend.
            </p>
            <p className="mt-4">
              Every engagement includes weekly working sessions, async updates, shared dashboards, and a dedicated
              success channel to keep stakeholders aligned.
            </p>
          </div>
        </div>
      </section>

      <section
        id="consult"
        className="rounded-3xl border border-primary-500/40 bg-gradient-to-r from-primary-500/30 via-primary-600/30 to-primary-900/40 p-10 text-center shadow-glow"
      >
        <h2 className="font-display text-3xl text-white md:text-4xl">Ready to move faster?</h2>
        <p className="mx-auto mt-4 max-w-2xl text-base text-slate-200 md:text-lg">
          Let&apos;s explore your roadmap and identify the fastest path to ROI. Share your goals and we&apos;ll craft a
          tailored action plan within 48 hours.
        </p>
        <a
          href="mailto:hello@ahsostudio.com"
          className="mt-6 inline-flex items-center justify-center rounded-full bg-white px-8 py-3 text-base font-semibold text-primary-700 transition hover:bg-slate-100"
        >
          Request a Consultation
        </a>
      </section>
    </main>
  );
}
