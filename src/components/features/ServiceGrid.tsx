import Link from "next/link";
import { Stethoscope, Pill, TestTube, Home, HeartPulse, Truck } from "lucide-react";

// Image 1 shows: Doctor, Medicines, Physiotherapy, Lab Tests, Home Nursing
const CATEGORIES = [
   { name: "Doctor", icon: Stethoscope, href: "/doctors" },
   { name: "Medicines", icon: Truck, href: "/medicines" }, // Using Truck for delivery look, or Pill
   { name: "Physiotherapy", icon: HeartPulse, href: "/doctors" },
   { name: "Lab Tests", icon: TestTube, href: "/lab-tests" },
   { name: "Home Nursing", icon: Home, href: "/doctors" },
];

export function ServiceGrid() {
   return (
      <div className="w-full max-w-[1400px] mx-auto px-4 py-8">
         <div className="grid grid-cols-2 md:grid-cols-5 gap-4 md:gap-8">
            {CATEGORIES.map((cat, index) => (
               <Link key={index} href={cat.href} className="group flex flex-col items-center gap-3">
                  <div className="w-full aspect-square bg-[#E8F5F6] rounded-2xl flex items-center justify-center transition-all duration-300 group-hover:bg-[#dbeceb] group-hover:shadow-md">
                     <cat.icon className="h-10 w-10 md:h-12 md:w-12 text-[#14b8a6] stroke-[1.5]" />
                  </div>
                  <span className="font-semibold text-[#576b70] text-sm md:text-base">{cat.name}</span>
               </Link>
            ))}
         </div>
      </div>
   );
}
