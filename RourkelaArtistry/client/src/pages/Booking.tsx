import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { insertBookingSchema } from "@shared/schema";
import type { InsertBooking } from "@shared/schema";
import { Calendar, Phone, MessageCircle, Clock } from "lucide-react";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";

const serviceTypes = [
  "Bridal Mehndi",
  "Arabic Mehndi",
  "Stylish Mehndi",
  "Full Hand Mehndi",
  "Arm Tattoo",
  "Neck Tattoo",
  "Hand Tattoo",
  "Back Tattoo",
];

export default function Booking() {
  const { toast } = useToast();
  const form = useForm<InsertBooking>({
    resolver: zodResolver(insertBookingSchema),
    defaultValues: {
      name: "",
      phone: "",
      preferredDate: "",
      serviceType: "",
      message: "",
    },
  });

  const bookingMutation = useMutation({
    mutationFn: async (data: InsertBooking) => {
      return await apiRequest("POST", "/api/bookings", data);
    },
    onSuccess: (_, variables) => {
      const message = `*New Booking Request*

Name: ${variables.name}
Phone: ${variables.phone}
Preferred Date: ${variables.preferredDate}
Service: ${variables.serviceType}
${variables.message ? `Message: ${variables.message}` : ""}

Please confirm the appointment.`;

      const whatsappUrl = `https://wa.me/917609835426?text=${encodeURIComponent(message)}`;
      window.open(whatsappUrl, "_blank");
      
      toast({
        title: "Booking Submitted!",
        description: "Your booking request has been sent via WhatsApp.",
      });
      
      form.reset();
    },
    onError: () => {
      toast({
        title: "Error",
        description: "Failed to submit booking. Please try again.",
        variant: "destructive",
      });
    },
  });

  const onSubmit = async (data: InsertBooking) => {
    bookingMutation.mutate(data);
  };

  return (
    <div className="min-h-screen pt-20">
      <section className="relative h-[40vh] flex items-center justify-center bg-gradient-to-r from-secondary to-secondary/80">
        <div className="text-center px-4">
          <h1 className="font-serif text-5xl sm:text-6xl font-bold text-secondary-foreground mb-4">
            Book Your Appointment
          </h1>
          <p className="text-xl text-secondary-foreground/90 max-w-2xl mx-auto">
            Fill out the form below and we'll get back to you shortly
          </p>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <Card className="border-2 border-primary/20">
              <CardHeader>
                <CardTitle className="text-2xl font-serif">Booking Form</CardTitle>
              </CardHeader>
              <CardContent>
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Full Name</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="Enter your name"
                              {...field}
                              data-testid="input-name"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Phone Number</FormLabel>
                          <FormControl>
                            <Input
                              type="tel"
                              placeholder="Enter your phone number"
                              {...field}
                              data-testid="input-phone"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="preferredDate"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Preferred Date</FormLabel>
                          <FormControl>
                            <Input
                              type="date"
                              {...field}
                              data-testid="input-date"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="serviceType"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Service Type</FormLabel>
                          <Select
                            onValueChange={field.onChange}
                            defaultValue={field.value}
                          >
                            <FormControl>
                              <SelectTrigger data-testid="select-service">
                                <SelectValue placeholder="Select a service" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              {serviceTypes.map((service) => (
                                <SelectItem
                                  key={service}
                                  value={service}
                                  data-testid={`option-${service.toLowerCase().replace(/\s+/g, "-")}`}
                                >
                                  {service}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Special Requests (Optional)</FormLabel>
                          <FormControl>
                            <Textarea
                              placeholder="Any special requests or details..."
                              className="resize-none h-24"
                              {...field}
                              data-testid="textarea-message"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <Button 
                      type="submit" 
                      className="w-full" 
                      size="lg" 
                      data-testid="button-submit-booking"
                      disabled={bookingMutation.isPending}
                    >
                      {bookingMutation.isPending ? "Submitting..." : "Send Request via WhatsApp"}
                    </Button>
                  </form>
                </Form>
              </CardContent>
            </Card>

            <div className="space-y-6">
              <Card>
                <CardContent className="p-8">
                  <div className="flex items-start gap-4 mb-6">
                    <Calendar className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-lg mb-2">Booking Guidelines</h3>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        <li>• Book at least 2-3 days in advance</li>
                        <li>• Bridal bookings require 1 week advance notice</li>
                        <li>• Appointments are confirmed via WhatsApp</li>
                        <li>• Cancellations must be made 24 hours prior</li>
                      </ul>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 mb-6">
                    <Clock className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-lg mb-2">Working Hours</h3>
                      <div className="space-y-1 text-sm text-muted-foreground">
                        <p>Monday - Sunday: 10:00 AM - 10:00 PM</p>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <Phone className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-lg mb-2">Contact Options</h3>
                      <div className="space-y-2 text-sm">
                        <p className="text-muted-foreground">
                          Phone: <span className="text-foreground">9777614017</span>
                        </p>
                        <p className="text-muted-foreground">
                          WhatsApp: <span className="text-foreground">7609835426</span>
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-primary/10 to-secondary/10 border-primary/20">
                <CardContent className="p-8 text-center">
                  <MessageCircle className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h3 className="font-serif text-2xl font-bold mb-3">
                    Quick Booking
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    Prefer to chat directly? Send us a message on WhatsApp
                  </p>
                  <a
                    href="https://wa.me/917609835426"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button variant="default" size="lg" className="w-full" data-testid="button-whatsapp-direct">
                      Message on WhatsApp
                    </Button>
                  </a>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
