import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { CheckCircle2 } from "lucide-react";

export default function About() {
  return (
    <div className="pt-24 pb-20">
      <section className="container mx-auto px-4">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="mb-4">
            <span className="text-primary font-bold text-lg tracking-wide uppercase italic">"Smiling Point of Dentistry"</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold font-heading mb-6 text-slate-900">
            About Dr. Sanjai Sahai
          </h1>
          <p className="text-lg text-slate-600 leading-relaxed">
            With over three decades of clinical excellence, Dr. Sanjai Sahai is dedicated to providing comprehensive, patient-centered dental care in Noida.
          </p>
        </div>

        {/* Bio Section */}
        <div className="flex flex-col lg:flex-row gap-12 items-start mb-20">
          <div className="lg:w-1/3">
            <div className="sticky top-24">
              <img 
                src="/shrianand-website/images/hero-clinic.png" 
                alt="Dr. Sanjai Sahai" 
                className="w-full aspect-[3/4] object-cover rounded-2xl shadow-xl grayscale hover:grayscale-0 transition-all duration-500" 
              />
              <div className="mt-6 bg-slate-50 p-6 rounded-xl border border-slate-100">
                <h3 className="font-bold text-xl mb-2">Qualifications</h3>
                <ul className="space-y-2 text-slate-600">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <span>BDS, Maulana Azad Medical College (MAMC), Delhi</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <span>Ex. Head of Dental Department, Kailash Hospital, Noida</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <span>Formerly at LNJP Hospital & G.B. Pant Hospital, New Delhi</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <span>30+ Years of Clinical Experience</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="lg:w-2/3">
            <h2 className="text-2xl font-bold font-heading mb-4 text-primary">A Legacy of Trust & Care</h2>
            <div className="space-y-6 text-slate-600 text-lg leading-relaxed">
              <p>
                Dr. Sanjai Sahai is a name synonymous with trust and dental excellence in Noida. Having graduated from the prestigious <strong>Maulana Azad Medical College (MAMC)</strong>, one of India's top medical institutions, he built a foundation of rigorous clinical training and medical ethics.
              </p>
              <p>
                He served as the <strong>Ex. Head of Dental Department at Kailash Hospital, Noida</strong>, where he managed complex dental cases and led a team of specialists. His distinguished career also includes valuable experience at <strong>LNJP Hospital</strong> and <strong>G.B. Pant Hospital, New Delhi</strong>.
              </p>
              <p>
                Today, at his private practice, Dr. Sanjai Sahai combines this vast experience with modern dental technology. His philosophy, <em>"Precision care through experience,"</em> reflects his belief that successful dentistry requires not just steady hands, but also the judgment that comes from treating thousands of smiles over decades.
              </p>
            </div>

            <div className="mt-12">
              <h3 className="text-2xl font-bold font-heading mb-6 text-slate-900">Our Mission</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100">
                  <h4 className="font-bold text-lg mb-3 flex items-center gap-2">
                    <span className="w-8 h-8 rounded-full bg-blue-100 text-primary flex items-center justify-center text-sm">1</span>
                    Patient-First Approach
                  </h4>
                  <p className="text-slate-600">We prioritize your comfort and long-term oral health over quick fixes. Every treatment plan is personalized.</p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100">
                  <h4 className="font-bold text-lg mb-3 flex items-center gap-2">
                    <span className="w-8 h-8 rounded-full bg-blue-100 text-primary flex items-center justify-center text-sm">2</span>
                    Ethical Practice
                  </h4>
                  <p className="text-slate-600">Complete transparency in pricing and procedures. We only recommend treatments that are necessary.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="bg-slate-50 rounded-2xl p-8 md:p-12 text-center border border-slate-100">
          <h2 className="text-3xl font-bold font-heading mb-4 text-slate-900">Experience the Difference</h2>
          <p className="text-slate-600 mb-8 max-w-2xl mx-auto">
            Schedule a consultation with Dr. Sanjai Sahai and take the first step towards a healthier smile.
          </p>
          <Link href="/contact">
            <Button size="lg" className="w-full sm:w-auto">
              Book Appointment Now
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
