import { useState } from "react";
import { Link } from "react-router-dom";
import { AnimateOnScroll } from "./AnimateOnScroll";
import { Leaf, Flame, Sun, ChevronDown, ArrowRight } from "lucide-react";
import heroImg from "@/assets/hero-yoga.jpg";
import ashtangaImg from "@/assets/ashtanga-yoga.jpg";
import pranayamaImg from "@/assets/pranayama.jpg";
import { Button } from "@/components/ui/button";

import { motion, AnimatePresence } from "framer-motion";
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
    // <section id="sadhana" className="section-padding bg-gradient-to-br from-secondary/60 via-background to-secondary/40 relative overflow-hidden">
    //   {/* Vertical marquee left */}
    //   <div className="absolute left-0 top-0 bottom-0 w-8 overflow-hidden opacity-5 hidden lg:block">
    //     <div className="animate-marquee-up flex flex-col gap-4 whitespace-nowrap">
    //       {[...Array(6)].map((_, i) => (
    //         <span key={i} className="text-xs font-bold text-primary [writing-mode:vertical-lr]">ARAMBHA • MADHYAMA • UTTAMA • SADHANA</span>
    //       ))}
    //     </div>
    //   </div>

    //   <div className="container mx-auto relative z-10">
    //     <AnimateOnScroll className="text-center mb-16">
    //       <p className="text-sm font-semibold text-primary uppercase tracking-widest mb-2">Progressive Path</p>
    //       <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground">
    //         Levels of <span className="text-gradient-green">Sadhana</span>
    //       </h2>
    //       <p className="text-muted-foreground mt-4 max-w-3xl mx-auto">
    //         A progressive and systematic unfolding of practice tailored to individual capacity, readiness, and purpose.
    //       </p>
    //     </AnimateOnScroll>

    //     {/* Level Cards with images */}
    //     <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
    //       {levels.map((lvl, i) => {
    //         const Icon = lvl.icon;
    //         const isExpanded = expandedLevel === i;
    //         return (
    //           <AnimateOnScroll key={lvl.level} animation="animate-fade-in-up" delay={i * 150}>
    //             <div className={`rounded-3xl overflow-hidden border border-border shadow-lg bg-gradient-to-br ${lvl.color} hover-lift`}>
    //               {/* Image */}
    //               <div className="aspect-[16/9] overflow-hidden relative">
    //                 <img src={lvl.image} alt={lvl.name} className="w-full h-full object-cover" />
    //                 <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
    //                 <div className="absolute bottom-4 left-4 flex items-center gap-2">
    //                   <div className="w-10 h-10 gradient-green rounded-full flex items-center justify-center">
    //                     <Icon className="w-5 h-5 text-primary-foreground" />
    //                   </div>
    //                   <span className="font-serif text-sm font-bold text-foreground bg-background/80 px-3 py-1 rounded-full">{lvl.level}</span>
    //                 </div>
    //               </div>

    //               <div className="p-6">
    //                 <h3 className="font-serif text-xl font-bold text-foreground mb-2">{lvl.name}</h3>
    //                 <p className="text-sm text-muted-foreground mb-4"><strong>Focus:</strong> {lvl.focus}</p>

    //                 {/* Expandable content */}
    //                 {isExpanded && (
    //                   <div className="animate-fade-in space-y-4 mb-4">
    //                     <div>
    //                       <p className="text-sm font-semibold text-foreground mb-2">Core Practices:</p>
    //                       <ul className="space-y-1.5">
    //                         {lvl.practices.map((p) => (
    //                           <li key={p} className="text-sm text-muted-foreground flex items-center gap-2">
    //                             <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
    //                             {p}
    //                           </li>
    //                         ))}
    //                       </ul>
    //                     </div>
    //                     <div className="pt-3 border-t border-border/50">
    //                       <p className="text-xs font-semibold text-foreground mb-1">Who Should Attend:</p>
    //                       <p className="text-xs text-muted-foreground leading-relaxed">{lvl.who}</p>
    //                     </div>
    //                   </div>
    //                 )}

    //                 <button
    //                   onClick={() => setExpandedLevel(isExpanded ? null : i)}
    //                   className="flex items-center gap-2 text-sm font-semibold text-primary hover:underline"
    //                 >
    //                   {isExpanded ? "Show Less" : "View More"}
    //                   <ChevronDown className={`w-4 h-4 transition-transform ${isExpanded ? "rotate-180" : ""}`} />
    //                 </button>
    //               </div>
    //             </div>
    //           </AnimateOnScroll>
    //         );
    //       })}
    //     </div>

    //     {/* Practice Formats - Card style */}
    //     <AnimateOnScroll>
    //       <div className="max-w-5xl mx-auto">
    //         <h3 className="font-serif text-2xl md:text-3xl font-bold text-foreground text-center mb-8">
    //           Practice Format & <span className="text-gradient-green">Pricing</span>
    //         </h3>
    //         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
    //           {(showAllFormats ? practiceFormats : practiceFormats.slice(0, 2)).map((pf, i) => (
    //             <AnimateOnScroll key={pf.format} animation="animate-scale-in" delay={i * 100}>
    //               <div className="bg-card rounded-2xl border border-border p-6 shadow-md hover-lift">
    //                 <div className="flex items-center gap-3 mb-4">
    //                   <span className="text-3xl">{pf.icon}</span>
    //                   <div>
    //                     <h4 className="font-serif text-lg font-bold text-foreground">{pf.format}</h4>
    //                     <p className="text-xs text-muted-foreground">{pf.days}</p>
    //                   </div>
    //                 </div>
    //                 <div className="grid grid-cols-3 gap-3">
    //                   <div className="bg-secondary rounded-xl p-3 text-center">
    //                     <p className="text-xs text-muted-foreground mb-1">Beginner</p>
    //                     <p className="font-serif text-lg font-bold text-primary">{pf.beginner}</p>
    //                   </div>
    //                   <div className="bg-secondary rounded-xl p-3 text-center">
    //                     <p className="text-xs text-muted-foreground mb-1">Intermediate</p>
    //                     <p className="font-serif text-lg font-bold text-primary">{pf.intermediate}</p>
    //                   </div>
    //                   <div className="bg-secondary rounded-xl p-3 text-center">
    //                     <p className="text-xs text-muted-foreground mb-1">Advanced</p>
    //                     <p className="font-serif text-lg font-bold text-primary">{pf.advanced}</p>
    //                   </div>
    //                 </div>
    //               </div>
    //             </AnimateOnScroll>
    //           ))}
    //         </div>
    //         {!showAllFormats && (
    //           <div className="text-center mt-8">
    //             <button onClick={() => setShowAllFormats(true)} className="gradient-green text-primary-foreground px-8 py-3 rounded-full font-semibold inline-flex items-center gap-2 hover:opacity-90 transition-opacity">
    //               View More Formats <ArrowRight className="w-4 h-4" />
    //             </button>
    //           </div>
    //         )}
    //         <p className="text-xs text-muted-foreground text-center mt-6">
    //           * 3-Month programs available at discounted rates. See our <Link to="/pricing" className="text-primary font-semibold underline">Pricing page</Link> for details.
    //         </p>
    //       </div>
    //     </AnimateOnScroll>
    //   </div>
    // </section>
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
                className="relative overflow-hidden rounded-3xl shadow-xl border border-border bg-white"
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
                  <div className="relative h-64  lg:h-auto">
                    <img
                      src={format.image}
                      alt={format.title}
                      className="absolute inset-0 w-full  h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent" />
                  </div>

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
                        size="sm" className="text-md"
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
                  <h3 className="font-serif text-2xl font-bold text-foreground">
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
                  <h3 className="font-serif text-2xl font-bold text-foreground">
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
