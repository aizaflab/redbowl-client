import { Icon } from "@iconify/react";

export default function WhoWeAre() {
  return (
    <section className="py-16 ">
      <div className="container 2xl:px-40 px-4 mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div
              className="w-40 h-16 bg-main rounded-full blur-2xl opacity-25 rotate-12 top-8 absolute left-[10%]"
              aria-hidden="true"
            />
            <h2 className="text-3xl font-medium mb-6 text-main">Who We Are</h2>
            <p className=" text-gray-400 mb-6 leading-relaxed">
              RedBowl is more than just a restaurant – we're a culinary
              destination where tradition meets innovation. Our passionate team
              of chefs and hospitality experts work tirelessly to bring you an
              unforgettable dining experience.
            </p>
            <p className=" text-gray-400 leading-relaxed">
              Founded on the principles of quality, authenticity, and
              exceptional service, we take pride in every dish that leaves our
              kitchen and every smile we bring to our guests' faces.
            </p>
          </div>
          <div className=" rounded-2xl md:p-8">
            <div className="grid grid-cols-2 md:gap-6 gap-3">
              <div className="text-center p-5 py-7 rounded-md bg-[#0F191C]">
                <Icon
                  icon="mdi:chef-hat"
                  className="text-4xl text-main mx-auto mb-3"
                />
                <h3 className="font-medium text-white">Expert Chefs</h3>
              </div>
              <div className="text-center p-5 py-7 rounded-md bg-[#0F191C]">
                <Icon
                  icon="mdi:heart"
                  className="text-4xl text-main mx-auto mb-3"
                />
                <h3 className="font-semibold text-white">Made with Love</h3>
              </div>
              <div className="text-center p-5 py-7 rounded-md bg-[#0F191C]">
                <Icon
                  icon="mdi:leaf"
                  className="text-4xl text-main mx-auto mb-3"
                />
                <h3 className="font-semibold text-white">Fresh Ingredients</h3>
              </div>
              <div className="text-center p-5 py-7 rounded-md bg-[#0F191C]">
                <Icon
                  icon="mdi:clock-time-four"
                  className="text-4xl text-main mx-auto mb-3"
                />
                <h3 className="font-semibold text-white">Quick Service</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
