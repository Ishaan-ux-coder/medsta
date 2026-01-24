'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface RotatingTextProps {
   texts: string[];
   interval?: number;
}

export function RotatingText({ texts, interval = 3000 }: RotatingTextProps) {
   const [index, setIndex] = useState(0);

   useEffect(() => {
      const timer = setInterval(() => {
         setIndex((prevIndex) => (prevIndex + 1) % texts.length);
      }, interval);

      return () => clearInterval(timer);
   }, [texts.length, interval]);

   return (
      <div className="inline-flex relative h-8 w-40 overflow-hidden items-center ml-1">
         <AnimatePresence mode="popLayout">
            <motion.span
               key={index}
               initial={{ y: "150%", opacity: 0 }}
               animate={{ y: "0%", opacity: 1 }}
               exit={{ y: "-150%", opacity: 0 }}
               transition={{ duration: 0.5, ease: "anticipate" }} // Changed ease for snappier feel
               className="absolute left-0 whitespace-nowrap text-primary font-semibold"
            >
               {texts[index]}
            </motion.span>
         </AnimatePresence>
      </div>
   );
}
