import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BookingCard } from "@/components/features/cards/BookingCard";
import { BOOKINGS } from "@/lib/data";

export default function BookingsPage() {
  const upcoming = BOOKINGS.filter(b => b.status === "upcoming");
  const past = BOOKINGS.filter(b => b.status !== "upcoming");

  return (
    <div className="container mx-auto p-4 md:py-8 space-y-6 min-h-screen">
      <h1 className="text-2xl font-bold">My Bookings</h1>
      
      <Tabs defaultValue="upcoming">
        <TabsList className="grid w-full grid-cols-2 mb-4">
          <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
          <TabsTrigger value="past">Past</TabsTrigger>
        </TabsList>
        <TabsContent value="upcoming" className="space-y-4">
          {upcoming.length > 0 ? (
              upcoming.map(b => <BookingCard key={b.id} booking={b} />)
          ) : (
              <div className="text-center py-10 text-muted-foreground">No upcoming bookings.</div>
          )}
        </TabsContent>
        <TabsContent value="past" className="space-y-4">
           {past.length > 0 ? (
              past.map(b => <BookingCard key={b.id} booking={b} />)
          ) : (
              <div className="text-center py-10 text-muted-foreground">No past bookings.</div>
          )}
        </TabsContent>
      </Tabs>
    </div>
  );
}
