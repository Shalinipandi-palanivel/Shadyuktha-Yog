import { Link, useLocation } from "wouter";
import { useAuth } from "@/hooks/use-auth";
import { Button } from "@/components/ui/button";
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuTrigger 
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Menu, X, User, LogOut, LayoutDashboard } from "lucide-react";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [location] = useLocation();
  const { user, isAuthenticated, logout } = useAuth();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/sadhana", label: "Sadhana" },
    { href: "/therapy", label: "Therapy" },
    { href: "/philosophy", label: "Philosophy" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <nav 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled 
          ? "bg-white/90 backdrop-blur-md shadow-md py-3" 
          : "bg-transparent py-5"
      )}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group cursor-pointer">
          {/* Lotus Icon Placeholder */}
          <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors">
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              className="w-6 h-6"
            >
              <path d="M12 2.5a.5.5 0 0 1 .5.5c0 1.5-1.5 3.5-3.5 3.5S5 4 5 4a6 6 0 0 0 0 12h14a6 6 0 0 0 0-12s-4 2.5-4 2.5-3.5-2-3.5-3.5a.5.5 0 0 1 .5-.5Z"/>
              <path d="M12 16.5V22"/>
            </svg>
          </div>
          <span className={cn(
            "text-2xl font-bold font-serif tracking-tight text-primary transition-colors",
            !scrolled && location === "/" ? "md:text-white md:drop-shadow-sm" : "text-primary"
          )}>
            Shadyuktha Yog
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link 
              key={link.href} 
              href={link.href}
              className={cn(
                "text-sm font-medium transition-colors hover:text-accent",
                !scrolled && location === "/" ? "text-white/90 hover:text-white" : "text-foreground",
                location === link.href && "text-accent font-semibold"
              )}
            >
              {link.label}
            </Link>
          ))}
          
          {isAuthenticated ? (
            <DropdownMenu>
              <DropdownMenuTrigger className="focus:outline-none">
                <Avatar className="h-9 w-9 border-2 border-primary/20 hover:border-primary transition-colors cursor-pointer">
                  <AvatarImage src={user?.profileImageUrl || undefined} />
                  <AvatarFallback className="bg-primary/10 text-primary">
                    {user?.firstName?.[0] || <User className="h-4 w-4" />}
                  </AvatarFallback>
                </Avatar>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56 mt-2">
                <div className="flex items-center justify-start gap-2 p-2">
                  <div className="flex flex-col space-y-1 leading-none">
                    {user?.firstName && <p className="font-medium">{user.firstName} {user.lastName}</p>}
                    {user?.email && <p className="w-[200px] truncate text-xs text-muted-foreground">{user.email}</p>}
                  </div>
                </div>
                <div className="h-px bg-border my-1" />
                <DropdownMenuItem asChild>
                  <Link href="/dashboard" className="cursor-pointer w-full flex items-center">
                    <LayoutDashboard className="mr-2 h-4 w-4" />
                    <span>Dashboard</span>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => logout()} className="text-destructive focus:text-destructive cursor-pointer">
                  <LogOut className="mr-2 h-4 w-4" />
                  <span>Log out</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <Button 
              onClick={() => window.location.href = '/api/login'}
              variant={!scrolled && location === "/" ? "secondary" : "default"}
              size="sm"
              className="font-semibold px-6 shadow-lg hover:shadow-xl transition-all hover:-translate-y-0.5"
            >
              Join / Login
            </Button>
          )}
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden p-2 text-foreground"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X /> : <Menu className={!scrolled && location === "/" ? "text-white" : "text-primary"} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden bg-background border-t border-border absolute top-full left-0 right-0 p-4 shadow-xl animate-in slide-in-from-top-5">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link 
                key={link.href} 
                href={link.href} 
                onClick={() => setIsOpen(false)}
                className={cn(
                  "px-4 py-3 rounded-md hover:bg-muted transition-colors font-medium",
                  location === link.href ? "bg-primary/10 text-primary" : "text-foreground"
                )}
              >
                {link.label}
              </Link>
            ))}
            <div className="h-px bg-border my-2" />
            {isAuthenticated ? (
              <>
                <Link href="/dashboard" onClick={() => setIsOpen(false)}>
                  <Button variant="outline" className="w-full justify-start gap-2 mb-2">
                    <LayoutDashboard className="h-4 w-4" /> Dashboard
                  </Button>
                </Link>
                <Button variant="destructive" className="w-full justify-start gap-2" onClick={() => logout()}>
                  <LogOut className="h-4 w-4" /> Log out
                </Button>
              </>
            ) : (
              <Button onClick={() => window.location.href = '/api/login'} className="w-full">
                Join / Login
              </Button>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}
