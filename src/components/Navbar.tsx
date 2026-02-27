import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navItems = [
  { label: "Experience", href: "#about" },
  { label: "Suites", href: "#rooms" },
  { label: "Amenities", href: "#amenities" },
  { label: "Dining", href: "#dining" },
  { label: "Testimonials", href: "#testimonials" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
        scrolled ? "glass-panel-strong py-3" : "py-6"
      }`}
    >
      <nav className="container mx-auto flex items-center justify-between px-6 lg:px-12">
        {/* Logo */}
        <a href="#" className="flex flex-col items-center">
          <span className="font-display text-2xl tracking-[0.3em] text-primary">
            AURÉLIA
          </span>
          <span className="font-body text-[9px] tracking-[0.5em] text-muted-foreground uppercase">
            Hotels & Resorts
          </span>
        </a>

        {/* Desktop Nav */}
        <ul className="hidden lg:flex items-center gap-10">
          {navItems.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className="font-body text-xs tracking-[0.2em] uppercase text-muted-foreground hover:text-primary transition-colors duration-500"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA + Mobile Toggle */}
        <div className="flex items-center gap-6">
          <a
            href="#booking"
            className="hidden lg:block font-body text-xs tracking-[0.2em] uppercase px-6 py-3 border border-primary/30 text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-500"
          >
            Reserve
          </a>
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden text-foreground"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden glass-panel-strong overflow-hidden"
          >
            <ul className="flex flex-col items-center gap-6 py-8">
              {navItems.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    className="font-body text-sm tracking-[0.2em] uppercase text-muted-foreground hover:text-primary transition-colors duration-500"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="#booking"
                  className="font-body text-sm tracking-[0.2em] uppercase px-8 py-3 border border-primary/30 text-primary"
                >
                  Reserve
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Navbar;
