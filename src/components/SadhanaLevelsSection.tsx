import { useState } from "react";
import { Link } from "react-router-dom";
import { AnimateOnScroll } from "./AnimateOnScroll";
import { Leaf, Flame, Sun, ChevronDown, ArrowRight } from "lucide-react";
import heroImg from "@/assets/hero-yoga.jpg";
import ashtangaImg from "@/assets/ashtanga-yoga.jpg";
import pranayamaImg from "@/assets/pranayama.jpg";
import { Button } from "@/components/ui/button";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { AnimatePresence } from "framer-motion";
import {
  Heart,
  Flower2,
  Star,
  Clock,
  Users,
  Sparkles,
  Calendar,
  Play,
  CheckCircle2,
  BookOpen,
  Award,
  GraduationCap,
  Layout,
  UserCheck,
  Activity,
  Wind,
  Lightbulb,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { useEffect } from "react";
import advancedYoga from "@/assets/advanced-yoga.jpg";
import beginnerdYoga from "@/assets/beginner-yoga.jpg";
import intermediateYoga from "@/assets/intermediate-yoga.jpg";
import structuredYoga from "@/assets/structured-program.jpg";
import dailyYoga from "@/assets/daily-practice.jpg";
import regularYoga from "@/assets/regular-practice.jpg";
import TiltImage from "./TiltImage";
// const levels = [
//   {
//     icon: Leaf,
//     level: "Level 1",
//     name: "Beginner (Arambha Avastha)",
//     focus: "Sarira Bodha (body awareness), postural alignment, and breath–movement coordination (Svasa–Prasvasa).",
//     practices: ["Suksma Vyayama (joint mobility)", "Gentle Asana", "Basic Pranayama", "Guided Savasana"],
//     who: "Absolute beginners, returning practitioners, or anyone building a safe, strong yogic foundation.",
//     image: heroImg,
//     color: "from-primary/5 to-primary/10",
//   },
//   {
//     icon: Flame,
//     level: "Level 2",
//     name: "Intermediate (Madhyama Avastha)",
//     focus: "Development of Bala (strength), stamina, and Laghava (enhanced flexibility).",
//     practices: ["Flow-based Asana sequences", "Breath retention awareness", "Bandhas", "Dharana (concentration)"],
//     who: "Practitioners with foundational experience seeking physical vitality and breath mastery.",
//     image: ashtangaImg,
//     color: "from-primary/10 to-primary/5",
//   },
//   {
//     icon: Sun,
//     level: "Level 3",
//     name: "Advanced (Uttama Avastha)",
//     focus: "Antarmukhata (deep internal awareness), refined transitions, and meditative stability.",
//     practices: ["Advanced postures", "Kumbhaka-based Pranayama", "Dhyana (meditation)", "Subtle energy mastery"],
//     who: "Dedicated practitioners and teachers seeking self-transformation and inner harmony.",
//     image: pranayamaImg,
//     color: "from-primary/5 to-secondary",
//   },
// ];

// const practiceFormats = [
//   { format: "Regular Practice", days: "4 Days/Week", beginner: "₹2,000", intermediate: "₹2,500", advanced: "₹3,000", icon: "🧘" },
//   { format: "Regular + Pranayama", days: "4+1 Days/Week", beginner: "₹3,000", intermediate: "₹3,500", advanced: "₹4,000", icon: "🌬️" },
//   { format: "Daily Sadhana", days: "6 Days/Week", beginner: "₹3,500", intermediate: "₹4,000", advanced: "₹4,500", icon: "💪" },
//   { format: "Daily + Pranayama", days: "6+1 Days/Week", beginner: "₹4,000", intermediate: "₹4,500", advanced: "₹5,000", icon: "🔥" },
// ];

const SadhanaLevelsSection = () => {
  const levels = [
    {
      level: "Beginner",
      sanskrit: "Arambha Avastha",
      image: beginnerdYoga,
      color: "from-emerald-500 to-green-600",
      badge: "bg-emerald-100 text-emerald-800",
      desc: "For absolute beginners & returning practitioners",
      focus: [
        "Body awareness (Sarira Bodha)",
        "Proper alignment & movement",
        "Breath-movement coordination",
        "Mind-body connection",
      ],
      outcome:
        "Builds a strong yogic foundation, confidence, safety, and consistency.",
    },
    {
      level: "Intermediate",
      sanskrit: "Madhyama Avastha",
      image: intermediateYoga,
      color: "from-amber-500 to-orange-600",
      badge: "bg-amber-100 text-amber-800",
      desc: "For practitioners with foundational experience",
      focus: [
        "Strength (Bala) & stamina",
        "Enhanced flexibility (Laghava)",
        "Breath retention awareness",
        "Pranic flow & balance",
      ],
      outcome:
        "Enhances physical vitality, breath mastery, and mental steadiness.",
    },
    {
      level: "Advanced",
      sanskrit: "Uttama Avastha",
      image: advancedYoga,
      color: "from-rose-500 to-red-600",
      badge: "bg-rose-100 text-rose-800",
      desc: "For dedicated practitioners & yoga teachers",
      focus: [
        "Deep internal awareness",
        "Advanced postures & transitions",
        "Subtle Pranayama practices",
        "Meditative stability",
      ],
      outcome: "Leads toward discipline, mastery, and inner harmony.",
    },
  ];

  const practiceFormats = [
    {
      title: "3-Month Structured Program",
      sanskrit: "Krama Sadhana",
      icon: <Calendar className="h-7 w-7" />,
      image: structuredYoga,
      shortDesc:
        "A guided yogic journey with a beginning, middle, and completion",
      features: [
        "Fixed 12-week duration",
        "Step-by-step progressive learning",
        "Structured syllabus with clear objectives",
        "Teacher-led guidance throughout",
        "Emphasis on krama (gradual progression)",
      ],
      bestFor:
        "Beginners who need proper foundation, or practitioners wanting systematic growth",
      principle:
        "Based on Abhyasa (consistent effort) and Krama (gradual progression)",
      // price: "Starting ₹8,000",
    },
    {
      title: "Regular Practice",
      sanskrit: "Sthira Abhyasa",
      icon: <Play className="h-7 w-7" />,
      image: regularYoga,
      shortDesc:
        "Continuous practice without a fixed end for long-term wellness",
      features: [
        "Ongoing practice, no end date",
        "Flexible enrollment anytime",
        "Focus on maintenance & continuity",
        "Less theory, more practice-oriented",
        "Ideal for sustaining balance",
      ],
      bestFor:
        "Students already familiar with yoga who want to maintain their practice",
      principle:
        "Rooted in Abhyāsa (regular practice) and Sthira-Sukha (steadiness & ease)",
      // price: "₹2,500 - ₹3,500/month",
    },
    {
      title: "Daily Live Sessions",
      sanskrit: "Nitya Sadhana",
      icon: <Sun className="h-7 w-7" />,
      image: dailyYoga,
      shortDesc:
        "Live guided daily practice for daily pracice and self-discipline",
      features: [
        "Live guided practice every day",
        "Fixed daily time slot",
        "Emphasis on discipline & routine",
        "Enhances body-breath-mind awareness",
        "Encourages habit formation",
      ],
      bestFor: "Students seeking daily accountability and live guidance",
      principle:
        "Supports Nitya Abhyasa (daily practice) and cultivates Tapas (self-discipline)",
      // price: "₹1,500/month",
    },
  ];

  const [expandedLevel, setExpandedLevel] = useState<number | null>(null);
  const [expandedFormat, setExpandedFormat] = useState<number | null>(null);
  const [showAllFormats, setShowAllFormats] = useState(false);

  return (
    <>
      {/* THREE LEVELS SECTION */}
      <section className="py-24 bg-secondary/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-primary font-semibold tracking-[0.2em] uppercase text-sm">
              Level-Based Learning
            </span>
            <h2 className="font-serif text-4xl md:text-5xl font-bold mt-4 text-foreground">
              Three Levels of Sadhana
            </h2>
            <p className="text-foreground/75 mt-4 max-w-3xl mx-auto text-lg">
              {/* Each level meets you where you are in your yogic journey with
              progressive learning. */}
              Discover balance, strength, and inner peace through our authentic
              yoga programs designed for every stage of your journey.
            </p>
            <div className="decorative-line mx-auto mt-6" />
          </div>

          <div className="space-y-16">
            {levels.map((item, i) => (
              <div
                key={i}
                className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
              >
                {/* IMAGE — SLIDES FROM LEFT */}
                <motion.div
                  initial={{ opacity: 0, x: -60 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.6,
                    ease: "easeOut",
                  }}
                  className={`relative ${i % 2 === 1 ? "lg:order-2" : ""}`}
                >
                  <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
                    <img
                      src={item.image}
                      alt={item.level}
                      className="w-full h-full object-cover"
                    />
                    <div
                      className={`absolute inset-0 bg-gradient-to-t ${item.color} opacity-30`}
                    />
                  </div>

                  <div className="absolute -bottom-4 -right-4 bg-white p-4 rounded-2xl shadow-xl hidden lg:block">
                    <Badge className={item.badge}>{item.level} Level</Badge>
                  </div>
                </motion.div>

                {/* CONTENT — SLIDES FROM RIGHT */}
                <motion.div
                  initial={{ opacity: 0, x: 60 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.6,
                    ease: "easeOut",
                    delay: 0.1,
                  }}
                  className={i % 2 === 1 ? "lg:order-1" : ""}
                >
                  <Badge className={`${item.badge} mb-4 lg:hidden`}>
                    {item.level} Level
                  </Badge>

                  <h3 className="font-serif text-3xl md:text-4xl font-bold mb-2 text-foreground">
                    {item.sanskrit}
                  </h3>

                  <p className="text-lg text-foreground/75 mb-6">{item.desc}</p>

                  <div className="mb-6">
                    <h4 className="font-semibold text-xl mb-3 flex items-center gap-2 text-foreground">
                      <BookOpen className="h-5 w-5 text-primary" />
                      Focus Areas
                    </h4>
                    <ul className="space-y-2">
                      {item.focus.map((point, j) => (
                        <li key={j} className="flex items-center gap-3">
                          <CheckCircle2 className="h-5 w-5 text-primary shrink-0" />
                          <span className="text-foreground/80">{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="p-4 bg-primary/5 rounded-xl border border-primary/10 mb-4">
                    <p className="text-sm">
                      <span className="font-semibold text-primary">
                        Outcome:
                      </span>{" "}
                      <span className="text-foreground/80">{item.outcome}</span>
                    </p>
                  </div>
                  <div className="flex items-center justify-center sm:justify-between pt-4 border-t border-border">
                    <Link to="/contact">
                      <Button
                        className="rounded-full"
                        data-testid="button-explore-personal"
                      >
                        Enroll Now
                      </Button>
                    </Link>
                  </div>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRACTICE FORMATS - SHORTER */}
      <section className="relative py-28 overflow-hidden bg-gradient-to-br from-[#f4faf7] via-[#eef6f1] to-[#e7f1ec]">
        {/* Background decorative elements */}
        <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px]" />
        <div className="absolute top-1/2 -right-32 w-[420px] h-[420px] bg-secondary/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-1/3 w-[300px] h-[300px] bg-primary/5 rounded-full blur-[100px]" />
        <div className="container mx-auto px-4 max-w-7xl">
          {/* Heading */}
          <div className="text-center mb-20">
            <span className="text-primary font-semibold tracking-[0.3em] uppercase text-sm">
              Choose Your Path
            </span>
            <h2 className="font-serif text-4xl md:text-5xl font-bold mt-4 text-foreground">
              Three Practice Formats
            </h2>
            <p className="max-w-2xl mx-auto mt-6 text-foreground/70 text-lg">
              Each format is designed as a distinct learning environment —
              choose based on your lifestyle, depth, and level of commitment.
            </p>
             <div className="decorative-line mx-auto mt-6" />{" "}

          </div>
                   

          {/* PATHWAYS */}
          <div className="space-y-16">
            {practiceFormats.map((format, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="relative overflow-hidden rounded-3xl shadow-xl border border-border"
              >
                <div className="grid grid-cols-1 lg:grid-cols-3">
                  {/* LEFT — ICON + TITLE */}
                  <div className="p-8 lg:p-10 flex flex-col justify-center bg-secondary/30">
                    <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-5">
                      {format.icon}
                    </div>
                    <h3 className="font-serif text-2xl font-bold text-foreground mb-1">
                      {format.title}
                    </h3>
                    <p className="italic text-primary mb-4">
                      {format.sanskrit}
                    </p>
                    <p className="text-foreground/75 leading-relaxed">
                      {format.shortDesc}
                    </p>
                  </div>

                  {/* CENTER — IMAGE */}

                  <TiltImage
                    src={format.image}
                    alt={format.title}
                    className="h-64 lg:h-auto"
                  />

                  {/* RIGHT — EXPANDABLE CONTENT */}
                  <div className="p-8 lg:p-10 flex flex-col justify-center">
                    <AnimatePresence>
                      {expandedFormat === i ? (
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          className="space-y-4"
                        >
                          <ul className="space-y-2">
                            {format.features.map((f, j) => (
                              <li
                                key={j}
                                className="flex items-start gap-3 text-foreground/80"
                              >
                                <CheckCircle2 className="h-4 w-4 text-primary mt-1" />
                                <span>{f}</span>
                              </li>
                            ))}
                          </ul>

                          <div className="p-4 bg-secondary/40 rounded-xl">
                            <p className="text-sm">
                              <span className="font-semibold">Best For:</span>{" "}
                              <span className="text-muted-foreground">
                                {format.bestFor}
                              </span>
                            </p>
                          </div>

                          <div className="p-4 bg-primary/5 rounded-xl border border-primary/10">
                            <p className="text-sm italic">
                              <span className="font-semibold text-primary">
                                Yogic Principle:
                              </span>{" "}
                              {format.principle}
                            </p>
                          </div>
                        </motion.div>
                      ) : (
                        <p className="text-foreground/60 italic">
                          Click below to explore this format in detail.
                        </p>
                      )}
                    </AnimatePresence>

                    <div className="pt-6 mt-6 border-t border-border">
                      <Button
                        variant="ghost"
                        size="sm"
                        className="text-md"
                        onClick={() =>
                          setExpandedFormat(expandedFormat === i ? null : i)
                        }
                      >
                        {expandedFormat === i ? "Close Path" : "Explore Path"}
                        <ChevronDown
                          className={`ml-2 h-4 w-4 transition-transform ${
                            expandedFormat === i ? "rotate-180" : ""
                          }`}
                        />
                      </Button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center mt-20">
            <Link to="/allprograms">
              <Button size="lg" className="rounded-full px-12 py-6 text-lg">
                View All Programs
                <ArrowRight className="ml-3 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* What We Offer - Group & One-on-One */}
      <section className="py-20 bg-primary/5 border-y border-primary/10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-primary font-semibold tracking-[0.2em] uppercase text-sm">
              Session Types
            </span>
            <h2 className="font-serif text-4xl md:text-5xl font-bold mt-4 text-foreground">
              What We Offer
            </h2>
            <p className="text-foreground/75 mt-4 max-w-2xl mx-auto">
              Choose between intimate group sessions or personalized one-on-one
              guidance based on your learning style and goals.
            </p>
            <div className="decorative-line mx-auto mt-6" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="p-8 bg-white rounded-3xl border-2 border-primary/20 shadow-xl hover-lift"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="p-4 bg-primary/10 rounded-2xl text-primary">
                  <Users className="h-8 w-8" />
                </div>
                <div>
                  <h3 className="font-serif text-3xl font-bold text-foreground">
                    Group Sessions
                  </h3>
                  <Badge className="bg-primary/10 text-primary mt-1">
                    Most Popular
                  </Badge>
                </div>
              </div>
              <p className="text-foreground/80 mb-6">
                Learn alongside fellow practitioners in small, focused groups.
                Experience community energy while receiving personalized
                attention.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center gap-3 text-foreground/80">
                  <CheckCircle2 className="h-5 w-5 text-primary shrink-0" />
                  Maximum 12 participants per batch
                </li>
                <li className="flex items-center gap-3 text-foreground/80">
                  <CheckCircle2 className="h-5 w-5 text-primary shrink-0" />
                  Level-specific batches for proper progression
                </li>
                <li className="flex items-center gap-3 text-foreground/80">
                  <CheckCircle2 className="h-5 w-5 text-primary shrink-0" />
                  Guided corrections & verbal cues
                </li>
                <li className="flex items-center gap-3 text-foreground/80">
                  <CheckCircle2 className="h-5 w-5 text-primary shrink-0" />
                  Supportive community environment
                </li>
              </ul>
              <div className="flex items-center justify-between pt-4 border-t border-border">
                <span className="text-lg font-bold text-primary">
                  From ₹2,000/month
                </span>
                <Link to="/contact">
                  <Button
                    className="rounded-full"
                    data-testid="button-explore-personal"
                  >
                    Enquire
                  </Button>
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="p-8 bg-white rounded-3xl border-2 border-accent/30 shadow-xl hover-lift"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="p-4 bg-accent/30 rounded-2xl text-primary">
                  <Star className="h-8 w-8" />
                </div>
                <div>
                  <h3 className="font-serif text-3xl font-bold text-foreground">
                    One-on-One Sessions
                  </h3>
                  <Badge className="bg-accent/30 text-primary mt-1">
                    Premium
                  </Badge>
                </div>
              </div>
              <p className="text-foreground/80 mb-6">
                Experience fully personalized attention with sessions tailored
                and designed exclusively around your needs, goals, and pace.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center gap-3 text-foreground/80">
                  <CheckCircle2 className="h-5 w-5 text-primary shrink-0" />
                  Fully personalized practice approach
                </li>
                <li className="flex items-center gap-3 text-foreground/80">
                  <CheckCircle2 className="h-5 w-5 text-primary shrink-0" />
                  Customized practice plans for you
                </li>
                <li className="flex items-center gap-3 text-foreground/80">
                  <CheckCircle2 className="h-5 w-5 text-primary shrink-0" />
                  Continuous real-time modifications
                </li>
                <li className="flex items-center gap-3 text-foreground/80">
                  <CheckCircle2 className="h-5 w-5 text-primary shrink-0" />
                  Individual progress tracking
                </li>
              </ul>
              <div className="flex items-center justify-between pt-4 border-t border-border">
                <span className="text-lg font-bold text-primary">
                  From ₹8,000/month
                </span>
                <Link to="/contact">
                  <Button
                    className="rounded-full"
                    data-testid="button-explore-personal"
                  >
                    Enquire
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SadhanaLevelsSection;
