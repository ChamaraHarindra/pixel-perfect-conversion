import AboutHollis from "@/components/page-sections/about-hollis/about-hollis";
import FooterCta from "@/components/page-sections/footer-cta/footer-cta";
import Hero from "@/components/page-sections/hero/hero";
import Products from "@/components/page-sections/products/products";
import Testimonials from "@/components/page-sections/testimonials/testimonials";

export default function Home() {
  return (
    <main className="flex flex-col gap-20">
      {/* Hero Section */}
      <Hero />
      {/* product List */}
      <Products />
      {/* testimonials */}
      <Testimonials />
      {/* About Hollis */}
      <AboutHollis />
      {/* footer cta */}
      <FooterCta />
    </main>
  );
}
