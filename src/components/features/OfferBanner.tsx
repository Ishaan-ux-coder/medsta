'use client';

import * as React from "react";
import Autoplay from "embla-carousel-autoplay";
import { ArrowRight, Copy } from "lucide-react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";

// Large Banner Data with visual richness + Codes
const BANNERS = [
   {
      id: "b1",
      title: "Medicines delivered in 30 minutes",
      description: "Get your medicines delivered at your doorstep, fast.",
      buttonText: "Order Now",
      image: "https://images.unsplash.com/photo-1576602976047-174e57a47881?q=80&w=2069&auto=format&fit=crop", // Green/Teal Pharmacy
      overlayColor: "bg-black/30",
      code: "MED25"
   },
   {
      id: "b2",
      title: "Flat 25% off on all health checkups!",
      description: "Book now and take a step towards a healthier you.",
      buttonText: "Book Now",
      image: "https://images.unsplash.com/photo-1551076805-e1869033e561?q=80&w=2070&auto=format&fit=crop", // Surgery/Doctors
      overlayColor: "bg-black/50",
      code: "HEALTH50"
   },
   {
      id: "b3",
      title: "Expert Physiotherapy at Home",
      description: "Professional care for your recovery and wellness.",
      buttonText: "Book Visit",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=2070&auto=format&fit=crop", // Physio/Massage
      overlayColor: "bg-black/40",
      code: "PHYSIO"
   }
];

export function OfferBanner() {
   const plugin = React.useRef(
      Autoplay({ delay: 5000, stopOnInteraction: true })
   );

   return (
      <div className="w-full px-4">
         <Carousel
            plugins={[plugin.current]}
            className="w-full max-w-5xl mx-auto rounded-2xl overflow-hidden shadow-lg"
            onMouseEnter={plugin.current.stop}
            onMouseLeave={plugin.current.reset}
         >
            <CarouselContent className="-ml-0">
               {BANNERS.map((banner) => (
                  <CarouselItem key={banner.id} className="pl-0">
                     <div className="relative aspect-[2/1] md:aspect-[2.5/1]">
                        {/* Background Image */}
                        <div
                           className="absolute inset-0 bg-cover bg-center transition-transform duration-700 hover:scale-105"
                           style={{ backgroundImage: `url(${banner.image})` }}
                        />
                        {/* Overlay */}
                        <div className={`absolute inset-0 ${banner.overlayColor}`} />

                        {/* Content */}
                        <div className="absolute inset-0 flex flex-col justify-end p-8 md:p-12 text-white">
                           <div className="max-w-2xl space-y-4">
                              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold leading-tight drop-shadow-md">
                                 {banner.title}
                              </h2>
                              <p className="text-sm md:text-lg text-white/95 font-medium drop-shadow-sm max-w-lg">
                                 {banner.description}
                              </p>
                              <Button className="bg-[#1e40af] hover:bg-[#1e3a8a] text-white font-semibold rounded-md px-6 mt-2 w-fit flex items-center gap-2 border-none shadow-lg">
                                 {banner.buttonText} <ArrowRight className="h-4 w-4" />
                              </Button>
                           </div>
                        </div>
                     </div>
                  </CarouselItem>
               ))}
            </CarouselContent>
            <CarouselPrevious className="left-4 bg-white/90 hover:bg-white text-black border-none h-10 w-10 md:h-12 md:w-12 shadow-md hidden md:flex" />
            <CarouselNext className="right-4 bg-white/90 hover:bg-white text-black border-none h-10 w-10 md:h-12 md:w-12 shadow-md hidden md:flex" />
         </Carousel>
      </div>
   );
}
