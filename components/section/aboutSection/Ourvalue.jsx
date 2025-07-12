import { Icon } from "@iconify/react";
import SectionHeading from "../commonSection/SectionHeader";

export default function Ourvalue() {
  return (
    <section className="py-16 ">
      <SectionHeading title="Our Core Values" subtitle="Values" />

      <div className="container 2xl:px-40 px-4 mx-auto text-center">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="text-center bg-[#0F191C] p-5 rounded-md">
            <Icon
              icon="mdi:shield-check"
              className="text-4xl text-main mb-4 mx-auto"
            />
            <h3 className="text-xl font-mdium text-white mb-2">Quality</h3>
            <p className="text-red-100 text-sm">
              Never compromising on the quality of our ingredients and service
            </p>
          </div>

          <div className="text-center bg-[#0F191C] p-5 rounded-md">
            <Icon
              icon="mdi:handshake"
              className="text-4xl text-main mb-4 mx-auto"
            />
            <h3 className="text-xl font-mdium text-white mb-2">Integrity</h3>
            <p className="text-red-100 text-sm">
              Honest, transparent, and ethical in all our business practices
            </p>
          </div>

          <div className="text-center bg-[#0F191C] p-5 rounded-md">
            <Icon
              icon="mdi:lightbulb"
              className="text-4xl text-main mb-4 mx-auto"
            />
            <h3 className="text-xl font-mdium text-white mb-2">Innovation</h3>
            <p className="text-red-100 text-sm">
              Constantly evolving and improving our culinary offerings
            </p>
          </div>

          <div className="text-center bg-[#0F191C] p-5 rounded-md">
            <Icon
              icon="mdi:earth"
              className="text-4xl text-main mb-4 mx-auto"
            />
            <h3 className="text-xl font-mdium text-white mb-2">Community</h3>
            <p className="text-red-100 text-sm">
              Supporting our local community and bringing people together
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
