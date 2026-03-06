import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Star, ShieldCheck, Clock, Award, CheckCircle2, Phone, Calendar, ArrowRight, Stethoscope, Microscope, Sparkles, Activity } from "lucide-react";
import { Link } from "wouter";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const services = [
  {
    title: "Root Canal Therapy",
    description: "Pain-free root canal treatments using advanced rotary endodontics.",
    icon: <img src="/images/root_canal.png" alt="Root Canal" className="w-12 h-12 object-contain" />,
  },
  {
    title: "Dental Implants",
    description: "Permanent solutions for missing teeth with natural-looking results.",
    icon: <img src="/images/implant.png" alt="Dental Implant" className="w-12 h-12 object-contain" />,
  },
  {
    title: "Teeth Whitening",
    description: "Professional whitening services for a brighter, confident smile.",
    icon: <img src="/images/teeth_whitening.png" alt="Teeth Whitening" className="w-12 h-12 object-contain" />,
  },
  {
    title: "Orthodontics",
    description: "Braces and aligners to correct alignment and bite issues.",
    icon: <img src="/images/aligner.png" alt="Orthodontics" className="w-12 h-12 object-contain" />,
  },
];

const testimonials = [
  {
    name: "Rajesh Kumar",
    text: "Dr. Sahai is incredibly gentle. I was terrified of the root canal, but he made it painless. Highly recommended!",
    rating: 5,
  },
  {
    name: "Priya Sharma",
    text: "The clinic is spotless and the staff is very professional. Best dentist in Noida for sure.",
    rating: 5,
  },
  {
    name: "Amit Verma",
    text: "Great experience with my dental implants. Dr. Sahai's experience really shows in his work.",
    rating: 5,
  },
];

export default function Home() {
  return (
    <div className="overflow-x-hidden">
      {/* HERO SECTION */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-gradient-to-br from-blue-50 to-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
            <div className="lg:w-1/2 z-10">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#b2c72e]/20 text-sm font-semibold mb-6 text-[#090a01]">
                  <Award className="w-4 h-4" />
                  <span>Ex. Head of Dental Department, Kailash Hospital
                  Formerly LNJP Hospital & G.B. Pant Hospital New Delhi</span>
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading leading-tight mb-6 text-slate-900">
                  Noida’s Most <span className="text-primary">Trusted</span><br />
                  Dental Expert
                </h1>
                <p className="text-lg text-slate-600 mb-8 leading-relaxed max-w-xl">Dr. Sanjai Sahai, one of Noida's best dentists with over 30 years of distinguished experience, leads Shri Anand Bright Dental Clinic—Noida’s most trusted dental clinic since 1997. A Maulana Azad Medical College (MAMC) alumnus and Former Head of Dental Department at Kailash Hospital, he served at LNJP Hospital Delhi and G.B. Pant Hospital Delhi as a leading dentist, delivering best root canal treatments, dental implants and specialist approach in complex dental surgery and ethical family dental solutions.</p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href="/contact">
                    <Button size="lg" className="h-14 px-8 text-lg shadow-lg hover:shadow-primary/20 transition-all border border-primary-border bg-[#26272d] text-[#f5f5f5]">
                      Book Appointment
                    </Button>
                  </Link>
                  <Link href="/services">
                    <Button size="lg" variant="outline" className="h-14 px-8 text-lg border-2 text-primary border-primary hover:bg-primary hover:text-white">
                      View Services
                    </Button>
                  </Link>
                </div>
              </motion.div>
            </div>
            <div className="lg:w-1/2 relative">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative z-10"
              >
                <div className="rounded-3xl shadow-2xl overflow-hidden w-full h-[500px] relative">
                  <video
                    src="/videos/dental-treatment-transition.mp4"
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover hover:scale-[1.02] transition-transform duration-500"
                  />
                </div>
                {/* Floating Card */}
                <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-xl max-w-xs hidden md:block animate-in slide-in-from-bottom-4 duration-1000">
                  <div className="flex items-center gap-4 mb-3">
                    <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center">
                      <Star className="w-6 h-6 text-green-600 fill-current" />
                    </div>
                    <div>
                      <p className="font-bold text-lg">4.7/5.0</p>
                      <p className="text-xs text-slate-500">Based on 500+ Reviews</p>
                    </div>
                  </div>
                  <p className="text-sm text-slate-600">"Best dental experience I've ever had!"</p>
                </div>
              </motion.div>
              {/* Abstract decorative blobs */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-blue-100/50 rounded-full blur-3xl -z-10" />
            </div>
          </div>
        </div>
      </section>
      {/* EXPERTISE SECTION */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4 text-slate-900">
              Comprehensive Dental Care
            </h2>
            <p className="text-slate-600 text-lg">
              Combining advanced technology with gentle care to deliver the best results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:shadow-lg transition-all border-slate-100 group">
                  <CardContent className="p-8 flex flex-col items-center text-center h-full">
                    <div className="w-16 h-16 rounded-2xl bg-blue-50 flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                      {service.icon}
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-slate-900">{service.title}</h3>
                    <p className="text-slate-500 mb-6 flex-grow">{service.description}</p>
                    <Link href="/services">
                      <a className="text-primary font-semibold flex items-center gap-2 hover:gap-3 transition-all">
                        Learn More <ArrowRight className="w-4 h-4" />
                      </a>
                    </Link>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {/* REVIEWS */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold font-heading mb-4 text-slate-900">Patient Stories</h2>
            <p className="text-slate-600">See what our patients say about their smiles.</p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <Carousel className="w-full">
              <CarouselContent>
                {testimonials.map((t, i) => (
                  <CarouselItem key={i} className="md:basis-1/2 lg:basis-1/3 p-4">
                    <Card className="border-none shadow-md h-full">
                      <CardContent className="p-6">
                        <div className="flex gap-1 text-yellow-400 mb-4">
                          {[...Array(t.rating)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
                        </div>
                        <p className="text-slate-600 italic mb-6">"{t.text}"</p>
                        <div className="font-bold text-slate-900">- {t.name}</div>
                      </CardContent>
                    </Card>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
          </div>
        </div>
      </section>
      {/* CTA SECTION */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="bg-primary/5 rounded-3xl p-8 md:p-12 lg:p-16 flex flex-col md:flex-row items-center justify-between gap-8 border border-primary/10">
            <div>
              <h2 className="text-3xl font-bold font-heading mb-4 text-slate-900">Ready for a Beautiful Healthy Smile?</h2>
              <p className="text-slate-600 text-lg max-w-md">
                Book your appointment today at our modern clinic in Noida.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
              <Link href="/contact">
                <Button size="lg" className="w-full sm:w-auto shadow-lg text-white">Book Appointment</Button>
              </Link>
              <Button size="lg" variant="outline" className="w-full sm:w-auto bg-white text-primary border-primary hover:bg-primary hover:text-white" onClick={() => window.open('tel:+919971467879', '_self')}>
                <Phone className="w-4 h-4 mr-2" /> Call Now
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
