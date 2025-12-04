import { Menu, X, ChevronDown } from 'lucide-react';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isEducationDropdownOpen, setIsEducationDropdownOpen] = useState(false);

  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'Products', href: '#energy-systems' },
    { label: 'Education', href: null, dropdown: true },
    { label: 'Consulting', href: '#consulting' },
    { label: 'Resources', href: '#resources' },
    { label: 'Blog', href: '#blog' },
    { label: 'Contact', href: '#contact' },
  ];

  const educationDropdownItems = [
    { label: 'Educational Products', href: '#educational-products' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 bg-blue-600 shadow-lg z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center space-x-3">
            <img
              src="/Hydrogen Network India (10)-Photoroom.png"
              alt="H2NI Logo"
              className="w-12 h-12 object-contain"
            />
            <div>
              <div className="font-bold text-xl text-white">Hydrogen Network India</div>
              <div className="text-xs text-blue-100">Industrial Training. Technology. Consulting.</div>
            </div>
          </div>

          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              item.dropdown ? (
                <div key={item.label} className="relative group">
                  <button className="text-white hover:text-blue-200 font-medium transition-colors duration-200 flex items-center space-x-1">
                    <span>{item.label}</span>
                    <ChevronDown size={16} />
                  </button>
                  <div className="absolute left-0 mt-0 w-48 bg-white text-gray-800 rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                    {educationDropdownItems.map((dropItem) => (
                      <a
                        key={dropItem.label}
                        href={dropItem.href}
                        className="block px-4 py-3 hover:bg-blue-50 first:rounded-t-md last:rounded-b-md transition-colors duration-200"
                      >
                        {dropItem.label}
                      </a>
                    ))}
                  </div>
                </div>
              ) : (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-white hover:text-blue-200 font-medium transition-colors duration-200"
                >
                  {item.label}
                </a>
              )
            ))}
          </nav>

          <button
            className="lg:hidden p-2 text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="lg:hidden bg-blue-700 border-t border-blue-500">
          <nav className="px-4 py-4 space-y-3">
            {navItems.map((item) => (
              item.dropdown ? (
                <div key={item.label}>
                  <button
                    onClick={() => setIsEducationDropdownOpen(!isEducationDropdownOpen)}
                    className="w-full text-left py-2 text-white hover:text-blue-200 font-medium transition-colors duration-200 flex items-center justify-between"
                  >
                    <span>{item.label}</span>
                    <ChevronDown size={16} className={`transform transition-transform ${isEducationDropdownOpen ? 'rotate-180' : ''}`} />
                  </button>
                  {isEducationDropdownOpen && (
                    <div className="pl-4 space-y-2 mt-2">
                      {educationDropdownItems.map((dropItem) => (
                        <a
                          key={dropItem.label}
                          href={dropItem.href}
                          className="block py-2 text-blue-100 hover:text-white transition-colors duration-200"
                          onClick={() => {
                            setIsMenuOpen(false);
                            setIsEducationDropdownOpen(false);
                          }}
                        >
                          {dropItem.label}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <a
                  key={item.label}
                  href={item.href}
                  className="block py-2 text-white hover:text-blue-200 font-medium transition-colors duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </a>
              )
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
