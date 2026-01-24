import { Booking } from "@/lib/types";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Calendar, Clock, ChevronRight } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

interface BookingCardProps {
  booking: Booking;
}

export function BookingCard({ booking }: BookingCardProps) {
  const statusColors = {
      upcoming: "bg-blue-100 text-blue-700",
      completed: "bg-green-100 text-green-700",
      cancelled: "bg-red-100 text-red-700",
  };

  return (
    <Card className="mb-4 hover:shadow-md transition-all">
      <CardContent className="p-4">
        <div className="flex justify-between items-start mb-3">
             <div className="flex gap-3">
                 <Avatar className="h-12 w-12 rounded-lg">
                     <AvatarImage src={booking.image} />
                     <AvatarFallback>{booking.providerName.charAt(0)}</AvatarFallback>
                 </Avatar>
                 <div>
                     <h3 className="font-bold text-sm">{booking.serviceName}</h3>
                     <p className="text-xs text-muted-foreground">{booking.providerName}</p>
                 </div>
             </div>
             <Badge variant="outline" className={`border-0 ${statusColors[booking.status]}`}>
                 {booking.status}
             </Badge>
        </div>
        
        <div className="flex items-center gap-4 text-sm text-muted-foreground border-t pt-3 mt-3">
            <div className="flex items-center gap-1.5">
                <Calendar className="h-4 w-4" />
                <span>{booking.date}</span>
            </div>
            <div className="flex items-center gap-1.5">
                <Clock className="h-4 w-4" />
                <span>{booking.time}</span>
            </div>
        </div>

        <div className="mt-4 flex gap-2">
            {booking.status === 'upcoming' && (
                <>
                <Button size="sm" variant="outline" className="flex-1">Reschedule</Button>
                <Button size="sm" className="flex-1">View Details</Button>
                </>
            )}
             {booking.status === 'completed' && (
                <Button size="sm" variant="outline" className="flex-1">Book Again</Button>
            )}
        </div>
      </CardContent>
    </Card>
  );
}
