import { ShieldCheck, Clock, Wallet } from "lucide-react";

export function TrustStrip() {
  return (
    <div className="w-full bg-[#1e3a8a] py-16"> {/* Navy Blue, increased padding */}
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-white text-center md:text-left">

          <div className="flex flex-col items-center gap-4">
            <ShieldCheck className="h-12 w-12 stroke-[1.5]" />
            <div className="text-center">
              <h4 className="font-semibold text-lg mb-1">Verified Professionals</h4>
              {/* <p className="text-sm opacity-80">100% Background Checked</p> */}
              {/* Image 4 doesn't show subtext, just icons and labels clearly */}
            </div>
          </div>

          <div className="flex flex-col items-center gap-4">
            <Clock className="h-12 w-12 stroke-[1.5]" />
            <div className="text-center">
              <h4 className="font-semibold text-lg mb-1">On-Time Service</h4>
            </div>
          </div>

          <div className="flex flex-col items-center gap-4">
            <Wallet className="h-12 w-12 stroke-[1.5]" />
            <div className="text-center">
              <h4 className="font-semibold text-lg mb-1">Transparent Pricing</h4>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
