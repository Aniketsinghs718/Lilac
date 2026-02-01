import Image from 'next/image';

const HeroSection = () => {
  return (
    <section className="min-h-screen bg-gradient-to-br from-cream-50 to-sage-light/10 px-4 py-6 lg:px-16">
      <div className="max-w-7xl mx-auto">
        <nav className="flex justify-between items-center mb-8">
          <h1 className="text-2xl lg:text-3xl font-display font-medium text-charcoal">
            Dr. Maya Reynolds, PsyD
          </h1>
          <div className="flex gap-8">
            <a href="#about" className="text-base lg:text-lg text-charcoal hover:text-terracotta transition-colors">
              About
            </a>
            <a href="#contact" className="text-base lg:text-lg text-charcoal hover:text-terracotta transition-colors">
              Contact
            </a>
          </div>
        </nav>

        {/* Hero Content - Split Layout */}
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20 mt-16 lg:mt-20">
          
          {/* Left Side - Arched Window Image */}
          <div className="w-full lg:w-1/2 flex justify-center">
            <div className="relative w-full max-w-lg aspect-[3/4] overflow-hidden"
                 style={{ clipPath: 'ellipse(20% 100% at 20% 100%)' }}>
              
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-terracotta/20 to-sage/20 z-10" />

              {/* Image */}
              <Image
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&q=80"
                alt="Dr. Maya Reynolds"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
            </div>
          </div>

          {/* Right Side - Content Centered */}
          <div className="w-full lg:w-1/2 flex flex-col items-center justify-center text-center lg:px-8">
            <h2 className="text-5xl lg:text-7xl font-display font-medium text-charcoal leading-tight mb-6">
              Find calm beyond<br />
              the overwhelm
            </h2>
            <p className="text-lg lg:text-2xl text-charcoal-light font-body mb-10 max-w-xl">
              Therapy for anxiety, trauma, and burnout in Santa Monica, CA.
            </p>
            <button className="inline-flex items-center gap-3 px-8 py-4 bg-terracotta text-white font-medium text-base lg:text-lg hover:bg-terracotta-dark transition-all duration-300 uppercase tracking-wider shadow-lg hover:shadow-xl">
              SCHEDULE CONSULTATION
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
          </div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;
