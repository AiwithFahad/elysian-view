import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import roomDeluxe from "@/assets/room-deluxe.jpg";
import roomExecutive from "@/assets/room-executive.jpg";
import roomPresidential from "@/assets/room-presidential.jpg";

const rooms = [
  {
    name: "Deluxe Room",
    subtitle: "Refined Comfort",
    price: "From $850",
    size: "55 m²",
    image: roomDeluxe,
    description: "Elegant interiors with premium linens and marble accents, overlooking manicured gardens.",
  },
  {
    name: "Executive Suite",
    subtitle: "Elevated Living",
    price: "From $2,400",
    size: "120 m²",
    image: roomExecutive,
    description: "A lavish retreat featuring a separate living area, ocean views, and bespoke furnishings.",
  },
  {
    name: "Presidential Suite",
    subtitle: "The Pinnacle",
    price: "From $8,500",
    size: "280 m²",
    image: roomPresidential,
    description: "An unrivaled private residence with panoramic skyline views, personal butler, and private terrace.",
  },
];

const RoomCard = ({ room, index }: { room: typeof rooms[0]; index: number }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [hover, setHover] = useState(false);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.9, delay: index * 0.2, ease: "easeOut" }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className="group relative overflow-hidden luxury-border-hover cursor-pointer"
    >
      {/* Image */}
      <div className="relative h-80 lg:h-96 overflow-hidden">
        <motion.img
          src={room.image}
          alt={room.name}
          className="h-full w-full object-cover"
          animate={{ scale: hover ? 1.08 : 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />

        {/* Price Badge */}
        <div className="absolute top-6 right-6 glass-panel px-4 py-2">
          <span className="font-body text-xs tracking-[0.2em] text-primary">{room.price}</span>
        </div>
      </div>

      {/* Content */}
      <div className="p-8">
        <p className="font-body text-[10px] tracking-[0.4em] uppercase text-primary mb-2">
          {room.subtitle} · {room.size}
        </p>
        <h3 className="font-display text-2xl lg:text-3xl font-light mb-3">{room.name}</h3>
        <p className="font-elegant text-sm text-muted-foreground leading-relaxed mb-6">
          {room.description}
        </p>
        <div className="flex items-center gap-6">
          <a
            href="#booking"
            className="font-body text-[10px] tracking-[0.3em] uppercase text-primary border-b border-primary/30 pb-1 hover:border-primary transition-colors duration-500"
          >
            Reserve Now
          </a>
          <span className="font-body text-[10px] tracking-[0.3em] uppercase text-muted-foreground border-b border-muted-foreground/20 pb-1 hover:text-primary hover:border-primary/30 transition-colors duration-500 cursor-pointer">
            View Details
          </span>
        </div>
      </div>
    </motion.div>
  );
};

const RoomsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="rooms" className="relative py-32 lg:py-40">
      <div className="absolute top-0 left-0 right-0 h-px gold-line" />

      <div ref={ref} className="container mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <p className="font-body text-xs tracking-[0.5em] uppercase text-primary mb-4">
            Accommodations
          </p>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-light">
            Exquisite <span className="italic text-gradient-gold">Suites</span>
          </h2>
          <div className="gold-line w-24 mx-auto mt-8" />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {rooms.map((room, i) => (
            <RoomCard key={room.name} room={room} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default RoomsSection;
