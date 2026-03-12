import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { AnimateOnScroll } from "./AnimateOnScroll";

const programs = [
  {
    title: "YCB Level 1 – Yoga Protocol Instructor",
    desc: "Foundation of teaching. 2-month YCB-certified course.",
    fee: "₹10,999",
    image: "https://shadyukthayoga.s3.ap-south-1.amazonaws.com/assets/pranayama-practice.jpg",
    path: "/programs/ycb-level-1",
  },
  {
    title: "YCB Level 2 – Yoga Wellness Instructor",
    desc: "Science of wellness. Intermediate-level structured professionals program.",
    fee: "₹12,999",
    image: "https://shadyukthayoga.s3.ap-south-1.amazonaws.com/assets/level2.png",
    path: "/programs/ycb-level-2",
  },
  {
    title: "YCB Level 3 – Yoga Teacher & Evaluator",
    desc: "Mastery of pedagogy. Advanced structured professionals programn.",
    fee: "₹14,999",
    image: "https://shadyukthayoga.s3.ap-south-1.amazonaws.com/assets/level3.png",
    path: "/programs/ycb-level-3",
  },
  {
    title: "Therapeutic Yoga",
    desc: "Evidence-based DPYT model for chronic conditions.",
    fee: "₹3,500/mo",
    image: "https://shadyukthayoga.s3.ap-south-1.amazonaws.com/assets/therapy-yoga.jpg",
    path: "/programs/therapeutic-yoga",
  },
  {
    title: "Ashtanga Primary Series",
    desc: "Dynamic vinyasa flow building strength & discipline.",
    fee: "₹3,500/mo",
    image: "https://shadyukthayoga.s3.ap-south-1.amazonaws.com/assets/ashtanga-yoga.jpg",
    path: "/programs/ashtanga",
  },
  {
    title: "Pranayama, Mudras & Bandhas",
    desc: "Master your energy through breath science.",
    fee: "₹3,500/mo",
    image:"https://shadyukthayoga.s3.ap-south-1.amazonaws.com/assets/pranayama.jpg",
    path: "/programs/pranayama",
  },
  {
    title: "Kids Yoga: Glow & Grow",
    desc: "Fun, focused yoga for children aged between 6-12.",
    fee: "₹1,000/mo",
    image: "https://shadyukthayoga.s3.ap-south-1.amazonaws.com/assets/kids-yoga.jpg",
    path: "/programs/kids-yoga",
  },
  {
    title: "Pre & Post Natal Yoga",
    desc: "Holistic maternity care for every trimester of your pregnancy journey.",
    fee: "Contact Us",
    image: "https://shadyukthayoga.s3.ap-south-1.amazonaws.com/assets/prenatal-yoga.jpg",
    path: "/programs/prenatal",
  },
  {
    title: "Mind-Body & Inner Clarity Program",
    desc: "Focus on mind relaxation and emotional alignment using guided techniques for clarity and inner peace.",
    fee: "Contact Us",
    image: "https://shadyukthayoga.s3.ap-south-1.amazonaws.com/assets/mindbody.png",
    path: "/programs/mind-body-clarity",
  },
];

const ProgramsSection = () => {
  return (
    <section id="programs" className="section-padding gradient-green-light">
      <div className=" mx-auto">
        <AnimateOnScroll className="text-center mb-14">
          <p className="text-sm font-semibold text-primary uppercase tracking-widest mb-2">
            Our Programs
          </p>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground">
            Elevate Your <span className="text-gradient-green">Practice</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            <span className="text-gradient-green">
              Grow as a Professional • Embrace Wellness
            </span>
          </p>
          <div className="decorative-line mx-auto mt-6" />
        </AnimateOnScroll>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
  {programs.map((prog, i) => (
    <AnimateOnScroll
      key={prog.path}
      animation="animate-fade-drift"
      delay={i * 100}
    >
      <div className="group  rounded-full overflow-hidden  hover-lift flex flex-col h-full">
        
        {/* Image */}
        <div className="aspect-[4/3] sm:aspect-[16/9] overflow-hidden">
          <img
            src={prog.image}
            alt={prog.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
        </div>

        {/* Content */}
        <div className="p-5 flex flex-col flex-grow">
          <div className="mb-4">
            <h3 className="font-serif flex justify-center text-center text-lg sm:text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
              {prog.title}
            </h3>
            <p className="text-sm flex justify-center text-center text-muted-foreground leading-relaxed p-3 line-clamp-3">
              {prog.desc}
            </p>
          </div>

          {/* Button pinned to bottom */}
          <div className="mt-auto flex justify-center sm-justify-center">
            <Link
              to={prog.path}
              className="px-5 py-2 bg-primary text-white text-sm font-semibold rounded-full hover:opacity-90 transition-opacity"
            >
              Know More
            </Link>
          </div>
        </div>

      </div>
    </AnimateOnScroll>
  ))}
</div>
      </div>
    </section>
  );
};

export default ProgramsSection;
