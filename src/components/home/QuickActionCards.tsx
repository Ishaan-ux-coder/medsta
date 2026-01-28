'use client';

import { Phone, FileText } from "lucide-react";

export function QuickActionCards() {
  return (
    <div className="w-full max-w-2xl mx-auto px-4 mt-4 md:mt-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Call to Order Card */}
        <div className="bg-blue-50/80 border border-blue-100 rounded-xl p-4 md:p-6 flex items-center gap-4 hover:shadow-md transition-shadow cursor-pointer group">
          <div className="bg-white p-3 rounded-full shadow-sm group-hover:scale-110 transition-transform">
            <Phone className="h-6 w-6 text-red-500 fill-current" />
          </div>
          <div className="flex flex-col">
            <span className="text-gray-700 font-medium text-lg">
              Call <span className="font-bold text-gray-900">8354070437</span>
            </span>
            <span className="text-sm text-gray-500">to place order</span>
          </div>
        </div>

        {/* Upload Prescription Card */}
        <div className="bg-blue-50/80 border border-blue-100 rounded-xl p-4 md:p-6 flex items-center gap-4 hover:shadow-md transition-shadow cursor-pointer group">
          <div className="bg-white p-3 rounded-full shadow-sm group-hover:scale-110 transition-transform">
            <FileText className="h-6 w-6 text-gray-600" />
          </div>
          <div className="flex flex-col">
            <span className="text-gray-700 font-medium text-lg">
              Upload a <span className="font-bold text-gray-900">prescription</span>
            </span>
            <span className="text-sm text-gray-500">We'll help you place the order</span>
          </div>
        </div>
      </div>
    </div>
  );
}
