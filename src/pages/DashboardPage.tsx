import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { 
  Users, 
  Activity, 
  Clock, 
  FileText, 
  LogOut, 
  Bell,
  Calendar,
  BarChart3
} from 'lucide-react';

interface User {
  username: string;
  role: string;
}

export const DashboardPage = () => {
  const [user, setUser] = useState<User | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const userData = localStorage.getItem('user');
    if (userData) {
      setUser(JSON.parse(userData));
    } else {
      navigate('/login');
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('user');
    navigate('/');
  };

  if (!user) return null;

  const getRoleColor = (role: string) => {
    switch (role) {
      case 'doctor': return 'green';
      case 'nurse': return 'teal';
      default: return 'blue';
    }
  };

  const dashboardStats = [
    { title: 'Active Patients', value: '24', icon: Users, color: 'blue' },
    { title: 'Pending Discharges', value: '6', icon: Clock, color: 'orange' },
    { title: 'Completed Today', value: '12', icon: Activity, color: 'green' },
    { title: 'Reports Generated', value: '18', icon: FileText, color: 'purple' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Dashboard Header */}
      <motion.div
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="bg-white shadow-sm"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">
                Welcome back, {user.username}!
              </h1>
              <p className="text-gray-600 capitalize">
                {user.role} Dashboard - Careflow-AI
              </p>
            </div>
            <div className="flex items-center space-x-4">
              <button className="p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors">
                <Bell className="h-6 w-6" />
              </button>
              <div className={`px-3 py-1 rounded-full text-sm font-medium bg-${getRoleColor(user.role)}-100 text-${getRoleColor(user.role)}-800`}>
                {user.role.charAt(0).toUpperCase() + user.role.slice(1)}
              </div>
              <button
                onClick={handleLogout}
                className="flex items-center space-x-2 px-4 py-2 text-gray-700 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors"
              >
                <LogOut className="h-5 w-5" />
                <span>Logout</span>
              </button>
            </div>
          </div>
        </div>
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats Grid */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8"
        >
          {dashboardStats.map((stat, index) => (
            <div
              key={stat.title}
              className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex items-center justify-between mb-4">
                <div className={`h-12 w-12 bg-${stat.color}-100 rounded-lg flex items-center justify-center`}>
                  <stat.icon className={`h-6 w-6 text-${stat.color}-600`} />
                </div>
                <span className={`text-2xl font-bold text-${stat.color}-600`}>
                  {stat.value}
                </span>
              </div>
              <h3 className="text-sm font-medium text-gray-600">{stat.title}</h3>
            </div>
          ))}
        </motion.div>

        {/* Dashboard Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Recent Activity */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-2 bg-white rounded-xl shadow-sm"
          >
            <div className="p-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-6">Recent Activity</h2>
              <div className="space-y-4">
                {[
                  { action: 'Patient discharge completed', patient: 'John Doe', time: '10 minutes ago', status: 'completed' },
                  { action: 'Billing verification pending', patient: 'Jane Smith', time: '25 minutes ago', status: 'pending' },
                  { action: 'Lab results reviewed', patient: 'Mike Johnson', time: '1 hour ago', status: 'info' },
                  { action: 'Medication order processed', patient: 'Sarah Wilson', time: '2 hours ago', status: 'completed' }
                ].map((activity, index) => (
                  <div key={index} className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg">
                    <div className={`h-3 w-3 rounded-full ${
                      activity.status === 'completed' ? 'bg-green-500' :
                      activity.status === 'pending' ? 'bg-orange-500' : 'bg-blue-500'
                    }`}></div>
                    <div className="flex-1">
                      <p className="font-medium text-gray-900">{activity.action}</p>
                      <p className="text-sm text-gray-600">Patient: {activity.patient}</p>
                    </div>
                    <span className="text-sm text-gray-500">{activity.time}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Quick Actions */}
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="space-y-6"
          >
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h2>
              <div className="space-y-3">
                <button className="w-full flex items-center space-x-3 p-3 text-left hover:bg-gray-50 rounded-lg transition-colors">
                  <Calendar className="h-5 w-5 text-blue-600" />
                  <span>Schedule Discharge</span>
                </button>
                <button className="w-full flex items-center space-x-3 p-3 text-left hover:bg-gray-50 rounded-lg transition-colors">
                  <FileText className="h-5 w-5 text-green-600" />
                  <span>Generate Report</span>
                </button>
                <button className="w-full flex items-center space-x-3 p-3 text-left hover:bg-gray-50 rounded-lg transition-colors">
                  <BarChart3 className="h-5 w-5 text-purple-600" />
                  <span>View Analytics</span>
                </button>
                <button className="w-full flex items-center space-x-3 p-3 text-left hover:bg-gray-50 rounded-lg transition-colors">
                  <Users className="h-5 w-5 text-teal-600" />
                  <span>Patient Management</span>
                </button>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-teal-50 rounded-xl p-6">
              <h3 className="font-semibold text-gray-900 mb-2">AI Insights</h3>
              <p className="text-sm text-gray-600 mb-4">
                Based on current data, discharge efficiency has improved by 15% this week.
              </p>
              <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">
                View Details →
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};