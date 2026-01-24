import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ShoppingCart, Share2, ShieldCheck, Truck, Store } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { MEDICINES, PHARMACIES } from "@/lib/data";

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function MedicineDetailPage({ params }: PageProps) {
  const { id } = await params;
  const medicine = MEDICINES.find((m) => m.id === id);

  if (!medicine) {
    notFound();
  }

  const discount = Math.round(((medicine.originalPrice - medicine.price) / medicine.originalPrice) * 100);

  return (
    <div className="flex flex-col min-h-screen bg-background relative">
      <header className="sticky top-0 z-40 bg-background/80 backdrop-blur p-4 flex items-center justify-between">
        <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" asChild>
            <Link href="/medicines">
                <ArrowLeft className="h-6 w-6" />
            </Link>
            </Button>
            <span className="font-semibold text-lg line-clamp-1">{medicine.name}</span>
        </div>
        <Button variant="ghost" size="icon">
            <Share2 className="h-5 w-5" />
        </Button>
      </header>

      <main className="flex-1 pb-24 md:pb-8 max-w-5xl mx-auto w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-4">
            {/* Left: Images */}
            <div className="space-y-4">
                <div className="relative aspect-square w-full bg-secondary/20 rounded-xl flex items-center justify-center border">
                    <Image src={medicine.image} alt={medicine.name} width={400} height={400} className="object-contain max-h-[80%]" />
                     {medicine.prescriptionRequired && (
                        <Badge variant="destructive" className="absolute top-4 left-4">Prescription Required</Badge>
                     )}
                </div>
                <div className="flex gap-2 overflow-x-auto pb-2">
                     {[1,2,3].map(i => (
                         <div key={i} className="h-20 w-20 shrink-0 border rounded-lg bg-secondary/10 flex items-center justify-center">
                             <Image src={medicine.image} alt="Thumb" width={50} height={50} className="object-contain" />
                         </div>
                     ))}
                </div>
            </div>

            {/* Right: Info */}
            <div className="space-y-6">
                <div>
                   <h1 className="text-2xl md:text-3xl font-bold">{medicine.name}</h1>
                   <p className="text-muted-foreground mt-1">By {medicine.manufacturer}</p>
                   <p className="text-sm font-medium text-primary mt-1">{medicine.saltComposition}</p>
                </div>

                <div className="flex items-end gap-3 border-b pb-6">
                    <div>
                         <span className="text-3xl font-bold">₹{medicine.price}</span>
                         <span className="text-sm text-muted-foreground line-through ml-2">₹{medicine.originalPrice}</span>
                    </div>
                    {discount > 0 && <Badge className="bg-green-600 mb-1">{discount}% OFF</Badge>}
                </div>
                
                 <div className="grid grid-cols-2 gap-4">
                     <div className="flex items-center gap-2 text-sm">
                         <ShieldCheck className="h-4 w-4 text-green-600" />
                         <span>Genuine Product</span>
                     </div>
                     <div className="flex items-center gap-2 text-sm">
                         <Truck className="h-4 w-4 text-blue-600" />
                         <span>Fast Delivery</span>
                     </div>
                 </div>

                <Tabs defaultValue="about" className="w-full">
                    <TabsList className="w-full justify-start overflow-x-auto">
                        <TabsTrigger value="about">About</TabsTrigger>
                        <TabsTrigger value="benefits">Benefits</TabsTrigger>
                        <TabsTrigger value="side-effects">Side Effects</TabsTrigger>
                    </TabsList>
                    <TabsContent value="about" className="mt-4 space-y-2">
                        <p className="text-sm text-muted-foreground leading-relaxed">{medicine.description}</p>
                        <p className="text-sm font-semibold mt-2">Directions:</p>
                        <p className="text-sm text-muted-foreground">{medicine.directions}</p>
                    </TabsContent>
                    <TabsContent value="benefits" className="mt-4">
                        <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-1">
                            {medicine.benefits.map((b, i) => <li key={i}>{b}</li>)}
                        </ul>
                    </TabsContent>
                    <TabsContent value="side-effects" className="mt-4">
                        <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-1">
                            {medicine.sideEffects.map((b, i) => <li key={i}>{b}</li>)}
                        </ul>
                    </TabsContent>
                </Tabs>
                
                {/* Pharmacies Nearby (Mock data reused but pricing/time mocked in list) */}
                <div className="space-y-3 pt-4">
                    <h3 className="font-semibold text-lg">Availability Near You</h3>
                    <div className="space-y-2">
                        {PHARMACIES.map(pharmacy => (
                            <Card key={pharmacy.id}>
                                <CardContent className="p-3 flex items-center justify-between">
                                    <div className="flex items-center gap-3">
                                         <div className="h-10 w-10 bg-orange-100 text-orange-600 rounded-full flex items-center justify-center">
                                             <Store className="h-5 w-5" />
                                         </div>
                                         <div>
                                             <h4 className="font-bold text-sm">{pharmacy.name}</h4>
                                             <p className="text-xs text-muted-foreground">{pharmacy.deliveryTime} • {pharmacy.address}</p>
                                         </div>
                                    </div>
                                    <div className="flex flex-col items-end gap-1">
                                        <span className="font-bold text-sm">₹{pharmacy.price}</span>
                                        <Button size="sm" variant="outline" className="h-7 text-xs">Add</Button>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>

            </div>
        </div>
      </main>

      {/* Sticky Bottom CTA Mobile */}
      <div className="fixed bottom-0 left-0 right-0 bg-background border-t p-4 flex items-center gap-3 md:hidden shadow-upper z-50">
          <Button size="lg" className="flex-1 rounded-full font-bold" asChild>
             <Link href={`/book/${medicine.id}?type=medicine`}>Add to Cart</Link>
          </Button>
      </div>

    </div>
  );
}
