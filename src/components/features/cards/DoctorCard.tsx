import { Star } from "lucide-react";
import { ServiceProvider } from "@/lib/types";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

interface DoctorCardProps {
  doctor: ServiceProvider;
}

export function DoctorCard({ doctor }: DoctorCardProps) {
  return (
    <Card className="flex flex-col h-full border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 rounded-2xl bg-white overflow-hidden group cursor-pointer">
      {/* Image Area */}
      <div className="relative w-full aspect-[4/3] bg-gray-50 overflow-hidden">
        <Image
          src={doctor.image}
          alt={doctor.name}
          fill
          className="object-cover object-top transition-transform duration-700 group-hover:scale-110"
        />
        {/* Overlay gradient for better text readability if we overlay stuff, but currently clean */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      <CardContent className="p-4 space-y-2 flex-1 flex flex-col">
        <div>
          <h3 className="font-bold text-lg text-gray-900 leading-tight group-hover:text-primary transition-colors">{doctor.name}</h3>
          <p className="text-sm text-gray-500 font-medium">{doctor.specialization}</p>
        </div>

        {/* Rating & Price Row */}
        <div className="flex items-center justify-between mt-auto pt-3">
          <div className="flex items-center gap-1 bg-amber-50 px-2 py-1 rounded-md text-amber-600 font-bold text-sm border border-amber-100">
            <Star className="h-3.5 w-3.5 fill-current" />
            <span>{doctor.rating}</span>
          </div>
          <div className="text-lg font-bold text-gray-900">
            ₹{doctor.consultationFee}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
