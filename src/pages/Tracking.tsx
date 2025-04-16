
import { useState } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Search, Package, AlertCircle, Truck, CheckCircle, MapPin } from "lucide-react";

// Mock tracking data - in a real app this would come from the backend
const mockTrackingData = {
  reference: "TG728491",
  status: "In Transit",
  estimatedDelivery: "May 24, 2023",
  origin: "Los Angeles, USA",
  destination: "New York, USA",
  shipmentType: "Land Transport",
  updates: [
    {
      date: "May 20, 2023 - 09:15 AM",
      location: "Los Angeles Distribution Center",
      status: "Shipment Picked Up",
      description: "Cargo has been picked up and processed at origin facility.",
      completed: true,
    },
    {
      date: "May 21, 2023 - 02:30 PM",
      location: "Las Vegas Transfer Station",
      status: "In Transit",
      description: "Cargo in transit to next facility.",
      completed: true,
    },
    {
      date: "May 22, 2023 - 11:45 AM",
      location: "Denver Distribution Hub",
      status: "In Transit",
      description: "Shipment arrived at transit hub and being processed for next leg.",
      completed: true,
    },
    {
      date: "May 23, 2023 - 06:20 PM",
      location: "Chicago Sorting Facility",
      status: "In Transit",
      description: "Cargo in transit to final destination.",
      completed: false,
    },
    {
      date: "May 24, 2023 (Estimated)",
      location: "New York Delivery Center",
      status: "Out for Delivery",
      description: "Package will be delivered to recipient.",
      completed: false,
    },
  ],
};

const Tracking = () => {
  const [trackingNumber, setTrackingNumber] = useState("");
  const [trackingResult, setTrackingResult] = useState<typeof mockTrackingData | null>(null);
  const [error, setError] = useState("");

  const handleTracking = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    
    if (!trackingNumber.trim()) {
      setError("Please enter a tracking number");
      return;
    }
    
    // In a real app, this would make an API call to fetch tracking data
    // For this demo, we'll just return the mock data if the input has content
    if (trackingNumber.toUpperCase().startsWith("TG")) {
      setTrackingResult(mockTrackingData);
    } else {
      setError("Invalid tracking number format. Please use format: TGxxxxxx");
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow py-16 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-secondary">Track Your Shipment</h1>
            <p className="text-gray-600 mt-2">Enter your tracking number to get real-time updates on your cargo</p>
          </div>

          <Card className="mb-8">
            <CardHeader className="bg-primary/5">
              <CardTitle className="flex items-center">
                <Search className="h-5 w-5 mr-2" />
                Track a Shipment
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <form onSubmit={handleTracking} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="trackingNumber">Tracking Number</Label>
                  <div className="flex gap-3">
                    <Input
                      id="trackingNumber"
                      placeholder="e.g., TG123456"
                      value={trackingNumber}
                      onChange={(e) => setTrackingNumber(e.target.value)}
                      className="flex-1"
                    />
                    <Button type="submit" className="bg-primary hover:bg-primary/90">
                      Track
                    </Button>
                  </div>
                  {error && (
                    <div className="text-red-500 text-sm flex items-center mt-1">
                      <AlertCircle className="h-4 w-4 mr-1" />
                      {error}
                    </div>
                  )}
                </div>
                <div className="text-sm text-gray-500 italic">
                  <p>For demo purposes, enter any tracking number starting with "TG" (e.g., TG123456)</p>
                </div>
              </form>
            </CardContent>
          </Card>

          {trackingResult && (
            <div className="space-y-8">
              <Card>
                <CardHeader className="bg-secondary text-white">
                  <div className="flex justify-between items-center">
                    <CardTitle className="flex items-center">
                      <Package className="h-5 w-5 mr-2" />
                      Shipment Details
                    </CardTitle>
                    <div className="px-3 py-1 rounded-full bg-primary text-white text-sm font-medium">
                      {trackingResult.status}
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="pt-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <div className="space-y-3">
                        <div>
                          <p className="text-sm text-gray-500">Tracking Number</p>
                          <p className="font-medium">{trackingResult.reference}</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-500">Estimated Delivery</p>
                          <p className="font-medium">{trackingResult.estimatedDelivery}</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-500">Shipment Type</p>
                          <p className="font-medium">{trackingResult.shipmentType}</p>
                        </div>
                      </div>
                    </div>
                    <div>
                      <div className="space-y-3">
                        <div className="flex items-start space-x-3">
                          <MapPin className="h-5 w-5 text-gray-400 mt-0.5" />
                          <div>
                            <p className="text-sm text-gray-500">From</p>
                            <p className="font-medium">{trackingResult.origin}</p>
                          </div>
                        </div>
                        <div className="flex items-start space-x-3">
                          <MapPin className="h-5 w-5 text-primary mt-0.5" />
                          <div>
                            <p className="text-sm text-gray-500">To</p>
                            <p className="font-medium">{trackingResult.destination}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Truck className="h-5 w-5 mr-2" />
                    Tracking History
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="relative">
                    {/* Timeline connector */}
                    <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gray-200"></div>

                    <div className="space-y-6">
                      {trackingResult.updates.map((update, index) => (
                        <div key={index} className="relative flex gap-4">
                          <div className="flex items-center justify-center w-12 h-12 rounded-full bg-white border-2 border-gray-200 z-10">
                            {update.completed ? (
                              <CheckCircle className="h-6 w-6 text-green-500" />
                            ) : (
                              <div className={`w-4 h-4 rounded-full ${index === trackingResult.updates.length - 1 ? "bg-orange-400" : "bg-gray-400"}`}></div>
                            )}
                          </div>
                          <div className="flex-1 pt-1.5">
                            <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
                              <div className="flex justify-between mb-1">
                                <h4 className="font-semibold text-secondary">{update.status}</h4>
                                <span className="text-sm text-gray-500">{update.date}</span>
                              </div>
                              <p className="text-gray-700 font-medium mb-1">{update.location}</p>
                              <p className="text-gray-600 text-sm">{update.description}</p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Tracking;
