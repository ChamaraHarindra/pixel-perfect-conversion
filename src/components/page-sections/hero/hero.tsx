import React from "react";
import { data } from "@/lib/data";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import HeroLabel from "@/components/ui/hero-label";
import { SplitTextAnimation } from "@/components/ui/animations/split-text-animation";
import AnimatedDiv from "@/components/ui/animations/animated-content";
export default function Hero() {
  return (
    <section className="hero pt-32 xl:pt-10 ">
      <AnimatedDiv duration={0.25}>
        <div className="container">
          <div className="hero__left">
            <SplitTextAnimation text="Transform Stress into Strength" as="h1" />
            <ul>
              {data.hero_points.map((point, index) => (
                <li key={index}>
                  <div className="bullet">
                    <Check size={16} />
                  </div>
                  <div className="flex flex-col gap-2">
                    <SplitTextAnimation text={point.heading} as="h3" />
                    <SplitTextAnimation text={point.desc} as="p" />
                  </div>
                </li>
              ))}
            </ul>
            <div className="flex flex-col lg:flex-row items-center gap-6 w-full lg:w-auto">
              <Button size={"lg"} className="w-full lg:w-auto">
                Buy Now
              </Button>
              <p className="text-2xl font-bold">From $99</p>
            </div>
          </div>
          <div className="hero__right">
            <Image
              src="/images/hero-portrait.png"
              alt="Hollis Wilder"
              width={690}
              height={732}
            />
            <HeroLabel
              className="top-4 left-0 left"
              label="Create to Heal"
              icon={
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0.5 0.508789C4.42939 0.635491 8.17121 2.25129 10.96 5.04004C13.8668 7.94685 15.5 11.8891 15.5 16C15.5 20.1109 13.8668 24.0531 10.96 26.96C8.17122 29.7487 4.42938 31.3635 0.5 31.4902V0.508789Z"
                    fill="#FF5656"
                    stroke="white"
                  />
                  <path
                    d="M31.5 31.4912C27.5706 31.3645 23.8288 29.7487 21.04 26.96C18.1332 24.0531 16.5 20.1109 16.5 16C16.5 11.8891 18.1332 7.94685 21.04 5.04004C23.8288 2.2513 27.5706 0.636474 31.5 0.509766L31.5 31.4912Z"
                    fill="#FF5656"
                    stroke="white"
                  />
                </svg>
              }
            />
            <HeroLabel
              className="top-1/2 -translate-y-1/2 right-0 right"
              label="Nourish to Thrive"
              icon={
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0.508789 31.5C0.63549 27.5706 2.25129 23.8288 5.04004 21.04C7.94685 18.1332 11.8891 16.5 16 16.5C20.1109 16.5 24.0531 18.1332 26.96 21.04C29.7487 23.8288 31.3635 27.5706 31.4902 31.5L0.508789 31.5Z"
                    fill="#FF5656"
                    stroke="white"
                  />
                  <path
                    d="M0.508789 15.5C0.63549 11.5706 2.25129 7.82879 5.04004 5.04004C7.94685 2.13323 11.8891 0.5 16 0.499999C20.1109 0.5 24.0531 2.13322 26.96 5.04004C29.7487 7.82878 31.3635 11.5706 31.4902 15.5L0.508789 15.5Z"
                    fill="#FF5656"
                    stroke="white"
                  />
                </svg>
              }
            />
            <HeroLabel
              className="bottom-20 left-4 left"
              label="Rise to Inspire"
              icon={
                <svg
                  width="33"
                  height="33"
                  viewBox="0 0 33 33"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <mask id="path-1-inside-1_58_5139" fill="white">
                    <path d="M15.0446 0.892344C18.1983 0.630979 21.3586 1.31066 24.126 2.84544C26.8934 4.38022 29.1436 6.70117 30.5919 9.51478C32.0402 12.3284 32.6217 15.5083 32.2628 18.6524C31.9039 21.7965 30.6207 24.7635 28.5755 27.1783C26.5303 29.5931 23.815 31.3472 20.7729 32.2188C17.7308 33.0904 14.4986 33.0404 11.4849 32.075C8.47127 31.1096 5.81157 29.2722 3.84216 26.7952C1.87274 24.3182 0.682072 21.3128 0.420708 18.1592L16.366 16.8377L15.0446 0.892344Z" />
                  </mask>
                  <path
                    d="M15.0446 0.892344C18.1983 0.630979 21.3586 1.31066 24.126 2.84544C26.8934 4.38022 29.1436 6.70117 30.5919 9.51478C32.0402 12.3284 32.6217 15.5083 32.2628 18.6524C31.9039 21.7965 30.6207 24.7635 28.5755 27.1783C26.5303 29.5931 23.815 31.3472 20.7729 32.2188C17.7308 33.0904 14.4986 33.0404 11.4849 32.075C8.47127 31.1096 5.81157 29.2722 3.84216 26.7952C1.87274 24.3182 0.682072 21.3128 0.420708 18.1592L16.366 16.8377L15.0446 0.892344Z"
                    fill="#FF5656"
                    stroke="white"
                    mask="url(#path-1-inside-1_58_5139)"
                  />
                </svg>
              }
            />
          </div>
        </div>
      </AnimatedDiv>
    </section>
  );
}
