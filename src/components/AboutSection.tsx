import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";

const stats = [
  { value: 127, suffix: "", label: "Years of Excellence" },
  { value: 48, suffix: "", label: "Global Destinations" },
  { value: 15, suffix: "", label: "Michelin Stars" },
  { value: 99, suffix: "%", label: "Guest Satisfaction" },
];

const CountUp = ({ target, suffix }: { target: number; suffix: string }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 2000;
    const step = (timestamp: number) => {
      if (!start) start = timestamp;
      const progress = Math.min((timestamp - start) / duration, 1);
      setCount(Math.floor(progress * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [inView, target]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
};

const AboutSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="relative py-32 lg:py-40 overflow-hidden">
      {/* Decorative Line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-24 gold-line-vertical" />

      <div ref={ref} className="container mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <p className="font-body text-xs tracking-[0.5em] uppercase text-primary mb-4">
            Our Legacy
          </p>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-light leading-tight">
            A Heritage of
            <span className="italic text-gradient-gold"> Unparalleled</span> Elegance
          </h2>
          <div className="gold-line w-24 mx-auto mt-8 mb-8" />
          <p className="font-elegant text-lg text-muted-foreground leading-relaxed">
            Since 1897, Aurélia has defined the art of hospitality. Every detail, from the
            hand-selected Italian marble to the bespoke fragrances that greet you in our lobbies,
            has been thoughtfully curated to create moments of transcendent beauty.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-4xl mx-auto">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 + i * 0.15, ease: "easeOut" }}
              className="text-center glass-panel p-8 luxury-border-hover"
            >
              <span className="font-display text-4xl lg:text-5xl text-primary">
                <CountUp target={stat.value} suffix={stat.suffix} />
              </span>
              <p className="font-body text-[10px] tracking-[0.3em] uppercase text-muted-foreground mt-3">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Founder's Quote */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 1, delay: 1 }}
          className="text-center mt-20 max-w-2xl mx-auto"
        >
          <blockquote className="font-elegant text-xl md:text-2xl italic text-champagne/70 leading-relaxed">
            "True luxury is not about opulence — it is about the art of making every guest feel
            they are the most important person in the world."
          </blockquote>
          <p className="font-body text-xs tracking-[0.3em] uppercase text-primary mt-6">
            — Henri Aurélia, Founder
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
