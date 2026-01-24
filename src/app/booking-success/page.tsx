import Link from "next/link";
import { CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function BookingSuccessPage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-4 bg-background text-center space-y-6">
      <div className="rounded-full bg-green-100 p-6">
        <CheckCircle2 className="h-16 w-16 text-green-600" />
      </div>
      <div className="space-y-2">
        <h1 className="text-2xl font-bold">Booking Confirmed!</h1>
        <p className="text-muted-foreground max-w-xs mx-auto">
          Your appointment has been successfully booked. You will receive a confirmation message shortly.
        </p>
      </div>
      <div className="flex flex-col gap-3 w-full max-w-xs">
         <Button asChild size="lg" className="w-full">
            <Link href="/bookings">View My Bookings</Link>
         </Button>
         <Button variant="outline" asChild size="lg" className="w-full">
            <Link href="/">Go to Home</Link>
         </Button>
      </div>
    </div>
  );
}
