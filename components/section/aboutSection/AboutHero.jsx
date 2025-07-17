import noiseImg from "@/public/img/elements/noice.png";

export default function AboutHero() {
  return (
    <section className="relative bg-[#0F191C] sm:py-20 py-12">
      <div
        className="absolute top-0 left-0 w-full h-full pointer-events-none"
        style={{
          backgroundImage: `url(${noiseImg.src})`,
          backgroundRepeat: "repeat",
          backgroundSize: "250px",
          opacity: 0.8,
        }}
      ></div>
      <div className="max-w-6xl mx-auto px-6 text-center relative">
        <h1 className="lg:text-5xl sm:text-4xl text-3xl font-bold mb-6">
          About <span className="text-main">RedBowl</span>
        </h1>
        <p className="md:text-lg text-sm text-gray-400 max-w-3xl mx-auto leading-relaxed">
          Where culinary passion meets exceptional dining experience. We've been
          serving authentic flavors and creating memorable moments since our
          beginning.
        </p>
        <div className="size-20 bg-main blur-3xl absolute top-5 left-[40%]"></div>
      </div>
    </section>
  );
}
