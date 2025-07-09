
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Crown, Calendar, Plane, Package } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Crown,
      title: "Full-Service Planning",
      description: "Complete wedding planning from concept to execution. We handle every detail so you can focus on celebrating your love.",
      features: ["12+ months planning", "Vendor coordination", "Timeline management", "Day-of coordination"],
      price: "Starting at $3,500"
    },
    {
      icon: Calendar,
      title: "Day-Of Coordination",
      description: "Seamlessly execute your wedding day plans with our professional coordination team ensuring everything runs perfectly.",
      features: ["Final month coordination", "Vendor management", "Timeline execution", "Emergency support"],
      price: "Starting at $1,200"
    },
    {
      icon: Plane,
      title: "Destination Weddings",
      description: "Create magical moments in breathtaking locations around the world with our destination wedding expertise.",
      features: ["Location scouting", "Travel coordination", "Local vendor network", "Guest assistance"],
      price: "Starting at $5,000"
    },
    {
      icon: Package,
      title: "Custom Packages",
      description: "Tailored wedding planning services designed specifically for your unique needs and vision.",
      features: ["Flexible planning", "A la carte services", "Budget-friendly options", "Personalized approach"],
      price: "Custom pricing"
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Our Wedding Services
          </h2>
          <div className="w-24 h-1 bg-gold mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From intimate ceremonies to grand celebrations, we offer comprehensive wedding planning services tailored to your unique vision and budget.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-2xl transition-all duration-300 animate-scale-hover border-0 shadow-lg">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-rose rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary transition-colors duration-300">
                  <service.icon className="h-8 w-8 text-primary group-hover:text-white" />
                </div>
                <CardTitle className="font-serif text-2xl text-gray-800">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                      <div className="w-2 h-2 bg-gold rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="text-center">
                  <div className="font-serif text-xl font-semibold text-primary mb-4">
                    {service.price}
                  </div>
                  <Button variant="outline" className="w-full border-primary text-primary hover:bg-primary hover:text-white">
                    Learn More
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
