
import { Heart, Facebook, Instagram, Twitter, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center mb-4">
              <Heart className="h-8 w-8 text-primary mr-3" />
              <h3 className="font-serif text-2xl font-bold">Dream Weddings</h3>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Creating unforgettable wedding experiences with passion, creativity, and attention to every detail.
            </p>
          </div>
          
          {/* Services */}
          <div>
            <h4 className="font-serif text-xl font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-primary transition-colors">Full-Service Planning</a></li>
              <li><a href="#" className="text-gray-400 hover:text-primary transition-colors">Day-Of Coordination</a></li>
              <li><a href="#" className="text-gray-400 hover:text-primary transition-colors">Destination Weddings</a></li>
              <li><a href="#" className="text-gray-400 hover:text-primary transition-colors">Custom Packages</a></li>
            </ul>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-xl font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-primary transition-colors">About Us</a></li>
              <li><a href="#" className="text-gray-400 hover:text-primary transition-colors">Portfolio</a></li>
              <li><a href="#" className="text-gray-400 hover:text-primary transition-colors">Testimonials</a></li>
              <li><a href="#" className="text-gray-400 hover:text-primary transition-colors">Contact</a></li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h4 className="font-serif text-xl font-semibold mb-4">Contact</h4>
            <div className="space-y-2 text-gray-400">
              <p>(555) 123-4567</p>
              <p>hello@dreamweddings.com</p>
              <p>123 Wedding Lane<br />Los Angeles, CA 90210</p>
            </div>
          </div>
        </div>
        
        {/* Social Media & Copyright */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="flex space-x-6 mb-4 md:mb-0">
            <a href="#" className="text-gray-400 hover:text-primary transition-colors">
              <Facebook className="h-6 w-6" />
            </a>
            <a href="#" className="text-gray-400 hover:text-primary transition-colors">
              <Instagram className="h-6 w-6" />
            </a>
            <a href="#" className="text-gray-400 hover:text-primary transition-colors">
              <Twitter className="h-6 w-6" />
            </a>
            <a href="#" className="text-gray-400 hover:text-primary transition-colors">
              <Youtube className="h-6 w-6" />
            </a>
          </div>
          <p className="text-gray-400 text-center">
            © 2024 Dream Weddings. All rights reserved. Made with ❤️ for love stories.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
