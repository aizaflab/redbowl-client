"use client";

import Image from "next/image";
import { Icon } from "@iconify/react";
import { useState, useEffect } from "react";
import HeroImg1 from "@/public/img/elements/banner1.jpg";
import HeroImg2 from "@/public/img/elements/banner2.jpg";

export default function ImageSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Array of images for the slider
  const images = [
    {
      src: HeroImg1,
      alt: "Master chef at hibachi grill",
    },
    {
      src: HeroImg2,
      alt: "Teppanyaki cooking show",
    },
    {
      src: HeroImg1,
      alt: "Fresh sashimi preparation",
    },
    {
      src: HeroImg2,
      alt: "Restaurant interior ambiance",
    },
  ];

  // Auto-change images every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 4000);

    return () => clearInterval(interval);
  }, [currentIndex]);

  const handleNext = () => {
    if (isTransitioning) return;

    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
      setIsTransitioning(false);
    }, 150);
  };

  const handlePrev = () => {
    if (isTransitioning) return;

    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? images.length - 1 : prevIndex - 1
      );
      setIsTransitioning(false);
    }, 150);
  };

  const goToSlide = (index) => {
    if (isTransitioning || index === currentIndex) return;

    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentIndex(index);
      setIsTransitioning(false);
    }, 150);
  };

  return (
    <div className="relative z-10 w-full sm:h-[30rem] h-[20rem] overflow-hidden group">
      {/* Image Container */}
      <div className="relative w-full h-full">
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
              index === currentIndex
                ? "opacity-100 scale-100"
                : "opacity-0 scale-105"
            }`}
          >
            <Image
              src={image.src || "/placeholder.svg"}
              alt={image.alt}
              width={1000}
              height={1000}
              className="w-full object-cover h-full"
            />
          </div>
        ))}

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B1315]/60 via-transparent to-transparent"></div>

        {/* Additional Overlay for Better Text Readability */}
        <div className="absolute inset-0 bg-[#0B1315]/10"></div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={handlePrev}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 size-9 bg-[#0B1315]/80 backdrop-blur-sm border border-[#B0695E]/30 text-white hover:bg-[#B0695E] hover:border-[#B0695E] transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100 z-20"
      >
        <Icon icon="mdi:chevron-left" className="text-2xl" />
      </button>

      <button
        onClick={handleNext}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 size-9 bg-[#0B1315]/80 backdrop-blur-sm border border-[#B0695E]/30 text-white hover:bg-[#B0695E] hover:border-[#B0695E] transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100 z-20"
      >
        <Icon icon="mdi:chevron-right" className="text-2xl" />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-3 z-20">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full border border-white/50 transition-all duration-300 ${
              index === currentIndex
                ? "bg-[#B0695E] border-[#B0695E] scale-110"
                : "bg-white/20 hover:bg-white/40"
            }`}
          />
        ))}
      </div>

      {/* Progress Bar */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-white/10 z-20">
        <div
          className="h-full bg-[#B0695E] transition-all duration-75 ease-linear"
          style={{
            width: `${((currentIndex + 1) / images.length) * 100}%`,
          }}
        />
      </div>

      {/* Image Counter */}
      <div className="absolute sm:top-6 top-3 sm:right-6 right-3 bg-[#0B1315]/80 backdrop-blur-sm border border-[#B0695E]/30 px-4 py-2 text-white text-sm z-20">
        <span className="text-[#B0695E] font-medium">
          {String(currentIndex + 1).padStart(2, "0")}
        </span>
        <span className="text-white/60 mx-2">/</span>
        <span className="text-white/60">
          {String(images.length).padStart(2, "0")}
        </span>
      </div>
    </div>
  );
}
