export default function DetailLayout({ children }: { children: React.ReactNode }) {
  return (
     <div className="min-h-screen bg-background pb-20 md:pb-0">
        {children}
     </div>
  );
}
