'use client';

import { useState } from 'react';
import { HeroSection } from "@/components/home/HeroSection";
import { OfferTickets } from "@/components/features/OfferTickets";
import { OfferBanner } from "@/components/features/OfferBanner";
import { ServiceGrid } from "@/components/features/ServiceGrid";
import { PromotedBanners } from "@/components/promotions/PromotedBanners";
import { QuickActionCards } from "@/components/home/QuickActionCards";
import { BottomPromotions } from "@/components/home/BottomPromotions";
import { ShopByCategory } from "@/components/home/ShopByCategory";

import { TrustStrip } from "@/components/features/TrustStrip";
import { AppCTA } from "@/components/features/AppCTA";
import { DoctorCard } from "@/components/features/cards/DoctorCard";
import { TestCard } from "@/components/features/cards/TestCard";
import { MedicineCard } from "@/components/features/cards/MedicineCard";
import { DOCTORS, LAB_TESTS, MEDICINES } from "@/lib/data";
import { ServiceProvider, DiagnosticTest, Medicine } from "@/lib/types";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight } from "lucide-react";

export default function HomePage() {
    const [searchQuery, setSearchQuery] = useState('');
    const [searchResults, setSearchResults] = useState<(ServiceProvider | DiagnosticTest | Medicine)[]>([]);

    // Type guards to help with rendering
    const isDoctor = (item: any): item is ServiceProvider => item.type === 'doctor';
    const isTest = (item: any): item is DiagnosticTest => item.labName !== undefined;
    const isMedicine = (item: any): item is Medicine => item.saltComposition !== undefined;

    const handleSearch = (query: string) => {
        setSearchQuery(query);

        if (!query.trim()) {
            setSearchResults([]);
            return;
        }

        const lowerQuery = query.toLowerCase();

        // 1. Search Doctors
        const matchedDoctors = DOCTORS.filter(doc =>
            doc.name.toLowerCase().includes(lowerQuery) ||
            doc.specialization.toLowerCase().includes(lowerQuery)
        );

        // 2. Search Medicines
        const matchedMedicines = MEDICINES.filter(med =>
            med.name.toLowerCase().includes(lowerQuery) ||
            med.saltComposition.toLowerCase().includes(lowerQuery) ||
            med.manufacturer.toLowerCase().includes(lowerQuery)
        );

        // 3. Search Tests
        const matchedTests = LAB_TESTS.filter(test =>
            test.name.toLowerCase().includes(lowerQuery) ||
            test.labName.toLowerCase().includes(lowerQuery)
        );

        setSearchResults([...matchedDoctors, ...matchedMedicines, ...matchedTests]);
    };

    return (
        <div className="flex flex-col min-h-screen bg-white">

            {/* 1. Hero Section (Controlled Inputs) */}
            <HeroSection searchQuery={searchQuery} onSearchChange={handleSearch} />

            <QuickActionCards />



            {/* CONDITIONAL CONTENT: SEARCH RESULTS vs DEFAULT HOME */}
            {searchQuery ? (
                <div className="container mx-auto px-4 py-8 min-h-[50vh]">
                    <h2 className="text-2xl font-bold mb-6">Search Results</h2>
                    {searchResults.length > 0 ? (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {searchResults.map((item) => (
                                <div key={item.id} className="h-full">
                                    {isDoctor(item) && <DoctorCard doctor={item} />}
                                    {isTest(item) && <TestCard test={item} />}
                                    {isMedicine(item) && <MedicineCard medicine={item} />}
                                </div>
                            ))}
                        </div>
                    ) : (
                        <div className="text-center py-20 text-muted-foreground">
                            <p className="text-lg">No results found for "{searchQuery}"</p>
                            <p className="text-sm">Try searching for "Cardiologist", "Paracetamol", or "Blood Test"</p>
                        </div>
                    )}
                </div>
            ) : (
                <>
                    {/* 2. Banners */}
                    <div className="mt-8 mb-4">
                        <OfferBanner />
                    </div>

                    {/* 3. Offer Cards - REMOVED */}

                    <BottomPromotions />

                    {/* 4. Categories */}
                    <ServiceGrid />

                    <div className="container mx-auto px-4 mb-8">
                        <PromotedBanners targetPage="home" />
                    </div>

                    {/* 5. Popular Services (Top Doctors) */}
                    <section className="py-8 w-full max-w-[1400px] mx-auto">
                        <div className="px-4 flex items-center justify-between mb-4">
                            <h2 className="text-2xl font-bold text-gray-900">Popular Services</h2>
                            <div className="flex gap-2">
                                <Button variant="outline" size="icon" className="h-9 w-9 rounded-full"><ArrowLeft className="h-4 w-4" /></Button>
                                <Button variant="outline" size="icon" className="h-9 w-9 rounded-full"><ArrowRight className="h-4 w-4" /></Button>
                            </div>
                        </div>
                        <ScrollArea className="w-full whitespace-nowrap pb-8">
                            <div className="flex w-max space-x-6 px-4">
                                {DOCTORS.map(doc => (
                                    <div key={doc.id} className="w-[280px] py-1"> {/* Added py-1 to ensure top shadow clearance too if needed */}
                                        <DoctorCard doctor={doc} />
                                    </div>
                                ))}
                                {/* Duplicate docs to fill carousel for demo */}
                                {DOCTORS.map((doc, i) => (
                                    <div key={`${doc.id}-dup-${i}`} className="w-[280px] py-1">
                                        <DoctorCard doctor={doc} />
                                    </div>
                                ))}
                            </div>
                            <ScrollBar orientation="horizontal" className="hidden" />
                        </ScrollArea>
                    </section>



                    {/* 5. Popular Diagnostic Tests */}
                    <section className="py-8 w-full max-w-[1400px] mx-auto bg-white">
                        <div className="px-4 flex items-center justify-between mb-4">
                            <h2 className="text-2xl font-bold text-gray-900">Popular Diagnostic Tests</h2>
                            <div className="flex gap-2">
                                <Button variant="outline" size="icon" className="h-9 w-9 rounded-full"><ArrowLeft className="h-4 w-4" /></Button>
                                <Button variant="outline" size="icon" className="h-9 w-9 rounded-full"><ArrowRight className="h-4 w-4" /></Button>
                            </div>
                        </div>
                        <ScrollArea className="w-full whitespace-nowrap pb-8">
                            <div className="flex w-max space-x-6 px-4">
                                {LAB_TESTS.map(test => (
                                    <div key={test.id} className="w-[320px] py-1">
                                        <TestCard test={test} />
                                    </div>
                                ))}
                                {LAB_TESTS.map((test, i) => (
                                    <div key={`test-dup-${i}`} className="w-[320px] py-1">
                                        <TestCard test={test} />
                                    </div>
                                ))}
                            </div>
                            <ScrollBar orientation="horizontal" className="hidden" />
                        </ScrollArea>
                    </section>

                    {/* 6. Popular Medicines */}
                    <section className="py-8 w-full max-w-[1400px] mx-auto bg-white mb-8">
                        <div className="px-4 flex items-center justify-between mb-4">
                            <h2 className="text-2xl font-bold text-gray-900">Popular Medicines</h2>
                            <div className="flex gap-2">
                                <Button variant="outline" size="icon" className="h-9 w-9 rounded-full"><ArrowLeft className="h-4 w-4" /></Button>
                                <Button variant="outline" size="icon" className="h-9 w-9 rounded-full"><ArrowRight className="h-4 w-4" /></Button>
                            </div>
                        </div>
                        <ScrollArea className="w-full whitespace-nowrap pb-8">
                            <div className="flex w-max space-x-6 px-4">
                                {MEDICINES.map(med => (
                                    <div key={med.id} className="w-[280px] py-1">
                                        <MedicineCard medicine={med} />
                                    </div>
                                ))}
                            </div>
                            <ScrollBar orientation="horizontal" className="hidden" />
                        </ScrollArea>
                    </section>

                    {/* 7. Shop By Category */}
                    <ShopByCategory />

                    {/* 8. Trust Strip */}
                    <TrustStrip />

                    {/* 8. App Download */}
                    <AppCTA />
                </>
            )}

        </div>
    );
}
