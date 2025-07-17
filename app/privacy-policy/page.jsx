import Image from "next/image";
import legalImg1 from "@/public/img/legal/legal1.png";
import legalImg2 from "@/public/img/legal/legal2.png";
import SmoothScrollProvider from "@/components/scroll/SmoothScrollProvider";

export const metadata = {
  title: "Privacy Policy | Redbowl",
  description:
    "Read Redbowl's privacy policy to understand how we protect and use your personal information. Your privacy is our top priority.",
};

const PrivacyPolicy = () => {
  return (
    <div>
      <SmoothScrollProvider>
        <section className="bg-[#0F191C] text-white mb-10">
          <div className="container 2xl:px-40 px-4 mx-auto center flex-col h-[18rem] overflow-hidden text-center relative">
            <Image
              src={legalImg1}
              alt="Privacy Background Graphic"
              className="absolute lg:top-32 top-16 xl:left-[14%] left-[10%] xl:w-28 md:w-20 w-12 opacity-50"
            />
            <Image
              src={legalImg2}
              alt="Privacy Background Graphic"
              className="absolute top-20 xl:right-[12%] right-[8%] xl:w-32 md:w-24 w-16 opacity-50"
            />
            <div className="relative">
              <div
                className="w-40 h-16 bg-main rounded-full blur-2xl opacity-30 rotate-12 top-6 absolute left-[45%]"
                aria-hidden="true"
              />

              <h1 className="md:text-5xl text-3xl font-medium mb-4 text-white">
                Know Your <br />
                <span className="text-main">Privacy Rights</span>
              </h1>

              <p className="opacity-90 text-stone-300 md:text-base text-sm">
                Learn how we collect, use, and protect your personal information
                when you use our services.
              </p>
            </div>
          </div>
        </section>

        <div className="lg:max-w-4xl container px-4 lg:px-2 mx-auto text-gray-0 sm:py-8 py-4">
          <div className="mb-8">
            <h2 className="text-xl  text-main mb-4">
              1. Overview of Our Privacy Policy
            </h2>
            <p className="text-stone-300">
              This privacy policy pertains to Redbowl’s operations in the United
              States and governs the personal information obtained by Redbowl in
              various contexts. These include when you access or use our
              websites, or any other services that link to this privacy policy,
              engage with us through communications, shop via our third-party
              partners, interact with us on social media, or participate in our
              programs or events. Please note that Redbowl restaurants are
              independently owned and operated franchises, and their handling of
              personal information is subject to their own privacy policies. If
              you wish to exercise any rights related to information processed
              by a Redbowl restaurant, please visit the respective franchise
              location to make your requests. We will coordinate with the
              franchise owner to address your request as required by law. We may
              provide different or additional privacy notices for certain
              activities, programs, and offerings. Additionally, “just-in-time”
              notices may be provided to further explain our privacy practices
              or offer more choices regarding your personal information. Our
              websites may contain links to websites or applications operated by
              third parties. We do not control the privacy practices of these
              third parties, and we encourage you to review their privacy
              policies.
            </p>
          </div>
          <div className="mb-8">
            <h2 className="text-xl text-main mb-4">
              2. Types of Personal Information We Collect
            </h2>
            <p className="text-stone-300">
              The personal information we collect depends on your interactions
              with us and our products and services. “Personal information”
              refers to data that identifies, relates to, describes, or can be
              associated with you. The categories and specific types of personal
              information we collect include: Basic Identifying Information Such
              as your full name, alias, postal address, email address, phone
              number, date of birth, account name, signature, username, or
              social media handle. Device Information and Other Unique
              Identifiers Including device identifier, IP address, cookies,
              beacons, pixel tags, mobile ad identifier, or similar unique
              identifiers. Internet or Other Network Activity Such as browsing
              or search history, and information about your interactions with
              our websites, mobile applications, emails, or advertisements.
              Geolocation Data Including information that allows us to determine
              your location, such as manually provided location information or
              data sent by your mobile device. Payment Information Such as
              credit or debit card numbers. Commercial Information Including
              products or services you have purchased, returned, exchanged, or
              considered, as well as preferences and loyalty program activity.
              Demographic Data Such as age, gender, race, ethnicity, estimated
              income, and household information, which may include
              characteristics protected under state or federal law. User Content
              Including communications with us and any content you provide, such
              as social media profiles, photographs, images, videos, survey
              responses, comments, product reviews, testimonials, and other
              content. Audio and Visual Information Including photographs,
              images, videos, and voice recordings, such as recorded customer
              service calls. Inferences Inferences drawn from or created based
              on the information listed above.
            </p>
          </div>
          <div className="mb-8">
            <h2 className="text-xl  text-main mb-4">
              3. Methods of Collecting Your Personal Information
            </h2>
            <p className="text-stone-300">
              We gather personal information about you from various sources,
              including: Directly from You We collect information you provide
              when making a purchase, registering for an account or creating a
              profile, ordering delivery, signing up for a loyalty program,
              contacting us, responding to surveys, interacting with us
              in-store, participating in sweepstakes or promotions, or signing
              up for emails, texts, or mailings. Using Cookies and Automatic
              Data Collection Technologies When you visit our websites, use our
              apps, open or click on our emails, or interact with our
              advertisements, we and our third-party partners automatically
              collect certain information using technologies such as cookies,
              web beacons, pixels, internet tags, web server logs, and other
              data collection tools. For more details, see the “Cookies and
              Similar Tracking Technologies” section below. From Franchisees and
              Third-Party Partners We obtain information from third parties with
              whom we have partnerships, as well as our independently owned and
              operated franchisees. From Social Media Platforms and Networks If
              you interact with us on social media or use social media features
              (such as plugins, widgets, or other tools) on our websites or
              apps, we collect information shared with us or provided by the
              social media platforms. For more information on the privacy
              practices of these platforms, please review their privacy policies
              and settings. From Other Sources We may obtain information from
              data analytics providers, marketing or advertising service
              providers, fraud prevention service providers, vendors that
              provide services on our behalf, or publicly available sources. We
              also create information based on our analysis of the data
              collected. Cookies and Similar Tracking Technologies.
            </p>
          </div>
          <div className="mb-8">
            <h2 className="text-xl  text-main mb-4">
              4. Cookies and Similar Tracking Technologies
            </h2>
            <p className="text-stone-300">
              We and our third-party service providers use cookies, web beacons,
              pixels, internet tags, and other similar tracking technologies to
              gather information when you interact with our websites, apps, and
              email communications. Some tracking technologies are essential for
              maintaining the security of our websites and your account,
              preventing crashes, fixing bugs, saving your preferences, and
              assisting with basic site functions. These “required” tracking
              technologies cannot be opted out of, but you can remove them by
              modifying your browser settings. Please note that some website
              features may not be available if these tracking technologies are
              removed. We allow third parties to use tracking technologies on
              our websites and apps for analytics to understand visitor
              interactions. For example, we use Google Analytics to evaluate
              website traffic and usage data to improve our products and
              services. For more information on how Google collects and
              processes data, visit Google’s policy. To opt out of Google
              Analytics, visit Google Analytics opt-out. We also use the Meta
              (formerly Facebook) Pixel to enable Meta to match website visitors
              with their Facebook User Accounts. For more details, visit Meta’s
              data policy. We allow third parties to use tracking technologies
              on our websites and apps for advertising, including managing and
              displaying advertisements, tailoring advertisements to your
              interests, and sending abandoned shopping cart reminders. These
              third parties use their technology to provide advertising about
              products and services tailored to your interests, which may appear
              on our websites or other websites. You can modify your privacy
              preferences via the Privacy Preference Center link at the bottom
              of any page.
            </p>
          </div>
          <div className="mb-8">
            <h2 className="text-xl  text-main mb-4">
              5. How We Use Your Personal Information
            </h2>
            <p className="text-stone-300">
              We use personal information for various purposes, including:
              Providing Products and Services To fulfill orders, process
              payments, provide receipts and updates, send account-related
              notifications, and manage accounts. Communicating With You To
              respond to inquiries, follow up on requests, provide customer
              service, and evaluate franchisee applications. Administering
              Programs To manage loyalty programs, track rewards, and facilitate
              discussion forums. Marketing and Promotional Purposes To send
              marketing communications, show tailored advertisements, and manage
              promotions. Analytics and Personalization To improve services,
              understand interactions, personalize experiences, and provide
              recommendations. Security and Fraud Prevention To detect,
              investigate, and prevent fraudulent or illegal activities. Legal
              Obligations To comply with legal requirements, establish or
              exercise our rights, and defend against legal claims. Core
              Business Functions To maintain records, prevent loss and fraud,
              and ensure website functionality. Assisting Franchisees To support
              independently owned and operated franchisees in their operations.
            </p>
          </div>
          <div className="mb-8">
            <h2 className="text-xl  text-main mb-4">
              6. How We Share Your Personal Information
            </h2>
            <p className="text-stone-300">
              In addition to specific situations described elsewhere in this
              policy, we share personal information in the following
              circumstances: Corporate Affiliates With our corporate affiliates
              and independently owned and operated franchisees for providing
              requested products or other purposes with your consent or as
              permitted by law. Service Providers With third parties that
              support core business functions, such as order fulfillment,
              marketing, payment processing, fraud investigation, and customer
              service. Third Party Partners With third parties we partner with
              for joint products, services, or promotions. Social Media
              Platforms and Networks With third parties through social media
              features on our websites. Public Forums With the public if you
              submit information in public forums. Legal Process In response to
              legal requests or to protect our rights, employees, agents, and
              affiliates. Business Transfers With another company if we are
              involved in a merger, acquisition, or sale of assets. Other
              Instances With third parties at your request or with your consent.
            </p>
          </div>
          <div className="mb-8">
            <h2 className="text-xl  text-main mb-4">
              7. Protecting Your Personal Information
            </h2>
            <p className="text-stone-300">
              Personal information is stored on our servers or those of our
              service providers and is accessible by authorized personnel. We
              use reasonable physical, electronic, and procedural safeguards to
              protect your information. However, no method of transmission over
              the internet is completely secure. Notify us immediately if you
              suspect unauthorized use of your account or password.
            </p>
          </div>
          <div className="mb-8">
            <h2 className="text-xl  text-main mb-4">8. Your Rights </h2>
            <p className="text-stone-300">
              Depending on your location, you may have rights regarding your
              personal information, such as accessing, updating, correcting,
              deleting, or withdrawing consent. To exercise these rights, you
              can: Access and Deletion Submit a request via email at
              ask@redbowlhibachi.com or call Updates and Corrections Update
              information by logging into your account or contacting us via
              email or phone. Identity Verification We may need to verify your
              identity to process certain requests.
            </p>
          </div>
          <div className="mb-8">
            <h2 className="text-xl  text-main mb-4">
              9. International Data Transfer{" "}
            </h2>
            <p className="text-stone-300">
              By submitting your personal information to us, you agree to its
              transfer, storage, and processing outside your country of
              residence, including the USA.
            </p>
          </div>
          <div className="mb-8">
            <h2 className="text-xl  text-main mb-4">10. Children’s Privacy </h2>
            <p className="text-stone-300">
              Our website is not intended for children under 13. We do not
              knowingly collect personal information from children under 13
              without parental consent. If we discover such information, we will
              delete it.
            </p>
          </div>
          <div className="mb-8">
            <h2 className="text-xl  text-main mb-4">11. Contacting Us</h2>
            <p className="text-stone-300">
              We may update this privacy policy and will post the date of the
              latest update at the top. Significant changes will be communicated
              to you.
            </p>
          </div>
          <div className="mb-8">
            <h2 className="text-xl  text-main mb-4">12. Policy Updates</h2>
            <p className="text-stone-300">
              We may update this privacy policy and will post the date of the
              latest update at the top. Significant changes will be communicated
              to you.
            </p>
          </div>
          <div className="mb-8">
            <h2 className="text-xl  text-main mb-4">
              13. Information for California Residents – California Privacy
              Rights
            </h2>
            <p className="text-stone-300">
              California residents have specific privacy rights under the
              California Consumer Privacy Act (CCPA) and other laws. They can
              request information about categories of personal information
              shared for marketing purposes and exercise rights to access,
              delete, and opt out of sales of personal information. Access and
              Deletion Requests California residents can submit access or
              deletion requests by following the procedures outlined above. Sale
              of Personal Information and the Right to Opt-Out We do not sell
              personal information. California residents can submit requests to
              access or delete personal information or withdraw consent as
              outlined above. Right to Non-Discrimination We do not discriminate
              against California residents exercising their privacy rights.
              Notice of Financial Incentive Our loyalty programs and promotions
              may be considered financial incentives under California law.
              Details and terms can be found in the respective program rules.
              <br />
              Information for Virginia Residents – Virginia Privacy Rights
              Virginia residents have rights under the Virginia Consumer Data
              Privacy Act to access, correct, delete personal information, and
              stop the sale of personal information. These requests can be made
              using the same procedures as for California residents and are
              subject to legal restrictions and limitations.
            </p>
          </div>
        </div>
      </SmoothScrollProvider>
    </div>
  );
};

export default PrivacyPolicy;
