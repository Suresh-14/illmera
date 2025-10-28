import { useNavigate } from 'react-router-dom';
import { ArrowRight, Sparkles } from 'lucide-react';

interface HomePageProps {
  darkMode: boolean;
}

export default function HomePage({ darkMode }: HomePageProps) {
  const navigate = useNavigate();

  return (
    <section
      className={`min-h-screen flex items-center justify-center relative overflow-hidden ${
        darkMode ? 'bg-gray-900' : 'bg-gray-50'
      }`}
    >
      <div className="absolute inset-0 overflow-hidden">
        <div className={`absolute w-96 h-96 -top-48 -left-48 rounded-full blur-3xl opacity-20 ${
          darkMode ? 'bg-blue-500' : 'bg-blue-400'
        } animate-pulse`}></div>
        <div className={`absolute w-96 h-96 -bottom-48 -right-48 rounded-full blur-3xl opacity-20 ${
          darkMode ? 'bg-purple-500' : 'bg-purple-400'
        } animate-pulse`} style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 relative z-10">
        <div className="text-center space-y-8 animate-fadeIn">
          <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 mb-4">
            <Sparkles className="text-blue-500" size={16} />
            <span className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
              Digital Transformation Made Simple
            </span>
          </div>

          <h1
            className={`text-5xl md:text-7xl font-bold ${
              darkMode ? 'text-white' : 'text-gray-900'
            } leading-tight animate-slideUp`}
          >
            Welcome to{' '}
            <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
              The Ilmera
            </span>
          </h1>

          <p
            className={`text-xl md:text-2xl ${
              darkMode ? 'text-gray-400' : 'text-gray-600'
            } max-w-3xl mx-auto animate-slideUp`}
            style={{ animationDelay: '0.2s' }}
          >
            Empowering Small Businesses with Web Services, AI Automation & Digital Marketing
          </p>

          <div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-slideUp"
            style={{ animationDelay: '0.4s' }}
          >
            <button
              onClick={() => navigate('/contact')}
              className="group px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full font-semibold hover:scale-105 transition-transform duration-200 shadow-lg hover:shadow-xl flex items-center space-x-2"
            >
              <span>Get Started</span>
              <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
            </button>
            <button
              onClick={() => navigate('/services')}
              className={`px-8 py-4 rounded-full font-semibold border-2 ${
                darkMode
                  ? 'border-gray-700 text-gray-300 hover:bg-gray-800'
                  : 'border-gray-300 text-gray-700 hover:bg-gray-100'
              } transition-all duration-200`}
            >
              Explore Services
            </button>
          </div>

          <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto pt-16 animate-fadeIn" style={{ animationDelay: '0.6s' }}>
            {[
              { number: '200+', label: 'Clients Served' },
              { number: '98%', label: 'Satisfaction Rate' },
              { number: '24/7', label: 'Support Available' },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
                  {stat.number}
                </div>
                <div className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'} mt-1`}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
