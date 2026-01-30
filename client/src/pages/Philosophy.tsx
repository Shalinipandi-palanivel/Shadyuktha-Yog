import { Section } from "@/components/ui/section";
import { motion } from "framer-motion";

export default function Philosophy() {
  return (
    <div className="pt-20">
      <Section className="py-20 text-center bg-secondary/30">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-6">Our Philosophy</h1>
          <div className="w-24 h-1 bg-accent mx-auto rounded-full mb-8" />
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            "Yoga Chitta Vritti Nirodha" — Yoga is the stilling of the fluctuations of the mind.
          </p>
        </motion.div>
      </Section>

      <Section>
        <div className="max-w-4xl mx-auto prose prose-lg prose-headings:font-serif prose-headings:text-primary prose-p:text-muted-foreground">
          <p>
            At Shadyuktha Yog, we honor the traditional lineage of yoga while making it accessible and relevant to modern life. We believe that yoga is not merely physical exercise, but a comprehensive system for self-transformation.
          </p>
          
          <h3>The Three Pillars</h3>
          <ul className="list-none pl-0 space-y-6">
            <li className="flex gap-4">
              <span className="text-accent font-bold text-xl">01.</span>
              <div>
                <strong className="text-foreground block text-lg">Sarira (Body)</strong>
                Through Asanas (postures) and diet, we purify the physical vessel, making it strong, flexible, and free from disease.
              </div>
            </li>
            <li className="flex gap-4">
              <span className="text-accent font-bold text-xl">02.</span>
              <div>
                <strong className="text-foreground block text-lg">Prana (Breath)</strong>
                Through Pranayama, we regulate the vital life force, calming the nervous system and energizing the mind.
              </div>
            </li>
            <li className="flex gap-4">
              <span className="text-accent font-bold text-xl">03.</span>
              <div>
                <strong className="text-foreground block text-lg">Citta (Mind)</strong>
                Through Dhyana (meditation) and study, we cultivate clarity, focus, and inner peace.
              </div>
            </li>
          </ul>

          <h3>Our Lineage</h3>
          <p>
            Our teachings are rooted in the classical texts of the Yoga Sutras of Patanjali and the Hatha Yoga Pradipika. We emphasize safety, alignment, and the therapeutic application of each practice.
          </p>
        </div>
      </Section>
    </div>
  );
}
