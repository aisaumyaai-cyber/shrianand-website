import { MapPin, Phone, Mail, Clock, Facebook, Twitter, Instagram } from "lucide-react";
import { Link } from "wouter";

export function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-200 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-heading font-bold text-white mb-4">Dr. Sanjai Sahai</h3>
            <p className="text-slate-400 mb-6 leading-relaxed">
              Providing precision dental care with over 30 years of experience. Ex. Head of Dental Dept, Kailash Hospital, Noida. Formerly at LNJP & G.B. Pant Hospitals.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-primary transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-primary transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-primary transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold text-white mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li><Link href="/" className="hover:text-primary transition-colors">Home</Link></li>
              <li><Link href="/about" className="hover:text-primary transition-colors">About Us</Link></li>
              <li><Link href="/services" className="hover:text-primary transition-colors">Services</Link></li>
              <li><Link href="/gallery" className="hover:text-primary transition-colors">Smile Gallery</Link></li>
              <li><Link href="/blog" className="hover:text-primary transition-colors">Dental Blog</Link></li>
              <li><a href="https://wa.me/919310668788" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">Book Appointment</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-bold text-white mb-6">Our Services</h4>
            <ul className="space-y-3">
              <li><Link href="/services" onClick={() => window.scrollTo(0, 0)} className="hover:text-primary transition-colors">Root Canal Treatment</Link></li>
              <li><Link href="/services" onClick={() => window.scrollTo(0, 0)} className="hover:text-primary transition-colors">Dental Implants</Link></li>
              <li><Link href="/services" onClick={() => window.scrollTo(0, 0)} className="hover:text-primary transition-colors">Cosmetic Dentistry</Link></li>
              <li><Link href="/services" onClick={() => window.scrollTo(0, 0)} className="hover:text-primary transition-colors">Teeth Whitening</Link></li>
              <li><Link href="/services" onClick={() => window.scrollTo(0, 0)} className="hover:text-primary transition-colors">Orthodontics</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-bold text-white mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary shrink-0 mt-1" />
                <a 
                  href="https://maps.app.goo.gl/yBsXrbShbvcpRPxX7" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="group cursor-pointer flex flex-col"
                >
                  <span className="group-hover:text-primary transition-colors">
                    B-95 (BASEMENT) SECTOR-27,<br />NEAR MOUNT LITERA SCHOOL, NOIDA
                  </span>
                  <span className="text-xs text-primary/80 mt-1 font-medium group-hover:text-primary transition-colors">
                    Click for Google Maps location
                  </span>
                </a>
              </li>
              <li>
                <a href="tel:+919971467879" className="flex items-center gap-3 hover:text-primary transition-colors cursor-pointer group">
                  <Phone className="w-5 h-5 text-primary shrink-0 group-hover:scale-110 transition-transform" />
                  <span>Call: +91 99714 67879</span>
                </a>
              </li>
              <li>
                <a 
                  href="https://wa.me/919310668788" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center gap-3 hover:text-primary transition-colors cursor-pointer group"
                >
                  <svg className="w-5 h-5 text-primary shrink-0 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.305-.881-.653-1.476-1.46-1.649-1.758-.173-.298-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.012c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
                  </svg>
                  <span>WhatsApp: +91 93106 68788</span>
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary shrink-0" />
                <span>shrianandbright1@gmail.com</span>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-primary shrink-0 mt-1" />
                <span>
                  Tue - Sat : 11:30 AM - 7:30 PM<br />
                  Sun : 11:30 AM - 4:30 PM<br />
                  <span className="text-red-400">Monday Closed</span>
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500">
          <p>© {new Date().getFullYear()} Dr. Sanjai Sahai. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
