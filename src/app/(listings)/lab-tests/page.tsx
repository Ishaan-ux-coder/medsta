import { ListingHeader } from "@/components/layout/ListingHeader";
import { FilterBar } from "@/components/features/FilterBar";
import { TestCard } from "@/components/features/cards/TestCard";
import { LAB_TESTS } from "@/lib/data";
import { PromotedBanners } from "@/components/promotions/PromotedBanners";

export default function LabTestsPage() {
  const filters = ["Full Body Checkup", "Diabetes", "Thyroid", "Women's Health", "Fasting Required"];

  return (
    <div className="flex flex-col min-h-screen">
      <ListingHeader title="Book Lab Tests" />
      <FilterBar placeholder="Search tests, packages..." filters={filters} />


      <div className="container mx-auto px-4">
        <PromotedBanners targetPage="lab-tests" />
      </div>

      <div className="container mx-auto p-4 space-y-4">
        {LAB_TESTS.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {LAB_TESTS.map(test => (
              <TestCard key={test.id} test={test} />
            ))}
          </div>
        ) : (
          <div className="py-20 text-center text-muted-foreground">
            No tests found.
          </div>
        )}
      </div>
    </div>
  );
}
