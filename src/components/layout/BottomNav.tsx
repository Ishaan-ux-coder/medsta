'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Home, Stethoscope, Pill, TestTube, Calendar } from 'lucide-react';
import { cn } from '@/lib/utils';

export function BottomNav() {
  const pathname = usePathname();

  const navItems = [
    { href: '/', icon: Home, label: 'Home' },
    { href: '/doctors', icon: Stethoscope, label: 'Doctors' },
    { href: '/medicines', icon: Pill, label: 'Meds' },
    { href: '/lab-tests', icon: TestTube, label: 'Labs' },
    { href: '/bookings', icon: Calendar, label: 'Bookings' },
  ];

  return (
    <div className="fixed bottom-0 left-0 z-50 w-full border-t bg-background md:hidden pb-safe">
      <div className="flex h-16 items-center justify-around">
        {navItems.map(({ href, icon: Icon, label }) => {
          const isActive = pathname === href || (href !== '/' && pathname.startsWith(href));
          return (
            <Link
              key={href}
              href={href}
              className={cn(
                "flex flex-col items-center justify-center space-y-1 text-xs transition-colors hover:text-primary w-full h-full",
                isActive ? "text-primary font-medium" : "text-muted-foreground"
              )}
            >
              <Icon className={cn("h-5 w-5", isActive && "fill-current")} />
              <span>{label}</span>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
