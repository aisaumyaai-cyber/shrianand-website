import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone, Calendar } from "lucide-react";
import { useState, useEffect } from "react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Gallery", href: "/gallery" },
    { name: "Blog", href: "/blog" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/90 backdrop-blur-md shadow-sm py-4"
          : "bg-white/50 backdrop-blur-sm py-6"
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Link href="/">
          <a className="flex items-center gap-2 group">
            <div className="w-16 h-16 rounded-full overflow-hidden flex items-center justify-center bg-white shadow-md group-hover:scale-105 transition-transform shrink-0">
              <img 
                src="/shrianand-website/images/logo/logo-512.png" 
                alt="Shri Anand Bright Dental Clinic Logo" 
                className="w-full h-full object-cover scale-[1.45]" 
                style={{ imageRendering: '-webkit-optimize-contrast' }}
              />
            </div>
            <div className="flex flex-col">
              <span className="font-heading font-bold text-xl leading-none text-foreground">Shri Anand Bright Dental Clinic</span>
              <span className="font-medium uppercase tracking-wider text-[13px] bg-[#b2c62f59] text-left text-[#3e3e42]">Dr. Sanjai Sahai </span>
            </div>
          </a>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <Link key={link.name} href={link.href}>
              <a
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  location === link.href
                    ? "text-primary font-semibold"
                    : "text-muted-foreground"
                }`}
              >
                {link.name}
              </a>
            </Link>
          ))}
          <a href="tel:+919971467879" className="w-full sm:w-auto">
            <Button className="w-full h-12 text-lg">
              <Phone className="w-5 h-5 mr-2" />
              <span>+91 9971467879</span>
            </Button>
          </a>
        </div>

        {/* Mobile Nav */}
        <div className="md:hidden">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="w-6 h-6" />
              </Button>
            </SheetTrigger>
            <SheetContent>
              <div className="flex flex-col gap-6 mt-10">
                {links.map((link) => (
                  <Link key={link.name} href={link.href}>
                    <a 
                      className="text-lg font-medium py-2 border-b border-border/50"
                      onClick={() => setIsOpen(false)}
                    >
                      {link.name}
                    </a>
                  </Link>
                ))}
                <a href="tel:+919971467879" className="w-full mt-4" onClick={() => setIsOpen(false)}>
                  <Button className="w-full h-12 text-lg">
                    <Phone className="w-5 h-5 mr-2" />
                    <span>+91 9971467879</span>
                  </Button>
                </a>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}
