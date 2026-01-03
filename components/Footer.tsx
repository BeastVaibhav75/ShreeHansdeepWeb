import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-charcoal-900 text-white">
      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="relative w-16 h-16 md:w-20 md:h-20">
                <Image
                  src="/images/logo.png"
                  alt="Shree Hans Deep Logo"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
              <div>
                <h3 className="font-bold text-lg">Shree Hans Deep</h3>
                <p className="text-sm text-charcoal-400">Wood Works & Saw Mills</p>
              </div>
            </div>
            <p className="text-charcoal-300 mb-4">
              Premium wood furniture, industrial packing materials, custom woodwork, 
              and metal works. Serving homes, offices, and factories with quality craftsmanship.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-charcoal-300 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-charcoal-300 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/catalog" className="text-charcoal-300 hover:text-white transition-colors">
                  Catalog
                </Link>
              </li>
              <li>
                <Link href="/portfolio" className="text-charcoal-300 hover:text-white transition-colors">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-charcoal-300 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-charcoal-300">
              <li className="flex items-start">
                <svg className="w-5 h-5 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <a 
                  href="https://maps.app.goo.gl/7Vst2UXRK2n5DPUk8" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-sm hover:text-white transition-colors"
                >
                  Near NH-48, Rewari Road,<br />
                  Kasola Chowk, Haryana
                </a>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <div className="space-y-1">
                  <a href="tel:01274261129" className="hover:text-white transition-colors block">
                    01274-261129
                  </a>
                  <a href="tel:+919812125410" className="hover:text-white transition-colors block">
                    +91 98121 25410
                  </a>
                  <a href="tel:+919466022823" className="hover:text-white transition-colors block">
                    +91 94660 22823
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-charcoal-800 mt-8 pt-8 text-center text-charcoal-400 text-sm">
          <p>&copy; {new Date().getFullYear()} Shree Hans Deep Wood Works & Saw Mills. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

