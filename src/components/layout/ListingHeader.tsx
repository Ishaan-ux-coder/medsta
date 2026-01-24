import { ArrowLeft, MapPin } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

interface ListingHeaderProps {
    title: string;
    backHref?: string;
}

export function ListingHeader({ title, backHref = "/" }: ListingHeaderProps) {
  return (
    <header className="sticky top-0 z-40 bg-background/95 backdrop-blur border-b">
      <div className="flex items-center gap-2 p-3 md:p-4 container mx-auto">
        <Button variant="ghost" size="icon" asChild className="-ml-2">
            <Link href={backHref}>
                <ArrowLeft className="h-5 w-5" />
            </Link>
        </Button>
        <div className="flex-1">
            <h1 className="text-lg font-bold leading-none">{title}</h1>
            <div className="flex items-center text-xs text-muted-foreground mt-1">
                <MapPin className="h-3 w-3 mr-0.5" />
                <span>Bangalore, India</span>
            </div>
        </div>
      </div>
    </header>
  );
}
