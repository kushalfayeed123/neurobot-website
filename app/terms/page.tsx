'use client';

import Navigation from '@/components/Navigation';
import { MotionDiv } from '@/components/MotionWrapper';

export default function Terms() {
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
              Terms of <span className="text-primary">Service</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Please read these terms carefully before using our services.
            </p>
          </MotionDiv>
        </div>
      </section>

      {/* Terms Content */}
      <section className="py-20">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto prose prose-invert">
            <MotionDiv
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-2xl font-bold mb-4">1. Acceptance of Terms</h2>
                <p className="text-gray-300">
                  By accessing and using Neurobot.ai's services, you agree to be
                  bound by these Terms of Service. If you do not agree to these
                  terms, please do not use our services.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">2. Description of Service</h2>
                <p className="text-gray-300">
                  Neurobot.ai provides AI-powered trading signals and automated
                  trading services. Our platform uses advanced algorithms to analyze
                  market data and generate trading recommendations.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">3. User Responsibilities</h2>
                <ul className="list-disc pl-6 text-gray-300 space-y-2">
                  <li>You must be at least 18 years old to use our services</li>
                  <li>You are responsible for maintaining the security of your account</li>
                  <li>You must comply with all applicable laws and regulations</li>
                  <li>You acknowledge that trading involves risk of loss</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">4. Risk Disclosure</h2>
                <p className="text-gray-300">
                  Trading in financial markets carries a high level of risk and may
                  not be suitable for all investors. Before deciding to trade, you
                  should carefully consider your investment objectives, level of
                  experience, and risk appetite.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">5. Subscription and Payments</h2>
                <ul className="list-disc pl-6 text-gray-300 space-y-2">
                  <li>Subscription fees are billed in advance on a monthly basis</li>
                  <li>All payments are non-refundable unless otherwise specified</li>
                  <li>We reserve the right to modify our pricing at any time</li>
                  <li>Cancellation must be done before the next billing cycle</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">6. Intellectual Property</h2>
                <p className="text-gray-300">
                  All content, features, and functionality of our service are owned
                  by Neurobot.ai and are protected by international copyright,
                  trademark, and other intellectual property laws.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">7. Limitation of Liability</h2>
                <p className="text-gray-300">
                  Neurobot.ai shall not be liable for any indirect, incidental,
                  special, consequential, or punitive damages resulting from your
                  use or inability to use the service.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">8. Changes to Terms</h2>
                <p className="text-gray-300">
                  We reserve the right to modify these terms at any time. We will
                  notify users of any material changes via email or through our
                  platform.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">9. Contact Information</h2>
                <p className="text-gray-300">
                  If you have any questions about these Terms of Service, please
                  contact us at legal@neurobot.ai
                </p>
              </div>
            </MotionDiv>
          </div>
        </div>
      </section>

      {/* Last Updated */}
      <section className="py-10 bg-dark-lighter">
        <div className="container-custom text-center">
          <p className="text-gray-300">
            Last updated: {new Date().toLocaleDateString()}
          </p>
        </div>
      </section>
    </main>
  );
} 