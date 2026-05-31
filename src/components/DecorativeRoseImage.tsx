 "use client";

import Image from "next/image";
import { useState } from "react";

type DecorativeRoseImageProps = {
  variant:
    | "pinkBouquet"
    | "whiteBouquet"
    | "blueLily"
    | "orangeLily"
    | "pinkWrappedBouquet"
    | "redWrappedBouquet"
    | "floralCornerSpray"
    | "whiteLilies"
    | "pinkLilyBouquet";
  className?: string;
  priority?: boolean;
};

const roseImages = {
  pinkBouquet: {
    src: "/flowers/pink-rose-bouquet.png",
    alt: "Illustrated bouquet of pink roses with lush leaves",
    width: 300,
    height: 300,
  },
  whiteBouquet: {
    src: "/flowers/white-rose-bouquet.png",
    alt: "Bouquet of white roses in bloom",
    width: 490,
    height: 490,
  },
  blueLily: {
    src: "/flowers/blue-lily.png",
    alt: "Blue lily of the valley flowers in watercolor art",
    width: 300,
    height: 361,
  },
  orangeLily: {
    src: "/flowers/orange-lily-vase.png",
    alt: "Orange lilies in artistic blue vase decor",
    width: 300,
    height: 300,
  },
  pinkWrappedBouquet: {
    src: "/flowers/pink-wrapped-bouquet.png",
    alt: "Wrapped bouquet of soft pink roses",
    width: 480,
    height: 480,
  },
  redWrappedBouquet: {
    src: "/flowers/red-pink-wrapped-bouquet.png",
    alt: "Wrapped bouquet of red and pink roses",
    width: 480,
    height: 480,
  },
  floralCornerSpray: {
    src: "/flowers/floral-corner-spray.png",
    alt: "Corner spray of white and pink flowers",
    width: 480,
    height: 480,
  },
  whiteLilies: {
    src: "/flowers/white-lilies.png",
    alt: "White lilies with green leaves",
    width: 400,
    height: 400,
  },
  pinkLilyBouquet: {
    src: "/flowers/pink-lily-bouquet.png",
    alt: "Wrapped bouquet of pink lilies",
    width: 400,
    height: 400,
  },
};

export default function DecorativeRoseImage({
  variant,
  className = "",
  priority = false,
}: DecorativeRoseImageProps) {
  const image = roseImages[variant];
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <span className={`relative inline-block overflow-visible ${className}`}>
      {!isLoaded && (
        <span className="absolute inset-0 rounded-full bg-rose-100/40 blur-2xl animate-pulse" />
      )}
      <Image
        src={image.src}
        alt={image.alt}
        width={image.width}
        height={image.height}
        priority={priority}
        onLoad={() => setIsLoaded(true)}
        className={`pointer-events-none relative z-10 h-auto w-full select-none object-contain drop-shadow-[0_18px_26px_rgba(225,29,72,0.14)] transition-all duration-700 ease-out ${
          isLoaded ? "scale-100 opacity-100 blur-0" : "scale-105 opacity-0 blur-xl"
        }`}
      />
    </span>
  );
}
