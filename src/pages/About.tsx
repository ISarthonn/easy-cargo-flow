
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Truck, Clock, Users, Target, Shield, BarChart, CheckCircle } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-secondary text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-4xl font-bold mb-6">About TrailGo</h1>
                <p className="text-lg text-gray-200 mb-8">
                  We're on a mission to simplify logistics and revolutionize cargo delivery with cutting-edge technology and exceptional service.
                </p>
                <Button asChild className="bg-primary hover:bg-primary/90">
                  <Link to="/support">Get in Touch</Link>
                </Button>
              </div>
              <div className="hidden md:block">
                <div className="relative">
                  <div className="absolute -top-6 -right-6 w-20 h-20 bg-primary/20 rounded-lg"></div>
                  <div className="absolute -bottom-6 -left-6 w-20 h-20 bg-primary/20 rounded-lg"></div>
                  <div className="relative bg-white/10 backdrop-blur-sm p-8 rounded-lg">
                    <div className="grid grid-cols-2 gap-6">
                      <div className="text-center">
                        <p className="text-4xl font-bold text-primary">5k+</p>
                        <p className="text-sm mt-2">Shipments Monthly</p>
                      </div>
                      <div className="text-center">
                        <p className="text-4xl font-bold text-primary">50+</p>
                        <p className="text-sm mt-2">Countries Served</p>
                      </div>
                      <div className="text-center">
                        <p className="text-4xl font-bold text-primary">95%</p>
                        <p className="text-sm mt-2">On-time Delivery</p>
                      </div>
                      <div className="text-center">
                        <p className="text-4xl font-bold text-primary">24/7</p>
                        <p className="text-sm mt-2">Support Available</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Story */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <img 
                  src="https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80" 
                  alt="Logistics office" 
                  className="rounded-lg shadow-lg object-cover h-80 w-full"
                />
              </div>
              <div>
                <h2 className="text-3xl font-bold text-secondary mb-6">Our Story</h2>
                <p className="text-gray-600 mb-4">
                  Founded in 2018, TrailGo emerged from a simple observation: logistics was too complicated and inefficient for most businesses. Our founders, with decades of experience in transportation and technology, set out to create a solution that would make cargo booking and delivery as simple as ordering a ride.
                </p>
                <p className="text-gray-600 mb-4">
                  What started as a small operation in a single city has now grown into a global logistics platform serving thousands of businesses across continents. Our journey has been guided by our commitment to reliability, transparency, and customer satisfaction.
                </p>
                <p className="text-gray-600">
                  Today, we continue to innovate and expand our services, leveraging the latest technology to provide seamless logistics solutions for businesses of all sizes.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Our Values */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-secondary mb-4">Our Core Values</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                The principles that guide our decisions and define our approach to logistics
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  <Clock className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-secondary mb-2">Reliability</h3>
                <p className="text-gray-600">
                  We understand the importance of timely deliveries and make it our priority to ensure your cargo reaches its destination as scheduled.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  <Target className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-secondary mb-2">Transparency</h3>
                <p className="text-gray-600">
                  From pricing to tracking, we believe in complete transparency at every stage of the logistics process.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  <Shield className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-secondary mb-2">Security</h3>
                <p className="text-gray-600">
                  The safety of your cargo is paramount. We implement rigorous security measures to protect your shipments.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  <BarChart className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-secondary mb-2">Efficiency</h3>
                <p className="text-gray-600">
                  We continuously optimize our logistics network to provide faster, more cost-effective delivery solutions.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-secondary mb-2">Customer Focus</h3>
                <p className="text-gray-600">
                  Your satisfaction drives our business. We tailor our services to meet your specific logistics needs.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  <Truck className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-secondary mb-2">Innovation</h3>
                <p className="text-gray-600">
                  We embrace technology and innovative solutions to stay ahead in the rapidly evolving logistics industry.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Our Team */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-secondary mb-4">Meet Our Leadership</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                The experienced team driving TrailGo's mission and vision
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <img 
                  src="https://randomuser.me/api/portraits/men/32.jpg" 
                  alt="CEO" 
                  className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-xl font-semibold text-secondary">Robert Chen</h3>
                <p className="text-primary font-medium mb-2">Chief Executive Officer</p>
                <p className="text-gray-600 text-sm">
                  Former logistics executive with 20+ years of industry experience.
                </p>
              </div>

              <div className="text-center">
                <img 
                  src="https://randomuser.me/api/portraits/women/44.jpg" 
                  alt="COO" 
                  className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-xl font-semibold text-secondary">Sarah Johnson</h3>
                <p className="text-primary font-medium mb-2">Chief Operations Officer</p>
                <p className="text-gray-600 text-sm">
                  Operations specialist with expertise in supply chain optimization.
                </p>
              </div>

              <div className="text-center">
                <img 
                  src="https://randomuser.me/api/portraits/men/68.jpg" 
                  alt="CTO" 
                  className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-xl font-semibold text-secondary">Michael Rodriguez</h3>
                <p className="text-primary font-medium mb-2">Chief Technology Officer</p>
                <p className="text-gray-600 text-sm">
                  Tech innovator with a passion for applying AI to logistics challenges.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-16 bg-gradient-to-br from-primary/5 to-primary/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-secondary mb-4">Why Choose TrailGo</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Here's what sets us apart in the logistics industry
              </p>
            </div>

            <div className="space-y-6">
              <div className="bg-white rounded-lg shadow-md p-6 flex items-start space-x-4">
                <div className="bg-primary/10 p-3 rounded-full flex-shrink-0">
                  <CheckCircle className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-secondary mb-2">Seamless Booking Process</h3>
                  <p className="text-gray-600">
                    Our intuitive platform allows you to book shipments in minutes, not hours. With just a few clicks, your cargo is ready for pickup.
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-md p-6 flex items-start space-x-4">
                <div className="bg-primary/10 p-3 rounded-full flex-shrink-0">
                  <CheckCircle className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-secondary mb-2">Real-time Tracking & Updates</h3>
                  <p className="text-gray-600">
                    Stay informed with real-time updates on your shipment's location and status. Our advanced tracking system provides complete visibility throughout the delivery journey.
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-md p-6 flex items-start space-x-4">
                <div className="bg-primary/10 p-3 rounded-full flex-shrink-0">
                  <CheckCircle className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-secondary mb-2">Competitive & Transparent Pricing</h3>
                  <p className="text-gray-600">
                    No hidden fees or surprises. Our pricing is transparent and competitive, with options to suit various budget requirements.
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-md p-6 flex items-start space-x-4">
                <div className="bg-primary/10 p-3 rounded-full flex-shrink-0">
                  <CheckCircle className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-secondary mb-2">Reliable Delivery Network</h3>
                  <p className="text-gray-600">
                    With partners across the globe, we ensure reliable delivery regardless of destination. Our extensive network allows us to offer flexible shipping options.
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-md p-6 flex items-start space-x-4">
                <div className="bg-primary/10 p-3 rounded-full flex-shrink-0">
                  <CheckCircle className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-secondary mb-2">Exceptional Customer Support</h3>
                  <p className="text-gray-600">
                    Our dedicated support team is available 24/7 to address your concerns and answer any questions you may have about your shipment.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 bg-secondary text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Experience Better Logistics?</h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto mb-8">
              Join thousands of businesses that trust TrailGo for their cargo delivery needs.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button asChild size="lg" className="bg-accent hover:bg-accent/90">
                <Link to="/booking">
                  Book a Shipment
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
      </main>
      <Footer />
    </div>
  );
};

export default About;
