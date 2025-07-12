import { Icon } from "@iconify/react";
import Accordion from "@/components/ui/Accordion";
import FaqHero from "@/components/section/faqSection/FaqHero";
import SmoothScrollProvider from "@/components/scroll/SmoothScrollProvider";

export default function FAQPage() {
  const faqCategories = [
    {
      title: "Reservations",
      icon: "mdi:table-chair",
      faqs: [
        {
          question: "How do I make a reservation?",
          answer:
            "You can make a reservation by calling us at (555) 123-4567 or using our online booking system. We recommend booking in advance, especially for weekends and holidays.",
        },
        {
          question: "What is your cancellation policy?",
          answer:
            "We require at least 2 hours notice for cancellations. For parties of 6 or more, we require 24 hours notice.",
        },
        {
          question: "Do you accept walk-ins?",
          answer:
            "Yes, we accept walk-ins based on availability. However, reservations are recommended to guarantee seating.",
        },
        {
          question: "What is the maximum group size?",
          answer:
            "We can accommodate groups up to 20 people. For larger parties, please call us to discuss special arrangements.",
        },
      ],
    },
    {
      title: "Delivery & Pickup",
      icon: "mdi:truck-delivery",
      faqs: [
        {
          question: "What is your delivery radius?",
          answer:
            "We deliver within a 5-mile radius of our restaurant. Delivery fee is $3.99 for orders under $30.",
        },
        {
          question: "How long does delivery take?",
          answer:
            "Typical delivery time is 30-45 minutes. During peak hours, it may take up to 60 minutes.",
        },
        {
          question: "Is there a minimum order for delivery?",
          answer:
            "Yes, the minimum order for delivery is $15. There is no minimum for pickup orders.",
        },
        {
          question: "Do you offer contactless delivery?",
          answer:
            "Yes, we offer contactless delivery. Please specify this preference when placing your order.",
        },
      ],
    },
    {
      title: "Menu & Allergens",
      icon: "mdi:food",
      faqs: [
        {
          question: "Do you have vegan options?",
          answer:
            "Yes, we offer several vegan options including vegetable hibachi, avocado rolls, and tofu-based dishes.",
        },
        {
          question: "Can you accommodate gluten-free diets?",
          answer:
            "We have gluten-free options available. Please inform your server about any dietary restrictions when ordering.",
        },
        {
          question: "How do you handle food allergies?",
          answer:
            "We take food allergies seriously. Please inform us of any allergies when ordering, and we will take appropriate precautions.",
        },
        {
          question: "Are your ingredients fresh?",
          answer:
            "Yes, we source fresh ingredients daily and prepare everything to order. Our fish is delivered fresh daily.",
        },
      ],
    },
    {
      title: "Events & Private Dining",
      icon: "mdi:party-popper",
      faqs: [
        {
          question: "Do you host private events?",
          answer:
            "Yes, we offer private dining for special occasions. Please call us at least one week in advance to discuss arrangements.",
        },
        {
          question: "Can you cater events?",
          answer:
            "We offer catering services for events of 10 or more people. Contact us for a custom quote and menu options.",
        },
        {
          question: "Do you have a private dining room?",
          answer:
            "We have a semi-private dining area that can accommodate up to 15 people. Full restaurant buyouts are also available.",
        },
        {
          question: "What is included in catering packages?",
          answer:
            "Our catering packages include food, serving utensils, and disposable plates. Setup and cleanup services are available for an additional fee.",
        },
      ],
    },
    {
      title: "Loyalty Program & Offers",
      icon: "mdi:gift",
      faqs: [
        {
          question: "Do you have a loyalty program?",
          answer:
            "Yes! Join our Red Bowl Rewards program to earn points on every purchase and receive exclusive offers.",
        },
        {
          question: "How do I sign up for rewards?",
          answer:
            "You can sign up in-store, online, or through our mobile app. It's free to join and you'll start earning points immediately.",
        },
        {
          question: "What are the current promotions?",
          answer:
            "We regularly offer promotions like 20% off first orders for new customers and happy hour specials. Check our website for current offers.",
        },
        {
          question: "Do you offer student discounts?",
          answer:
            "Yes, we offer a 10% student discount with valid student ID. This applies to dine-in orders only.",
        },
      ],
    },
    {
      title: "Payment Methods",
      icon: "mdi:credit-card",
      faqs: [
        {
          question: "What payment methods do you accept?",
          answer:
            "We accept cash, all major credit cards (Visa, MasterCard, American Express, Discover), and mobile payments (Apple Pay, Google Pay).",
        },
        {
          question: "Do you accept checks?",
          answer:
            "We do not accept personal checks. We accept cash, credit cards, and mobile payments only.",
        },
        {
          question: "Can I split the bill?",
          answer:
            "Yes, we can split bills up to 4 different payment methods for dine-in customers.",
        },
        {
          question: "Do you add gratuity automatically?",
          answer:
            "We add an 18% gratuity for parties of 6 or more. For smaller parties, gratuity is at your discretion.",
        },
      ],
    },
  ];

  return (
    <div>
      <SmoothScrollProvider>
        <FaqHero />
        {/* FAQ Categories */}
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            {faqCategories.map((category, categoryIndex) => (
              <div key={categoryIndex} className="">
                <div className="flex items-center space-x-3 mb-8">
                  <div className="bg-[#192A30] size-10 center rounded-full">
                    <Icon icon={category.icon} className="size-5 text-white" />
                  </div>
                  <h2 className="text-xl font-light text-main ">
                    {category.title}
                  </h2>
                </div>
                <div className="space-y-4">
                  <div className="mb-20">
                    <Accordion data={category.faqs} btnClass=" " />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </SmoothScrollProvider>
    </div>
  );
}
