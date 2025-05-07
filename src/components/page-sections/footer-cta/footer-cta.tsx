import { Button } from "@/components/ui/button";
import SectionHeading from "@/components/ui/section-heading";
import AnimatedDiv from "@/components/ui/animations/animated-content";
export default function FooterCta() {
  return (
    <AnimatedDiv>
      <section className="container">
        <div className="footer-cta">
          <SectionHeading
            heading="Start Your Wellness Program Right Here, Right Now"
            subHeading="You still have time"
            textColor="white"
          />
          <Button size={"lg"}>Start Right Now</Button>
        </div>
      </section>
    </AnimatedDiv>
  );
}
