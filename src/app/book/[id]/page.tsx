'use client';

import * as React from "react";
import { useRouter, useSearchParams, useParams } from "next/navigation";
import Image from "next/image";
import { ArrowLeft, Calendar, Clock, MapPin, CreditCard, Wallet, Banknote } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { DOCTORS, MEDICINES, LAB_TESTS } from "@/lib/data";
import { ServiceProvider, Medicine, DiagnosticTest } from "@/lib/types";

// Helper to find item
const findItem = (id: string) => {
    return DOCTORS.find(d => d.id === id) || 
           MEDICINES.find(m => m.id === id) || 
           LAB_TESTS.find(t => t.id === id);
};

export default function BookingPage() {
  const router = useRouter();
  const params = useParams();
  const id = params?.id as string;
  const item = findItem(id);
  
  const [step, setStep] = React.useState(1);
  const [visitType, setVisitType] = React.useState<"clinic" | "home">("clinic");
  const [selectedDate, setSelectedDate] = React.useState<string | null>(null);
  const [selectedTime, setSelectedTime] = React.useState<string | null>(null);
  const [paymentMethod, setPaymentMethod] = React.useState("upi");

  if (!item) return <div className="p-10 text-center">Item not found</div>;

  const isDoctor = (item as ServiceProvider).type === 'doctor';
  const isMedicine = (item as Medicine).manufacturer !== undefined;
  
  // Total Steps: 
  // Doctors: 1 (Confirm/Type), 2 (Slot), 3 (Address if home), 4 (Pay) -> 3 or 4 steps.
  // Medicines: 1 (Confirm/Qty), 2 (Address), 3 (Pay).
  // Simplifying for prototype: Fixed 4 steps flow, skipping irrelevant ones visually.

  const handleNext = () => {
      if (step === 4) {
          router.push('/booking-success');
      } else {
          setStep(s => s + 1);
      }
  };

  const DATES = ["Mon, 26 Oct", "Tue, 27 Oct", "Wed, 28 Oct", "Thu, 29 Oct"];
  const SLOTS = ["09:00 AM", "10:00 AM", "11:30 AM", "02:00 PM", "04:30 PM", "06:00 PM"];

  return (
    <div className="flex flex-col min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-40 bg-background border-b p-4">
        <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" onClick={() => step > 1 ? setStep(s => s - 1) : router.back()}>
                <ArrowLeft className="h-6 w-6" />
            </Button>
            <div className="flex-1">
                <h1 className="font-semibold text-lg">
                    {step === 1 ? "Review Service" : 
                     step === 2 ? "Select Slot" : 
                     step === 3 ? "Confirm Address" : "Payment"}
                </h1>
                <div className="h-1 w-full bg-secondary mt-2 rounded-full overflow-hidden">
                    <div className="h-full bg-primary transition-all duration-300" style={{ width: `${(step / 4) * 100}%` }}></div>
                </div>
            </div>
        </div>
      </header>

      <main className="flex-1 p-4 pb-24 max-w-lg mx-auto w-full space-y-6">
        
        {/* Step 1: Service Confirmation */}
        {step === 1 && (
            <div className="space-y-6">
                <Card>
                    <CardContent className="p-4 flex gap-4">
                        <div className="h-20 w-20 bg-secondary rounded-lg overflow-hidden shrink-0">
                             <Image 
                                src={'image' in item ? item.image : '/placeholder.png'} 
                                alt={item.name} 
                                width={80} height={80} 
                                className="object-cover h-full w-full" 
                             />
                        </div>
                        <div>
                            <h3 className="font-bold">{item.name}</h3>
                            <p className="text-sm text-muted-foreground">
                                {'specialization' in item ? item.specialization : 
                                 'labName' in item ? item.labName : 
                                 'manufacturer' in item ? item.manufacturer : ''}
                            </p>
                            <p className="font-bold mt-1">
                                ₹{'consultationFee' in item ? item.consultationFee : item.price}
                            </p>
                        </div>
                    </CardContent>
                </Card>

                {isDoctor && (item as ServiceProvider).homeVisitAvailable && (
                    <div className="space-y-3">
                        <h4 className="font-semibold">Consultation Type</h4>
                        <RadioGroup value={visitType} onValueChange={(v) => setVisitType(v as any)} className="grid grid-cols-2 gap-4">
                             <div className={`border rounded-lg p-4 flex flex-col items-center gap-2 cursor-pointer transition-colors ${visitType === 'clinic' ? 'border-primary bg-primary/5' : ''}`} onClick={() => setVisitType('clinic')}>
                                 <div className="p-2 bg-secondary rounded-full"><MapPin className="h-5 w-5" /></div>
                                 <span className="font-medium text-sm">Clinic Visit</span>
                             </div>
                             <div className={`border rounded-lg p-4 flex flex-col items-center gap-2 cursor-pointer transition-colors ${visitType === 'home' ? 'border-primary bg-primary/5' : ''}`} onClick={() => setVisitType('home')}>
                                 <div className="p-2 bg-secondary rounded-full"><Wallet className="h-5 w-5" /></div> {/* Icon placeholder */}
                                 <span className="font-medium text-sm">Home Visit</span>
                             </div>
                        </RadioGroup>
                    </div>
                )}
            </div>
        )}

        {/* Step 2: Slots */}
        {step === 2 && (
            <div className="space-y-6">
                 <div className="space-y-3">
                    <h4 className="font-semibold flex items-center gap-2"><Calendar className="h-4 w-4" /> Select Date</h4>
                    <div className="flex gap-3 overflow-x-auto pb-2">
                        {DATES.map(date => (
                            <button 
                                key={date} 
                                onClick={() => setSelectedDate(date)}
                                className={`flex-shrink-0 px-4 py-3 rounded-xl border text-center transition-colors ${selectedDate === date ? 'bg-primary text-primary-foreground border-primary' : 'bg-background hover:bg-secondary'}`}
                            >
                                <div className="text-xs opacity-70">{date.split(',')[0]}</div>
                                <div className="font-bold">{date.split(',')[1]}</div>
                            </button>
                        ))}
                    </div>
                </div>

                <div className="space-y-3">
                    <h4 className="font-semibold flex items-center gap-2"><Clock className="h-4 w-4" /> Select Time</h4>
                    <div className="grid grid-cols-3 gap-3">
                        {SLOTS.map(slot => (
                            <button 
                                key={slot} 
                                onClick={() => setSelectedTime(slot)}
                                className={`px-2 py-2 rounded-lg border text-sm transition-colors ${selectedTime === slot ? 'bg-primary text-primary-foreground border-primary' : 'bg-background hover:bg-secondary'}`}
                            >
                                {slot}
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        )}

        {/* Step 3: Address */}
        {step === 3 && (
            <div className="space-y-4">
                 <h4 className="font-semibold">Confirm Location</h4>
                 <div className="p-4 border border-primary bg-primary/5 rounded-xl flex gap-3 items-start relative">
                     <MapPin className="h-5 w-5 text-primary mt-0.5" />
                     <div className="flex-1">
                         <h5 className="font-bold text-sm">Home</h5>
                         <p className="text-sm text-muted-foreground mt-1">123, Green Park Residency, Indiranagar, Bangalore - 560038</p>
                     </div>
                     <div className="absolute top-2 right-2 text-primary font-bold text-xs">SELECTED</div>
                 </div>
                 <Button variant="outline" className="w-full border-dashed">
                     + Add New Address
                 </Button>
            </div>
        )}

        {/* Step 4: Payment */}
        {step === 4 && (
            <div className="space-y-6">
                <Card>
                    <CardContent className="p-4 space-y-4">
                        <h4 className="font-semibold border-b pb-2">Payment Summary</h4>
                        <div className="flex justify-between text-sm">
                            <span className="text-muted-foreground">Service Fee</span>
                            <span>₹{'consultationFee' in item ? item.consultationFee : item.price}</span>
                        </div>
                        <div className="flex justify-between text-sm">
                            <span className="text-muted-foreground">Taxes & Fees</span>
                            <span>₹40</span>
                        </div>
                        <div className="flex justify-between text-base font-bold pt-2 border-t">
                            <span>Total Payable</span>
                            <span>₹{('consultationFee' in item ? item.consultationFee : item.price) + 40}</span>
                        </div>
                    </CardContent>
                </Card>

                <div className="space-y-3">
                    <h4 className="font-semibold">Payment Method</h4>
                    <RadioGroup value={paymentMethod} onValueChange={setPaymentMethod} className="space-y-3">
                        <div className="flex items-center space-x-3 border p-3 rounded-lg">
                           <RadioGroupItem value="upi" id="upi" />
                           <Label htmlFor="upi" className="flex items-center gap-2 cursor-pointer flex-1"><Wallet className="h-4 w-4 text-purple-600" /> UPI (GPay/PhonePe)</Label>
                        </div>
                        <div className="flex items-center space-x-3 border p-3 rounded-lg">
                           <RadioGroupItem value="card" id="card" />
                           <Label htmlFor="card" className="flex items-center gap-2 cursor-pointer flex-1"><CreditCard className="h-4 w-4 text-blue-600" /> Credit/Debit Card</Label>
                        </div>
                        <div className="flex items-center space-x-3 border p-3 rounded-lg">
                           <RadioGroupItem value="cash" id="cash" />
                           <Label htmlFor="cash" className="flex items-center gap-2 cursor-pointer flex-1"><Banknote className="h-4 w-4 text-green-600" /> Pay on Visit</Label>
                        </div>
                    </RadioGroup>
                </div>
            </div>
        )}

      </main>

      {/* Footer CTA */}
      <div className="fixed bottom-0 left-0 right-0 bg-background border-t p-4 z-50">
           <Button className="w-full h-12 text-lg font-bold rounded-xl" onClick={handleNext}>
               {step === 4 ? "Pay & Confirm" : "Continue"}
           </Button>
      </div>

    </div>
  );
}
