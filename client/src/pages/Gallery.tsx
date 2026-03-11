import { Card, CardContent } from "@/components/ui/card";

const BeforeAfter = ({ before, after }: { before: string; after: string }) => {
  return (
    <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden group shadow-lg border border-slate-100 bg-white">
      <div className="flex w-full h-full">
        <div className="relative w-1/2 h-full border-r-2 border-white">
          <img src={before} alt="Before" loading="lazy" decoding="async" className="w-full h-full object-cover" />
        </div>
        <div className="relative w-1/2 h-full">
          <img src={after} alt="After" loading="lazy" decoding="async" className="w-full h-full object-cover" />
        </div>
      </div>
    </div>
  );
};

export default function Gallery() {
  return (
    <div className="pt-24 pb-20 bg-slate-50">
      <div className="container mx-auto px-4">
        {/* Transformations Section */}
        <div className="text-center mt-[52px] mb-[52px]">
          <h1 className="text-4xl md:text-5xl font-bold font-heading mb-4 text-[#43444ae3]">Inside the Smile Transformation</h1>
          <p className="text-slate-600 max-w-2xl mx-auto text-lg leading-relaxed">Real results from our precision dental care. Explore the transformations that redefine smiles.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-24">
           <BeforeAfter 
             before="/images/gallery/whitening-before.jpg" 
             after="/images/gallery/whitening-after.jpg" 
           />
           <BeforeAfter 
             before="/images/gallery/braces-before.jpg" 
             after="/images/gallery/braces-after.jpg" 
           />
           <BeforeAfter 
             before="/images/gallery/dentures-before.jpg" 
             after="/images/gallery/dentures-after.jpg" 
           />
           <BeforeAfter 
             before="/images/gallery/patient-1.jpg" 
             after="/images/gallery/patient-2.jpg" 
           />
        </div>

        {/* Clinical Excellence Section */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold font-heading mb-4 text-[#43444ae3]">Clinical Excellence</h2>
          <p className="text-slate-600 text-lg leading-relaxed">Advanced diagnostics and our patient-centric environment in Noida.</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { src: "/images/gallery/xray-1.jpg", label: "Digital Diagnostics" },
            { src: "/images/gallery/clinic-1.jpg", label: "Modern Operatory" },
            { src: "/images/gallery/clinic-2.jpg", label: "Advanced Sterilization" },
            { src: "/images/gallery/whitening-after.jpg", label: "Precision Care" }
          ].map((item, idx) => (
            <div key={idx} className="group relative overflow-hidden rounded-2xl shadow-lg aspect-square bg-slate-200">
              <div className="absolute inset-0 bg-slate-100 animate-pulse"></div>
              <img src={item.src} alt={item.label} loading="lazy" decoding="async" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 relative z-10" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6 z-20">
                <span className="text-white font-bold text-lg leading-tight">{item.label}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
