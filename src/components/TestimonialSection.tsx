
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

const testimonials = [
  {
    id: "1",
    name: "Sarah Johnson",
    role: "Frontend Developer",
    company: "TechCorp",
    content:
      "JobSpark completely transformed my job search. Within two weeks, I received multiple interview requests and landed my dream job. The filtering options helped me find exactly what I was looking for.",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80",
  },
  {
    id: "2",
    name: "Michael Chen",
    role: "UX Designer",
    company: "DesignHub",
    content:
      "As a designer looking for new opportunities, JobSpark provided a platform that actually showcased my portfolio. The application process was smooth, and employers responded quickly.",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80",
  },
  {
    id: "3",
    name: "Jessica Williams",
    role: "HR Manager",
    company: "GrowthCo",
    content:
      "From an employer perspective, JobSpark delivers high-quality candidates. The platform's targeting features allow us to find specialists with the exact skills we need. It's been a game-changer for our recruitment process.",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80",
  },
];

const TestimonialSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const activeTestimonial = testimonials[activeIndex];

  return (
    <div className="bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">What Our Users Say</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Hear from job seekers and employers who have found success with JobSpark.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="border-none shadow-lg">
            <CardContent className="p-8 md:p-12">
              <div className="flex flex-col items-center text-center">
                <div className="mb-6">
                  <Avatar className="h-20 w-20 border-4 border-primary/20">
                    <AvatarImage src={activeTestimonial.avatar} alt={activeTestimonial.name} />
                    <AvatarFallback>{activeTestimonial.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                </div>
                <blockquote className="text-xl italic text-gray-700 mb-6">
                  "{activeTestimonial.content}"
                </blockquote>
                <div className="mt-4">
                  <div className="font-semibold text-lg">{activeTestimonial.name}</div>
                  <div className="text-gray-500">
                    {activeTestimonial.role} at {activeTestimonial.company}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="flex justify-center mt-8 space-x-4">
            <Button
              variant="outline"
              size="icon"
              onClick={prevTestimonial}
              className="rounded-full"
              aria-label="Previous testimonial"
            >
              ←
            </Button>
            <div className="flex space-x-2">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveIndex(idx)}
                  className={`w-3 h-3 rounded-full ${
                    idx === activeIndex ? "bg-primary" : "bg-gray-300"
                  }`}
                  aria-label={`Go to testimonial ${idx + 1}`}
                />
              ))}
            </div>
            <Button
              variant="outline"
              size="icon"
              onClick={nextTestimonial}
              className="rounded-full"
              aria-label="Next testimonial"
            >
              →
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialSection;
