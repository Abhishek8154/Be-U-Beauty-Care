import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Phone, 
  MapPin, 
  Instagram, 
  Facebook, 
  MessageCircle, 
  Menu, 
  X, 
  Scissors, 
  Sparkles, 
  Heart, 
  Star, 
  Clock, 
  ShieldCheck, 
  Award, 
  ChevronRight,
  Send
} from 'lucide-react';

// --- Components ---

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <a href="#home" className="flex items-center gap-2">
          <span className={`serif text-2xl font-bold tracking-tight ${isScrolled ? 'text-zinc-900' : 'text-white'}`}>
            Be U <span className="text-gold">Beauty Care</span>
          </span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className={`text-sm font-medium uppercase tracking-widest transition-colors hover:text-gold ${isScrolled ? 'text-zinc-600' : 'text-white/90'}`}
            >
              {link.name}
            </a>
          ))}
          <a 
            href="#contact" 
            className="bg-gold hover:bg-gold-dark text-white px-6 py-2 rounded-full text-sm font-semibold transition-all transform hover:scale-105"
          >
            Book Now
          </a>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-gold"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-white shadow-xl py-6 px-6 md:hidden flex flex-col gap-4"
          >
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-lg font-medium text-zinc-800 hover:text-gold transition-colors"
              >
                {link.name}
              </a>
            ))}
            <a 
              href="#contact" 
              onClick={() => setIsMobileMenuOpen(false)}
              className="bg-gold text-white text-center py-3 rounded-xl font-bold"
            >
              Book Appointment
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&q=80&w=1920" 
          alt="Salon Interior" 
          className="w-full h-full object-cover scale-105 animate-slow-zoom"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]"></div>
      </div>

      <div className="relative z-10 text-center px-6 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-gold font-semibold tracking-[0.3em] uppercase mb-4 block">Welcome to Premium Beauty</span>
          <h1 className="serif text-5xl md:text-8xl text-white font-bold mb-6 leading-tight">
            Be Yourself, <br />
            <span className="text-gold-light italic">Be Beautiful</span>
          </h1>
          <p className="text-white/80 text-lg md:text-xl mb-10 max-w-2xl mx-auto font-light">
            Experience luxury beauty treatments tailored just for you. Our expert beauticians are here to enhance your natural radiance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="#contact" 
              className="bg-gold hover:bg-gold-dark text-white px-10 py-4 rounded-full font-bold transition-all transform hover:scale-105 flex items-center justify-center gap-2 shadow-lg"
            >
              Book Appointment <ChevronRight size={20} />
            </a>
            <a 
              href="tel:+918433539825" 
              className="bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/30 px-10 py-4 rounded-full font-bold transition-all flex items-center justify-center gap-2"
            >
              <Phone size={20} /> Call Now
            </a>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/50"
      >
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center p-1">
          <div className="w-1 h-2 bg-gold rounded-full"></div>
        </div>
      </motion.div>
    </section>
  );
};

const About = () => {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&q=80&w=800" 
                alt="Stylist working" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-10 -right-10 bg-gold p-8 rounded-2xl shadow-xl hidden lg:block">
              <span className="text-white text-4xl font-bold block">10+</span>
              <span className="text-white/80 text-sm uppercase tracking-widest">Years of Excellence</span>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-gold font-semibold tracking-widest uppercase mb-4 block">Our Story</span>
            <h2 className="serif text-4xl md:text-5xl font-bold mb-6 text-zinc-900">Elevating Your Natural Beauty Since 2014</h2>
            <p className="text-zinc-600 text-lg mb-6 leading-relaxed">
              At <span className="font-semibold text-zinc-900">Be U Beauty Care</span>, we believe that beauty is about being comfortable in your own skin. Our salon is a sanctuary where professional expertise meets personalized care.
            </p>
            <p className="text-zinc-600 text-lg mb-8 leading-relaxed">
              Our team of skilled beauticians is dedicated to providing high-quality treatments using premium products. We maintain the highest standards of hygiene to ensure a safe and relaxing environment for all our clients.
            </p>
            
            <div className="grid grid-cols-2 gap-6">
              <div className="flex items-start gap-3">
                <div className="bg-soft-pink p-2 rounded-lg text-gold">
                  <ShieldCheck size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-zinc-900">Hygienic</h4>
                  <p className="text-sm text-zinc-500">Safe & Clean</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="bg-soft-pink p-2 rounded-lg text-gold">
                  <Award size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-zinc-900">Expert</h4>
                  <p className="text-sm text-zinc-500">Certified Staff</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Services = () => {
  const services = [
    { title: 'Haircut & Styling', desc: 'Modern cuts and styles tailored to your face shape.', icon: <Scissors /> },
    { title: 'Hair Coloring', desc: 'Premium colors and treatments for vibrant, healthy hair.', icon: <Sparkles /> },
    { title: 'Facial & Skin Care', desc: 'Rejuvenating treatments for a glowing complexion.', icon: <Heart /> },
    { 
      title: 'Bridal Makeup', 
      desc: 'Look stunning on your special day with our expert artists.', 
      icon: <Star />,
      image: "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?auto=format&fit=crop&q=80&w=600"
    },
    { 
      title: 'Party Makeup', 
      desc: 'Glamorous looks for any event or celebration.', 
      icon: <Award />,
      image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&q=80&w=600"
    },
    { title: 'Waxing & Threading', desc: 'Smooth skin with our gentle and precise techniques.', icon: <ShieldCheck /> },
    { title: 'Manicure & Pedicure', desc: 'Relaxing nail care for perfectly groomed hands and feet.', icon: <Sparkles /> },
  ];

  return (
    <section id="services" className="py-24 bg-soft-pink/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-gold font-semibold tracking-widest uppercase mb-4 block">What We Offer</span>
          <h2 className="serif text-4xl md:text-5xl font-bold text-zinc-900">Our Premium Services</h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div 
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all border border-pink-100 group overflow-hidden"
            >
              {service.image && (
                <div className="h-48 overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                </div>
              )}
              <div className="p-8">
                <div className="w-14 h-14 bg-soft-pink rounded-xl flex items-center justify-center text-gold mb-6 group-hover:bg-gold group-hover:text-white transition-colors">
                  {service.icon}
                </div>
                <h3 className="serif text-2xl font-bold mb-3 text-zinc-900">{service.title}</h3>
                <p className="text-zinc-500 leading-relaxed">{service.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Gallery = () => {
  const images = [
    "https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&q=80&w=600",
    "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&q=80&w=600",
    "https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&q=80&w=600",
    "https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?auto=format&fit=crop&q=80&w=600",
    "https://images.unsplash.com/photo-1527799822344-429dfa8555ce?auto=format&fit=crop&q=80&w=600",
    "https://images.unsplash.com/photo-1595476108010-b4d1f80d91f1?auto=format&fit=crop&q=80&w=600",
    "https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&q=80&w=600",
    "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&q=80&w=600",
    "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?auto=format&fit=crop&q=80&w=600",
    "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&q=80&w=600",
    "https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&q=80&w=600",
    "https://images.unsplash.com/photo-1526045431048-f857369aba09?auto=format&fit=crop&q=80&w=600",
  ];

  return (
    <section id="gallery" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-gold font-semibold tracking-widest uppercase mb-4 block">Visual Experience</span>
          <h2 className="serif text-4xl md:text-5xl font-bold text-zinc-900">Our Salon Gallery</h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-8">
          {images.map((src, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.03 }}
              className="aspect-square rounded-2xl overflow-hidden shadow-lg cursor-pointer relative group"
            >
              <img 
                src={src} 
                alt={`Gallery ${index}`} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gold/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <Sparkles className="text-white" size={32} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const WhyChooseUs = () => {
  const reasons = [
    { title: 'Professional Beauticians', icon: <Award />, desc: 'Highly trained and experienced staff.' },
    { title: 'Hygienic Environment', icon: <ShieldCheck />, desc: 'Clean and sanitized tools and space.' },
    { title: 'Premium Products', icon: <Sparkles />, desc: 'We use only the best international brands.' },
    { title: 'Affordable Pricing', icon: <Heart />, desc: 'Luxury services at competitive prices.' },
    { title: 'Customer Satisfaction', icon: <Star />, desc: 'Your happiness is our top priority.' },
  ];

  return (
    <section className="py-24 bg-zinc-900 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-gold font-semibold tracking-widest uppercase mb-4 block">Why Be U?</span>
            <h2 className="serif text-4xl md:text-5xl font-bold mb-8">The Best Choice for Your Beauty Needs</h2>
            <div className="space-y-8">
              {reasons.map((reason, index) => (
                <motion.div 
                  key={reason.title}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex gap-6"
                >
                  <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center text-gold shrink-0">
                    {reason.icon}
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-1">{reason.title}</h4>
                    <p className="text-white/60">{reason.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative hidden lg:grid grid-cols-2 gap-4"
          >
            <div className="aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl transform translate-y-8">
              <img 
                src="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&q=80&w=600" 
                alt="Beauty 1" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1512496015851-a90fb38ba796?auto=format&fit=crop&q=80&w=600" 
                alt="Beauty 2" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Testimonials = () => {
  const reviews = [
    { name: 'Priya Sharma', rating: 5, text: 'The best bridal makeup I could have asked for! They made me feel like a queen on my wedding day.' },
    { name: 'Anjali Gupta', rating: 5, text: 'Excellent hair coloring service. The staff is very professional and the hygiene standards are top-notch.' },
    { name: 'Sneha Patil', rating: 4, text: 'Very relaxing facial. My skin feels rejuvenated and glowing. Highly recommend Be U Beauty Care!' },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-gold font-semibold tracking-widest uppercase mb-4 block">Testimonials</span>
          <h2 className="serif text-4xl md:text-5xl font-bold text-zinc-900">What Our Clients Say</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-soft-pink/20 p-8 rounded-2xl border border-pink-100"
            >
              <div className="flex gap-1 text-gold mb-4">
                {[...Array(review.rating)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
              </div>
              <p className="text-zinc-600 italic mb-6">"{review.text}"</p>
              <h4 className="font-bold text-zinc-900">— {review.name}</h4>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-soft-pink/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-gold font-semibold tracking-widest uppercase mb-4 block">Get In Touch</span>
            <h2 className="serif text-4xl md:text-5xl font-bold mb-8 text-zinc-900">Contact Us</h2>
            
            <div className="space-y-6 mb-12">
              <div className="flex gap-4 items-start">
                <div className="bg-gold text-white p-3 rounded-xl">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-zinc-900">Call Us</h4>
                  <a href="tel:+918433539825" className="text-zinc-600 hover:text-gold transition-colors">+91 8433539825</a>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <div className="bg-gold text-white p-3 rounded-xl">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-zinc-900">Visit Us</h4>
                  <p className="text-zinc-600">sahayog co op soc, ram Laxman tekadi, A101, Sindhu Nagar, Sewri, Mumbai, Maharashtra 400015</p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <div className="bg-gold text-white p-3 rounded-xl">
                  <Clock size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-zinc-900">Opening Hours</h4>
                  <p className="text-zinc-600">Mon - Sat: 10:00 AM - 8:00 PM</p>
                  <p className="text-zinc-600">Sun: 11:00 AM - 5:00 PM</p>
                </div>
              </div>
            </div>

            <div className="rounded-2xl overflow-hidden shadow-lg h-64 border-4 border-white">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.6934814841!2d72.8530397!3d19.0001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7cf3a00000001%3A0x0!2zMTnCsDAwJzAwLjQiTiA3MsKwNTEnMTAuOSJF!5e0!3m2!1sen!2sin!4v1710720000000!5m2!1sen!2sin" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white p-10 rounded-3xl shadow-xl border border-pink-100"
          >
            <h3 className="serif text-3xl font-bold mb-8 text-zinc-900">Book an Appointment</h3>
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label className="block text-sm font-semibold mb-2 text-zinc-700">Full Name</label>
                <input 
                  type="text" 
                  placeholder="Your Name" 
                  className="w-full px-5 py-4 rounded-xl bg-zinc-50 border border-zinc-200 focus:border-gold focus:ring-2 focus:ring-gold/20 outline-none transition-all"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2 text-zinc-700">Phone Number</label>
                <input 
                  type="tel" 
                  placeholder="+91 XXXXX XXXXX" 
                  className="w-full px-5 py-4 rounded-xl bg-zinc-50 border border-zinc-200 focus:border-gold focus:ring-2 focus:ring-gold/20 outline-none transition-all"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2 text-zinc-700">Message / Service</label>
                <textarea 
                  rows={4} 
                  placeholder="Tell us which service you're interested in..." 
                  className="w-full px-5 py-4 rounded-xl bg-zinc-50 border border-zinc-200 focus:border-gold focus:ring-2 focus:ring-gold/20 outline-none transition-all resize-none"
                ></textarea>
              </div>
              <button className="w-full bg-gold hover:bg-gold-dark text-white py-4 rounded-xl font-bold text-lg shadow-lg shadow-gold/30 transition-all transform active:scale-95 flex items-center justify-center gap-2">
                Send Message <Send size={20} />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-zinc-950 text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div>
            <h2 className="serif text-2xl font-bold mb-6">Be U <span className="text-gold">Beauty Care</span></h2>
            <p className="text-white/50 leading-relaxed mb-8">
              Your destination for premium beauty treatments in Mumbai. We enhance your natural beauty with professional care and luxury products.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-gold transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-gold transition-colors">
                <Facebook size={20} />
              </a>
              <a href="https://wa.me/918433539825" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-gold transition-colors">
                <MessageCircle size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6 uppercase tracking-widest text-gold">Quick Links</h4>
            <ul className="space-y-4 text-white/60">
              <li><a href="#home" className="hover:text-white transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Services</a></li>
              <li><a href="#gallery" className="hover:text-white transition-colors">Gallery</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6 uppercase tracking-widest text-gold">Services</h4>
            <ul className="space-y-4 text-white/60">
              <li>Haircut & Styling</li>
              <li>Facial & Skin Care</li>
              <li>Bridal Makeup</li>
              <li>Manicure & Pedicure</li>
              <li>Hair Coloring</li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6 uppercase tracking-widest text-gold">Contact Info</h4>
            <ul className="space-y-4 text-white/60">
              <li className="flex gap-3">
                <MapPin size={20} className="text-gold shrink-0" />
                <span>Sewri, Mumbai, Maharashtra 400015</span>
              </li>
              <li className="flex gap-3">
                <Phone size={20} className="text-gold shrink-0" />
                <a href="tel:+918433539825">+91 8433539825</a>
              </li>
              <li className="flex gap-3">
                <MessageCircle size={20} className="text-gold shrink-0" />
                <a href="https://wa.me/918433539825">WhatsApp Chat</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-10 border-t border-white/10 text-center text-white/40 text-sm">
          <p>© {new Date().getFullYear()} Be U Beauty Care. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

const WhatsAppButton = () => {
  return (
    <a 
      href="https://wa.me/918433539825" 
      target="_blank" 
      rel="noopener noreferrer"
      className="fixed bottom-8 right-8 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform flex items-center justify-center animate-bounce"
    >
      <MessageCircle size={32} />
    </a>
  );
};

// --- Main App ---

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <WhyChooseUs />
      <Gallery />
      <Testimonials />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
