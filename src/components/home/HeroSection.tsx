
import { ArrowRight, Package, Clock, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <div className="relative bg-gradient-to-r from-secondary to-secondary/90 overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-10">
          <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="w-full h-full">
            <path d="M0,0 L100,0 L100,100 L0,100 Z" fill="url(#hero-pattern)" />
          </svg>
          <defs>
            <pattern id="hero-pattern" patternUnits="userSpaceOnUse" width="20" height="20">
              <rect x="0" y="0" width="4" height="4" className="text-white" fill="currentColor" />
            </pattern>
          </defs>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-6">
              Fast & Reliable Cargo Delivery Solutions
            </h1>
            <p className="text-lg text-gray-200 mb-8">
              Schedule, track, and manage your cargo deliveries with ease. Our logistics platform ensures your shipments arrive safely and on time.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="bg-accent hover:bg-accent/90">
                <Link to="/booking">
                  Book Shipment <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="text-white border-white hover:bg-white/10">
                <Link to="/tracking">
                  Track Delivery
                </Link>
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="mt-12 grid grid-cols-3 gap-4">
              <div className="flex items-center space-x-2">
                <Package className="h-5 w-5 text-primary" />
                <span className="text-white font-medium">10k+ Deliveries</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="h-5 w-5 text-primary" />
                <span className="text-white font-medium">On-time Service</span>
              </div>
              <div className="flex items-center space-x-2">
                <Shield className="h-5 w-5 text-primary" />
                <span className="text-white font-medium">Safe Transit</span>
              </div>
            </div>
          </div>

          <div className="hidden md:block relative">
            <div className="bg-white rounded-lg shadow-xl p-6 transform rotate-3 scale-95 opacity-25 absolute top-8 right-8"></div>
            <div className="bg-white rounded-lg shadow-xl p-6 transform -rotate-2 scale-95 opacity-50 absolute top-4 right-4"></div>
            <div className="bg-white rounded-lg shadow-xl p-6 relative z-10">
              <div className="bg-primary/10 rounded-lg p-4 mb-4">
                <h3 className="text-lg font-semibold text-secondary mb-2">Quick Quote</h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-600">From:</span>
                    <span className="font-medium">Los Angeles, USA</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">To:</span>
                    <span className="font-medium">New York, USA</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Weight:</span>
                    <span className="font-medium">250 kg</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Estimated Cost:</span>
                    <span className="font-medium text-accent">$1,250.00</span>
                  </div>
                </div>
                <Button className="w-full mt-4 bg-primary hover:bg-primary/90">
                  Book This Route
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
