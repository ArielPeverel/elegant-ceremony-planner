
import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah & Michael",
      location: "Napa Valley Wedding",
      text: "Our wedding was absolutely perfect! Every detail was flawlessly executed, and we couldn't have asked for a more magical day. The team went above and beyond to make our dreams come true.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1494790108755-2616c74107b2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80"
    },
    {
      name: "Emily & James",
      location: "Beach Resort Wedding",
      text: "From our first consultation to the last dance, everything was seamless. Our guests are still talking about how beautiful and well-organized our wedding was. Thank you for making it unforgettable!",
      rating: 5,
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80"
    },
    {
      name: "Jessica & David",
      location: "Garden Venue Wedding",
      text: "Working with this team was the best decision we made for our wedding. They listened to our vision and brought it to life in ways we never imagined. Truly exceptional service!",
      rating: 5,
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Love Stories & Testimonials
          </h2>
          <div className="w-24 h-1 bg-gold mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Nothing makes us happier than hearing from our couples about their perfect wedding day. Here's what they have to say about their experience with us.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="group hover:shadow-2xl transition-all duration-300 animate-scale-hover border-0 shadow-lg bg-blush">
              <CardContent className="p-8">
                <div className="mb-6">
                  <Quote className="h-8 w-8 text-gold mb-4" />
                  <p className="text-gray-700 leading-relaxed italic">
                    "{testimonial.text}"
                  </p>
                </div>
                
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-gold fill-current" />
                  ))}
                </div>
                
                <div className="flex items-center">
                  <img 
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className="font-serif font-semibold text-gray-800">
                      {testimonial.name}
                    </h4>
                    <p className="text-sm text-gray-600">
                      {testimonial.location}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12 animate-fade-in-up">
          <p className="text-gray-600 mb-6">Ready to create your own love story?</p>
          <button className="bg-primary hover:bg-primary/90 text-white px-8 py-3 rounded-full font-medium transition-all duration-300 transform hover:scale-105">
            Start Planning Your Wedding
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
