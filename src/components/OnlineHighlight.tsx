import { AnimateOnScroll } from "./AnimateOnScroll";
import { Monitor, Building, GraduationCap } from "lucide-react";

const OnlineHighlight = () => {
  return (
    <section className="section-padding gradient-green text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="animate-marquee-up flex flex-col gap-8 whitespace-nowrap">
          {[...Array(6)].map((_, i) => (
            <span key={i} className="text-8xl font-serif font-bold opacity-20">
              ONLINE • GLOBAL • ACCESSIBLE •
            </span>
          ))}
        </div>
      </div>
      <div className="container mx-auto relative z-10">
        <AnimateOnScroll className="text-center max-w-4xl mx-auto">
          <p className="text-sm font-semibold uppercase tracking-widest opacity-80 mb-4 text-white">
            Important Notice
          </p>
          <h2 className="font-serif text-3xl md:text-5xl font-bold mb-6 text-white">
            All Courses Are Conducted{" "}
            <span className="underline decoration-4 underline-offset-4 text-white">
              Online
            </span>
          </h2>
          <p className="text-lg opacity-90 mb-10 leading-relaxed text-white">
            Shadyuktha Yog does not offer offline courses. All courses are conducted online via live interactive sessions. 
            Only workshops for corporate and college institutions are conducted offline.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
              <Monitor className="w-8 h-8 mx-auto mb-3 text-white" />
              <p className="font-serif text-lg font-bold text-white">Live Online Classes</p>
              <p className="text-sm opacity-80 mt-1 text-white">All regular courses & certifications</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
              <Building className="w-8 h-8 mx-auto mb-3 text-white" />
              <p className="font-serif text-lg font-bold text-white">Corporate Workshops</p>
              <p className="text-sm opacity-80 mt-1 text-white">Conducted offline at your premises</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
              <GraduationCap className="w-8 h-8 mx-auto mb-3 text-white" />
              <p className="font-serif text-lg font-bold text-white">College Programs</p>
              <p className="text-sm opacity-80 mt-1 text-white">On-campus offline workshops</p>
            </div>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
};

export default OnlineHighlight;