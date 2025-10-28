import { Heart } from 'lucide-react';

interface FooterProps {
  darkMode: boolean;
}

export default function Footer({ darkMode }: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className={`py-8 ${
        darkMode ? 'bg-gray-900 border-t border-gray-800' : 'bg-gray-100 border-t border-gray-200'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent mb-1">
              The Ilmera Digital Solutions
            </h3>
            <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              Empowering Small Businesses with Digital Excellence
            </p>
          </div>

          <div className="flex items-center space-x-2 text-sm">
            <span className={darkMode ? 'text-gray-400' : 'text-gray-600'}>
              © {currentYear} Made with
            </span>
            <Heart className="text-red-500 fill-current animate-pulse" size={16} />
            <span className={darkMode ? 'text-gray-400' : 'text-gray-600'}>by The Ilmera</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
