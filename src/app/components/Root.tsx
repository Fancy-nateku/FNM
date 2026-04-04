import { Outlet, Link, useLocation } from "react-router";
import { Menu, X, Github } from "lucide-react";
import { useState, useEffect } from "react";

export function Root() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Projects", path: "/projects" },
    { name: "Contact", path: "/contact" },
  ];

  const isActive = (path: string) => {
    if (path === "/") {
      return location.pathname === "/";
    }
    return location.pathname.startsWith(path);
  };

  return (
    <div className="flex min-h-screen flex-col selection:bg-primary/20 selection:text-primary">
      {/* Navigation */}
      <nav 
        className={`sticky top-0 z-50 transition-all duration-300 bg-[rgba(245,239,230,0.9)] backdrop-blur-md ${
          isScrolled ? "shadow-[0_4px_20px_rgba(111,78,55,0.15)] border-transparent" : "border-b border-[#6F4E37]/10"
        }`}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            {/* Logo */}
            <Link 
              to="/" 
              className="group flex items-center gap-3"
            >
              <img src="/fnm-logo.png" alt="FNM Logo" className="h-10 w-auto object-contain drop-shadow-sm" />
              <span className="text-[#6F4E37] font-bold text-xl tracking-wide">Fancy Nateku</span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden items-center gap-8 md:flex">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`relative py-1 text-base font-medium transition-colors duration-200 
                    after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 hover:after:bg-[#8B5A2B] hover:text-[#8B5A2B] after:transition-all after:duration-300 hover:after:w-full
                    ${
                    isActive(item.path)
                      ? "text-[#4A2C1A] font-bold after:w-full after:bg-[#4A2C1A]"
                      : "text-[#6F4E37]"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="rounded-md p-2 text-[#6F4E37] hover:bg-[#6F4E37]/10 transition-colors md:hidden"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="bg-[rgba(245,239,230,0.95)] backdrop-blur-md md:hidden border-t border-[#6F4E37]/10 shadow-lg">
            <div className="space-y-1 px-4 py-4">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block rounded-md px-3 py-3 text-base transition-colors ${
                    isActive(item.path)
                      ? "bg-[#6F4E37]/10 text-[#4A2C1A] font-bold"
                      : "text-[#6F4E37] font-medium hover:bg-[#6F4E37]/5 hover:text-[#8B5A2B]"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Main Content */}
      <main className="flex-1">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="border-t border-coffee-light/50 bg-sand/30 py-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm font-medium text-muted-foreground tracking-wide">
            <a href="https://github.com/Fancy-nateku" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 hover:text-coffee-dark transition-colors">
              <Github size={18} />
              GitHub
            </a>
            <span className="mx-3 opacity-50">·</span>
            <a href="mailto:fancymegir01@gmail.com" className="hover:text-coffee-dark transition-colors">fancymegir01@gmail.com</a>
            <span className="mx-3 opacity-50">·</span>
            <span>Kisii, Kenya</span>
          </p>
        </div>
      </footer>
    </div>
  );
}