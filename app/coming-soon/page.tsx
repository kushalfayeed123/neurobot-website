import Navigation from '@/components/Navigation';
import { FaRobot, FaChartLine, FaClock } from 'react-icons/fa';
import { MotionDiv } from '@/components/MotionWrapper';

export default function ComingSoon() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen pt-24 pb-16">
        <div className="container-custom">
          <MotionDiv
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-blue-400 bg-clip-text text-transparent">
              Coming Soon
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-12">
              We're working hard to bring you the future of AI-powered trading
            </p>
          </MotionDiv>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto mt-12">
            <MotionDiv
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-dark-lighter p-6 rounded-xl text-center"
            >
              <div className="flex justify-center mb-4">
                <FaRobot className="text-4xl text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">AI-Powered</h3>
              <p className="text-gray-400">Advanced machine learning algorithms for optimal trading decisions</p>
            </MotionDiv>

            <MotionDiv
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-dark-lighter p-6 rounded-xl text-center"
            >
              <div className="flex justify-center mb-4">
                <FaChartLine className="text-4xl text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Real-time Analysis</h3>
              <p className="text-gray-400">Instant market analysis and automated trading execution</p>
            </MotionDiv>

            <MotionDiv
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="bg-dark-lighter p-6 rounded-xl text-center"
            >
              <div className="flex justify-center mb-4">
                <FaClock className="text-4xl text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">24/7 Trading</h3>
              <p className="text-gray-400">Continuous monitoring and trading across all market hours</p>
            </MotionDiv>
          </div>

          <MotionDiv
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="text-center mt-16"
          >
            <a
              href="https://wa.me/16013178091"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-flex items-center space-x-2"
            >
              <span>Get Early Access</span>
            </a>
            <p className="text-gray-400 mt-4">
              Want to be notified when we launch? Contact us for early access!
            </p>
          </MotionDiv>
        </div>
      </main>
    </>
  );
} 