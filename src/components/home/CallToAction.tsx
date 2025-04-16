
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const CallToAction = () => {
  return (
    <section className="py-16 bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold text-white mb-4">Ready to Simplify Your Logistics?</h2>
        <p className="text-lg text-gray-300 max-w-3xl mx-auto mb-8">
          Join thousands of businesses that trust TrailGo for their cargo delivery needs. 
          Get started today and experience seamless logistics management.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button asChild size="lg" className="bg-accent hover:bg-accent/90">
            <Link to="/booking">
              Book a Shipment <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="text-white border-white hover:bg-white/10">
            <Link to="/support">
              Contact Our Team
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
