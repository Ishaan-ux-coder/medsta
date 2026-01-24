import { Button } from "@/components/ui/button";
import { ArrowRight, Copy } from "lucide-react";

export function OfferTickets() {
  const OFFERS = [
    {
      title: "40% OFF on Medicines",
      subtitle: "On your first order",
      cta: "Order Now",
      bg: "bg-[#14b8a6]", // Teal
      hover: "hover:bg-[#0d9488]",
      code: "MED40"
    },
    {
      title: "Lab Tests @ 20% OFF",
      subtitle: "Book from home",
      cta: "Book Now",
      bg: "bg-[#7c3aed]", // Purple
      hover: "hover:bg-[#6d28d9]",
      code: "LAB20"
    },
    {
      title: "FREE Delivery!",
      subtitle: "On orders above ₹299",
      cta: "Shop Now",
      bg: "bg-[#f87171]", // Red/Coral
      hover: "hover:bg-[#ef4444]",
      code: "FREEDEL"
    }
  ];

  return (
    <div className="w-full max-w-[1400px] mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {OFFERS.map((offer, index) => (
          <div key={index} className={`${offer.bg} rounded-2xl p-5 text-white shadow-lg transition-transform hover:scale-[1.02] cursor-pointer relative overflow-hidden group`}>
            <div className="relative z-10 space-y-3">
              <div className="flex justify-between items-start">
                <h3 className="text-xl md:text-2xl font-bold leading-tight max-w-[85%]">{offer.title}</h3>
                <div className="flex flex-col items-end">
                  <span className="text-[10px] font-bold opacity-90 uppercase tracking-wider mb-0.5">Code</span>
                  <div className="flex items-center gap-1.5 bg-white/20 backdrop-blur-sm px-2 py-0.5 rounded text-xs font-mono font-bold border border-white/20">
                    {offer.code} <Copy className="h-2.5 w-2.5" />
                  </div>
                </div>
              </div>
              <p className="text-white/90 font-medium text-sm">{offer.subtitle}</p>
              <Button variant="secondary" size="sm" className="rounded-full bg-white/20 hover:bg-white/30 text-white border-none backdrop-blur-sm px-5 h-9 text-sm">
                {offer.cta} <ArrowRight className="h-3.5 w-3.5 ml-1.5" />
              </Button>
            </div>
            {/* Decorative circle */}
            <div className="absolute -right-8 -bottom-8 w-24 h-24 bg-white/10 rounded-full blur-2xl group-hover:bg-white/20 transition-all"></div>
          </div>
        ))}
      </div>
    </div>
  );
}
