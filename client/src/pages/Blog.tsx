import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, User } from "lucide-react";

const posts = [
  {
    title: "The Ultimate Guide to Finding the Best Dentist in Noida",
    excerpt: "Looking for a reliable dentist? Here are the 5 key factors you should consider before booking your appointment...",
    date: "Oct 12, 2024",
    category: "Dental Guide",
    author: "Dr. Sanjai Sahai"
  },
  {
    title: "5 Myths About Root Canal Treatment You Should Stop Believing",
    excerpt: "Root canals have a bad reputation, but modern technology has made them virtually painless. Let's debunk the myths...",
    date: "Oct 05, 2024",
    category: "Education",
    author: "Dr. Sanjai Sahai"
  },
  {
    title: "Smile Makeover Costs in Noida: What to Expect",
    excerpt: "From whitening to veneers, understanding the costs involved in cosmetic dentistry can help you plan your perfect smile...",
    date: "Sep 28, 2024",
    category: "Cost Guide",
    author: "Team Sahai"
  }
];

export default function Blog() {
  return (
    <div className="pt-24 pb-20 bg-slate-50 min-h-screen">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold font-heading mb-4 text-[#2f3338]">Dental Health Blog</h1>
          <p className="text-slate-600">Expert advice, tips, and news for your oral health.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, i) => (
            <Card key={i} className="hover:shadow-xl transition-shadow border-none shadow-sm cursor-pointer group">
              <div className="h-48 bg-blue-100 rounded-t-xl overflow-hidden relative">
                {/* Placeholder blog image pattern */}
                <div className="absolute inset-0 bg-slate-200 group-hover:scale-105 transition-transform duration-700"></div>
                <Badge className="absolute top-4 right-4 bg-white text-primary hover:bg-white">{post.category}</Badge>
              </div>
              <CardContent className="p-6 bg-white rounded-b-xl">
                <div className="flex items-center gap-4 text-xs text-slate-500 mb-4">
                  <span className="flex items-center gap-1"><Calendar className="w-3 h-3" /> {post.date}</span>
                  <span className="flex items-center gap-1"><User className="w-3 h-3" /> {post.author}</span>
                </div>
                <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors line-clamp-2">{post.title}</h3>
                <p className="text-slate-600 text-sm line-clamp-3 mb-4">{post.excerpt}</p>
                <span className="text-primary font-semibold text-sm">Read Article →</span>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
