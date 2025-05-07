"use client";

import { splitText } from "@/lib/utils/text-splitter";
import { animate, stagger, type AnimationOptions } from "motion";
import { useEffect, useRef } from "react";

export interface SplitTextAnimationProps {
  /**
   * The text content to animate
   */
  text: string;
  /**
   * HTML tag to use for the text element
   * @default "h1"
   */
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span" | "div";
  /**
   * Additional CSS class names
   */
  className?: string;
  /**
   * Animation options
   */
  animationOptions?: Partial<AnimationOptions>;
  /**
   * Initial opacity value
   * @default 0
   */
  initialOpacity?: number;
  /**
   * Initial y-offset value
   * @default 10
   */
  initialY?: number;
  /**
   * Final opacity value
   * @default 1
   */
  finalOpacity?: number;
  /**
   * Final y-offset value
   * @default 0
   */
  finalY?: number;
  /**
   * Stagger delay between words (in seconds)
   * @default 0.5
   */
  staggerDelay?: number;
}

export function SplitTextAnimation({
  text,
  as = "h1",
  className = "",
  animationOptions,
  initialOpacity = 0,
  initialY = 10,
  finalOpacity = 1,
  finalY = 0,
  staggerDelay = 0.05,
}: SplitTextAnimationProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const Tag = as;

  useEffect(() => {
    document.fonts.ready.then(() => {
      if (!containerRef.current) return;

      // Hide the container until the fonts are loaded
      containerRef.current.style.visibility = "visible";

      const textElement = containerRef.current.querySelector(as);
      if (!textElement) return;

      const { words } = splitText(textElement);

      // Animate the words
      animate(
        words,
        { opacity: [initialOpacity, finalOpacity], y: [initialY, finalY] },
        {
          type: "spring",
          duration: 2,
          bounce: 0,
          delay: stagger(staggerDelay),
          ...animationOptions,
        }
      );
    });
  }, [
    text,
    as,
    animationOptions,
    initialOpacity,
    initialY,
    finalOpacity,
    finalY,
    staggerDelay,
  ]);

  return (
    <div
      className={`split-text-container ${className}`}
      ref={containerRef}
      style={{ visibility: "hidden" }}
    >
      <Tag>{text}</Tag>
      <style jsx>{`
        .split-text-container {
          width: 100%;
        }

        .split-word {
          will-change: transform, opacity;
        }
      `}</style>
    </div>
  );
}
