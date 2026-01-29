import React, { useState } from "react";
import { Mail } from "lucide-react";
import axios from "axios";
import { toast as sonnerToast } from "sonner";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      await axios.post(`${BACKEND_URL}/api/contact`, formData);
      sonnerToast.success("Message Sent!", {
        description: "We'll get back to you soon. Thanks for reaching out!",
      });
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("Contact form error:", error);
      sonnerToast.error("Error", {
        description: error.response?.data?.detail || "Something went wrong. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-24 pt-32 bg-soft-gray">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-seasons text-4xl md:text-5xl text-center text-charcoal mb-4">
            Get In Touch
          </h2>
          <p className="font-montserrat text-center text-warm-gray mb-12">
            Have questions or want to book for a private event? We'd love to hear from you!
          </p>
          <Card className="border-none shadow-subtle bg-cream">
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="font-montserrat text-sm text-charcoal mb-2 block">Your Name</label>
                  <Input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    className="border-warm-gray/30 focus:border-warm-sage bg-white"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label className="font-montserrat text-sm text-charcoal mb-2 block">Email Address</label>
                  <Input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    className="border-warm-gray/30 focus:border-warm-sage bg-white"
                    placeholder="john@example.com"
                  />
                </div>
                <div>
                  <label className="font-montserrat text-sm text-charcoal mb-2 block">Message</label>
                  <Textarea
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                    className="border-warm-gray/30 focus:border-warm-sage min-h-[150px] bg-white"
                    placeholder="Tell us how we can help..."
                  />
                </div>
                <Button type="submit" disabled={isSubmitting} className="btn-primary w-full">
                  <Mail className="w-5 h-5 mr-2" />
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}

export default Contact;
