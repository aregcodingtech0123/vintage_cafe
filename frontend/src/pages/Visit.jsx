import React from "react";
import { MapPin, Clock, Phone, DollarSign } from "lucide-react";
import { Button } from "../components/ui/button";

function Visit() {
  return (
    <section className="py-24 pt-32 bg-cream">
      <div className="container mx-auto px-6">
        <h2 className="font-seasons text-4xl md:text-5xl text-center text-charcoal mb-16">
          Visit Vintage Cafe
        </h2>
        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div>
            <div className="mb-8">
              <h3 className="font-seasons text-2xl text-charcoal mb-4">Location & Hours</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-warm-sage mt-1" />
                  <div>
                    <p className="font-montserrat text-charcoal">123 Vintage Street</p>
                    <p className="font-montserrat text-warm-gray">Your Neighborhood, YC 12345</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-warm-sage mt-1" />
                  <div>
                    <p className="font-montserrat text-charcoal">Monday - Friday: 7:00 AM - 7:00 PM</p>
                    <p className="font-montserrat text-charcoal">Saturday - Sunday: 8:00 AM - 8:00 PM</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-warm-sage mt-1" />
                  <p className="font-montserrat text-charcoal">(555) 123-4567</p>
                </div>
                <div className="flex items-start gap-3">
                  <DollarSign className="w-5 h-5 text-warm-sage mt-1" />
                  <p className="font-montserrat text-charcoal">Price Range: $1 - $20</p>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <p className="font-montserrat text-warm-gray italic">
                A hidden gem in the neighborhood — once you find us, you'll keep coming back.
              </p>
              <Button className="btn-primary w-full">
                <MapPin className="w-5 h-5 mr-2" />
                Get Directions
              </Button>
            </div>
          </div>
          <div className="h-[400px] rounded-lg overflow-hidden shadow-subtle">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3024.2219901290355!2d-74.00369368400567!3d40.71312937933034!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a316f2a2c8f%3A0xabcd1234567890!2sVintage%20Cafe!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Vintage Cafe Location"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Visit;
