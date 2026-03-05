import { Link } from "react-router-dom";
import { AnimateOnScroll } from "@/components/AnimateOnScroll";
import { Award, BookOpen, GraduationCap, CheckCircle } from "lucide-react";
import logo from "@/assets/shadyuktha_logo.jpg";
import teacher from "@/assets/yoga group.png";

const teachers = [
  {
    name: "Shalinipandi",
    role: "Founder-Director",
    qualification: "B.E. (Engineering), YCB Level 3 Certified",
    bio: "Dedicated yoga practitioner and certified instructor committed to integrating classical yogic wisdom with modern professional life. Former IT professional with extensive corporate experience.",
    classes: [
      "YCB Level 1, 2, 3",
      "Hatha Yoga",
      "Ashtanga Series",
      "Corporate Workshops",
    ],
    expertise: [
      "Traditional Hatha Yoga (Bihar School)",
      "Ashtanga Yoga (Pattabhi Jois)",
      "YCB-aligned Teacher Training",
      "DPYT Model",
    ],
    image: logo,
  },
  {
    name: "Dr. Meera Krishnan",
    role: "Therapeutic Yoga Lead",
    qualification: "BAMS, MSc Yoga Therapy, YCB Level 3",
    bio: "Specialist in evidence-based yoga therapy with deep expertise in the DPYT model. Combines Ayurvedic knowledge with modern therapeutic yoga for chronic condition management.",
    classes: [
      "Therapeutic Yoga",
      "Yoga Anatomy",
      "Pranayama Therapy",
      "One-on-One Healing",
    ],
    expertise: [
      "Dual-Phase Yoga Therapy",
      "Yoga for Chronic Conditions",
      "Ayurvedic Integration",
      "Clinical Yoga Assessment",
    ],
    image: logo,
  },
  {
    name: "Arvind Sharma",
    role: "Senior Yoga Instructor",
    qualification: "MA Yoga, YCB Level 2, RYT-500",
    bio: "Passionate Ashtanga and Pranayama specialist with over 10 years of teaching experience. Known for his disciplined approach and ability to guide practitioners through challenging sequences.",
    classes: [
      "Ashtanga Primary Series",
      "Pranayama & Bandhas",
      "Advanced Asana",
      "Meditation",
    ],
    expertise: [
      "Ashtanga Vinyasa System",
      "Advanced Pranayama",
      "Mudras & Bandhas",
      "Yogic Philosophy",
    ],
    image: logo,
  },
  {
    name: "Priya Nair",
    role: "Kids & Prenatal Yoga Specialist",
    qualification: "BSc Nursing, Prenatal Yoga Certification, YCB Level 2",
    bio: "Combines her nursing background with yoga expertise to deliver safe and nurturing programs for children and expectant mothers. Creates joyful, engaging sessions.",
    classes: [
      "Kids Yoga: Glow & Grow",
      "Pre & Post Natal Yoga",
      "Gentle Yoga",
      "Family Wellness",
    ],
    expertise: [
      "Children's Movement Therapy",
      "Trimester-specific Yoga",
      "Postpartum Recovery",
      "Playful Pedagogy",
    ],
    image: logo,
  },
  {
    name: "Deepak Raghavan",
    role: "YCB Exam Coordinator & Instructor",
    qualification: "MSc Yoga, YCB Level 3, UGC NET",
    bio: "Academic expert in yoga education and examination methodology. Guides students through YCB certification preparation with structured study plans and mock assessments.",
    classes: [
      "YCB Level 1 & 2",
      "Yoga Philosophy",
      "Theory Sessions",
      "Exam Preparation",
    ],
    expertise: [
      "YCB Exam Preparation",
      "Yoga Sutras Teaching",
      "Anatomy & Physiology",
      "Research Methodology",
    ],
    image: logo,
  },
  {
    name: "Lakshmi Venkatesh",
    role: "Corporate Wellness Facilitator",
    qualification: "MBA, YCB Level 2, Corporate Wellness Cert.",
    bio: "Bridges the corporate and wellness worlds. Designs and delivers workplace yoga programs that address modern professional challenges like burnout, posture, and stress.",
    classes: [
      "Corporate Workshops",
      "Desk Yoga",
      "Stress Management",
      "Mindfulness Programs",
    ],
    expertise: [
      "Corporate Wellness Design",
      "Ergonomic Yoga",
      "Team Building Yoga",
      "Executive Wellness",
    ],
    image: logo,
  },
];

const Teachers = () => {
  return (
    <main className="pt-20">
      {/* Hero */}
      <section
        className="section-padding relative text-primary-foreground flex items-center justify-center"
        style={{
          backgroundImage: `url(${teacher})`, // replace 'teacher' with your banner image
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          minHeight: "420px",
          width: "100%",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />

        <div className="text-center px-4 md:px-0">
          <AnimateOnScroll>
            <p className="text-sm font-semibold uppercase tracking-widest opacity-80 mb-2">
              Our Faculty
            </p>
            <h1 className="font-serif text-4xl md:text-6xl font-bold mb-4">
              Meet Our Teachers
            </h1>
            <p className="max-w-xl mx-auto opacity-90">
              Dedicated professionals bridging classical yogic wisdom with
              modern life through structured, mindful teaching.
            </p>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Teachers Grid */}
      {/* <section className="section-padding bg-gradient-to-br from-yellow-100 via-yellow-50 to-amber-100 text-foreground"> */}
      <section className="section-padding bg-white text-foreground">
        <div className="container mx-auto space-y-12">
          {teachers.map((t, i) => {
            const isEven = i % 2 === 0;
            return (
              <AnimateOnScroll
                key={t.name}
                animation={
                  isEven ? "animate-slide-in-left" : "animate-slide-in-right"
                }
              >
                <div
                  className={`flex flex-col items-center gap-8 bg-card rounded-3xl border border-border overflow-hidden shadow-md p-6 md:p-0 md:flex-row ${
                    isEven ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Image */}
                  <div className="w-48 h-48 md:w-1/3 md:h-auto flex justify-center md:justify-start">
                    <div className="w-full h-full rounded-2xl overflow-hidden">
                      <img
                        src={t.image}
                        alt={t.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="w-full md:w-2/3 p-4 md:p-10 text-center md:text-left">
                    <div className="flex flex-col md:flex-row md:items-center md:gap-3 mb-2 justify-center md:justify-start">
                      <h3 className="font-serif text-2xl font-bold text-foreground">
                        {t.name}
                      </h3>
                      <span className="text-xs font-bold uppercase tracking-wider text-primary bg-secondary px-3 py-1 rounded-full mt-2 md:mt-0">
                        {t.role}
                      </span>
                    </div>
                    <div className="flex justify-center md:justify-start items-center gap-2 mb-4">
                      <GraduationCap className="w-4 h-4 text-primary" />
                      <p className="text-sm text-muted-foreground">
                        {t.qualification}
                      </p>
                    </div>
                    <p className="text-muted-foreground leading-relaxed mb-5">
                      {t.bio}
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <p className="text-sm font-bold text-foreground mb-2 flex items-center justify-center md:justify-start gap-2">
                          <BookOpen className="w-4 h-4 text-primary" /> Classes
                        </p>
                        <div className="flex flex-wrap justify-center md:justify-start gap-2">
                          {t.classes.map((c) => (
                            <span
                              key={c}
                              className="text-xs bg-secondary text-foreground px-3 py-1 rounded-full"
                            >
                              {c}
                            </span>
                          ))}
                        </div>
                      </div>
                      <div>
                        <p className="text-sm font-bold text-foreground mb-2 flex items-center justify-center md:justify-start gap-2">
                          <Award className="w-4 h-4 text-primary" /> Expertise
                        </p>
                        <ul className="space-y-1 text-center md:text-left">
                          {t.expertise.map((e) => (
                            <li
                              key={e}
                              className="text-xs text-muted-foreground flex items-center gap-1.5 justify-center md:justify-start"
                            >
                              <CheckCircle className="w-3 h-3 text-primary shrink-0" />{" "}
                              {e}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </AnimateOnScroll>
            );
          })}
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding gradient-green text-white/90 text-center">
        <AnimateOnScroll>
          <h2 className="font-serif  text-white text-5xl font-bold mb-4">
            Begin Your Journey
          </h2>
          <p className="opacity-90 text-lg text-white max-w-xl mx-auto my-6">
            "Start your journey today. Move from the periphery of movement to
            the centre of being."
          </p>
          <Link
            to="/contact"
            className="inline-block bg-background text-primary px-8 py-3 rounded-full font-semibold hover:opacity-90 transition-opacity"
          >
            Begin Now
          </Link>
        </AnimateOnScroll>
      </section>
    </main>
  );
};

export default Teachers;
