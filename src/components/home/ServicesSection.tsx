
import { TruckIcon, Ship, Plane, ArchiveIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const services = [
  {
    id: "land",
    title: "Land Transport",
    description: "Efficient road freight solutions for domestic and cross-border logistics with flexible scheduling options.",
    icon: TruckIcon,
    color: "bg-blue-50",
    iconColor: "text-blue-600",
  },
  {
    id: "sea",
    title: "Sea Freight",
    description: "Reliable ocean shipping services for cost-effective transportation of large cargo volumes.",
    icon: Ship,
    color: "bg-teal-50",
    iconColor: "text-teal-600",
  },
  {
    id: "air",
    title: "Air Freight",
    description: "Express air cargo services for time-sensitive shipments requiring rapid delivery.",
    icon: Plane,
    color: "bg-amber-50",
    iconColor: "text-amber-600",
  },
  {
    id: "warehouse",
    title: "Warehousing",
    description: "Secure storage solutions with inventory management for your distribution needs.",
    icon: ArchiveIcon,
    color: "bg-indigo-50",
    iconColor: "text-indigo-600",
  },
];

const ServicesSection = () => {
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-secondary mb-4">Our Services</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Comprehensive logistics solutions tailored to meet your cargo transportation needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => (
            <div key={service.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className={`${service.color} p-6`}>
                <service.icon className={`h-10 w-10 ${service.iconColor}`} />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-secondary mb-2">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <Button asChild variant="outline" className="w-full">
                  <Link to="/booking">Book Service</Link>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
