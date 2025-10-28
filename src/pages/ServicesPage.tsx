import { useState } from 'react';
import { Globe, Bot, TrendingUp, CheckCircle2 } from 'lucide-react';

interface ServicesPageProps {
  darkMode: boolean;
}

export default function ServicesPage({ darkMode }: ServicesPageProps) {
  const [selectedService, setSelectedService] = useState(0);

  const services = [
    {
      icon: Globe,
      title: 'Web Services',
      subtitle: 'Build Your Online Presence',
      description:
        'Comprehensive web solutions to establish and grow your business online with professional websites and digital infrastructure.',
      features: [
        'Website Design & Development',
        'Google Business Profile Setup',
        'Business Email Configuration',
        'Online Payment Integration',
        'Logo & Brand Identity Design',
        'Product Photography',
        'Hosting & Maintenance',
      ],
      packages: [
        {
          name: 'Starter Website Pack',
          price: '₹4,999',
          items: ['Domain Registration', 'Single Page Website', 'Google Business Listing'],
        },
        {
          name: 'Business Website Pack',
          price: '₹7,999',
          items: ['Multi-page Website', 'Payment Gateway', 'Business Email', 'SSL Certificate'],
        },
        {
          name: 'E-Commerce Pack',
          price: '₹12,999',
          items: ['Full Online Store', 'Inventory Management', 'Delivery Tracking', 'Admin Panel'],
        },
      ],
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: Bot,
      title: 'AI Services',
      subtitle: 'Automate & Accelerate Growth',
      description:
        'Leverage cutting-edge AI technology to automate tasks, save time, and make data-driven decisions for your business.',
      features: [
        'AI Chatbots (Website & WhatsApp)',
        'AI Content Creation',
        'AI Video & Poster Generation',
        'Voice Assistants',
        'Business Analytics & Insights',
        'Email & WhatsApp Automation',
        'Review Management',
        'Workflow Automation',
        'AI CRM Systems',
        'Ad Optimization',
      ],
      packages: [
        {
          name: 'AI Starter Pack',
          price: '₹5,999',
          items: ['Chatbot Setup', 'AI Content Tools', 'Basic Automation'],
        },
        {
          name: 'AI Marketing Pack',
          price: '₹8,999',
          items: ['Smart Ads', 'Email/WhatsApp Automation', 'Analytics Dashboard'],
        },
        {
          name: 'AI Growth Pack',
          price: '₹14,999',
          items: ['Full AI Suite', 'CRM System', 'Workflow Automation', 'Priority Support'],
        },
      ],
      color: 'from-purple-500 to-pink-500',
    },
    {
      icon: TrendingUp,
      title: 'Digital Marketing',
      subtitle: 'Bring Customers & Visibility',
      description:
        'Strategic marketing solutions to increase your brand awareness, attract customers, and drive sales through digital channels.',
      features: [
        'Social Media Management',
        'Paid Advertising (Meta, Google, YouTube)',
        'SEO & Local SEO',
        'Influencer Marketing',
        'Reels & Video Content',
        'Email & WhatsApp Campaigns',
        'Analytics & Reports',
        'Content Strategy',
      ],
      packages: [
        {
          name: 'Digital Starter Pack',
          price: '₹6,999',
          items: ['Social Media Setup', '15 Days Content', 'Basic Analytics'],
        },
        {
          name: 'Growth Pack',
          price: '₹9,999',
          items: ['Paid Ads', 'SEO Optimization', 'Content Strategy', 'Monthly Reports'],
        },
        {
          name: 'Premium Marketing Pack',
          price: '₹15,999',
          items: ['Full Marketing Suite', 'Advanced Analytics', 'Influencer Collabs', 'Dedicated Manager'],
        },
      ],
      color: 'from-orange-500 to-red-500',
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
            Our{' '}
            <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
              Services
            </span>
          </h1>
          <p className={`text-xl ${darkMode ? 'text-gray-400' : 'text-gray-600'} max-w-3xl mx-auto`}>
            Comprehensive digital solutions tailored for small businesses to thrive online
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-12 animate-slideUp">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <button
                key={index}
                onClick={() => setSelectedService(index)}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 flex items-center space-x-2 ${
                  selectedService === index
                    ? `bg-gradient-to-r ${service.color} text-white shadow-lg scale-105`
                    : darkMode
                    ? 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                    : 'bg-white text-gray-700 hover:bg-gray-100'
                }`}
              >
                <Icon size={20} />
                <span>{service.title}</span>
              </button>
            );
          })}
        </div>

        <div className="animate-fadeIn">
          <div
            className={`rounded-3xl p-8 md:p-12 ${
              darkMode ? 'bg-gray-800' : 'bg-white'
            } shadow-xl mb-12`}
          >
            <div className="flex items-center space-x-4 mb-6">
              {(() => {
                const Icon = services[selectedService].icon;
                return (
                  <div
                    className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${services[selectedService].color} flex items-center justify-center`}
                  >
                    <Icon className="text-white" size={32} />
                  </div>
                );
              })()}
              <div>
                <h2 className={`text-3xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                  {services[selectedService].title}
                </h2>
                <p className={`text-lg ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                  {services[selectedService].subtitle}
                </p>
              </div>
            </div>

            <p className={`text-lg ${darkMode ? 'text-gray-300' : 'text-gray-700'} mb-8`}>
              {services[selectedService].description}
            </p>

            <div className="mb-8">
              <h3
                className={`text-2xl font-semibold ${
                  darkMode ? 'text-white' : 'text-gray-900'
                } mb-4`}
              >
                What We Offer
              </h3>
              <div className="grid sm:grid-cols-2 gap-3">
                {services[selectedService].features.map((feature, idx) => (
                  <div key={idx} className="flex items-center space-x-2">
                    <CheckCircle2 className="text-blue-500 flex-shrink-0" size={18} />
                    <span className={darkMode ? 'text-gray-300' : 'text-gray-700'}>{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            <h3
              className={`text-2xl font-semibold ${
                darkMode ? 'text-white' : 'text-gray-900'
              } mb-6 text-center`}
            >
              Choose Your Package
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              {services[selectedService].packages.map((pkg, idx) => (
                <div
                  key={idx}
                  className={`p-6 rounded-2xl border-2 ${
                    darkMode
                      ? 'bg-gray-900 border-gray-700 hover:border-gray-600'
                      : 'bg-gray-50 border-gray-200 hover:border-gray-300'
                  } transition-all duration-300 hover:scale-105 cursor-pointer animate-slideUp`}
                  style={{ animationDelay: `${idx * 0.1}s` }}
                >
                  <h4
                    className={`text-lg font-semibold ${
                      darkMode ? 'text-white' : 'text-gray-900'
                    } mb-2`}
                  >
                    {pkg.name}
                  </h4>
                  <div
                    className={`text-3xl font-bold bg-gradient-to-r ${services[selectedService].color} bg-clip-text text-transparent mb-4`}
                  >
                    {pkg.price}
                  </div>
                  <ul className="space-y-2">
                    {pkg.items.map((item, itemIdx) => (
                      <li
                        key={itemIdx}
                        className={`text-sm ${
                          darkMode ? 'text-gray-400' : 'text-gray-600'
                        } flex items-start`}
                      >
                        <span className="mr-2">•</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
