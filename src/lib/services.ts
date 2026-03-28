export type ServiceSlug =
  | "kitchen-remodeling"
  | "bathroom-renovation"
  | "flooring"
  | "roofing"
  | "painting"
  | "drywall"
  | "window-installation"
  | "door-installation"
  | "siding"
  | "room-additions"
  | "new-construction"
  | "interior-remodeling";

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
}

export const services: ServiceData[] = [
  {
    slug: "kitchen-remodeling",
    name: "Kitchen Remodeling",
    heroImage: "/images/gallery-2.jpg",
    beforeImage: "/images/gallery-9.jpg",
    afterImage: "/images/gallery-1.jpg",
    intro:
      "Your kitchen is the most-used room in your Anaheim home, and a thoughtful remodel changes everything about how your family lives. Ulloa Construction has delivered hundreds of kitchen renovations across Orange County — from open-concept conversions in Anaheim Hills to custom cabinet builds in Irvine — with honest pricing and no subcontractor runaround. We coordinate every trade, pull all required permits, and provide a detailed written scope before any work begins. Every kitchen we build is backed by CSLB License #1144906 and full general liability insurance.",
    included: [
      "Full layout reconfiguration & open-concept wall removal",
      "Custom and semi-custom cabinet design, fabrication & installation",
      "Countertop installation — quartz, granite, marble, or butcher block",
      "Tile backsplash design and precision installation",
      "Recessed lighting, pendant lighting & under-cabinet LED strips",
      "Kitchen island construction with waterfall edges",
      "Appliance cutout coordination and hookup",
      "New flooring throughout kitchen and adjacent dining areas",
    ],
    relatedSlugs: ["bathroom-renovation", "interior-remodeling", "flooring"],
    metaDescription:
      "Expert kitchen remodeling in Anaheim & Orange County, CA. Ulloa Construction — custom cabinets, quartz countertops, open-concept layouts. CSLB #1144906. Call (657) 400-2896.",
    schemaDescription:
      "Professional kitchen remodeling in Anaheim and Orange County, CA — including cabinet installation, countertop replacement, open-concept conversions, and full kitchen renovations.",
  },
  {
    slug: "bathroom-renovation",
    name: "Bathroom Renovation",
    heroImage: "/images/gallery-3.jpg",
    beforeImage: "/images/gallery-4.jpg",
    afterImage: "/images/gallery-3.jpg",
    intro:
      "A properly executed bathroom renovation adds lasting comfort and resale value to your Orange County home. Ulloa Construction specializes in spa-caliber bathroom remodels throughout Anaheim, Irvine, and the greater OC area — from master suite overhauls with custom walk-in showers to secondary bath updates with new vanities and tile. We handle waterproofing, ventilation, tile layout, and all plumbing coordination so you have one licensed contractor from demo to final inspection. Our work meets Orange County seismic and moisture codes, and is fully insured under CSLB #1144906.",
    included: [
      "Full demo and subfloor waterproofing with RedGard membrane",
      "Custom walk-in shower design, curb-less entry & niche construction",
      "Large-format porcelain, natural stone, and mosaic tile installation",
      "Floating and freestanding vanity selection and installation",
      "Freestanding soaking tub and deck-mount fixture installation",
      "Heated floor system installation (Schluter or equivalent)",
      "Exhaust fan, lighting design, and ventilation upgrade",
      "Frameless glass shower door and hardware installation",
    ],
    relatedSlugs: ["kitchen-remodeling", "flooring", "interior-remodeling"],
    metaDescription:
      "Spa-quality bathroom renovation in Anaheim & Orange County, CA. Walk-in showers, custom tile, heated floors. Ulloa Construction — CSLB #1144906. Call (657) 400-2896.",
    schemaDescription:
      "Professional bathroom renovation services in Anaheim and Orange County, CA — including walk-in showers, custom tile, vanities, heated floors, and full gut remodels.",
  },
  {
    slug: "flooring",
    name: "Flooring Installation",
    heroImage: "/images/gallery-8.jpg",
    beforeImage: "/images/gallery-5.jpg",
    afterImage: "/images/gallery-8.jpg",
    intro:
      "New flooring is one of the fastest ways to transform the feel of an Orange County home — and one of the easiest to get wrong without the right installer. Ulloa Construction installs hardwood, luxury vinyl plank, tile, and carpet throughout Anaheim and surrounding communities with precise subfloor prep, leveling, and finish work. We recommend materials that hold up in Southern California's climate without warping or discoloring, and we handle furniture moving, transitions, and baseboards so the job is truly turnkey. All flooring installations come with a written warranty and are completed by our CSLB-licensed crew.",
    included: [
      "Subfloor inspection, leveling, and moisture barrier installation",
      "Engineered hardwood and solid hardwood installation",
      "Luxury vinyl plank (LVP) installation — glue-down and floating",
      "Porcelain, ceramic, and natural stone tile installation",
      "Carpet installation with premium pad selection",
      "Baseboard removal, reinstallation, and caulking",
      "Transition strip installation between flooring types",
      "Furniture moving coordination and post-install cleanup",
    ],
    relatedSlugs: ["interior-remodeling", "kitchen-remodeling", "bathroom-renovation"],
    metaDescription:
      "Professional flooring installation in Anaheim & Orange County, CA. Hardwood, LVP, tile, carpet — Ulloa Construction. CSLB #1144906. Call (657) 400-2896.",
    schemaDescription:
      "Expert flooring installation services in Anaheim and Orange County, CA — hardwood, luxury vinyl plank, tile, and carpet with full subfloor prep and baseboard work.",
  },
  {
    slug: "roofing",
    name: "Roofing",
    heroImage: "/images/hero.jpg",
    beforeImage: "/images/gallery-5.jpg",
    afterImage: "/images/hero.jpg",
    intro:
      "A failing roof in Orange County can escalate from a minor leak to significant structural damage within one rainy season. Ulloa Construction provides full residential roofing services across Anaheim and the greater OC area — from complete tear-offs and re-roofing to targeted repair and attic ventilation upgrades. We work with asphalt shingles, flat roof systems, and concrete tile, and every project includes a thorough inspection, photographic documentation, and a written estimate before any material is ordered. Our roofing crews are licensed under CSLB #1144906 and carry full workers' comp and general liability insurance.",
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
      "Licensed roofing contractor in Anaheim & Orange County, CA. Full re-roofing, repairs, and ventilation. Ulloa Construction — CSLB #1144906. Call (657) 400-2896.",
    schemaDescription:
      "Residential roofing services in Anaheim and Orange County, CA — including tear-off, re-roofing, shingle and tile installation, flashing, and attic ventilation.",
  },
  {
    slug: "painting",
    name: "Interior & Exterior Painting",
    heroImage: "/images/gallery-6.jpg",
    beforeImage: "/images/gallery-9.jpg",
    afterImage: "/images/gallery-6.jpg",
    intro:
      "A professional paint job in Anaheim or Orange County does more than change color — it refreshes surfaces, protects against moisture, and elevates the entire look of a home. Ulloa Construction provides interior and exterior painting services using premium materials from Sherwin-Williams and Benjamin Moore, with meticulous surface prep that ensures clean lines and long-lasting adhesion. We protect your furniture and floors, mask all trim and fixtures, and apply the right primer for each substrate. Our crews are licensed, insured under CSLB #1144906, and work with minimal disruption to your daily routine.",
    included: [
      "Color consultation and paint selection assistance",
      "Full surface prep — sanding, patching, skim coat where needed",
      "Primer application on bare and repaired surfaces",
      "Interior walls, ceilings, and accent wall painting",
      "Trim, crown molding, baseboards, and door painting",
      "Exterior siding, stucco, fascia, and soffit painting",
      "Garage door and fence painting and staining",
      "Post-project cleanup and furniture relocation",
    ],
    relatedSlugs: ["drywall", "interior-remodeling", "siding"],
    metaDescription:
      "Professional interior and exterior painting in Anaheim & Orange County, CA. Sherwin-Williams and Benjamin Moore. Ulloa Construction — CSLB #1144906. Call (657) 400-2896.",
    schemaDescription:
      "Interior and exterior painting services in Anaheim and Orange County, CA — including surface prep, priming, wall painting, trim work, and exterior stucco and siding painting.",
  },
  {
    slug: "drywall",
    name: "Drywall Installation & Repair",
    heroImage: "/images/gallery-5.jpg",
    beforeImage: "/images/gallery-9.jpg",
    afterImage: "/images/gallery-5.jpg",
    intro:
      "Whether you're framing out a new room addition in Anaheim, repairing water damage from a leaking roof, or smoothing out popcorn ceilings in an older Orange County home, Ulloa Construction delivers clean, paint-ready drywall every time. Our crews are experienced in standard drywall, moisture-resistant greenboard, fire-rated Type X, and soundproofing assemblies — and we match existing textures so repairs are invisible. We work alongside our other trades for seamless coordination on larger projects, and all our drywall work is licensed under CSLB #1144906 with clean, low-dust practices.",
    included: [
      "New drywall framing, hanging, and taping on additions and remodels",
      "Moisture-resistant (greenboard) and fire-rated (Type X) installation",
      "Screw and nail pop repair on existing walls and ceilings",
      "Water damage patch and full sheet replacement",
      "Popcorn ceiling removal and smooth finish application",
      "Texture matching — orange peel, knock-down, skip-trowel, smooth",
      "Corner bead installation and metal trim work",
      "Sound-dampening assemblies for home theaters and offices",
    ],
    relatedSlugs: ["painting", "interior-remodeling", "room-additions"],
    metaDescription:
      "Expert drywall installation and repair in Anaheim & Orange County, CA. Texture matching, water damage, new construction. Ulloa Construction — CSLB #1144906. Call (657) 400-2896.",
    schemaDescription:
      "Drywall installation, repair, and texture services in Anaheim and Orange County, CA — including new construction drywall, water damage repair, popcorn removal, and texture matching.",
  },
  {
    slug: "window-installation",
    name: "Window Installation",
    heroImage: "/images/hero.jpg",
    beforeImage: "/images/gallery-9.jpg",
    afterImage: "/images/hero.jpg",
    intro:
      "New windows are one of the highest-impact upgrades for energy efficiency and curb appeal in an Anaheim or Orange County home. Ulloa Construction installs energy-efficient vinyl, fiberglass, and aluminum-clad windows from trusted manufacturers, with proper flashing, insulation, and sealing to meet California Title 24 energy standards. We handle permit coordination with your local building department, precision measurement, and finish work on both the interior and exterior — so you get a watertight installation that looks completely finished. Our window crews operate under CSLB #1144906 with full insurance coverage.",
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
      "Professional window installation in Anaheim & Orange County, CA. Energy-efficient dual-pane windows, Title 24 compliant. Ulloa Construction — CSLB #1144906. Call (657) 400-2896.",
    schemaDescription:
      "Window installation services in Anaheim and Orange County, CA — including energy-efficient replacement windows, new construction windows, flashing, and interior/exterior trim work.",
  },
  {
    slug: "door-installation",
    name: "Door Installation",
    heroImage: "/images/hero.jpg",
    beforeImage: "/images/gallery-9.jpg",
    afterImage: "/images/hero.jpg",
    intro:
      "A new front door in Orange County is both a security upgrade and an immediate curb appeal improvement — and interior door upgrades make a home feel genuinely more modern and well-built. Ulloa Construction installs all door types across Anaheim and OC, from solid-core interior doors with new hardware to pre-hung fiberglass and steel entry systems with multi-point locking. We handle rough opening modification, shimming, weatherstripping, casing, and hardware installation so the job is completely finished. All installations are performed by our CSLB #1144906-licensed crew with attention to plumb, level, and smooth operation.",
    included: [
      "Entry door installation — fiberglass, steel, and wood",
      "Interior door installation — solid-core, hollow-core, barn doors",
      "French door and sliding glass door installation",
      "Rough opening modification for new or widened door frames",
      "Pre-hung and slab door installation with shimming and leveling",
      "Weatherstripping, threshold, and door sweep installation",
      "Deadbolt, handleset, and smart lock installation",
      "Interior and exterior casing, trim, and paint touchup",
    ],
    relatedSlugs: ["window-installation", "interior-remodeling", "painting"],
    metaDescription:
      "Door installation in Anaheim & Orange County, CA. Entry doors, interior doors, French doors, sliding doors. Ulloa Construction — CSLB #1144906. Call (657) 400-2896.",
    schemaDescription:
      "Door installation services in Anaheim and Orange County, CA — including entry doors, interior doors, French doors, sliding glass doors, and hardware installation.",
  },
  {
    slug: "siding",
    name: "Siding Installation & Replacement",
    heroImage: "/images/hero.jpg",
    beforeImage: "/images/gallery-9.jpg",
    afterImage: "/images/hero.jpg",
    intro:
      "Your home's exterior siding is its first line of defense against Southern California's sun, marine layer, and occasional heavy rain — and it defines your home's curb appeal on every drive-by. Ulloa Construction installs James Hardie fiber cement siding, vinyl, stucco, and wood lap siding throughout Anaheim and Orange County, with proper moisture barrier installation, trim integration, and factory-match or custom paint finishing. We inspect and repair the underlying sheathing and studs before any new siding goes on, ensuring you're not just covering up existing problems. Our siding work is licensed under CSLB #1144906 and backed by manufacturer warranties.",
    included: [
      "Full siding tear-off and sheathing inspection",
      "Moisture barrier and housewrap installation (Tyvek or equivalent)",
      "James Hardie fiber cement siding installation",
      "Vinyl siding installation and J-channel trim",
      "Stucco application — traditional three-coat and synthetic",
      "Wood lap siding and trim installation",
      "Corner trim, window trim, and soffit integration",
      "Primer and paint application or factory-primed finish coordination",
    ],
    relatedSlugs: ["painting", "roofing", "window-installation"],
    metaDescription:
      "Siding installation in Anaheim & Orange County, CA. James Hardie, vinyl, stucco, wood lap. Ulloa Construction — CSLB #1144906. Call (657) 400-2896.",
    schemaDescription:
      "Siding installation and replacement in Anaheim and Orange County, CA — including James Hardie fiber cement, vinyl, stucco, and wood lap siding with moisture barrier installation.",
  },
  {
    slug: "room-additions",
    name: "Room Additions & ADUs",
    heroImage: "/images/gallery-10.jpg",
    beforeImage: "/images/gallery-5.jpg",
    afterImage: "/images/gallery-10.jpg",
    intro:
      "Adding square footage to your Anaheim or Orange County property is one of the best investments you can make — and one of the most complex projects to execute without the right contractor. Ulloa Construction manages the full scope of room additions and ADU construction: architectural planning, permit acquisition from your local building department, foundation work, framing, MEP rough-in, drywall, and complete finish work. We design additions that integrate seamlessly with your existing home's roofline, exterior, and interior flow. Our team holds CSLB License #1144906 and has deep experience with Orange County's seismic requirements and ADU permitting process.",
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
    relatedSlugs: ["new-construction", "kitchen-remodeling", "bathroom-renovation"],
    metaDescription:
      "Room additions and ADU construction in Anaheim & Orange County, CA. Full-service from permits to finish. Ulloa Construction — CSLB #1144906. Call (657) 400-2896.",
    schemaDescription:
      "Room addition and ADU construction in Anaheim and Orange County, CA — including architectural planning, permitting, foundation, framing, and complete finish work for home additions and accessory dwelling units.",
  },
  {
    slug: "new-construction",
    name: "New Home Construction",
    heroImage: "/images/hero.jpg",
    beforeImage: "/images/gallery-5.jpg",
    afterImage: "/images/hero.jpg",
    intro:
      "Building a new custom home in Orange County requires a general contractor who understands both the design process and the permitting complexity of cities like Anaheim, Irvine, and Fullerton. Ulloa Construction offers design-build services for new residential construction — from architectural planning and soils reports through to final certificate of occupancy. We self-perform the key trades and manage all subcontractors so the schedule stays on track and quality is consistent from slab to roof ridge. Our new construction work is licensed under CSLB #1144906 and built to California's latest seismic and energy codes.",
    included: [
      "Architectural design coordination and civil engineering referrals",
      "Soils report, grading plan, and site preparation",
      "Permit acquisition with city and county building departments",
      "Foundation — slab-on-grade, raised foundation, or basement",
      "Framing, sheathing, roofing, and exterior envelope",
      "Electrical, plumbing, and HVAC installation",
      "Insulation, drywall, interior finish work, and custom millwork",
      "Landscaping coordination and final punch-list walkthrough",
    ],
    relatedSlugs: ["room-additions", "roofing", "flooring"],
    metaDescription:
      "New home construction in Anaheim & Orange County, CA. Design-build from permits to final walkthrough. Ulloa Construction — CSLB #1144906. Call (657) 400-2896.",
    schemaDescription:
      "New residential construction in Anaheim and Orange County, CA — design-build services from architectural planning and permitting through framing, MEP, and complete interior and exterior finish.",
  },
  {
    slug: "interior-remodeling",
    name: "Interior Remodeling",
    heroImage: "/images/gallery-7.jpg",
    beforeImage: "/images/gallery-9.jpg",
    afterImage: "/images/gallery-7.jpg",
    intro:
      "Sometimes a home needs more than one updated room — it needs a cohesive interior overhaul that makes every space feel intentional and connected. Ulloa Construction delivers whole-home interior remodels across Anaheim and Orange County, coordinating flooring, trim, doors, paint, lighting, and structural changes as a single unified project under one licensed contractor. We sequence trades efficiently to minimize disruption, communicate daily on progress, and provide a detailed project schedule before work begins. Every interior remodel is completed under CSLB License #1144906 with full workers' comp and liability insurance.",
    included: [
      "Open-concept conversion — load-bearing wall removal with engineered beam",
      "Whole-home flooring installation and transitions",
      "Interior door replacement — solid-core with new hardware throughout",
      "Baseboard, crown molding, and door casing installation",
      "Recessed lighting, switches, and electrical panel coordination",
      "Interior paint — walls, ceilings, trim, and accent walls",
      "Built-in shelving, entertainment centers, and custom millwork",
      "Closet system design and installation",
    ],
    relatedSlugs: ["flooring", "kitchen-remodeling", "painting"],
    metaDescription:
      "Whole-home interior remodeling in Anaheim & Orange County, CA. Open-concept conversions, flooring, trim, lighting. Ulloa Construction — CSLB #1144906. Call (657) 400-2896.",
    schemaDescription:
      "Interior remodeling services in Anaheim and Orange County, CA — including open-concept conversions, whole-home flooring, trim, doors, lighting, and paint as a single coordinated project.",
  },
];

export function getService(slug: string): ServiceData | undefined {
  return services.find((s) => s.slug === slug);
}

export function getRelatedServices(slugs: ServiceSlug[]): ServiceData[] {
  return slugs.map((slug) => services.find((s) => s.slug === slug)).filter(Boolean) as ServiceData[];
}

export const serviceSlugList: ServiceSlug[] = services.map((s) => s.slug);
