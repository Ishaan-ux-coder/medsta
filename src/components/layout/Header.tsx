import Link from 'next/link';
import Image from 'next/image';
import { ShoppingCart, MapPin, LogIn, Store } from 'lucide-react'; // Store icon for 'M' logo substitute if needed
import { Button } from '@/components/ui/button';

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-14 items-center justify-between px-4">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2 overflow-hidden">
          <Image
            src="/medsta_logo2.svg"
            alt="Medsta Logo"
            width={150}
            height={48}
            className="h-12 w-auto object-contain scale-110 ml-2" // Scale up slightly to "crop" whitespace if any, tight fit
            priority
          />
        </Link>

        {/* Right Side Actions */}
        <div className="flex items-center gap-6">
          {/* Location Display */}
          <div className="hidden md:flex items-center text-sm font-medium text-muted-foreground gap-1.5 cursor-pointer hover:text-primary transition-colors">
            <MapPin className="h-4 w-4 text-primary" />
            <span>Unknown</span>
          </div>

          {/* Cart */}
          <Button size="icon" variant="ghost" className="text-foreground hover:bg-secondary">
            <ShoppingCart className="h-5 w-5" />
          </Button>

          {/* Login Button */}
          <Button className="hidden md:flex bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-6 rounded-md">
            <LogIn className="h-4 w-4 mr-2" /> Login
          </Button>
        </div>
      </div>
    </header>
  );
}
