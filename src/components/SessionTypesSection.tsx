import { Link } from "react-router-dom";
import { AnimateOnScroll } from "./AnimateOnScroll";
import { Users, User, ArrowRight } from "lucide-react";

const SessionTypesSection = () => {
  return (
    <section className="section-padding bg-gradient-to-br from-secondary/50 via-background to-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <AnimateOnScroll className="text-center mb-14">
          <p className="text-sm font-semibold text-primary uppercase tracking-widest mb-2">Session Types</p>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground">
            Choose Your <span className="text-gradient-green">Session</span>
          </h2>
        </AnimateOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <AnimateOnScroll animation="animate-slide-in-left">
            <div className="bg-card rounded-3xl border-2 border-primary/20 p-10 text-center hover-lift h-full">
              <div className="w-20 h-20 gradient-green rounded-full mx-auto mb-6 flex items-center justify-center">
                <Users className="w-10 h-10 text-primary-foreground" />
              </div>
              <h3 className="font-serif text-2xl font-bold text-foreground mb-3">Group Sessions</h3>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                Learn in a supportive community environment with batches limited to 12 participants. 
                Real-time corrections, peer motivation, and structured progression.
              </p>
              <ul className="text-sm text-muted-foreground space-y-2 mb-6 text-left max-w-xs mx-auto">
                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-primary" /> Max 12 per batch</li>
                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-primary" /> Multiple time slots (IST)</li>
                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-primary" /> Level-based grouping</li>
              </ul>
              <Link to="/pricing" className="gradient-green text-primary-foreground px-6 py-2.5 rounded-full text-sm font-semibold inline-flex items-center gap-2 hover:opacity-90 transition-opacity">
                View More <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll animation="animate-slide-in-right">
            <div className="bg-card rounded-3xl border-2 border-primary/20 p-10 text-center hover-lift h-full">
              <div className="w-20 h-20 gradient-green rounded-full mx-auto mb-6 flex items-center justify-center">
                <User className="w-10 h-10 text-primary-foreground" />
              </div>
              <h3 className="font-serif text-2xl font-bold text-foreground mb-3">One-to-One Sessions</h3>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                Personalized attention for therapeutic needs, advanced practice, or individual goals.
                Customized curriculum with exclusive scheduling.
              </p>
              <ul className="text-sm text-muted-foreground space-y-2 mb-6 text-left max-w-xs mx-auto">
                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-primary" /> Exclusive 1-on-1 guidance</li>
                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-primary" /> Tailored to your needs</li>
                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-primary" /> Flexible scheduling</li>
              </ul>
              <Link to="/pricing" className="gradient-green text-primary-foreground px-6 py-2.5 rounded-full text-sm font-semibold inline-flex items-center gap-2 hover:opacity-90 transition-opacity">
                View More <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
};

export default SessionTypesSection;
