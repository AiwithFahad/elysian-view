import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    quote: "Aurélia redefines what luxury means. From the moment we arrived, every detail was impeccable — an experience that will stay with us forever.",
    author: "Victoria & James Hartley",
    title: "London, United Kingdom",
    rating: 5,
  },
  {
    quote: "The Presidential Suite is nothing short of extraordinary. The private terrace views, the butler service, the attention to every whim — perfection incarnate.",
    author: "Sheikh Mohammed Al-Rashid",
    title: "Dubai, UAE",
    rating: 5,
  },
  {
    quote: "La Maison d'Or is the finest dining experience I've had in thirty years of Michelin travels. Chef Laurent's tasting menu is a revelation.",
    author: "Isabella Chen-Moretti",
    title: "Milan, Italy",
    rating: 5,
  },
];

const TestimonialsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setCurrent((c) => (c + 1) % testimonials.length), 6000);
    return () => clearInterval(timer);
  }, []);

  const next = () => setCurrent((c) => (c + 1) % testimonials.length);
  const prev = () => setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);

  return (
    <section id="testimonials" className="relative py-32 lg:py-40">
      <div className="absolute top-0 left-0 right-0 h-px gold-line" />

      <div ref={ref} className="container mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <p className="font-body text-xs tracking-[0.5em] uppercase text-primary mb-4">
            Guest Voices
          </p>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-light">
            Stories of <span className="italic text-gradient-gold">Splendor</span>
          </h2>
          <div className="gold-line w-24 mx-auto mt-8" />
        </motion.div>

        <div className="max-w-3xl mx-auto relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.6 }}
              className="text-center glass-panel luxury-border p-12 lg:p-16"
            >
              {/* Stars */}
              <div className="flex items-center justify-center gap-1 mb-8">
                {Array.from({ length: testimonials[current].rating }).map((_, i) => (
                  <Star key={i} size={14} className="text-primary fill-primary" />
                ))}
              </div>

              <blockquote className="font-elegant text-xl md:text-2xl italic text-champagne/80 leading-relaxed mb-8">
                "{testimonials[current].quote}"
              </blockquote>

              <div className="gold-line w-12 mx-auto mb-6" />

              <p className="font-body text-sm tracking-[0.15em] text-foreground">
                {testimonials[current].author}
              </p>
              <p className="font-body text-[10px] tracking-[0.3em] uppercase text-muted-foreground mt-1">
                {testimonials[current].title}
              </p>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-6 mt-8">
            <button
              onClick={prev}
              className="p-3 border border-primary/20 text-primary/60 hover:text-primary hover:border-primary/40 transition-all duration-500"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={16} />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`w-2 h-2 rounded-full transition-all duration-500 ${
                    i === current ? "bg-primary w-6" : "bg-primary/20"
                  }`}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>
            <button
              onClick={next}
              className="p-3 border border-primary/20 text-primary/60 hover:text-primary hover:border-primary/40 transition-all duration-500"
              aria-label="Next testimonial"
            >
              <ChevronRight size={16} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
