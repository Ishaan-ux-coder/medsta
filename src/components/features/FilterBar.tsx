'use client';

import { Search, SlidersHorizontal } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { useState } from "react";

interface FilterBarProps {
    placeholder: string;
    filters: string[];
}

export function FilterBar({ placeholder, filters }: FilterBarProps) {
  const [activeFilter, setActiveFilter] = useState<string | null>(null);

  return (
    <div className="sticky top-[60px] z-30 bg-background border-b py-2 space-y-2">
      <div className="container mx-auto px-4 flex gap-2">
         <div className="relative flex-1">
             <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
             <Input 
                placeholder={placeholder} 
                className="pl-9 bg-secondary/50 h-10" 
             />
         </div>
         <Button variant="outline" size="icon" className="shrink-0">
             <SlidersHorizontal className="h-4 w-4" />
         </Button>
      </div>
      <div className="container mx-auto px-4 pb-1">
         <ScrollArea className="w-full whitespace-nowrap">
            <div className="flex w-max space-x-2 pb-2">
                {filters.map(filter => (
                    <Button 
                        key={filter} 
                        variant={activeFilter === filter ? "default" : "outline"} 
                        size="sm"
                        className="rounded-full h-8 text-xs"
                        onClick={() => setActiveFilter(activeFilter === filter ? null : filter)}
                    >
                        {filter}
                    </Button>
                ))}
            </div>
            <ScrollBar orientation="horizontal" className="hidden" />
         </ScrollArea>
      </div>
    </div>
  );
}
