interface HeroPoints {
  heading: string;
  desc: string;
}

interface Products {
  id: number;
  prodImage: string;
  prodName: string;
  prodCat: string;
  prodPrice: number;
  prodLink: string;
  promo?: boolean;
}

interface Testimonials {
  id: number;
  testimonial: string;
  authorName: string;
  authorTitle: string;
  authorImage?: string;
}

interface Data {
  hero_points: HeroPoints[];
  products: Products[];
  testimonials: Testimonials[];
}

export const data: Data = {
  hero_points: [
    {
      heading: "Backed by Science & Soul",
      desc: "All wellness products are created by Hollis Wilder—integrating lived experience, mindful practice, and holistic nutrition.",
    },
    {
      heading: "Instant Access, Forever Yours",
      desc: "Download anytime, anywhere. Once you own it, it’s yours for life—no subscriptions, no surprises.",
    },
    {
      heading: "Loved by a Thriving Community",
      desc: "Join hundreds who’ve transformed their lives with our guided meditations, recipes, and self-healing tools.",
    },
  ],
  products: [
    {
      id: 1,
      prodImage: "heeding-hollis-prod-thumb.png",
      prodName: "'Heeding Hollis' 5 Mins Guided Meditation Session!",
      prodCat: "Coaching Video - 05 mins",
      prodPrice: 0,
      prodLink: "#",
      promo: true,
    },
    {
      id: 2,
      prodImage: "meditative-table-prod-thumb.png",
      prodName:
        "'Meditative Table' Mindful Cooking Class: Ep. 1, Healthy Pumpkin Cupcake",
      prodCat: "Coaching Video - 30 mins",
      prodPrice: 99,
      prodLink: "#",
      promo: false,
    },
    {
      id: 3,
      prodImage: "shear-brilliance-prod-thumb.png",
      prodName: "‘Shear Brilliance’ Vision Boarding Workshop: Ep. 1, Romance",
      prodCat: "Coaching Video - 30 mins",
      prodPrice: 99,
      prodLink: "#",
      promo: false,
    },
    {
      id: 4,
      prodImage: "creativity-bundle-prod-thumb.png",
      prodName:
        "Creativity Bundle (2): Mindful Cooking Class + Vision Boarding Workshop",
      prodCat: "Coaching Video - 30 mins",
      prodPrice: 199,
      prodLink: "#",
      promo: false,
    },
    {
      id: 5,
      prodImage: "mind-body-prod-thumb.png",
      prodName: "Mind, Body, & Brilliance Bundle [3 in 1]",
      prodCat: "Coaching Video - 30 mins",
      prodPrice: 249,
      prodLink: "#",
      promo: false,
    },
    {
      id: 6,
      prodImage: "visualise-bundle-prod-thumb.png",
      prodName:
        "Visualization Bundle (2): Guided Meditation Session + Vision Boarding Workshop",
      prodCat: "Coaching Video - 30 mins",
      prodPrice: 199,
      prodLink: "#",
      promo: false,
    },
  ],
  testimonials: [
    {
      id: 1,
      testimonial:
        "I’ve worked with therapists before, but this was different. She didn’t just guide me — she understood me because she’s lived it too. That changed everything for me.",
      authorName: "Mirana Marci",
      authorTitle: "Real State Agent",
      authorImage: "testimonial-1.png",
    },
    {
      id: 2,
      testimonial:
        "From the first session, I felt safe. Her warmth, honesty, and personal story made me feel seen in a way I hadn’t experienced before. I’m finally making peace with my past.",
      authorName: "Crystal Maiden",
      authorTitle: "Software Engineer",
      authorImage: "testimonial-2.png",
    },
    {
      id: 3,
      testimonial:
        "I was stuck in my head for years. Her tools and mindset shifts — all rooted in real life, not just theory — helped me break free and start living again.",
      authorName: "Dazzle Healer",
      authorTitle: "Social Media Influencer ",
      authorImage: "testimonial-3.png",
    },
    {
      id: 4,
      testimonial:
        "She didn’t try to fix me — she walked beside me, showing me how to heal myself. That’s the kind of support I never knew I needed.",
      authorName: "Hearts of Taras",
      authorTitle: "Cooperate Executive",
      authorImage: "testimonial-4.png",
    },
  ],
};
