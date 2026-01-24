import Link from "next/link";
import { Clock, FlaskConical, Home } from "lucide-react";
import { DiagnosticTest } from "@/lib/types";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface TestCardProps {
   test: DiagnosticTest;
}

export function TestCard({ test }: TestCardProps) {
   return (
      <Card className="flex flex-col h-full border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 rounded-2xl bg-white overflow-hidden group">
         <CardContent className="p-5 flex-1 space-y-4">
            {/* Header with Icon */}
            <div className="flex items-start gap-4">
               <div className="h-12 w-12 shrink-0 rounded-xl bg-teal-50 flex items-center justify-center text-teal-600 transition-colors group-hover:bg-teal-100">
                  <FlaskConical className="h-7 w-7 stroke-[1.5]" />
               </div>
               <div className="space-y-1">
                  {/* Title with better line-clamp styling */}
                  <h3 className="font-bold text-lg text-gray-900 leading-snug line-clamp-2 h-14" title={test.name}>
                     {test.name}
                  </h3>
                  <p className="text-sm text-gray-500 font-medium">{test.labName}</p>
               </div>
            </div>

            {/* Features List */}
            <div className="space-y-3 pt-2">
               <div className="flex items-center gap-2.5 text-gray-500 text-sm">
                  <Home className="h-4 w-4 shrink-0 text-gray-400" />
                  <span>Home sample collection</span>
               </div>
               <div className="flex items-center gap-2.5 text-gray-500 text-sm">
                  <Clock className="h-4 w-4 shrink-0 text-gray-400" />
                  <span>Reports in {test.reportTime}</span>
               </div>
            </div>
         </CardContent>

         <CardFooter className="p-5 pt-0 flex items-center justify-between mt-auto">
            <div className="text-2xl font-bold text-gray-900">₹{test.price}</div>
            <Button className="bg-[#14b8a6] hover:bg-[#0d9488] text-white font-semibold px-6 rounded-lg h-10 shadow-md transition-transform active:scale-95">
               Book Now
            </Button>
         </CardFooter>
      </Card>
   );
}
