import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Zap, Users, BarChart, Shield } from 'lucide-react';
import Spline from '@splinetool/react-spline';

export const HomePage = () => {
  const features = [
    {
      icon: Zap,
      title: 'AI-Powered Automation',
      description: 'Streamline discharge processes with intelligent automation and reduce manual workload.'
    },
    {
      icon: Users,
      title: 'Enhanced Collaboration',
      description: 'Seamless communication between doctors, nurses, and administrative staff.'
    },
    {
      icon: BarChart,
      title: 'Real-time Analytics',
      description: 'Get insights into hospital operations and patient flow with advanced analytics.'
    },
    {
      icon: Shield,
      title: 'Secure & Compliant',
      description: 'HIPAA-compliant platform ensuring patient data security and privacy.'
    }
  ];

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="relative text-white overflow-hidden"
      >
        {/* Spline 3D Background */}
        <div className="absolute inset-0 w-full h-full scale-110">
          <Spline 
            scene="https://prod.spline.design/5DohHFBkmuKbl2pJ/scene.splinecode"
            className="w-full h-full object-cover"
            style={{
              pointerEvents: 'none'
            }}
          />
              
          {/* Overlay to hide Spline branding (bottom right) */}
          <div
            className="absolute"
            style={{
              right: 12,
              bottom: 12,
              width: 120,
              height: 40,
              background: 'rgba(30,41,59,0.85)', // Tailwind slate-800/85
              borderRadius: '12px',
              zIndex: 20,
            }}
          />
          {/* Overlay to hide the "R" button (bottom right corner) */}
          <div
  className="absolute"
  style={{
    left: 200,          // 👈 move from the left side
    top: 175,          // adjust this value to cover the "R"
    width: 50,
    height: 50,
    background: 'rgb(207,207,207)',
    borderRadius: '50%',
    zIndex: 20,
  }}
/>
<div
  className="absolute"
  style={{
    left:1500,          // 👈 move from the left side
    top: 780,          // adjust this value to cover the "R"
    width: 150,
    height: 50,
    background: 'rgb(207, 207, 207)',
    borderRadius: '50%',
    zIndex: 20,
  }}
/>

        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[600px]">
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="z-20"
            >
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight mb-6">
                Careflow-AI
                <span className="block text-black">Discharge Automation</span>
              </h1>
              <p className="text-xl text-white/90 mb-8 backdrop-blur-sm bg-white/10 p-4 rounded-lg">
                AI-powered discharge, billing, and patient care solutions that transform healthcare operations and improve patient outcomes.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/login"
                  className="inline-flex items-center px-8 py-3 bg-teal-600 text-white font-semibold rounded-lg hover:bg-teal-700 transition-all duration-200 group shadow-lg hover:shadow-xl"
                >
                  Get Started
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center px-8 py-3 border-2 border-white/80 text-white font-semibold rounded-lg hover:bg-white hover:text-blue-900 transition-all duration-200 shadow-lg hover:shadow-xl"
                >
                  Request Demo
                </Link>
              </div>
            </motion.div>
            
            {/* Right side - let Spline component show through */}
            <div className="hidden lg:block"></div>
          </div>
        </div>
        
        {/* Hide Spline branding */}
        
      </motion.section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Transforming Healthcare Operations
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our AI-driven platform streamlines hospital workflows, reduces administrative burden, 
              and improves patient care quality.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gray-50 p-6 rounded-xl hover:shadow-lg transition-shadow duration-300"
              >
                <div className="h-12 w-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Ready to Transform Your Hospital?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Join leading healthcare institutions using Careflow-AI to improve efficiency and patient outcomes.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors duration-200 group"
            >
              Schedule a Demo
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};