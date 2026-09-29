export interface PricingPlan {
  id: string;
  name: string;
  price: string;
  subtext: string;
  popular?: boolean;
  features: string[];
  buttonText: string;
  buttonLink: string;
}

export const pricingConfig = {
  heading: "Simple Pricing",
  subtext: "No hidden charges. You know the price before we start.",
  note: "Prices may change depending on your project. Final price is always confirmed before I start.",
  plans: [
    {
      id: "starter",
      name: "Starter",
      price: "₹15,000",
      subtext: "For a simple app or website.",
      popular: false,
      features: [
        "1 platform (Android, Web or Desktop)",
        "Up to 5 screens",
        "Simple design",
        "Login system",
        "Source code included",
        "14 days bug fixing",
      ],
      buttonText: "Get Started",
      buttonLink: "/build-my-app",
    },
    {
      id: "standard",
      name: "Standard",
      price: "₹40,000",
      subtext: "For a complete app with backend.",
      popular: true,
      features: [
        "Up to 2 platforms",
        "Custom design",
        "Backend and database",
        "Admin panel",
        "Payment integration",
        "Publishing help (Play Store or hosting)",
        "Source code included",
        "30 days bug fixing",
      ],
      buttonText: "Get Started",
      buttonLink: "/build-my-app",
    },
    {
      id: "custom",
      name: "Custom",
      price: "Get a Quote",
      subtext: "For big or special projects.",
      popular: false,
      features: [
        "Anything you need",
        "Planned together with me",
        "Price based on the work",
      ],
      buttonText: "Talk to Me",
      buttonLink: "/contact",
    },
  ] as PricingPlan[],
};
