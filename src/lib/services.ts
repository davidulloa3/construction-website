export type ServiceSlug =
  | "kitchen-remodeling"
  | "bathroom-remodeling"
  | "bathroom-renovation"
  | "flooring"
  | "roofing"
  | "painting"
  | "drywall"
  | "window-installation"
  | "door-installation"
  | "siding"
  | "room-additions"
  | "adu-construction"
  | "new-construction"
  | "interior-remodeling"
  | "smart-home-upgrades";

export interface ServiceData {
  slug: ServiceSlug;
  name: string;
  heroImage: string;
  beforeImage: string;
  afterImage: string;
  intro: string;
  included: string[];
  relatedSlugs: [ServiceSlug, ServiceSlug, ServiceSlug];
  metaDescription: string;
  schemaDescription: string;
  faqs?: Array<{ q: string; a: string }>;
  /** Optional override for the exact <title> tag. Used verbatim when set. */
  titleTag?: string;
  /** Optional H1 override. Falls back to the "{name} in Anaheim & Orange County" heading. */
  h1?: string;
  /** Optional rich HTML body rendered below the intro (for longer-form service pages). */
  body?: string;
  /** Optional contextual cross-link rendered after the intro paragraph. */
  crossLink?: { before: string; href: string; label: string; after: string };
}

export const services: ServiceData[] = [
  {
    slug: "kitchen-remodeling",
    name: "Kitchen Remodeling",
    heroImage: "/images/gallery-2.jpg",
    beforeImage: "/images/948faca5-dc3e-439f-94ed-5275d9ba7f87.png",
    afterImage: "/images/IMG_0671.png",
    intro:
      "Your kitchen is the most-used room in your home, and a thoughtful remodel changes everything about how your family lives. Ulloa Construction has delivered hundreds of kitchen renovations across Orange County, from open-concept conversions in Anaheim Hills to custom cabinet builds in Irvine, with honest pricing and no subcontractor runaround. We coordinate every trade, pull all required permits, and provide a detailed written scope before any work begins. Every kitchen we build is backed by CSLB License #1144906 and full general liability insurance.",
    included: [
      "Full layout reconfiguration and open-concept wall removal",
      "Custom and semi-custom cabinet design, fabrication, and installation",
      "Countertop installation: quartz, granite, marble, or butcher block",
      "Tile backsplash design and precision installation",
      "Recessed lighting, pendant lighting, and under-cabinet LED strips",
      "Kitchen island construction with waterfall edges",
      "Appliance cutout coordination and hookup",
      "New flooring throughout kitchen and adjacent dining areas",
    ],
    relatedSlugs: ["bathroom-remodeling", "interior-remodeling", "flooring"],
    metaDescription:
      "Expert kitchen remodeling in Anaheim and Orange County, CA. Custom cabinets, quartz countertops, open-concept layouts. Ulloa Construction CSLB #1144906. Call (714) 487-1860.",
    schemaDescription:
      "Professional kitchen remodeling in Anaheim and Orange County, CA, including cabinet installation, countertop replacement, open-concept conversions, and full kitchen renovations.",
    faqs: [
      {
        q: "How much does a kitchen remodel cost in Orange County?",
        a: "Kitchen remodel costs in Orange County typically range from $15,000 to $80,000 depending on scope. A cosmetic refresh with new cabinet doors, countertops, and hardware runs $15,000 to $25,000. A mid-range full remodel with new cabinetry, quartz countertops, and updated appliances runs $30,000 to $60,000. A high-end custom kitchen with premium materials can exceed $80,000. Ulloa Construction provides free written estimates with itemized line items so you know exactly where your money is going.",
      },
      {
        q: "How long does a kitchen remodel take in Anaheim?",
        a: "Most kitchen remodels in Anaheim and Orange County take 4 to 10 weeks from demo to final walkthrough, depending on scope. Projects involving layout changes, permit processing, or custom cabinet orders take longer. We provide a detailed project schedule before work begins so you can plan for the disruption.",
      },
      {
        q: "Do I need permits for a kitchen remodel in Orange County?",
        a: "Yes, most kitchen remodels in Anaheim and throughout Orange County require permits if the work involves electrical, plumbing, or structural changes. This includes adding circuits for new appliances, moving a sink, or removing a wall. Permit fees typically run $500 to $2,000 in most OC cities. Ulloa Construction pulls all required permits and schedules all inspections, so you don't have to deal with the building department.",
      },
      {
        q: "Can you do an open-concept kitchen conversion in my Orange County home?",
        a: "Yes, we handle open-concept conversions throughout Orange County, including load-bearing wall removal with engineered beam installation. These projects require a permit and structural engineering review, which we coordinate as part of the project scope. Many of the kitchen remodels we complete in Anaheim, Fullerton, and Irvine involve some level of wall removal to create better flow.",
      },
      {
        q: "What countertop materials do you install for Orange County kitchens?",
        a: "We install quartz, granite, marble, quartzite, butcher block, and porcelain slab countertops. Quartz is by far the most popular choice in Orange County because it is durable, low-maintenance, and available in a wide range of styles. We work with local fabricators and can help you select a material based on your budget, lifestyle, and design goals.",
      },
      {
        q: "How do I verify a contractor license before hiring for a kitchen remodel?",
        a: "Go to cslb.ca.gov and enter the license number. You will see whether the license is active, what classifications it holds, and whether there are any disciplinary actions on file. Ulloa Construction holds CSLB License #1144906, which you can verify right now. Any contractor performing work over $500 in California is legally required to hold a valid CSLB license.",
      },
    ],
  },
  {
    slug: "bathroom-remodeling",
    name: "Bathroom Remodeling",
    heroImage: "/images/gallery-3.jpg",
    beforeImage: "/images/5185400809350868211.jpeg",
    afterImage: "/images/431122808612452824.jpeg",
    intro:
      "A bathroom remodel is one of the highest-return investments an Orange County homeowner can make, and one of the easiest to get wrong without the right contractor. Ulloa Construction handles bathroom remodels throughout Anaheim, Irvine, Fullerton, and the greater OC area, from secondary bath updates with new tile and vanities to full master bathroom overhauls with custom walk-in showers and heated floors. We take care of waterproofing, ventilation, tile layout, plumbing, and electrical coordination so you have one licensed contractor from demo to final inspection. Our work meets Orange County seismic and moisture codes and is fully insured under CSLB License #1144906.",
    included: [
      "Full demo and subfloor waterproofing with RedGard or Schluter membrane",
      "Custom walk-in shower design, curb-less entry, and niche construction",
      "Large-format porcelain, natural stone, and mosaic tile installation",
      "Floating and freestanding vanity selection and installation",
      "Freestanding soaking tub and deck-mount fixture installation",
      "Heated floor system installation (Schluter or equivalent)",
      "Exhaust fan, lighting design, and ventilation upgrade",
      "Frameless glass shower door and hardware installation",
    ],
    relatedSlugs: ["kitchen-remodeling", "flooring", "interior-remodeling"],
    metaDescription:
      "Bathroom remodeling contractor in Anaheim and Orange County, CA. Walk-in showers, custom tile, heated floors, full gut remodels. Ulloa Construction CSLB #1144906. Call (714) 487-1860.",
    schemaDescription:
      "Professional bathroom remodeling in Anaheim and Orange County, CA, including walk-in showers, custom tile, vanities, heated floors, and full gut remodels.",
    faqs: [
      {
        q: "How much does a bathroom remodel cost in Anaheim and Orange County?",
        a: "Bathroom remodels in Orange County range widely based on scope. A cosmetic update with a new vanity, fixtures, and paint can run $5,000 to $12,000. A full remodel with new tile, a custom shower, and updated fixtures typically runs $18,000 to $35,000. A master bathroom overhaul with a walk-in shower, soaking tub, and heated floors can run $35,000 to $65,000 or more. Ulloa Construction provides free, no-obligation written estimates so you know the full cost before committing.",
      },
      {
        q: "How long does a bathroom remodel take?",
        a: "A standard bathroom remodel in Orange County takes 2 to 4 weeks from demo to final inspection. Master bathrooms with custom tile work and specialty fixtures can take 4 to 8 weeks. Lead times on custom vanities or imported tile can affect the schedule, so we discuss material selection during the estimate to avoid delays.",
      },
      {
        q: "Do I need a permit for a bathroom remodel in Anaheim or Orange County?",
        a: "Most full bathroom remodels require permits in Anaheim and throughout Orange County if the work involves plumbing relocation, electrical upgrades (like adding circuits or GFCI outlets), or structural changes. Purely cosmetic work, such as replacing a vanity in the same location or retiling without moving the drain, typically does not require permits. We evaluate permit requirements during the estimate and handle all permit applications on your behalf.",
      },
      {
        q: "Can you convert my tub into a walk-in shower?",
        a: "Yes, tub-to-shower conversions are one of our most common bathroom remodel requests in Orange County. We handle the full scope: removing the tub, reconfiguring the drain, applying a multi-layer waterproofing system, building the shower pan, and tiling walls and floor. This type of work requires a plumbing permit in most OC cities, which we pull for you.",
      },
      {
        q: "How do you handle waterproofing in shower areas?",
        a: "We use a multi-layer waterproofing system that includes RedGard membrane or Schluter KERDI systems over cement board substrates. Every shower we build is waterproofed at the pan, walls, and niches before any tile goes on. Proper waterproofing is the most important part of a long-lasting shower, and it is where shortcuts by other contractors cause failures in Orange County's older housing stock.",
      },
      {
        q: "What tile options work best for Orange County bathrooms?",
        a: "Large-format porcelain tile (12x24 or 24x24) remains the most popular choice for Orange County bathroom floors and walls because it is durable, easy to clean, and gives a modern look with fewer grout lines. Natural stone like travertine and marble adds warmth but requires more maintenance. Glass mosaic tiles work well for niches and accent strips. We help you select tile based on your aesthetic goals, maintenance preferences, and budget.",
      },
    ],
  },
  {
    slug: "bathroom-renovation",
    name: "Bathroom Renovation",
    heroImage: "/images/gallery-3.jpg",
    beforeImage: "/images/5185400809350868211.jpeg",
    afterImage: "/images/431122808612452824.jpeg",
    intro:
      "A well-done bathroom renovation adds lasting comfort and real value to your Orange County home. Ulloa Construction handles bathroom remodels throughout Anaheim, Irvine, and the greater OC area, from master suite overhauls with custom walk-in showers to secondary bath updates with new vanities and tile. We take care of waterproofing, ventilation, tile layout, and all plumbing coordination so you have one licensed contractor from demo to final inspection. Our work meets Orange County seismic and moisture codes, and is fully insured under CSLB #1144906.",
    included: [
      "Full demo and subfloor waterproofing with RedGard membrane",
      "Custom walk-in shower design, curb-less entry, and niche construction",
      "Large-format porcelain, natural stone, and mosaic tile installation",
      "Floating and freestanding vanity selection and installation",
      "Freestanding soaking tub and deck-mount fixture installation",
      "Heated floor system installation (Schluter or equivalent)",
      "Exhaust fan, lighting design, and ventilation upgrade",
      "Frameless glass shower door and hardware installation",
    ],
    relatedSlugs: ["kitchen-remodeling", "flooring", "interior-remodeling"],
    metaDescription:
      "Spa-quality bathroom renovation in Anaheim and Orange County, CA. Walk-in showers, custom tile, heated floors. Ulloa Construction CSLB #1144906. Call (714) 487-1860.",
    schemaDescription:
      "Professional bathroom renovation services in Anaheim and Orange County, CA, including walk-in showers, custom tile, vanities, heated floors, and full gut remodels.",
  },
  {
    slug: "flooring",
    name: "Flooring Installation",
    heroImage: "/images/gallery-8.jpg",
    beforeImage: "/images/gallery-5.jpg",
    afterImage: "/images/gallery-8.jpg",
    intro:
      "New flooring is one of the fastest ways to change the feel of an Orange County home. It is also one of the easiest to get wrong without the right installer. Ulloa Construction installs hardwood, luxury vinyl plank, tile, and carpet throughout Anaheim and surrounding communities with precise subfloor prep, leveling, and finish work. We recommend materials that hold up in Southern California's climate without warping or discoloring, and we handle furniture moving, transitions, and baseboards so the job is truly turnkey. All flooring installations come with a written warranty and are completed by our CSLB-licensed crew.",
    included: [
      "Subfloor inspection, leveling, and moisture barrier installation",
      "Engineered hardwood and solid hardwood installation",
      "Luxury vinyl plank (LVP) installation: glue-down and floating",
      "Porcelain, ceramic, and natural stone tile installation",
      "Carpet installation with premium pad selection",
      "Baseboard removal, reinstallation, and caulking",
      "Transition strip installation between flooring types",
      "Furniture moving coordination and post-install cleanup",
    ],
    relatedSlugs: ["interior-remodeling", "kitchen-remodeling", "bathroom-remodeling"],
    metaDescription:
      "Professional flooring installation in Anaheim and Orange County, CA. Hardwood, LVP, tile, carpet. Ulloa Construction CSLB #1144906. Call (714) 487-1860.",
    schemaDescription:
      "Expert flooring installation services in Anaheim and Orange County, CA: hardwood, luxury vinyl plank, tile, and carpet with full subfloor prep and baseboard work.",
  },
  {
    slug: "roofing",
    name: "Roofing",
    heroImage: "/images/hero.jpg",
    beforeImage: "/images/gallery-5.jpg",
    afterImage: "/images/hero.jpg",
    intro:
      "A failing roof in Orange County can go from a minor leak to significant structural damage within one rainy season. Ulloa Construction provides full residential roofing services across Anaheim and the greater OC area, from complete tear-offs and re-roofing to targeted repair and attic ventilation upgrades. We work with asphalt shingles, flat roof systems, and concrete tile, and every project includes a thorough inspection, photographic documentation, and a written estimate before any material is ordered. Our roofing crews are licensed under CSLB #1144906 and carry full workers' comp and general liability insurance.",
    included: [
      "Full roof tear-off and underlayment replacement",
      "Asphalt shingle installation (Class A fire rated)",
      "Concrete tile and flat roof membrane systems",
      "Ridge cap and hip cap installation",
      "Flashing replacement at chimneys, walls, and valleys",
      "Drip edge and gutter apron installation",
      "Attic ventilation inspection and upgrade",
      "Fascia board and soffit repair and replacement",
    ],
    relatedSlugs: ["siding", "painting", "new-construction"],
    metaDescription:
      "Licensed roofing contractor in Anaheim and Orange County, CA. Full re-roofing, repairs, and ventilation. Ulloa Construction CSLB #1144906. Call (714) 487-1860.",
    schemaDescription:
      "Residential roofing services in Anaheim and Orange County, CA, including tear-off, re-roofing, shingle and tile installation, flashing, and attic ventilation.",
  },
  {
    slug: "painting",
    name: "Interior & Exterior Painting",
    heroImage: "/images/gallery-6.jpg",
    beforeImage: "/images/gallery-9.jpg",
    afterImage: "/images/gallery-6.jpg",
    intro:
      "A professional paint job in Anaheim or Orange County does more than change color. It refreshes surfaces, protects against moisture, and elevates the entire look of a home. Ulloa Construction provides interior and exterior painting services using premium materials from Sherwin-Williams and Benjamin Moore, with meticulous surface prep that ensures clean lines and long-lasting adhesion. We protect your furniture and floors, mask all trim and fixtures, and apply the right primer for each substrate. Our crews are licensed, insured under CSLB #1144906, and work with minimal disruption to your daily routine.",
    included: [
      "Color consultation and paint selection assistance",
      "Full surface prep: sanding, patching, skim coat where needed",
      "Primer application on bare and repaired surfaces",
      "Interior walls, ceilings, and accent wall painting",
      "Trim, crown molding, baseboards, and door painting",
      "Exterior siding, stucco, fascia, and soffit painting",
      "Garage door and fence painting and staining",
      "Post-project cleanup and furniture relocation",
    ],
    relatedSlugs: ["drywall", "interior-remodeling", "siding"],
    metaDescription:
      "Professional interior and exterior painting in Anaheim and Orange County, CA. Sherwin-Williams and Benjamin Moore. Ulloa Construction CSLB #1144906. Call (714) 487-1860.",
    schemaDescription:
      "Interior and exterior painting services in Anaheim and Orange County, CA, including surface prep, priming, wall painting, trim work, and exterior stucco and siding painting.",
  },
  {
    slug: "drywall",
    name: "Drywall Installation & Repair",
    heroImage: "/images/gallery-5.jpg",
    beforeImage: "/images/gallery-9.jpg",
    afterImage: "/images/gallery-5.jpg",
    intro:
      "Whether you're framing out a new room addition in Anaheim, repairing water damage from a leaking roof, or smoothing out popcorn ceilings in an older Orange County home, Ulloa Construction delivers clean, paint-ready drywall every time. Our crews are experienced in standard drywall, moisture-resistant greenboard, fire-rated Type X, and soundproofing assemblies. We match existing textures so repairs are invisible. We work alongside our other trades on larger projects, and all our drywall work is licensed under CSLB #1144906 with clean, low-dust practices.",
    included: [
      "New drywall framing, hanging, and taping on additions and remodels",
      "Moisture-resistant (greenboard) and fire-rated (Type X) installation",
      "Screw and nail pop repair on existing walls and ceilings",
      "Water damage patch and full sheet replacement",
      "Popcorn ceiling removal and smooth finish application",
      "Texture matching: orange peel, knock-down, skip-trowel, smooth",
      "Corner bead installation and metal trim work",
      "Sound-dampening assemblies for home theaters and offices",
    ],
    relatedSlugs: ["painting", "interior-remodeling", "room-additions"],
    metaDescription:
      "Expert drywall installation and repair in Anaheim and Orange County, CA. Texture matching, water damage, new construction. Ulloa Construction CSLB #1144906. Call (714) 487-1860.",
    schemaDescription:
      "Drywall installation, repair, and texture services in Anaheim and Orange County, CA, including new construction drywall, water damage repair, popcorn removal, and texture matching.",
  },
  {
    slug: "window-installation",
    name: "Window Installation",
    heroImage: "/images/hero.jpg",
    beforeImage: "/images/gallery-9.jpg",
    afterImage: "/images/hero.jpg",
    intro:
      "New windows are one of the highest-impact upgrades for energy efficiency and curb appeal in an Anaheim or Orange County home. Ulloa Construction installs energy-efficient vinyl, fiberglass, and aluminum-clad windows from trusted manufacturers, with proper flashing, insulation, and sealing to meet California Title 24 energy standards. We handle permit coordination with your local building department, precision measurement, and finish work on both the interior and exterior, giving you a watertight installation that looks completely finished. Our window crews operate under CSLB #1144906 with full insurance coverage.",
    included: [
      "Full window measurement, ordering, and permit coordination",
      "Removal of existing windows with frame inspection",
      "Proper weatherproofing membrane and flashing installation",
      "Vinyl, fiberglass, and aluminum-clad window installation",
      "Energy-efficient dual-pane and triple-pane glass options",
      "Interior and exterior trim, casing, and sill installation",
      "Stucco and siding patch around new window frames",
      "Interior paint touchup and cleanup",
    ],
    relatedSlugs: ["door-installation", "siding", "painting"],
    metaDescription:
      "Professional window installation in Anaheim and Orange County, CA. Energy-efficient dual-pane windows, Title 24 compliant. Ulloa Construction CSLB #1144906. Call (714) 487-1860.",
    schemaDescription:
      "Window installation services in Anaheim and Orange County, CA, including energy-efficient replacement windows, new construction windows, flashing, and interior/exterior trim work.",
  },
  {
    slug: "door-installation",
    name: "Door Installation",
    heroImage: "/images/hero.jpg",
    beforeImage: "/images/gallery-9.jpg",
    afterImage: "/images/hero.jpg",
    intro:
      "A new front door in Orange County is both a security upgrade and an immediate curb appeal improvement. Interior door upgrades make a home feel genuinely more modern and well-built. Ulloa Construction installs all door types across Anaheim and OC, from solid-core interior doors with new hardware to pre-hung fiberglass and steel entry systems with multi-point locking. We handle rough opening modification, shimming, weatherstripping, casing, and hardware installation so the job is completely finished. All installations are performed by our CSLB #1144906-licensed crew with attention to plumb, level, and smooth operation.",
    included: [
      "Entry door installation: fiberglass, steel, and wood",
      "Interior door installation: solid-core, hollow-core, barn doors",
      "French door and sliding glass door installation",
      "Rough opening modification for new or widened door frames",
      "Pre-hung and slab door installation with shimming and leveling",
      "Weatherstripping, threshold, and door sweep installation",
      "Deadbolt, handleset, and smart lock installation",
      "Interior and exterior casing, trim, and paint touchup",
    ],
    relatedSlugs: ["window-installation", "interior-remodeling", "painting"],
    metaDescription:
      "Door installation in Anaheim and Orange County, CA. Entry doors, interior doors, French doors, sliding doors. Ulloa Construction CSLB #1144906. Call (714) 487-1860.",
    schemaDescription:
      "Door installation services in Anaheim and Orange County, CA, including entry doors, interior doors, French doors, sliding glass doors, and hardware installation.",
  },
  {
    slug: "siding",
    name: "Siding Installation & Replacement",
    heroImage: "/images/hero.jpg",
    beforeImage: "/images/gallery-9.jpg",
    afterImage: "/images/hero.jpg",
    intro:
      "Your home's exterior siding is its first line of defense against Southern California's sun, marine layer, and occasional heavy rain. It also defines your home's curb appeal on every drive-by. Ulloa Construction installs James Hardie fiber cement siding, vinyl, stucco, and wood lap siding throughout Anaheim and Orange County, with proper moisture barrier installation, trim integration, and factory-match or custom paint finishing. We inspect and repair the underlying sheathing and studs before any new siding goes on, ensuring you're not just covering up existing problems. Our siding work is licensed under CSLB #1144906 and backed by manufacturer warranties.",
    included: [
      "Full siding tear-off and sheathing inspection",
      "Moisture barrier and housewrap installation (Tyvek or equivalent)",
      "James Hardie fiber cement siding installation",
      "Vinyl siding installation and J-channel trim",
      "Stucco application: traditional three-coat and synthetic",
      "Wood lap siding and trim installation",
      "Corner trim, window trim, and soffit integration",
      "Primer and paint application or factory-primed finish coordination",
    ],
    relatedSlugs: ["painting", "roofing", "window-installation"],
    metaDescription:
      "Siding installation in Anaheim and Orange County, CA. James Hardie, vinyl, stucco, wood lap. Ulloa Construction CSLB #1144906. Call (714) 487-1860.",
    schemaDescription:
      "Siding installation and replacement in Anaheim and Orange County, CA, including James Hardie fiber cement, vinyl, stucco, and wood lap siding with moisture barrier installation.",
  },
  {
    slug: "room-additions",
    name: "Room Additions & ADUs",
    heroImage: "/images/gallery-10.jpg",
    beforeImage: "/images/gallery-5.jpg",
    afterImage: "/images/gallery-10.jpg",
    intro:
      "Adding square footage to your Anaheim or Orange County property is one of the best investments you can make. It is also one of the most complex projects to get right without the right contractor. Ulloa Construction manages the full scope of room additions and ADU construction: architectural planning, permit acquisition from your local building department, foundation work, framing, MEP rough-in, drywall, and complete finish work. We design additions that match your existing home's roofline, exterior, and interior flow. Our team holds CSLB License #1144906 and has deep experience with Orange County's seismic requirements and ADU permitting process.",
    included: [
      "Site assessment, design consultation, and architectural planning support",
      "Permit acquisition with city building department",
      "Foundation design and concrete work (slab, stem wall, or raised)",
      "Framing, sheathing, and roofline tie-in to existing structure",
      "Electrical, plumbing, and HVAC rough-in and finish",
      "Insulation, drywall, texture, and paint",
      "Flooring, trim, doors, and windows to match or complement existing",
      "ADU kitchen and bathroom construction (full build-out)",
    ],
    relatedSlugs: ["adu-construction", "kitchen-remodeling", "bathroom-remodeling"],
    metaDescription:
      "Room additions and ADU construction in Anaheim and Orange County, CA. Full-service from permits to finish. Ulloa Construction CSLB #1144906. Call (714) 487-1860.",
    schemaDescription:
      "Room addition and ADU construction in Anaheim and Orange County, CA, including architectural planning, permitting, foundation, framing, and complete finish work for home additions and accessory dwelling units.",
    faqs: [
      {
        q: "How much does a room addition cost in Orange County?",
        a: "Room additions in Orange County typically cost $200 to $400 per square foot, fully built out. A 300 to 400 square foot master suite addition might run $80,000 to $160,000. A simpler 200 square foot family room addition could come in at $50,000 to $80,000. Costs vary based on foundation type, existing roofline complexity, interior finish level, and required utility upgrades. Ulloa Construction provides free, detailed estimates for all room addition projects in Anaheim and OC.",
      },
      {
        q: "How long does a room addition take from start to finish?",
        a: "A room addition project in Anaheim or Orange County typically takes 4 to 9 months from initial design through final inspection. Planning and permit processing takes 1 to 3 months, and construction takes 2 to 6 months depending on scope. We provide a detailed project schedule before starting so you can plan accordingly.",
      },
      {
        q: "Do you handle all the permits for room additions in Orange County?",
        a: "Yes. Permits are required for all room additions in Orange County cities, and we handle the entire permitting process. This includes preparing permit applications, submitting plans to the city building department, coordinating any required structural or architectural review, and scheduling all city inspections from foundation through final.",
      },
      {
        q: "Can a room addition match the existing style of my Anaheim home?",
        a: "Matching the existing architecture is a core part of how we design and build every room addition. We tie into your existing roofline, match exterior stucco or siding, and replicate interior trim details so the addition feels like it was always part of the original home. We will never leave you with a boxy add-on that looks tacked on.",
      },
      {
        q: "What is the difference between a room addition and an ADU?",
        a: "A room addition is attached square footage that becomes part of your primary living area. An ADU (Accessory Dwelling Unit) is a self-contained living unit on the same property as your primary home, with its own entrance, kitchen, and bathroom. ADUs can be detached (like a backyard cottage), attached (an addition with a separate entrance), or converted from existing space like a garage. We build both room additions and ADUs throughout Orange County.",
      },
      {
        q: "Can you add a room addition in an HOA community in Orange County?",
        a: "Yes, we regularly work in HOA communities throughout Orange County. HOA-governed properties typically require design review board approval before permitting. We prepare complete HOA submittal packages and manage the approval process on your behalf so you don't have to navigate the HOA process yourself.",
      },
    ],
  },
  {
    slug: "adu-construction",
    name: "ADU Construction",
    heroImage: "/images/gallery-10.jpg",
    beforeImage: "/images/gallery-5.jpg",
    afterImage: "/images/gallery-10.jpg",
    intro:
      "ADU construction in Orange County has become one of the smartest investments a homeowner can make. An Accessory Dwelling Unit adds living space, rental income potential, and long-term property value, all without the cost and disruption of moving. Ulloa Construction builds detached ADUs, attached ADUs, and garage conversion ADUs throughout Anaheim, Irvine, Fullerton, and the greater Orange County area. We handle the full scope: architectural planning support, permit acquisition from your city's building department, foundation work, framing, utility connections, and complete interior finish. Every ADU we build is licensed under CSLB #1144906 with full general liability and workers' compensation insurance.",
    included: [
      "Site evaluation, design consultation, and architectural planning support",
      "Permit acquisition with city building department and utility providers",
      "Foundation design and construction: slab-on-grade, raised, or stem wall",
      "Framing, roofing, and exterior envelope construction",
      "Electrical, plumbing, and HVAC rough-in and finish",
      "Full kitchen and bathroom construction and build-out",
      "Insulation, drywall, paint, flooring, and interior finish",
      "Garage conversion ADU: insulation, electrical, plumbing, and living space conversion",
    ],
    relatedSlugs: ["room-additions", "kitchen-remodeling", "bathroom-remodeling"],
    metaDescription:
      "ADU construction contractor in Anaheim and Orange County, CA. Detached ADUs, garage conversions, attached ADUs. Full permit handling. Ulloa Construction CSLB #1144906. Call (714) 487-1860.",
    schemaDescription:
      "ADU construction services in Anaheim and Orange County, CA, including detached ADUs, attached ADUs, and garage conversions with full permit handling and complete interior finish.",
    faqs: [
      {
        q: "Can I build an ADU on my Orange County property?",
        a: "Most single-family properties in Orange County can accommodate at least one ADU under current California law. In addition to a standard ADU (up to 1,200 square feet for a detached unit), you may also be eligible to add a Junior ADU (JADU) up to 500 square feet converted from existing interior space. We evaluate your property, lot size, setbacks, and city-specific requirements during a free initial consultation to tell you exactly what you can build.",
      },
      {
        q: "How much does an ADU cost in Orange County?",
        a: "ADU construction in Orange County typically costs $120,000 to $350,000 depending on type and size. A garage conversion ADU (converting an existing garage into a living unit) generally runs $100,000 to $180,000. A new detached ADU built from the ground up typically runs $175,000 to $300,000. High-end custom ADUs in cities like Irvine, Newport Beach, or Yorba Linda can run higher. Ulloa Construction provides free, detailed written estimates for every ADU project.",
      },
      {
        q: "How long does it take to build an ADU in Orange County?",
        a: "From the start of design through final inspection, most ADU projects in Orange County take 6 to 12 months. The permitting phase alone can take 2 to 4 months depending on city plan check workload. Construction on a detached ADU typically takes 3 to 5 months after permits are approved. Garage conversions are generally faster, often completing in 3 to 4 months total.",
      },
      {
        q: "What are the setback and size rules for ADUs in Orange County?",
        a: "Under California law, detached ADUs can be up to 1,200 square feet (or up to 50% of the primary dwelling's square footage, whichever is greater in some jurisdictions). Setback requirements are generally 4 feet from the rear and side property lines for new detached ADUs. Junior ADUs (converted from existing interior space) can be up to 500 square feet with no minimum setback. Requirements vary by city, and we review your specific lot and applicable city rules during the planning phase.",
      },
      {
        q: "Can I rent out my ADU in Orange County?",
        a: "Yes, ADUs are legal to rent throughout Orange County and California. Long-term rentals (30 days or more) are generally permitted without restriction. Short-term rentals (Airbnb or VRBO style) may be subject to local ordinances depending on your city. A one-bedroom ADU in Anaheim currently rents for approximately $1,600 to $2,200 per month, and in coastal cities like Irvine or Newport Beach, rates are typically higher.",
      },
      {
        q: "Do you handle the ADU permit process in Anaheim and other OC cities?",
        a: "Yes, we handle the full ADU permit process in Anaheim, Irvine, Fullerton, Orange, and cities throughout Orange County. This includes coordinating with architectural designers on plan sets, submitting applications to your city's building department, managing plan check comments and revisions, and scheduling all required inspections from foundation through final. We know the ADU permit process in Orange County's major cities and use that knowledge to keep your project moving.",
      },
    ],
  },
  {
    slug: "new-construction",
    name: "New Home Construction",
    heroImage: "/images/hero.jpg",
    beforeImage: "/images/gallery-5.jpg",
    afterImage: "/images/hero.jpg",
    intro:
      "Building a new custom home in Orange County requires a general contractor who understands both the design process and the permitting complexity of cities like Anaheim, Irvine, and Fullerton. Ulloa Construction offers design-build services for new residential construction, from architectural planning and soils reports through to final certificate of occupancy. We self-perform the key trades and manage all subcontractors so the schedule stays on track and quality is consistent from slab to roof ridge. Our new construction work is licensed under CSLB #1144906 and built to California's latest seismic and energy codes.",
    included: [
      "Architectural design coordination and civil engineering referrals",
      "Soils report, grading plan, and site preparation",
      "Permit acquisition with city and county building departments",
      "Foundation: slab-on-grade, raised foundation, or basement",
      "Framing, sheathing, roofing, and exterior envelope",
      "Electrical, plumbing, and HVAC installation",
      "Insulation, drywall, interior finish work, and custom millwork",
      "Landscaping coordination and final punch-list walkthrough",
    ],
    relatedSlugs: ["room-additions", "roofing", "flooring"],
    metaDescription:
      "New home construction in Anaheim and Orange County, CA. Design-build from permits to final walkthrough. Ulloa Construction CSLB #1144906. Call (714) 487-1860.",
    schemaDescription:
      "New residential construction in Anaheim and Orange County, CA: design-build services from architectural planning and permitting through framing, MEP, and complete interior and exterior finish.",
  },
  {
    slug: "interior-remodeling",
    name: "Interior Remodeling",
    heroImage: "/images/gallery-7.jpg",
    beforeImage: "/images/gallery-9.jpg",
    afterImage: "/images/gallery-7.jpg",
    intro:
      "Sometimes a home needs more than one updated room. It needs an interior overhaul that makes every space feel intentional and connected. Ulloa Construction delivers whole-home interior remodels across Anaheim and Orange County, coordinating flooring, trim, doors, paint, lighting, and structural changes as a single project under one licensed contractor. We sequence trades efficiently to minimize disruption, communicate daily on progress, and provide a detailed project schedule before work begins. Every interior remodel is completed under CSLB License #1144906 with full workers' comp and liability insurance.",
    included: [
      "Open-concept conversion: load-bearing wall removal with engineered beam",
      "Whole-home flooring installation and transitions",
      "Interior door replacement: solid-core with new hardware throughout",
      "Baseboard, crown molding, and door casing installation",
      "Recessed lighting, switches, and electrical panel coordination",
      "Interior paint: walls, ceilings, trim, and accent walls",
      "Built-in shelving, entertainment centers, and custom millwork",
      "Closet system design and installation",
    ],
    crossLink: {
      before:
        "An interior remodel is the ideal time to modernize how your home works, not just how it looks. With the walls already open, it costs far less to wire for ",
      href: "/services/smart-home-upgrades",
      label: "smart lighting and home automation",
      after:
        " than it does to retrofit later. We can add smart dimmers, scene control, and a whole-home system as part of the same project.",
    },
    relatedSlugs: ["flooring", "kitchen-remodeling", "painting"],
    metaDescription:
      "Whole-home interior remodeling in Anaheim and Orange County, CA. Open-concept conversions, flooring, trim, lighting. Ulloa Construction CSLB #1144906. Call (714) 487-1860.",
    schemaDescription:
      "Interior remodeling services in Anaheim and Orange County, CA, including open-concept conversions, whole-home flooring, trim, doors, lighting, and paint as a single coordinated project.",
    faqs: [
      {
        q: "What does a whole-home interior remodel typically include?",
        a: "A whole-home interior remodel with Ulloa Construction typically includes new flooring throughout the home, interior door replacement, baseboard and crown molding installation, paint on all walls and ceilings, updated lighting and electrical, and any structural work like load-bearing wall removal for open-concept conversions. We handle all trades under one contract so you deal with a single point of contact throughout the project.",
      },
      {
        q: "How much does a whole-home interior remodel cost in Orange County?",
        a: "Interior remodels in Orange County vary widely based on home size and scope. A 1,500 square foot home with new flooring, paint, doors, and lighting typically runs $40,000 to $80,000. Adding structural work (load-bearing wall removal), a kitchen refresh, or custom built-ins pushes costs higher. We provide detailed written estimates with allowances so you know exactly what is included before work begins.",
      },
      {
        q: "How long does an interior remodel take in Anaheim or Orange County?",
        a: "A full-home interior remodel typically takes 6 to 14 weeks depending on the size of the home and the scope of work. We sequence trades efficiently to minimize the time your home is under construction. Structural work, custom millwork orders, and permit processing can extend the timeline. We provide a detailed project schedule before work begins.",
      },
      {
        q: "Can you remove a load-bearing wall during an interior remodel?",
        a: "Yes. Load-bearing wall removal for open-concept conversions is part of many interior remodels in Orange County. This work requires a permit and structural engineering review to specify the correct beam size, post sizes, and connection hardware. We coordinate the engineering and permit process as part of the overall project, and we have done this type of work in Anaheim homes of all eras, from 1950s ranchers to 1980s tract homes.",
      },
      {
        q: "Do interior remodeling projects require permits in Anaheim and OC?",
        a: "Electrical work, plumbing changes, structural modifications like wall removal, and some mechanical work require permits in Anaheim and throughout Orange County. Purely cosmetic work like flooring, paint, and hardware replacement typically does not require permits. We identify all permit requirements during the estimate phase and handle the full permit process for you.",
      },
      {
        q: "Can you remodel one room at a time, or does it have to be the whole house?",
        a: "We work at whatever scale makes sense for your budget and goals. Some clients start with a kitchen remodel and come back for bathrooms and flooring the following year. Others prefer a phased whole-home approach under one contract. We are flexible and will help you sequence the work in a way that makes the most sense financially and for your family's daily life.",
      },
    ],
  },
  {
    slug: "smart-home-upgrades",
    name: "Smart Home Upgrades",
    heroImage: "/images/gallery-7.jpg",
    beforeImage: "/images/gallery-9.jpg",
    afterImage: "/images/gallery-7.jpg",
    titleTag:
      "Smart Home Upgrades | Orange County Licensed Contractor | Ulloa Construction",
    h1: "Smart Home Upgrades in Orange County",
    intro:
      "A smart home used to mean a few voice speakers and a video doorbell. Today it means lighting, climate, security, and entertainment that all work together as one system, installed cleanly and wired to code. Ulloa Construction installs smart lighting, smart thermostats, security cameras, and whole-home automation for homeowners throughout Anaheim, Irvine, Fullerton, and the greater Orange County area. We handle the electrical side the right way, pull permits when the work requires them, and make the finished install look built-in rather than bolted on. Every project is backed by CSLB License #1144906 and full liability insurance.",
    crossLink: {
      before:
        "Already planning a remodel? The best time to add smart lighting and automation is while the walls are open. See how this fits into a full ",
      href: "/services/interior-remodeling",
      label: "interior remodeling project",
      after: ".",
    },
    body: `
<h2>Smart Lighting</h2>
<p>Smart lighting is the upgrade our Orange County clients notice every single day, and it is usually the best place to start. We install Lutron Caseta for rock-solid reliability, Philips Hue when you want color and scene control, and Kasa when the budget is tight but you still want the basics done well. The goal is switches and dimmers on the wall that stay smart even when someone flips them, not just bulbs that go dumb the moment the switch is off.</p>
<p>In many older Anaheim homes the switch box has no neutral wire, which is exactly where a licensed install matters. We add the wiring the smart dimmers need, set up scenes room by room, and leave you with lighting you actually control from the wall, your phone, or your voice.</p>
<p>We also handle the outdoor side, from smart landscape and pathway lighting to automated porch and security lights on a schedule. Those exterior circuits almost always need proper weatherproof wiring, which is another spot where doing it to code up front saves you headaches down the road.</p>

<h2>Smart Thermostats</h2>
<p>We install Nest and Ecobee thermostats and match the choice to your HVAC system and your home. Ecobee tends to work better with older Orange County systems and adds remote room sensors for homes where one room is always warmer than the rest. Nest keeps things simple and clean. In our climate the real savings come from smarter cooling, keeping the AC from running in an empty house and pre-cooling before peak electricity rates hit. When an older furnace is missing the C-wire a smart thermostat needs, we add it so the install is done properly, not patched together.</p>

<h2>Security Cameras and Video Doorbells</h2>
<p>Ring, Nest, and Arlo all make solid cameras and doorbells, and we install both wireless and hardwired setups. Wireless battery cameras are quick, but for serious, always-on coverage a wired install with proper power and mounting wins every time. We handle the doorbell transformer, the wiring, and clean cable runs so nothing is taped to your stucco. Placement is where experience pays off: coverage at the front door and driveway, the back yard or slider, and any side gate, mounted to actually identify a face rather than the top of someone's head.</p>

<h2>Whole-Home Automation</h2>
<p>Whole-home automation ties your lights, thermostat, cameras, locks, and speakers into a single system instead of five separate apps. We build around one ecosystem, whether that is Lutron, Apple Home, or Samsung SmartThings, so everything talks to everything. From there you get scenes: a single tap or voice command that turns off every light, locks the doors, and arms the cameras as you leave, or wakes the house up in the morning. We can fold in smart locks and garage door control too, so that same "Leaving" scene handles the front door and the garage in one step. We plan it as one system from the start, which is what keeps it simple to live with for years.</p>

<h2>Who This Is For</h2>
<p>This is built for Orange County homeowners who are already doing a remodel or renovation and want to modernize while the walls are open. That is the single smartest time to wire for smart home features. Running low-voltage and line-voltage wiring, adding neutral wires, and setting up hardwired cameras and switches costs a fraction of what a retrofit costs once the drywall is back up. If you are updating a kitchen, opening a wall, or reworking your interior, adding smart lighting and automation to the same project means one crew, one permit, and one finished result instead of tearing back into a wall you just closed.</p>

<h2>What Sets a Licensed Install Apart From DIY</h2>
<p>Plenty of smart home gear is genuinely DIY-friendly, and we will tell you honestly when you do not need us. Screw in a smart bulb, plug in a smart plug, or mount a battery camera yourself and save the money. But the moment a project involves opening a wall, adding a circuit, dealing with a missing neutral, adding a doorbell transformer, or touching your panel, that is licensed electrical work. We pull the permits, the work is inspected and code-compliant, and it is all insured under CSLB License #1144906. That protects you if anything ever goes wrong and keeps your home clean when a buyer's inspector starts asking questions at resale. Bad electrical work is a fire risk, and it is not the place to cut corners.</p>
`,
    included: [
      "Smart dimmer and switch installation (Lutron, Kasa, Philips Hue)",
      "Neutral wire and switch-box wiring for retrofit smart lighting",
      "Smart thermostat installation and C-wire upgrades (Nest, Ecobee)",
      "Hardwired and wireless security camera installation and mounting",
      "Video doorbell wiring and transformer installation (Ring, Nest, Arlo)",
      "Whole-home automation hub setup and scene programming",
      "Voice control integration with Alexa, Google Home, and Siri",
      "Low-voltage and line-voltage wiring during remodels, permitted to code",
    ],
    relatedSlugs: ["interior-remodeling", "kitchen-remodeling", "new-construction"],
    metaDescription:
      "Smart lighting, thermostats, cameras, and home automation installed by a licensed OC contractor. CSLB #1144906. Serving Anaheim and all of Orange County.",
    schemaDescription:
      "Smart home upgrade installation in Anaheim and Orange County, CA, including smart lighting, smart thermostats, security cameras, video doorbells, and whole-home automation by a licensed contractor.",
    faqs: [
      {
        q: "Do smart home upgrades require a permit in Orange County?",
        a: "It depends on the work. Screwing in smart bulbs, plugging in smart plugs, mounting a battery-powered camera, or swapping a thermostat on a compatible existing system does not require a permit. New electrical work does. If we are adding circuits, running new wiring for hardwired cameras, adding a doorbell transformer, or opening walls to run wiring during a remodel, that is permitted electrical work in Anaheim and throughout Orange County. We pull the permits and schedule the inspections so the work is code-compliant and protects you at resale.",
      },
      {
        q: "Can you add smart lighting to an existing home without rewiring?",
        a: "In most cases, yes. We can swap standard switches for smart dimmers and add scene control in an existing Orange County home without opening walls. The one wrinkle in older Anaheim homes is a missing neutral wire in the switch box, which some smart dimmers need. We handle that as part of the install, and for options like smart bulbs and plug-in modules, no rewiring is needed at all.",
      },
      {
        q: "What smart home brands do you work with?",
        a: "We install and support the major reliable brands: Lutron Caseta and Philips Hue for lighting, Nest and Ecobee for thermostats, and Ring, Nest, and Arlo for cameras and video doorbells. For whole-home automation we build around a single ecosystem such as Lutron, Apple Home, or Samsung SmartThings, with voice control through Alexa, Google Home, or Siri. We help you pick brands that work together so you are not stuck juggling apps that do not talk to each other.",
      },
      {
        q: "How much do smart home upgrades cost in Orange County?",
        a: "Costs vary widely with scope. A few smart switches and a thermostat installed professionally might run a few hundred to a couple thousand dollars. A full setup with smart lighting throughout, hardwired cameras, a video doorbell, and a whole-home automation hub can run several thousand dollars or more, depending on the size of the home and how much new wiring is involved. Adding smart features during an existing remodel is the most cost-effective approach because the walls are already open. We provide a free written estimate for your specific home.",
      },
      {
        q: "Do I need a licensed electrician to install a smart thermostat?",
        a: "For a straightforward swap on a newer HVAC system that already has a C-wire, many homeowners can install a smart thermostat themselves. The trouble comes with older Orange County systems that lack a C-wire or use two-wire heating-only setups, where a smart thermostat may not power on or may behave erratically. In those cases a licensed contractor should add the C-wire or an adapter and confirm compatibility with your equipment. When in doubt, we are happy to take a look before you buy the wrong unit.",
      },
    ],
  },
];

export function getService(slug: string): ServiceData | undefined {
  return services.find((s) => s.slug === slug);
}

export function getRelatedServices(slugs: ServiceSlug[]): ServiceData[] {
  return slugs.map((slug) => services.find((s) => s.slug === slug)).filter(Boolean) as ServiceData[];
}

export const serviceSlugList: ServiceSlug[] = services.map((s) => s.slug);
