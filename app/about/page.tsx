'use client';

import Navigation from '@/components/Navigation';
import { MotionDiv } from '@/components/MotionWrapper';

export default function About() {
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
              About <span className="text-primary">Neurobot.ai</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Revolutionizing currency trading through advanced AI technology and
              machine learning algorithms.
            </p>
          </MotionDiv>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-dark-lighter">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <MotionDiv
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold mb-6">Our Mission</h2>
              <p className="text-gray-300 mb-6">
                At Neurobot.ai, we're dedicated to democratizing access to
                sophisticated trading strategies through artificial intelligence.
                Our mission is to empower traders of all levels with
                professional-grade tools and insights.
              </p>
              <p className="text-gray-300">
                We believe that everyone should have access to the same advanced
                trading technology that was once only available to large financial
                institutions.
              </p>
            </MotionDiv>
            <MotionDiv
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-dark p-8 rounded-lg border border-primary/20"
            >
              <h3 className="text-2xl font-bold text-primary mb-4">
                Our Values
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  Innovation in AI Technology
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  Transparency in Operations
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  Customer Success Focus
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  Continuous Improvement
                </li>
              </ul>
            </MotionDiv>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="container-custom">
          <h2 className="text-4xl font-bold text-center mb-16">Our Team</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <MotionDiv
              whileHover={{ scale: 1.05 }}
              className="text-center"
            >
              <div className="w-48 h-48 bg-dark-lighter rounded-full mx-auto mb-4"></div>
              <h3 className="text-xl font-bold mb-2">John Smith</h3>
              <p className="text-primary mb-2">CEO & Founder</p>
              <p className="text-gray-300">
                15+ years of experience in algorithmic trading and AI development.
              </p>
            </MotionDiv>
            <MotionDiv
              whileHover={{ scale: 1.05 }}
              className="text-center"
            >
              <div className="w-48 h-48 bg-dark-lighter rounded-full mx-auto mb-4"></div>
              <h3 className="text-xl font-bold mb-2">Sarah Johnson</h3>
              <p className="text-secondary mb-2">CTO</p>
              <p className="text-gray-300">
                Expert in machine learning and quantitative finance.
              </p>
            </MotionDiv>
            <MotionDiv
              whileHover={{ scale: 1.05 }}
              className="text-center"
            >
              <div className="w-48 h-48 bg-dark-lighter rounded-full mx-auto mb-4"></div>
              <h3 className="text-xl font-bold mb-2">Michael Chen</h3>
              <p className="text-primary mb-2">Head of Research</p>
              <p className="text-gray-300">
                PhD in Financial Mathematics with focus on AI applications.
              </p>
            </MotionDiv>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-dark-lighter">
        <div className="container-custom">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <MotionDiv
              whileHover={{ scale: 1.05 }}
              className="p-6"
            >
              <h3 className="text-4xl font-bold text-primary mb-2">10K+</h3>
              <p className="text-gray-300">Active Traders</p>
            </MotionDiv>
            <MotionDiv
              whileHover={{ scale: 1.05 }}
              className="p-6"
            >
              <h3 className="text-4xl font-bold text-secondary mb-2">$50M+</h3>
              <p className="text-gray-300">Trading Volume</p>
            </MotionDiv>
            <MotionDiv
              whileHover={{ scale: 1.05 }}
              className="p-6"
            >
              <h3 className="text-4xl font-bold text-primary mb-2">99.9%</h3>
              <p className="text-gray-300">Uptime</p>
            </MotionDiv>
            <MotionDiv
              whileHover={{ scale: 1.05 }}
              className="p-6"
            >
              <h3 className="text-4xl font-bold text-secondary mb-2">24/7</h3>
              <p className="text-gray-300">Support</p>
            </MotionDiv>
          </div>
        </div>
      </section>
    </main>
  );
} 