'use client';

import { useState } from 'react';
import Image from 'next/image';

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "Do you offer telehealth sessions?",
      answer: "Yes. I offer both in-person sessions in Santa Monica and secure telehealth sessions for clients located anywhere in California. Many clients find a hybrid approach works well for them."
    },
    {
      question: "What is EMDR therapy?",
      answer: "EMDR (Eye Movement Desensitization and Reprocessing) is an evidence-based approach particularly effective for trauma and anxiety. It helps your brain process difficult memories and experiences in a way that reduces their emotional intensity. I use EMDR alongside other modalities based on your specific needs."
    },
    {
      question: "Do you accept insurance?",
      answer: "I'm an out-of-network provider, but I can provide you with a superbill to submit to your insurance for potential reimbursement. Many clients find their out-of-network benefits cover a significant portion of the fee."
    },
    {
      question: "What types of anxiety do you treat?",
      answer: "I work with various forms of anxiety including generalized anxiety, panic disorder, social anxiety, and anxiety related to trauma or perfectionism. We'll tailor our approach to your specific experience—whether that's racing thoughts, body symptoms, or worry patterns."
    },
    {
      question: "How long does therapy typically take?",
      answer: "This varies based on your goals and needs. Some clients benefit from shorter-term focused work (12-20 sessions), while others prefer longer-term support. We'll regularly check in on your progress and adjust as needed."
    },
    {
      question: "Are you currently accepting new clients?",
      answer: "Availability changes, but I do my best to accommodate new clients. Please reach out via the consultation form or phone, and I'll let you know current availability and next steps."
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-white to-cream-50 px-6 py-20 lg:px-16">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-12 lg:gap-16">
          {/* Left Side - Image with Arch Shape */}
          <div className="w-full lg:w-1/2">
            <div className="relative aspect-[3/4] overflow-hidden" style={{ clipPath: 'ellipse(50% 50% at 50% 50%)' }}>
              <Image 
                src="https://images.unsplash.com/photo-1502082553048-f009c37129b9?w=800&q=80" 
                alt="Lavender flowers" 
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>

          {/* Right Side - FAQs */}
          <div className="w-full lg:w-1/2">
            <h2 className="text-4xl lg:text-5xl font-display font-medium text-charcoal mb-12">
              Common Questions
            </h2>

            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <div key={index} className="border-t border-charcoal/20 pt-6">
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full flex justify-between items-start gap-4 text-left group"
                  >
                    <h3 className="text-2xl lg:text-3xl font-display font-medium text-charcoal group-hover:text-terracotta transition-colors">
                      {faq.question}
                    </h3>
                    <span className="text-3xl text-terracotta flex-shrink-0 transition-transform duration-300" style={{ transform: openIndex === index ? 'rotate(45deg)' : 'rotate(0deg)' }}>
                      +
                    </span>
                  </button>
                  
                  {openIndex === index && (
                    <div className="mt-4 pr-12">
                      <p className="text-lg text-charcoal-light font-body leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
