import Image from 'next/image';

const SupportSection = () => {
  const challenges = [
    "Racing thoughts, constant worry, or feeling emotionally on edge",
    "Body tension, sleep difficulties, or always bracing for something to go wrong",
    "Effects of past trauma showing up in current relationships or confidence",
    "Professional burnout, perfectionism, or high internal pressure",
    "Feeling disconnected from yourself after years of just pushing through"
  ];

  return (
    <section className="min-h-screen bg-terracotta-light/15 px-6 py-20 lg:px-16">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Left Side - Image */}
          <div className="w-full lg:w-1/2 order-2 lg:order-1">
            <div className="relative aspect-[3/4] lg:aspect-[4/5] overflow-hidden">
              <Image 
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&q=80" 
                alt="Peaceful woman looking up" 
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>

          {/* Right Side - Text Content */}
          <div className="w-full lg:w-1/2 space-y-8 order-1 lg:order-2 bg-sage-light/20 p-8 lg:p-12">
            <h2 className="text-4xl lg:text-5xl font-display font-medium text-charcoal leading-tight">
              You don't have to keep functioning on <em className="font-display italic font-light">empty</em>.
            </h2>
            
            <p className="text-xl lg:text-2xl text-charcoal font-body leading-relaxed">
              Therapy can help if you're experiencing:
            </p>
            
            <ul className="space-y-4">
              {challenges.map((challenge, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="text-terracotta text-xl mt-1">•</span>
                  <span className="text-lg lg:text-xl text-charcoal-light font-body leading-relaxed">
                    {challenge}
                  </span>
                </li>
              ))}
            </ul>

            <p className="text-lg lg:text-xl text-charcoal-light font-body leading-relaxed pt-4">
              In our work together, we'll create a space to slow down, reconnect with yourself, and develop practical tools alongside deeper insight—so you can build resilience and a stronger relationship with yourself.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SupportSection;
