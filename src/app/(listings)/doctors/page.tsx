import { ListingHeader } from "@/components/layout/ListingHeader";
import { FilterBar } from "@/components/features/FilterBar";
import { DoctorCard } from "@/components/features/cards/DoctorCard";
import { DOCTORS } from "@/lib/data";
import { PromotedBanners } from "@/components/promotions/PromotedBanners";

export default function DoctorsPage() {
  const filters = ["Available Today", "Home Visit", "Female", "Rating 4.0+", "Dermatologist", "General Physician"];

  return (
    <div className="flex flex-col min-h-screen">
      <ListingHeader title="Find Doctors" />
      <FilterBar placeholder="Search doctors, specialities..." filters={filters} />


      <div className="container mx-auto px-4">
        <PromotedBanners targetPage="doctors" />
      </div>

      <div className="container mx-auto p-4 space-y-4">
        {DOCTORS.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {DOCTORS.map(doctor => (
              <DoctorCard key={doctor.id} doctor={doctor} />
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-20 text-center text-muted-foreground">
            <p>No doctors found matching your criteria.</p>
          </div>
        )}
      </div>
    </div>
  );
}
