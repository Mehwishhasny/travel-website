"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from 'next/link';

const images = [
  "/images/makkah1.jpg",
  "/images/madinah.jpg",
  "/images/safa-marwa.jpg",
  "/images/masjidJurana.jpg",
];

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="mt-4 mb-10 p-4 flex md:flex-row flex-col">
      <div className="relative md:w-1/2 w-full h-[400px] sm:h-[500px]">
    
        <Image
          src={images[currentIndex]}
          alt="Hero Image"
          layout="fill"
          objectFit="cover"
          className="rounded-lg"
        />

        
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/30 rounded-lg"></div>
        </div>


        <div className="md:w-1/2 w-full md:mt-0 mt-3 flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-gray-600 text-3xl sm:text-5xl font-extrabold mb-2 sm:mb-4">
            Make your dream Umrah and Hajj with our expert guidance
          </h1>
          <p className="text-gray-800 text-base sm:text-lg max-w-md leading-relaxed mb-4 sm:mb-6">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi perspiciatis, sint amet blanditiis aliquam suscipit ab rem, eveniet magnam aperiam tempora dignissimos vel, nemo mollitia hic maiores eius quos praesentium.
            </p>
          
          <button
            type="button"
            className="border-2 bg-[#B88E2F] text-white px-4 py-2 rounded-md hover:bg-gray-800 hover:text-white sm:text-lg text-sm transition-colors duration-300">
                <Link href="/about">
            Learn More 
            </Link>
          </button>
        </div>
      
    </div>
  );
};

export default Hero;
