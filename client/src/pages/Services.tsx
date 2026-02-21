import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Check, Stethoscope, Microscope, Sparkles, Activity, Wand2, ShieldPlus } from "lucide-react";

const services = [
  {
    title: "Root Canal Therapy",
    description: "Save your natural tooth with our painless, single-visit root canal treatments using advanced rotary files.",
    features: ["Pain-free procedure", "Advanced Rotary Tools", "Single sitting options"],
    price: "Consult for estimate",
    icon: <Stethoscope className="w-6 h-6" />
  },
  {
    title: "Dental Implants",
    description: "Replace missing teeth with titanium implants that look, feel, and function like natural teeth.",
    features: ["Permanent solution", "Natural look", "Preserves jaw bone"],
    price: "Consult for estimate",
    icon: <Microscope className="w-6 h-6" />
  },
  {
    title: "Cosmetic Dentistry",
    description: "Smile makeovers including veneers, bonding, and gum contouring to give you the smile of your dreams.",
    features: ["Veneers & Laminates", "Smile Design", "Gap closures"],
    price: "Varies by treatment",
    icon: <Wand2 className="w-6 h-6" />
  },
  {
    title: "Teeth Whitening",
    description: "Professional whitening systems that are safe and effective, removing years of stains in one hour.",
    features: ["1 hour procedure", "Long lasting results", "Safe for enamel"],
    price: "Consult for estimate",
    icon: <Sparkles className="w-6 h-6" />
  },
  {
    title: "Orthodontics",
    description: "Traditional braces and modern clear aligners to straighten teeth for children and adults.",
    features: ["Metal/Ceramic Braces", "Invisible Aligners", "Correction of bite"],
    price: "Consult for estimate",
    icon: <Activity className="w-6 h-6" />
  },
  {
    title: "Preventive Care",
    description: "Routine checkups, cleaning (scaling), and fluoride treatments to prevent decay before it starts.",
    features: ["Ultrasonic Scaling", "Cavity Protection", "Gum Health Check"],
    price: "Starts @ ₹1000",
    icon: <ShieldPlus className="w-6 h-6" />
  }
];

export default function Services() {
  return (
    <div className="pt-24 pb-20">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="mb-4">
            <span className="text-primary font-bold text-lg tracking-wide uppercase italic">"Smiling Point of Dentistry"</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold font-heading mb-6 text-slate-900">
            Our Dental Services
          </h1>
          <p className="text-lg text-slate-600">
            We offer a full spectrum of dental treatments under one roof, using the latest technology and sterilization protocols.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="flex flex-col hover:shadow-lg transition-all duration-300 border-slate-100">
              <CardHeader className="bg-[#f7f7f77d]">
                <div className="w-12 h-12 rounded-lg bg-blue-50 flex items-center justify-center text-primary mb-4">
                  {service.icon}
                </div>
                <CardTitle className="text-2xl font-bold text-slate-900">{service.title}</CardTitle>
              </CardHeader>
              <CardContent className="mt-auto pt-0">
                <div className="space-y-3 mb-6">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-sm text-slate-700">
                      <Check className="w-4 h-4 text-primary" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
                <div className="flex items-center justify-end mt-6 pt-6 border-t border-slate-100">
                  <Link href="/contact">
                    <Button variant="outline" size="sm" className="hover:bg-primary text-primary border-primary hover:text-white">
                      Book Now
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-20 bg-blue-50 rounded-2xl p-8 md:p-12 flex flex-col md:flex-row items-center gap-8">
          <div className="md:w-2/3">
            <h3 className="text-2xl font-bold font-heading mb-2 text-slate-900">Emergency Dental Care</h3>
            <p className="text-slate-600">
              Experiencing severe tooth pain or a dental injury? We offer priority appointments for dental emergencies to get you out of pain fast.
            </p>
          </div>
          <div className="md:w-1/3 flex justify-end">
            <Link href="/contact">
              <Button size="lg" className="w-full md:w-auto bg-red-500 hover:bg-red-600 text-white border-none shadow-lg shadow-red-200">
                Emergency Contact
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
