import SectionHeading from "@/components/ui/section-heading";
import { data } from "@/lib/data";
import Image from "next/image";
import AnimatedDiv from "@/components/ui/animations/animated-content";
export default function Testimonials() {
  return (
    <AnimatedDiv>
      <section className="section-py container">
        <SectionHeading
          heading="Having Second Thoughts?"
          subHeading="Read My Customer Experiences"
        />
        <div className="testimonials">
          {data.testimonials.map((testimonial) => (
            <div className="testimonial-card" key={testimonial.id}>
              <p>{testimonial.testimonial}</p>
              <div className="testimonial-card__author">
                <Image
                  src={`/images/${testimonial.authorImage}`}
                  alt={testimonial.authorName}
                  width={72}
                  height={72}
                  className="rounded-full"
                />
                <div className="space-y-0.5">
                  <p className="font-bold text-xl">Jane Doe</p>
                  <p className="text-lg">Wellness Enthusiast</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </AnimatedDiv>
  );
}
