import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Star, MapPin, BadgeCheck, Clock, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { DOCTORS } from "@/lib/data";

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function DoctorDetailPage({ params }: PageProps) {
  const { id } = await params;
  const doctor = DOCTORS.find((d) => d.id === id);

  if (!doctor) {
    notFound();
  }

  return (
    <div className="flex flex-col min-h-screen bg-background relative">
      {/* Header */}
      <header className="sticky top-0 z-40 bg-background/80 backdrop-blur p-4 flex items-center gap-4">
        <Button variant="ghost" size="icon" asChild>
           <Link href="/doctors">
             <ArrowLeft className="h-6 w-6" />
           </Link>
        </Button>
        <span className="font-semibold text-lg">Doctor Details</span>
      </header>

      <main className="flex-1 p-4 space-y-6 pb-24 md:pb-8 max-w-4xl mx-auto w-full">
        {/* Profile Card */}
        <div className="flex flex-col md:flex-row gap-6 items-center md:items-start">
            <Avatar className="h-32 w-32 border-4 border-background shadow-lg">
                <AvatarImage src={doctor.image} className="object-cover" />
                <AvatarFallback>{doctor.name.charAt(0)}</AvatarFallback>
            </Avatar>
            <div className="flex-1 space-y-2 text-center md:text-left">
                <div className="flex flex-col md:flex-row items-center gap-2">
                    <h1 className="text-2xl font-bold">{doctor.name}</h1>
                    <BadgeCheck className="h-5 w-5 text-blue-500" />
                </div>
                <p className="text-muted-foreground font-medium">{doctor.specialization}</p>
                <div className="flex items-center justify-center md:justify-start gap-4 text-sm">
                    <div className="flex items-center bg-green-100 text-green-800 px-2 py-0.5 rounded font-bold">
                        <Star className="h-3.5 w-3.5 mr-1 fill-current" />
                        {doctor.rating}
                    </div>
                    <span className="text-muted-foreground">{doctor.experience} Years Exp.</span>
                </div>
            </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-3 gap-4 border-y py-4">
             <div className="text-center">
                 <div className="font-bold text-lg">500+</div>
                 <div className="text-xs text-muted-foreground">Patients</div>
             </div>
             <div className="text-center border-l border-r">
                 <div className="font-bold text-lg">15+</div>
                 <div className="text-xs text-muted-foreground">Years</div>
             </div>
             <div className="text-center">
                 <div className="font-bold text-lg">4.8</div>
                 <div className="text-xs text-muted-foreground">Rating</div>
             </div>
        </div>

        {/* About */}
        <div className="space-y-3">
            <h3 className="font-bold text-lg">About</h3>
             <p className="text-sm text-muted-foreground leading-relaxed">
                 {doctor.about}
             </p>
        </div>

        {/* Clinic Info */}
        <Card>
            <CardContent className="p-4 flex gap-4">
                <div className="h-12 w-12 bg-secondary rounded-full flex items-center justify-center shrink-0">
                    <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                    <h4 className="font-bold text-sm mb-1">Clinic Address</h4>
                    <p className="text-sm text-muted-foreground">{doctor.clinicAddress}</p>
                </div>
            </CardContent>
        </Card>

        {/* Availability */}
        <div className="space-y-3">
            <h3 className="font-bold text-lg flex items-center gap-2">
                <Calendar className="h-5 w-5" /> Available Today
            </h3>
            <div className="grid grid-cols-3 sm:grid-cols-4 gap-3">
                {doctor.availableSlots.map((slot) => (
                    <Button key={slot} variant="outline" className="text-xs h-10 border-primary/20 hover:bg-primary/5 hover:text-primary hover:border-primary">
                        {slot}
                    </Button>
                ))}
            </div>
        </div>
      </main>

      {/* Sticky Bottom CTA */}
      <div className="fixed bottom-0 left-0 right-0 bg-background border-t p-4 flex items-center justify-between md:hidden shadow-upper z-50">
          <div className="flex flex-col">
              <span className="text-xs text-muted-foreground">Consultation Fee</span>
              <span className="text-lg font-bold">₹{doctor.consultationFee}</span>
          </div>
          <Button size="lg" className="px-8 rounded-full" asChild>
              <Link href={`/book/${doctor.id}`}>Book Now</Link>
          </Button>
      </div>
      
      {/* Desktop CTA (hidden on mobile) */}
      <div className="hidden md:flex fixed bottom-8 right-8 z-50">
           <Button size="lg" className="rounded-full shadow-xl px-12 h-14 text-lg" asChild>
              <Link href={`/book/${doctor.id}`}>Book Appointment</Link>
           </Button>
      </div>

    </div>
  );
}
