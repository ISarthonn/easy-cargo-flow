
import { useState } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Phone, Mail, MapPin, MessageSquare, Clock, Send, CheckCircle, Headset } from "lucide-react";

const Support = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (value: string) => {
    setFormData(prev => ({ ...prev, subject: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, submit to backend here
    console.log("Form submitted:", formData);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow py-16 bg-gray-50">
          <div className="max-w-xl mx-auto px-4 sm:px-6 lg:px-8">
            <Card className="border-green-200 shadow-lg">
              <CardHeader className="bg-green-50 border-b border-green-100">
                <div className="flex items-center justify-center mb-4">
                  <CheckCircle className="h-16 w-16 text-green-500" />
                </div>
                <CardTitle className="text-center text-2xl text-green-700">Message Sent!</CardTitle>
              </CardHeader>
              <CardContent className="pt-6 text-center">
                <p className="text-gray-700 mb-6">
                  Thank you for contacting us. Our support team will get back to you shortly.
                </p>
                <Button onClick={() => window.location.href = "/"}>
                  Return to Home
                </Button>
              </CardContent>
            </Card>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-primary/5 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-3xl md:text-4xl font-bold text-secondary mb-4">How Can We Help You?</h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
              Our dedicated support team is ready to assist you with any questions or concerns about our cargo services.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button className="bg-primary hover:bg-primary/90" size="lg">
                <Phone className="mr-2 h-5 w-5" />
                Call Us
              </Button>
              <Button variant="outline" size="lg">
                <Mail className="mr-2 h-5 w-5" />
                Email Support
              </Button>
            </div>
          </div>
        </section>

        {/* Contact Information */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card>
                <CardContent className="pt-6 text-center">
                  <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Phone className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-secondary mb-2">Call Us</h3>
                  <p className="text-gray-600 mb-2">Available 24/7 for urgent matters</p>
                  <p className="text-lg font-medium">+1 (555) 123-4567</p>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="pt-6 text-center">
                  <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Mail className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-secondary mb-2">Email Us</h3>
                  <p className="text-gray-600 mb-2">We'll respond within 24 hours</p>
                  <p className="text-lg font-medium">support@trailgo.com</p>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="pt-6 text-center">
                  <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <MapPin className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-secondary mb-2">Visit Us</h3>
                  <p className="text-gray-600 mb-2">Our headquarters location</p>
                  <p className="text-lg font-medium">123 Logistics Way, Shipping City</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Contact Form */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl font-bold text-secondary mb-6">Contact Us</h2>
                <p className="text-gray-600 mb-8">
                  Fill out the form below and our team will get back to you as soon as possible. We appreciate your feedback and questions.
                </p>
                
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-primary/10 p-3 rounded-full">
                      <MessageSquare className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-secondary mb-1">Live Chat</h3>
                      <p className="text-gray-600">Chat with our support team directly from our website.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="bg-primary/10 p-3 rounded-full">
                      <Clock className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-secondary mb-1">Business Hours</h3>
                      <p className="text-gray-600">Monday - Friday: 8:00 AM - 8:00 PM</p>
                      <p className="text-gray-600">Saturday: 9:00 AM - 5:00 PM</p>
                      <p className="text-gray-600">Sunday: Closed</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="bg-primary/10 p-3 rounded-full">
                      <Headset className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-secondary mb-1">Dedicated Support</h3>
                      <p className="text-gray-600">Our enterprise customers receive dedicated account managers and priority support.</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div>
                <Card>
                  <CardHeader className="bg-primary/5 border-b">
                    <CardTitle className="flex items-center">
                      <Send className="h-5 w-5 mr-2" />
                      Send Us a Message
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="pt-6">
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="name">Your Name</Label>
                          <Input 
                            id="name" 
                            name="name" 
                            value={formData.name}
                            onChange={handleChange}
                            required 
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="email">Email Address</Label>
                          <Input 
                            id="email" 
                            name="email" 
                            type="email" 
                            value={formData.email}
                            onChange={handleChange}
                            required 
                          />
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone Number (Optional)</Label>
                        <Input 
                          id="phone" 
                          name="phone" 
                          value={formData.phone}
                          onChange={handleChange}
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="subject">Subject</Label>
                        <Select 
                          value={formData.subject} 
                          onValueChange={handleSelectChange}
                          required
                        >
                          <SelectTrigger id="subject">
                            <SelectValue placeholder="Select a subject" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="general">General Inquiry</SelectItem>
                            <SelectItem value="booking">Booking Information</SelectItem>
                            <SelectItem value="tracking">Tracking Issues</SelectItem>
                            <SelectItem value="pricing">Pricing & Quotes</SelectItem>
                            <SelectItem value="complaint">File a Complaint</SelectItem>
                            <SelectItem value="feedback">Feedback & Suggestions</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="message">Your Message</Label>
                        <Textarea 
                          id="message" 
                          name="message" 
                          rows={5} 
                          value={formData.message}
                          onChange={handleChange}
                          required 
                        />
                      </div>
                      
                      <Button type="submit" className="w-full bg-accent hover:bg-accent/90">
                        Send Message
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-secondary mb-4">Frequently Asked Questions</h2>
              <p className="text-lg text-gray-600">
                Find quick answers to common questions about our cargo services
              </p>
            </div>
            
            <div className="space-y-6">
              <Card>
                <CardHeader className="cursor-pointer">
                  <CardTitle className="text-lg">How do I track my shipment?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    You can track your shipment by entering your tracking number on our tracking page. 
                    The tracking number is provided in your booking confirmation email.
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader className="cursor-pointer">
                  <CardTitle className="text-lg">What shipping options do you offer?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    We offer land, sea, and air freight options to meet your specific needs. 
                    Each option has different delivery timeframes and pricing structures.
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader className="cursor-pointer">
                  <CardTitle className="text-lg">How are shipping costs calculated?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Shipping costs are calculated based on distance, weight, dimensions, cargo type, and selected shipping method. 
                    You can get an instant quote by using our booking form.
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader className="cursor-pointer">
                  <CardTitle className="text-lg">Do you offer insurance for shipments?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Yes, we offer cargo insurance options to protect your shipment against loss or damage during transit. 
                    Insurance can be added during the booking process.
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader className="cursor-pointer">
                  <CardTitle className="text-lg">What is your cancellation policy?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Bookings can be canceled up to 24 hours before the scheduled pickup time without penalty. 
                    Cancellations made within 24 hours may incur a cancellation fee.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Support;
