'use client';

import { Medicine } from "@/lib/types";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useCart } from "@/context/CartContext";

interface MedicineCardProps {
  medicine: Medicine;
}

export function MedicineCard({ medicine }: MedicineCardProps) {
  const { addItem } = useCart();

  // Calculate discount percentage
  const discount = Math.round(((medicine.originalPrice - medicine.price) / medicine.originalPrice) * 100);

  const handleAddToCart = (e: React.MouseEvent) => {
    e.stopPropagation(); // Prevent card click navigation if needed
    addItem({
      id: medicine.id,
      name: medicine.name,
      price: medicine.price,
      image: medicine.image,
      type: 'medicine'
    });
  };

  return (
    <Card className="flex flex-col h-full border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 rounded-xl bg-white overflow-hidden group cursor-pointer">

      <CardContent className="p-4 flex flex-col h-full">
        {/* Discount Badge */}
        <div className="self-start">
          <div className="bg-[#2563eb] text-white text-[10px] font-bold px-2 py-1 rounded-sm uppercase tracking-wide">
            {discount}% OFF
          </div>
        </div>

        {/* Image Area */}
        <div className="relative w-full aspect-[1.1/1] my-2 flex items-center justify-center">
          <div className="relative w-2/3 h-2/3">
            <Image
              src={medicine.image}
              alt={medicine.name}
              fill
              className="object-contain transition-transform duration-500 group-hover:scale-110"
            />
          </div>
        </div>

        {/* Product Info */}
        <div className="flex-1 space-y-2">
          <h3 className="font-medium text-sm text-gray-700 leading-snug line-clamp-2 h-10 group-hover:text-blue-600 transition-colors">
            {medicine.name}
          </h3>

          <div className="space-y-0.5">
            <div className="text-xs text-gray-400 line-through">MRP ₹{medicine.originalPrice}</div>
            <div className="flex items-center justify-between">
              <div className="text-xl font-bold text-gray-900">₹{medicine.price}</div>
              <Button
                variant="outline"
                onClick={handleAddToCart}
                className="h-8 px-4 text-blue-600 border-blue-200 hover:bg-blue-50 hover:text-blue-700 hover:border-blue-300 font-medium text-xs rounded-lg active:scale-95 transition-transform"
              >
                Add
              </Button>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
