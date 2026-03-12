import { Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Loader2,
  ArrowRight,
  Clock,
  Users,
  CheckCircle2,
  Star,
  Sparkles,
  Calendar,
  Play,
  Sun,
  Building2,
  GraduationCap,
  BookOpen,
  ChevronDown,
  ChevronUp,
  Stethoscope,
  Wind,
  Baby,
  Heart,
  Flame,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { AnimateOnScroll } from "../components/AnimateOnScroll";
import therapeuticImg from "@/assets/therapy-yoga.jpg";
import ashtangaImg from "@/assets/ashtanga-yoga.jpg";
import pranayamaImg from "@/assets/pranayama.jpg";
import kidsImg from "@/assets/kids-yoga.jpg";
import prenatalImg from "@/assets/prenatal-yoga.jpg";

const specialPrograms = [
  {
    id: "ashtanga",
    title: "Ashtanga Vinyasa Series",
    sanskrit: "Ashtanga Vinyasa Krama",
    image: "https://shadyukthayoga.s3.ap-south-1.amazonaws.com/assets/ashtanga-yoga.jpg",
    icon: <Star className="h-6 w-6" />,
    shortDesc:
      "The dynamic, athletic sequence of traditional Ashtanga yoga following the lineage of Sri K. Pattabhi Jois.",
    fullDesc: `Ashtanga Vinyasa Yoga is a powerful, dynamic practice that synchronizes breath with a progressive series of postures. This ancient method produces intense internal heat and a purifying sweat that detoxifies muscles and organs.

The Series We Teach:
• Primary Series (Yoga Chikitsa) - Therapeutic Yoga
• Intermediate Series (Nadi Shodhana) - Nerve Purification  
• Advanced Series introduction for qualified practitioners

What You'll Learn:
• Tristhana method: Breathing (Ujjayi), Posture (Asana), Gazing point (Drishti)
• Vinyasa count and traditional Sanskrit terminology
• Bandha engagement throughout practice
• Self-practice (Mysore style) development

Class Formats Available:
• Led Primary Series (guided with counts)
• Mysore Style (self-practice with individual adjustments)
• Fundamentals for beginners

Requirements: Recommended minimum 3-month yoga experience. Beginners start with Fundamentals.`,
    benefits: [
      "Builds strength & flexibility",
      "Increases cardiovascular health",
      "Develops discipline & focus",
      "Traditional lineage teachings",
    ],
    duration: "90 min sessions",
    // price: "₹4,000/month",
  },
  {
    id: "pranayama",
    title: "Pranayama, Mudras & Bandhas",
    sanskrit: "Prana Vidya",
    image: "https://shadyukthayoga.s3.ap-south-1.amazonaws.com/assets/pranayama.jpg",
    icon: <Sparkles className="h-6 w-6" />,
    shortDesc:
      "Master the subtle practices of breath control, hand gestures, and energy locks for deeper transformation.",
    fullDesc: `This specialized program delves into the subtle dimensions of yoga practice beyond āsana. Learn the powerful techniques that traditional yogis used for energy mastery and spiritual development.

Pranayama Techniques Covered:
• Nadi Sodhana (Alternate Nostril Breathing)
• Kapalabhati (Skull Shining Breath)
• Bhastrika (Bellows Breath)
• Ujjayi (Victorious Breath)
• Sitali & itkari (Cooling Breaths)
• Bhramari(Humming Bee Breath)
• Kumbhaka (Breath Retention) practices

Mudra (Hand Gestures) Training:
• Cin/Jnana Mudra - Consciousness gesture
• Dhyana Mudra - Meditation gesture
• Prana Mudra - Life force gesture
• Apana Mudra - Downward energy gesture
• And other therapeutic mudras

Bandha (Energy Locks):
• Mula Bandha - Root lock
• Uddiyana Bandha - Abdominal lock
• Jalandhara Bandha - Throat lock
• Maha Bandha - Great lock (combination)

Prerequisites: Completion of Beginner level or equivalent experience.`,
    benefits: [
      "Increases pranic energy",
      "Calms nervous system",
      "Enhances meditation",
      "Supports healing",
    ],
    duration: "60 min sessions, 2x/week",
    // price: "₹3,500/month",
  },
  {
    id: "corporate",
    title: "College & Corporate Workshops",
    sanskrit: "Sangha Yoga",
    image: "/images/corporate-yoga.jpg",
    icon: <Building2 className="h-6 w-6" />,
    shortDesc:
      "Customized yoga programs for educational institutions and organizations to promote wellness and productivity.",
    fullDesc: `Bring the transformative power of yoga to your institution or organization. Our workshops are designed to address the specific needs of students, faculty, and corporate teams.

For Educational Institutions:
• Stress management during exams
• Focus & concentration techniques
• Postural correction for students
• Teacher wellness programs
• Sports team performance yoga
• Mindfulness for academic success

For Corporate Organizations:
• Desk yoga & postural wellness
• Stress relief & burnout prevention
• Team building through yoga
• Executive wellness programs
• Lunch-hour yoga sessions
• Retreat & offsite programs

Workshop Formats:
• Single session workshops (2-4 hours)
• Weekly ongoing classes
• Intensive programs (3-5 days)
• Quarterly wellness days
• Annual wellness programs

Customization:
All programs are tailored to your group's needs, time constraints, and goals. We work with HR teams and wellness coordinators to design the perfect program.

Group Size: 15-100+ participants
Location: At your premises or virtual`,
    benefits: [
      "Reduces workplace stress",
      "Improves productivity",
      "Builds team cohesion",
      "Promotes wellness culture",
    ],
    duration: "Customizable",
    // price: "Custom Quote",
  },
];

const programs = [
  {
    title: "Therapeutic Yoga (DPYT)",
    desc: "Evidence-based Dual-Phase Yoga Therapy model for chronic conditions and healing.",
    fee: "₹3,500/mo",
    image: "https://shadyukthayoga.s3.ap-south-1.amazonaws.com/assets/therapy-yoga.jpg",
    path: "/programs/therapeutic-yoga",
    icon: Stethoscope,
    tag: "Healing",
  },
  {
    title: "Ashtanga Primary Series",
    desc: "Dynamic vinyasa flow building strength, discipline & traditional practice.",
    fee: "₹3,500/mo",
    image: "https://shadyukthayoga.s3.ap-south-1.amazonaws.com/assets/ashtanga-yoga.jpg",
    path: "/programs/ashtanga",
    icon: Flame,
    tag: "Mastery",
  },
  {
    title: "Pranayama, Mudras & Bandhas",
    desc: "Master your energy through ancient breath science & subtle body practices.",
    fee: "₹3,500/mo",
    image: "https://shadyukthayoga.s3.ap-south-1.amazonaws.com/assets/pranayama.jpg",
    path: "/programs/pranayama",
    icon: Wind,
    tag: "Energy",
  },
  {
    title: "Kids Yoga: Glow & Grow",
    desc: "Fun, focused yoga for children aged 6-12 with story-flow asanas.",
    fee: "₹1,000/mo",
    image: "https://shadyukthayoga.s3.ap-south-1.amazonaws.com/assets/kids-yoga.jpg",
    path: "/programs/kids-yoga",
    icon: Baby,
    tag: "Kids",
  },
  {
    title: "Pre & Post Natal Yoga",
    desc: "Holistic maternity care for every trimester & postpartum recovery.",
    fee: "Contact Us",
    image: "https://shadyukthayoga.s3.ap-south-1.amazonaws.com/assets/prenatal-yoga.jpg",
    path: "/programs/prenatal",
    icon: Heart,
    tag: "Maternity",
  },
];

const WellnessProgram = () => {
  const [expandedSpecial, setExpandedSpecial] = useState<string | null>(null);
  return (
    <section
      id="programs"
      className="section-padding bg-gradient-to-b from-secondary/50 via-background to-secondary/30 relative overflow-hidden"
    >
      {/* Vertical marquee decoration */}
      <div className="absolute right-0 top-0 bottom-0 w-10 overflow-hidden opacity-10 hidden lg:block">
        <div className="animate-marquee-up flex flex-col gap-6 whitespace-nowrap">
          {[...Array(4)].map((_, i) => (
            <span
              key={i}
              className="flex flex-col gap-6 text-xs font-bold text-primary [writing-mode:vertical-lr]"
            >
              <span>YOGA</span>
              <span>SADHANA</span>
              <span>PRANAYAMA</span>
              <span>MEDITATION</span>
              <span>HEALING</span>
              <span>STRENGTH</span>
            </span>
          ))}
        </div>
      </div>

      <div className="container mx-auto relative z-10">
        {/* Header */}
        <AnimateOnScroll className="text-center mb-16">
          <p className="text-sm font-semibold text-primary uppercase tracking-widest mb-2">
            Our Programs
          </p>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground">
            Transform Your <span className="text-gradient-green">Practice</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            From foundational certifications to specialized therapeutic tracks,
            discover the perfect path for your yogic journey.
          </p>
        </AnimateOnScroll>

        {/* Philosophy at center */}
        <AnimateOnScroll animation="animate-scale-in" className="mb-16">
          <div className="max-w-3xl mx-auto text-center gradient-green text-primary-foreground rounded-3xl p-10 shadow-xl">
            <p className="font-serif text-2xl md:text-3xl font-bold mb-3">
              Our Philosophy
            </p>
            <p className="opacity-90 leading-relaxed text-lg italic">
              "Move from the periphery of movement to the centre of being." — We
              blend traditional Yoga Sastra with modern therapeutic principles
              for holistic transformation.
            </p>
          </div>
        </AnimateOnScroll>

        {/* Alternating program cards */}
        {/* <div className="space-y-12">
          {programs.map((prog, i) => {
            const isEven = i % 2 === 0;
            const Icon = prog.icon;
            return (
              <AnimateOnScroll
                key={prog.path}
                animation={
                  isEven ? "animate-slide-in-left" : "animate-slide-in-right"
                }
              >
                <div
                  className={`flex flex-col ${isEven ? "lg:flex-row" : "lg:flex-row-reverse"} gap-8 items-center bg-card rounded-3xl border border-border overflow-hidden shadow-md hover-lift`}
                >
                  
                  <div className="lg:w-2/5 w-full">
                    <div className="aspect-[4/3] lg:aspect-auto lg:h-full overflow-hidden">
                      <img
                        src={prog.image}
                        alt={prog.title}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                      />
                    </div>
                  </div>
          
                  <div className="lg:w-3/5 p-8 lg:p-10">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 gradient-green rounded-xl flex items-center justify-center">
                        <Icon className="w-5 h-5 text-primary-foreground" />
                      </div>
                      <span className="text-xs font-bold uppercase tracking-wider text-primary bg-secondary px-3 py-1 rounded-full">
                        {prog.tag}
                      </span>
                    </div>
                    <h3 className="font-serif text-2xl font-bold text-foreground mb-3">
                      {prog.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed mb-5">
                      {prog.desc}
                    </p>
                    <div className="flex items-center gap-6">
                      <span className="font-serif text-2xl font-bold text-primary">
                        {prog.fee}
                      </span>
                      <Link
                        to={prog.path}
                        className="gradient-green text-primary-foreground px-6 py-2.5 rounded-full text-sm font-semibold inline-flex items-center gap-2 hover:opacity-90 transition-opacity"
                      >
                        View More <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                </div>
              </AnimateOnScroll>
            );
          })}
        </div> */}
        <section className="py-24 bg-gradient-to-b from-primary/5 to-white mandala-pattern">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <span className="text-primary font-semibold tracking-[0.2em] uppercase text-sm">
                Specialized Training
              </span>
              <h2 className="font-serif text-4xl md:text-5xl font-bold mt-4 text-foreground">
                Special Programs
              </h2>
              <p className="text-foreground/75 mt-4 max-w-2xl mx-auto text-lg">
                Advanced and specialized programs for deeper practice and
                specific needs
              </p>
              <div className="decorative-line mx-auto mt-6" />
            </div>

            <div className="space-y-8">
              {specialPrograms.map((program, idx) => {
                const isExpanded = expandedSpecial === program.id;

                return (
                  <motion.div
                    key={program.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="bg-white rounded-3xl overflow-hidden border border-border shadow-lg glow-primary"
                  >
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-0">
                      {/* Image */}
                      <div className="relative aspect-video lg:aspect-auto overflow-hidden">
                        <img
                          src={program.image}
                          alt={program.title}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black/30 lg:bg-gradient-to-t lg:from-black/50 lg:to-transparent" />
                      </div>

                      {/* Content */}
                      <div className="lg:col-span-2 p-8">
                        <div className="flex items-start gap-4 mb-4">
                          <div className="p-3 bg-primary/10 rounded-xl text-primary">
                            {program.icon}
                          </div>
                          <div>
                            <h3 className="font-serif text-2xl font-bold text-foreground">
                              {program.title}
                            </h3>
                            <p className="text-sm italic text-primary">
                              {program.sanskrit}
                            </p>
                          </div>
                        </div>

                        <p className="text-foreground/85 mb-6">
                          {program.shortDesc}
                        </p>

                        <div className="flex flex-wrap gap-2 mb-6">
                          {program.benefits.map((benefit, i) => (
                            <Badge
                              key={i}
                              variant="secondary"
                              className="bg-secondary text-secondary-foreground"
                            >
                              {benefit}
                            </Badge>
                          ))}
                        </div>

                        <AnimatePresence>
                          {isExpanded && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: "auto" }}
                              exit={{ opacity: 0, height: 0 }}
                              className="mb-6"
                            >
                              <div className="p-6 bg-secondary/30 rounded-xl whitespace-pre-line text-foreground/90 text-sm leading-relaxed">
                                {program.fullDesc}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>

                        <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-border">
                          <div className="flex items-center gap-6 text-sm text-foreground/70">
                            <span className="flex items-center gap-1">
                              <Clock className="h-4 w-4" />
                              {program.duration}
                            </span>
                            {/* <span className="text-xl font-bold text-primary">
                            {program.price}
                          </span> */}
                          </div>
                          <div className="flex gap-3">
                            <Button
                              variant="outline"
                              onClick={() =>
                                setExpandedSpecial(
                                  isExpanded ? null : program.id,
                                )
                              }
                              className="rounded-full"
                              data-testid={`button-read-more-${program.id}`}
                            >
                              {isExpanded ? "Show Less" : "Read More"}
                              {isExpanded ? (
                                <ChevronUp className="ml-1 h-4 w-4" />
                              ) : (
                                <ChevronDown className="ml-1 h-4 w-4" />
                              )}
                            </Button>
                            <Link to="/contact">
                              <Button
                                className="rounded-full"
                                data-testid={`button-inquire-${program.id}`}
                              >
                                Enquire Now
                                <ArrowRight className="ml-1 h-4 w-4" />
                              </Button>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>
      </div>

      {/* ASHTANGA SECTION */}
      {/* <section className="py-24 bg-white overflow-hidden relative">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="w-full lg:w-1/2">
              <h2 className="text-4xl md:text-5xl font-serif mb-6 text-primary">
                Ashtanga Primary Series
              </h2>
              <p className="text-lg text-foreground/70 mb-8 font-sans">
                A structured sequence designed for deep physical and mental
                resilience. Focus on Vinyasa, Tristhana, and the Primary
                sequence.
              </p>
              <Link to="/programs/ashtanga">
                <a className="inline-flex items-center gap-2 font-bold text-primary hover:gap-3 transition-all">
                  Explore Ashtanga <ArrowRight className="w-4 h-4" />
                </a>
              </Link>
            </div>
            <div className="w-full lg:w-1/2 relative">
              <div className="rounded-[3rem] overflow-hidden aspect-[4/3] shadow-2xl">
                <img
                  src={ashtanga}
                  alt="Ashtanga"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -left-12 top-1 translate-y-0.5 h-full overflow-hidden w-12 hidden xl:block opacity-">
                <div
                  className="animate-[marquee-y_10s_linear_infinite] flex flex-col gap-10 text-5xl font-serif"
                  style={{ writingMode: "vertical-rl" }}
                >
                  FLOW • FOCUS • FLOW • ENDURANCE
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* THERAPY SECTION - UNIQUE GREEN BACKGROUND */}
      {/* <section className="py-24 bg-[#f1f5f1] overflow-hidden relative">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row-reverse gap-16 items-center">
            <div className="w-full lg:w-1/2">
              <h2 className="text-4xl md:text-5xl font-serif mb-6 text-accent">
                Yoga Therapy (DPYT)
              </h2>
              <p className="text-lg text-foreground/70 mb-8 font-sans">
                Clinical healing through our Dual-Phase Yoga Technique. Tailored
                for chronic conditions, hormonal balance, and postural
                correction.
              </p>
              <Link to="/programs/therapeutic">
                <a className="inline-flex items-center gap-2 font-bold text-accent hover:gap-3 transition-all">
                  Clinical Recovery <ArrowRight className="w-4 h-4" />
                </a>
              </Link>
            </div>
            <div className="w-full lg:w-1/2 relative">
              <div className="rounded-[3rem] overflow-hidden aspect-[4/3] shadow-2xl">
                <img
                  src={therapeutic}
                  alt="Therapy"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -right-12 top-1/2 -translate-y-1/2 h-full overflow-hidden w-12 hidden xl:block opacity-5">
                <div
                  className="animate-[marquee-y_12s_linear_infinite] flex flex-col gap-10 text-5xl font-serif"
                  style={{ writingMode: "vertical-rl" }}
                >
                  HEALING • RESET • HEALING • RESET
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* PRENATAL SECTION - WHITE BACKGROUND */}
      {/* <section className="py-24 bg-white overflow-hidden relative">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="w-full lg:w-1/2">
              <h2 className="text-4xl md:text-5xl font-serif mb-6 text-primary">
                Pre & Post Natal Care
              </h2>
              <p className="text-lg text-foreground/70 mb-8 font-sans">
                Empowering motherhood through conscious movement and breathwork.
                Safe practices for all trimesters and fourth-trimester recovery.
              </p>
              <Link to="/programs/prenatal">
                <a className="inline-flex items-center gap-2 font-bold text-primary hover:gap-3 transition-all">
                  View Maternity Care <ArrowRight className="w-4 h-4" />
                </a>
              </Link>
            </div>
            <div className="absolute -right-12 top-1/2 -translate-y-1/2 h-full overflow-hidden w-12 hidden xl:block opacity-5">
              <div
                className="animate-[marquee-y_12s_linear_infinite] flex flex-col gap-10 text-5xl font-serif"
                style={{ writingMode: "vertical-rl" }}
              >
                HEALING • RESET • HEALING • RESET
              </div>
            </div>
            <div className="w-full lg:w-1/2">
              <div className="grid grid-cols-2 gap-4">
                <img
                  src={prenatal}
                  alt="Prenatal"
                  className="rounded-3xl shadow-lg aspect-square object-cover"
                />
                <div className="flex flex-col gap-4">
                  <div className="bg-primary/10 p-6 rounded-3xl flex-1 flex flex-col justify-center">
                    <p className="text-3xl font-serif text-primary">98%</p>
                    <p className="text-xs font-sans uppercase tracking-widest opacity-60">
                      Positive Birth Experience
                    </p>
                  </div>
                  <div className="bg-accent/10 p-6 rounded-3xl flex-1 flex flex-col justify-center">
                    <p className="text-3xl font-serif text-accent">500+</p>
                    <p className="text-xs font-sans uppercase tracking-widest opacity-60">
                      Mothers Supported
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}
      {/* <section className="py-24 bg-[#f1f5f1] overflow-hidden relative">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="w-full lg:w-1/2">
              <h2 className="text-4xl md:text-5xl font-serif mb-6 text-accent">
                Kids Yoga
              </h2>
              <p className="text-lg text-foreground/70 mb-8 font-sans">
                Fun, mindful, and age-appropriate yoga practices designed to
                improve focus, flexibility, emotional balance, and overall
                well-being in children.
              </p>
              <Link to="/programs/kids-yoga">
                <span className="inline-flex items-center gap-2 font-bold text-accent hover:gap-3 transition-all cursor-pointer">
                  Explore Kids Program <ArrowRight className="w-4 h-4" />
                </span>
              </Link>
            </div>

            <div className="w-full lg:w-1/2">
              <div className="rounded-[3rem] overflow-hidden aspect-[4/3] shadow-2xl">
                <img
                  src={kidsImg}
                  alt="Kids Yoga"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* <section className="py-24 bg-white overflow-hidden relative">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row-reverse gap-16 items-center">
            <div className="w-full lg:w-1/2">
              <h2 className="text-4xl md:text-5xl font-serif mb-6 text-accent">
                Pranayama
              </h2>
              <p className="text-lg text-foreground/70 mb-8 font-sans">
                Systematic breath regulation techniques to enhance lung
                capacity, calm the nervous system, and deepen mind–body
                awareness.
              </p>
              <Link to="/programs/pranayama">
                <span className="inline-flex items-center gap-2 font-bold text-accent hover:gap-3 transition-all cursor-pointer">
                  Breath & Balance <ArrowRight className="w-4 h-4" />
                </span>
              </Link>
            </div>

            <div className="w-full lg:w-1/2">
              <div className="rounded-[3rem] overflow-hidden aspect-[4/3] shadow-2xl">
                <img
                  src={pranayamaImg}
                  alt="Pranayama"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-[#f1f5f1] overflow-hidden relative">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="w-full lg:w-1/2">
              <h2 className="text-4xl md:text-5xl font-serif mb-6 text-accent">
                Beginner Level Yoga
              </h2>
              <p className="text-lg text-foreground/70 mb-8 font-sans">
                A gentle introduction to yogic practices focusing on posture
                alignment, breathing awareness, and foundational techniques.
              </p>
              <Link to="/programs/beginner">
                <span className="inline-flex items-center gap-2 font-bold text-accent hover:gap-3 transition-all cursor-pointer">
                  Start Your Journey <ArrowRight className="w-4 h-4" />
                </span>
              </Link>
            </div>

            <div className="w-full lg:w-1/2">
              <div className="rounded-[3rem] overflow-hidden aspect-[4/3] shadow-2xl">
                <img
                  src={beginner}
                  alt="Beginner Yoga"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white overflow-hidden relative">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row-reverse gap-16 items-center">
            <div className="w-full lg:w-1/2">
              <h2 className="text-4xl md:text-5xl font-serif mb-6 text-accent">
                Intermediate Level Yoga
              </h2>
              <p className="text-lg text-foreground/70 mb-8 font-sans">
                Strengthen and refine your practice with deeper asanas, breath
                coordination, and enhanced body awareness.
              </p>
              <Link to="/programs/intermediate">
                <span className="inline-flex items-center gap-2 font-bold text-accent hover:gap-3 transition-all cursor-pointer">
                  Deepen Practice <ArrowRight className="w-4 h-4" />
                </span>
              </Link>
            </div>

            <div className="w-full lg:w-1/2">
              <div className="rounded-[3rem] overflow-hidden aspect-[4/3] shadow-2xl">
                <img
                  src={intermediate}
                  alt="Intermediate Yoga"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-[#f1f5f1] overflow-hidden relative">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="w-full lg:w-1/2">
              <h2 className="text-4xl md:text-5xl font-serif mb-6 text-accent">
                Advanced Level Yoga
              </h2>
              <p className="text-lg text-foreground/70 mb-8 font-sans">
                An intensive practice for experienced practitioners focusing on
                advanced asanas, breath mastery, and deeper meditative states.
              </p>
              <Link to="/programs/advanced">
                <span className="inline-flex items-center gap-2 font-bold text-accent hover:gap-3 transition-all cursor-pointer">
                  Master the Practice <ArrowRight className="w-4 h-4" />
                </span>
              </Link>
            </div>

            <div className="w-full lg:w-1/2">
              <div className="rounded-[3rem] overflow-hidden aspect-[4/3] shadow-2xl">
                <img
                  src={advanced}
                  alt="Advanced Yoga"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section> */}
    </section>
  );
};

export default WellnessProgram;
