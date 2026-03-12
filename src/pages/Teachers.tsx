import { Link } from "react-router-dom";
import { AnimateOnScroll } from "@/components/AnimateOnScroll";
import { Award, BookOpen, GraduationCap, CheckCircle } from "lucide-react";

const teachers = [
  {
    name: "Shalinipandi",
    role: "Founder-Director",
    qualification: "B.E, YCB Level 3 Certified Yoga Teacher And Evaluator",
    bio: "Dedicated yoga practitioner and certified instructor committed to integrating classical yogic wisdom with modern professional life. IT professional with extensive corporate experience.",
    classes: [
      "YCB Level 1, 2, 3",
      "Hatha Yoga",
      "Ashtanga Series",
      "Therapy Classes",
      "Workshops",
    ],
    expertise: [
      "Traditional Hatha Yoga (Bihar School)",
      "Ashtanga Yoga (Pattabhi Jois)",
      "YCB-aligned Teacher Training",
      "Yoga Anatomy",
      "Therapeutic Yoga",
      "DPYT Model",
    ],
    image: "https://shadyukthayoga.s3.ap-south-1.amazonaws.com/assets/shalini.png",
  },
  {
    name: "Brindha Thiyagarajan",
    role: "Therapeutic Yoga Lead",
    qualification:
      "B.Tech in Biotechnology , M.A. in Yoga for Human Excellence ,  Specialization in Simplified Kundalini Yoga & Holistic Wellness, Diploma in Child & Adult Psychology Counselling",
    bio: "Specialist in evidence-based yoga therapy. Combines simplified Kundalini yoga, and modern therapeutic psychology for holistic wellness and chronic condition management.Integrates yogic practices, breathwork, and psychological awareness to help individuals develop emotional balance, mental clarity, and conscious self-direction.",
    classes: [
      "YCB Level 1, 2, 3",
      "Therapeutic Yoga",
      "Mind-Body and Inner Clarity Program",
      "One-on-One Healing",
      "Child & Adult Psychotherapy",
    ],
    expertise: [
      "Specialization in Simplified Kundalini Yoga & Holistic Wellness",
      "Yoga for Chronic Conditions",
      "Ayurvedic Integration",
      "Clinical Yoga Assessment",
      "Child & Adult Psychotherapy",
      "Experiential Psychodynamics",
    ],
    image:"https://shadyukthayoga.s3.ap-south-1.amazonaws.com/assets/Brindha.png",
  },
];

const Teachers = () => {
  return (
    <main className="pt-20">
      {/* Hero */}
      <section
        className="section-padding relative text-primary-foreground flex items-center justify-center"
        style={{
          backgroundImage: `url("https://shadyukthayoga.s3.ap-south-1.amazonaws.com/assets/yoga group.png")`,
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
            <p className="max-w-xl mx-auto text-primary">
              Dedicated professionals bridging classical yogic wisdom with
              modern life through structured, mindful teaching.
            </p>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Teachers Grid */}
      {/* <section className="section-padding bg-gradient-to-br from-yellow-100 via-yellow-50 to-amber-100 text-foreground"> */}
      <section className="section-padding bg-white text-foreground">
        <div className="container-fluid mx-auto space-y-12">
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
                  <div className="sm-w-72 sm-h-88 md:w-1/3 md:h-96 flex justify-center md:justify-start">
                    <div className="w-full h-full rounded-2xl overflow-hidden">
                      <img
                        src={t.image}
                        alt={t.name}
                        className="w-full h-full object-cover object-top"
                      />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="w-full md:w-2/3 p-4 md:p-10 text-center md:text-left">
                    <div className="flex flex-col md:flex-row md:items-center md:gap-3 mb-2 justify-center md:justify-start">
                      <h3 className="font-serif text-2xl font-bold text-foreground">
                        {t.name}
                      </h3>
                      <span className="text-xs mb-2 font-bold uppercase tracking-wider text-primary bg-secondary px-3 py-1 rounded-full mt-2 md:mt-0">
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
                      {/* <div>
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
                      </div> */}
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
