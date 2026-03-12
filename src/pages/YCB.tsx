import { Link } from "react-router-dom";
import {
  ArrowRight,
  Award,
  Heart,
  Flame,
  Wind,
  Baby,
  Stethoscope,
  GraduationCap,
  Sparkles,
} from "lucide-react";
import { AnimateOnScroll } from "../components/AnimateOnScroll";
import level1 from "@/assets/YCB-Level-1.jpg";
import level2 from "@/assets/YCB-_Level-2.jpg";
import level3 from "@/assets/YCB_Level-3.jpg";

const programs = [
  {
    title: "YCB Level 1 – Yoga Protocol Instructor",
    desc: "Foundation of teaching. 200-hour YCB-certified course recognized by Ministry of AYUSH.",
    fee: "₹10,999",
    image: "https://shadyukthayoga.s3.ap-south-1.amazonaws.com/assets/YCB-Level-1.jpg",
    path: "/programs/ycb-level-1",
    icon: GraduationCap,
    tag: "Govt. Certified",
  },
  {
    title: "YCB Level 2 – Yoga Wellness Instructor",
    desc: "Science of wellness. 400-hour intermediate-level structured program.",
    fee: "₹12,999",
    image: "https://shadyukthayoga.s3.ap-south-1.amazonaws.com/assets/YCB-_Level-2.jpg",
    path: "/programs/ycb-level-2",
    icon: Award,
    tag: "Govt. Certified",
  },
  {
    title: "YCB Level 3 – Yoga Teacher & Evaluator",
    desc: "Mastery of pedagogy. 800-hour advanced professional certification.",
    fee: "₹14,999",
    image: "https://shadyukthayoga.s3.ap-south-1.amazonaws.com/assets/YCB_Level-3.jpg",
    path: "/programs/ycb-level-3",
    icon: Sparkles,
    tag: "Govt. Certified",
  },

];

const YCB = () => {
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

        {/* Alternating program cards */}
        <div className="space-y-12">
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
                  className={`flex flex-col ${
                    isEven ? "lg:flex-row" : "lg:flex-row-reverse"
                  } gap-8 items-center rounded-3xl overflow-hidden `}
                >
                  {/* Image */}
                  <div className="lg:w-2/5 w-full flex justify-center">
                    {" "}
                    {/* center the smaller image */}
                    <div className="overflow-hidden rounded-3xl max-w-[280px]">
                      {" "}
                      {/* cap the width */}
                      <img
                        src={prog.image}
                        alt={prog.title}
                        className="w-full h-auto object-cover hover:scale-105 transition-transform duration-700"
                      />
                    </div>
                  </div>

                  {/* Content */}
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
                      {/* <span className="font-serif text-2xl font-bold text-primary">
                        {prog.fee}
                      </span> */}
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
        </div>
      </div>
      <AnimateOnScroll animation="animate-scale-in" className="mt-20">
        <div className="max-w-3xl mx-auto text-center gradient-green text-white rounded-3xl p-10 shadow-xl">
          <div className="font-serif text-3xl md:text-4xl font-bold mb-4">
            Ready to Transform Your Practice?
          </div>
          <div className="opacity-90 leading-relaxed text-lg italic mb-6">
            Take your yoga journey to the next level as a yoga teacher with a holistic blend of
            traditional Yoga Sastra and modern therapeutic principles.
          </div>
          <Link
            to="/contact"
            className="inline-block px-8 py-3 bg-primary-foreground  text-black font-semibold rounded-full shadow-md hover:scale-105 transition-transform"
          >
           Enquire Now
          </Link>
        </div>
      </AnimateOnScroll>
    </section>
  );
};

export default YCB;
