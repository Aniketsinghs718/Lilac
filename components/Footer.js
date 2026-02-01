const Footer = () => {
  return (
    <footer className="bg-cream-50 px-6 py-16 lg:px-16">
      <div className="max-w-7xl mx-auto">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Column 1 - Contact Info */}
          <div>
            <h3 className="text-2xl lg:text-3xl font-display font-medium text-charcoal mb-6">
              Dr. Maya Reynolds, PsyD
            </h3>
            <div className="space-y-3 text-charcoal-light font-body">
              <p>123th Street 45 W</p>
              <p>Santa Monica, CA 90401</p>
              <p className="mt-6">
                <a href="mailto:contact@drmayareynolds.com" className="underline hover:text-terracotta transition-colors">
                  contact@drmayareynolds.com
                </a>
              </p>
              <p>
                <a href="tel:3105551234" className="underline hover:text-terracotta transition-colors">
                  (310) 555-1234
                </a>
              </p>
            </div>
          </div>

          {/* Column 2 - Hours */}
          <div>
            <h3 className="text-xl lg:text-2xl font-display font-medium text-charcoal mb-6">
              Hours
            </h3>
            <div className="space-y-2 text-charcoal-light font-body">
              <p>Monday – Thursday</p>
              <p>9am – 7pm</p>
              <p className="mt-4">Friday</p>
              <p>9am – 4pm</p>
            </div>
          </div>

          {/* Column 3 - Find */}
          <div>
            <h3 className="text-xl lg:text-2xl font-display font-medium text-charcoal mb-6">
              Find
            </h3>
            <nav className="space-y-3">
              <div>
                <a href="#home" className="text-charcoal-light font-body hover:text-terracotta transition-colors">
                  Home
                </a>
              </div>
              <div>
                <a href="#contact" className="text-charcoal-light font-body underline hover:text-terracotta transition-colors">
                  Contact
                </a>
              </div>
              <div>
                <a href="#blog" className="text-charcoal-light font-body underline hover:text-terracotta transition-colors">
                  Blog
                </a>
              </div>
            </nav>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-charcoal/20 my-8"></div>

        {/* Bottom Footer - Legal Links */}
        <div className="space-y-4 text-center">
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-charcoal-light font-body">
            <a href="#privacy" className="underline hover:text-terracotta transition-colors">
              Privacy & Cookies Policy
            </a>
            <a href="#estimate" className="underline hover:text-terracotta transition-colors">
              Good Faith Estimate
            </a>
            <a href="#terms" className="underline hover:text-terracotta transition-colors">
              Website Terms & Conditions
            </a>
            <a href="#disclaimer" className="underline hover:text-terracotta transition-colors">
              Disclaimer
            </a>
          </div>

          <p className="text-sm text-charcoal-light font-body">
            Website Template Credits:{' '}
            <a href="https://gobloomcreative.com" className="underline hover:text-terracotta transition-colors" target="_blank" rel="noopener noreferrer">
              Go Bloom Creative
            </a>
          </p>

          <p className="text-sm text-charcoal-light font-body mt-6">
            All Rights Reserved © 2024 Dr. Maya Reynolds, PsyD
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
