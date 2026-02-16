import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";

const formSchema = z.object({
  name: z.string().min(2, "Name is required"),
  phone: z.string().min(10, "Valid phone number is required"),
  email: z.string().email("Invalid email address"),
  message: z.string().optional(),
});

export default function Contact() {
  const { toast } = useToast();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      phone: "",
      email: "",
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    const whatsappNumber = "919310668788"; // WhatsApp number
    const text = `Hello Dr. Sahai, I would like to book an appointment.\n\nName: ${values.name}\nPhone: ${values.phone}\nEmail: ${values.email}\nMessage: ${values.message}`;
    const encodedText = encodeURIComponent(text);
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedText}`;
    
    window.open(whatsappUrl, '_blank');
    
    toast({
      title: "Opening WhatsApp",
      description: "Redirecting you to chat with us.",
    });
    form.reset();
  }

  return (
    <div className="pt-24 pb-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
          
          {/* Contact Info */}
          <div className="lg:w-1/2">
            <h1 className="text-4xl font-bold font-heading mb-6 text-slate-900">Get in Touch</h1>
            <p className="text-lg text-slate-600 mb-10">
              We are conveniently located near Kailash Hospital in Noida. Visit us for a consultation or book an appointment online.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center text-primary shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-slate-900 mb-1">Clinic Location</h3>
                  <p className="text-slate-600">
                    B-95, near Mount Litera Noida | Mount Litera Zee School,<br />
                    B Block, Pocket B, Sector 27,<br />
                    Noida, Uttar Pradesh 201301
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center text-primary shrink-0">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-slate-900 mb-1">Phone & WhatsApp</h3>
                  <p className="text-slate-600">Call: +91 99714 67879</p>
                  <p className="text-slate-600">WhatsApp: +91 93106 68788</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center text-primary shrink-0">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-slate-900 mb-1">Clinic Hours</h3>
                  <p className="text-slate-600">Mon - Sat: 10:00 AM - 1:30 PM, 5:00 PM - 8:30 PM</p>
                  <p className="text-slate-500 text-sm">Sunday: By Appointment Only</p>
                </div>
              </div>
            </div>

            <div className="mt-10 h-80 bg-slate-100 rounded-xl overflow-hidden relative shadow-inner border border-slate-200">
               <iframe 
                 src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3503.468204652434!2d77.32832827550013!3d28.585708875691077!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce4504d603417%3A0xc6651a2f6430349c!2sB-95%2C%20Sector%2027%2C%20Noida%2C%20Uttar%20Pradesh%20201301!5e0!3m2!1sen!2sin!4v1710000000000!5m2!1sen!2sin" 
                 width="100%" 
                 height="100%" 
                 style={{ border: 0 }} 
                 allowFullScreen={true} 
                 loading="lazy" 
                 referrerPolicy="no-referrer-when-downgrade"
                 title="Clinic Location"
               ></iframe>
            </div>
          </div>

          {/* Form */}
          <div className="lg:w-1/2">
            <Card className="border-none shadow-2xl shadow-[#b2c72e]/10">
              <CardHeader className="bg-[#b2c72e] text-[#1f2025] rounded-t-xl p-8">
                <CardTitle className="text-2xl">Book an Appointment</CardTitle>
                <CardDescription className="text-[#1f2025]/80">
                  Fill out the form below and our reception will connect with you to confirm.
                </CardDescription>
              </CardHeader>
              <CardContent className="p-8">
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Full Name</FormLabel>
                          <FormControl>
                            <Input placeholder="John Doe" {...field} className="h-12" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <FormField
                        control={form.control}
                        name="phone"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Phone Number</FormLabel>
                            <FormControl>
                              <Input placeholder="+91 XXXXX XXXXX" {...field} className="h-12" />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Email Address</FormLabel>
                            <FormControl>
                              <Input placeholder="john@example.com" {...field} className="h-12" />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Reason for Visit / Message</FormLabel>
                          <FormControl>
                            <Textarea 
                              placeholder="I need a root canal consultation..." 
                              className="min-h-[120px]" 
                              {...field} 
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <Button type="submit" className="w-full h-12 text-lg text-white">Book Appointment</Button>
                  </form>
                </Form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
