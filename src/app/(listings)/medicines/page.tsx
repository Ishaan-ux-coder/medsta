import { ListingHeader } from "@/components/layout/ListingHeader";
import { FilterBar } from "@/components/features/FilterBar";
import { MedicineCard } from "@/components/features/cards/MedicineCard";
import { MEDICINES } from "@/lib/data";
import { PromotedBanners } from "@/components/promotions/PromotedBanners";

export default function MedicinesPage() {
  const filters = ["Prescription Not Required", "Tablets", "Syrups", "Vitamins", "First Aid"];

  return (
    <div className="flex flex-col min-h-screen">
      <ListingHeader title="Order Medicines" />
      <FilterBar placeholder="Search for medicines..." filters={filters} />


      <div className="container mx-auto px-4">
        <PromotedBanners targetPage="medicines" />
      </div>

      <div className="container mx-auto p-4 space-y-4">
        {MEDICINES.length > 0 ? (
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-3 md:gap-4">
            {MEDICINES.map(medicine => (
              <MedicineCard key={medicine.id} medicine={medicine} />
            ))}
          </div>
        ) : (
          <div className="py-20 text-center text-muted-foreground">
            No medicines found.
          </div>
        )}
      </div>
    </div>
  );
}
