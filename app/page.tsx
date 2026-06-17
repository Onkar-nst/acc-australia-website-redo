"use client";
import { useEffect, useRef, useState } from "react";
import BeefCutsHero from "../components/ui/BeefCutsHero";

// ─────────────────────────────────────────────────────────────
// The interactive beef-cuts diagram (hero section with the cow
// illustration + clickable primal cut zones + dark cuts modal)
// now lives ENTIRELY inside components/ui/BeefCutsHero.tsx.
// It is rendered once below via <BeefCutsHero />.
//
// Using a RELATIVE import path here ("../components/ui/...")
// instead of an "@/" alias, since this project's tsconfig.json
// does not have a confirmed "@/*" path alias configured. If you
// add one later (Next.js scaffolds this by default), you can
// switch this back to "@/components/ui/BeefCutsHero" if you prefer.
//
// Previously this file had its own separate, duplicate copy of
// that same feature with a different (and incorrectly measured,
// overflowing) set of coordinates layered on top of angus-bull.png.
// That duplicate block has been removed so there is only one
// source of truth for the diagram and its hover-zone coordinates.
// ─────────────────────────────────────────────────────────────

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
      <div className="h-20" />
      <ArrowRight className="fixed right-2 top-1/3 hidden lg:block float-slow z-50 text-[#e52d27]" />
      <ArrowLeft className="fixed left-2 top-2/3 hidden lg:block float-mid z-50 text-[#e52d27]" />

      {/* ========================================= */}
      {/* PRIME BEEF HERO SECTION (cow diagram)     */}
      {/* ========================================= */}
      <BeefCutsHero />

      {/* ========================================= */}
      {/* ORIGINAL HOMEPAGE CONTENT                 */}
      {/* ========================================= */}

      {/* ABOUT QUOTE */}
      <section id="about" className="mx-auto max-w-5xl px-6 py-16">
        <div className="flex flex-col md:flex-row items-center gap-10 reveal">
          <img src="/images/steak-small.jpg" alt="Steak" loading="lazy" className="h-48 w-48 object-cover rounded-sm shadow-lg hover-scale" />
          <div className="flex-1">
            <h2 className="font-[var(--font-display)] text-2xl md:text-3xl font-bold uppercase tracking-wide leading-tight">
              ACC IS NOT JUST A MARK <br /> OF PREMIUM BEEF QUALITY
            </h2>
            <p className="mt-5 font-[var(--font-serif)] text-[13px] leading-relaxed text-[#2c2623]/70 max-w-lg">
              It is a lifestyle and a particular philosophy of eating meat as the main source of natural proteins — essential for the health and vitality of any modern person.
            </p>
          </div>
        </div>
        <div className="relative mt-14 flex items-stretch reveal">
          <div className="bg-[#2c2623] text-[#fcfaf6] flex-1 px-10 py-10">
            <p className="font-[var(--font-serif)] italic text-xl md:text-2xl leading-relaxed">
              ACC is not content with <br />
              merely good — it demands <br />
              <span className="text-[#e52d27]">only the very best.</span>
            </p>
          </div>
          <img src="/images/cleaver.png" alt="" loading="lazy" className="hidden md:block w-40 -ml-6 object-contain float-mid" />
        </div>
      </section>

      {/* MARQUEE */}
      <div className="overflow-hidden border-y border-gray-200 bg-white py-4">
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

      {/* BLACK ANGUS */}
      <section id="cuts" className="relative mx-auto max-w-5xl px-6 py-20">
        <div className="absolute left-10 top-20 font-[var(--font-display)] text-[300px] leading-none font-bold text-gray-100 pointer-events-none select-none">
          A
        </div>
        <div className="relative grid md:grid-cols-2 gap-10 items-center">
          <div className="reveal">
            <h3 className="font-[var(--font-display)] text-xl font-bold uppercase tracking-wide mb-5">
              BLACK ANGUS (OR <br />ABERDEEN ANGUS)
            </h3>
            <p className="font-[var(--font-serif)] text-[12.5px] leading-relaxed text-gray-600">
              The legendary cattle breed developed in the 19th century in the Scottish counties of Aberdeen and Angus. It is renowned worldwide for its signature marbled meat. Thanks to its unique distribution of natural intramuscular fat, the breed thrives in climates from −30 °C to +40 °C. The genetics of our cattle have impeccable lineage — their pedigrees include world-famous classical bloodlines, and our animals are registered with the American Angus Association.
            </p>
            <button className="group relative mt-6 overflow-hidden border border-[#e52d27] px-6 py-2 text-[11px] uppercase tracking-widest text-[#e52d27] transition-colors hover:text-white">
              <span className="absolute inset-0 -translate-x-full bg-[#e52d27] transition-transform duration-500 group-hover:translate-x-0" />
              <span className="relative">View the cuts</span>
            </button>
          </div>
          <div className="relative genie">
            <img src="/images/angus-bull.png" alt="Black Angus" loading="lazy" className="w-full object-contain mix-blend-multiply" />
            <div className="absolute right-2 top-6 font-[var(--font-display)] text-5xl md:text-6xl font-bold text-[#e52d27] leading-none tracking-tight">
              BLACK<br />ANGUS
            </div>
          </div>
        </div>
        <Divider />
      </section>

      {/* MARBLING DARK BAND */}
      <section className="relative bg-[#2c2623] text-white py-20">
        <div className="mx-auto max-w-5xl px-6 grid md:grid-cols-2 gap-12 items-center">
          <img src="/images/steak-board.jpg" alt="Marbling" loading="lazy" className="w-full object-cover shadow-2xl genie" />
          <div className="reveal">
            <h3 className="font-[var(--font-display)] text-xl font-bold uppercase tracking-wide">
              MARBLING OF GRADE <br /><span className="text-[#e52d27]">CHOICE+ / PRIME</span>
            </h3>
            <p className="mt-5 font-[var(--font-serif)] text-[12.5px] leading-relaxed text-gray-300">
              Marbling — the even distribution of thin layers of fat between muscle fibers — is the principal indicator of beef quality and the key to its flavor and aroma. The widely accepted grading system established by the USDA places Prime at the top, followed by Choice. The level of marbling depends on a complex of factors including genetics, a balanced grain diet and favorable conditions. ACC marbling consistently falls within the highest grades — Choice+ and Prime.
            </p>
          </div>
        </div>
        <img src="/images/steak-small.jpg" alt="" loading="lazy" className="absolute right-10 bottom-6 hidden md:block h-24 w-24 object-cover rounded-full border-4 border-[#2c2623] shadow-xl float-slow" />
      </section>

      {/* CORN FED */}
      <section className="relative mx-auto max-w-5xl px-6 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative genie">
            <img src="/images/corn.png" alt="Corn" loading="lazy" className="w-full object-contain mix-blend-multiply" />
            <div className="absolute right-0 top-1/3 font-[var(--font-display)] text-6xl font-bold text-[#e52d27] leading-none">
              CORN<br /><span className="block pl-8">FED</span>
            </div>
          </div>
          <div className="reveal">
            <h3 className="font-[var(--font-display)] text-xl font-bold uppercase tracking-wide mb-5">
              GRAIN FED ONLY
            </h3>
            <p className="font-[var(--font-serif)] text-[12.5px] leading-relaxed text-gray-600">
              From birth until six months of age, our Angus cattle graze freely on open meadows. Lush grass and clean, remote pastures lay the foundation for the premium quality of ACC. Once the animals reach 400–450 kg, they are moved to specially prepared feedlots, where for 200 days their diet consists primarily of corn. Corn finishing is one of the key conditions for producing premium beef of the highest grade. It is precisely this stage that allows the natural marbling to develop within the meat, giving the cooked steak its remarkable juiciness, aroma and flavor.
            </p>
          </div>
        </div>
      </section>

      {/* TRY IT */}
      <section id="try" className="relative mx-auto max-w-5xl px-6 pb-20">
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
        <div className="mt-12 text-center font-[var(--font-serif)] italic text-[13px] text-gray-500">
          On our <a href="#" className="text-[#e52d27] underline">blog</a> we share many recipes for delicious dishes made with ACC
        </div>
      </section>

      {/* CONTACTS */}
      <section id="contacts" className="mx-auto max-w-5xl px-6 pb-16 text-center reveal">
        <div className="flex justify-center gap-3 mb-4 text-gray-300">
          <span>✕</span><span>•</span><span>✕</span>
        </div>
        <h3 className="font-[var(--font-display)] text-lg font-bold tracking-[0.3em] mb-10 text-[#2c2623]">CONTACTS</h3>
        <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
          <div className="rounded-sm border border-gray-200 p-6 transition-shadow hover:shadow-lg bg-white">
            <div className="font-[var(--font-display)] font-bold tracking-widest text-sm text-[#2c2623]">ILYA NISHCHENKO</div>
            <div className="font-[var(--font-serif)] italic text-[11px] text-gray-500 mt-1">
              Deputy CEO for Development, <br />ACC Group
            </div>
            <div className="mt-3 font-[var(--font-display)] text-[#e52d27]">+7 910 283-14-88</div>
            <div className="font-[var(--font-serif)] italic text-[11px] text-gray-500">ilya@acc-beef.com</div>
          </div>
          <div className="rounded-sm border border-gray-200 p-6 transition-shadow hover:shadow-lg bg-white">
            <div className="font-[var(--font-display)] font-bold tracking-widest text-sm text-[#2c2623]">ANTON FOMIN</div>
            <div className="font-[var(--font-serif)] italic text-[11px] text-gray-500 mt-1">
              Advertising and PR specialist
            </div>
            <div className="mt-3 font-[var(--font-display)] text-[#e52d27]">+7 903 449-05-19</div>
            <div className="font-[var(--font-serif)] italic text-[11px] text-gray-500">anton@acc-beef.com</div>
          </div>
        </div>
        <div className="mt-10 bg-gray-50 py-4 text-[11px] text-gray-500 font-[var(--font-serif)] italic rounded">
          ACC Headquarters · Koltsovskaya St. 9, Office 315
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-gray-200 py-5 bg-white">
        <div className="mx-auto max-w-5xl px-6 flex items-center justify-between text-[11px] text-gray-400 font-[var(--font-serif)] italic">
          <span>© ACC LLC, 2026</span>
          <div className="flex gap-3 text-gray-300">
            <span>✕</span><span>•</span><span>✕</span>
          </div>
          <span>ACC · <span className="text-[#e52d27]">Angus Choice Cuts</span></span>
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

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  const links = [
    { href: "#about", label: "About" },
    { href: "#cuts", label: "Cuts" },
    { href: "#try", label: "Try it" },
    { href: "#contacts", label: "Contacts" },
  ];
  return (
    <header
      className={
        "fixed inset-x-0 top-0 z-50 transition-all duration-500 " +
        (scrolled
          ? "bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-sm"
          : "bg-[#fcfaf6] border-b border-transparent")
      }
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 h-20">

        {/* Logo matching Behance exactly */}
        <a href="#" className="group flex items-center gap-3">
          <div className="bg-[#e52d27] text-white font-bold p-2 text-xs tracking-wider">
            ACC
          </div>
          <span className="hidden sm:flex flex-col leading-none">
            <span className="font-[var(--font-display)] text-xl font-bold tracking-[0.35em] text-[#2c2623]">A C C</span>
            <span className="font-[var(--font-serif)] italic text-[10px] text-gray-500 mt-0.5">Angus · Choice · Cuts</span>
          </span>
        </a>

        {/* Desktop links */}
        <nav className="hidden md:flex items-center gap-9 text-[11px] uppercase tracking-[0.22em] text-gray-600 font-bold">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="hover:text-[#e52d27] transition-colors">
              {l.label}
            </a>
          ))}
        </nav>

        {/* CTA + lang */}
        <div className="flex items-center gap-4">
          <span className="hidden sm:inline-flex items-center gap-1.5 border border-gray-200 px-3 py-1.5 text-[10px] font-bold tracking-widest text-gray-600 bg-white">
            <span className="h-1.5 w-1.5 rounded-full bg-[#e52d27]" /> EN
          </span>
          <a
            href="#try"
            className="group relative hidden md:inline-flex items-center overflow-hidden border border-[#e52d27] px-6 py-2 text-[11px] font-bold uppercase tracking-[0.2em] text-[#e52d27] bg-white"
          >
            <span className="absolute inset-0 -translate-x-full bg-[#e52d27] transition-transform duration-500 group-hover:translate-x-0" />
            <span className="relative transition-colors group-hover:text-white">Order now</span>
          </a>
          <button
            aria-label="Menu"
            onClick={() => setOpen((v) => !v)}
            className="md:hidden grid place-items-center h-9 w-9 border border-gray-200 bg-white"
          >
            <span className="sr-only">Toggle menu</span>
            <div className="flex flex-col gap-1.5">
              <span className={"h-0.5 w-5 bg-[#2c2623] transition-transform " + (open ? "translate-y-2 rotate-45" : "")} />
              <span className={"h-0.5 w-5 bg-[#2c2623] transition-opacity " + (open ? "opacity-0" : "")} />
              <span className={"h-0.5 w-5 bg-[#2c2623] transition-transform " + (open ? "-translate-y-2 -rotate-45" : "")} />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={
          "md:hidden overflow-hidden border-t border-gray-200 bg-white backdrop-blur transition-[max-height,opacity] duration-500 " +
          (open ? "max-h-80 opacity-100" : "max-h-0 opacity-0")
        }
      >
        <nav className="mx-auto max-w-6xl px-6 py-4 flex flex-col gap-3 text-[12px] uppercase tracking-[0.22em] font-bold text-gray-600">
          {links.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="py-2 hover:text-[#e52d27] transition-colors border-b border-gray-50">
              {l.label}
            </a>
          ))}
          <a href="#try" onClick={() => setOpen(false)} className="mt-4 inline-flex w-full justify-center border border-[#e52d27] px-5 py-3 text-[#e52d27]">Order now</a>
        </nav>
      </div>
    </header>
  );
}

function ArrowRight({ className = "" }: { className?: string }) {
  return (
    <svg className={className} width="40" height="60" viewBox="0 0 60 100" fill="none">
      <path d="M5 10 L55 50 L5 90" stroke="currentColor" strokeWidth="4" fill="none" />
    </svg>
  );
}

function ArrowLeft({ className = "" }: { className?: string }) {
  return (
    <svg className={className} width="40" height="60" viewBox="0 0 60 100" fill="none">
      <path d="M55 10 L5 50 L55 90" stroke="currentColor" strokeWidth="4" fill="none" />
    </svg>
  );
}