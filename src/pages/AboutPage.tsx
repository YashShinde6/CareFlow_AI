import { motion } from 'framer-motion';
import { CheckCircle, Clock, DollarSign, Users as Users2, Workflow } from 'lucide-react';

export const AboutPage = () => {
  const benefits = [
    {
      icon: Clock,
      title: 'Faster Discharge Process',
      description: 'Reduce discharge time by up to 60% with AI-powered automation and streamlined workflows.'
    },
    {
      icon: DollarSign,
      title: 'Accurate Billing',
      description: 'Eliminate billing errors and ensure compliance with automated charge capture and verification.'
    },
    {
      icon: Workflow,
      title: 'Automated Workflow',
      description: 'Intelligent task routing and automated notifications keep your team coordinated and efficient.'
    },
    {
      icon: Users2,
      title: 'Better Communication',
      description: 'Real-time updates and messaging between doctors, nurses, and administrative staff.'
    }
  ];

  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            About Careflow-AI
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We're revolutionizing healthcare operations with intelligent automation, 
            making hospitals more efficient while improving patient care quality.
          </p>
        </motion.div>

        {/* What we do */}
        <motion.section
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                What Careflow-AI Does
              </h2>
              <p className="text-gray-600 mb-6 text-lg">
                Careflow-AI is an advanced hospital management system that leverages artificial intelligence 
                to automate discharge processes, streamline billing operations, and enhance patient care coordination.
              </p>
              <p className="text-gray-600 text-lg">
                Our platform integrates seamlessly with existing hospital infrastructure, providing 
                real-time insights and automation that reduces administrative burden while improving 
                patient outcomes and operational efficiency.
              </p>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-teal-50 p-8 rounded-2xl">
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-600" />
                  <span className="text-gray-900 font-medium">HIPAA Compliant</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-600" />
                  <span className="text-gray-900 font-medium">Real-time Processing</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-600" />
                  <span className="text-gray-900 font-medium">AI-Powered Insights</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-600" />
                  <span className="text-gray-900 font-medium">24/7 Support</span>
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Benefits */}
        <section>
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Key Benefits
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover how Careflow-AI transforms healthcare operations and improves patient care.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="h-12 w-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                  <benefit.icon className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};