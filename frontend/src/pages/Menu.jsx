import React from "react";
import { Coffee, Heart } from "lucide-react";
import { Card, CardContent } from "../components/ui/card";

function Menu() {
  return (
    <section className="py-24 pt-32 bg-soft-gray">
      <div className="container mx-auto px-6">
        <h2 className="font-seasons text-4xl md:text-5xl text-center text-charcoal mb-16">
          Customer Favorites
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <Card className="card-hover border-none overflow-hidden bg-cream">
            <div className="h-64 overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1529892485617-25f63cd7b1e9"
                alt="Nutella Latte"
                className="w-full h-full object-cover hover-zoom"
              />
            </div>
            <CardContent className="p-6 bg-cream">
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-seasons text-2xl text-charcoal">Nutella Latte</h3>
                <Coffee className="w-5 h-5 text-warm-sage" />
              </div>
              <p className="font-montserrat text-warm-gray">
                Rich, smooth, and perfectly sweet — dessert in a cup.
              </p>
            </CardContent>
          </Card>
          <Card className="card-hover border-none overflow-hidden bg-cream">
            <div className="h-64 overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1497636577773-f1231844b336"
                alt="Dirty Pumpkin Chai"
                className="w-full h-full object-cover hover-zoom"
              />
            </div>
            <CardContent className="p-6 bg-cream">
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-seasons text-2xl text-charcoal">Dirty Pumpkin Chai</h3>
                <Coffee className="w-5 h-5 text-warm-sage" />
              </div>
              <p className="font-montserrat text-warm-gray">
                Bold espresso meets spiced chai and pumpkin cold foam.
              </p>
            </CardContent>
          </Card>
          <Card className="card-hover border-none overflow-hidden bg-cream">
            <div className="h-64 overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1623334044303-241021148842"
                alt="Apple Pie Sharlotka"
                className="w-full h-full object-cover hover-zoom"
              />
            </div>
            <CardContent className="p-6 bg-cream">
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-seasons text-2xl text-charcoal">Apple Pie "Sharlotka"</h3>
                <Heart className="w-5 h-5 text-warm-sage" />
              </div>
              <p className="font-montserrat text-warm-gray">
                A must-try European classic, baked fresh.
              </p>
            </CardContent>
          </Card>
          <Card className="card-hover border-none overflow-hidden bg-cream">
            <div className="h-64 overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1609050471053-8636409f9f5b"
                alt="Vienna Melange"
                className="w-full h-full object-cover hover-zoom"
              />
            </div>
            <CardContent className="p-6 bg-cream">
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-seasons text-2xl text-charcoal">Vienna Melange</h3>
                <Coffee className="w-5 h-5 text-warm-sage" />
              </div>
              <p className="font-montserrat text-warm-gray">
                A refined, lightly sweet roast — even non-sweet drink lovers approve.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}

export default Menu;
