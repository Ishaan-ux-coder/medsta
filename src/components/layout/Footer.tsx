import Link from 'next/link';
import Image from 'next/image';
import { Facebook, Twitter, Instagram, Youtube, Linkedin, MessageSquare } from 'lucide-react';

export function Footer() {
  return (
    <footer className="w-full bg-[#18191a] text-white py-16"> {/* Dark/Black background */}
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 lg:gap-12">

          {/* Logo Column */}
          <div className="md:col-span-1">
            <div className="mb-6">
              <Image
                src="/medsta_logo2.svg"
                alt="Medsta Logo"
                width={140}
                height={50}
                className="h-12 w-auto brightness-0 invert" // Making it white for dark footer
              />
            </div>
            {/* Social icon circle from image logic usually bottom right, but standard footer places logo context left */}
          </div>

          {/* Column 2 */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold">Become a HERO</h3>
            <p className="text-xs text-gray-400 uppercase tracking-wider mb-4">For Providers</p>
            <ul className="space-y-3 text-sm text-gray-300">
              <li><Link href="#" className="hover:text-white">Join as a Clinic</Link></li>
              <li><Link href="#" className="hover:text-white">Join as a Doctor</Link></li>
              <li><Link href="#" className="hover:text-white">Join as a Pharmacy</Link></li>
              <li><Link href="#" className="hover:text-white">See all roles...</Link></li>
            </ul>
          </div>

          {/* Column 3 */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold">Learn More</h3>
            <p className="text-xs text-gray-400 uppercase tracking-wider mb-4">For You</p>
            <ul className="space-y-3 text-sm text-gray-300">
              <li><Link href="#" className="hover:text-white">About</Link></li>
              <li><Link href="#" className="hover:text-white">Terms & Condition</Link></li>
              <li><Link href="#" className="hover:text-white">Privacy Policy</Link></li>
              <li><Link href="#" className="hover:text-white">Fee & Payment Policy</Link></li>
              <li><Link href="#" className="hover:text-white">Delivery Policy</Link></li>
              <li><Link href="#" className="hover:text-white">Return, Refund Policy</Link></li>
              <li><Link href="#" className="hover:text-white">Cancellation Policy</Link></li>
              <li><Link href="#" className="hover:text-white">Blog</Link></li>
              <li><Link href="#" className="hover:text-white">Contact Us</Link></li>
            </ul>
          </div>

          {/* Column 4 */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h3 className="text-lg font-bold">Earn with us</h3>
              <p className="text-xs text-gray-400 uppercase tracking-wider mb-4">For Affiliates</p>
              <ul className="space-y-3 text-sm text-gray-300">
                <li><Link href="#" className="hover:text-white">Affiliate program</Link></li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-bold">Order From</h3>
              <ul className="space-y-3 text-sm text-gray-300">
                <li><Link href="#" className="hover:text-white">Web/App</Link></li>
                <li><Link href="#" className="hover:text-white">WhatsApp</Link></li>
                <li><Link href="#" className="hover:text-white">Call</Link></li>
              </ul>
            </div>
          </div>

          {/* Column 5: Links & Social */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold">Links</h3>
            <ul className="space-y-4 text-sm text-gray-300">
              <li><Link href="#" className="hover:text-white flex items-center gap-2"><MessageSquare className="h-5 w-5" /> WhatsApp</Link></li>
              <li><Link href="#" className="hover:text-white flex items-center gap-2"><Linkedin className="h-5 w-5" /> LinkedIn</Link></li>
              <li><Link href="#" className="hover:text-white flex items-center gap-2"><Instagram className="h-5 w-5" /> Instagram</Link></li>
              <li><Link href="#" className="hover:text-white flex items-center gap-2"><Youtube className="h-5 w-5" /> Youtube</Link></li>
            </ul>
          </div>

        </div>
      </div>
    </footer>
  );
}
