import { Link } from "react-router-dom";
import {
  Mail,
  Phone,
  MapPin,
  Instagram,
  Youtube,
  Facebook,
} from "lucide-react";
import logo from "@/assets/shadyuktha_logo.jpg";

const Footer = () => {
  return (
    <footer className="bg-foreground text-primary-foreground relative">
      <div className="container mx-auto px-6 py-4 flex flex-col gap-12">
        {/* Main Row */}
        <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-8">
          {/* Left: Brand */}
          <div className="flex flex-col gap-4 md:w-1/4 text-center md:text-left mx-auto md:mx-0">
            <div className="flex flex-col md:flex-row items-center md:items-start gap-3 justify-center md:justify-start">
              <img
                src={logo}
                alt="Shadyuktha Yog"
                className="h-24 w-24 rounded-full object-cover"
              />
             
            </div>
            <p className="text-sm opacity-80 text-white leading-relaxed">
              Redefining self-discovery through traditional Yoga Sastra, modern
              therapeutic principles, and scientific understanding.
            </p>
          </div>

          {/* Center: Programs & Quick Links */}
          <div className="flex flex-col md:flex-row md:gap-12 md:w-1/2 justify-center">
            <div>
              <h4 className="font-serif text-lg font-semibold mb-4 text-center md:text-left">
                Quick Links
              </h4>
              <ul className="flex flex-col gap-2 text-sm opacity-80 text-center md:text-left">
                <li>
                  <Link to="/" className="hover:opacity-100">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/aboutus" className="hover:opacity-100">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link to="/allprograms" className="hover:opacity-100">
                    Programs
                  </Link>
                </li>
                <li>
                  <Link to="/workshops" className="hover:opacity-100">
                    Workshops
                  </Link>
                </li>
                <li>
                  <Link to="/blogs" className="hover:opacity-100">
                    Blogs
                  </Link>
                </li>
                <li>
                  <Link to="/testimonials" className="hover:opacity-100">
                    Testimonials
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Right: Contact */}

          <div className="flex flex-col gap-4 md:w-1/4 text-left md:text-left text-center md:text-left mx-auto md:mx-0">
            <h4 className="font-serif text-lg font-semibold mb-4">Contact</h4>
            <ul className="flex flex-col gap-2 text-sm opacity-80">
              <li className="flex items-center justify-center md:justify-start gap-2">
                <Mail className="w-4 h-4" /> info@shadyukthayog.com
              </li>
              <li className="flex items-center justify-center md:justify-start gap-2">
                <Phone className="w-4 h-4" /> +91 98765 43210
              </li>
              <li className="flex items-start justify-center md:justify-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5" /> Online Platform – Global
                Access
              </li>
            </ul>

            {/* Social Media Icons directly below Contact */}
            <div className="flex gap-4 mt-4 justify-center md:justify-start">
              <a
                href="https://www.instagram.com/shadyuktha_yog?igsh=MTV6eXNvZzE1NGQ2dw=="
                className="hover:opacity-100 opacity-80"
              >
                <Instagram className="w-6 h-6" />
              </a>
              <a href="#" className="hover:opacity-100 opacity-80">
                <Youtube className="w-6 h-6" />
              </a>
              <a href="#" className="hover:opacity-100 opacity-80">
                <Facebook className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Row */}
        <div className="border-t border-primary-foreground/20 pt-6 text-center flex flex-col gap-1">
          <p className="text-sm text-white opacity-90">
            © {new Date().getFullYear()} Shadyuktha Yog. All rights reserved.
          </p>
          <p className="text-sm text-white opacity-90 italic">
            "Start your journey today. Move from the periphery of movement to
            the centre of being."
          </p>
        </div>
      </div>

      {/* Social Media Bar at the very bottom */}
    </footer>
  );
};

export default Footer;
