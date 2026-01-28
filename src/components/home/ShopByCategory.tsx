'use client';

import { useState } from "react";
import { ChevronRight, Package } from "lucide-react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

// Category Data
const CATEGORIES = [
    { id: "personal-care", name: "Personal Care", icon: "🧴" },
    { id: "health-conditions", name: "Health Conditions", icon: "🩺" },
    { id: "vitamins", name: "Vitamins & Supplements", icon: "💊" },
    { id: "diabetes", name: "Diabetes Care", icon: "🩸" },
    { id: "devices", name: "Healthcare Devices", icon: "📠" },
    { id: "homeopathy", name: "Homeopathic Medicine", icon: "🏺" },
];

export function ShopByCategory() {
    const [activeCategory, setActiveCategory] = useState("homeopathy");

    const selectedCategoryName = CATEGORIES.find(c => c.id === activeCategory)?.name || "Products";

    return (
        <section className="w-full max-w-[1400px] mx-auto px-4 py-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Shop by categories</h2>

            <div className="flex flex-col lg:flex-row gap-8">
                {/* Sidebar */}
                <div className="w-full lg:w-[280px] shrink-0 space-y-2">
                    {CATEGORIES.map((category) => (
                        <button
                            key={category.id}
                            onClick={() => setActiveCategory(category.id)}
                            className={cn(
                                "w-full flex items-center gap-4 px-4 py-3 rounded-xl transition-all text-left group relative overflow-hidden",
                                activeCategory === category.id
                                    ? "bg-orange-50/50 border border-orange-100 shadow-sm"
                                    : "hover:bg-gray-50"
                            )}
                        >
                            {/* Active Indicator Line */}
                            {activeCategory === category.id && (
                                <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-8 bg-orange-400 rounded-r-full" />
                            )}

                            <div className="w-8 h-8 flex items-center justify-center bg-gray-100 rounded-full text-lg group-hover:bg-white group-hover:shadow-sm transition-all text-gray-700">
                                {category.icon}
                            </div>
                            <span className={cn(
                                "font-medium text-sm transition-colors",
                                activeCategory === category.id ? "text-gray-900 font-bold" : "text-gray-500"
                            )}>
                                {category.name}
                            </span>

                            {activeCategory === category.id && (
                                <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 rotate-45 w-2 h-2 bg-orange-50 border-r border-t border-orange-100" />
                            )}
                        </button>
                    ))}
                </div>

                {/* Main Content Grid */}
                <div className="flex-1 bg-orange-50/30 rounded-3xl p-6 md:p-8 min-h-[500px] relative">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[1, 2, 3, 4, 5, 6].map((item) => (
                            <div key={item} className="bg-white rounded-2xl p-6 flex flex-col items-center justify-center text-center gap-4 shadow-sm hover:shadow-md transition-shadow cursor-pointer border border-transparent hover:border-orange-100 aspect-square">
                                <h3 className="text-sm font-medium text-gray-800">
                                    {selectedCategoryName.split(" ")[0]} for {["Skin Care", "Digestive Care", "Seniors", "Heart Care", "Kidney Care", "Sexual Health"][item - 1]}
                                </h3>
                                <div className="w-16 h-16 relative grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all">
                                    {/* Placeholder for Box Image */}
                                    <Package className="w-full h-full text-orange-300 fill-orange-100" />
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="mt-8 flex justify-end">
                        <Button variant="link" className="text-blue-600 font-semibold gap-1 hover:no-underline hover:text-blue-700">
                            View all {selectedCategoryName.toLowerCase()} products <ChevronRight className="h-4 w-4" />
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
}
