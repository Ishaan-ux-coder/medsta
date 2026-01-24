import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

export function AppCTA() {
   return (
      <div className="w-full bg-[#e0f7fa] py-16 md:py-24"> {/* Light Teal */}
         <div className="container mx-auto px-4 flex flex-col items-start max-w-4xl space-y-6">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight max-w-2xl">
               Book healthcare faster with the <span className="block">Medsta app</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-xl">
               Get access to exclusive features, real-time tracking, and a seamless booking experience.
            </p>
            <Button className="bg-[#1e3a8a] hover:bg-[#172554] text-white px-8 py-6 text-lg rounded-md font-semibold h-auto">
               <Download className="mr-2 h-5 w-5" /> Get the App
            </Button>
         </div>
      </div>
   );
}
