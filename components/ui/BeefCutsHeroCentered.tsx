"use client";
import React, { useState } from "react";
import { X } from "lucide-react";

// Retail cuts that appear when a primal cut is clicked
const CUTS_DETAILS: Record<string, { title: string; items: { name: string; sub: string; img: string }[] }> = {
  chuck: {
    title: "CHUCK CUTS",
    items: [
      { name: "COWBOY STEAK", sub: "(Bone-in Ribeye)", img: "/images/ribeye.jpg" },
      { name: "RUMP ROAST", sub: "(Bottom Half)", img: "/images/steak-board.jpg" },
      { name: "NEW YORK STRIP", sub: "(Strip Loin)", img: "/images/steak-sliced.jpg" },
      { name: "PORTERHOUSE", sub: "(Short Loin)", img: "/images/steak-small.jpg" },
      { name: "FILET MIGNON", sub: "(Tenderloin)", img: "/images/ribeye.jpg" },
      { name: "FLANKEN RIBS", sub: "(Short Ribs)", img: "/images/steak-board.jpg" },
      { name: "TOMAHAWK", sub: "(Long Bone Ribeye)", img: "/images/steak-sliced.jpg" },
    ],
  },
  rib: {
    title: "RIB CUTS",
    items: [
      { name: "RIBEYE STEAK", sub: "(Prime Rib)", img: "/images/ribeye.jpg" },
      { name: "BACK RIBS", sub: "(Beef Ribs)", img: "/images/steak-board.jpg" },
    ],
  },
  short_loin: {
    title: "SHORT LOIN CUTS",
    items: [
      { name: "PORTERHOUSE", sub: "(Thick Cut)", img: "/images/steak-small.jpg" },
      { name: "T-BONE", sub: "(Classic Cut)", img: "/images/steak-board.jpg" },
    ],
  },
  sirloin: {
    title: "SIRLOIN CUTS",
    items: [
      { name: "TOP SIRLOIN", sub: "(Lean Steak)", img: "/images/steak-sliced.jpg" },
      { name: "TRI-TIP", sub: "(Roast)", img: "/images/ribeye.jpg" },
    ],
  },
  round: {
    title: "ROUND CUTS",
    items: [
      { name: "EYE OF ROUND", sub: "(Roast)", img: "/images/steak-board.jpg" },
      { name: "BOTTOM ROUND", sub: "(Roast)", img: "/images/steak-small.jpg" },
    ],
  },
  brisket: {
    title: "BRISKET",
    items: [
      { name: "BRISKET FLAT", sub: "(Lean)", img: "/images/ribeye.jpg" },
      { name: "BRISKET POINT", sub: "(Fatty)", img: "/images/steak-sliced.jpg" },
    ],
  },
  plate: {
    title: "SHORT PLATE",
    items: [
      { name: "SKIRT STEAK", sub: "(Fajita Cut)", img: "/images/steak-sliced.jpg" },
      { name: "SHORT RIBS", sub: "(Braising)", img: "/images/steak-board.jpg" },
    ],
  },
  flank: {
    title: "FLANK CUTS",
    items: [
      { name: "FLANK STEAK", sub: "(Grilling Cut)", img: "/images/ribeye.jpg" },
    ],
  },
  shank: {
    title: "SHANK",
    items: [
      { name: "BEEF SHANK", sub: "(Osso Buco)", img: "/images/steak-small.jpg" },
    ],
  },
};

export default function BeefCutsHeroCentered() {
  const [selectedCut, setSelectedCut] = useState<string | null>(null);

  const activeCutDetails = selectedCut
    ? CUTS_DETAILS[selectedCut] || {
        title: `${selectedCut.toUpperCase().replace("_", " ")} CUTS`,
        items: [
          { name: "PREMIUM STEAK", sub: "(Prime Cut)", img: "/images/ribeye.jpg" },
          { name: "ALTERNATIVE CUT", sub: "(Value Cut)", img: "/images/steak-small.jpg" },
        ],
      }
    : null;

  // Solid red fill with white borders to match the Behance reference exactly
  const getPathClass = (id: string) => {
    return selectedCut === id
      ? "fill-[#e52d27]/90 stroke-white stroke-[2] cursor-pointer transition-all duration-300"
      : "fill-transparent stroke-white hover:fill-[#e52d27]/70 hover:stroke-white hover:stroke-[2] cursor-pointer transition-all duration-300";
  };

  const handleCutClick = (id: string) => {
    setSelectedCut(selectedCut === id ? null : id);
  };

  return (
    <section className="w-full relative bg-[#fcfaf6] text-[#2c2623] font-sans antialiased selection:bg-red-200 min-h-screen flex flex-col justify-center pt-24 pb-16">
      
      {/* ============================================================ */}
      {/* TOP SECTION: Centered Text & Typography                      */}
      {/* ============================================================ */}
      <div className="max-w-6xl mx-auto px-6 w-full flex flex-col items-center text-center space-y-6 z-20">
        
        {/* Capsules */}
        <div className="flex items-center gap-3 flex-wrap justify-center">
          {["People", "Passion", "Flavour"].map((word, idx) => (
            <span 
              key={idx} 
              className="px-4 py-1.5 rounded-full border border-[#2c2623]/20 text-[#2c2623] text-[11px] font-bold uppercase tracking-widest bg-white"
            >
              {word}
            </span>
          ))}
        </div>
        
        {/* Headline - Guaranteed single line using clamp and whitespace-nowrap */}
        <div className="w-full overflow-hidden flex justify-center">
          <h1 className="text-[clamp(1.2rem,4vw,4.5rem)] font-[var(--font-display)] font-bold tracking-tight text-[#2c2623] leading-none whitespace-nowrap">
            A global leader in beef production.
          </h1>
        </div>
      </div>

      {/* ============================================================ */}
      {/* MIDDLE SECTION: Centered Cow with Circle Watermark           */}
      {/* ============================================================ */}
      <div className="relative w-full max-w-6xl mx-auto flex flex-col items-center justify-center mt-12 lg:mt-16 z-10">
        
        {/* Subtle Background Circle to anchor the image */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[55%] w-[300px] h-[300px] sm:w-[450px] sm:h-[450px] lg:w-[600px] lg:h-[600px] bg-[#f2eee6] rounded-full -z-10"></div>

        {/* The cow diagram */}
        <div className="relative w-full max-w-3xl lg:max-w-4xl aspect-[1017/619] z-10 px-4">
          <img
            src="/images/2.png"
            alt="Beef primal cuts diagram"
            className="absolute inset-0 w-full h-full object-contain mix-blend-multiply select-none pointer-events-none drop-shadow-lg"
            draggable={false}
          />

          {/* SVG overlay — hand-traced polygons */}
          <svg
            viewBox="0 0 1017 619"
            className="absolute inset-0 w-full h-full z-20"
            preserveAspectRatio="xMidYMid meet"
          >
            <polygon points="264,68,266,81,265,94,263,112,259,131,254,149,247,169,239,182,227,196,217,206,200,216,209,228,217,242,224,259,230,276,234,286,259,281,281,276,307,271,327,268,346,266,363,265,383,265,393,265,391,241,390,221,390,205,389,183,389,162,387,141,384,123,383,108,383,98,381,88" className={getPathClass("chuck")} onClick={() => handleCutClick("chuck")} />
            <polygon points="386,86,389,107,392,127,393,149,393,170,393,191,395,213,395,233,398,254,396,263,421,263,439,263,460,261,477,261,494,261,506,261,505,239,502,210,499,181,496,158,492,140,489,123,485,106,479,91" className={getPathClass("rib")} onClick={() => handleCutClick("rib")} />
            <polygon points="484,90,487,100,493,114,496,130,499,145,501,161,504,178,506,197,507,218,509,233,510,248,511,263,528,264,547,265,567,265,586,265,603,267,606,247,604,223,603,201,600,180,597,160,593,137,587,112,577,90" className={getPathClass("short_loin")} onClick={() => handleCutClick("short_loin")} />
            <polygon points="581,89,590,106,596,129,601,154,606,177,608,197,608,212,610,232,608,252,607,266,631,269,658,273,676,277,693,289,708,302,716,309,721,286,721,266,721,247,720,230,718,210,717,193,717,174,714,156,711,136,708,120,703,103,690,81" className={getPathClass("sirloin")} onClick={() => handleCutClick("sirloin")} />
            <polygon points="696,79,706,97,714,122,717,146,721,173,723,194,726,223,726,256,726,283,723,312,748,312,774,316,800,322,820,323,830,296,838,269,843,250,857,239,857,204,853,179,846,156,837,133,826,113,816,94,806,81,778,76" className={getPathClass("round")} onClick={() => handleCutClick("round")} />
            <polygon points="237,293,266,284,297,279,327,274,359,272,393,270,396,302,396,339,394,353,333,359,313,366,287,360,269,347" className={getPathClass("brisket")} onClick={() => handleCutClick("brisket")} />
            <polygon points="399,267,399,289,401,306,403,325,400,345,396,352,421,356,441,350,457,349,476,349,490,349,510,353,526,353,541,353,561,350,584,346,593,325,597,309,600,294,603,272" className={getPathClass("plate")} onClick={() => handleCutClick("plate")} />
            <polygon points="590,346,598,325,604,303,607,282,606,269,634,270,653,273,668,277,681,286,691,293,701,300,711,312" className={getPathClass("flank")} onClick={() => handleCutClick("flank")} />
            <polygon points="320,368,329,381,334,395,339,406,344,419,356,421,369,406,377,394,383,381,390,366,394,359,354,359" className={getPathClass("shank")} onClick={() => handleCutClick("shank")} />
            <polygon points="708,319,730,332,747,346,761,356,777,366,790,372,807,376,816,362,814,347,813,327,754,315" className={getPathClass("shank")} onClick={() => handleCutClick("shank")} />
          </svg>
        </div>
      </div>

      {/* ============================================================ */}
      {/* BOTTOM SECTION: Instructions or Active Dark Panel            */}
      {/* ============================================================ */}
      <div className="relative w-full max-w-7xl mx-auto px-6 flex flex-col items-center justify-center min-h-[220px]">
        
        {/* Unselected State: Instructional Text */}
        {!selectedCut ? (
          <div className="flex flex-col items-center text-center animate-in fade-in duration-500 max-w-lg mt-4">
            <svg width="40" height="12" viewBox="0 0 40 12" className="text-[#e52d27] mb-4">
              <path d="M0 6 Q 5 0, 10 6 T 20 6 T 30 6 T 40 6" stroke="currentColor" strokeWidth="1.5" fill="none" />
            </svg>
            <p className="text-sm sm:text-base text-[#8a8077] font-[var(--font-serif)] italic leading-relaxed mb-6">
              <strong className="not-italic text-[#e52d27] font-sans font-bold uppercase tracking-widest text-[11px] block sm:inline sm:mr-1">
                Select a primal cut
              </strong> 
              from the diagram to explore its retail steaks. From robust chuck to tender short loin, discover the anatomy of premium flavor.
            </p>
          </div>
        ) : (
          /* Selected State: Dark Product Box */
          <div className="w-full bg-[#1c1a19] text-white p-8 sm:p-10 shadow-2xl rounded-md animate-in slide-in-from-bottom-8 fade-in duration-500 mt-4">
            
            {/* Header of the Details Panel */}
            <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-6 border-b border-neutral-800 pb-6 mb-8">
              <div className="flex flex-col">
                <span className="text-[#e52d27] text-[11px] font-bold tracking-[0.2em] uppercase mb-2">
                  Retail Steaks
                </span>
                <h3 className="text-2xl md:text-3xl font-[var(--font-display)] font-light tracking-[0.15em] uppercase text-white">
                  {activeCutDetails.title}
                </h3>
              </div>
              
              <button
                onClick={() => setSelectedCut(null)}
                className="group flex items-center gap-2 text-[10px] font-bold tracking-[0.2em] uppercase text-neutral-400 hover:text-white transition-colors"
                aria-label="Close details"
              >
                <span>Close Menu</span>
                <X className="w-5 h-5 border border-neutral-700 rounded-full p-0.5 group-hover:border-white transition-colors" />
              </button>
            </div>
            
            {/* Retail Steaks Grid */}
            <div className="w-full overflow-x-auto pb-4 custom-scrollbar">
              {activeCutDetails.items.length > 0 ? (
                <div className="flex sm:grid sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-x-6 gap-y-10 min-w-max sm:min-w-0">
                  {activeCutDetails.items.map((item, idx) => (
                    <div key={idx} className="flex flex-col items-center text-center group w-28 sm:w-auto">
                      <div className="w-20 h-20 sm:w-28 sm:h-28 rounded-full overflow-hidden bg-neutral-800 mb-4 shadow-inner border border-neutral-700 group-hover:border-[#e52d27] transition-all duration-300">
                        <img
                          src={item.img}
                          alt={item.name}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                          onError={(e) => { e.currentTarget.style.display = "none"; }}
                        />
                      </div>
                      <span className="text-[10px] sm:text-xs font-bold tracking-widest text-neutral-200 uppercase line-clamp-2">
                        {item.name}
                      </span>
                      <span className="text-[9px] sm:text-[11px] text-neutral-500 mt-1 font-[var(--font-serif)] italic">
                        {item.sub}
                      </span>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center text-neutral-500 py-8 font-[var(--font-serif)] italic text-sm border border-dashed border-neutral-800 rounded-lg">
                  Specific retail cuts coming soon...
                </div>
              )}
            </div>
          </div>
        )}
      </div>

    </section>
  );
}