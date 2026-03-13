import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import logo from "@/assets/shadyuktha_logo.jpg";
import { motion } from "framer-motion";
import { HashLink } from "react-router-hash-link";

interface NavbarProps {
  selectedPost?: any;
}

const programs = [
  {
    name: "YCB Level 1 – Yoga Protocol Instructor",
    path: "/programs/ycb-level-1",
  },
  {
    name: "YCB Level 2 – Yoga Wellness Instructor",
    path: "/programs/ycb-level-2",
  },
  {
    name: "YCB Level 3 – Yoga Teacher & Evaluator",
    path: "/programs/ycb-level-3",
  },
  { name: "Therapeutic Yoga", path: "/programs/therapeutic-yoga" },
  { name: "Ashtanga Primary Series", path: "/programs/ashtanga" },
  { name: "Pranayama, Mudras & Bandhas", path: "/programs/pranayama" },
  { name: "Kids Yoga: Glow & Grow", path: "/programs/kids-yoga" },
  { name: "Pre & Post Natal Yoga", path: "/programs/prenatal" },
  { name: "Mind-Body and Inner Clarity", path: "/programs/mind-body-clarity" },
  { name: "Beginner Level", path: "/programs/beginner-yoga" },
  { name: "Intermediate Level", path: "/programs/intermediate-yoga" },
  { name: "Advanced Level", path: "/programs/advanced-yoga" },
];

const Navbar: React.FC<NavbarProps> = ({ selectedPost }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [programsOpen, setProgramsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    setProgramsOpen(false);
  }, [location]);
  if (selectedPost) return null;

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace("#", "");
      const element = document.getElementById(id);

      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    }
  }, [location]);

  return (
    <motion.nav
      initial={{ y: 0 }}
      animate={{ y: selectedPost ? -120 : 0 }}
      transition={{ duration: 0.4, ease: "easeInOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/95 shadow-md"
          : "bg-background/0 backdrop-blur-sm"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center gap-3">
            <img
              src={logo}
              alt="Shadyuktha Yog"
              className="h-14 w-14 rounded-full object-cover"
            />
            <div>
              <span className="font-serif text-xl font-bold text-primary">
                Shadyuktha Yog
              </span>
              <p className="text-xs text-muted-foreground font-body">
                Where Breathe Meets Being
              </p>
            </div>
          </Link>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-8">
            <Link
              to="/home"
              className="text-md font-bold font-medium text-foreground hover:text-primary transition-colors"
            >
              Home
            </Link>
            <Link
              to="/aboutus"
              className="text-md font-bold font-medium text-foreground hover:text-primary transition-colors"
            >
              About Us
            </Link>

            {/* Programs dropdown */}
            <div className="relative group">
              <button
                className="flex items-center gap-1 text-md font-bold font-medium text-foreground hover:text-primary transition-colors"
                onMouseEnter={() => setProgramsOpen(true)}
                onMouseLeave={() => setProgramsOpen(false)}
              >
                Programs <ChevronDown className="w-4 h-4" />
              </button>
              <div
                className={`absolute top-full left-0 mt-2 w-72 bg-background rounded-lg shadow-xl border border-border py-2 transition-all duration-200 ${programsOpen ? "opacity-100 visible translate-y-0" : "opacity-0 invisible -translate-y-2"}`}
                onMouseEnter={() => setProgramsOpen(true)}
                onMouseLeave={() => setProgramsOpen(false)}
              >
                {programs.map((p) => (
                  <Link
                    key={p.path}
                    to={p.path}
                    className="block px-4 py-2.5 sm-text-md text-sm sm-font-bold text-foreground hover:bg-secondary hover:text-primary transition-colors"
                  >
                    {p.name}
                  </Link>
                ))}
              </div>
            </div>

            <Link
              to="/pricing"
              className="text-md font-bold font-medium text-foreground hover:text-primary transition-colors"
            >
              Pricing
            </Link>
            <Link
              to="/workshops"
              className="text-md font-bold font-medium text-foreground hover:text-primary transition-colors"
            >
              Workshops
            </Link>
            <Link
              to="/teachers"
              className="text-md font-bold font-medium text-foreground hover:text-primary transition-colors"
            >
              Teachers
            </Link>
            <Link
              to="/brochure"
              className="text-md font-bold font-medium text-foreground hover:text-primary transition-colors"
            >
              Brochure
            </Link>
            <Link
              to="/blogs"
              className="text-md font-bold font-medium text-foreground hover:text-primary transition-colors"
            >
              Blogs
            </Link>
            <Link
              to="/#testimonials"
              className="text-md text-foreground hover:text-primary transition-colors"
            >
              Testimonials
            </Link>
            {/* <Link
              to="/contact"
              className="text-md font-bold font-medium text-foreground hover:text-primary transition-colors"
            >
              Contact
            </Link> */}
            <a
              href="https://wa.me/917200448918?text=Hi%20Shadyuktha%20Yog,%20I%20would%20like%20to%20book%20a%20session!"
              target="_blank"
              rel="noopener noreferrer"
              className="gradient-green text-primary-foreground px-5 py-2.5 rounded-full text-md font-bold font-semibold hover:opacity-40 transition-opacity"
            >
              Join Now
            </a>
          </div>

          {/* Mobile hamburger */}
          <button className="lg:hidden p-2" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="lg:hidden pb-6 bg-shadow animate-fade-in backdrop-blur-md">
            <div className="flex flex-col  gap-1">
              <Link
                to="/"
                className="px-4 py-3 text-md font-bold  hover:bg-secondary rounded-lg"
              >
                Home
              </Link>
              <Link
                to="/aboutus"
                className="px-4 py-3 text-md font-bold  hover:bg-secondary rounded-lg"
              >
                About
              </Link>
              <button
                onClick={() => setProgramsOpen(!programsOpen)}
                className="flex items-center justify-between px-4 py-3 text-md font-bold  hover:bg-secondary rounded-lg w-full text-left"
              >
                Programs{" "}
                <ChevronDown
                  className={`w-4 h-4 transition-transform ${programsOpen ? "rotate-180" : ""}`}
                />
              </button>
              {programsOpen && (
                <div className="pl-6">
                  {programs.map((p) => (
                    <Link
                      key={p.path}
                      to={p.path}
                      className="block px-4 py-2 text-md font-bold text-foreground hover:text-primary"
                    >
                      {p.name}
                    </Link>
                  ))}
                </div>
              )}
              <Link
                to="/pricing"
                className="px-4 py-3 text-md font-bold  hover:bg-secondary rounded-lg"
              >
                Pricing
              </Link>
              <Link
                to="/workshops"
                className="px-4 py-3 text-md font-bold  hover:bg-secondary rounded-lg"
              >
                Workshops
              </Link>
              <Link
                to="/teachers"
                className="px-4 py-3 text-md font-bold  hover:bg-secondary rounded-lg"
              >
                Teachers
              </Link>
              <Link
                to="/brochure"
                className="px-4 py-3 text-md font-bold  hover:bg-secondary rounded-lg"
              >
                Brochure
              </Link>
              <Link
                to="/blogs"
                className="px-4 py-3 text-md font-bold  hover:bg-secondary rounded-lg"
              >
                Blogs
              </Link>
            <HashLink
  smooth
  to="/#testimonials"
  className="px-4 py-3 text-md font-bold hover:bg-secondary rounded-lg"
  onClick={() => setIsOpen(false)} // close mobile menu after click
>
  Testimonials
</HashLink>
              <Link
                to="/contact"
                className="px-4 py-3 text-md font-bold  hover:bg-secondary rounded-lg"
              >
                Contact
              </Link>
              <Link
                to="/contact"
                className="mx-4 mt-2 gradient-green text-primary-foreground px-5 py-2.5 rounded-full text-md font-bold font-semibold text-center"
              >
                Enroll Now
              </Link>
            </div>
          </div>
        )}
      </div>
    </motion.nav>
  );
};

export default Navbar;
