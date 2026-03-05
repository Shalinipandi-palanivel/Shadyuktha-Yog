import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Instagram, Youtube, Facebook } from "lucide-react";
import logo from "@/assets/shadyuktha_logo.jpg";

const Footer = () => {
  return (
    <footer className="bg-foreground text-primary-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img src={logo} alt="Shadyuktha Yog" className="h-12 w-12 rounded-full object-cover" />
              <div>
                <h3 className="font-serif text-xl font-bold">Shadyuktha Yog</h3>
                <p className="text-xs opacity-70">Where Breathe Meets Being</p>
              </div>
            </div>
            <p className="text-sm opacity-80 leading-relaxed">
              Redefining self-discovery through traditional Yoga Sastra, modern therapeutic principles, and scientific understanding.
            </p>
          </div>

          {/* Programs */}
          <div>
            <h4 className="font-serif text-lg font-semibold mb-4">Programs</h4>
            <div className="flex flex-col gap-2">
              <Link to="/programs/ycb-level-1" className="text-sm opacity-80 hover:opacity-100 transition-opacity">YCB Level 1 – Yoga Protocol Instructor</Link>
              <Link to="/programs/ycb-level-2" className="text-sm opacity-80 hover:opacity-100 transition-opacity">YCB Level 2 – Yoga Wellness Instructor</Link>
              <Link to="/programs/ycb-level-3" className="text-sm opacity-80 hover:opacity-100 transition-opacity">YCB Level 3 – Teacher & Evaluator</Link>
              <Link to="/programs/therapeutic-yoga" className="text-sm opacity-80 hover:opacity-100 transition-opacity">Therapeutic Yoga</Link>
              <Link to="/programs/ashtanga" className="text-sm opacity-80 hover:opacity-100 transition-opacity">Ashtanga Primary Series</Link>
              <Link to="/programs/pranayama" className="text-sm opacity-80 hover:opacity-100 transition-opacity">Pranayama & Mudras</Link>
              <Link to="/programs/kids-yoga" className="text-sm opacity-80 hover:opacity-100 transition-opacity">Kids Yoga</Link>
              <Link to="/programs/prenatal" className="text-sm opacity-80 hover:opacity-100 transition-opacity">Pre & Post Natal Yoga</Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-lg font-semibold mb-4">Quick Links</h4>
            <div className="flex flex-col gap-2">
              <Link to="/" className="text-sm opacity-80 hover:opacity-100 transition-opacity">Home</Link>
              <Link to="/#about" className="text-sm opacity-80 hover:opacity-100 transition-opacity">About Us</Link>
              <Link to="/workshops" className="text-sm opacity-80 hover:opacity-100 transition-opacity">Workshops</Link>
              <Link to="/blogs" className="text-sm opacity-80 hover:opacity-100 transition-opacity">Blogs</Link>
              <Link to="/testimonials" className="text-sm opacity-80 hover:opacity-100 transition-opacity">Testimonials</Link>
              <Link to="/#faq" className="text-sm opacity-80 hover:opacity-100 transition-opacity">FAQs</Link>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-serif text-lg font-semibold mb-4">Contact Us</h4>
            <div className="flex flex-col gap-3">
              <a href="mailto:info@shadyukthayog.com" className="flex items-center gap-2 text-sm opacity-80 hover:opacity-100">
                <Mail className="w-4 h-4" /> info@shadyukthayog.com
              </a>
              <a href="tel:+919876543210" className="flex items-center gap-2 text-sm opacity-80 hover:opacity-100">
                <Phone className="w-4 h-4" /> +91 98765 43210
              </a>
              <p className="flex items-start gap-2 text-sm opacity-80">
                <MapPin className="w-4 h-4 mt-0.5 shrink-0" /> Online Platform – Global Access
              </p>
              <div className="flex gap-4 mt-2">
                <a href="#" className="opacity-80 hover:opacity-100 transition-opacity"><Instagram className="w-5 h-5" /></a>
                <a href="#" className="opacity-80 hover:opacity-100 transition-opacity"><Youtube className="w-5 h-5" /></a>
                <a href="#" className="opacity-80 hover:opacity-100 transition-opacity"><Facebook className="w-5 h-5" /></a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-12 pt-8 text-center">
          <p className="text-sm opacity-60">© {new Date().getFullYear()} Shadyuktha Yog. All rights reserved. | @ShadyukthaYog</p>
          <p className="text-xs opacity-40 mt-2">"Start your journey today. Move from the periphery of movement to the centre of being."</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
