import React from "react";
import { Star } from "lucide-react";
import { Card } from "../components/ui/card";

function Reviews() {
  return (
    <section className="py-24 pt-32 bg-cream">
      <div className="container mx-auto px-6">
        <h2 className="font-seasons text-4xl md:text-5xl text-center text-charcoal mb-4">
          Real Reviews from Real Guests
        </h2>
        <div className="flex items-center justify-center gap-2 mb-16">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="w-6 h-6 fill-warm-sage text-warm-sage" />
          ))}
          <span className="font-montserrat text-warm-gray ml-2">Rated 5 Stars for Atmosphere, Service & Quality</span>
        </div>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <Card className="border-none shadow-subtle p-8 bg-cream">
            <div className="flex gap-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-warm-sage text-warm-sage" />
              ))}
            </div>
            <p className="font-montserrat text-charcoal mb-4 italic">
              "What an absolute gem! Cozy, eco-friendly, and the drinks are incredible. Will definitely be back!"
            </p>
            <p className="font-montserrat text-sm text-warm-gray">— Sarah M.</p>
          </Card>
          <Card className="border-none shadow-subtle p-8 bg-cream">
            <div className="flex gap-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-warm-sage text-warm-sage" />
              ))}
            </div>
            <p className="font-montserrat text-charcoal mb-4 italic">
              "The Nutella latte was delicious — rich, smooth, and perfectly balanced."
            </p>
            <p className="font-montserrat text-sm text-warm-gray">— James L.</p>
          </Card>
          <Card className="border-none shadow-subtle p-8 bg-cream">
            <div className="flex gap-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-warm-sage text-warm-sage" />
              ))}
            </div>
            <p className="font-montserrat text-charcoal mb-4 italic">
              "Vintage Cafe has the 'home and cozy' vibes perfected. Perfect for coffee dates or study time."
            </p>
            <p className="font-montserrat text-sm text-warm-gray">— Emma K.</p>
          </Card>
        </div>
      </div>
    </section>
  );
}

export default Reviews;
