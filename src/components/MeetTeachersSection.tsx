import { Link } from "react-router-dom";
import { AnimateOnScroll } from "./AnimateOnScroll";
import { ArrowRight } from "lucide-react";

const teachers = [
  {
    name: "Shalinipandi",
    role: "Founder-Director",
    specialization: "Hatha Yoga, Ashtanga, YCB Training",
    image:"https://shadyukthayoga.s3.ap-south-1.amazonaws.com/assets/shalini.png",
  },
  {
    name: "Brindha",
    role: "Therapeutic Yoga Lead",
    specialization: "Inner Clarity Program, Psychotherapy",
    image: "https://shadyukthayoga.s3.ap-south-1.amazonaws.com/assets/Brindha.png",
  },
  // { name: "Arvind Sharma", role: "Ashtanga & Pranayama", specialization: "Ashtanga Series, Pranayama Mastery", image: logo },
  // { name: "Priya Nair", role: "Kids & Prenatal Yoga", specialization: "Children's Yoga, Maternity Wellness", image: logo },
];

const MeetTeachersSection = () => {
  return (
    <section className="section-padding bg-gradient-to-br from-background via-secondary/20 to-background">
      <div className="container mx-auto">
        <AnimateOnScroll className="text-center mb-14">
          <p className="text-sm font-semibold text-primary uppercase tracking-widest mb-2">
            Our Faculty
          </p>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground">
            Meet the <span className="text-gradient-green">Teachers</span>
          </h2>
        </AnimateOnScroll>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-2 gap-4 max-w-5xl mx-auto mb-10">
          {teachers.map((t, i) => (
            <AnimateOnScroll
              key={t.name}
              animation="animate-scale-in"
              delay={i * 100}
            >
              <div className="flex flex-col items-center text-center hover:translate-y-1 transition-transform duration-300">
                {/* Circular Image */}
                <div className="w-54 h-24 md:w-52 md:h-52 rounded-full overflow-hidden border-2 border-primary/20 shadow-lg mb-4">
                  <img
                    src={t.image}
                    alt={t.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Name */}
                <h3 className="font-serif text-lg md:text-xl font-bold text-foreground">
                  {t.name}
                </h3>

                {/* Role */}
                <p className="text-sm md:text-base text-primary font-semibold">
                  {t.role}
                </p>

                {/* Specialization */}
                <p className="text-xs md:text-sm text-muted-foreground mt-1">
                  {t.specialization}
                </p>
              </div>
            </AnimateOnScroll>
          ))}
        </div>

        {/* <div className="text-center">
          <Link
            to="/teachers"
            className="gradient-green text-primary-foreground px-8 py-3 rounded-full font-semibold inline-flex items-center gap-2 hover:opacity-90 transition-opacity"
          >
            View All Teachers <ArrowRight className="w-5 h-5" />
          </Link>
        </div> */}
      </div>
    </section>
  );
};

export default MeetTeachersSection;
