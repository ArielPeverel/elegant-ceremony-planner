
import { Card, CardContent } from "@/components/ui/card";
import { Heart, Users, Calendar, Star } from "lucide-react";

const About = () => {
  const stats = [
    { icon: Heart, value: "500+", label: "Weddings Planned" },
    { icon: Users, value: "1000+", label: "Happy Couples" },
    { icon: Calendar, value: "8+", label: "Years Experience" },
    { icon: Star, value: "5.0", label: "Average Rating" },
  ];

  return (
    <section className="py-20 bg-blush">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            About Our Story
          </h2>
          <div className="w-24 h-1 bg-gold mx-auto mb-8"></div>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="animate-fade-in-up">
            <img 
              src="https://images.unsplash.com/photo-1606800052052-a08af7148866?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80"
              alt="Wedding planner working"
              className="rounded-2xl shadow-2xl"
            />
          </div>
          <div className="animate-fade-in-up">
            <h3 className="font-serif text-3xl font-semibold text-gray-800 mb-6">
              Passionate About Perfect Moments
            </h3>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              For over eight years, we've been turning wedding dreams into breathtaking realities. Our journey began with a simple belief: every love story deserves a perfect celebration.
            </p>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              What started as a passion project has grown into one of the region's most trusted wedding planning companies. We've had the privilege of orchestrating over 500 weddings, each one unique and magical in its own way.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Our team combines creative vision with meticulous planning, ensuring every detail reflects your personal style and creates memories that will last a lifetime.
            </p>
          </div>
        </div>
        
        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <Card key={index} className="text-center p-6 bg-white shadow-lg hover:shadow-xl transition-all duration-300 animate-scale-hover">
              <CardContent className="p-0">
                <stat.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                <div className="font-serif text-3xl font-bold text-gray-800 mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-600 font-medium">
                  {stat.label}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
