import Link from 'next/link'

export default function AISystemIntegrationPage() {
  const processes = [
    {
      number: "01",
      title: "Discovery",
      description: "We analyze your business workflows and identify high-impact AI integration opportunities that deliver measurable ROI.",
    },
    {
      number: "02",
      title: "Implementation",
      description: "Our team designs, builds, and deploys custom AI systems tailored to your unique operational needs and technical environment.",
    },
    {
      number: "03",
      title: "Optimization",
      description: "We continuously monitor performance, refine models, and scale your AI infrastructure to maximize efficiency and results.",
    }
  ];

  const capabilities = [
    {
      title: "Custom LLMs",
      description: "Fine-tuned language models trained on your data to handle industry-specific tasks with unmatched accuracy.",
    },
    {
      title: "Workflow Automation",
      description: "Intelligent automation that eliminates repetitive tasks and integrates seamlessly with your existing systems.",
    },
    {
      title: "Data Analysis",
      description: "Advanced analytics and predictive models that transform raw data into actionable business intelligence.",
    }
  ];

  return (
    <main className="min-h-screen bg-white text-black neural-bg">
      <section className="relative py-24 lg:py-32 overflow-hidden">
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-black/5 border border-black/10 mb-6">
              <span className="text-sm font-medium text-black/60 tracking-wide uppercase">Service Deep-Dive</span>
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold text-black mb-6 tracking-tight">
              AI System Integration
            </h1>
            <p className="text-xl text-black/60 max-w-2xl mx-auto leading-relaxed">
              Transform your business operations with enterprise-grade AI solutions designed for scale and performance in the Houston market.
            </p>
          </div>

          {/* Process Section - Semantic List for AI Crawlers */}
          <div className="mb-32">
            <h2 className="text-3xl font-bold text-black mb-16 text-center">Our Process</h2>
            <ol className="grid md:grid-cols-3 gap-8 lg:gap-12 list-none p-0">
              {processes.map((process, index) => (
                <li key={index} className="relative group">
                  {index < processes.length - 1 && (
                    <div className="hidden md:block absolute top-14 left-[calc(50%+4rem)] w-[calc(100%-4rem)] h-[2px]" style={{ background: 'linear-gradient(90deg, rgba(255,45,120,0.2), rgba(155,48,255,0.2))' }} />
                  )}
                  <div className="step-card relative p-8 transition-all duration-300">
                    <div className="absolute -top-4 -left-4 w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg text-white" style={{ background: 'linear-gradient(135deg, #FF2D78, #9B30FF)' }}>
                      {process.number}
                    </div>
                    <h3 className="text-xl font-bold text-black mb-3 mt-2">{process.title}</h3>
                    <p className="text-black/55 leading-relaxed">{process.description}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>

          {/* Core Capabilities */}
          <div>
            <h2 className="text-3xl font-bold text-black mb-12 text-center">Core Capabilities</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {capabilities.map((capability, index) => (
                <div key={index} className={`step-card p-8 transition-all ${index === 1 ? 'step-card-purple' : index === 2 ? 'step-card-cyan' : ''}`}>
                  <div className="w-8 h-8 rounded-lg mb-4 flex items-center justify-center" style={{ background: index === 0 ? 'rgba(255,45,120,0.1)' : index === 1 ? 'rgba(155,48,255,0.1)' : 'rgba(0,229,255,0.1)', border: `1px solid ${index === 0 ? 'rgba(255,45,120,0.25)' : index === 1 ? 'rgba(155,48,255,0.25)' : 'rgba(0,229,255,0.25)'}` }}>
                    <div className="w-2 h-2 rounded-full" style={{ background: index === 0 ? '#FF2D78' : index === 1 ? '#9B30FF' : '#00E5FF' }} />
                  </div>
                  <h3 className="text-lg font-bold text-black mb-3">{capability.title}</h3>
                  <p className="text-black/55 text-sm leading-relaxed">{capability.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Action Area */}
          <div className="mt-20 text-center border-t border-black/10 pt-16">
            <p className="text-black/50 mb-8 font-medium">Ready to automate your Houston business workflows?</p>
            <Link 
              href="https://calendly.com/switchmedia/15min"
              className="inline-flex items-center gap-2 px-10 py-5 text-white font-bold rounded-full hover:scale-105 transition-all animate-glow-pulse"
              style={{ background: 'linear-gradient(135deg, #FF2D78, #9B30FF)' }}
            >
              Book a Strategy Call
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}