import { AnimateOnScroll } from "@/components/AnimateOnScroll";
import { Star } from "lucide-react";

const testimonials = [
  { name: "Priya Sharma", role: "YCB Level 2 Graduate", text: "Shadyuktha Yog transformed my understanding of yoga. The structured curriculum and Shalini's guidance made the YCB certification journey deeply rewarding. I now confidently teach yoga in my community.", rating: 5 },
  { name: "Rajesh Kumar", role: "Therapeutic Yoga Student", text: "After years of chronic back pain, the DPYT approach helped me manage my condition naturally. The personalized attention from the therapist was unmatched. I feel a decade younger.", rating: 5 },
  { name: "Ananya Patel", role: "Ashtanga Practitioner", text: "The Ashtanga Primary Series sessions are intense yet mindful. I've gained incredible strength and mental clarity in just 3 months. The alignment corrections are spot on.", rating: 5 },
  { name: "Meera Devi", role: "Prenatal Yoga Student", text: "The prenatal yoga sessions were exactly what I needed during my pregnancy. Safe, nurturing, and deeply calming for both me and my baby. Highly recommended for all expecting mothers.", rating: 5 },
  { name: "Arjun Nair", role: "Corporate Workshop Attendee", text: "Our team productivity increased noticeably after the corporate yoga workshops. A unique and valuable wellness initiative that everyone loved.", rating: 5 },
  { name: "Kavitha Rangan", role: "Parent – Kids Yoga", text: "My daughter loves the Glow & Grow program! She's more focused at school, sleeps better, and looks forward to every session. Thank you Shalini!", rating: 5 },
  { name: "Dr. Suresh Menon", role: "YCB Level 3 Graduate", text: "The depth of philosophical knowledge combined with practical teaching methodology makes this program exceptional. I'm now equipped to train other yoga teachers.", rating: 5 },
  { name: "Lakshmi Iyer", role: "Pranayama Student", text: "The pranayama and mudra sessions opened a whole new dimension of practice for me. My anxiety has significantly reduced and I sleep much better now.", rating: 5 },
];

const TestimonialsPage = () => {
  return (
    <main className="pt-20">
      <section className="section-padding gradient-green-light">
        <div className="container mx-auto">
          <AnimateOnScroll className="text-center mb-14">
            <p className="text-sm font-semibold text-primary uppercase tracking-widest mb-2">Testimonials</p>
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground">
              Stories of <span className="text-gradient-green">Transformation</span>
            </h1>
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
              Hear from our students and practitioners about their journey with Shadyuktha Yog.
            </p>
          </AnimateOnScroll>

          {/* Written testimonials */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {testimonials.map((t, i) => (
              <AnimateOnScroll key={i} animation="animate-fade-in-up" delay={i * 100}>
                <div className="bg-card rounded-2xl p-6 border border-border hover-lift h-full flex flex-col">
                  <div className="flex gap-1 mb-3">
                    {Array.from({ length: t.rating }).map((_, j) => (
                      <Star key={j} className="w-4 h-4 fill-yoga-gold text-yoga-gold" />
                    ))}
                  </div>
                  <p className="text-foreground leading-relaxed mb-4 italic flex-1">"{t.text}"</p>
                  <div className="border-t border-border pt-4">
                    <p className="font-serif font-bold text-foreground">{t.name}</p>
                    <p className="text-sm text-muted-foreground">{t.role}</p>
                  </div>
                </div>
              </AnimateOnScroll>
            ))}
          </div>

          {/* Video testimonials */}
          <AnimateOnScroll>
            <h2 className="font-serif text-3xl font-bold text-center text-foreground mb-8">Video Testimonials</h2>
          </AnimateOnScroll>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "Priya's YCB Certification Journey",
              "Rajesh's Back Pain Recovery",
              "Corporate Wellness Success Story",
              "Kids Yoga: A Parent's Perspective",
              "From IT to Yoga: Shalini's Story",
              "Therapeutic Yoga Healing"
            ].map((title, i) => (
              <AnimateOnScroll key={i} animation="animate-scale-in" delay={i * 100}>
                <div className="bg-card rounded-2xl overflow-hidden border border-border hover-lift">
                  <div className="aspect-video bg-secondary flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-16 h-16 rounded-full gradient-green flex items-center justify-center mx-auto mb-3 animate-float">
                        <svg className="w-6 h-6 text-primary-foreground ml-1" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
                      </div>
                      <p className="text-sm text-muted-foreground">Video coming soon</p>
                    </div>
                  </div>
                  <div className="p-4">
                    <p className="font-serif font-semibold text-foreground">{title}</p>
                  </div>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default TestimonialsPage;
