import { Card, CardContent } from "@/components/ui/card";

const BeforeAfter = ({ before, after, label }: { before: string; after: string; label: string }) => {
  return (
    <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden group shadow-lg">
      <div className="flex w-full h-full">
        <div className="relative w-1/2 h-full border-r-2 border-white">
          <img src={before} alt="Before" className="w-full h-full object-cover" />
          <div className="absolute top-4 left-4 bg-black/50 text-white text-xs px-2 py-1 rounded backdrop-blur-sm">Before</div>
        </div>
        <div className="relative w-1/2 h-full">
          <img src={after} alt="After" className="w-full h-full object-cover" />
          <div className="absolute top-4 right-4 bg-primary/80 text-white text-xs px-2 py-1 rounded backdrop-blur-sm">After</div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/60 to-transparent text-white opacity-100 transition-opacity">
        <p className="font-bold">{label}</p>
      </div>
    </div>
  );
};

export default function Gallery() {
  return (
    <div className="pt-24 pb-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="mb-4">
            <span className="text-primary font-bold text-lg tracking-wide uppercase italic">"Smiling Point of Dentistry"</span>
          </div>
          <h1 className="text-4xl font-bold font-heading mb-4">Inside the Smile Transformation</h1>
          <p className="text-slate-600">A glimpse into our smile design process</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-20">
           <BeforeAfter 
             before="/images/patient-smile.png" 
             after="/images/patient-smile.png" 
             label="Teeth Whitening" 
           />
           <BeforeAfter 
             before="/images/patient-smile.png" 
             after="/images/patient-smile.png" 
             label="Ceramic Veneers" 
           />
        </div>
      </div>
    </div>
  );
}
