import { Link } from "wouter";

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-1">
            <h3 className="text-2xl font-serif font-bold mb-4 text-white">Shadyuktha Yog</h3>
            <p className="text-primary-foreground/80 leading-relaxed mb-6">
              A holistic journey of Sarira (Body), Prana (Breath), and Citta (Mind). 
              Integrating ancient wisdom with modern therapeutic practices.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold text-lg mb-4 text-white">Quick Links</h4>
            <ul className="space-y-3">
              <li><Link href="/" className="hover:text-accent transition-colors">Home</Link></li>
              <li><Link href="/sadhana" className="hover:text-accent transition-colors">Sadhana (Levels)</Link></li>
              <li><Link href="/therapy" className="hover:text-accent transition-colors">Therapy</Link></li>
              <li><Link href="/contact" className="hover:text-accent transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4 text-white">Programs</h4>
            <ul className="space-y-3">
              <li className="text-primary-foreground/80">Beginner Foundation</li>
              <li className="text-primary-foreground/80">Intermediate Flow</li>
              <li className="text-primary-foreground/80">Advanced Mastery</li>
              <li className="text-primary-foreground/80">Teacher Training</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4 text-white">Contact Us</h4>
            <address className="not-italic text-primary-foreground/80 space-y-3">
              <p>123 Yoga Street, Peaceful City</p>
              <p>Email: contact@shadyuktha.com</p>
              <p>Phone: +1 (555) 123-4567</p>
            </address>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-primary-foreground/60">
          <p>&copy; {new Date().getFullYear()} Shadyuktha Yog. All rights reserved.</p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <span className="hover:text-white cursor-pointer">Privacy Policy</span>
            <span className="hover:text-white cursor-pointer">Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
