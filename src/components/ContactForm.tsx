
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { format } from "date-fns";
import { CalendarIcon, Heart, Mail, Phone, MapPin } from "lucide-react";
import { cn } from "@/lib/utils";
import { toast } from "@/hooks/use-toast";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    weddingDate: undefined as Date | undefined,
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Thank you for your inquiry!",
      description: "We'll get back to you within 24 hours to discuss your dream wedding.",
    });
    console.log("Form submitted:", formData);
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <section className="py-20 bg-blush">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Let's Plan Your Perfect Day
          </h2>
          <div className="w-24 h-1 bg-gold mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to start planning your dream wedding? Get in touch with us for a free consultation and let's bring your vision to life.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <Card className="shadow-2xl border-0 animate-fade-in-up">
            <CardHeader className="text-center">
              <Heart className="h-12 w-12 text-primary mx-auto mb-4" />
              <CardTitle className="font-serif text-3xl text-gray-800">
                Schedule Your Free Consultation
              </CardTitle>
            </CardHeader>
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <Input
                    type="text"
                    value={formData.name}
                    onChange={(e) => handleInputChange("name", e.target.value)}
                    className="w-full"
                    placeholder="Enter your full name"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <Input
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    className="w-full"
                    placeholder="Enter your email address"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Wedding Date
                  </label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant="outline"
                        className={cn(
                          "w-full justify-start text-left font-normal",
                          !formData.weddingDate && "text-muted-foreground"
                        )}
                      >
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {formData.weddingDate ? format(formData.weddingDate, "PPP") : "Select your wedding date"}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <Calendar
                        mode="single"
                        selected={formData.weddingDate}
                        onSelect={(date) => setFormData(prev => ({ ...prev, weddingDate: date }))}
                        disabled={(date) => date < new Date()}
                        initialFocus
                        className={cn("p-3 pointer-events-auto")}
                      />
                    </PopoverContent>
                  </Popover>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Tell us about your dream wedding
                  </label>
                  <Textarea
                    value={formData.message}
                    onChange={(e) => handleInputChange("message", e.target.value)}
                    className="w-full h-32 resize-none"
                    placeholder="Share your vision, guest count, budget range, and any special requests..."
                  />
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full bg-primary hover:bg-primary/90 text-white py-3 text-lg font-medium rounded-full transition-all duration-300 transform hover:scale-105"
                >
                  Send My Inquiry
                </Button>
              </form>
            </CardContent>
          </Card>
          
          {/* Contact Information */}
          <div className="space-y-8 animate-fade-in-up">
            <Card className="p-8 shadow-xl border-0 bg-white">
              <h3 className="font-serif text-2xl font-semibold text-gray-800 mb-6">
                Get In Touch
              </h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Phone className="h-6 w-6 text-primary mr-4" />
                  <div>
                    <p className="font-medium text-gray-800">(555) 123-4567</p>
                    <p className="text-sm text-gray-600">Mon-Fri 9AM-6PM</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Mail className="h-6 w-6 text-primary mr-4" />
                  <div>
                    <p className="font-medium text-gray-800">hello@dreamweddings.com</p>
                    <p className="text-sm text-gray-600">We respond within 24 hours</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <MapPin className="h-6 w-6 text-primary mr-4" />
                  <div>
                    <p className="font-medium text-gray-800">123 Wedding Lane</p>
                    <p className="text-sm text-gray-600">Los Angeles, CA 90210</p>
                  </div>
                </div>
              </div>
            </Card>
            
            <Card className="p-8 shadow-xl border-0 bg-rose">
              <h3 className="font-serif text-2xl font-semibold text-gray-800 mb-4">
                Why Choose Us?
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-gold rounded-full mr-3 mt-2"></div>
                  <p className="text-gray-700">Personalized planning process tailored to your style</p>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-gold rounded-full mr-3 mt-2"></div>
                  <p className="text-gray-700">Extensive network of trusted vendors and venues</p>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-gold rounded-full mr-3 mt-2"></div>
                  <p className="text-gray-700">Full-service coordination from start to finish</p>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-gold rounded-full mr-3 mt-2"></div>
                  <p className="text-gray-700">Stress-free experience with expert guidance</p>
                </li>
              </ul>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
