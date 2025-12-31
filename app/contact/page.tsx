"use client";

import { motion } from "framer-motion";
import InquiryForm from "@/components/InquiryForm";

export default function Contact() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-wood-100 via-wood-50 to-forest-50 section-padding">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-charcoal-900 mb-6">
              Get in Touch
            </h1>
            <p className="text-xl text-charcoal-700 leading-relaxed">
              Have a project in mind? Contact us for a consultation and quote
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold text-charcoal-900 mb-6">
                Contact Information
              </h2>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-forest-100 rounded-lg flex items-center justify-center flex-shrink-0 mr-4">
                    <svg className="w-6 h-6 text-forest-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-charcoal-900 mb-1">Address</h3>
                    <p className="text-charcoal-600">
                      Near NH-48, Rewari Road,<br />
                      Kasola Chowk, Haryana
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-forest-100 rounded-lg flex items-center justify-center flex-shrink-0 mr-4">
                    <svg className="w-6 h-6 text-forest-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-charcoal-900 mb-1">Phone</h3>
                    <div className="space-y-1">
                      <a href="tel:01274261129" className="text-forest-600 hover:text-forest-700 block">
                        01274-261129
                      </a>
                      <a href="tel:+919812125410" className="text-forest-600 hover:text-forest-700 block">
                        +91 98121 25410
                      </a>
                      <a href="tel:+919466022823" className="text-forest-600 hover:text-forest-700 block">
                        +91 94660 22823
                      </a>
                    </div>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-forest-100 rounded-lg flex items-center justify-center flex-shrink-0 mr-4">
                    <svg className="w-6 h-6 text-forest-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-charcoal-900 mb-1">Email</h3>
                    <a href="mailto:shreehansdeep94@gmail.com" className="text-forest-600 hover:text-forest-700">
                      shreehansdeep94@gmail.com
                    </a>
                  </div>
                </div>
              </div>

              {/* Quick Action Buttons */}
              <div className="mt-8 space-y-4">
                <a
                  href="tel:+919466022823"
                  className="btn-primary w-full text-center block"
                >
                  📞 Call Now
                </a>
                <a
                  href="https://wa.me/919466022823"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-200 shadow-md hover:shadow-lg w-full text-center block"
                >
                  💬 WhatsApp Chat
                </a>
              </div>
            </motion.div>

            {/* Inquiry Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold text-charcoal-900 mb-6">
                Send Us an Inquiry
              </h2>
              <div className="bg-wood-50 p-6 rounded-lg">
                <InquiryForm />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Google Maps */}
      <section className="section-padding bg-wood-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-charcoal-900 mb-6 text-center">
              Find Us
            </h2>
            <div className="rounded-lg overflow-hidden shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d219.89866717748342!2d76.64478367542614!3d28.13495827375003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d4e21ebe3475d%3A0xfd217627202db1a3!2sKurlon%20Mattress%20Store%20-%20Shree%20Hansdeep%20Wood%20Works%20and%20Saw%20Mills!5e0!3m2!1sen!2sin!4v1767201597259!5m2!1sen!2sin"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full"
                title="Shree Hans Deep Wood Works Location"
              />
            </div>
            <p className="text-center text-charcoal-600 mt-4">
              Near NH-48, Rewari Road, Kasola Chowk, Haryana
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

