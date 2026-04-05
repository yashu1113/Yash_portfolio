import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'Education', href: '#education' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white/90 backdrop-blur-sm shadow-lg h-16' 
          : 'bg-gray-900/40 backdrop-blur-sm h-20'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 h-full">
        <div className="flex items-center justify-between h-full">
          <a 
            href="#home" 
            className={`text-xl font-bold transition-colors ${
              scrolled
                ? 'text-purple-700 hover:text-purple-800'
                : 'text-white hover:text-cyan-300'
            }`}
          >
            Portfolio
          </a>

          <div className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={`px-3 py-2 text-sm font-semibold transition-colors relative group ${
                  scrolled
                    ? 'text-gray-800 hover:text-purple-700'
                    : 'text-gray-100 hover:text-cyan-300'
                }`}
              >
                {item.name}
                <span
                  className={`absolute bottom-0 left-0 w-full h-0.5 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left ${
                    scrolled ? 'bg-purple-600' : 'bg-cyan-300'
                  }`}
                />
              </a>
            ))}
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 rounded-md transition-colors focus:outline-none focus:ring-2 ${
                scrolled
                  ? 'text-gray-800 hover:bg-gray-100 focus:ring-purple-500'
                  : 'text-white hover:bg-white/10 focus:ring-cyan-300'
              }`}
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      <div 
        className={`md:hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        } overflow-hidden bg-white shadow-lg`}
      >
        <div className="px-4 py-2 space-y-1">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-purple-600 hover:bg-gray-50 rounded-md transition-colors"
            >
              {item.name}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
