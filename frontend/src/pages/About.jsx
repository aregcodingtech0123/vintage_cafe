import React from "react";
import { Coffee, Heart, Leaf } from "lucide-react";
import { Card, CardContent } from "../components/ui/card";

function About() {
  return (
    <section className="py-24 pt-32 bg-cream">
      <div className="container mx-auto px-6">
        <h2 className="font-seasons text-4xl md:text-5xl text-center text-charcoal mb-16">
          Why People Love Vintage Cafe
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <Card className="card-hover border-none shadow-subtle bg-cream">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-warm-sage/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Heart className="w-8 h-8 text-warm-sage" />
              </div>
              <h3 className="font-seasons text-2xl text-charcoal mb-4">Cozy, Home-Like Atmosphere</h3>
              <p className="font-montserrat text-warm-gray leading-relaxed">
                Step into a calm, vintage-inspired space designed for slow mornings, coffee dates, studying, or catching up with friends.
              </p>
            </CardContent>
          </Card>
          <Card className="card-hover border-none shadow-subtle bg-cream">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-warm-sage/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Coffee className="w-8 h-8 text-warm-sage" />
              </div>
              <h3 className="font-seasons text-2xl text-charcoal mb-4">Signature Drinks You Can't Find Anywhere Else</h3>
              <p className="font-montserrat text-warm-gray leading-relaxed">
                From our famous Nutella Latte to seasonal favorites like Dirty Pumpkin Chai, every cup is carefully balanced and full of flavor.
              </p>
            </CardContent>
          </Card>
          <Card className="card-hover border-none shadow-subtle bg-cream">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-warm-sage/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Heart className="w-8 h-8 text-warm-sage" />
              </div>
              <h3 className="font-seasons text-2xl text-charcoal mb-4">Homemade Desserts, Made with Love</h3>
              <p className="font-montserrat text-warm-gray leading-relaxed">
                Fresh pastries, European-inspired cakes, and customer favorites like apple pie Sharlotka and cherry pie.
              </p>
            </CardContent>
          </Card>
          <Card className="card-hover border-none shadow-subtle bg-cream">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-warm-sage/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Leaf className="w-8 h-8 text-warm-sage" />
              </div>
              <h3 className="font-seasons text-2xl text-charcoal mb-4">Eco-Friendly by Design</h3>
              <p className="font-montserrat text-warm-gray leading-relaxed">
                Real cups and plates for dine-in guests — less waste, more comfort, and a truly homey feel.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}

export default About;
