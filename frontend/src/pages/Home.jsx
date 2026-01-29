import React, { useState } from 'react';
import { Coffee, Heart, Leaf, Users, MapPin, Phone, Mail, Instagram, Star, Clock, DollarSign } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { useToast } from '../hooks/use-toast';
import { toast as sonnerToast } from 'sonner';
import axios from 'axios';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;

const Home = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const response = await axios.post(`${BACKEND_URL}/api/contact`, formData);
      
      sonnerToast.success('Message Sent!', {
        description: "We'll get back to you soon. Thanks for reaching out!",
      });
      
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('Contact form error:', error);
      sonnerToast.error('Error', {
        description: error.response?.data?.detail || "Something went wrong. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-cream">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-cream/95 backdrop-blur-sm border-b border-soft-gray">
        <nav className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Coffee className="w-8 h-8 text-warm-sage" />
              <span className="font-seasons text-2xl text-charcoal">Vintage Cafe</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <button onClick={() => scrollToSection('about')} className="nav-link">About</button>
              <button onClick={() => scrollToSection('menu')} className="nav-link">Menu</button>
              <button onClick={() => scrollToSection('reviews')} className="nav-link">Reviews</button>
              <button onClick={() => scrollToSection('visit')} className="nav-link">Visit</button>
              <button onClick={() => scrollToSection('contact')} className="nav-link">Contact</button>
            </div>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1481833761820-0509d3217039?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjAzOTB8MHwxfHNlYXJjaHwxfHxjb3p5JTIwY2FmZXxlbnwwfHx8fDE3Njk2ODIyOTd8MA&ixlib=rb-4.1.0&q=85"
            alt="Vintage Cafe Interior"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-charcoal/70 via-charcoal/50 to-charcoal/70"></div>
        </div>
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <h1 className="font-seasons text-5xl md:text-7xl text-cream mb-6 animate-fade-in">
            Where Vintage Charm Meets Modern Coffee Craft
          </h1>
          <p className="font-montserrat text-lg md:text-xl text-soft-gray mb-8 animate-fade-in-delay">
            Handcrafted lattes, homemade pastries, and a warm, welcoming atmosphere — your new favorite neighborhood escape.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-delay-2">
            <Button 
              onClick={() => scrollToSection('menu')} 
              className="btn-primary text-lg px-8 py-6"
            >
              <Coffee className="w-5 h-5 mr-2" />
              View Our Menu
            </Button>
            <Button 
              onClick={() => scrollToSection('visit')} 
              className="btn-secondary text-lg px-8 py-6"
            >
              <MapPin className="w-5 h-5 mr-2" />
              Visit Us Today
            </Button>
          </div>
          <div className="flex items-center justify-center gap-6 mt-12 text-cream">
            <div className="flex items-center gap-2">
              <Star className="w-5 h-5 fill-warm-sage text-warm-sage" />
              <span className="font-montserrat text-sm">5.0 Average Rating</span>
            </div>
            <span className="text-warm-gray">•</span>
            <span className="font-montserrat text-sm">Loved by Locals</span>
            <span className="text-warm-gray">•</span>
            <div className="flex items-center gap-2">
              <Leaf className="w-5 h-5 text-warm-sage" />
              <span className="font-montserrat text-sm">Eco-Friendly Café</span>
            </div>
          </div>
        </div>
      </section>

      {/* Why People Love Section */}
      <section id="about" className="py-24 bg-cream">
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

      {/* Customer Favorites */}
      <section id="menu" className="py-24 bg-soft-gray">
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

      {/* Reviews Section */}
      <section id="reviews" className="py-24 bg-cream">
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

      {/* Perfect For Section */}
      <section className="py-24 bg-soft-taupe">
        <div className="container mx-auto px-6">
          <h2 className="font-seasons text-4xl md:text-5xl text-center text-charcoal mb-16">
            Perfect For Every Moment
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6 max-w-6xl mx-auto">
            <div className="text-center p-6">
              <div className="w-12 h-12 bg-warm-sage/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Coffee className="w-6 h-6 text-warm-sage" />
              </div>
              <p className="font-montserrat text-charcoal">Slow mornings & brunch</p>
            </div>
            <div className="text-center p-6">
              <div className="w-12 h-12 bg-warm-sage/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-6 h-6 text-warm-sage" />
              </div>
              <p className="font-montserrat text-charcoal">Remote work & studying</p>
            </div>
            <div className="text-center p-6">
              <div className="w-12 h-12 bg-warm-sage/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-6 h-6 text-warm-sage" />
              </div>
              <p className="font-montserrat text-charcoal">Coffee dates & catch-ups</p>
            </div>
            <div className="text-center p-6">
              <div className="w-12 h-12 bg-warm-sage/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Coffee className="w-6 h-6 text-warm-sage" />
              </div>
              <p className="font-montserrat text-charcoal">Live music days</p>
            </div>
            <div className="text-center p-6">
              <div className="w-12 h-12 bg-warm-sage/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-6 h-6 text-warm-sage" />
              </div>
              <p className="font-montserrat text-charcoal">Pup-cup stops</p>
            </div>
          </div>
        </div>
      </section>

      {/* Visit Section */}
      <section id="visit" className="py-24 bg-cream">
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

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-soft-gray">
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
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
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
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      required
                      className="border-warm-gray/30 focus:border-warm-sage bg-white"
                      placeholder="john@example.com"
                    />
                  </div>
                  <div>
                    <label className="font-montserrat text-sm text-charcoal mb-2 block">Message</label>
                    <Textarea 
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      required
                      className="border-warm-gray/30 focus:border-warm-sage min-h-[150px] bg-white"
                      placeholder="Tell us how we can help..."
                    />
                  </div>
                  <Button type="submit" disabled={isSubmitting} className="btn-primary w-full">
                    <Mail className="w-5 h-5 mr-2" />
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Instagram Feed Section */}
      <section className="py-24 bg-cream">
        <div className="container mx-auto px-6">
          <h2 className="font-seasons text-4xl md:text-5xl text-center text-charcoal mb-4">
            Follow Our Journey
          </h2>
          <p className="font-montserrat text-center text-warm-gray mb-12">
            @vintagecafe on Instagram
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto">
            <div className="aspect-square overflow-hidden rounded-lg shadow-subtle">
              <img 
                src="https://images.unsplash.com/photo-1543060625-8ad3aa33a339"
                alt="Instagram post"
                className="w-full h-full object-cover hover-zoom"
              />
            </div>
            <div className="aspect-square overflow-hidden rounded-lg shadow-subtle">
              <img 
                src="https://images.unsplash.com/photo-1549398164-0963221d3dcc"
                alt="Instagram post"
                className="w-full h-full object-cover hover-zoom"
              />
            </div>
            <div className="aspect-square overflow-hidden rounded-lg shadow-subtle">
              <img 
                src="https://images.unsplash.com/photo-1625744505712-77086009497b"
                alt="Instagram post"
                className="w-full h-full object-cover hover-zoom"
              />
            </div>
            <div className="aspect-square overflow-hidden rounded-lg shadow-subtle">
              <img 
                src="https://images.pexels.com/photos/34711923/pexels-photo-34711923.jpeg"
                alt="Instagram post"
                className="w-full h-full object-cover hover-zoom"
              />
            </div>
          </div>
          <div className="text-center mt-8">
            <Button className="btn-secondary">
              <Instagram className="w-5 h-5 mr-2" />
              Follow @vintagecafe
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-charcoal text-cream py-12">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center space-x-2">
              <Coffee className="w-6 h-6 text-warm-sage" />
              <span className="font-seasons text-xl">Vintage Cafe</span>
            </div>
            <p className="font-montserrat text-sm text-warm-gray">
              © 2026 Vintage Cafe. Crafted with love, coffee, and community.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="text-warm-gray hover:text-warm-sage transition-colors duration-200">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-warm-gray hover:text-warm-sage transition-colors duration-200">
                <Mail className="w-5 h-5" />
              </a>
              <a href="#" className="text-warm-gray hover:text-warm-sage transition-colors duration-200">
                <Phone className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;