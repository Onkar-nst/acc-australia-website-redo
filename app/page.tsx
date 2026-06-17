"use client";
import { useEffect, useRef, useState } from "react";
import BeefCutsHero from "../components/ui/BeefCutsHero";
import BeefCutsHeroCentered from "../components/ui/BeefCutsHeroCentered";

function useReveal() {
  const ref = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    const root = ref.current;
    if (!root) return;
    const targets = root.querySelectorAll<HTMLElement>(".reveal, .genie");
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in-view");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.15 },
    );
    targets.forEach((t) => io.observe(t));
    return () => io.disconnect();
  }, []);
  return ref;
}

export default function Home() {
  const ref = useReveal();

  return (
    <div ref={ref} className="min-h-screen bg-[#fcfaf6] font-[var(--font-sans)] text-[#2c2623] overflow-x-hidden">
      <Navbar />
      


      {/* ========================================= */}
      {/* PRESENTATION BANNER FOR OPTION 1          */}
      {/* ========================================= */}
      {/* <div className="w-full bg-[#2c2623] text-[#fcfaf6] text-center py-2 text-[10px] tracking-[0.3em] uppercase font-bold relative z-20">
        Presentation: Hero Option 1 (Split Layout)
      </div> */}

      {/* <BeefCutsHero /> */}

      {/* ========================================= */}
      {/* PRESENTATION BANNER FOR OPTION 2          */}
      {/* ========================================= */}
      {/* <div className="w-full bg-[#e52d27] text-white text-center py-2 text-[10px] tracking-[0.3em] uppercase font-bold relative z-20">
        Presentation: Hero Option 2 (Centered Layout)
      </div> */}

      <BeefCutsHeroCentered />

      {/* ========================================= */}
      {/* ORIGINAL HOMEPAGE CONTENT                 */}
      {/* ========================================= */}

      {/* ABOUT · PHILOSOPHY CTA */}
      <section id="about" className="mx-auto max-w-5xl px-6 py-16 relative z-10">
        <div className="reveal relative overflow-hidden rounded-2xl bg-[#2c2623] text-[#fcfaf6] px-8 py-12 sm:px-14 sm:py-16 shadow-xl">
          {/* oversized brand watermark adds depth without clutter */}
          <span className="pointer-events-none absolute -right-8 -top-20 select-none font-[var(--font-display)] text-[220px] font-bold leading-none tracking-tighter text-white/[0.04]">
            ACC
          </span>

          <div className="relative mx-auto flex max-w-2xl flex-col items-center text-center">
            {/* eyebrow */}
            <span className="flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.3em] text-[#e52d27]">
              <span className="h-px w-6 bg-[#e52d27]/60" />
              The ACC Philosophy
              <span className="h-px w-6 bg-[#e52d27]/60" />
            </span>

            {/* headline */}
            <h2 className="mt-6 font-[var(--font-display)] text-3xl sm:text-4xl font-bold uppercase leading-[1.15] tracking-wide">
              Not just a mark of <span className="text-[#e52d27]">premium beef</span> quality
            </h2>

            {/* supporting copy — merges the original intro + quote into one statement */}
            <p className="mt-5 max-w-xl font-[var(--font-serif)] italic text-[15px] leading-relaxed text-[#fcfaf6]/65">
              It&apos;s a lifestyle — a philosophy of eating meat as the main source of natural protein. ACC is never content with merely good; it demands{" "}
              <span className="not-italic font-semibold text-[#fcfaf6]/90">only the very best.</span>
            </p>

            {/* CTA */}
            <div className="mt-9">
              <a
                href="#cuts"
                className="group relative inline-flex items-center overflow-hidden border border-[#e52d27] px-8 py-3.5 text-[11px] font-bold uppercase tracking-[0.2em] text-[#e52d27] transition-colors hover:text-white"
              >
                <span className="absolute inset-0 -translate-x-full bg-[#e52d27] transition-transform duration-500 group-hover:translate-x-0" />
                <span className="relative">Explore the Cuts</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* MARQUEE */}
      <div className="overflow-hidden border-y border-gray-200 bg-white py-4 relative z-10">
        <div className="marquee-track flex w-max gap-12 whitespace-nowrap font-[var(--font-display)] text-sm uppercase tracking-[0.4em] text-gray-400">
          {Array.from({ length: 2 }).map((_, k) => (
            <div key={k} className="flex gap-12">
              {["Black Angus", "★", "Choice + Prime", "★", "Corn Finished", "★", "Pasture Raised", "★", "Hand Cut", "★"].map((w, i) => (
                <span key={i}>{w}</span>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* ABOUT THE COMPANY */}
      <section id="cuts" className="relative mx-auto max-w-6xl px-6 py-20 z-10">
        <div className="absolute left-0 top-4 font-[var(--font-display)] text-[240px] sm:text-[300px] leading-none font-bold text-gray-100 pointer-events-none select-none">
          A
        </div>
        <div className="relative grid items-center gap-10 md:grid-cols-[1fr_1.3fr] lg:gap-16">
          {/* LEFT — about copy */}
          <div className="reveal">
            <span className="mb-5 flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.3em] text-[#e52d27]">
              <span className="h-px w-6 bg-[#e52d27]/60" />
              Who We Are
            </span>
            <h3 className="font-[var(--font-display)] text-3xl md:text-4xl font-bold uppercase tracking-wide leading-[1.1] mb-6">
              A Fully <span className="text-[#e52d27]">Integrated</span> Beef Business
            </h3>
            <div className="max-w-xl space-y-4 font-[var(--font-serif)] text-[14px] leading-relaxed text-gray-600">
              <p>
                <span className="font-semibold text-[#2c2623]">Australian Country Choice</span> is dedicated to the best-practice supply of high-quality meat products to domestic and export markets.
              </p>
              <p>
                Our operations encompass everything from cattle breeding, backgrounding and lot feeding to beef primary processing and multi-specie further processing, value adding, retail packing and distribution.
              </p>
            </div>
            <a
              href="#contacts"
              className="group relative mt-8 inline-flex items-center overflow-hidden border border-[#e52d27] px-7 py-3 text-[11px] font-bold uppercase tracking-widest text-[#e52d27] transition-colors hover:text-white"
            >
              <span className="absolute inset-0 -translate-x-full bg-[#e52d27] transition-transform duration-500 group-hover:translate-x-0" />
              <span className="relative">Get in touch</span>
            </a>
          </div>

          {/* RIGHT — bigger bull, anchored on a soft circle */}
          <div className="relative flex items-center justify-center">
            <div className="absolute left-1/2 top-1/2 aspect-square w-[82%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#f2eee6]" />
            <img
              src="/images/angus-bull.png"
              alt="Australian Country Choice cattle"
              loading="lazy"
              className="genie relative w-full object-contain mix-blend-multiply"
            />
          </div>
        </div>
        <Divider />
      </section>

      {/* MARBLING DARK BAND */}
      <section id="marbling" className="relative overflow-hidden bg-[#2c2623] text-white py-24 z-10">
        {/* subtle red glow for depth */}
        <div
          className="pointer-events-none absolute inset-0"
          style={{ background: "radial-gradient(circle at 78% 35%, rgba(229,45,39,0.12), transparent 55%)" }}
        />
        <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-6 md:grid-cols-2 lg:gap-16">
          {/* LEFT — framed image */}
          <div className="genie">
            <img
              src="/images/steak-board.jpg"
              alt="Marbled steak sliced on a wooden board"
              loading="lazy"
              className="w-full rounded-xl object-cover shadow-2xl ring-1 ring-white/10"
            />
          </div>

          {/* RIGHT — copy + grade scale */}
          <div className="reveal">
            <span className="mb-5 flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.3em] text-[#e52d27]">
              <span className="h-px w-6 bg-[#e52d27]/60" />
              Quality &amp; Grading
            </span>

            <h3 className="font-[var(--font-display)] text-3xl md:text-4xl font-bold uppercase leading-[1.1] tracking-wide">
              Marbling of Grade
              <span className="mt-1 block text-[#e52d27]">Choice+ / Prime</span>
            </h3>

            <p className="mt-6 max-w-xl font-[var(--font-serif)] text-[14px] leading-relaxed text-gray-300/90">
              Marbling — the even distribution of thin layers of fat between muscle fibers — is the principal indicator of beef quality and the key to its flavor and aroma. The widely accepted grading system established by the USDA places Prime at the top, followed by Choice. The level of marbling depends on a complex of factors including genetics, a balanced grain diet and favorable conditions. ACC marbling consistently falls within the highest grades — Choice+ and Prime.
            </p>

            {/* USDA grade scale */}
            <div className="mt-9 max-w-md">
              <div className="flex items-end gap-2 sm:gap-3">
                {[
                  { label: "Select", h: "h-6", active: false },
                  { label: "Choice", h: "h-10", active: false },
                  { label: "Choice+", h: "h-14", active: true },
                  { label: "Prime", h: "h-20", active: true },
                ].map((g) => (
                  <div key={g.label} className="flex flex-1 flex-col items-center gap-2">
                    <div className={"w-full rounded-sm " + g.h + " " + (g.active ? "bg-[#e52d27]" : "bg-white/15")} />
                    <span className={"text-[10px] font-bold uppercase tracking-widest " + (g.active ? "text-white" : "text-gray-500")}>
                      {g.label}
                    </span>
                  </div>
                ))}
              </div>
              <p className="mt-4 font-[var(--font-serif)] text-[11px] italic text-gray-400">
                Where ACC consistently grades — the top of the USDA scale.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FEED & FINISHING */}
      <section className="relative mx-auto max-w-6xl px-6 py-20 z-10">
        <div className="grid items-center gap-10 md:grid-cols-[1.2fr_1fr] lg:gap-16">
          {/* LEFT — corn anchored on a soft circle */}
          <div className="relative flex items-center justify-center">
            <div className="absolute left-1/2 top-1/2 aspect-square w-[80%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#f2eee6]" />
            <img
              src="/images/corn.png"
              alt="Corn cobs"
              loading="lazy"
              className="genie relative w-full object-contain mix-blend-multiply"
            />
          </div>

          {/* RIGHT — copy */}
          <div className="reveal">
            <span className="mb-5 flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.3em] text-[#e52d27]">
              <span className="h-px w-6 bg-[#e52d27]/60" />
              Feed &amp; Finishing
            </span>
            <h3 className="font-[var(--font-display)] text-3xl md:text-4xl font-bold uppercase tracking-wide leading-[1.1] mb-6">
              Pasture Raised, <span className="text-[#e52d27]">Corn Finished</span>
            </h3>
            <div className="max-w-xl space-y-4 font-[var(--font-serif)] text-[14px] leading-relaxed text-gray-600">
              <p>
                From birth until six months of age, our Angus cattle graze freely on open meadows. Lush grass and clean, remote pastures lay the foundation for the premium quality of ACC.
              </p>
              <p>
                Once the animals reach 400–450 kg, they are moved to specially prepared feedlots, where for 200 days their diet consists primarily of corn. Corn finishing is one of the key conditions for producing premium beef of the highest grade. It is precisely this stage that allows the natural marbling to develop within the meat, giving the cooked steak its remarkable juiciness, aroma and flavor.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* TRY IT */}
      {/* <section id="try" className="relative mx-auto max-w-5xl px-6 pb-20 z-10">
        <div className="relative flex items-stretch reveal">
          <img src="/images/steak-sliced.jpg" alt="Sliced steak" loading="lazy" className="w-1/2 object-cover" />
          <div className="flex-1 bg-[#2c2623] text-white px-10 py-10 flex items-center">
            <p className="font-[var(--font-serif)] italic text-xl md:text-2xl leading-relaxed">
              Better to taste it once <br />
              than to talk about it a hundred times.
            </p>
          </div>
        </div>
        <div className="mt-10 flex justify-center">
          <button className="group relative overflow-hidden border border-[#e52d27] px-8 py-3 text-[11px] uppercase tracking-widest text-[#e52d27] transition-colors hover:text-white">
            <span className="absolute inset-0 -translate-x-full bg-[#e52d27] transition-transform duration-500 group-hover:translate-x-0" />
            <span className="relative transition-colors group-hover:text-white">Where to try it?</span>
          </button>
        </div>
        <div id="blog" className="mt-12 text-center font-[var(--font-serif)] italic text-[13px] text-gray-500">
          On our <a href="#blog" className="text-[#e52d27] underline">blog</a> we share many recipes for delicious dishes made with ACC
        </div>
      </section> */}

      {/* CONTACTS */}
      <section id="contacts" className="relative z-10 bg-[#2c2623] text-[#fcfaf6]">
        <div className="mx-auto grid max-w-6xl items-start gap-12 px-6 py-20 sm:py-24 md:grid-cols-2 lg:gap-20">
          {/* LEFT — intro + CTA */}
          <div className="reveal">
            <span className="mb-5 flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.3em] text-[#e52d27]">
              <span className="h-px w-6 bg-[#e52d27]/60" />
              Get in Touch
            </span>
            <h3 className="font-[var(--font-display)] text-3xl md:text-4xl font-bold uppercase leading-[1.1] tracking-wide">
              Let&apos;s Work <span className="text-[#e52d27]">Together</span>
            </h3>
            <p className="mt-5 max-w-md font-[var(--font-serif)] text-[14px] leading-relaxed text-[#fcfaf6]/65">
              Whether you&apos;re a retail partner, food-service buyer or member of the press, our team would be glad to hear from you.
            </p>
            <a
              href="mailto:enquiries@acc.com.au"
              className="group relative mt-8 inline-flex items-center overflow-hidden border border-[#e52d27] px-8 py-3.5 text-[11px] font-bold uppercase tracking-[0.2em] text-[#e52d27] transition-colors hover:text-white"
            >
              <span className="absolute inset-0 -translate-x-full bg-[#e52d27] transition-transform duration-500 group-hover:translate-x-0" />
              <span className="relative">Email Our Team</span>
            </a>
          </div>

          {/* RIGHT — contact details */}
          <div className="reveal rounded-xl border border-white/10 bg-white/[0.03] px-6">
            <div className="divide-y divide-white/10">
              {[
                { label: "Head Office", value: "Cannon Hill, Brisbane\nQueensland 4170, Australia", icon: <MapPinIcon /> },
                { label: "Phone", value: "+61 7 3115 0100", href: "tel:+61731150100", icon: <PhoneIcon /> },
                { label: "Email", value: "enquiries@acc.com.au", href: "mailto:enquiries@acc.com.au", icon: <MailIcon /> },
              ].map((c) => (
                <div key={c.label} className="flex items-start gap-4 py-5">
                  <span className="mt-1 shrink-0 text-[#e52d27]">{c.icon}</span>
                  <div className="min-w-0">
                    <div className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#fcfaf6]/45">{c.label}</div>
                    {c.href ? (
                      <a href={c.href} className="mt-1 block whitespace-pre-line font-[var(--font-display)] text-lg leading-snug text-[#fcfaf6] transition-colors hover:text-[#e52d27]">
                        {c.value}
                      </a>
                    ) : (
                      <div className="mt-1 whitespace-pre-line font-[var(--font-display)] text-lg leading-snug text-[#fcfaf6]">
                        {c.value}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="relative z-10 bg-[#1c1a19] text-[#fcfaf6]/70">
        <div className="mx-auto max-w-6xl px-6 py-10">
          <div className="flex flex-col items-center gap-6 md:flex-row md:justify-between">
            {/* Logo */}
            <a href="#" className="flex flex-col items-center leading-none md:items-start">
              <span className="pl-[0.4em] font-[var(--font-display)] text-xl font-bold tracking-[0.4em] text-[#fcfaf6]">A C C</span>
              <span className="mt-1 font-[var(--font-serif)] text-[10px] italic tracking-wide text-[#fcfaf6]/40">· Australian Country Choice ·</span>
            </a>

            {/* Footer nav */}
            <nav className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-[11px] font-bold uppercase tracking-[0.18em]">
              <a href="#about" className="transition-colors hover:text-[#e52d27]">About ACC</a>
              <a href="#cuts" className="transition-colors hover:text-[#e52d27]">The Cuts</a>
              <a href="#marbling" className="transition-colors hover:text-[#e52d27]">Marbling &amp; Feed</a>
              <a href="#contacts" className="transition-colors hover:text-[#e52d27]">Contacts</a>
            </nav>
          </div>

          <div className="mt-8 flex flex-col items-center gap-3 border-t border-white/10 pt-6 text-[11px] text-[#fcfaf6]/40 md:flex-row md:justify-between">
            <span className="font-[var(--font-serif)] italic">© Australian Country Choice, 2026</span>
            <span className="font-[var(--font-serif)] italic">A fully integrated beef business</span>
          </div>
        </div>
      </footer>
    </div>
  );
}

function Divider() {
  return (
    <div className="mx-auto mt-12 flex max-w-md items-center gap-3 text-[#e52d27]/70 reveal">
      <div className="flex-1 h-px bg-gray-200" />
      <svg width="40" height="10" viewBox="0 0 40 10" fill="none" className="text-[#e52d27]">
        <path d="M0 5 Q5 0 10 5 T20 5 T30 5 T40 5" stroke="currentColor" fill="none" />
      </svg>
      <div className="flex-1 h-px bg-gray-200" />
    </div>
  );
}

function MapPinIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92Z" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="m22 7-10 6L2 7" />
    </svg>
  );
}

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  // Links split around the centered logo, matching the reference layout.
  // Each maps to an actual section anchor on the page.
  const leftLinks = [
    { href: "#about", label: "About ACC" },
    { href: "#try", label: "Try it" },
    { href: "#cuts", label: "The Cuts" },
  ];
  const rightLinks = [
    { href: "#marbling", label: "Marbling & Feed" },
    { href: "#contacts", label: "Contacts" },
  ];
  const allLinks = [...leftLinks, ...rightLinks, { href: "#blog", label: "Blog" }];
  return (
    <header
      className={
        "fixed inset-x-0 top-0 z-50 transition-all duration-500 " +
        (scrolled
          ? "bg-[#fcfaf6]/90 backdrop-blur-md"
          : "bg-transparent")
      }
    >
      <div className="mx-auto grid grid-cols-[1fr_auto_1fr] items-center px-6 h-24 max-w-7xl gap-4">
        {/* LEFT NAV */}
        <nav className="hidden md:flex items-center justify-end gap-8 text-[11px] uppercase tracking-[0.22em] text-[#2c2623] font-bold border-b border-gray-200/80 pb-2">
          {leftLinks.map((l) => (
            <a key={l.href} href={l.href} className="hover:text-[#e52d27] transition-colors whitespace-nowrap">
              {l.label}
            </a>
          ))}
        </nav>

        {/* CENTER LOGO */}
        <a href="#" className="group flex flex-col items-center leading-none md:px-6">
          <div className="mb-1 w-6 h-6 border border-[#2c2623] rounded-sm flex items-center justify-center transform rotate-45 bg-[#2c2623] text-white">
            <span className="text-[7px] font-sans font-bold -rotate-45 leading-none">ACC</span>
          </div>
          <span className="font-[var(--font-display)] text-2xl font-bold tracking-[0.4em] text-[#2c2623] pl-[0.4em] mt-1">
            A C C
          </span>
          <span className="font-[var(--font-serif)] italic text-[10px] text-gray-500 mt-1 tracking-wide">
            · Angus Choice Cuts ·
          </span>
        </a>

        {/* RIGHT NAV */}
        <nav className="hidden md:flex items-center justify-start gap-8 text-[11px] uppercase tracking-[0.22em] text-[#2c2623] font-bold border-b border-gray-200/80 pb-2">
          {rightLinks.map((l) => (
            <a key={l.href} href={l.href} className="hover:text-[#e52d27] transition-colors whitespace-nowrap">
              {l.label}
            </a>
          ))}
          <a
            href="#blog"
            className="bg-[#e52d27] text-white px-2.5 py-1 tracking-[0.18em] transition-opacity hover:opacity-85 whitespace-nowrap"
          >
            Blog
          </a>
        </nav>

        {/* MOBILE TOGGLE (sits in right column on small screens) */}
        <button
          aria-label="Menu"
          onClick={() => setOpen((v) => !v)}
          className="md:hidden justify-self-end grid place-items-center h-9 w-9 border border-gray-200 bg-white"
        >
          <span className="sr-only">Toggle menu</span>
          <div className="flex flex-col gap-1.5">
            <span className={"h-0.5 w-5 bg-[#2c2623] transition-transform " + (open ? "translate-y-2 rotate-45" : "")} />
            <span className={"h-0.5 w-5 bg-[#2c2623] transition-opacity " + (open ? "opacity-0" : "")} />
            <span className={"h-0.5 w-5 bg-[#2c2623] transition-transform " + (open ? "-translate-y-2 -rotate-45" : "")} />
          </div>
        </button>
      </div>

      <div
        className={
          "md:hidden overflow-hidden border-t border-gray-200 bg-white backdrop-blur transition-[max-height,opacity] duration-500 " +
          (open ? "max-h-96 opacity-100" : "max-h-0 opacity-0")
        }
      >
        <nav className="mx-auto max-w-6xl px-6 py-4 flex flex-col gap-3 text-[12px] uppercase tracking-[0.22em] font-bold text-[#2c2623]">
          {allLinks.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="py-2 hover:text-[#e52d27] transition-colors border-b border-gray-50">
              {l.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
