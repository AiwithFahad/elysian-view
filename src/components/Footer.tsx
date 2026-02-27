import { MapPin, Phone, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative pt-24 pb-12 border-t border-primary/10">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div>
            <h3 className="font-display text-2xl tracking-[0.2em] text-primary mb-2">AURÉLIA</h3>
            <p className="font-body text-[9px] tracking-[0.5em] uppercase text-muted-foreground mb-6">
              Hotels & Resorts
            </p>
            <p className="font-elegant text-sm text-muted-foreground leading-relaxed">
              Crafting extraordinary experiences since 1897. Where timeless elegance meets modern luxury.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-body text-[10px] tracking-[0.4em] uppercase text-primary mb-6">
              Discover
            </h4>
            <ul className="space-y-3">
              {["Our Story", "Suites & Rooms", "Dining", "Spa & Wellness", "Events", "Gift Cards"].map(
                (link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="font-body text-sm text-muted-foreground hover:text-primary transition-colors duration-500"
                    >
                      {link}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-body text-[10px] tracking-[0.4em] uppercase text-primary mb-6">
              Contact
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={14} className="text-primary mt-1 shrink-0" />
                <span className="font-body text-sm text-muted-foreground">
                  1 Avenue des Champs-Élysées, <br />
                  75008 Paris, France
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={14} className="text-primary shrink-0" />
                <span className="font-body text-sm text-muted-foreground">+33 1 42 56 78 90</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={14} className="text-primary shrink-0" />
                <span className="font-body text-sm text-muted-foreground">concierge@aurelia.com</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-body text-[10px] tracking-[0.4em] uppercase text-primary mb-6">
              Exclusive Access
            </h4>
            <p className="font-elegant text-sm text-muted-foreground mb-4">
              Subscribe for privileged offers and insider experiences.
            </p>
            <div className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 bg-secondary/50 border border-primary/10 px-4 py-3 font-body text-xs text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/30 transition-colors"
              />
              <button className="px-5 py-3 bg-gradient-gold text-primary-foreground font-body text-xs tracking-[0.15em] uppercase hover:opacity-90 transition-opacity">
                Join
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="gold-line mb-8" />
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-body text-[10px] tracking-[0.2em] text-muted-foreground">
            © 2024 AURÉLIA HOTELS & RESORTS. ALL RIGHTS RESERVED.
          </p>
          <div className="flex gap-6">
            {["Privacy", "Terms", "Accessibility"].map((link) => (
              <a
                key={link}
                href="#"
                className="font-body text-[10px] tracking-[0.2em] uppercase text-muted-foreground hover:text-primary transition-colors duration-500"
              >
                {link}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
