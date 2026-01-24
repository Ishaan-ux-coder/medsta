export interface ServiceProvider {
  id: string;
  name: string;
  specialization: string;
  image: string;
  rating: number;
  experience: number; // in years
  clinicAddress: string;
  consultationFee: number;
  availableSlots: string[];
  homeVisitAvailable: boolean;
  type: 'doctor' | 'physiotherapy' | 'nurse';
  about: string;
}

export interface Medicine {
  id: string;
  name: string;
  manufacturer: string;
  saltComposition: string;
  price: number;
  originalPrice: number; // MRP
  image: string;
  prescriptionRequired: boolean;
  description: string;
  benefits: string[];
  sideEffects: string[];
  directions: string;
}

export interface DiagnosticTest {
  id: string;
  name: string;
  labName: string;
  price: number;
  reportTime: string; // e.g., "24 hours"
  description: string;
  image: string; // Icon or relevant image
  featured: boolean;
}

export interface Booking {
  id: string;
  serviceId: string; // doctorId or testId
  serviceName: string;
  providerName: string; // Doctor or Lab name
  date: string;
  time: string;
  status: 'upcoming' | 'completed' | 'cancelled';
  type: 'appointment' | 'test' | 'home-care';
  image: string;
}

export interface Offer {
  id: string;
  title: string;
  description: string;
  discount: string; // e.g., "20% OFF"
  image: string;
  code: string;
  bgColor: string; // Tailwind class or hex
}

export interface Pharmacy {
    id: string;
    name: string;
    address: string;
    price: number;
    deliveryTime: string;
}

export type Category = {
  id: string;
  name: string;
  icon: any; // Lucide icon
  slug: string;
}
