import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Award,
  Heart,
  Flame,
  Wind,
  Baby,
  Leaf,
  Stethoscope,
  GraduationCap,
  Sparkles,
} from "lucide-react";
import { AnimateOnScroll } from "./AnimateOnScroll";
import ycbImg from "@/assets/ycb-certification.jpg";
import therapeuticImg from "@/assets/therapy-yoga.jpg";
import ashtangaImg from "@/assets/ashtanga-yoga.jpg";
import pranayamaImg from "@/assets/pranayama.jpg";
import kidsImg from "@/assets/kids-yoga.jpg";
import prenatalImg from "@/assets/prenatal-yoga.jpg";
import advancedYoga from "@/assets/advanced-yoga.jpg";
import beginnerYoga from "@/assets/beginner-yoga.jpg";
import intermediateYoga from "@/assets/intermediate-yoga.jpg";
import HeroBg from "@/assets/yoga-group.jpg";
import level1 from "@/assets/YCB-Level-1.jpg";
import level2 from "@/assets/YCB-_Level-2.jpg";
import level3 from "@/assets/YCB_Level-3.jpg";
import { Button } from "@/components/ui/button";
import workshopImg from "@/assets/college-yoga.jpg";
import mindbody from "@/assets/mindbody.png";
import { useState } from "react";

type ProgramCategory = "YCB" | "Wellness" | "Level" | "Workshop";

const ProgramsCardSection = () => {
  const programs = [
    {
      title: "YCB Level 1 – Yoga Protocol Instructor",
      category: "YCB",
      desc: "This program builds a strong foundation in yoga practice and teaching, covering asanas, pranayama, yogic lifestyle, anatomy basics, and teaching methodology as per YCB guidelines.",
      fee: "₹10,999",
      image: level1,
      path: "/programs/ycb-level-1",
      icon: GraduationCap,
      tag: "YCB Aligned",
      mode: "Live Online Interactive Sessions",
      duration: "2 Months",
      certificationNote:
        "*Training aligned with Yoga Certification Board (YCB). Certification is awarded by the Ministry of AYUSH.",
      whoIsThisFor: [
        "Beginners with no prior experience",
        "Aspiring yoga instructors",
        "Yoga enthusiasts",
      ],
      learningOutcome: [
        "Strong foundation in yoga practice",
        "Confidence to conduct basic yoga sessions",
        "Understanding of yogic lifestyle principles",
      ],
      tags: [
        "Asanas",
        "Pranayama",
        "Yogic Lifestyle",
        "Anatomy Basics",
        "Teaching Methodology",
        "AYUSH Curriculum",
      ],
    },
    {
      title: "YCB Level 2 – Yoga Wellness Instructor",
      category: "YCB",
      desc: "An intermediate-level program focusing on wellness-oriented yoga practices, therapeutic applications, and lifestyle management aligned with YCB curriculum.",
      fee: "₹12,999",
      image: level2,
      path: "/programs/ycb-level-2",
      icon: Award,
      tag: "YCB Aligned",
      mode: "Live Online Interactive Sessions",
      duration: "2 Months",
      certificationNote:
        "*Training aligned with Yoga Certification Board (YCB). Certification is awarded by the Ministry of AYUSH.",
      whoIsThisFor: [
        "Graduates of Level 1 training",
        "Yoga instructors seeking wellness specialization",
        "Practitioners interested in preventive health",
      ],
      learningOutcome: [
        "Ability to design wellness-focused yoga sessions",
        "Understanding of therapeutic yoga applications",
        "Improved lifestyle counseling skills",
      ],
      tags: [
        "Therapeutic Applications",
        "Wellness Management",
        "Pranayama",
        "Disease Prevention",
        "Lifestyle Counseling",
        "AYUSH Curriculum",
      ],
    },
    {
      title: "YCB Level 3 – Yoga Teacher & Evaluator",
      category: "YCB",
      desc: "An advanced program emphasizing mastery in teaching methodology, assessment skills, yoga philosophy, and professional excellence.",
      fee: "₹14,999",
      image: level3,
      path: "/programs/ycb-level-3",
      icon: Sparkles,
      tag: "YCB Aligned",
      mode: "Live Online Interactive Sessions",
      duration: "2 Months",
      certificationNote:
        "*Training aligned with Yoga Certification Board (YCB). Certification is awarded by the Ministry of AYUSH.",
      whoIsThisFor: [
        "Experienced yoga instructors",
        "Teachers aspiring for senior roles",
        "Those interested in evaluation & mentorship",
      ],
      learningOutcome: [
        "Advanced teaching and assessment capabilities",
        "Deep understanding of yoga philosophy",
        "Professional readiness for leadership roles",
      ],
      tags: [
        "Advanced Pedagogy",
        "Yoga Philosophy",
        "Research Orientation",
        "Assessment Skills",
        "Therapeutic Expertise",
        "Professional Mastery",
      ],
    },
    {
      title: "Therapeutic Yoga (DPYT)",
      category: "Wellness",
      desc: "A structured therapeutic yoga program based on the Dual-Phase Yoga Therapy model for managing chronic and lifestyle-related conditions.",
      fee: "₹3,500/mo",
      image: therapeuticImg,
      path: "/programs/therapeutic-yoga",
      icon: Stethoscope,
      tag: "Therapy",
      mode: "Live Online Guided Sessions",
      duration: "Condition-based duration",
      session: ["One-on-One Session", "Group Session"],
      whoIsThisFor: [
        "Individuals with chronic health conditions",
        "People seeking non-invasive healing support",
        "Those looking for guided therapeutic practice",
      ],
      learningOutcome: [
        "Improved symptom management",
        "Better body awareness and recovery",
        "Tools for long-term self-care",
      ],
      tags: [
        "PCOD/PCOS",
        "Thyroid",
        "Back Pain",
        "Stress & Anxiety",
        "Diabetes",
        "Arthritis",
      ],
    },
    {
      title: "Mind-Body And Inner Clarity Program",
      category: "Mindfulness",
      desc: "A dedicated program to enhance mental clarity, emotional alignment, and inner peace using guided mindfulness and relaxation techniques.",
      fee: "Contact Us",
      image: mindbody,
      path: "/programs/mind-body-clarity",
      icon: GraduationCap, // You can replace with a meditation or mind icon if available
      tag: "Mindfulness Focused",
      mode: "Live Online Sessions",
      duration: "Flexible / Session-based",
      certificationNote:
        "*This program focuses on personal mental wellness, mindfulness, and inner clarity. No physical asanas included.",
      whoIsThisFor: [
        "Individuals seeking mental clarity and emotional balance",
        "Busy professionals wanting stress reduction",
        "Anyone interested in mindfulness and self-regulation",
      ],
      learningOutcome: [
        "Enhanced emotional awareness and regulation",
        "Stress reduction and mental calmness",
        "Techniques for daily mindfulness and inner clarity",
      ],
      tags: [
        "Mindfulness",
        "Emotional Regulation",
        "Meditation",
        "Stress Management",
        "Inner Clarity",
        "Mental Wellness",
      ],
    },
    {
      title: "Ashtanga Primary Series",
      category: "Wellness",
      desc: "A disciplined and dynamic vinyasa-based practice rooted in traditional Ashtanga Yoga methodology.",
      fee: "₹3,500/mo",
      image: ashtangaImg,
      path: "/programs/ashtanga",
      icon: Flame,
      tag: "Practice",
      mode: "Live Online Practice Sessions",
      duration: "Ongoing monthly batches",
      whoIsThisFor: [
        "Dedicated yoga practitioners",
        "Students seeking disciplined practice",
        "Those interested in traditional systems",
      ],
      learningOutcome: [
        "Improved strength and flexibility",
        "Enhanced breath-movement coordination",
        "Consistent disciplined practice",
      ],
      tags: [
        "Strength",
        "Flexibility",
        "Discipline",
        "Vinyasa Flow",
        "Traditional Practice",
        "Mind–Body Balance",
      ],
    },
    {
      title: "Pranayama, Mudras & Bandhas",
      category: "Wellness",
      desc: "A subtle yet powerful program focusing on breath regulation, energy locks, and internal awareness practices.",
      fee: "₹3,500/mo",
      image: pranayamaImg,
      path: "/programs/pranayama",
      icon: Wind,
      tag: "Energy",
      mode: "Live Online Guided Sessions",
      duration: "Module-based duration",
      whoIsThisFor: [
        "Yoga practitioners of all levels",
        "Individuals seeking mental clarity",
        "Those interested in subtle body practices",
      ],
      learningOutcome: [
        "Improved breath control",
        "Enhanced energy balance",
        "Greater mental focus and calmness",
      ],
      tags: [
        "Breath Control",
        "Stress Relief",
        "Energy Balance",
        "Lung Capacity",
        "Mental Clarity",
      ],
    },
    {
      title: "Kids Yoga: Glow & Grow",
      category: "Wellness",
      desc: "A playful and structured yoga program designed to support children’s physical, emotional, and mental development.",
      fee: "₹1,000/mo",
      image: kidsImg,
      path: "/programs/kids-yoga",
      icon: Baby,
      tag: "Kids",
      mode: "Live Online Interactive Sessions",
      duration: "Monthly batches",
      whoIsThisFor: [
        "Children aged 6–12 years",
        "Parents seeking holistic development for kids",
      ],
      learningOutcome: [
        "Improved focus and coordination",
        "Better emotional regulation",
        "Healthy posture habits",
      ],
      tags: [
        "Focus",
        "Flexibility",
        "Emotional Balance",
        "Posture",
        "Confidence",
      ],
    },
    {
      title: "Pre & Post Natal Yoga",
      category: "Wellness",
      desc: "A gentle and supportive yoga program for pregnancy and postpartum recovery, adapted for each stage.",
      fee: "Contact Us",
      image: prenatalImg,
      path: "/programs/prenatal",
      icon: Heart,
      tag: "Maternity",
      mode: "Live Online Personalized Sessions",
      duration: "Trimester-based",
      whoIsThisFor: ["Expecting mothers", "Postpartum women"],
      learningOutcome: [
        "Improved comfort during pregnancy",
        "Better breath awareness",
        "Safe postpartum recovery support",
      ],
      tags: [
        "Trimester Care",
        "Pelvic Strength",
        "Breath Awareness",
        "Postpartum Recovery",
      ],
    },
    {
      title: "Beginner Level",
      category: "Level",
      desc: "Foundational practices designed for newcomers to build awareness, stability, and consistency in yoga.",
      fee: "Contact Us",
      image: beginnerYoga,
      path: "/levels/beginner",
      icon: Leaf,
      tag: "Beginner",
      mode: "Live Online Guided Sessions",
      duration: [
        "3 Month Structured Program",
        "Regular Session",
        "Daily Live Classes",
      ],
      session: ["One-on-One Session", "Group Session"],
      whoIsThisFor: [
        "Absolute beginners with no prior yoga experience",
        "Individuals returning to practice after a long break",
        "Those seeking gentle and mindful movement",
        "Anyone looking to improve flexibility and basic strength",
      ],
      learningOutcome: [
        "Comfort with basic yoga postures and movements",
        "Improved body awareness and alignment",
        "Basic understanding of breath coordination",
        "Increased flexibility and reduced physical stiffness",
      ],
      tags: [
        "Basic Asanas",
        "Gentle Practice",
        "Flexibility",
        "Breath Awareness",
        "Stress Relief",
        "Body Alignment",
      ],
    },
    {
      title: "Intermediate Level",
      category: "Level",
      desc: "Progressive practices focusing on refinement, strength, stability, and deeper understanding of yogic techniques.",
      fee: "Contact Us",
      image: intermediateYoga,
      path: "/levels/intermediate",
      icon: Flame,
      tag: "Intermediate",
      mode: "Live Online Guided Sessions",
      duration: [
        "3 Month Structured Program",
        "Regular Session",
        "Daily Live Classes",
      ],
      session: ["One-on-One Session", "Group Session"],
      whoIsThisFor: [
        "Practitioners with a basic yoga foundation",
        "Those looking to deepen strength and endurance",
        "Students ready for longer and more dynamic practices",
        "Individuals interested in refining alignment and flow",
      ],
      learningOutcome: [
        "Improved muscular strength and balance",
        "Better coordination of breath and movement",
        "Ability to sustain longer practice sessions",
        "Enhanced focus and body–mind integration",
      ],
      tags: [
        "Strength Building",
        "Balance & Stability",
        "Flow Sequences",
        "Pranayama Control",
        "Mindful Movement",
        "Endurance",
      ],
    },
    {
      title: "Advanced Level",
      category: "Level",
      desc: "Intensive practices aimed at mastery, discipline, and profound inner transformation through advanced yogic techniques.",
      fee: "Contact Us",
      image: advancedYoga,
      path: "/levels/advanced",
      icon: Sparkles,
      tag: "Advanced",
      mode: "Live Online Advanced Practice Sessions",
      duration: [
        "3 Month Structured Program",
        "Regular Session",
        "Daily Live Classes",
      ],
      session: ["One-on-One Session", "Group Session"],

      whoIsThisFor: [
        "Experienced yoga practitioners",
        "Those seeking depth beyond physical practice",
        "Students interested in advanced techniques and discipline",
        "Practitioners aiming for mastery and inner refinement",
      ],
      learningOutcome: [
        "Ability to perform advanced asanas with stability",
        "Deeper awareness of breath, bandhas, and internal locks",
        "Improved meditative stability and focus",
        "Greater physical, mental, and energetic discipline",
      ],
      tags: [
        "Advanced Asanas",
        "Bandhas & Kumbhaka",
        "Deep Awareness",
        "Meditative Stability",
        "Inner Discipline",
        "Mastery Practice",
      ],
    },
    {
      title: "Specialized Yoga Workshops",
      category: "Workshop",
      desc: "Short-term, theme-focused workshops designed to explore specific aspects of yoga in depth—combining traditional wisdom, practical application, and guided experience.",
      fee: "Contact Us",
      image: workshopImg,
      path: "/workshops",
      icon: Sparkles,
      tag: "Workshop",

      mode: "Live Online & In-Person Workshops",

      duration: "Short-term intensive format",
      certificationNote:
        "*Training aligned with Private Certification. Certification is awarded by the Shadyuktha Yog.",

      session: [
        "Theme-based conceptual introduction",
        "Guided practical sessions",
        "Technique refinement & variations",
        "Applied yogic tools for daily life",
        "Interactive Q&A and discussion",
      ],

      whoIsThisFor: [
        "Yoga practitioners seeking deeper insight",
        "Teachers expanding subject-specific knowledge",
        "Wellness seekers exploring focused themes",
      ],

      learningOutcome: [
        "In-depth understanding of the selected theme",
        "Practical tools applicable beyond the mat",
        "Improved awareness and clarity of practice",
        "Integration of yogic principles into daily life",
      ],

      tags: [
        "Theme-Based Learning",
        "Practical Application",
        "Traditional Wisdom",
        "Interactive Sessions",
        "Focused Practice",
        "Holistic Growth",
      ],
    },
  ];

  const [activeFilter, setActiveFilter] = useState<
    "ALL" | "YCB" | "WELLNESS" | "LEVEL" | "WORKSHOP"
  >("ALL");
  const filteredPrograms = programs.filter((prog) => {
    if (activeFilter === "ALL") return true;
    if (activeFilter === "YCB") return prog.category === "YCB";
    if (activeFilter === "LEVEL") return prog.category === "Level";
    if (activeFilter === "WORKSHOP") return prog.category === "Workshop";
    if (activeFilter === "WELLNESS") return prog.category === "Wellness";
    return true;
  });
  return (
    <section
      id="programs"
      className="section bg-gradient-to-b from-secondary/50 via-background to-secondary/30 relative overflow-hidden"
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

      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-20">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <div
            className="absolute inset-0 z-10 bg-gradient-to-r 
  from-[#0f5132]/70 
  via-white/60 
  to-[#0f5132]/70 
  mix-blend-overlay"
          />

          <div
            className="absolute inset-0 z-10 bg-gradient-to-b 
  from-transparent 
  via-white/10 
  to-transparent"
          />
          <img
            src={HeroBg}
            alt="Hero Background"
            className="w-full h-full object-cover object-center scale-105 animate-[pulse_20s_ease-in-out_infinite]"
          />
        </div>

        <div className="container relative z-20 px-4 md:px-6 flex justify-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="max-w-3xl text-center mx-auto"
          >
            {/* <p className="text-sm font-semibold text-primary uppercase tracking-widest mb-5">
              Our Programs
            </p> */}

            {/* <h1
              className="font-serif text-5xl md:text-5xl font-bold fpnt-black text-foreground tracking-tight leading-tight"
            >
              <span className="block mb-4">Online Yoga Teacher Training </span>{" "}
              &
              <span className="block text-gradient-green mt-4">
                Integrated Wellness Program
              </span>
            </h1> */}

            <h1
              className="font-serif text-5xl md:text-7xl lg:text-5xl 
               font-black tracking-tight leading-tight 
               text-foreground mb-8"
            >
              <span> Online Yoga Teacher Training</span> <br />{" "}
              <span
                className="block mt-4 italic font-black 
                   text-primary drop-shadow-lg"
              >
                &
              </span>
              <span
                className="block mt-4 italic font-black 
                   text-primary drop-shadow-lg"
              >
                Wellness Programs
              </span>
            </h1>

            <p className="text-lg md:text-xl text-green/90 my-8 font-light max-w-xl mx-auto">
              Join our Yoga Certification Board (YCB) aligned courses and
              specialized programs to transform your life.
            </p>
          </motion.div>
        </div>
      </section>
      <div className="my-14 text-center">
        {/* Heading */}
        <p className="text-5xl font-semibold font-serif text-primary uppercase  mb-8">
          Our Programs
        </p>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-3">
          {[
            { label: "All Programs", value: "ALL" },
            { label: "YCB Programs", value: "YCB" },
            { label: "Wellness Programs", value: "WELLNESS" },
            { label: "Levels of Sadhana", value: "LEVEL" },
            { label: "Workshop", value: "WORKSHOP" },
          ].map((filter) => (
            <button
              key={filter.value}
              onClick={() => setActiveFilter(filter.value as any)}
              className={`px-5 py-2 rounded-full text-md font-semibold transition-all
          ${
            activeFilter === filter.value
              ? "bg-primary text-white shadow-md"
              : "bg-white/70 text-primary hover:bg-emerald-100"
          }`}
            >
              {filter.label}
            </button>
          ))}
        </div>
      </div>
      <div className="container mx-auto mt-10 relative z-10">
        {/* Header */}

        {/* Alternating program cards */}
        <div className="space-y-12">
          {filteredPrograms.map((prog, i) => {
            const isEven = i % 2 === 0;
            const Icon = prog.icon;
            return (
              <AnimateOnScroll key={prog.path} animation="animate-fade-up-soft">
                <div
                  className={`group flex flex-col ${
                    isEven ? "lg:flex-row" : "lg:flex-row-reverse"
                  } items-stretch gap-6 
    bg-gradient-to-br from-green-500/20 via-green-800/20 to-green
    rounded-3xl border border-green-500/10 
    overflow-hidden shadow-sm hover:shadow-lg transition-all duration-700`}
                >
                  {/* Image */}
                  <div className="relative lg:w-1/3 w-full overflow-hidden">
                    <div className="relative h-48 lg:h-full">
                      <img
                        src={prog.image}
                        alt={prog.title}
                        className="w-full h-full object-cover scale-105 
      group-hover:scale-110 transition-transform duration-[1200ms] ease-out"
                      />

                      {/* MERGE FADE — EVEN (image → content on RIGHT) */}
                      {/* IMAGE → CONTENT MERGE (EVEN) */}
                      {/* {isEven && (
                        <div
                          className="absolute inset-0
    bg-gradient-to-r
    from-transparent
    via-emerald-600/20
    via-emerald-900/10
    to-emerald-900"
                        />
                      )} */}

                      {/* IMAGE → CONTENT MERGE (ODD) */}
                      {/* {!isEven && (
                        <div
                          className="absolute inset-0
    bg-gradient-to-l
    from-transparent
    via-emerald-900/20
    via-emerald-900/50
    to-emerald-900"
                        />
                      )} */}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="lg:w-3/5 p-6 lg:p-8 animate-fade-in-delayed">
                    {/* Header */}
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-9 h-9 rounded-xl bg-emerald-600/90 flex items-center justify-center shadow-sm">
                        <Icon className="w-4 h-4 text-white" />
                      </div>
                      <span className="text-[11px] font-semibold uppercase tracking-wider text-emerald-700 bg-emerald-100 px-3 py-1 rounded-full">
                        {prog.tag}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="font-serif text-2xl lg:text-3xl font-semibold text-foreground mb-3">
                      {prog.title}
                    </h3>

                    <p className="text-md text-primary leading-relaxed mb-6 max-w-xl">
                      {prog.desc}
                    </p>
                    {/* Meta Info */}
                    {/* Meta Info */}
                    {prog.duration && Array.isArray(prog.duration) ? (
                      /* COLUMN LAYOUT — when duration is array */
                      <div className="mb-6 space-y-6 text-sm">
                        {/* Mode */}
                        {prog.mode && (
                          <p className="text-primary">
                            <span className="font-semibold text-primary">
                              Mode:
                            </span>{" "}
                            {prog.mode}
                          </p>
                        )}

                        {/* Duration (Column Layout) */}
                        <div>
                          <p className="text-sm font-semibold uppercase tracking-wide text-primary mb-3">
                            Duration
                          </p>

                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {prog.duration.map((item, index) => (
                              <div
                                key={index}
                                className="flex gap-3 p-3 rounded-xl text-primary
            bg-white/60 border border-emerald-200/40 
            backdrop-blur-sm"
                              >
                                <span className="mt-1.5 w-2 h-2 rounded-full bg-primary" />
                                <p className="text-sm text-primary">{item}</p>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    ) : (
                      /* ROW LAYOUT — when duration is string */
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6 text-sm">
                        {prog.mode && (
                          <p className="text-primary">
                            <span className="font-semibold text-primary">
                              Mode:
                            </span>{" "}
                            {prog.mode}
                          </p>
                        )}

                        {prog.duration && (
                          <p className="text-primary">
                            <span className="font-semibold text-primary">
                              Duration:
                            </span>{" "}
                            {prog.duration}
                          </p>
                        )}
                      </div>
                    )}

                    {/* Certification Note */}
                    {prog.certificationNote && (
                      <p className="text-sm text-muted-foreground italic mb-6">
                        {prog.certificationNote}
                      </p>
                    )}

                    {/* Sessions Included */}
                    {prog.session && (
                      <div className="mb-10">
                        <p className="text-sm font-semibold uppercase tracking-wide text-primary mb-4">
                          Session Type
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          {prog.session.map((session, index) => (
                            <div
                              key={index}
                              className="flex items-start gap-3 rounded-xl border border-border bg-background/50 p-2"
                            >
                              <span className="mt-1 h-2 w-2 rounded-full bg-primary flex-shrink-0" />
                              <p className="text-sm text-muted-foreground leading-relaxed">
                                {session}
                              </p>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Who This Is For */}
                    {(prog.whoIsThisFor || prog.learningOutcome) && (
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
                        {prog.whoIsThisFor && (
                          <div className="rounded-2xl border border-border bg-white/60 p-5 backdrop-blur-sm">
                            <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-4">
                              Designed For
                            </p>
                            <ul className="space-y-3">
                              {prog.whoIsThisFor.map((item, index) => (
                                <li key={index} className="flex gap-3">
                                  <span className="mt-2 w-2 h-2 rounded-full bg-primary" />
                                  <span className="text-sm text-muted-foreground">
                                    {item}
                                  </span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}

                        {prog.learningOutcome && (
                          <div className="rounded-2xl border border-border bg-white/60 p-5 backdrop-blur-sm">
                            <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-4">
                              Learning Outcomes
                            </p>
                            <ul className="space-y-3">
                              {prog.learningOutcome.map((outcome, index) => (
                                <li key={index} className="flex gap-3">
                                  <span className="mt-2 w-2 h-2 rounded-full bg-primary" />
                                  <span className="text-sm text-muted-foreground">
                                    {outcome}
                                  </span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </div>
                    )}

                    {/* CTA */}
                    <div className="flex items-center gap-6">
                      <Link
                        to={prog.path}
                        className="inline-flex items-center gap-2 
      bg-primary hover:bg-green-800 
      text-white px-6 py-2.5 rounded-full 
      text-sm font-semibold transition-all"
                      >
                        View More <ArrowRight className="w-4 h-4" />
                      </Link>

                      <Link
                        to="/Shadyuktha-Yog/contact"
                        className="inline-flex items-center gap-2 
      bg-white hover:bg-primary hover:text-white
      text-primary px-6 py-2.5 rounded-full 
      text-sm font-semibold transition-all"
                      >
                        Enquire Now <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>

                    {/* Tags */}
                    {/* <div className="flex flex-wrap gap-3 mt-10">
                      {prog.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-4 py-2 bg-emerald-500/10 border border-emerald-500/20 text-emerald-700 rounded-full text-sm"
                        >
                          {tag}
                        </span>
                      ))}
                    </div> */}
                  </div>
                </div>
              </AnimateOnScroll>
            );
          })}
        </div>
      </div>
      <AnimateOnScroll animation="animate-fade-up" className="my-10">
        <div className="max-w-4xl mx-auto text-center gradient-green text-primary-foreground rounded-3xl p-12 shadow-2xl">
          <p className="text-white/90 mb-6 max-w-2xl mx-auto text-lg leading-relaxed">
            From foundational certifications to specialized therapeutic tracks,
            discover the perfect path for your yogic journey.
          </p>

          <p className="font-serif text-3xl md:text-4xl font-bold mb-5 text-white">
            Move Towards the Centre of Being
          </p>

          {/* <p className="italic text-white/95 leading-relaxed max-w-3xl mx-auto mb-8">
            “Move from the periphery of movement to the centre of being.”
            <br />
            We blend traditional Yoga Sastra with modern therapeutic principles
            for holistic transformation.
          </p> */}

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/Shadyuktha-Yog/contact">
              <button className="px-8 py-3 rounded-full border border-white/60 text-primary bg-white font-semibold hover:bg-primary/10 hover:text-white transition">
                Talk to Us
              </button>
            </Link>
          </div>
        </div>
      </AnimateOnScroll>
    </section>
  );
};

export default ProgramsCardSection;
