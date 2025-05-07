import { Button } from "@/components/ui/button";
import SectionHeading from "@/components/ui/section-heading";
import Image from "next/image";
import React from "react";
import AnimatedDiv from "@/components/ui/animations/animated-content";
export default function AboutHollis() {
  return (
    <AnimatedDiv>
      <section className="section-py container">
        <SectionHeading
          heading="Meet Your Wellness Guide"
          subHeading="Hollis Wilder"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <Image
            width={732}
            height={743}
            className="w-full h-auto"
            src="/images/ellis-portrait.png"
            alt="A picture of Hollis Wilder"
          />
          <div className="p-10 border border-black rounded-lg bg-white shadow-btn-xl flex w-full flex-col gap-6 md:-ml-20 h-auto text-lg items-start">
            <p>
              I’m Hollis Wilder—an award-winning chef, wellness innovator, and
              founder of Battered Brilliance. After overcoming the challenges of
              a bipolar diagnosis, I discovered the profound healing power of
              creativity, nourishment, and mindfulness. Now, I’ve combined these
              elements into a restorative wellness bundle designed to help you
              reset, refocus, and reignite your brilliance. Through guided
              meditation, visualization techniques, and mindful culinary
              training, you’ll cultivate balance, clarity, and joy — one
              transformative practice at a time.
              <br />
              <br />
              Hollis is;
            </p>
            <ul>
              <li> - An Entrepreneurial chef</li>
              <li> - Wellness innovator</li>
              <li> - 3x winner of the Food Network’s “Cupcake Wars”</li>
            </ul>
            <Button className="w-full lg:w-auto">Learn More</Button>
          </div>
        </div>
      </section>
    </AnimatedDiv>
  );
}
