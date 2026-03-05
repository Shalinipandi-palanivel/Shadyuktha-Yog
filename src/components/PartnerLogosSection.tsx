import { AnimateOnScroll } from "./AnimateOnScroll";
import { Award, Calendar } from "lucide-react";

const partners = [
  { name: "Ministry of AYUSH", abbr: "AYUSH" },
  { name: "Yoga Certification Board", abbr: "YCB" },
  { name: "International Yoga Federation", abbr: "IYF" },
  { name: "Morarji Desai National Institute of Yoga", abbr: "MDNIY" },
  { name: "National Board of Examinations", abbr: "NBE" },
  { name: "Indian Yoga Association", abbr: "IYA" },
];

const PartnerLogosSection = () => {
  return (
    <section className="py-12 bg-gradient-to-r from-secondary/40 via-background to-secondary/40 border-y border-border">
      <div className="container mx-auto">
     
        <AnimateOnScroll className="text-center mb-8">
          <p className="text-sm font-semibold text-primary uppercase tracking-widest">
            Affiliated & Recognized By
          </p>
        </AnimateOnScroll>

        <div className="overflow-hidden">
          <div className="animate-marquee-left flex gap-12 items-center whitespace-nowrap">
            {[...Array(2)].map((_, setIdx) => (
              <div key={setIdx} className="flex gap-12 items-center">
                {partners.map((p) => (
                  <div
                    key={`${setIdx}-${p.abbr}`}
                    className="bg-card border border-border rounded-xl px-8 py-4 flex items-center justify-center min-w-[180px] hover-lift"
                  >
                    <div className="text-center">
                      <p className="font-serif text-xl font-bold text-primary">
                        {p.abbr}
                      </p>
                      <p className="text-xs text-muted-foreground mt-1">
                        {p.name}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnerLogosSection;
