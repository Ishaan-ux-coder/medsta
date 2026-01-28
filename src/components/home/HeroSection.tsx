'use client';

import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { RotatingText } from "./RotatingText";

interface HeroSectionProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
}

export function HeroSection({ searchQuery, onSearchChange }: HeroSectionProps) {
  const placeholderTexts = ["Doctors", "Medicines", "Lab Tests", "Physiotherapy"];

  return (
    <section className="w-full bg-[#E0F7FA]/50 py-8 md:py-20 text-center space-y-6">
      <div className="container mx-auto px-4 space-y-4">
        <h1 className="text-2xl md:text-5xl font-bold tracking-tight text-foreground">
          Healthcare at your <span className="text-primary">doorstep</span>
        </h1>
        <p className="text-muted-foreground font-medium text-sm md:text-base">
          Doctors • Medicines • Lab Tests • Physiotherapy
        </p>

        <div className="max-w-2xl mx-auto mt-8 relative group">
          {/* Animated Placeholder Layer (Behind Input) */}
          {!searchQuery && (
            <div className="absolute left-12 md:left-14 top-1/2 -translate-y-1/2 z-0 pointer-events-none text-muted-foreground/60 flex items-center">
              <span>Search&nbsp;</span>
              <RotatingText texts={placeholderTexts} />
            </div>
          )}

          {/* Search Icon */}
          <Search className="absolute left-4 md:left-6 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground z-10" />

          {/* Actual Input */}
          <Input
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            className="pl-12 md:pl-14 h-12 md:h-14 rounded-full border-0 shadow-lg text-base bg-white focus:bg-white focus-visible:ring-0 focus-visible:ring-offset-0 placeholder-transparent z-10 relative transition-all"
            placeholder=" " /* Set explicit space to override default placeholder logic if any */
          />
        </div>
      </div>
    </section>
  );
}
