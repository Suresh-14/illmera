import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Menu, X, Moon, Sun } from 'lucide-react';

interface NavbarProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

export default function Navbar({ darkMode, toggleDarkMode }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigate = useNavigate();
  const location = useLocation();

  const navigateToPage = (path: string) => {
    navigate(path);
    setIsOpen(false);
  };

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled
          ? darkMode
            ? 'bg-gray-900/95 backdrop-blur-lg shadow-lg'
            : 'bg-white/95 backdrop-blur-lg shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0 cursor-pointer" onClick={() => navigateToPage('/')}>
            <h1 className={`text-2xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent`}>
              The Ilmera
            </h1>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            {[
              { name: 'home', path: '/' },
              { name: 'about', path: '/about' },
              { name: 'services', path: '/services' },
              { name: 'contact', path: '/contact' },
            ].map((item) => (
              <button
                key={item.name}
                onClick={() => navigateToPage(item.path)}
                className={`capitalize ${
                  isActive(item.path)
                    ? 'text-blue-500'
                    : darkMode
                    ? 'text-gray-300 hover:text-white'
                    : 'text-gray-700 hover:text-gray-900'
                } transition-colors duration-200 font-medium`}
              >
                {item.name === 'about' ? 'About Us' : item.name === 'contact' ? 'Contact Us' : item.name}
              </button>
            ))}
            <button
              onClick={toggleDarkMode}
              className={`p-2 rounded-full ${
                darkMode ? 'bg-gray-800 text-yellow-400' : 'bg-gray-100 text-gray-700'
              } hover:scale-110 transition-transform duration-200`}
            >
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </div>

          <div className="md:hidden flex items-center space-x-2">
            <button
              onClick={toggleDarkMode}
              className={`p-2 rounded-full ${
                darkMode ? 'bg-gray-800 text-yellow-400' : 'bg-gray-100 text-gray-700'
              }`}
            >
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div
          className={`md:hidden ${
            darkMode ? 'bg-gray-900' : 'bg-white'
          } border-t ${darkMode ? 'border-gray-800' : 'border-gray-200'}`}
        >
          <div className="px-4 py-3 space-y-3">
            {[
              { name: 'home', path: '/' },
              { name: 'about', path: '/about' },
              { name: 'services', path: '/services' },
              { name: 'contact', path: '/contact' },
            ].map((item) => (
              <button
                key={item.name}
                onClick={() => navigateToPage(item.path)}
                className={`block w-full text-left capitalize ${
                  isActive(item.path)
                    ? 'text-blue-500'
                    : darkMode
                    ? 'text-gray-300 hover:text-white'
                    : 'text-gray-700 hover:text-gray-900'
                } transition-colors duration-200 font-medium py-2`}
              >
                {item.name === 'about' ? 'About Us' : item.name === 'contact' ? 'Contact Us' : item.name}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
