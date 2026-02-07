import { MapPin, Phone, Mail, Clock, Facebook, Twitter, Instagram } from "lucide-react";
import { Link } from "wouter";

export function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-200 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-heading font-bold text-white mb-4">Dr. Sanjay Sahai</h3>
            <p className="text-slate-400 mb-6 leading-relaxed">
              Providing precision dental care with over 30 years of experience. Former HOD at Kailash Hospital, Noida.
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
              <li><Link href="/"><a className="hover:text-primary transition-colors">Home</a></Link></li>
              <li><Link href="/about"><a className="hover:text-primary transition-colors">About Us</a></Link></li>
              <li><Link href="/services"><a className="hover:text-primary transition-colors">Services</a></Link></li>
              <li><Link href="/gallery"><a className="hover:text-primary transition-colors">Smile Gallery</a></Link></li>
              <li><Link href="/blog"><a className="hover:text-primary transition-colors">Dental Blog</a></Link></li>
              <li><Link href="/contact"><a className="hover:text-primary transition-colors">Book Appointment</a></Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-bold text-white mb-6">Our Services</h4>
            <ul className="space-y-3">
              <li><Link href="/services"><a className="hover:text-primary transition-colors">Root Canal Treatment</a></Link></li>
              <li><Link href="/services"><a className="hover:text-primary transition-colors">Dental Implants</a></Link></li>
              <li><Link href="/services"><a className="hover:text-primary transition-colors">Cosmetic Dentistry</a></Link></li>
              <li><Link href="/services"><a className="hover:text-primary transition-colors">Teeth Whitening</a></Link></li>
              <li><Link href="/services"><a className="hover:text-primary transition-colors">Orthodontics</a></Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-bold text-white mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary shrink-0 mt-1" />
                <span>Kailash Hospital Area, Sector 27,<br />Noida, Uttar Pradesh 201301</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary shrink-0" />
                <span>+91 98100 XXXXX</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary shrink-0" />
                <span>clinic@drsanjaysahai.com</span>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-primary shrink-0 mt-1" />
                <span>Mon - Sat: 10:00 AM - 8:00 PM<br /><span className="text-slate-500">Sunday: By Appointment</span></span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500">
          <p>© {new Date().getFullYear()} Dr. Sanjay Sahai. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
