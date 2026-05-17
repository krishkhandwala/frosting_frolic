"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Star, Camera as Instagram, MapPin, Heart, Gift, ShoppingBag, Quote, Sparkles } from "lucide-react";
import { useEffect, useRef } from "react";

export default function Home() {
  const { scrollYProgress } = useScroll();
  const yHero = useTransform(scrollYProgress, [0, 1], [0, 200]);


  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
  };

  const horizontalRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress: horizontalProgress } = useScroll({
    target: horizontalRef,
    offset: ["start start", "end end"]
  });

  const rotateWheel = useTransform(horizontalProgress, [0, 1], [0, -270]);
  const counterRotate = useTransform(horizontalProgress, [0, 1], [0, 270]);

  const op1 = useTransform(horizontalProgress, [0, 0.15], [1, 0]);
  const y1 = useTransform(horizontalProgress, [0, 0.15], [0, -50]);

  const op2 = useTransform(horizontalProgress, [0.15, 0.33, 0.48], [0, 1, 0]);
  const y2 = useTransform(horizontalProgress, [0.15, 0.33, 0.48], [50, 0, -50]);

  const op3 = useTransform(horizontalProgress, [0.48, 0.66, 0.81], [0, 1, 0]);
  const y3 = useTransform(horizontalProgress, [0.48, 0.66, 0.81], [50, 0, -50]);

  const op4 = useTransform(horizontalProgress, [0.81, 1], [0, 1]);
  const y4 = useTransform(horizontalProgress, [0.81, 1], [50, 0]);



  return (
    <main className="min-h-screen bg-vanilla text-cocoa overflow-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 glass-nav px-6 md:px-12 py-5 flex justify-between items-center transition-all duration-300">
        <div className="font-playfair text-2xl md:text-3xl font-bold tracking-tight text-cocoa">Frosting Frolics</div>
        <div className="hidden md:flex gap-10 font-poppins text-xs uppercase tracking-[0.15em] font-medium text-milk">
          <a href="#collections" className="hover:text-caramel transition-colors">Collections</a>
          <a href="#bestsellers" className="hover:text-caramel transition-colors">Bestsellers</a>
          <a href="#about" className="hover:text-caramel transition-colors">Our Story</a>
          <a href="#custom" className="hover:text-caramel transition-colors">Gifting</a>
        </div>
        <button className="bg-cocoa text-vanilla px-6 py-2.5 rounded-full font-poppins text-xs uppercase tracking-widest hover:bg-caramel transition-colors flex items-center gap-2">
          <ShoppingBag size={14} /> Order Now
        </button>
      </nav>

      {/* Editorial Hero Section */}
      <section className="relative min-h-[95vh] flex items-center justify-center pt-28 pb-16 px-6 lg:px-12">
        <div className="absolute inset-0 z-0 bg-beige/30"></div>
        
        <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          
          {/* Left Text */}
          <div className="w-full lg:w-1/2 flex flex-col justify-center text-left pt-12 lg:pt-0">
            <motion.div 
              initial={{ opacity: 0, y: 20 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 1 }}
              className="mb-8 inline-flex items-center gap-2 text-caramel text-xs font-poppins uppercase tracking-[0.2em] font-medium"
            >
              <MapPin size={14} /> Mumbai's Premium Home Bakery
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 30 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 1, delay: 0.1 }}
              className="text-5xl md:text-7xl lg:text-[5.5rem] font-playfair font-semibold text-cocoa leading-[1.1] tracking-tight mb-6"
            >
              Crafting <br /> Happiness, <br />
              <span className="text-caramel italic font-light">One Brownie at a Time.</span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 1, delay: 0.2 }}
              className="text-lg md:text-xl text-milk/80 mb-10 font-poppins font-light max-w-md leading-relaxed"
            >
              Indulge in artisanal luxury brownies, bespoke dessert hampers, and celebration boxes made fresh from the finest Belgian chocolate.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 1, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-5"
            >
              <button className="bg-cocoa text-vanilla px-8 py-4 rounded-full font-poppins text-sm uppercase tracking-widest hover:bg-caramel transition-all shadow-xl hover:-translate-y-1">
                Explore Menu
              </button>
              <a href="https://www.instagram.com/frostingfrolics/" target="_blank" className="border border-cocoa/20 text-cocoa px-8 py-4 rounded-full font-poppins text-sm uppercase tracking-widest flex items-center justify-center gap-3 hover:bg-cocoa/5 transition-all">
                <Instagram size={18} /> Order on Insta
              </a>
            </motion.div>
          </div>

          {/* Right Image Layout */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="w-full lg:w-1/2 relative h-[600px] lg:h-[750px] rounded-[2rem] overflow-hidden shadow-2xl"
          >
            <motion.div style={{ y: yHero }} className="absolute inset-[-10%] w-[120%] h-[120%]">
              <img src="https://images.unsplash.com/photo-1550617931-e17a7b70dce2?q=80&w=2070&auto=format&fit=crop" className="w-full h-full object-cover object-center" alt="Luxury Chocolate Brownies" />
            </motion.div>
            
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent"></div>
            
            <div className="absolute bottom-8 left-8 right-8 flex justify-between items-end glass-card p-6 rounded-2xl">
              <div>
                <p className="text-vanilla font-playfair text-xl mb-1">Decadent Belgian Fudge</p>
                <p className="text-vanilla/70 font-poppins text-xs uppercase tracking-widest">Our Signature Recipe</p>
              </div>
              <div className="flex -space-x-3">
                {[1,2,3,4].map(i => (
                  <div key={i} className="w-10 h-10 rounded-full border-2 border-cocoa bg-vanilla overflow-hidden">
                    <img src={`https://i.pravatar.cc/100?img=${i+40}`} alt="client" />
                  </div>
                ))}
                <div className="w-10 h-10 rounded-full border-2 border-cocoa bg-caramel flex items-center justify-center text-vanilla text-xs font-poppins font-bold">
                  5k+
                </div>
              </div>
            </div>
          </motion.div>
          
        </div>
      </section>

      {/* Signature Collections */}
      <section id="collections" className="py-32 px-6 lg:px-12 max-w-7xl mx-auto">
        <motion.div 
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp} className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-playfair text-cocoa mb-4">The Collections</h2>
          <p className="font-poppins text-milk max-w-xl mx-auto">Curated experiences for the ultimate dessert connoisseur. Beautifully packaged, luxuriously baked.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 lg:gap-10">
          
          {/* Card 1 */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}
            className="md:col-span-7 group relative h-[500px] lg:h-[600px] rounded-3xl overflow-hidden cursor-pointer"
          >
            <img src="https://images.unsplash.com/photo-1606890737304-57a1ca8a5b62?q=80&w=2003&auto=format&fit=crop" alt="Brownie Boxes" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 ease-out" />
            <div className="absolute inset-0 bg-gradient-to-t from-cocoa/90 via-cocoa/30 to-transparent"></div>
            <div className="absolute inset-x-0 bottom-0 p-10 flex flex-col lg:flex-row lg:items-end justify-between gap-6">
              <div>
                <span className="text-caramel font-poppins text-xs uppercase tracking-widest font-medium mb-3 block">Signature Series</span>
                <h3 className="text-3xl lg:text-4xl font-playfair text-vanilla">Luxury Brownie Boxes</h3>
              </div>
              <button className="bg-vanilla text-cocoa w-14 h-14 rounded-full flex items-center justify-center group-hover:bg-caramel group-hover:text-vanilla transition-colors">
                <ArrowRight size={24} />
              </button>
            </div>
          </motion.div>

          {/* Card 2 */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.2 }}
            className="md:col-span-5 group relative h-[500px] lg:h-[600px] rounded-3xl overflow-hidden cursor-pointer"
          >
            <img src="https://images.unsplash.com/photo-1513519245088-0e12902e5a38?q=80&w=2070&auto=format&fit=crop" alt="Hampers" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 ease-out" />
            <div className="absolute inset-0 bg-gradient-to-t from-cocoa/90 via-cocoa/30 to-transparent"></div>
            <div className="absolute inset-x-0 bottom-0 p-10">
              <span className="text-caramel font-poppins text-xs uppercase tracking-widest font-medium mb-3 block">Gifting</span>
              <h3 className="text-3xl font-playfair text-vanilla mb-6">Celebration Hampers</h3>
              <p className="text-vanilla/80 font-poppins text-sm mb-6 line-clamp-2">The perfect gesture for birthdays, anniversaries, and corporate gifting. Elegant and indulgent.</p>
              <span className="text-vanilla font-poppins text-sm flex items-center gap-2 group-hover:text-caramel transition-colors">
                Explore <ArrowRight size={16} />
              </span>
            </div>
          </motion.div>

          {/* Card 3 */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.1 }}
            className="md:col-span-12 group relative h-[400px] rounded-3xl overflow-hidden cursor-pointer"
          >
            <img src="https://images.unsplash.com/photo-1499636136210-6f4ee915583e?q=80&w=1964&auto=format&fit=crop" alt="Cookie Tins" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 ease-out" />
            <div className="absolute inset-0 bg-gradient-to-t from-cocoa/80 via-transparent to-transparent"></div>
            <div className="absolute inset-x-0 bottom-0 p-10 flex justify-between items-end">
              <div>
                <span className="text-caramel font-poppins text-xs uppercase tracking-widest font-medium mb-3 block">Bite-sized Joy</span>
                <h3 className="text-3xl font-playfair text-vanilla">Artisanal Cookie Tins</h3>
              </div>
              <span className="text-vanilla font-poppins text-sm flex items-center gap-2 group-hover:text-caramel transition-colors">
                Explore <ArrowRight size={16} />
              </span>
            </div>
          </motion.div>

        </div>
      </section>

      {/* Bestsellers Section (Editorial Layout) */}
      <section id="bestsellers" className="py-32 bg-beige relative">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="max-w-xl">
              <span className="text-caramel font-poppins uppercase tracking-[0.2em] text-sm">Most Loved</span>
              <h2 className="text-5xl font-playfair text-cocoa mt-4 leading-tight">Decadence <br/> in Every Bite.</h2>
            </motion.div>
            <motion.button initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-cocoa font-poppins text-sm uppercase tracking-widest border-b border-cocoa pb-1 hover:text-caramel transition-colors">
              View All Menu Items
            </motion.button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { name: "Ferrero Rocher Fudge", price: "₹850", tag: "Bestseller", img: "https://images.unsplash.com/photo-1605807646983-377bc5a76493?q=80&w=800" },
              { name: "Lotus Biscoff Dream", price: "₹1200", tag: "Trending", img: "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?q=80&w=1965&auto=format&fit=crop" },
              { name: "Classic Belgian Dark", price: "₹750", tag: "Classic", img: "https://images.unsplash.com/photo-1624353365286-3f8d62daad51?q=80&w=800" },
              { name: "Nutella Sea Salt", price: "₹950", tag: "Must Try", img: "https://images.unsplash.com/photo-1579372786545-d24232daf58c?q=80&w=2070&auto=format&fit=crop" }
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.8 }}
                className="group cursor-pointer"
              >
                <div className="relative aspect-[4/5] rounded-2xl overflow-hidden mb-6">
                  <img src={item.img} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out" alt={item.name} />
                  <div className="absolute top-4 left-4 bg-vanilla/90 backdrop-blur text-cocoa text-[10px] uppercase tracking-widest px-3 py-1.5 rounded-full font-medium">
                    {item.tag}
                  </div>
                  <button className="absolute bottom-4 right-4 w-12 h-12 bg-vanilla rounded-full flex items-center justify-center text-cocoa opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 hover:bg-caramel hover:text-vanilla shadow-lg">
                    <ShoppingBag size={18} />
                  </button>
                </div>
                <div>
                  <h3 className="font-playfair text-xl text-cocoa mb-1">{item.name}</h3>
                  <div className="flex items-center gap-2 mb-2">
                    <div className="flex text-caramel"><Star size={12} fill="currentColor"/><Star size={12} fill="currentColor"/><Star size={12} fill="currentColor"/><Star size={12} fill="currentColor"/><Star size={12} fill="currentColor"/></div>
                    <span className="text-xs text-milk/60 font-poppins">(4.9)</span>
                  </div>
                  <span className="font-poppins text-cocoa font-medium">{item.price}</span>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* Rotating Product Showcase */}
      <section ref={horizontalRef} className="relative h-[400vh] bg-vanilla">
        <div className="sticky top-0 h-screen w-full overflow-hidden bg-vanilla flex items-center">
          
          {/* Text Content (Left Side) */}
          <div className="w-full md:w-1/2 pl-6 pr-6 md:pl-24 relative z-20 h-[300px] md:h-[400px] flex items-center">
             
             {/* 01: Brownies */}
             <motion.div style={{ opacity: op1, y: y1, pointerEvents: "none" }} className="absolute">
               <span className="block text-caramel font-poppins text-sm uppercase tracking-[0.3em] mb-4">01. Our Pride</span>
               <h2 className="text-5xl md:text-7xl font-playfair text-cocoa leading-tight tracking-tight mb-6">
                 Signature <br/><span className="text-caramel italic">Brownies.</span>
               </h2>
               <p className="text-milk text-lg font-poppins max-w-md leading-relaxed">
                 The recipe that started it all. Impossibly fudgy, deeply chocolatey, and made with 70% dark Belgian couverture.
               </p>
             </motion.div>

             {/* 02: Hampers */}
             <motion.div initial={{ opacity: 0 }} style={{ opacity: op2, y: y2, pointerEvents: "none" }} className="absolute">
               <span className="block text-caramel font-poppins text-sm uppercase tracking-[0.3em] mb-4">02. Gifting</span>
               <h2 className="text-5xl md:text-7xl font-playfair text-cocoa leading-tight tracking-tight mb-6">
                 Bespoke <br/><span className="text-caramel italic">Hampers.</span>
               </h2>
               <p className="text-milk text-lg font-poppins max-w-md leading-relaxed">
                 Curated assortments of our finest bakes, elegantly packaged in premium boxes with custom ribbon and handwritten notes.
               </p>
             </motion.div>

             {/* 03: Cakes */}
             <motion.div initial={{ opacity: 0 }} style={{ opacity: op3, y: y3, pointerEvents: "none" }} className="absolute">
               <span className="block text-caramel font-poppins text-sm uppercase tracking-[0.3em] mb-4">03. Milestones</span>
               <h2 className="text-5xl md:text-7xl font-playfair text-cocoa leading-tight tracking-tight mb-6">
                 Celebration <br/><span className="text-caramel italic">Cakes.</span>
               </h2>
               <p className="text-milk text-lg font-poppins max-w-md leading-relaxed">
                 Towering layers of decadence for your most special moments. From rustic chocolate truffles to elegant floral buttercreams.
               </p>
             </motion.div>

             {/* 04: Tins */}
             <motion.div initial={{ opacity: 0 }} style={{ opacity: op4, y: y4, pointerEvents: "none" }} className="absolute">
               <span className="block text-caramel font-poppins text-sm uppercase tracking-[0.3em] mb-4">04. Anytime</span>
               <h2 className="text-5xl md:text-7xl font-playfair text-cocoa leading-tight tracking-tight mb-6">
                 Assorted <br/><span className="text-caramel italic">Tins.</span>
               </h2>
               <p className="text-milk text-lg font-poppins max-w-md leading-relaxed">
                 Brown-butter, sea salt, triple chocolate, and stuffed centers. A tin of our cookies is the ultimate midnight indulgence.
               </p>
             </motion.div>
          </div>

          {/* The Rotating Wheel (Right Side) */}
          <motion.div 
            style={{ 
              x: "-50%", y: "-50%",
              rotate: rotateWheel 
            }} 
            className="absolute top-1/2 left-[120vw] md:left-[80vw] w-[180vh] h-[180vh] md:w-[150vh] md:h-[150vh] rounded-full border border-caramel/20 z-10"
          >
             {/* Product 1: 0 deg (Left Edge) */}
             <motion.div style={{ rotate: counterRotate }} className="absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 md:w-96 md:h-96 rounded-full overflow-hidden shadow-2xl border-4 border-vanilla bg-vanilla">
               <img src="https://images.unsplash.com/photo-1606890737304-57a1ca8a5b62?q=80&w=1000&auto=format&fit=crop" className="w-full h-full object-cover" alt="" />
             </motion.div>

             {/* Product 2: 90 deg (Top Edge) */}
             <motion.div style={{ rotate: counterRotate }} className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 md:w-96 md:h-96 rounded-full overflow-hidden shadow-2xl border-4 border-vanilla bg-vanilla">
               <img src="https://images.unsplash.com/photo-1549465220-1a8b9238cd48?q=80&w=1000&auto=format&fit=crop" className="w-full h-full object-cover" alt="" />
             </motion.div>

             {/* Product 3: 180 deg (Right Edge) */}
             <motion.div style={{ rotate: counterRotate }} className="absolute right-0 top-1/2 translate-x-1/2 -translate-y-1/2 w-64 h-64 md:w-96 md:h-96 rounded-full overflow-hidden shadow-2xl border-4 border-vanilla bg-vanilla">
               <img src="https://images.unsplash.com/photo-1578985545062-69928b1d9587?q=80&w=1000&auto=format&fit=crop" className="w-full h-full object-cover" alt="" />
             </motion.div>

             {/* Product 4: 270 deg (Bottom Edge) */}
             <motion.div style={{ rotate: counterRotate }} className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-64 h-64 md:w-96 md:h-96 rounded-full overflow-hidden shadow-2xl border-4 border-vanilla bg-vanilla">
               <img src="https://images.unsplash.com/photo-1499636136210-6f4ee915583e?q=80&w=1000&auto=format&fit=crop" className="w-full h-full object-cover" alt="" />
             </motion.div>
          </motion.div>

        </div>
      </section>

      {/* Process & Ingredients */}
      <section className="py-32 px-6 lg:px-12 bg-cocoa text-vanilla text-center">
        <div className="max-w-5xl mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <Quote size={40} className="mx-auto text-caramel mb-8 opacity-50" />
            <h2 className="text-4xl lg:text-5xl font-playfair leading-relaxed mb-16">"We don't just bake desserts; we craft emotional experiences using 100% pure Belgian chocolate, French butter, and an uncompromising commitment to freshness."</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 border-t border-vanilla/20 pt-16">
            {[
              { title: "Pure Ingredients", desc: "No artificial flavors. We source the finest Belgian couverture chocolate." },
              { title: "Small Batch", desc: "Every order is freshly baked to guarantee that perfect fudgy texture." },
              { title: "Aesthetic Packaging", desc: "Unboxing a Frosting Frolics box is an experience in itself." }
            ].map((feature, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.2 }}>
                <h3 className="text-xl font-playfair text-caramel mb-4">{feature.title}</h3>
                <p className="font-poppins text-vanilla/70 text-sm leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Founder Story */}
      <section id="about" className="py-32 px-6 lg:px-12 max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-20">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 1 }}
          className="w-full lg:w-1/2 relative"
        >
          <div className="aspect-[3/4] rounded-t-full rounded-b-3xl overflow-hidden relative z-10 shadow-2xl">
            <img src="https://images.unsplash.com/photo-1556206079-6ca238a221f7?q=80&w=2000&auto=format&fit=crop" alt="The Baking Process" className="w-full h-full object-cover" />
          </div>
          <div className="absolute -bottom-6 -right-6 w-32 h-32 rounded-full border border-caramel -z-10"></div>
          <div className="absolute top-1/2 -left-12 md:-left-20 w-32 h-32 md:w-40 md:h-40 bg-vanilla rounded-full z-20 shadow-2xl flex items-center justify-center p-2">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
              className="absolute inset-3 border border-dashed border-caramel/50 rounded-full"
            ></motion.div>
            <div className="text-center relative z-10">
              <span className="block font-playfair text-caramel text-2xl md:text-3xl font-bold leading-none">100%</span>
              <span className="block font-poppins text-cocoa text-[9px] md:text-[11px] uppercase tracking-[0.2em] mt-2 font-medium">Handmade<br/>Mumbai</span>
            </div>
          </div>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 1, delay: 0.2 }}
          className="w-full lg:w-1/2"
        >
          <span className="text-caramel font-poppins uppercase tracking-[0.2em] text-sm">The Story</span>
          <h2 className="text-5xl lg:text-6xl font-playfair text-cocoa mt-4 mb-8">From a passion project to a luxury brand.</h2>
          <p className="font-poppins text-milk mb-6 leading-relaxed text-lg">
            Frosting Frolics began in a cozy Mumbai kitchen with a single mission: to create the perfect brownie. Not just a good brownie, but one that stops conversations.
          </p>
          <p className="font-poppins text-milk mb-10 leading-relaxed">
            Today, we are a premium home-bakery trusted by thousands to sweeten their celebrations. Every box that leaves our studio is a labor of love, designed to make you and your loved ones feel incredibly special.
          </p>
          <div className="flex items-center gap-6">
            <img src="/founder.jpg" alt="Bindi Khandwala" className="w-16 h-16 rounded-full object-cover object-top" />
            <div>
              <p className="font-playfair text-xl text-cocoa font-bold">Bindi Khandwala</p>
              <p className="font-poppins text-milk/70 text-sm">Founder, Frosting Frolics</p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Custom Orders / Gifting */}
      <section id="custom" className="py-32 bg-pink text-center px-6">
        <div className="max-w-3xl mx-auto">
          <Gift size={56} className="mx-auto text-caramel mb-8" />
          <h2 className="text-5xl lg:text-7xl font-playfair text-cocoa mb-6">The Art of Gifting</h2>
          <p className="font-poppins text-milk/80 mb-10 text-xl leading-relaxed">
            Corporate hampers, wedding favors, baby showers or birthday surprises. We customize premium dessert boxes that leave a lasting impression.
          </p>
          <button className="bg-cocoa text-vanilla px-12 py-5 rounded-full font-poppins text-sm uppercase tracking-widest hover:bg-caramel hover:text-vanilla transition-all shadow-xl hover:-translate-y-1">
            Inquire for Custom Orders
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-vanilla pt-24 pb-10 px-6 lg:px-12 border-t border-beige">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
          <div className="md:col-span-5">
            <h3 className="font-playfair text-4xl text-cocoa font-bold mb-6">Frosting Frolics</h3>
            <p className="font-poppins text-milk max-w-sm mb-8 leading-relaxed">A premium home-bakery in Mumbai crafting luxury chocolate experiences and aesthetic dessert gifts.</p>
            <div className="flex gap-4 text-cocoa">
              <a href="https://www.instagram.com/frostingfrolics/" target="_blank" className="w-12 h-12 rounded-full border border-cocoa/20 flex items-center justify-center hover:bg-caramel hover:text-vanilla hover:border-transparent transition-all">
                <Instagram size={20} />
              </a>
            </div>
          </div>
          
          <div className="md:col-span-3">
            <h4 className="font-playfair text-xl text-cocoa mb-6">Explore</h4>
            <ul className="space-y-4 font-poppins text-milk text-sm">
              <li><a href="#" className="hover:text-caramel transition-colors">Our Menu</a></li>
              <li><a href="#" className="hover:text-caramel transition-colors">Corporate Gifting</a></li>
              <li><a href="#" className="hover:text-caramel transition-colors">The Brand Story</a></li>
              <li><a href="#" className="hover:text-caramel transition-colors">Client Reviews</a></li>
            </ul>
          </div>
          
          <div className="md:col-span-4">
            <h4 className="font-playfair text-xl text-cocoa mb-6">Contact Studio</h4>
            <ul className="space-y-4 font-poppins text-milk text-sm">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-caramel shrink-0 mt-0.5" />
                <span>Mumbai, Maharashtra<br/>(Delivery across Mumbai & Suburbs)</span>
              </li>
              <li>hello@frostingfrolics.in</li>
              <li>+91 98195 76630</li>
            </ul>
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto border-t border-cocoa/10 pt-8 flex flex-col md:flex-row justify-between items-center text-xs font-poppins text-milk uppercase tracking-widest">
          <p>© 2026 Frosting Frolics. All rights reserved.</p>
          <div className="flex gap-8 mt-4 md:mt-0">
            <a href="#" className="hover:text-cocoa transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-cocoa transition-colors">Terms of Service</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
