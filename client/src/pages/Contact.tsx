import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, MapPin, Phone } from "lucide-react";

export default function Contact() {
  return (
    <div className="pt-20">
      <Section className="py-12 md:py-20">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-serif font-bold text-primary mb-4">Get in Touch</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Have questions about our programs or need guidance on which path is right for you? We are here to help.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start max-w-5xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-8">
            <Card className="border-none shadow-lg bg-primary text-primary-foreground">
              <CardContent className="p-8 space-y-6">
                <div className="flex items-start gap-4">
                  <MapPin className="w-6 h-6 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold text-lg mb-1">Our Studio</h3>
                    <p className="opacity-90">123 Yoga Street<br />Peaceful City, PC 12345</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <Mail className="w-6 h-6 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold text-lg mb-1">Email Us</h3>
                    <p className="opacity-90">contact@shadyuktha.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Phone className="w-6 h-6 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold text-lg mb-1">Call Us</h3>
                    <p className="opacity-90">+1 (555) 123-4567</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="bg-secondary/30 p-8 rounded-2xl">
              <h3 className="font-serif font-bold text-2xl text-primary mb-4">Class Hours</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex justify-between">
                  <span>Monday - Friday</span>
                  <span className="font-semibold">6:00 AM - 8:00 PM</span>
                </li>
                <li className="flex justify-between">
                  <span>Saturday</span>
                  <span className="font-semibold">7:00 AM - 6:00 PM</span>
                </li>
                <li className="flex justify-between">
                  <span>Sunday</span>
                  <span className="font-semibold">8:00 AM - 12:00 PM</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-8 rounded-2xl shadow-xl border border-border">
            <h2 className="text-2xl font-serif font-bold text-primary mb-6">Send a Message</h2>
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium">Name</label>
                  <Input id="name" placeholder="Your name" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">Email</label>
                  <Input id="email" type="email" placeholder="your@email.com" />
                </div>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-medium">Subject</label>
                <Input id="subject" placeholder="What is this regarding?" />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium">Message</label>
                <Textarea id="message" placeholder="How can we help you?" className="min-h-[150px]" />
              </div>

              <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-white font-semibold">
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </Section>
    </div>
  );
}
