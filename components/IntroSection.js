'use client';

import Image from 'next/image';

const IntroSection = () => {
  return (
    <section className="min-h-screen bg-cream-100 px-6 py-20 lg:px-16">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Left Side - Text Content */}
          <div className="w-full lg:w-1/2 space-y-8">
            <h2 className="text-5xl lg:text-6xl font-display font-medium text-charcoal leading-tight">
              Hi, I'm Dr. Maya Reynolds.
            </h2>
            
            <p className="text-lg lg:text-xl text-charcoal-light font-body leading-relaxed">
              I'm a licensed clinical psychologist in Santa Monica who works with high-achieving adults struggling with anxiety, stress, trauma, and burnout. My approach is warm, collaborative, and grounded—combining evidence-based methods like CBT, EMDR, and mindfulness with body-oriented techniques to help you feel calmer, more connected, and genuinely at ease.
            </p>

            <button className="inline-flex items-center gap-3 px-8 py-4 bg-terracotta text-white font-medium text-base hover:bg-terracotta-dark transition-all duration-300 uppercase tracking-wider mt-6">
              BOOK YOUR SESSION
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
          </div>

          {/* Right Side - Overlapping Circular Images */}
          <div className="w-full lg:w-1/2 relative">
            <div className="relative w-full" style={{ paddingBottom: '100%' }}>
              {/* Large Circle - Lilac Flowers */}
              <div className="absolute top-0 right-0 w-3/4 h-3/4" style={{ clipPath: 'circle(50% at 50% 50%)' }}>
                <div className="relative w-full h-full bg-gradient-to-br from-terracotta/10 to-cream-100 rounded-full overflow-hidden">
                  <Image 
                    src="https://images.unsplash.com/photo-1490750967868-88aa4486c946?w=800&q=80" 
                    alt="Beautiful lilac flowers" 
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 75vw, 37.5vw"
                  />
                </div>
              </div>

              {/* Small Circle - White Hydrangea */}
              <div className="absolute bottom-0 right-0 w-1/2 h-1/2" style={{ clipPath: 'circle(50% at 50% 50%)' }}>
                <div className="relative w-full h-full rounded-full overflow-hidden shadow-xl">
                  <Image 
                    src="https://images.unsplash.com/photo-1463320726281-696a485928c7?w=600&q=80" 
                    alt="White hydrangea flowers" 
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 50vw, 25vw"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntroSection;
