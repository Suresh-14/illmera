import { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

interface ContactPageProps {
  darkMode: boolean;
}

export default function ContactPage({ darkMode }: ContactPageProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', phone: '', service: '', message: '' });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className={`min-h-screen py-24 ${darkMode ? 'bg-gray-900' : 'bg-gray-50'} transition-colors duration-300`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fadeIn">
          <h1
            className={`text-5xl md:text-6xl font-bold ${
              darkMode ? 'text-white' : 'text-gray-900'
            } mb-4`}
          >
            Get In{' '}
            <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
              Touch
            </span>
          </h1>
          <p className={`text-xl ${darkMode ? 'text-gray-400' : 'text-gray-600'} max-w-3xl mx-auto`}>
            Ready to transform your business? Let's discuss how we can help you grow
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-8 animate-slideUp">
            <div
              className={`p-8 rounded-2xl ${
                darkMode ? 'bg-gray-800' : 'bg-white'
              } shadow-xl`}
            >
              <h2 className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'} mb-6`}>
                Contact Information
              </h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center flex-shrink-0">
                    <Mail className="text-white" size={20} />
                  </div>
                  <div>
                    <h3 className={`font-semibold ${darkMode ? 'text-white' : 'text-gray-900'} mb-1`}>
                      Email
                    </h3>
                    <p className={darkMode ? 'text-gray-400' : 'text-gray-600'}>
                      info@ilmera.digital
                    </p>
                    <p className={darkMode ? 'text-gray-400' : 'text-gray-600'}>
                      support@ilmera.digital
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center flex-shrink-0">
                    <Phone className="text-white" size={20} />
                  </div>
                  <div>
                    <h3 className={`font-semibold ${darkMode ? 'text-white' : 'text-gray-900'} mb-1`}>
                      Phone
                    </h3>
                    <p className={darkMode ? 'text-gray-400' : 'text-gray-600'}>+91 98765 43210</p>
                    <p className={darkMode ? 'text-gray-400' : 'text-gray-600'}>+91 87654 32109</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center flex-shrink-0">
                    <MapPin className="text-white" size={20} />
                  </div>
                  <div>
                    <h3 className={`font-semibold ${darkMode ? 'text-white' : 'text-gray-900'} mb-1`}>
                      Location
                    </h3>
                    <p className={darkMode ? 'text-gray-400' : 'text-gray-600'}>
                      Digital Hub, Tech Park
                      <br />
                      Bangalore, Karnataka 560001
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div
              className={`p-8 rounded-2xl ${
                darkMode ? 'bg-gradient-to-br from-blue-900/30 to-purple-900/30' : 'bg-gradient-to-br from-blue-50 to-purple-50'
              } animate-slideUp`}
              style={{ animationDelay: '0.2s' }}
            >
              <h3 className={`text-xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'} mb-4`}>
                Business Hours
              </h3>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className={darkMode ? 'text-gray-400' : 'text-gray-600'}>Monday - Friday</span>
                  <span className={`font-semibold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                    9:00 AM - 6:00 PM
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className={darkMode ? 'text-gray-400' : 'text-gray-600'}>Saturday</span>
                  <span className={`font-semibold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                    10:00 AM - 4:00 PM
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className={darkMode ? 'text-gray-400' : 'text-gray-600'}>Sunday</span>
                  <span className={`font-semibold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                    Closed
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="animate-slideUp" style={{ animationDelay: '0.3s' }}>
            <form
              onSubmit={handleSubmit}
              className={`p-8 rounded-2xl ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-xl`}
            >
              <h2 className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'} mb-6`}>
                Send Us a Message
              </h2>

              {submitted ? (
                <div className="py-12 text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-green-400 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4 animate-bounce">
                    <Send className="text-white" size={32} />
                  </div>
                  <p className={`text-xl font-semibold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                    Thank you for reaching out!
                  </p>
                  <p className={`${darkMode ? 'text-gray-400' : 'text-gray-600'} mt-2`}>
                    We'll get back to you within 24 hours.
                  </p>
                </div>
              ) : (
                <div className="space-y-6">
                  <div>
                    <label
                      className={`block font-medium ${
                        darkMode ? 'text-gray-300' : 'text-gray-700'
                      } mb-2`}
                    >
                      Full Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className={`w-full px-4 py-3 rounded-lg ${
                        darkMode
                          ? 'bg-gray-900 text-white border-gray-700'
                          : 'bg-gray-50 text-gray-900 border-gray-300'
                      } border focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all`}
                      placeholder="John Doe"
                    />
                  </div>

                  <div>
                    <label
                      className={`block font-medium ${
                        darkMode ? 'text-gray-300' : 'text-gray-700'
                      } mb-2`}
                    >
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className={`w-full px-4 py-3 rounded-lg ${
                        darkMode
                          ? 'bg-gray-900 text-white border-gray-700'
                          : 'bg-gray-50 text-gray-900 border-gray-300'
                      } border focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all`}
                      placeholder="john@example.com"
                    />
                  </div>

                  <div>
                    <label
                      className={`block font-medium ${
                        darkMode ? 'text-gray-300' : 'text-gray-700'
                      } mb-2`}
                    >
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className={`w-full px-4 py-3 rounded-lg ${
                        darkMode
                          ? 'bg-gray-900 text-white border-gray-700'
                          : 'bg-gray-50 text-gray-900 border-gray-300'
                      } border focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all`}
                      placeholder="+91 98765 43210"
                    />
                  </div>

                  <div>
                    <label
                      className={`block font-medium ${
                        darkMode ? 'text-gray-300' : 'text-gray-700'
                      } mb-2`}
                    >
                      Service Interested In
                    </label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      required
                      className={`w-full px-4 py-3 rounded-lg ${
                        darkMode
                          ? 'bg-gray-900 text-white border-gray-700'
                          : 'bg-gray-50 text-gray-900 border-gray-300'
                      } border focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all`}
                    >
                      <option value="">Select a service</option>
                      <option value="web">Web Services</option>
                      <option value="ai">AI Services</option>
                      <option value="marketing">Digital Marketing</option>
                      <option value="all">All Services</option>
                    </select>
                  </div>

                  <div>
                    <label
                      className={`block font-medium ${
                        darkMode ? 'text-gray-300' : 'text-gray-700'
                      } mb-2`}
                    >
                      Message
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={4}
                      className={`w-full px-4 py-3 rounded-lg ${
                        darkMode
                          ? 'bg-gray-900 text-white border-gray-700'
                          : 'bg-gray-50 text-gray-900 border-gray-300'
                      } border focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none`}
                      placeholder="Tell us about your project..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg font-semibold hover:scale-105 transition-transform duration-200 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2"
                  >
                    <span>Send Message</span>
                    <Send size={20} />
                  </button>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
