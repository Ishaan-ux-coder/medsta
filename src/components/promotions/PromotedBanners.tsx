'use client';

import * as React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Autoplay from 'embla-carousel-autoplay';

import { Card, CardContent } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { Skeleton } from '@/components/ui/skeleton';

// --- Types ---

type TargetPage = 'home' | 'doctors' | 'medicines' | 'lab-tests' | 'physiotherapy';

interface PromotedBanner {
  id: string;
  providerId: string;
  providerName: string;
  bannerImageUrl: string;
  imageHint: string;
  targetPage: TargetPage;
  clickUrl: string;
  startDate: string; // ISO string
  endDate: string;   // ISO string
  isActive: boolean;
  paymentAmount: number;
  createdAt: string; // ISO string
}

interface PromotedBannersProps {
  targetPage: TargetPage;
}

// --- Mock Data ---

const MOCK_BANNERS: PromotedBanner[] = [
  {
    id: '1',
    providerId: 'prov_1',
    providerName: 'City Health Clinic',
    bannerImageUrl: 'https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?auto=format&fit=crop&q=80&w=2091&ixlib=rb-4.0.3',
    imageHint: 'doctor smiling',
    targetPage: 'home',
    clickUrl: '/doctors',
    startDate: '2024-01-01T00:00:00Z',
    endDate: '2029-12-31T23:59:59Z',
    isActive: true,
    paymentAmount: 100,
    createdAt: '2024-01-01T00:00:00Z',
  },
  {
    id: '2',
    providerId: 'prov_2',
    providerName: 'MediCare Plus',
    bannerImageUrl: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3',
    imageHint: 'medicine',
    targetPage: 'medicines',
    clickUrl: '/medicines',
    startDate: '2024-01-01T00:00:00Z',
    endDate: '2029-12-31T23:59:59Z',
    isActive: true,
    paymentAmount: 150,
    createdAt: '2024-01-01T00:00:00Z',
  },
  {
    id: '3',
    providerId: 'prov_3',
    providerName: 'PhysioFit',
    bannerImageUrl: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3',
    imageHint: 'physiotherapy',
    targetPage: 'physiotherapy',
    clickUrl: '/physiotherapy',
    startDate: '2024-01-01T00:00:00Z',
    endDate: '2029-12-31T23:59:59Z',
    isActive: true,
    paymentAmount: 200,
    createdAt: '2024-01-01T00:00:00Z',
  },
   {
    id: '4',
    providerId: 'prov_4',
    providerName: 'Lab Diagnostics',
    bannerImageUrl: 'https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3',
    imageHint: 'microscope',
    targetPage: 'lab-tests',
    clickUrl: '/lab-tests',
    startDate: '2024-01-01T00:00:00Z',
    endDate: '2029-12-31T23:59:59Z',
    isActive: true,
    paymentAmount: 120,
    createdAt: '2024-01-01T00:00:00Z',
  },
  {
    id: '5',
    providerId: 'prov_5',
    providerName: 'Specialist Doctors',
    bannerImageUrl: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3',
    imageHint: 'doctors group',
    targetPage: 'doctors',
    clickUrl: '/doctors',
    startDate: '2024-01-01T00:00:00Z',
    endDate: '2029-12-31T23:59:59Z',
    isActive: true,
    paymentAmount: 300,
    createdAt: '2024-01-01T00:00:00Z',
  },
   {
    id: '6',
    providerId: 'prov_1',
    providerName: 'City Health Clinic',
    bannerImageUrl: 'https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3',
    imageHint: 'hospital building',
    targetPage: 'home', // Displaying on home as well to have multiple items in carousel
    clickUrl: '/doctors',
    startDate: '2024-01-01T00:00:00Z',
    endDate: '2029-12-31T23:59:59Z',
    isActive: true,
    paymentAmount: 100,
    createdAt: '2024-01-01T00:00:00Z',
  },
];

export function PromotedBanners({ targetPage }: PromotedBannersProps) {
  const [banners, setBanners] = React.useState<PromotedBanner[]>([]);
  const [loading, setLoading] = React.useState(true);
  const plugin = React.useRef(
    Autoplay({ delay: 5000, stopOnInteraction: true })
  );

  React.useEffect(() => {
    // Simulate data fetching
    const fetchBanners = async () => {
      setLoading(true);
      await new Promise((resolve) => setTimeout(resolve, 800)); // 800ms delay

      const now = new Date();
      const filteredBanners = MOCK_BANNERS.filter((banner) => {
        const startDate = new Date(banner.startDate);
        const endDate = new Date(banner.endDate);

        return (
          banner.isActive &&
          banner.targetPage === targetPage &&
          now >= startDate &&
          now <= endDate
        );
      });

      setBanners(filteredBanners);
      setLoading(false);
    };

    fetchBanners();
  }, [targetPage]);

  if (loading) {
    return (
      <div className="w-full py-6">
        <Skeleton className="h-[200px] w-full rounded-xl" />
      </div>
    );
  }

  if (banners.length === 0) {
    return null;
  }

  return (
    <div className="w-full py-6">
      <Carousel
        plugins={[plugin.current]}
        className="w-full"
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.reset}
      >
        <CarouselContent>
          {banners.map((banner) => (
            <CarouselItem key={banner.id}>
              <Link href={banner.clickUrl} className="block relative h-[200px] md:h-[300px] w-full overflow-hidden rounded-xl">
                 <Image
                    src={banner.bannerImageUrl}
                    alt={`${banner.providerName} Promotion`}
                    fill
                    className="object-cover transition-transform duration-500 hover:scale-105"
                    priority
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
                     <p className="text-white text-sm font-medium opacity-90">Sponsored by {banner.providerName}</p>
                  </div>
              </Link>
            </CarouselItem>
          ))}
        </CarouselContent>
         <CarouselPrevious className="left-4" />
         <CarouselNext className="right-4" />
      </Carousel>
    </div>
  );
}
