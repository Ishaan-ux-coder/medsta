import Link from "next/link";
import { User, Settings, CreditCard, MapPin, HelpCircle, LogOut, ChevronRight, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function ProfilePage() {
  const menuItems = [
      { icon: User, label: "Edit Profile", href: "#" },
      { icon: MapPin, label: "My Addresses", href: "#" },
      { icon: FileText, label: "My Reports", href: "#" },
      { icon: CreditCard, label: "Payment Methods", href: "#" },
      { icon: Settings, label: "Settings", href: "#" },
      { icon: HelpCircle, label: "Help & Support", href: "#" },
  ];

  return (
    <div className="container mx-auto p-4 md:py-8 space-y-6 min-h-screen">
       <div className="flex items-center gap-4 py-4 border-b">
           <Avatar className="h-20 w-20">
                <AvatarImage src="https://placehold.co/200x200/111827/ffffff?text=User" />
                <AvatarFallback>U</AvatarFallback>
           </Avatar>
           <div>
               <h1 className="text-xl font-bold">John Doe</h1>
               <p className="text-muted-foreground">+91 98765 43210</p>
               <Button variant="link" className="px-0 h-auto text-primary">View Activity</Button>
           </div>
       </div>

       <div className="space-y-1">
           {menuItems.map((item, index) => (
               <Link key={index} href={item.href} className="flex items-center justify-between p-4 hover:bg-secondary/50 rounded-lg transition-colors">
                   <div className="flex items-center gap-4">
                       <div className="p-2 bg-secondary rounded-full">
                           <item.icon className="h-5 w-5 text-muted-foreground" />
                       </div>
                       <span className="font-medium">{item.label}</span>
                   </div>
                   <ChevronRight className="h-5 w-5 text-muted-foreground/50" />
               </Link>
           ))}
       </div>

       <div className="pt-8">
           <Button variant="outline" className="w-full text-red-600 hover:text-red-700 hover:bg-red-50 border-red-200">
               <LogOut className="h-4 w-4 mr-2" /> Log Out
           </Button>
           <p className="text-center text-xs text-muted-foreground mt-4">Version 1.0.0</p>
       </div>
    </div>
  );
}
