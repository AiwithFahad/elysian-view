import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import diningImg from "@/assets/dining.jpg";

const DiningSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="dining" className="relative py-32 lg:py-40">
      <div className="absolute top-0 left-0 right-0 h-px gold-line" />

      <div ref={ref} className="container mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative overflow-hidden luxury-border-hover"
          >
            <img
              src={diningImg}
              alt="Michelin-star dining at Aurélia"
              className="w-full h-80 lg:h-[500px] object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-background/40 to-transparent" />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
          >
            <p className="font-body text-xs tracking-[0.5em] uppercase text-primary mb-4">
              Culinary Excellence
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-light mb-6 leading-tight">
              A Feast for <br />
              <span className="italic text-gradient-gold">Every Sense</span>
            </h2>
            <div className="gold-line w-16 mb-8" />

            <p className="font-elegant text-base text-muted-foreground leading-relaxed mb-6">
              Our three Michelin-starred restaurants showcase the world's finest cuisine. From
              the intimate Japanese omakase experience at Hikari to the grandeur of La Maison d'Or's
              French gastronomy, every meal is a masterpiece.
            </p>

            <div className="space-y-4 mb-8">
              {[
                { name: "La Maison d'Or", type: "French Haute Cuisine", stars: "★★★" },
                { name: "Hikari", type: "Japanese Omakase", stars: "★★" },
                { name: "Terrazza", type: "Mediterranean", stars: "★" },
              ].map((restaurant) => (
                <div
                  key={restaurant.name}
                  className="flex items-center justify-between glass-panel p-4 luxury-border-hover"
                >
                  <div>
                    <h4 className="font-display text-lg text-foreground">{restaurant.name}</h4>
                    <p className="font-body text-[10px] tracking-[0.2em] uppercase text-muted-foreground">
                      {restaurant.type}
                    </p>
                  </div>
                  <span className="text-primary text-sm">{restaurant.stars}</span>
                </div>
              ))}
            </div>

            <a
              href="#booking"
              className="inline-block font-body text-[10px] tracking-[0.3em] uppercase text-primary border-b border-primary/30 pb-1 hover:border-primary transition-colors duration-500"
            >
              Reserve a Table
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default DiningSection;
