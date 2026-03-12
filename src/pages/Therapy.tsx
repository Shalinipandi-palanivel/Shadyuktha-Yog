import { Section } from "../components/ui/section";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { CheckCircle2, Leaf, HeartPulse, Brain } from "lucide-react";
import { motion } from "framer-motion";

export default function Therapy() {
  const conditions = [
    "Diabetes Management",
    "Thyroid Disorders",
    "Hypertension",
    "Back Pain & Sciatica",
    "Anxiety & Depression",
    "Digestive Disorders",
    "Arthritis",
    "PCOS/PCOD",
  ];

  return (
    <div className="pt-20">
      <Section background="muted" className="py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }}>
            <Badge className="mb-4 bg-accent text-white hover:bg-accent/90">Chikitsa</Badge>
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-6">
              Therapeutic Yoga & Disease Management
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
              We approach healing through the lens of individual constitution (Prakrti). By balancing the energies of the body, we facilitate natural healing and long-term wellness.
            </p>
          </motion.div>
          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}>
             {/* herbs medicine ayurveda */}
            <img 
              src="https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&q=80&w=800" 
              alt="Ayurvedic Healing" 
              className="rounded-2xl shadow-2xl"
            />
          </motion.div>
        </div>
      </Section>

      <Section>
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-serif font-bold text-primary mb-4">Conditions We Address</h2>
          <p className="text-muted-foreground">
            Our specialized programs combine asanas, pranayama, and dietary guidance tailored to specific health challenges.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {conditions.map((condition, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
              viewport={{ once: true }}
            >
              <Card className="hover:border-primary/50 transition-colors h-full flex flex-col justify-center items-center text-center p-4">
                <CheckCircle2 className="w-8 h-8 text-primary mb-3" />
                <span className="font-semibold text-lg">{condition}</span>
              </Card>
            </motion.div>
          ))}
        </div>
      </Section>

      <Section background="pattern">
        <div className="grid md:grid-cols-3 gap-8">
          <Card className="bg-white/80 backdrop-blur-sm border-none shadow-lg">
            <CardHeader>
              <Leaf className="w-10 h-10 text-primary mb-2" />
              <CardTitle>Natural Healing</CardTitle>
            </CardHeader>
            <CardContent>
              Non-invasive techniques that stimulate the body's innate ability to repair and rejuvenate itself.
            </CardContent>
          </Card>
          
          <Card className="bg-white/80 backdrop-blur-sm border-none shadow-lg">
            <CardHeader>
              <Brain className="w-10 h-10 text-accent mb-2" />
              <CardTitle>Mind-Body Connection</CardTitle>
            </CardHeader>
            <CardContent>
              Addressing the root psychosomatic causes of physical ailments through mindfulness and breathwork.
            </CardContent>
          </Card>

          <Card className="bg-white/80 backdrop-blur-sm border-none shadow-lg">
            <CardHeader>
              <HeartPulse className="w-10 h-10 text-primary mb-2" />
              <CardTitle>Customized Care</CardTitle>
            </CardHeader>
            <CardContent>
              Every body is unique. Our therapy sessions are tailored to your specific limitations and goals.
            </CardContent>
          </Card>
        </div>
      </Section>
    </div>
  );
}
