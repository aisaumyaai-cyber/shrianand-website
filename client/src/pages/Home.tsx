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
    icon: <img src="/shrianand-website/images/root_canal.png" alt="Root Canal" className="w-12 h-12 object-contain" />,
  },
  {
    title: "Dental Implants",
    description: "Permanent solutions for missing teeth with natural-looking results.",
    icon: <img src="/shrianand-website/images/implant.png" alt="Dental Implant" className="w-12 h-12 object-contain" />,
  },
  {
    title: "Teeth Whitening",
    description: "Professional whitening services for a brighter, confident smile.",
    icon: <img src="/shrianand-website/images/teeth_whitening.png" alt="Teeth Whitening" className="w-12 h-12 object-contain" />,
  },
  {
    title: "Orthodontics",
    description: "Braces and aligners to correct alignment and bite issues.",
    icon: <img src="/shrianand-website/images/aligner.png" alt="Orthodontics" className="w-12 h-12 object-contain" />,
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
      <section className="relative lg:pt-32 lg:pb-32 overflow-hidden bg-gradient-to-br from-blue-50 to-white ml-[10px] mr-[10px] mt-[80px] mb-[80px] pt-[50px] pb-[50px]">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-4 xl:gap-0">
            <div className="lg:w-[55%] xl:w-[60%] z-10">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-left ml-[120px] mr-[120px] pl-[0px] pr-[0px] mt-[0px] mb-[0px] pt-[0px] pb-[0px]">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#b2c72e]/20 text-sm font-semibold text-[#090a01] w-fit mb-6">
                  <Award className="w-4 h-4 shrink-0" />
                  <span className="text-[#090a01a3] text-left">Ex. Head of Dental Department, Kailash Hospital<br />Formerly LNJP Hospital & G.B. Pant Hospital New Delhi</span>
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading leading-tight mb-6 text-[#43444ae3]">
                  Noida’s Most <span className="text-primary">Trusted</span><br />
                  Dental Expert
                </h1>
                <p className="text-lg text-slate-600 mb-8 leading-relaxed max-w-xl">Dr. Sanjai Sahai, one of Noida's best dentists with over 30 years of distinguished experience, leads Shri Anand Bright Dental Clinic—Noida’s most trusted dental clinic since 1997. A Maulana Azad Medical College (MAMC) alumnus and Former Head of Dental Department at Kailash Hospital, he served at LNJP Hospital Delhi and G.B. Pant Hospital Delhi as a leading dentist, delivering best root canal treatments, dental implants and specialist approach in complex dental surgery and ethical family dental solutions.</p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a href="tel:+919971467879" className="w-full sm:w-auto">
                    <Button size="lg" className="w-full h-12 text-lg">
                      <Phone className="w-5 h-5 mr-2" />
                      <span>+91 9971467879</span>
                    </Button>
                  </a>
                  <a href="https://wa.me/919310668788" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
                    <Button size="lg" variant="outline" className="w-full h-12 text-lg">
                      <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.305-.881-.653-1.476-1.46-1.649-1.758-.173-.298-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.012c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
                      </svg>
                      <span>+91 93106 68788</span>
                    </Button>
                  </a>
                </div>
              </motion.div>
            </div>
            <div className="lg:w-[45%] xl:w-[40%] relative ml-[50px] mr-[50px]">
              <div className="text-center w-full mb-6 relative z-20 hidden lg:block">
                <span className="text-sm tracking-[0.3em] uppercase backdrop-blur-sm py-2 px-6 rounded-full shadow-sm inline-block text-[#728517] bg-[#f2f0f09c] font-extrabold">The Smiling Point of Dentistry</span>
              </div>
              <div className="text-center w-full mb-6 relative z-20 lg:hidden block">
                <span className="text-[#b2c72e] font-bold text-sm tracking-[0.2em] uppercase bg-white/80 backdrop-blur-sm py-2 px-4 rounded-full shadow-sm inline-block">The Smiling Point of Dentistry</span>
              </div>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative z-10 mx-auto max-w-md lg:mt-12"
              >
                <div className="rounded-3xl shadow-2xl overflow-hidden w-full relative bg-white aspect-[3/4]">
                  <img
                    src="/shrianand-website/images/dr-sanjai-sahai.jpeg"
                    alt="Dr. Sanjai Sahai"
                    className="w-full h-full object-cover object-top hover:scale-[1.02] transition-transform duration-500"
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
                      <p className="text-xs text-slate-500">Based on Reviews</p>
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
      <section className="py-20 bg-white pt-[10px] pb-[10px]">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4 text-[#43444ae3]">
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
                    <h3 className="text-xl font-bold mb-3 text-[#43444ae3]">{service.title}</h3>
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
      <section className="py-20 bg-slate-50 pt-[40px] pb-[40px]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold font-heading mb-4 text-[#43444ae3]">Patient Stories</h2>
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
                        <div className="font-bold text-[#43444ae3]">- {t.name}</div>
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
      <section className="py-20 bg-white pt-[0px] pb-[0px]">
        <div className="container mx-auto px-4">
          <div className="bg-primary/5 rounded-3xl p-8 md:p-12 lg:p-16 flex flex-col md:flex-row items-center justify-between gap-8 border border-primary/10">
            <div>
              <h2 className="text-3xl font-bold font-heading mb-4 text-[#43444ae3]">Ready for a Beautiful Healthy Smile?</h2>
              <p className="text-slate-600 text-lg max-w-md">
                Book your appointment today at our modern clinic in Noida.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
              <a href="https://wa.me/919310668788" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
                <Button size="lg" className="w-full sm:w-auto">Book Appointment</Button>
              </a>
              <Button size="lg" variant="outline" className="w-full sm:w-auto" onClick={() => window.open('tel:+919971467879', '_self')}>
                <Phone className="w-4 h-4 mr-2" /> Call Now
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
