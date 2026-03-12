import { AnimateOnScroll } from "../components/AnimateOnScroll";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import shadyuktha from "@/assets/hero-yoga.png";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  Leaf,
  Heart,
  Sun,
  Flower2,
  Star,
  Clock,
  Users,
  Sparkles,
  Calendar,
  Play,
  CheckCircle2,
  BookOpen,
  ChevronDown,
  Award,
  GraduationCap,
  Layout,
  UserCheck,
  Activity,
  Flame,
  Wind,
  Lightbulb,
} from "lucide-react";

const AboutUs = () => {
  const features = [
    {
      icon: <Leaf className="h-8 w-8" />,
      title: "Prana",
      subtitle: "Breath",
      desc: "Master the sacred art of breath control to awaken your vital life force.",
    },
    {
      icon: <Heart className="h-8 w-8" />,
      title: "Citta",
      subtitle: "Mind",
      desc: "Cultivate mental clarity and deep inner peace through meditation.",
    },
    {
      icon: <Sun className="h-8 w-8" />,
      title: "Sarira",
      subtitle: "Body",
      desc: "Strengthen your physical temple through traditional āsanas.",
    },
  ];
  return (
    <section className="section-padding bg-background">
      <div className="container-fluid mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <AnimateOnScroll animation="animate-slide-in-left">
            <div className="relative">
              <img
                src="https://shadyukthayoga.s3.ap-south-1.amazonaws.com/assets/about-yoga.jpg"
                alt="About Shadyuktha Yog"
                className="rounded-2xl shadow-2xl w-full aspect-square object-cover"
              />
              <div className="absolute -bottom-6 -right-6 gradient-green  p-6 rounded-2xl shadow-xl">
                <p className="font-serif text-3xl font-bold text-white">YCB</p>
                <p className="text-sm text-white">Certified</p>
              </div>
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll animation="animate-slide-in-right">
            <div>
              <p className="text-sm font-semibold text-primary uppercase tracking-widest mb-2">
                About Us
              </p>
              <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6">
                A Legacy of{" "}
                <span className="text-gradient-green">
                  Awareness & Discipline
                </span>
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                At Shadyuktha Yog, we redefine the journey of self-discovery
                through a meticulous blend of traditional Yoga Sastra, modern
                therapeutic principles, and contemporary scientific
                understanding. We are a structured online sanctuary designed to
                guide practitioners through a progressive evolution of Sarira
                (Body), Praṇa (Breath), and Citta (Mind).
              </p>
              <p className="text-muted-foreground leading-relaxed mb-8">
                As a globally oriented online yoga education and therapy
                platform, we offer YCB-aligned courses, specialized therapeutic
                yoga programs, and in-depth studies of classical yogic texts.
              </p>

              <div className="grid md:grid-cols-3 grids-cols-1 gap-4">
                {[
                  { label: "Yoga TTC", desc: "YCB Levels 1-3" },
                  { label: "Therapy", desc: "DPYT Model" },
                  { label: "Sadhana", desc: "Level-Based" },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="text-center p-4 bg-secondary rounded-xl"
                  >
                    <p className="font-serif text-lg font-bold text-primary">
                      {item.label}
                    </p>
                    <p className="text-xs text-muted-foreground">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </AnimateOnScroll>
        </div>
        {/* Full-width Quote Section */}
        <section className="relative py-24 mt-24 bg-primary text-white overflow-hidden">
          {/* Background pattern stretched full width */}
          <div className="absolute inset-0 opacity-10 pointer-events-none">
            <div className="lotus-pattern w-full h-full" />
          </div>

          {/* Centered content */}
         <div className="max-w-6xl mx-auto px-4 relative z-10">
  <div className="text-center">
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
    >
      <div className="text-6xl font-serif text-white/30 mb-6">"</div>
      <blockquote className="font-serif italic text-4xl md:text-5xl font-extralight leading-relaxed mb-8 text-white/90 tracking-wide">
        Yoga is the journey of the self, through the self, to the self.
      </blockquote>
      <cite className="text-white/70 text-lg font-sans uppercase tracking-widest">
        — The Bhagavad Gita
      </cite>
    </motion.div>
  </div>
</div>
        </section>

        <section className="py-24 bg-white relative lotus-pattern">
          <div className="container-fluid mx-auto px-4">
            <div className="text-center mb-16">
              <motion.span
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="text-primary font-semibold tracking-[0.2em] uppercase text-sm"
              >
                The Three Pillars
              </motion.span>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="font-serif text-4xl md:text-5xl font-bold mt-4 text-foreground"
              >
                Holistic Transformation
              </motion.h2>
              <div className="decorative-line mx-auto mt-6" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {features.map((feature, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15 }}
                  className="text-center p-10 rounded-3xl bg-white border border-border hover-lift group"
                >
                  <div className="bg-gradient-to-br from-primary/10 to-accent/20 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 text-primary group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>
                  <h3 className="font-serif text-3xl font-bold mb-1 text-gradient">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-muted-foreground italic mb-4">
                    ({feature.subtitle})
                  </p>
                  <p className="text-foreground/80 leading-relaxed">
                    {feature.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        {/* CTA */}
         <section className="py-16 bg-secondary/30">
      {/* Image with zoom & tilt */}
      <motion.div
        className="w-full max-w-3xl mx-auto mb-20 rounded-2xl overflow-hidden shadow-2xl"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        whileHover={{ scale: 1.05, rotate: 1 }}
      >
        <img
          src="https://shadyukthayoga.s3.ap-south-1.amazonaws.com/assets/hero-yoga.png"
          alt="About Shadyuktha Yog"
          className="w-full object-cover rounded-2xl"
        />
      </motion.div>

      {/* Text Content */}
      <motion.div
        className="container-fluid mx-auto px-4 text-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <h3 className="font-serif text-3xl font-bold mb-4">
          Begin Your Journey of Self-Discovery
        </h3>
        <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
          Whether you're a beginner or a seasoned practitioner, Shadyuktha
          Yog welcomes you.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/allprograms" className="w-full sm:w-64">
            <Button
              size="lg"
              className="rounded-full px-10 py-5 text-lg w-full"
            >
              Explore Programs
            </Button>
          </Link>
          <Link to="/contact">
            <Button
              size="lg"
              variant="outline"
              className="rounded-full px-10 py-5 text-lg w-full sm:w-64"
            >
              Contact Us
            </Button>
          </Link>
        </div>
      </motion.div>
    </section>
      </div>
    </section>
  );
};

export default AboutUs;
