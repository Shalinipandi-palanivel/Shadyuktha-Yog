import { AnimateOnScroll } from "./AnimateOnScroll";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  { q: "What is Shadyuktha Yog?", a: "Shadyuktha Yog is a globally oriented online yoga education and therapy platform offering YCB-aligned courses, specialized therapeutic yoga programs, and in-depth studies of classical yogic texts. Each offering is designed to cultivate skilled, knowledgeable, and confident yoga professionals." },
  { q: "What YCB certifications do you offer?", a: "Shadyuktha Yog offers comprehensive training programs aligned with the Yoga Certification Board (YCB) standards for Level 1 (Yoga Protocol Instructor), Level 2 (Yoga Wellness Instructor), and Level 3 (Yoga Teacher & Evaluator). While the Ministry of AYUSH issues the official certifications, our programs fully prepare you to successfully earn them." },
  { q: "What is the DPYT model for Yoga Therapy?", a: "DPYT (Dual-Phase Yoga Therapy) is our pioneering approach that divides healing into Morning Management (self-practice) and Class Management (guided intervention), ensuring 24-hour therapeutic support and long-term self-reliance." },
  { q: "Are classes conducted online or offline?", a: "All classes are conducted via live online sessions. This allows practitioners from across the globe to join. Some workshops may be conducted on-site for corporate and college programs." },
  { q: "What age groups are accepted for Kids Yoga?", a: "Our Kids Yoga: Glow & Grow program is designed for children aged 6-12. Sessions are held on weekends (Saturday & Sunday) and include mindful movement, breathing exercises, and story-flow asanas." },
  { q: "Do I need prior yoga experience to enroll?", a: "All our programs are designed for learners of all levels — no prior experience is required. We offer level-based learning from Arambha Avastha (Beginner) to Uttama Avastha (Advanced), with instructors guiding you at your own pace." },
  { q: "What are the class timings?", a: "Our programs are designed to fit your lifestyle, with multiple daily slots available. Reach out to us to learn more about the timing options for each course." },
{ 
  q: "Do you offer only corporate and college workshops?", 
  a: "Our yoga workshops are designed for everyone — corporate teams, educational institutions, community groups, or any organization seeking to improve wellness and mindfulness. Each session is interactive, practical, and focuses on stress relief, team harmony, and holistic well-being." 
}];

const FAQSection = () => {
  return (
    <section id="faq" className="section-padding gradient-green-light">
      <div className="container mx-auto max-w-3xl">
        <AnimateOnScroll className="text-center mb-14">
          <p className="text-sm font-semibold text-primary uppercase tracking-widest mb-2">FAQs</p>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground">
            Frequently Asked <span className="text-gradient-green">Questions</span>
          </h2>
        </AnimateOnScroll>

        <AnimateOnScroll>
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, i) => (
              <AccordionItem key={i} value={`faq-${i}`} className="bg-card rounded-xl border border-border px-6 data-[state=open]:shadow-md transition-shadow">
                <AccordionTrigger className="font-serif text-lg font-semibold text-foreground hover:text-primary py-5 [&[data-state=open]>svg]:rotate-180">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-5">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </AnimateOnScroll>
      </div>
    </section>
  );
};

export default FAQSection;
