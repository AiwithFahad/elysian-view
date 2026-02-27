import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Waves, Sparkles, UtensilsCrossed, Car, Plane, TreePalm } from "lucide-react";
import poolImg from "@/assets/pool.jpg";
import spaImg from "@/assets/spa.jpg";

const amenities = [
  { icon: Waves, label: "Infinity Pool", desc: "Rooftop pool with panoramic ocean views" },
  { icon: Sparkles, label: "5-Star Spa", desc: "Bespoke treatments using rare botanicals" },
  { icon: TreePalm, label: "Private Beach", desc: "Exclusive white-sand beachfront access" },
  { icon: UtensilsCrossed, label: "Fine Dining", desc: "Three Michelin-starred restaurants" },
  { icon: Car, label: "VIP Chauffeur", desc: "Rolls-Royce fleet at your disposal" },
  { icon: Plane, label: "Private Jet", desc: "Seamless private aviation services" },
];

const AmenitiesSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="amenities" className="relative py-32 lg:py-40 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px gold-line" />

      <div ref={ref} className="container mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <p className="font-body text-xs tracking-[0.5em] uppercase text-primary mb-4">
            World-Class
          </p>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-light">
            Extraordinary <span className="italic text-gradient-gold">Amenities</span>
          </h2>
          <div className="gold-line w-24 mx-auto mt-8" />
        </motion.div>

        {/* Two Featured Images */}
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {[
            { img: poolImg, label: "Infinity Pool & Beach Club", alt: "Luxury infinity pool at sunset" },
            { img: spaImg, label: "The Aurélia Spa", alt: "Luxury spa treatment room" },
          ].map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, x: i === 0 ? -40 : 40 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 1, delay: 0.3 + i * 0.2 }}
              className="relative h-72 lg:h-96 overflow-hidden group luxury-border-hover"
            >
              <img
                src={item.img}
                alt={item.alt}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
              <div className="absolute bottom-0 left-0 p-8">
                <h3 className="font-display text-2xl text-foreground">{item.label}</h3>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Amenity Icons Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {amenities.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.5 + i * 0.1 }}
              className="glass-panel luxury-border-hover p-6 text-center group cursor-pointer"
            >
              <item.icon className="w-7 h-7 text-primary mx-auto mb-3 transition-transform duration-500 group-hover:scale-110" />
              <h4 className="font-body text-[10px] tracking-[0.2em] uppercase text-foreground mb-1">
                {item.label}
              </h4>
              <p className="font-elegant text-xs text-muted-foreground">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AmenitiesSection;
