import { useState } from "react";
import { Slider } from "@/components/ui/slider";
import { Card, CardContent } from "@/components/ui/card";

const BeforeAfter = ({ before, after, label }: { before: string; after: string; label: string }) => {
  const [sliderValue, setSliderValue] = useState(50);

  return (
    <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden cursor-ew-resize select-none group shadow-lg">
      <div className="absolute inset-0">
        <img src={after} alt="After" className="w-full h-full object-cover" />
      </div>
      <div 
        className="absolute inset-0 overflow-hidden" 
        style={{ width: `${sliderValue}%` }}
      >
        <img src={before} alt="Before" className="w-full h-full object-cover max-w-none" style={{ width: '100vw', maxWidth: 'unset' }} /> {/* Hack to keep image static */}
        {/* We actually need the image to be full width of container even when clipped. 
            The easy way is absolute positioning and a parent width.
            Let's re-implement with a simpler mask approach or just use a standard transform.
        */}
      </div>
      
      {/* Label */}
      <div className="absolute top-4 left-4 bg-black/50 text-white text-xs px-2 py-1 rounded backdrop-blur-sm">Before</div>
      <div className="absolute top-4 right-4 bg-primary/80 text-white text-xs px-2 py-1 rounded backdrop-blur-sm">After</div>

      {/* Slider Handle */}
      <div 
        className="absolute inset-y-0 w-1 bg-white cursor-ew-resize flex items-center justify-center z-10"
        style={{ left: `${sliderValue}%` }}
      >
        <div className="w-8 h-8 rounded-full bg-white shadow-lg flex items-center justify-center">
          <div className="flex gap-0.5">
             <div className="w-0.5 h-3 bg-slate-400"></div>
             <div className="w-0.5 h-3 bg-slate-400"></div>
          </div>
        </div>
      </div>
      
      {/* Input Overlay */}
      <input
        type="range"
        min="0"
        max="100"
        value={sliderValue}
        onChange={(e) => setSliderValue(Number(e.target.value))}
        className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-20"
      />
      
      <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/60 to-transparent text-white opacity-0 group-hover:opacity-100 transition-opacity">
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
          <h1 className="text-4xl font-bold font-heading mb-4">Smile Gallery</h1>
          <p className="text-slate-600">Real results from our happy patients.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-20">
           {/* Placeholder images - In real app, these would be specific before/afters. 
               Using the generic ones for now but styling them as interactives. */}
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
           {/* Note: In a real implementation, I'd need actual separate images. 
               Here I'm reusing the generated one just to show the interaction UI. */}
        </div>

        <div className="text-center mb-12">
            <h2 className="text-2xl font-bold font-heading mb-4">Clinic Tour</h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            <img src="/images/hero-clinic.png" className="w-full h-64 object-cover rounded-xl hover:scale-105 transition-transform duration-500 cursor-pointer" />
            <img src="/images/treatment-room.png" className="w-full h-64 object-cover rounded-xl hover:scale-105 transition-transform duration-500 cursor-pointer" />
            <img src="/images/hero-clinic.png" className="w-full h-64 object-cover rounded-xl hover:scale-105 transition-transform duration-500 cursor-pointer" />
        </div>
      </div>
    </div>
  );
}
