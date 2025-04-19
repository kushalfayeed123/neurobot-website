'use client';

import Navigation from '@/components/Navigation';
import { MotionDiv } from '@/components/MotionWrapper';

export default function Contact() {
  return (
    <main className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="container-custom">
          <MotionDiv
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Contact <span className="text-primary">Us</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Have questions? We're here to help. Reach out to our team for
              support or inquiries.
            </p>
          </MotionDiv>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12">
            <MotionDiv
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold mb-6">Get in Touch</h2>
              <p className="text-gray-300 mb-8">
                Fill out the form and we'll get back to you as soon as possible.
                Our team is available 24/7 to assist you with any questions or
                concerns.
              </p>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <svg
                      className="w-6 h-6 text-primary"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-1">Email</h3>
                    <p className="text-gray-300">support@neurobot.ai</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center">
                    <svg
                      className="w-6 h-6 text-secondary"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-1">Phone</h3>
                    <p className="text-gray-300">+1 (555) 123-4567</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <svg
                      className="w-6 h-6 text-primary"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-1">Location</h3>
                    <p className="text-gray-300">
                      123 Trading Street, Suite 100<br />
                      New York, NY 10001
                    </p>
                  </div>
                </div>
              </div>
            </MotionDiv>
            <MotionDiv
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-dark-lighter p-8 rounded-lg"
            >
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    className="w-full p-4 rounded-lg bg-dark border border-gray-700 focus:border-primary focus:outline-none"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    className="w-full p-4 rounded-lg bg-dark border border-gray-700 focus:border-primary focus:outline-none"
                    placeholder="john@example.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    className="w-full p-4 rounded-lg bg-dark border border-gray-700 focus:border-primary focus:outline-none"
                    placeholder="How can we help?"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Message
                  </label>
                  <textarea
                    className="w-full p-4 rounded-lg bg-dark border border-gray-700 focus:border-primary focus:outline-none h-32"
                    placeholder="Your message here..."
                  ></textarea>
                </div>
                <button type="submit" className="btn-primary w-full">
                  Send Message
                </button>
              </form>
            </MotionDiv>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-dark-lighter">
        <div className="container-custom">
          <h2 className="text-4xl font-bold text-center mb-16">
            Frequently Asked Questions
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <MotionDiv
              whileHover={{ scale: 1.02 }}
              className="p-6 bg-dark rounded-lg"
            >
              <h3 className="text-xl font-bold mb-4">How does the AI trading bot work?</h3>
              <p className="text-gray-300">
                Our AI bot uses advanced machine learning algorithms to analyze market
                patterns and generate trading signals. It continuously learns from
                market data to improve its performance.
              </p>
            </MotionDiv>
            <MotionDiv
              whileHover={{ scale: 1.02 }}
              className="p-6 bg-dark rounded-lg"
            >
              <h3 className="text-xl font-bold mb-4">What brokers do you support?</h3>
              <p className="text-gray-300">
                We support major forex brokers including MetaTrader 4/5, cTrader,
                and other popular trading platforms through our API integration.
              </p>
            </MotionDiv>
            <MotionDiv
              whileHover={{ scale: 1.02 }}
              className="p-6 bg-dark rounded-lg"
            >
              <h3 className="text-xl font-bold mb-4">Is there a free trial available?</h3>
              <p className="text-gray-300">
                Yes, we offer a 14-day free trial of our Pro plan. You can test all
                features and evaluate the bot's performance before committing.
              </p>
            </MotionDiv>
            <MotionDiv
              whileHover={{ scale: 1.02 }}
              className="p-6 bg-dark rounded-lg"
            >
              <h3 className="text-xl font-bold mb-4">What kind of support do you offer?</h3>
              <p className="text-gray-300">
                We provide 24/7 customer support through email, phone, and live chat.
                Our team of experts is always ready to help you with any questions.
              </p>
            </MotionDiv>
          </div>
        </div>
      </section>
    </main>
  );
} 