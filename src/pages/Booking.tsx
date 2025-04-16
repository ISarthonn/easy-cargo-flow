
import { useState } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Truck, Ship, Plane, AlertCircle, CheckCircle } from "lucide-react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

const Booking = () => {
  const [step, setStep] = useState(1);
  const [success, setSuccess] = useState(false);
  const [formData, setFormData] = useState({
    shipmentType: "land",
    pickupLocation: "",
    deliveryLocation: "",
    pickupDate: "",
    weight: "",
    dimensions: "",
    cargoType: "",
    specialRequirements: "",
    contactName: "",
    contactEmail: "",
    contactPhone: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleRadioChange = (value: string) => {
    setFormData(prev => ({ ...prev, shipmentType: value }));
  };

  const nextStep = () => {
    setStep(step + 1);
  };

  const prevStep = () => {
    setStep(step - 1);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, submit to backend here
    console.log("Form submitted:", formData);
    // Show success message
    setSuccess(true);
  };

  if (success) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow py-16 bg-gray-50">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <Card className="border-green-200 shadow-lg">
              <CardHeader className="bg-green-50 border-b border-green-100">
                <div className="flex items-center justify-center mb-4">
                  <CheckCircle className="h-16 w-16 text-green-500" />
                </div>
                <CardTitle className="text-center text-2xl text-green-700">Booking Successful!</CardTitle>
                <CardDescription className="text-center text-green-600">
                  Your cargo booking has been submitted successfully.
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="space-y-4">
                  <div>
                    <h3 className="font-medium text-gray-700">Booking Reference</h3>
                    <p className="text-2xl font-bold text-secondary">#TG{Math.floor(100000 + Math.random() * 900000)}</p>
                  </div>
                  
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h3 className="font-medium text-gray-700 mb-2">Shipment Details</h3>
                    <ul className="space-y-2">
                      <li className="flex justify-between">
                        <span className="text-gray-600">Shipment Type:</span>
                        <span className="font-medium">{formData.shipmentType.charAt(0).toUpperCase() + formData.shipmentType.slice(1)} Transport</span>
                      </li>
                      <li className="flex justify-between">
                        <span className="text-gray-600">From:</span>
                        <span className="font-medium">{formData.pickupLocation}</span>
                      </li>
                      <li className="flex justify-between">
                        <span className="text-gray-600">To:</span>
                        <span className="font-medium">{formData.deliveryLocation}</span>
                      </li>
                      <li className="flex justify-between">
                        <span className="text-gray-600">Pickup Date:</span>
                        <span className="font-medium">{formData.pickupDate}</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
                    <div className="flex items-start space-x-3">
                      <AlertCircle className="h-5 w-5 text-blue-500 mt-0.5" />
                      <div>
                        <h4 className="font-medium text-blue-700">What's Next?</h4>
                        <p className="text-blue-600 text-sm">
                          You will receive a confirmation email shortly with all the details. Our team will contact you to finalize the booking and arrange for pickup.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex justify-center border-t border-gray-100 pt-6">
                <Button onClick={() => window.location.href = "/"}>
                  Return to Home
                </Button>
              </CardFooter>
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
      <main className="flex-grow py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-secondary">Book Your Shipment</h1>
            <p className="text-gray-600 mt-2">Complete the form below to schedule your cargo delivery</p>
          </div>

          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="p-4 bg-gray-50 border-b">
              <div className="flex justify-between">
                <div className={`flex-1 text-center ${step >= 1 ? "text-primary" : "text-gray-400"}`}>
                  <div className="inline-flex items-center justify-center w-8 h-8 rounded-full border-2 border-current mb-2">
                    1
                  </div>
                  <div className="text-sm font-medium">Shipment Type</div>
                </div>
                <div className={`flex-1 text-center ${step >= 2 ? "text-primary" : "text-gray-400"}`}>
                  <div className="inline-flex items-center justify-center w-8 h-8 rounded-full border-2 border-current mb-2">
                    2
                  </div>
                  <div className="text-sm font-medium">Cargo Details</div>
                </div>
                <div className={`flex-1 text-center ${step >= 3 ? "text-primary" : "text-gray-400"}`}>
                  <div className="inline-flex items-center justify-center w-8 h-8 rounded-full border-2 border-current mb-2">
                    3
                  </div>
                  <div className="text-sm font-medium">Contact Info</div>
                </div>
              </div>
            </div>

            <form onSubmit={handleSubmit}>
              <div className="p-6">
                {step === 1 && (
                  <div className="space-y-6">
                    <div>
                      <Label className="text-lg font-medium mb-4 block">Select Shipment Type</Label>
                      <RadioGroup 
                        value={formData.shipmentType} 
                        onValueChange={handleRadioChange}
                        className="grid grid-cols-1 md:grid-cols-3 gap-4"
                      >
                        <div className={`border rounded-lg p-4 cursor-pointer ${formData.shipmentType === "land" ? "border-primary bg-primary/5" : "border-gray-200"}`}>
                          <RadioGroupItem value="land" id="land" className="sr-only" />
                          <Label htmlFor="land" className="cursor-pointer flex flex-col items-center text-center">
                            <Truck className={`h-10 w-10 mb-3 ${formData.shipmentType === "land" ? "text-primary" : "text-gray-400"}`} />
                            <span className="font-medium">Land Transport</span>
                            <span className="text-sm text-gray-500 mt-1">Road freight for domestic and cross-border logistics</span>
                          </Label>
                        </div>

                        <div className={`border rounded-lg p-4 cursor-pointer ${formData.shipmentType === "sea" ? "border-primary bg-primary/5" : "border-gray-200"}`}>
                          <RadioGroupItem value="sea" id="sea" className="sr-only" />
                          <Label htmlFor="sea" className="cursor-pointer flex flex-col items-center text-center">
                            <Ship className={`h-10 w-10 mb-3 ${formData.shipmentType === "sea" ? "text-primary" : "text-gray-400"}`} />
                            <span className="font-medium">Sea Freight</span>
                            <span className="text-sm text-gray-500 mt-1">Ocean shipping for large cargo volumes</span>
                          </Label>
                        </div>

                        <div className={`border rounded-lg p-4 cursor-pointer ${formData.shipmentType === "air" ? "border-primary bg-primary/5" : "border-gray-200"}`}>
                          <RadioGroupItem value="air" id="air" className="sr-only" />
                          <Label htmlFor="air" className="cursor-pointer flex flex-col items-center text-center">
                            <Plane className={`h-10 w-10 mb-3 ${formData.shipmentType === "air" ? "text-primary" : "text-gray-400"}`} />
                            <span className="font-medium">Air Freight</span>
                            <span className="text-sm text-gray-500 mt-1">Fast delivery for time-sensitive cargo</span>
                          </Label>
                        </div>
                      </RadioGroup>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="pickupLocation">Pickup Location</Label>
                        <Input 
                          id="pickupLocation" 
                          name="pickupLocation" 
                          placeholder="City, Country" 
                          value={formData.pickupLocation}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="deliveryLocation">Delivery Location</Label>
                        <Input 
                          id="deliveryLocation" 
                          name="deliveryLocation" 
                          placeholder="City, Country" 
                          value={formData.deliveryLocation}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="pickupDate">Pickup Date</Label>
                      <Input 
                        id="pickupDate" 
                        name="pickupDate" 
                        type="date" 
                        value={formData.pickupDate}
                        onChange={handleChange}
                        min={new Date().toISOString().split('T')[0]}
                        required
                      />
                    </div>
                  </div>
                )}

                {step === 2 && (
                  <div className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="weight">Cargo Weight (kg)</Label>
                        <Input 
                          id="weight" 
                          name="weight" 
                          type="number" 
                          placeholder="e.g., 500" 
                          value={formData.weight}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="dimensions">Dimensions (L×W×H cm)</Label>
                        <Input 
                          id="dimensions" 
                          name="dimensions" 
                          placeholder="e.g., 100×80×70" 
                          value={formData.dimensions}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="cargoType">Cargo Type</Label>
                      <Select 
                        value={formData.cargoType} 
                        onValueChange={(value) => handleSelectChange("cargoType", value)}
                        required
                      >
                        <SelectTrigger id="cargoType">
                          <SelectValue placeholder="Select cargo type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="general">General Merchandise</SelectItem>
                          <SelectItem value="perishable">Perishable Goods</SelectItem>
                          <SelectItem value="fragile">Fragile Items</SelectItem>
                          <SelectItem value="hazardous">Hazardous Materials</SelectItem>
                          <SelectItem value="electronics">Electronics</SelectItem>
                          <SelectItem value="vehicles">Vehicles</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="specialRequirements">Special Requirements</Label>
                      <Textarea 
                        id="specialRequirements" 
                        name="specialRequirements" 
                        placeholder="Any special handling instructions or requirements" 
                        value={formData.specialRequirements}
                        onChange={handleChange}
                        rows={4}
                      />
                    </div>
                  </div>
                )}

                {step === 3 && (
                  <div className="space-y-6">
                    <div className="space-y-2">
                      <Label htmlFor="contactName">Contact Name</Label>
                      <Input 
                        id="contactName" 
                        name="contactName" 
                        placeholder="Full Name" 
                        value={formData.contactName}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="contactEmail">Email Address</Label>
                      <Input 
                        id="contactEmail" 
                        name="contactEmail" 
                        type="email" 
                        placeholder="your@email.com" 
                        value={formData.contactEmail}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="contactPhone">Phone Number</Label>
                      <Input 
                        id="contactPhone" 
                        name="contactPhone" 
                        placeholder="Include country code" 
                        value={formData.contactPhone}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
                      <div className="flex items-start space-x-3">
                        <AlertCircle className="h-5 w-5 text-blue-500 mt-0.5" />
                        <div>
                          <h4 className="font-medium text-blue-700">Confirmation Process</h4>
                          <p className="text-blue-600 text-sm">
                            After submission, you'll receive a booking confirmation email with details and estimated pricing. Our team will contact you to finalize arrangements.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              <div className="px-6 py-4 bg-gray-50 border-t border-gray-200 flex justify-between">
                {step > 1 ? (
                  <Button type="button" variant="outline" onClick={prevStep}>
                    Previous
                  </Button>
                ) : (
                  <div></div>
                )}
                
                {step < 3 ? (
                  <Button type="button" onClick={nextStep}>
                    Next
                  </Button>
                ) : (
                  <Button type="submit" className="bg-accent hover:bg-accent/90">
                    Submit Booking
                  </Button>
                )}
              </div>
            </form>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Booking;
