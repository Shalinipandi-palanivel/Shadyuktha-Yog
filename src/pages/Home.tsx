import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ArrowRight, Activity, BookOpen, Heart, UserCheck, Layout } from "lucide-react";
import { motion } from "framer-motion";

export default function Home() {
  const pillars = [
    {
      title: "Level-Based Sadhana",
      desc: "Structured progression from beginner to advanced practices.",
      icon: <Activity className="w-8 h-8 text-primary" />,
      link: "/sadhana"
    },
    {
      title: "Disease Management",
      desc: "Holistic therapy for chronic conditions like diabetes and thyroid.",
      icon: <Heart className="w-8 h-8 text-accent" />,
      link: "/therapy"
    },
    {
      title: "Therapeutic Yoga",
      desc: "Heal your body through specific asanas and pranayama.",
      icon: <UserCheck className="w-8 h-8 text-primary" />,
      link: "/therapy"
    },
    {
      title: "Teacher Training",
      desc: "Become a certified instructor with deep philosophical knowledge.",
      icon: <BookOpen className="w-8 h-8 text-accent" />,
      link: "/sadhana"
    },
    {
      title: "Student Dashboard",
      desc: "Track your journey, access sessions, and view progress.",
      icon: <Layout className="w-8 h-8 text-primary" />,
      link: "/dashboard"
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <div className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
        {/* Descriptive alt for Unsplash image */}
        {/* woman doing yoga in nature peaceful sunrise */}
        <div 
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{ 
            backgroundImage: `url('https://images.unsplash.com/photo-1545389336-cf090694435e?auto=format&fit=crop&q=80&w=2000')` 
          }}
        />
        <div className="absolute inset-0 bg-black/40 z-10" />
        
        <div className="container relative z-20 text-center px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold text-white mb-6 drop-shadow-lg">
              Shadyuktha Yog
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto mb-10 font-light">
              A holistic journey of <span className="text-accent font-semibold">Sarira</span> (Body), <span className="text-accent font-semibold">Prana</span> (Breath), and <span className="text-accent font-semibold">Citta</span> (Mind).
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/sadhana">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-white border-2 border-transparent text-lg px-8 py-6 rounded-full">
                  Start Your Journey
                </Button>
              </Link>
              <Link href="/contact">
                <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-primary text-lg px-8 py-6 rounded-full bg-transparent">
                  Contact Us
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Pillars Section */}
      <Section background="muted" className="relative z-20 -mt-20 pt-32 pb-24 rounded-t-[3rem]">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif text-primary mb-4">Our Core Pillars</h2>
          <div className="w-24 h-1 bg-accent mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {pillars.map((pillar, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
            >
              <Link href={pillar.link}>
                <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-border group cursor-pointer h-full flex flex-col items-center text-center">
                  <div className="mb-6 p-4 bg-secondary/30 rounded-full group-hover:scale-110 transition-transform duration-300">
                    {pillar.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-gray-800">{pillar.title}</h3>
                  <p className="text-muted-foreground mb-6 flex-grow">{pillar.desc}</p>
                  <div className="text-primary font-semibold flex items-center gap-2 group-hover:gap-3 transition-all">
                    Learn More <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Philosophy Teaser */}
      <Section background="default">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
             {/* yoga meditation calm */}
            <img 
              src="https://pixabay.com/get/gf8b7f5817a08163198a19cad60a3756a13fb8801d807a4b02307577efaf3201129b0b7150d5ef41c217e877c0f9731c6839daba6aaca33b60a19582f9ad9133c_1280.jpg" 
              alt="Meditation" 
              className="rounded-2xl shadow-2xl"
            />
          </div>
          <div className="order-1 md:order-2">
            <h2 className="text-3xl md:text-4xl font-serif text-primary mb-6">Harmonizing Body & Mind</h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              At Shadyuktha Yog, we believe that true health is not just the absence of disease, but a state of complete physical, mental, and social well-being. Our approach integrates the ancient wisdom of Hatha Yoga with modern therapeutic techniques.
            </p>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Whether you are looking to build strength, manage stress, or heal from a chronic condition, our structured programs are designed to meet you where you are.
            </p>
            <Link href="/philosophy">
              <Button variant="default" size="lg" className="rounded-full px-8">
                Read Our Philosophy
              </Button>
            </Link>
          </div>
        </div>
      </Section>
    </div>
  );
}
