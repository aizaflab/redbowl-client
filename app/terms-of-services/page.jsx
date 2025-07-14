import Image from "next/image";
import legalImg1 from "@/public/img/legal/legal1.png";
import legalImg2 from "@/public/img/legal/legal2.png";
import SmoothScrollProvider from "@/components/scroll/SmoothScrollProvider";

export const metadata = {
  title: "Terms and Conditions | Redbowl",
  description:
    "Review the terms and conditions of Redbowl. Understand the rules and policies governing the use of our services and website.",
};

const TermsOfService = () => {
  return (
    <div>
      <SmoothScrollProvider>
        <section className="bg-[#0F191C] text-white mb-10">
          <div className="container 2xl:px-40 px-4 mx-auto center flex-col h-[18rem] overflow-hidden text-center relative">
            <Image
              src={legalImg1}
              alt="Privacy Background Graphic"
              className="absolute top-32 left-[14%] w-28 opacity-50"
            />
            <Image
              src={legalImg2}
              alt="Privacy Background Graphic"
              className="absolute top-20 right-[12%] w-32 opacity-50"
            />
            <div className="relative">
              <div
                className="w-40 h-16 bg-main rounded-full blur-2xl opacity-30 rotate-12 top-6 absolute left-[45%]"
                aria-hidden="true"
              />
              <h1 className="text-5xl font-medium mb-4 text-white">
                Understand Our <br />
                <span className="text-main">Terms & Conditions</span>
              </h1>

              <p className="opacity-90 text-stone-300">
                Review the rules, responsibilities, and legal agreements you
                accept when using our services and platform.
              </p>
            </div>
          </div>
        </section>

        <div className="max-w-4xl px-2 mx-auto text-gray-0 py-8">
          <section class="mb-8">
            <h2 class="text-xl  text-main mb-4">Introduction</h2>
            <p className="text-stone-300">
              Welcome to the Redbowl website. By accessing or using our website,
              you agree to comply with the following terms and conditions
              (“Terms”), as well as all applicable laws. These Terms apply to
              all visitors and users of our website, including those who
              register for communications via text or email, create online
              accounts, or provide information to order food, gift cards, or
              merchandise as a guest (“Registered Users”).
            </p>
          </section>
          {/*  Section: Dispute Resolution */}
          <section class="mb-8">
            <h2 class="text-xl  text-main mb-4">
              Dispute Resolution for Registered Users
            </h2>
            <p className="text-stone-300">
              For Registered Users, these Terms include an agreement to resolve
              all disputes exclusively through individual arbitration, without
              resorting to court trials, jury trials, or class actions.
            </p>
          </section>
          {/*  Section: External Links */}
          <section class="mb-8">
            <h2 class="text-xl  text-main mb-4">External Links</h2>
            <p className="text-stone-300">
              Some sections of Redbowl’s website may link to external sites that
              are not controlled by Redbowl. These Terms apply solely to web
              pages within Redbowl’s website.
            </p>
          </section>
          {/*  Section: Registration */}
          <section class="mb-8">
            <h2 class="text-xl  text-main mb-4">Registration</h2>
            <p className="text-stone-300">
              Certain areas of the website are restricted to registered users
              and may require personal information to request support or
              services. When registering or making a purchase, you will be
              provided with a link to these Terms and asked to agree to them.
              You agree to provide complete and accurate personal information
              and not to register or attempt to access the website under another
              person’s name. Offensive usernames are prohibited. Personal
              information provided is subject to our Privacy Policy.
            </p>
          </section>
          {/*  Section: Your Account */}
          <section class="mb-8">
            <h2 class="text-xl  text-main mb-4">Your Account</h2>
            <p className="text-stone-300">
              You are responsible for maintaining the confidentiality of your
              account and password and for restricting access to your computer.
              You accept responsibility for all activities under your account.
              Notify us immediately if you suspect unauthorized use of your
              account. Our products are sold to adults who can purchase with a
              credit card.
            </p>
          </section>
          {/*  Section: Users Under 18 */}
          <section class="mb-8">
            <h2 class="text-xl  text-main mb-4">Users Under 18</h2>
            <p className="text-stone-300">
              If you are under 18, use the website only with the involvement of
              a parent or guardian. Redbowl reserves the right to refuse
              service, terminate accounts, remove content, or cancel orders at
              its discretion. Refunds will be provided for any prepaid, canceled
              orders.
            </p>
          </section>
          {/*  Section: Users Under 19 */}
          <section class="mb-8">
            <h2 class="text-xl  text-main mb-4">Users Under 13</h2>
            <p className="text-stone-300">
              Users under 13 are not permitted to use Redbowl’s website. Please
              discuss appropriate websites with your parents.
            </p>
          </section>
          <section class="mb-8">
            <h2 class="text-xl  text-main mb-4">Access to the Website</h2>
            <p className="text-stone-300">
              Redbowl grants you permission to use the website for personal,
              non-commercial purposes, provided you do not copy, distribute,
              modify, or use any part of the website without prior
              authorization. Automated systems, including robots and spiders,
              are not allowed to access the website beyond what a human can
              reasonably produce using a conventional web browser. You agree not
              to collect personal information or use the communication systems
              of the website for commercial solicitation.
            </p>
          </section>
          {/*  Section: Conduct */}
          <section class="mb-8">
            <h2 class="text-xl  text-main mb-4">Conduct</h2>
            <p className="mb-4 text-stone-300">
              You agree to use the website for lawful purposes only. Prohibited
              activities include, but are not limited to:
            </p>
            <ul class="list-disc pl-6 text-stone-300">
              <li>Committing or encouraging criminal offenses.</li>
              <li>Posting unlawful, threatening, or defamatory content.</li>
              <li>Impersonating others.</li>
              <li>Uploading viruses or harmful software.</li>
              <li>Transmitting materials without the right to do so.</li>
              <li>Disrupting the website’s functionality.</li>
              <li>Soliciting commercial activities.</li>
              <li>Infringing on intellectual property rights.</li>
              <li>Collecting personal information without consent.</li>
            </ul>
          </section>
          {/*  Section: Termination */}
          <section class="mb-8">
            <h2 class="text-xl  text-main mb-4">Termination of Use</h2>
            <p className="text-stone-300">
              Redbowl may suspend or terminate your access to the website for
              any violation of these Terms or other harmful conduct. Upon
              termination, you are no longer authorized to access the website.
            </p>
          </section>
          <section class="mb-8">
            <h2 class="text-xl  text-main mb-4">Other Site Links</h2>
            <p className="text-stone-300">
              Redbowl may provide links to external websites for user
              convenience. These links do not imply endorsement, and Flame
              Japanese Hibachi is not responsible for the content or operation
              of these external sites.
            </p>
          </section>
          <section class="mb-8">
            <h2 class="text-xl  text-main mb-4">Policy on Spamming</h2>
            <p className="text-stone-300">
              You agree not to use email addresses obtained from the website to
              send unsolicited messages to multiple recipients. Redbowl will
              determine violations of email usage policies at its sole
              discretion.
            </p>
          </section>
          <section class="mb-8">
            <h2 class="text-xl  text-main mb-4">Content</h2>
            <p className="text-stone-300">
              Redbowl reserves the right to monitor and edit any content posted
              on the website. All content is protected by copyright laws. By
              using the website, you agree to comply with all copyright notices.
            </p>
          </section>
          {/*  Section: Indemnity */}
          <section class="mb-8">
            <h2 class="text-xl  text-main mb-4">Indemnity</h2>
            <p className="text-stone-300">
              You agree to indemnify and hold harmless Redbowl and its
              affiliates from any liabilities or costs arising from your breach
              of these Terms. This includes reasonable attorney’s fees and
              costs. Redbowl may assume exclusive defense and control of any
              matter subject to indemnification by you.
            </p>
          </section>
          <section class="mb-8">
            <h2 class="text-xl  text-main mb-4">
              Website Provided Voluntarily
            </h2>
            <p className="text-stone-300">
              Redbowl provides this website at no charge and may discontinue or
              change its content and functionality at any time. You agree not to
              rely on the continued availability of the website.
            </p>
          </section>
          <section class="mb-8">
            <h2 class="text-xl  text-main mb-4">Acceptance of Service</h2>
            <p className="text-stone-300">
              The website is controlled and offered by Redbowl from the United
              States. Users accessing the website from other jurisdictions do so
              at their own risk and are responsible for compliance with local
              laws.
            </p>
          </section>
          {/*  Section: Modification of Terms */}
          <section class="mb-8">
            <h2 class="text-xl  text-main mb-4">Modification of Terms</h2>
            <p className="text-stone-300">
              Redbowl reserves the right to modify these Terms at any time.
              Material changes will be posted on the website, and registered
              users will be notified via email. Continued use of the website
              after such changes constitutes acceptance of the modified Terms.
            </p>
          </section>
          {/*  Section: General */}
          <section class="mb-8">
            <h2 class="text-xl  text-main mb-4">General</h2>
            <p className="text-stone-300">
              These Terms are governed by the laws of the State of New Jersey,
              without regard to conflict of laws principles. Disputes arising
              from these Terms will be resolved in the courts of Monmouth
              County, New Jersey, unless subject to mandatory arbitration for
              Registered Users. These Terms, along with the Privacy Policy and
              other notices, constitute the entire agreement between you and
              Flame Japanese Hibachi. If any provision is deemed invalid, the
              remaining provisions will remain in effect. No waiver of any term
              will be deemed a further waiver of any other term.
            </p>
          </section>
          <section class="mb-8">
            <h2 class="text-xl  text-main mb-4">
              Mandatory Dispute Resolution for Registered Users
            </h2>
            <p className="text-stone-300">
              All disputes (“Claims”) related to the website, except for small
              claims and intellectual property disputes (“Excepted Claims”),
              will be resolved through binding arbitration by JAMS in Monmouth
              County, New Jersey. No class, mass, or collective actions are
              permitted. The prevailing party in arbitration or related
              proceedings will be entitled to reasonable attorney’s fees and
              costs. Jury trials are waived for court proceedings.
            </p>
          </section>
          <p className="text-stone-300">
            For more details about arbitration and JAMS, visit JAMS website.
          </p>{" "}
          <br />
          <p className="text-stone-300">
            By using the Redbowl website, you agree to these Terms. If you do
            not agree, please do not use the website.
          </p>
        </div>
      </SmoothScrollProvider>
    </div>
  );
};

export default TermsOfService;
