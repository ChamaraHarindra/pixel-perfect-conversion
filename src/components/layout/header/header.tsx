"use client";
import { Button } from "@/components/ui/button";
import { ShoppingCart, UserCircle } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState, useCallback } from "react";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  // Memoize the scroll handler with useCallback
  const handleScroll = useCallback(() => {
    setIsScrolled(window.scrollY > 0);
  }, []);

  useEffect(() => {
    // Add scroll event listener with passive option for better performance
    window.addEventListener("scroll", handleScroll, { passive: true });
    // Initial check in case page is loaded in scrolled position
    handleScroll();
    // Clean up on unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]); // Dependency array includes the memoized function

  // Extract dynamic classes to improve readability
  const headerClasses = `fixed left-0 w-full z-50 transition-all duration-200 ease-in-out ${
    isScrolled ? "top-2 " : "top-4"
  }`;

  const containerClasses = `flex transition-all duration-200 ease-in-out items-center justify-between container gap-10 ${
    isScrolled
      ? "backdrop-blur-md bg-white/50 shadow-md rounded-lg py-2"
      : "py-4 px-4 md:px-0 w-[calc(100%-32px)]"
  }`;

  // Compute image dimensions once
  const logoWidth = isScrolled ? 210 : 262;
  const logoHeight = isScrolled ? 72 : 96;

  return (
    <header className={headerClasses}>
      <div className={containerClasses}>
        <Link href="/" aria-label="Battered Brilliance Home">
          <Image
            src="/images/logo.png"
            alt="Battered Brilliance"
            width={logoWidth}
            height={logoHeight}
            className="transition-all duration-200 ease-in-out"
            priority // Mark as priority image for LCP improvement
          />
        </Link>
        <nav className="flex items-center gap-3">
          <Button variant="defaultFont" size="icon" aria-label="Shopping Cart">
            <ShoppingCart />
          </Button>
          <Button variant="defaultFont" aria-label="Login">
            <UserCircle />
            <span className="hidden md:inline">Login</span>
          </Button>
        </nav>
      </div>
    </header>
  );
}
