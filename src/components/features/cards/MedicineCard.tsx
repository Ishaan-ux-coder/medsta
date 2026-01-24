import { Plus } from "lucide-react";
import { Medicine } from "@/lib/types";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";

interface MedicineCardProps {
  medicine: Medicine;
}

export function MedicineCard({ medicine }: MedicineCardProps) {
  return (
    <Card className="flex flex-col h-full border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 rounded-2xl bg-white overflow-hidden group cursor-pointer">
      {/* Image Area */}
      <div className="relative w-full aspect-square bg-white border-b border-gray-50 p-4 flex items-center justify-center">
        <div className="relative w-full h-full">
          <Image
            src={medicine.image}
            alt={medicine.name}
            fill
            className="object-contain transition-transform duration-500 group-hover:scale-105"
          />
        </div>
        {/* Prescription Badge */}
        {medicine.prescriptionRequired && (
          <div className="absolute top-2 left-2 bg-rose-100 text-rose-600 text-[10px] font-bold px-2 py-0.5 rounded-full border border-rose-200 uppercase tracking-wide">
            Rx Required
          </div>
        )}
      </div>

      <CardContent className="p-4 space-y-3 flex-1 flex flex-col">
        <div>
          <h3 className="font-bold text-base text-gray-900 leading-tight line-clamp-2 h-10 mb-1 group-hover:text-primary transition-colors">{medicine.name}</h3>
          <p className="text-xs text-gray-400 font-medium uppercase tracking-wide">{medicine.manufacturer}</p>
        </div>

        <div className="mt-auto flex items-center justify-between pt-2">
          <div className="flex flex-col">
            <span className="text-xs text-gray-400 line-through decoration-gray-400">₹{medicine.originalPrice}</span>
            <span className="text-lg font-bold text-gray-900">₹{medicine.price}</span>
          </div>
          <Button size="icon" className="h-9 w-9 rounded-lg bg-teal-50 text-teal-600 hover:bg-teal-600 hover:text-white transition-colors shadow-none border border-teal-100">
            <Plus className="h-5 w-5" />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
