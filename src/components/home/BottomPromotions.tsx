'use client';

import { Shield, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

export function BottomPromotions() {
    return (
        <div className="w-full max-w-[1400px] mx-auto px-4 my-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                {/* Banner 1: App Download / Bachat */}
                <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-blue-50 to-blue-100 p-6 md:p-8 flex items-center justify-between shadow-sm border border-blue-100">
                    <div className="z-10 max-w-[60%] space-y-3">
                        <div className="relative">
                            <Sparkles className="absolute -top-4 -left-4 text-yellow-400 h-6 w-6 animate-pulse" />
                            <h3 className="text-2xl md:text-3xl font-extrabold text-gray-900 leading-tight">
                                <span className="text-red-500 transform -rotate-6 inline-block text-sm md:text-lg absolute -top-5 left-0">Extra</span>
                                Same Bachat,<br />
                                Sirf <span className="text-green-600">App</span> Par!
                            </h3>
                        </div>
                        <Button className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold uppercase text-xs md:text-sm px-6 rounded-full shadow-md">
                            Download Now
                        </Button>
                    </div>

                    {/* Coupon styling element */}
                    <div className="bg-white p-3 rounded-lg shadow-md border border-dashed border-gray-300 transform rotate-3 w-[120px] md:w-[140px] text-center">
                        <div className="text-[10px] text-gray-500 uppercase font-bold tracking-wider">Exclusive Coupon</div>
                        <div className="my-1">
                            <span className="text-green-600 font-black text-3xl">27%</span>
                            <div className="text-xs font-bold text-gray-700">OFF</div>
                            <div className="text-[10px] text-gray-400">+1% cashback</div>
                        </div>
                        <div className="bg-gray-100 rounded px-2 py-1 mt-1">
                            <code className="text-[10px] font-mono text-gray-600">TRUAPP28</code>
                        </div>
                    </div>
                </div>

                {/* Banner 2: Lowest Price Guarantee */}
                <div className="relative overflow-hidden rounded-2xl bg-blue-600 p-6 md:p-8 flex flex-col justify-center text-white shadow-md">
                    <div className="relative z-10 w-full">
                        <div className="flex justify-between items-start">
                            <div>
                                <h3 className="text-2xl md:text-3xl font-extrabold italic uppercase tracking-wider mb-2">
                                    Lowest Price<br />Guaranteed
                                </h3>
                                <p className="text-blue-100 text-xs md:text-sm max-w-[80%] mb-4">
                                    Found a lower price online? We'll pay the difference in TM Cash up to
                                </p>
                            </div>
                        </div>

                        <div className="flex items-center gap-4 mt-2">
                            <div className="bg-white text-blue-800 font-black text-2xl md:text-3xl px-4 py-1 rounded-md transform -skew-x-12 shadow-sm">
                                ₹500
                            </div>
                            <Shield className="h-12 w-12 text-blue-300 opacity-80" />
                        </div>
                    </div>

                    {/* Background elements */}
                    <div className="absolute right-0 bottom-0 opacity-20 transform translate-x-1/4 translate-y-1/4">
                        {/* Abstract shape or icon could go here */}
                        <Shield className="h-48 w-48 text-white" />
                    </div>
                </div>

            </div>
        </div>
    );
}
