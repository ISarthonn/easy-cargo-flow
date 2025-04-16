
import { Truck, Map, BarChart, Shield, Clock, Headset, RefreshCw, Globe } from "lucide-react";

const features = [
  {
    title: "Fast Delivery",
    description: "Our efficient logistics network ensures your cargo reaches its destination quickly and safely.",
    icon: Truck,
  },
  {
    title: "Real-time Tracking",
    description: "Monitor your shipments with our advanced tracking system, providing updates in real-time.",
    icon: Map,
  },
  {
    title: "Transparent Pricing",
    description: "Clear, upfront pricing with no hidden fees. Get instant quotes for any route.",
    icon: BarChart,
  },
  {
    title: "Cargo Insurance",
    description: "Optional insurance coverage to protect your valuable shipments during transit.",
    icon: Shield,
  },
  {
    title: "Scheduled Deliveries",
    description: "Plan ahead with our scheduled delivery options for recurring shipments.",
    icon: Clock,
  },
  {
    title: "24/7 Support",
    description: "Our customer service team is available round the clock to assist with any queries.",
    icon: Headset,
  },
  {
    title: "Flexible Solutions",
    description: "Customizable logistics solutions designed to meet your specific requirements.",
    icon: RefreshCw,
  },
  {
    title: "Global Network",
    description: "Extensive partner network enabling deliveries to virtually any destination worldwide.",
    icon: Globe,
  },
];

const FeaturesSection = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-secondary mb-4">Why Choose TrailGo</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Our platform offers comprehensive features designed to make cargo booking and management as seamless as possible.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="bg-primary/10 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <feature.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-secondary mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
