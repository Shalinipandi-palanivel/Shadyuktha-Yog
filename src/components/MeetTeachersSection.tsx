import { Link } from "react-router-dom";
import { AnimateOnScroll } from "./AnimateOnScroll";
import { ArrowRight } from "lucide-react";
import logo from "@/assets/shadyuktha_logo.jpg";

const teachers = [
  { name: "Shalinipandi", role: "Founder-Director", specialization: "Hatha Yoga, Ashtanga, YCB Training", image: logo },
  { name: "Brindha", role: "Therapeutic Yoga Lead", specialization: "DPYT, Yoga Chikitsa, Anatomy", image: logo },
  { name: "Arvind Sharma", role: "Ashtanga & Pranayama", specialization: "Ashtanga Series, Pranayama Mastery", image: logo },
  { name: "Priya Nair", role: "Kids & Prenatal Yoga", specialization: "Children's Yoga, Maternity Wellness", image: logo },
];

const MeetTeachersSection = () => {
  return (
    <section className="section-padding bg-gradient-to-br from-background via-secondary/20 to-background">
      <div className="container mx-auto">
        <AnimateOnScroll className="text-center mb-14">
          <p className="text-sm font-semibold text-primary uppercase tracking-widest mb-2">Our Faculty</p>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground">
            Meet the <span className="text-gradient-green">Teachers</span>
          </h2>
        </AnimateOnScroll>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto mb-10">
          {teachers.map((t, i) => (
            <AnimateOnScroll key={t.name} animation="animate-scale-in" delay={i * 100}>
              <div className="text-center hover-lift">
                <div className="aspect-square rounded-full overflow-hidden border-2 border-primary/20 shadow-lg mb-4">
                  <img src={t.image} alt={t.name} className="w-full h-full object-cover" />
                </div>
                <h3 className="font-serif text-lg font-bold text-foreground">{t.name}</h3>
                <p className="text-sm text-primary font-semibold">{t.role}</p>
                <p className="text-xs text-muted-foreground mt-1">{t.specialization}</p>
              </div>
            </AnimateOnScroll>
          ))}
        </div>

        <div className="text-center">
          <Link to="/teachers" className="gradient-green text-primary-foreground px-8 py-3 rounded-full font-semibold inline-flex items-center gap-2 hover:opacity-90 transition-opacity">
            View All Teachers <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default MeetTeachersSection;
