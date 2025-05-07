import { Button } from "@/components/ui/button";
import SectionHeading from "@/components/ui/section-heading";
import { data } from "@/lib/data";
import Image from "next/image";
import AnimatedDiv from "@/components/ui/animations/animated-content";
function Products() {
  return (
    <AnimatedDiv duration={1.25}>
      <section className="section-py container">
        <SectionHeading
          heading="Begin Your Wellness Journey"
          subHeading="Turn a new page by getting access to these wellness experiences and rejuvenate your mind and soul"
          stickyLabel="Limited Time Offers Available"
        />
        <div className="products">
          {data.products.map((product) => (
            <div className="product-card" key={product.id}>
              <div className="product-card__image">
                <Image
                  src={`/images/${product.prodImage}`}
                  alt={product.prodName}
                  width={830}
                  height={554}
                />
              </div>
              <div className="product-card__content">
                <h3>{product.prodName}</h3>
                <div className="flex justify-between items-center">
                  <p className="text-3xl font-bold">${product.prodPrice}</p>
                  <Button>Add to Cart</Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </AnimatedDiv>
  );
}

export default Products;
