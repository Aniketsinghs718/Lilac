import Image from 'next/image';

const AboutSection = () => {
  return (
    <section className="min-h-screen bg-white px-6 py-20 lg:px-16">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Left Side - Text Content */}
          <div className="w-full lg:w-1/2 space-y-8">
            <h2 className="text-4xl lg:text-5xl font-display font-medium text-charcoal leading-tight">
              You deserve more than just pushing through.
            </h2>
            
            <p className="text-lg lg:text-xl text-charcoal-light font-body leading-relaxed">
              Maybe you're functioning on the outside—meeting deadlines, showing up, keeping it together—but inside, you're exhausted. Anxious. Stuck in overthinking or bracing for the next thing to go wrong.
            </p>
            
            <p className="text-lg lg:text-xl text-charcoal-light font-body leading-relaxed">
              If past experiences are affecting your relationships, confidence, or sense of safety, therapy can help you reconnect with yourself and build a life that feels sustainable, not just survivable.
            </p>

            <button className="inline-flex items-center gap-3 px-8 py-4 bg-sage text-white font-medium text-base hover:bg-sage-dark transition-all duration-300 uppercase tracking-wider mt-6">
              START THERAPY
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
          </div>

          {/* Right Side - Image */}
          <div className="w-full lg:w-1/2">
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image 
                src="https://images.unsplash.com/photo-1495364141860-b0d03eccd065?w=800&q=80" 
                alt="Coffee cup with notebook and hat" 
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
