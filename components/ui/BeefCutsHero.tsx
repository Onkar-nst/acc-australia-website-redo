"use client";
import React, { useState } from "react";
import { X } from "lucide-react";

// Retail cuts that appear in the dark modal when a primal cut is clicked
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

export default function BeefCutsHero() {
  const [selectedCut, setSelectedCut] = useState<string | null>("chuck");

  const activeCutDetails = selectedCut
    ? CUTS_DETAILS[selectedCut] || {
        title: `${selectedCut.toUpperCase().replace("_", " ")} CUTS`,
        items: [
          { name: "PREMIUM STEAK", sub: "(Prime Cut)", img: "/images/ribeye.jpg" },
          { name: "ALTERNATIVE CUT", sub: "(Value Cut)", img: "/images/steak-small.jpg" },
        ],
      }
    : null;

  // Helper to handle the hover/active states of the traced cut shapes.
  // No text labels are rendered inside the SVG itself (per design direction) —
  // the red highlight fill/stroke on hover or selection is the only visual cue.
  const getPathClass = (id: string) => {
    return selectedCut === id
      ? "fill-red-600/55 stroke-red-600 stroke-[2.5] cursor-pointer transition-all duration-300"
      : "fill-transparent stroke-transparent hover:fill-red-600/25 hover:stroke-red-500 hover:stroke-[2] cursor-pointer transition-all duration-300";
  };

  const handleCutClick = (id: string) => {
    setSelectedCut(selectedCut === id ? null : id);
  };

  return (
    <section className="w-full bg-[#fcfaf6] text-[#2c2623] font-sans antialiased selection:bg-red-200">
      <div className="max-w-7xl mx-auto px-4 pt-12 pb-16 flex flex-col items-center relative">
        <h1 className="text-3xl md:text-4xl font-light tracking-[0.3em] uppercase text-center mb-3">
          Prime Beef Cuts
        </h1>

        {/* Instructional hint now lives here, above the diagram, where it's
            immediately visible to customers instead of being tucked into a
            corner of a dark panel. */}
        <p className="text-xs sm:text-sm italic text-[#8a8077] font-serif text-center mb-8">
          Select a primal cut below to see its retail steaks
        </p>

        {/* Light panel — matches the site's cream palette instead of a dark
            stage. The cow illustration's own black background has been
            removed (chroma-keyed to transparent) so it sits naturally here
            with no visible image-edge rectangle. */}
        <div className="w-full max-w-4xl bg-white rounded-xl border border-[#eee7d8] shadow-sm p-4 sm:p-8 relative flex flex-col items-center justify-center overflow-hidden">

          <div className="relative w-full max-w-3xl aspect-[1017/619] z-10">
            {/* The cow diagram, background removed */}
            <img
              src="/images/2.png"
              alt="Beef primal cuts diagram"
              className="absolute inset-0 w-full h-full object-contain select-none pointer-events-none"
              draggable={false}
            />

            {/* SVG overlay — hand-traced polygons mapped to each primal cut's
                actual boundary lines. No text labels rendered inside the SVG;
                the red fill/stroke on hover or selection is the only cue. */}
            <svg
              viewBox="0 0 1017 619"
              className="absolute inset-0 w-full h-full z-20"
              preserveAspectRatio="xMidYMid meet"
            >
              {/* CHUCK */}
              <polygon
                points="264,68,266,81,265,94,263,112,259,131,254,149,247,169,239,182,227,196,217,206,200,216,209,228,217,242,224,259,230,276,234,286,259,281,281,276,307,271,327,268,346,266,363,265,383,265,393,265,391,241,390,221,390,205,389,183,389,162,387,141,384,123,383,108,383,98,381,88"
                className={getPathClass("chuck")}
                onClick={() => handleCutClick("chuck")}
              />
              {/* RIB */}
              <polygon
                points="386,86,389,107,392,127,393,149,393,170,393,191,395,213,395,233,398,254,396,263,421,263,439,263,460,261,477,261,494,261,506,261,505,239,502,210,499,181,496,158,492,140,489,123,485,106,479,91"
                className={getPathClass("rib")}
                onClick={() => handleCutClick("rib")}
              />
              {/* SHORT LOIN */}
              <polygon
                points="484,90,487,100,493,114,496,130,499,145,501,161,504,178,506,197,507,218,509,233,510,248,511,263,528,264,547,265,567,265,586,265,603,267,606,247,604,223,603,201,600,180,597,160,593,137,587,112,577,90"
                className={getPathClass("short_loin")}
                onClick={() => handleCutClick("short_loin")}
              />
              {/* SIRLOIN */}
              <polygon
                points="581,89,590,106,596,129,601,154,606,177,608,197,608,212,610,232,608,252,607,266,631,269,658,273,676,277,693,289,708,302,716,309,721,286,721,266,721,247,720,230,718,210,717,193,717,174,714,156,711,136,708,120,703,103,690,81"
                className={getPathClass("sirloin")}
                onClick={() => handleCutClick("sirloin")}
              />
              {/* ROUND */}
              <polygon
                points="696,79,706,97,714,122,717,146,721,173,723,194,726,223,726,256,726,283,723,312,748,312,774,316,800,322,820,323,830,296,838,269,843,250,857,239,857,204,853,179,846,156,837,133,826,113,816,94,806,81,778,76"
                className={getPathClass("round")}
                onClick={() => handleCutClick("round")}
              />
              {/* BRISKET */}
              <polygon
                points="237,293,266,284,297,279,327,274,359,272,393,270,396,302,396,339,394,353,333,359,313,366,287,360,269,347"
                className={getPathClass("brisket")}
                onClick={() => handleCutClick("brisket")}
              />
              {/* PLATE */}
              <polygon
                points="399,267,399,289,401,306,403,325,400,345,396,352,421,356,441,350,457,349,476,349,490,349,510,353,526,353,541,353,561,350,584,346,593,325,597,309,600,294,603,272"
                className={getPathClass("plate")}
                onClick={() => handleCutClick("plate")}
              />
              {/* FLANK */}
              <polygon
                points="590,346,598,325,604,303,607,282,606,269,634,270,653,273,668,277,681,286,691,293,701,300,711,312"
                className={getPathClass("flank")}
                onClick={() => handleCutClick("flank")}
              />
              {/* SHANK — both the foreleg and hindleg polygons share one id,
                  so clicking either highlights both and opens the same modal */}
              <polygon
                points="320,368,329,381,334,395,339,406,344,419,356,421,369,406,377,394,383,381,390,366,394,359,354,359"
                className={getPathClass("shank")}
                onClick={() => handleCutClick("shank")}
              />
              <polygon
                points="708,319,730,332,747,346,761,356,777,366,790,372,807,376,816,362,814,347,813,327,754,315"
                className={getPathClass("shank")}
                onClick={() => handleCutClick("shank")}
              />
            </svg>
          </div>

          {/* Legend — recolored for the light panel */}
          <div className="mt-6 w-full max-w-3xl flex items-center justify-start px-2">
            <div className="flex flex-col space-y-2 text-[9px] sm:text-[10px] tracking-wider text-[#8a8077] font-bold uppercase">
              <div className="flex items-center space-x-2">
                <span className="w-2 h-2 sm:w-2.5 sm:h-2.5 bg-[#bdb6a6] rounded-full" />
                <span>GROUND / MINCE</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="w-2 h-2 sm:w-2.5 sm:h-2.5 bg-red-600 rounded-full" />
                <span>MINUTE STEAK</span>
              </div>
            </div>
          </div>
        </div>

        {/* Modal Logic */}
        {activeCutDetails && (
          <div className="w-full max-w-4xl mt-6 bg-[#161616] text-white rounded-xl shadow-xl border border-neutral-800 overflow-hidden animate-in fade-in slide-in-from-bottom-4 duration-300 z-30">
            <div className="px-6 py-4 bg-neutral-900/50 border-b border-neutral-800 flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-red-600 rounded-full animate-pulse" />
                <h3 className="text-sm font-bold tracking-widest uppercase text-neutral-200">
                  {activeCutDetails.title}
                </h3>
              </div>
              <button
                onClick={() => setSelectedCut(null)}
                className="p-1 hover:bg-neutral-800 rounded-full text-neutral-400 hover:text-white transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
            <div className="p-6 overflow-x-auto">
              {activeCutDetails.items.length > 0 ? (
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-4 min-w-[700px] lg:min-w-0">
                  {activeCutDetails.items.map((item, idx) => (
                    <div key={idx} className="flex flex-col items-center text-center group cursor-pointer p-2 rounded-lg hover:bg-neutral-900 transition-colors">
                      <div className="w-16 h-16 rounded-full border-2 border-neutral-700 overflow-hidden bg-neutral-800 mb-3 shadow-inner group-hover:border-red-500 transition-colors flex items-center justify-center relative">
                        <img
                          src={item.img}
                          alt={item.name}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                          onError={(e) => { e.currentTarget.style.display = "none"; }}
                        />
                        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/30" />
                      </div>
                      <span className="text-[10px] font-bold leading-tight tracking-wide text-neutral-100 uppercase line-clamp-2 min-h-[28px] max-w-[95px]">
                        {item.name}
                      </span>
                      <span className="text-[9px] text-neutral-500 font-medium mt-1 font-mono">
                        {item.sub}
                      </span>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center text-neutral-500 py-4 text-sm font-mono">
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