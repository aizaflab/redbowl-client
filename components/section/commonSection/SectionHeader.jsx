export default function SectionHeading({ title, subtitle }) {
  return (
    <section
      data-aos="zoom-in-up"
      className="text-center flex flex-col mb-16 relative"
      aria-labelledby="section-heading"
    >
      <header className="relative center flex-col gap-3 pb-5 pt-2">
        {/* Subtitle Badge */}
        {subtitle && (
          <span
            className="bg-main/10 text-main w-fit mx-auto px-4 py-1 sm:text-xs text-[11px] rounded-full font-light tracking-wider"
            id="section-subtitle"
          >
            {subtitle}
          </span>
        )}

        {/* Title with Decorative SVGs */}
        <h2
          id="section-heading"
          className="md:text-4xl sm:text-3xl text-xl whitespace-nowrap font-medium title flex items-center justify-center gap-2 sm:gap-4"
        >
          {/* Left SVG */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 100 20"
            className="w-16 sm:w-28  text-main"
            fill="currentColor"
            aria-hidden="true"
          >
            <rect
              x="47"
              y="7"
              width="6"
              height="6"
              transform="rotate(45 50 10)"
            />
            <line
              x1="0"
              y1="10"
              x2="45"
              y2="10"
              stroke="currentColor"
              strokeDasharray="2,2"
            />
            <line
              x1="55"
              y1="10"
              x2="100"
              y2="10"
              stroke="currentColor"
              strokeDasharray="2,2"
            />
          </svg>

          {/* Visible Title Text */}
          <span className="mx-3 text-main">{title}</span>

          {/* Right SVG */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 100 20"
            className="w-16 sm:w-28 text-main"
            fill="currentColor"
            aria-hidden="true"
          >
            <rect
              x="47"
              y="7"
              width="6"
              height="6"
              transform="rotate(45 50 10)"
            />
            <line
              x1="0"
              y1="10"
              x2="45"
              y2="10"
              stroke="currentColor"
              strokeDasharray="2,2"
            />
            <line
              x1="55"
              y1="10"
              x2="100"
              y2="10"
              stroke="currentColor"
              strokeDasharray="2,2"
            />
          </svg>
        </h2>
      </header>

      {/* Description Paragraph */}
      <p className="sm:max-w-2xl mx-auto text-zinc-400 font-light leading-relaxed sm:mt-2 sm:text-base text-sm px-2 sm:px-0">
        Discover the latest additions handpicked just for you — fresh styles,
        top trends, and must-have items just in!
      </p>

      {/* Decorative Blur Element */}
      <div
        className="w-40 h-16 bg-main rounded-full blur-2xl opacity-25 rotate-12 bottom-8 absolute left-[45%]"
        aria-hidden="true"
      />
    </section>
  );
}
