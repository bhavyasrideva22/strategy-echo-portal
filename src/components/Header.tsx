
import { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronDown, Menu, X } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    setActiveDropdown(null);
  };

  const toggleDropdown = (dropdown: string) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  const menuItems = [
    {
      title: "Home",
      link: "/",
      hasDropdown: false
    },
    {
      title: "Company",
      link: "/company",
      hasDropdown: true,
      dropdownItems: [
        { name: "About Us", link: "/about" },
        { name: "Our Team", link: "/team" },
        { name: "Careers", link: "/careers" }
      ]
    },
    {
      title: "Services",
      link: "/services",
      hasDropdown: true,
      dropdownItems: [
        { name: "Strategy Consulting", link: "/strategy" },
        { name: "Digital Transformation", link: "/digital" },
        { name: "Performance Improvement", link: "/performance" }
      ]
    },
    {
      title: "Industries",
      link: "/industries",
      hasDropdown: true,
      dropdownItems: [
        { name: "Financial Services", link: "/financial-services" },
        { name: "Healthcare", link: "/healthcare" },
        { name: "Technology", link: "/technology" },
        { name: "Manufacturing", link: "/manufacturing" }
      ]
    },
    {
      title: "Insights",
      link: "/insights",
      hasDropdown: false
    },
    {
      title: "Contact",
      link: "/contact",
      hasDropdown: false
    }
  ];

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="text-2xl font-bold text-focus-blue">
            Focus Strategy
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:block">
            <ul className="flex items-center space-x-8">
              {menuItems.map((item) => (
                <li key={item.title} className="relative group">
                  {item.hasDropdown ? (
                    <button
                      className="flex items-center text-focus-blue hover:text-focus-accent transition-colors duration-200"
                      onClick={() => toggleDropdown(item.title)}
                    >
                      {item.title}
                      <ChevronDown className="ml-1 h-4 w-4" />
                    </button>
                  ) : (
                    <Link
                      to={item.link}
                      className="text-focus-blue hover:text-focus-accent transition-colors duration-200"
                    >
                      {item.title}
                    </Link>
                  )}

                  {item.hasDropdown && (
                    <div className="hidden group-hover:block absolute top-full left-0 min-w-[200px] bg-white shadow-lg rounded-md py-2 z-50">
                      {item.dropdownItems?.map((dropdownItem) => (
                        <Link
                          key={dropdownItem.name}
                          to={dropdownItem.link}
                          className="block px-4 py-2 text-focus-blue hover:bg-focus-light hover:text-focus-accent transition-colors duration-200"
                        >
                          {dropdownItem.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-focus-blue"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-200 animate-fade-in">
          <div className="container mx-auto px-4 py-2">
            <ul className="space-y-2">
              {menuItems.map((item) => (
                <li key={item.title}>
                  {item.hasDropdown ? (
                    <div>
                      <button
                        className="flex items-center justify-between w-full py-2 text-focus-blue"
                        onClick={() => toggleDropdown(item.title)}
                      >
                        {item.title}
                        <ChevronDown
                          className={`h-4 w-4 transition-transform duration-200 ${
                            activeDropdown === item.title ? "rotate-180" : ""
                          }`}
                        />
                      </button>
                      {activeDropdown === item.title && (
                        <div className="pl-4 space-y-2 border-l-2 border-focus-light ml-2 mt-1">
                          {item.dropdownItems?.map((dropdownItem) => (
                            <Link
                              key={dropdownItem.name}
                              to={dropdownItem.link}
                              className="block py-2 text-focus-muted hover:text-focus-accent"
                              onClick={toggleMenu}
                            >
                              {dropdownItem.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link
                      to={item.link}
                      className="block py-2 text-focus-blue hover:text-focus-accent"
                      onClick={toggleMenu}
                    >
                      {item.title}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
