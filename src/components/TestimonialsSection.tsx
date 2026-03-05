import { AnimateOnScroll } from "./AnimateOnScroll";
import { Star } from "lucide-react";

const testimonials = [
  { name: "Priya Sharma", role: "YCB Level 2 Graduate", text: "Shadyuktha Yog transformed my understanding of yoga. The structured curriculum and Shalini's guidance made the YCB certification journey deeply rewarding.", rating: 5 },
  { name: "Rajesh Kumar", role: "Therapeutic Yoga Student", text: "After years of chronic back pain, the DPYT approach helped me manage my condition naturally. The personalized attention is unmatched.", rating: 5 },
  { name: "Ananya Patel", role: "Ashtanga Practitioner", text: "The Ashtanga Primary Series sessions are intense yet mindful. I've gained incredible strength and mental clarity in just 3 months.", rating: 5 },
  { name: "Meera Devi", role: "Prenatal Yoga Student", text: "The prenatal yoga sessions were exactly what I needed during my pregnancy. Safe, nurturing, and deeply calming for both me and my baby.", rating: 5 },
  { name: "Arjun Nair", role: "Corporate Workshop Attendee", text: "Our team productivity increased noticeably after the corporate yoga workshops. A unique and valuable wellness initiative.", rating: 5 },
  { name: "Kavitha Rangan", role: "Parent – Kids Yoga", text: "My daughter loves the Glow & Grow program! She's more focused at school and looks forward to every session.", rating: 5 },
];

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="section-padding bg-background">
      <div className="container mx-auto">
        <AnimateOnScroll className="text-center mb-14">
          <p className="text-sm font-semibold text-primary uppercase tracking-widest mb-2">Testimonials</p>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground">
            What Our <span className="text-gradient-green">Students Say</span>
          </h2>
        </AnimateOnScroll>

        {/* Horizontal marquee of testimonials */}
        <div className="overflow-hidden">
          <div className="animate-marquee-left flex gap-6" style={{ width: "200%" }}>
            {[...testimonials, ...testimonials].map((t, i) => (
              <div key={i} className="flex-shrink-0 w-80 bg-secondary rounded-2xl p-6 border border-border">
                <div className="flex gap-1 mb-3">
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <Star key={j} className="w-4 h-4 fill-yoga-gold text-yoga-gold" />
                  ))}
                </div>
                <p className="text-sm text-foreground leading-relaxed mb-4 italic">"{t.text}"</p>
                <div>
                  <p className="font-serif font-bold text-foreground">{t.name}</p>
                  <p className="text-xs text-muted-foreground">{t.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Video testimonials placeholder */}
        <AnimateOnScroll className="mt-14">
          <h3 className="font-serif text-2xl font-bold text-center text-foreground mb-8">Video Testimonials</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {["Priya's YCB Journey", "Rajesh's Healing Story", "Corporate Wellness Impact"].map((title, i) => (
              <div key={i} className="bg-secondary rounded-2xl overflow-hidden border border-border">
                <div className="aspect-video bg-foreground/5 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-16 h-16 rounded-full gradient-green flex items-center justify-center mx-auto mb-3">
                      <svg className="w-6 h-6 text-primary-foreground ml-1" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
                    </div>
                    <p className="text-sm text-muted-foreground">Video coming soon</p>
                  </div>
                </div>
                <div className="p-4">
                  <p className="font-serif font-semibold text-foreground">{title}</p>
                </div>
              </div>
            ))}
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
};

export default TestimonialsSection;
