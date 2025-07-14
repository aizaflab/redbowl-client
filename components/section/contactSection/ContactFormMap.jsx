"use client";
import { Icon } from "@iconify/react";
import React, { useState } from "react";
import { Input } from "@/components/ui/Input";

export default function ContactFormMap() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
  };
  return (
    <section className="py-12 container mx-auto px-4 2xl:px-40 ">
      <div className="grid md:grid-cols-2 gap-12">
        {/* Contact Form */}
        <div>
          <h2 className="text-xl font-light text-main mb-8 border-b border-b-main/30 pb-5">
            Send us a Message
          </h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <Input
                  label="Full Name"
                  onChange={handleInputChange}
                  className="h-10"
                  placeholder="Your full name"
                  required
                  value={formData.name}
                  requiredSign={true}
                />
              </div>
              <div>
                <Input
                  label="Email Address"
                  onChange={handleInputChange}
                  className="h-10"
                  placeholder="your@email.com"
                  value={formData.email}
                  required
                  requiredSign={true}
                />
              </div>
            </div>

            <div>
              <Input
                label="Phone Number"
                onChange={handleInputChange}
                className="h-10"
                placeholder="(555) 123-4567"
                value={formData.phone}
                required
                requiredSign={true}
              />
            </div>
            <div>
              <Input
                label="Subject"
                onChange={handleInputChange}
                className="h-10"
                placeholder="Your subject"
                value={formData.subject}
                required
                requiredSign={true}
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium  mb-2"
              >
                Message <span className="text-main">*</span>
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={6}
                value={formData.message}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-main rounded-lg focus:outline-none  resize-none"
                placeholder="Tell us how we can help you..."
              />
            </div>
            <button
              type="submit"
              className="w-full bg-main text-white py-3 px-6 rounded-lg hover:bg-red-700 transition-colors flex items-center justify-center space-x-2"
            >
              <Icon icon="mdi:send" className="w-5 h-5" />
              <span>Send Message</span>
            </button>
          </form>
        </div>

        {/* Map */}
        <div>
          <h2 className="text-xl font-light text-main mb-8 border-b border-b-main/30 pb-5">
            Find Us
          </h2>
          <div className="bg-[#142226] rounded-lg h-[17rem] flex items-center justify-center mb-6">
            <div className="text-center">
              <Icon
                icon="mdi:map"
                className="w-16 h-16 text-main mx-auto mb-4"
              />
              <p className="text-stone-200">Interactive Map</p>
              <p className="text-sm text-stone-400">
                6210 Livingston Rd, Oxon Hill
              </p>
            </div>
          </div>
          <div className="bg-[#142226] p-6 rounded-lg shadow-sm">
            <h3 className="text-xl text-main mb-4">Directions</h3>
            <div className="space-y-3 text-stone-400">
              <div className="flex items-start space-x-3">
                <Icon icon="mdi:car" className="w-5 h-5 text-main mt-0.5" />
                <div>
                  <p className=" text-white">By Car</p>
                  <p className="text-sm">
                    Free parking available in our lot behind the restaurant
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Icon icon="mdi:bus" className="w-5 h-5 text-main mt-0.5" />
                <div>
                  <p className=" text-white">Public Transit</p>
                  <p className="text-sm">
                    Bus routes 15, 22, and 45 stop within 2 blocks
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Icon icon="mdi:walk" className="w-5 h-5 text-main mt-0.5" />
                <div>
                  <p className=" text-white">Walking</p>
                  <p className="text-sm">
                    Located in the heart of downtown, easily walkable
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
