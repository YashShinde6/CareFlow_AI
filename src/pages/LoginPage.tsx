import { motion } from 'framer-motion';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { User, Lock, Stethoscope, Users, Clipboard } from 'lucide-react';

export const LoginPage = () => {
  const [credentials, setCredentials] = useState({
    username: '',
    password: '',
    role: 'staff'
  });
  const navigate = useNavigate();

  const roles = [
    { value: 'staff', label: 'Staff', icon: Users, color: 'blue' },
    { value: 'doctor', label: 'Doctor', icon: Stethoscope, color: 'green' },
    { value: 'nurse', label: 'Nurse', icon: Clipboard, color: 'teal' }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle login logic here
    console.log('Login attempt:', credentials);
    
    // Simulate successful login
    localStorage.setItem('user', JSON.stringify({
      username: credentials.username,
      role: credentials.role
    }));
    
    navigate('/dashboard');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-teal-700 flex items-center justify-center p-4">
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="bg-white rounded-2xl shadow-2xl w-full max-w-md overflow-hidden"
      >
        <div className="p-8">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Welcome Back</h1>
            <p className="text-gray-600">Sign in to access Careflow-AI</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Role Selection */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-3">
                Select Your Role
              </label>
              <div className="grid grid-cols-3 gap-2">
                {roles.map((role) => {
                  const IconComponent = role.icon;
                  return (
                    <label
                      key={role.value}
                      className={`cursor-pointer p-3 rounded-lg border-2 transition-all duration-200 ${
                        credentials.role === role.value
                          ? `border-${role.color}-500 bg-${role.color}-50`
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                    >
                      <input
                        type="radio"
                        name="role"
                        value={role.value}
                        checked={credentials.role === role.value}
                        onChange={handleChange}
                        className="sr-only"
                      />
                      <div className="text-center">
                        <IconComponent className={`h-6 w-6 mx-auto mb-1 ${
                          credentials.role === role.value ? `text-${role.color}-600` : 'text-gray-400'
                        }`} />
                        <span className={`text-xs font-medium ${
                          credentials.role === role.value ? `text-${role.color}-600` : 'text-gray-600'
                        }`}>
                          {role.label}
                        </span>
                      </div>
                    </label>
                  );
                })}
              </div>
            </div>

            {/* Username */}
            <div>
              <label htmlFor="username" className="block text-sm font-medium text-gray-700 mb-2">
                Username
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <User className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  id="username"
                  name="username"
                  value={credentials.username}
                  onChange={handleChange}
                  required
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                  placeholder="Enter your username"
                />
              </div>
            </div>

            {/* Password */}
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                Password
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Lock className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={credentials.password}
                  onChange={handleChange}
                  required
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                  placeholder="Enter your password"
                />
              </div>
            </div>

            {/* Login Button */}
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg font-semibold hover:bg-blue-700 focus:ring-4 focus:ring-blue-200 transition-all duration-200"
            >
              Sign In
            </button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-sm text-gray-600">
              Need help accessing your account?{' '}
              <a href="/contact" className="text-blue-600 hover:text-blue-700 font-medium">
                Contact Support
              </a>
            </p>
          </div>
        </div>

        <div className="bg-gray-50 px-8 py-4">
          <div className="text-center">
            <p className="text-xs text-gray-500">
              Demo Credentials: Username: demo | Password: demo123
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};