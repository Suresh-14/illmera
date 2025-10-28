import { Target, Users, Award, Zap } from 'lucide-react';

interface AboutPageProps {
  darkMode: boolean;
}

export default function AboutPage({ darkMode }: AboutPageProps) {
  const features = [
    {
      icon: Target,
      title: 'Our Mission',
      description: 'To make digital transformation accessible and affordable for every small business.',
    },
    {
      icon: Users,
      title: 'Expert Team',
      description: 'Skilled professionals dedicated to delivering exceptional results for your business.',
    },
    {
      icon: Award,
      title: 'Proven Results',
      description: 'Track record of helping businesses grow their online presence and revenue.',
    },
    {
      icon: Zap,
      title: 'Fast Delivery',
      description: 'Quick turnaround times without compromising on quality or attention to detail.',
    },
  ];

  return (
    <div className={`min-h-screen py-24 ${darkMode ? 'bg-gray-900' : 'bg-gray-50'} transition-colors duration-300`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fadeIn">
          <h1
            className={`text-5xl md:text-6xl font-bold ${
              darkMode ? 'text-white' : 'text-gray-900'
            } mb-4`}
          >
            About{' '}
            <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
              The Ilmera
            </span>
          </h1>
          <p className={`text-xl ${darkMode ? 'text-gray-400' : 'text-gray-600'} max-w-3xl mx-auto`}>
            We are a full-service digital agency specializing in helping small businesses thrive in the
            digital world through innovative web solutions, AI automation, and strategic marketing.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className={`p-6 rounded-2xl ${
                  darkMode ? 'bg-gray-800' : 'bg-white'
                } hover:scale-105 transition-all duration-300 animate-slideUp group cursor-pointer shadow-lg`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div
                  className={`w-14 h-14 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                >
                  <Icon className="text-white" size={28} />
                </div>
                <h3
                  className={`text-xl font-semibold ${
                    darkMode ? 'text-white' : 'text-gray-900'
                  } mb-2`}
                >
                  {feature.title}
                </h3>
                <p className={`${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>

        <div
          className={`rounded-3xl p-8 md:p-12 ${
            darkMode ? 'bg-gray-800' : 'bg-white'
          } animate-fadeIn shadow-xl mb-12`}
        >
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2
                className={`text-4xl font-bold ${
                  darkMode ? 'text-white' : 'text-gray-900'
                } mb-6`}
              >
                Why Choose Us?
              </h2>
              <p className={`${darkMode ? 'text-gray-400' : 'text-gray-700'} mb-6 leading-relaxed text-lg`}>
                At The Ilmera Digital Solutions, we understand the unique challenges faced by small
                businesses. Our comprehensive suite of services is designed to provide everything you
                need to establish, grow, and scale your digital presence.
              </p>
              <p className={`${darkMode ? 'text-gray-400' : 'text-gray-700'} leading-relaxed text-lg`}>
                From building your first website to implementing cutting-edge AI automation and running
                targeted marketing campaigns, we're your trusted partner in digital success.
              </p>
            </div>
            <div className="space-y-4">
              {[
                'Affordable packages tailored for small businesses',
                'Comprehensive end-to-end solutions',
                'Latest technology and AI integration',
                'Dedicated support and maintenance',
                'Transparent pricing with no hidden costs',
              ].map((point, index) => (
                <div key={index} className="flex items-start space-x-3 animate-slideUp" style={{ animationDelay: `${0.2 + index * 0.1}s` }}>
                  <div className="w-6 h-6 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <span className={`${darkMode ? 'text-gray-300' : 'text-gray-700'} text-lg`}>{point}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className={`rounded-3xl p-8 md:p-12 ${
          darkMode ? 'bg-gradient-to-br from-blue-900/30 to-purple-900/30' : 'bg-gradient-to-br from-blue-50 to-purple-50'
        } animate-scaleIn`}>
          <h2 className={`text-3xl font-bold text-center ${darkMode ? 'text-white' : 'text-gray-900'} mb-8`}>
            Our Commitment
          </h2>
          <p className={`text-center text-lg ${darkMode ? 'text-gray-300' : 'text-gray-700'} max-w-4xl mx-auto leading-relaxed`}>
            We believe that every small business deserves access to world-class digital services. Our mission is to level the playing field by providing enterprise-grade solutions at prices that make sense for growing businesses. With our team by your side, you'll have the tools, expertise, and support needed to compete and win in the digital marketplace.
          </p>
        </div>
      </div>
    </div>
  );
}
