
import { Star } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Import Manager",
    company: "Global Retail Inc.",
    quote: "TrailGo has transformed our logistics operations. The real-time tracking feature gives us complete visibility over our shipments, reducing delays and improving customer satisfaction.",
    rating: 5,
    image: "https://randomuser.me/api/portraits/women/32.jpg",
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Supply Chain Director",
    company: "Tech Solutions Ltd.",
    quote: "We've been using TrailGo for over a year now, and their service has been consistently reliable. Their transparent pricing model helps us budget effectively for our logistics needs.",
    rating: 5,
    image: "https://randomuser.me/api/portraits/men/15.jpg",
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    role: "Operations Manager",
    company: "Fresh Foods Co.",
    quote: "For our time-sensitive deliveries, TrailGo has been a game-changer. Their air freight service ensures our perishable goods reach markets quickly and in perfect condition.",
    rating: 4,
    image: "https://randomuser.me/api/portraits/women/63.jpg",
  },
];

const TestimonialsSection = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-primary/5 to-primary/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-secondary mb-4">What Our Clients Say</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Discover why businesses trust TrailGo for their logistics needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div 
              key={testimonial.id}
              className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
            >
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i}
                    className={`h-5 w-5 ${i < testimonial.rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`}
                  />
                ))}
              </div>
              <p className="text-gray-600 mb-6 italic">"{testimonial.quote}"</p>
              <div className="flex items-center">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name}
                  className="h-12 w-12 rounded-full mr-4"
                />
                <div>
                  <h4 className="font-semibold text-secondary">{testimonial.name}</h4>
                  <p className="text-sm text-gray-500">{testimonial.role}, {testimonial.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
