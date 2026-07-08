import type { CitySlug } from "./locations";
import { getLocation } from "./locations";

/**
 * City + service landing pages: /locations/[city]/[service]
 *
 * Three services are offered as dedicated location pages. Each combines a
 * shared, [City]-interpolated template (services list, trust points, FAQs)
 * with a HAND-WRITTEN, unique intro paragraph per city+service combo. The
 * unique intros are what keep 100+ pages clear of duplicate-content flags,
 * so every combo must have its own entry in `cityServiceIntros` before it is
 * generated (see generateStaticParams in the route).
 */

export type CityServiceSlug =
  | "bathroom-remodeling"
  | "kitchen-remodeling"
  | "smart-home-upgrades";

export const cityServiceSlugs: CityServiceSlug[] = [
  "bathroom-remodeling",
  "kitchen-remodeling",
  "smart-home-upgrades",
];

export interface ServiceItem {
  title: string;
  desc: string;
}

export interface TrustPoint {
  title: string;
  desc: string;
  /** SVG path (24x24 viewBox) rendered in the trust card. */
  iconPath: string;
}

export interface Faq {
  q: string;
  a: string;
}

export interface CityServiceTemplate {
  slug: CityServiceSlug;
  /** Service name in title case, e.g. "Bathroom Remodeling". */
  name: string;
  /** Canonical hub service page this location page links back to. */
  serviceHref: string;
  heroImage: string;
  title: (city: string) => string;
  metaDescription: (city: string) => string;
  /** Heading + copy for the "what we handle" section. */
  servicesHeading: string;
  services: ServiceItem[];
  trustPoints: (city: string) => TrustPoint[];
  faqs: (city: string) => Faq[];
}

const CHECK_ICON =
  "M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-2 16l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z";
const CLOCK_ICON =
  "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z";
const DOC_ICON =
  "M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 14l-5-5 1.41-1.41L12 14.17l7.59-7.59L21 8l-9 9z";
const PHONE_ICON =
  "M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z";

/** Shared trust points, worded per service but consistent in substance. */
function trustPoints(city: string, ownerLine: string): TrustPoint[] {
  return [
    {
      title: "CSLB Licensed #1144906",
      desc: "Fully licensed, bonded, and insured with general liability and workers' comp on every job. No unlicensed subs on your property.",
      iconPath: CHECK_ICON,
    },
    {
      title: "Upfront, Written Pricing",
      desc: `You get a detailed written estimate before any work starts in ${city}. No surprise charges and no vague allowances halfway through.`,
      iconPath: DOC_ICON,
    },
    {
      title: "Talk Straight to the Owner",
      desc: ownerLine,
      iconPath: PHONE_ICON,
    },
    {
      title: "Clean, Respectful Crews",
      desc: `We protect your floors, contain the dust, and leave your ${city} home tidy at the end of every day. Same crew start to finish.`,
      iconPath: CLOCK_ICON,
    },
  ];
}

export const cityServiceTemplates: Record<
  CityServiceSlug,
  CityServiceTemplate
> = {
  "bathroom-remodeling": {
    slug: "bathroom-remodeling",
    name: "Bathroom Remodeling",
    serviceHref: "/services/bathroom-remodeling",
    heroImage: "/images/gallery-3.jpg",
    title: (city) => `Bathroom Remodeling in ${city} | Ulloa Construction`,
    metaDescription: (city) =>
      `Licensed bathroom remodeling contractor serving ${city}, CA. Walk-in showers, custom tile, vanity upgrades, and full renovations. CSLB #1144906. Free estimates.`,
    servicesHeading: "Our Bathroom Remodeling Services",
    services: [
      {
        title: "Walk-In Showers",
        desc: "Curbless and low-threshold walk-in showers with frameless glass, built-in benches, and niches. A popular upgrade for both style and aging-in-place safety.",
      },
      {
        title: "Custom Tile Work",
        desc: "Floor-to-ceiling tile, mosaic accents, and heated floors installed by hand. Straight grout lines and proper substrate prep so nothing cracks down the road.",
      },
      {
        title: "Vanity & Sink Upgrades",
        desc: "New vanities, quartz and stone tops, undermount sinks, and modern faucets. Single or double-sink layouts sized to your space.",
      },
      {
        title: "Tub-to-Shower Conversions",
        desc: "Swap a rarely used tub for a spacious shower. We reroute the drain, rebuild the pan, and waterproof the whole assembly to code.",
      },
      {
        title: "Waterproofing",
        desc: "Multi-layer waterproofing behind the tile so moisture never reaches the framing. This is the step cheap remodels skip, and it is the one that matters most.",
      },
      {
        title: "Flooring",
        desc: "Porcelain, natural stone, and luxury vinyl tile rated for wet areas, set over a properly prepped and leveled subfloor.",
      },
      {
        title: "Lighting & Ventilation",
        desc: "Recessed and vanity lighting plus properly sized exhaust fans to clear humidity and keep mold out for good.",
      },
    ],
    trustPoints: (city) =>
      trustPoints(
        city,
        `The person who prices your ${city} bathroom is the person running the job. Call (714) 487-1860 and reach the owner directly, not a call center.`,
      ),
    faqs: (city) => [
      {
        q: `How much does a bathroom remodel cost in ${city}?`,
        a: `Most bathroom remodels in ${city} run between $12,000 and $35,000. A straightforward hall-bath refresh with new tile, vanity, and fixtures lands at the lower end, while a large primary bath with a curbless shower, double vanity, and premium finishes runs higher. We give you a detailed written estimate up front so you know exactly where your budget goes before any demo begins.`,
      },
      {
        q: `Do I need a permit for a bathroom remodel in ${city}?`,
        a: `A cosmetic refresh (paint, vanity swap, new fixtures in the same spots) usually does not need a permit. Once you move plumbing, alter the layout, convert a tub to a shower, or touch electrical, ${city} requires a permit. We pull the permits and handle inspections for you so the work is documented and code-compliant.`,
      },
      {
        q: "How long does a bathroom renovation take?",
        a: "A typical full bathroom remodel takes two to four weeks on site once demo starts, depending on tile scope, fixture lead times, and inspection scheduling. We give you a realistic timeline before we begin and keep the same crew on your project start to finish so it stays on track.",
      },
      {
        q: `Do you serve ${city} for bathroom remodeling?`,
        a: `Yes. Ulloa Construction remodels bathrooms throughout ${city} and all of Orange County. We are licensed under CSLB #1144906, fully insured, and offer free written estimates. Call (714) 487-1860 to get started.`,
      },
    ],
  },

  "kitchen-remodeling": {
    slug: "kitchen-remodeling",
    name: "Kitchen Remodeling",
    serviceHref: "/services/kitchen-remodeling",
    heroImage: "/images/gallery-2.jpg",
    title: (city) => `Kitchen Remodeling in ${city} | Ulloa Construction`,
    metaDescription: (city) =>
      `Licensed kitchen remodeling contractor serving ${city}, CA. Custom cabinets, countertops, layout changes, and full kitchen renovations. CSLB #1144906. Free estimates.`,
    servicesHeading: "Our Kitchen Remodeling Services",
    services: [
      {
        title: "Custom & Semi-Custom Cabinets",
        desc: "Full-height, soft-close cabinetry built to fit your space, from painted Shaker to flat-slab modern. Semi-custom lines when you want a shorter lead time without giving up quality.",
      },
      {
        title: "Quartz & Stone Countertops",
        desc: "Quartz, granite, and natural stone tops with tight seams and finished edges. We template on site so everything fits the first time.",
      },
      {
        title: "Backsplashes",
        desc: "Subway, slab, and handmade tile backsplashes that tie the whole kitchen together, sealed and grouted to last.",
      },
      {
        title: "Layout Changes",
        desc: "Opening walls for an island, relocating the sink or range, and reworking the footprint for the flow you actually want. We handle the structural and permit side.",
      },
      {
        title: "Lighting",
        desc: "Recessed lighting, pendants over the island, and under-cabinet task lighting on their own switching so the room works day and night.",
      },
      {
        title: "Flooring",
        desc: "Durable, easy-clean flooring in tile, engineered hardwood, or luxury vinyl, leveled and transitioned cleanly into adjoining rooms.",
      },
      {
        title: "Appliance Hookups",
        desc: "Gas, electrical, water, and venting set up correctly for your range, hood, dishwasher, and refrigerator, all to code.",
      },
    ],
    trustPoints: (city) =>
      trustPoints(
        city,
        `Your ${city} kitchen is priced and managed by the owner, not handed off. Call (714) 487-1860 and talk directly to the person accountable for the work.`,
      ),
    faqs: (city) => [
      {
        q: `How much does a kitchen remodel cost in ${city}?`,
        a: `Kitchen remodels in ${city} typically range from $30,000 to $90,000 and up. A cabinet-and-counter refresh with existing layout sits at the lower end, while a full gut with a new layout, custom cabinetry, and stone counters runs higher. We break the numbers out in a written estimate so you can see exactly what drives the cost.`,
      },
      {
        q: `How long does a kitchen renovation take in ${city}?`,
        a: `Most ${city} kitchen remodels take six to ten weeks on site. Cabinet fabrication and countertop templating drive the schedule, so we order early and sequence the trades to keep things moving. You get a week-by-week timeline before we start.`,
      },
      {
        q: `Do kitchen remodels require permits in ${city}?`,
        a: `If you are only swapping cabinets and counters in the same layout, often no permit is needed. Once you move plumbing or gas, add or relocate electrical circuits, or take down a wall, ${city} requires permits. We pull them and coordinate every inspection as part of the job.`,
      },
      {
        q: `What kitchen cabinet styles are popular in ${city}?`,
        a: `In ${city} we install a lot of white and soft-gray Shaker cabinets for a clean transitional look, along with flat-slab doors in natural wood tones for modern homes. Two-tone kitchens, with a contrasting island, remain a favorite. We help you pick a style that fits your home and holds its value.`,
      },
      {
        q: `Do you offer free estimates for kitchen remodels in ${city}?`,
        a: `Yes. Estimates are always free and come in writing with no obligation. Call (714) 487-1860 or request one online, and we will walk your ${city} kitchen with you to scope the project.`,
      },
    ],
  },

  "smart-home-upgrades": {
    slug: "smart-home-upgrades",
    name: "Smart Home Upgrades",
    serviceHref: "/services/smart-home-upgrades",
    heroImage: "/images/gallery-7.jpg",
    title: (city) => `Smart Home Upgrades in ${city} | Ulloa Construction`,
    metaDescription: (city) =>
      `Licensed smart home installation contractor serving ${city}, CA. Smart lighting, thermostats, security cameras, and home automation. CSLB #1144906. Free estimates.`,
    servicesHeading: "Our Smart Home Services",
    services: [
      {
        title: "Smart Lighting",
        desc: "Lutron, Kasa, and Philips Hue systems with dimmers, scenes, and app or voice control. We wire in the neutral and load the switches need so it works reliably, not just on paper.",
      },
      {
        title: "Smart Thermostats",
        desc: "Nest and Ecobee thermostats installed and configured, including adding a C-wire when your existing wiring is missing one.",
      },
      {
        title: "Security Cameras & Video Doorbells",
        desc: "Ring, Arlo, and Nest cameras and doorbells placed for real coverage, with proper power and mounting instead of stick-on guesswork.",
      },
      {
        title: "Whole-Home Automation",
        desc: "Tie lighting, climate, locks, and cameras into one app and set up scenes and schedules so the house runs itself the way you want.",
      },
      {
        title: "Electrical Upgrades for Smart Installs",
        desc: "The wiring behind the devices: adding neutrals, dedicated circuits, outdoor outlets, and panel capacity so your smart gear has clean, code-compliant power.",
      },
    ],
    trustPoints: (city) =>
      trustPoints(
        city,
        `A licensed contractor scopes and prices your ${city} smart-home project, not a big-box installer. Call (714) 487-1860 and reach the owner directly.`,
      ),
    faqs: (city) => [
      {
        q: `Do smart home upgrades require permits in ${city}?`,
        a: `Plug-in and swap-in devices like a video doorbell, a smart thermostat, or replacement smart switches generally do not need a permit. Once we add new circuits, run new wiring, or upgrade your electrical panel to support the load, ${city} requires an electrical permit. We handle the permit and inspection whenever the work calls for it.`,
      },
      {
        q: `Can you add smart lighting to an existing home in ${city}?`,
        a: `Yes. Retrofitting smart lighting into an existing ${city} home is one of our most common requests. Older homes sometimes lack the neutral wire that smart switches need, so we add it or select hardware that works without one. Either way you get reliable dimming, scenes, and app control.`,
      },
      {
        q: `How much do smart home upgrades cost in ${city}?`,
        a: `Smart home projects in ${city} range widely. A few smart switches and a thermostat can run under $1,500, while whole-home automation with lighting, cameras, and panel work runs $8,000 and up. We scope it to what you actually want and give you a written estimate before we start.`,
      },
      {
        q: `Do you serve ${city} for smart home installations?`,
        a: `Yes. Ulloa Construction installs smart home systems throughout ${city} and all of Orange County. We are licensed under CSLB #1144906, fully insured, and estimates are free. Call (714) 487-1860 to get started.`,
      },
    ],
  },
};

/**
 * HAND-WRITTEN unique intros per city+service. Each is 2-3 sentences that
 * mention the city naturally and draw on real local detail (neighborhoods,
 * housing stock, coastal/permit specifics). Every generated page needs an
 * entry here; combos without one are skipped by generateStaticParams.
 *
 * Structure: cityServiceIntros[serviceSlug][citySlug] = paragraph
 */
export const cityServiceIntros: Record<
  CityServiceSlug,
  Partial<Record<CitySlug, string>>
> = {
  "bathroom-remodeling": {
    anaheim:
      "Anaheim is our home base, and we have remodeled bathrooms in every corner of it, from the post-war ranch homes of West Anaheim to the hillside estates above Anaheim Hills. Older Anaheim baths often hide dated tile and undersized showers, and we rebuild them with proper waterproofing, curbless walk-in showers, and quartz vanities that fit the space. We pull the City of Anaheim permits and coordinate every inspection so the work is documented and done right.",
    fullerton:
      "Fullerton's Craftsman bungalows near Cherrywood and the mid-century ranchers around Sunny Hills tend to have small, original bathrooms that make the most of an update. Ulloa Construction reworks them into bright, functional spaces with new tile, modern vanities, and waterproofing done the way it should be. We know the City of Fullerton permit process and keep the same crew on your project from demo to final walkthrough.",
    orange:
      "In the City of Orange, especially the Craftsman and Spanish Colonial homes around Old Towne and Chapman University, bathrooms often carry decades-old fixtures that no longer match how the home lives. We update them carefully, respecting the character of the house while adding walk-in showers, custom tile, and reliable ventilation. Older Orange homes can hold surprises behind the walls, so we prep the substrate properly and waterproof every wet area.",
    irvine:
      "Irvine bathrooms tend to be well built but dated, especially the original primary baths in Woodbridge, Northwood, and Turtle Rock that still have builder-grade tile and oversized garden tubs. Ulloa Construction updates them into clean, modern spaces with curbless showers, quartz vanities, and proper waterproofing behind every wall. We are used to Irvine HOA design review and the city inspection process, so your remodel moves forward without surprises.",
    "huntington-beach":
      "Bathrooms in Huntington Beach take a beating from the coastal salt air and humidity, whether the home sits in Old Town, along Huntington Harbour, or up near Seacliff. We remodel them with marine-grade fixtures, corrosion-resistant hardware, and a multi-layer waterproofing system that keeps moisture out of the framing for good. The result is a Surf City bathroom that looks sharp and holds up to life near the beach.",
    "santa-ana":
      "Santa Ana's historic neighborhoods like Floral Park and Park Santiago are full of early bungalows with charming but tired bathrooms. Ulloa Construction modernizes them with walk-in showers, custom tile, and updated ventilation while respecting the home's original character. Because much of Santa Ana's housing predates 1978, we follow all lead paint and asbestos protocols and coordinate testing before demo begins.",
    "mission-viejo":
      "Many Mission Viejo bathrooms date back to the city's late-1960s and 1970s tract construction, and homeowners around Lake Mission Viejo are ready to trade the builder-grade tubs and tile for something modern. We convert them into walk-in showers, install new vanities, and waterproof properly behind the tile. We also handle the HOA design review and city permits that come with most Mission Viejo projects.",
    "laguna-niguel":
      "In Laguna Niguel's hillside communities like Crown Valley and Bear Brand, homeowners expect a bathroom remodel to match the quality of the rest of the home. Ulloa Construction delivers that with frameless glass showers, stone and quartz surfaces, and clean tile work backed by real waterproofing. We prepare the HOA submittals and permit packages so approvals stay on track.",
    "san-clemente":
      "San Clemente's coastal cottages and hillside homes call for bathrooms that can handle the marine environment as well as they look. We remodel with corrosion-resistant fixtures, moisture barriers, and tile detailing suited to the Spanish Village by the Sea, from walk-in showers to full primary bath overhauls. Projects near the bluffs get the extra material care the coastline demands.",
    "dana-point":
      "Whether your home overlooks Dana Point Harbor or sits in Monarch Beach or the Lantern District, a coastal bathroom needs the right materials to last. Ulloa Construction remodels Dana Point baths with marine-grade fixtures, proper waterproofing, and custom tile that stands up to ocean humidity. We manage the permits and any HOA approvals so your project moves smoothly from demo to finish.",
    "san-juan-capistrano":
      "San Juan Capistrano homes range from historic adobes near the mission to newer builds in the equestrian neighborhoods, and their bathrooms reflect that range. We update them with walk-in showers, custom tile, and modern vanities while working carefully with older structures and the city's historic district requirements. Every wet area is waterproofed to code before a single tile goes up.",
    "aliso-viejo":
      "Aliso Viejo's townhomes and single-family homes near the Town Center and Aliso and Wood Canyons were mostly built in the 1990s and are now hitting their first real remodel. We refresh these bathrooms with walk-in showers, updated vanities, and clean tile work, all waterproofed properly behind the surface. We handle the HOA design review that nearly every Aliso Viejo community requires.",
    brea: "Brea bathrooms, from the ranch homes near Brea Olinda High School to the newer builds above Carbon Canyon, often need more than a cosmetic touch-up. Ulloa Construction rebuilds them with tub-to-shower conversions, custom tile, and modern fixtures, waterproofed to keep the framing dry. We work through the City of Brea permit process and keep your project on a realistic schedule.",
    "buena-park":
      "Many Buena Park homes in Whitaker Bermuda, Stoneybrook, and the streets south of La Palma Avenue still have their original 1960s and 70s bathrooms. We transform them with walk-in showers, new vanities, updated flooring, and the proper waterproofing the older builds usually lack. Everything is permitted through the city and inspected so the work holds its value.",
    "costa-mesa":
      "Costa Mesa bathrooms span everything from 1940s Eastside bungalows to 1970s Mesa Verde tract homes, and each era brings its own quirks behind the walls. Ulloa Construction updates them with walk-in showers, custom tile, and modern vanities, waterproofing every wet area regardless of the home's age. We have worked across all of Costa Mesa's neighborhoods and handle the city permits in-house.",
    cypress:
      "Cypress homes are mostly solid 1960s and 70s single-family builds, and their original bathrooms are prime candidates for a modern rework. We convert dated tubs to walk-in showers, install new tile and vanities, and waterproof properly so moisture never reaches the framing. Ulloa Construction manages the full permit and inspection process with the city.",
    "fountain-valley":
      "Fountain Valley's well-built 1960s and 70s ranch homes near Mile Square Park often still carry their original bathrooms, tile and all. We update them into modern spaces with walk-in showers, new vanities, and reliable ventilation, waterproofed the way these older homes were not. It really is a nice place to live, and a well-done bathroom makes it even better.",
    "garden-grove":
      "Across Garden Grove, from West Garden Grove to the neighborhoods near Euclid, homeowners are updating bathrooms that have not changed since the home was built. Ulloa Construction handles walk-in showers, custom tile, vanity upgrades, and the waterproofing older Garden Grove homes usually need. We move efficiently through the city's permit and inspection process.",
    "la-habra":
      "La Habra's 1940s to 60s bungalows and ranchers, from the flats to the streets near Portola Park, often have compact bathrooms ready for a smart redesign. We rework them with walk-in showers, updated tile, and modern fixtures, waterproofing every surface behind the finish. For homes near the county line, we handle both City of La Habra and LA County permitting.",
    "la-palma":
      "La Palma's tidy 1960s and 70s homes are well kept but usually still have their original bathrooms. Ulloa Construction updates them with walk-in showers, new vanities, and clean tile work, all waterproofed correctly behind the walls. Even on this small city's compact lots, we bring full permit coordination and a licensed crew to every project.",
    "laguna-beach":
      "Laguna Beach bathrooms range from 1920s Village cottages to mid-century cliffside homes above Emerald Bay, and each demands a careful hand. We remodel with corrosion-resistant fixtures, custom tile, and waterproofing built for the coastal environment, always respecting the home's architecture. We are experienced with Laguna's design review board and coastal commission requirements when a project needs approval.",
    "laguna-hills":
      "Laguna Hills homes in Nellie Gail Ranch, Woodlands, and the neighborhoods along Moulton Parkway were largely built in the 1970s and 80s, and their bathrooms benefit hugely from an update. Ulloa Construction installs walk-in showers, quartz vanities, and modern tile, waterproofed properly behind every wall. We coordinate any HOA design review as part of the job.",
    "laguna-woods":
      "In Laguna Woods Village, a well-designed bathroom is about comfort, safety, and staying independent at home. We specialize in accessibility-minded remodels, from curbless walk-in showers and grab-bar blocking to slip-resistant tile and better lighting, all waterproofed correctly. We work within the Village's HOA approval process and schedule the work to keep disruption to neighbors to a minimum.",
    "lake-forest":
      "Lake Forest bathrooms range from 1970s and 80s tract homes in the old El Toro neighborhoods to newer builds in Foothill Ranch and Baker Ranch. Ulloa Construction updates them with walk-in showers, custom tile, and modern vanities, waterproofing every wet area to protect the framing. We handle the city permits, and HOA submittals where the community requires them.",
    "los-alamitos":
      "Los Alamitos homes near Katella Avenue and the streets by the high school are mostly solid mid-century builds with original bathrooms ready for a refresh. We remodel them with walk-in showers, updated tile, and new vanities, waterproofed the way the older construction was not. For properties near the county line, we coordinate both City of Los Alamitos and LA County permits.",
    "newport-beach":
      "Newport Beach bathrooms, from waterfront cottages on the Balboa Peninsula to estates in Newport Coast and Dover Shores, are held to a high standard. Ulloa Construction delivers spa-quality primary baths with frameless glass showers, stone surfaces, and meticulous tile, all built on proper waterproofing and marine-appropriate materials. We manage the city's coastal-zone and HOA review so approvals stay on schedule.",
    placentia:
      "Placentia's older Craftsman and Spanish Colonial homes near Bradford Avenue and Old Placentia often have small, dated bathrooms full of character but short on function. We modernize them with walk-in showers, custom tile, and updated fixtures while respecting the home's era, waterproofing every wet area behind the finish. We know the City of Placentia permit process, including projects near the historic district.",
    "rancho-santa-margarita":
      "Rancho Santa Margarita homes in Tesoro, Melinda Heights, and Dove Canyon were built in the late 80s and 90s and are now hitting their prime remodel window. Their bathrooms are functionally sound but dated, and we update them with walk-in showers, quartz vanities, and modern tile, waterproofed correctly behind the walls. We coordinate RSM's HOA design review as part of every project.",
    "seal-beach":
      "Seal Beach bathrooms, whether in an Old Town beach cottage or a home near the Surfside colony, need materials that handle salt air and moisture. Ulloa Construction remodels them with corrosion-resistant fixtures, marine-grade detailing, and full waterproofing behind the tile. From walk-in showers to complete primary baths, we build for the coast and manage the city permits.",
    stanton:
      "Stanton's compact 1950s and 60s homes usually still have their original bathrooms, small spaces with dated tile and older fixtures. We rework them into modern, functional baths with walk-in showers, new vanities, and proper waterproofing that adds real value without the cost of moving. Ulloa Construction handles the full permit and inspection process with the city.",
    tustin:
      "Tustin bathrooms run the gamut, from the Victorian and Craftsman homes of Old Tustin to the newer builds in Tustin Ranch and Tustin Legacy. In older homes we bring aging plumbing and tile up to code while preserving character; in newer ones we deliver clean, modern walk-in showers and vanities. Either way, every wet area is waterproofed properly and permitted through the city.",
    "villa-park":
      "Villa Park bathrooms tend toward larger, higher-end scopes that fit the city's custom homes and generous lots. Ulloa Construction builds spa-quality primary baths with premium tile, frameless glass showers, and stone vanities, all on a foundation of proper waterproofing. We bring the trade coordination and management these detailed Villa Park projects require.",
    westminster:
      "Westminster's post-war ranch homes and 60s and 70s tract houses along the Bolsa corridor often carry their original bathrooms. Ulloa Construction updates them with walk-in showers, custom tile, updated vanities, and the waterproofing these older builds usually lack. We move efficiently through the City of Westminster permit and inspection process.",
    "yorba-linda":
      "Yorba Linda bathrooms, from the mid-century ranchers of West Yorba Linda to the custom estates in Fairmont and Bryant Ranch, are held to a high standard. We build luxury primary baths with premium tile and stone, frameless showers, and precise craftsmanship, all backed by proper waterproofing. These larger scopes benefit from a single licensed general contractor managing every trade.",
  },
  "kitchen-remodeling": {
    anaheim:
      "As Anaheim's home-base contractor, we have remodeled kitchens in every kind of home here, from West Anaheim ranch houses to the hillside builds of Anaheim Hills. Dated galley layouts and closed-off floor plans are common, and we open them up with new cabinetry, quartz counters, and islands that actually work for how families cook and gather. We pull the City of Anaheim permits and coordinate the trades so the whole job runs on one schedule.",
    fullerton:
      "Fullerton kitchens, whether in a Craftsman bungalow near Cherrywood or a mid-century ranch around Sunny Hills, often keep their original walls long after they stop making sense. Ulloa Construction reworks the layout, installs custom or semi-custom cabinets, and sets quartz or stone counters with tight, clean seams. We handle the City of Fullerton permits for any plumbing, gas, or electrical changes the new plan requires.",
    orange:
      "In the City of Orange, the Craftsman and Spanish Colonial homes around Old Towne have character to spare but kitchens that feel cramped and closed off. We update them with new cabinetry, stone counters, and thoughtful layout changes that respect the home's period while opening it up. Older Orange homes need careful trade coordination, and we manage the permits and inspections from start to finish.",
    irvine:
      "Irvine homeowners in Woodbridge, Northwood, and Turtle Rock expect a kitchen that lives up to the rest of the house. Ulloa Construction delivers custom cabinetry, waterfall quartz islands, and layout changes that open the kitchen to the living space, with the precise finish Irvine buyers look for. We prepare the HOA design review packages and manage city permits so nothing stalls.",
    "huntington-beach":
      "Kitchens in Huntington Beach, from Old Town to Huntington Harbour, are the heart of the coastal-casual lifestyle Surf City is known for. We remodel them with durable, moisture-smart materials, custom cabinetry, and open layouts that connect to the way people entertain near the beach. Corrosion-resistant hardware and proper detailing keep everything performing in the marine air.",
    "santa-ana":
      "Santa Ana's historic homes in Floral Park and Park Santiago often have small, boxed-in kitchens that a smart remodel can transform. Ulloa Construction opens the layout, adds custom cabinetry and stone counters, and updates the wiring and plumbing to code. Because much of Santa Ana predates 1978, we handle lead and asbestos testing before any demo starts.",
    "mission-viejo":
      "Many Mission Viejo kitchens still reflect the city's original 1960s and 70s construction, with closed layouts and dated cabinets. We remodel them around Lake Mission Viejo and throughout the hills with fresh cabinetry, quartz counters, and open-concept layout changes. We coordinate the HOA design review and city permits that most Mission Viejo projects require.",
    "laguna-niguel":
      "In Laguna Niguel's Crown Valley and Bear Brand neighborhoods, homeowners want a kitchen that matches the quality of the home and the view. Ulloa Construction builds custom cabinetry, sets stone counters with clean seams, and reworks layouts to open the kitchen to the living areas. We handle the HOA submittals and permit packages so approvals stay on schedule.",
    "san-clemente":
      "San Clemente kitchens, from hillside homes to coastal cottages in the Spanish Village by the Sea, do best with materials suited to the marine setting. We remodel with durable cabinetry, stone counters, and open layouts that make the most of the ocean light and views. Corrosion-resistant hardware and careful detailing keep coastal kitchens looking sharp for years.",
    "dana-point":
      "Whether the home sits above Dana Point Harbor or in Monarch Beach, the kitchen is where the coastal lifestyle comes together. Ulloa Construction remodels Dana Point kitchens with custom cabinetry, stone counters, and open layouts built for entertaining, using materials that stand up to ocean humidity. We manage the permits and any HOA approvals from start to finish.",
    "san-juan-capistrano":
      "San Juan Capistrano kitchens range from historic adobes near the mission to newer homes in the equestrian neighborhoods, and each calls for its own approach. We rework layouts, add custom cabinetry and stone counters, and update aging plumbing and electrical to code. For older and historic-district homes, we handle the city's specific permit requirements carefully.",
    "aliso-viejo":
      "Aliso Viejo kitchens in the 1990s homes near the Town Center are reaching the age where a full remodel really pays off. Ulloa Construction opens up the layout, installs custom or semi-custom cabinetry, and sets quartz counters for a fresh, modern look. We manage the HOA design review that nearly every Aliso Viejo community requires.",
    brea: "Brea kitchens, from the ranch homes near Brea Olinda High School to the newer builds above Carbon Canyon, often need a layout that fits modern life. We open them up, add custom cabinetry and quartz counters, and handle the plumbing, gas, and electrical the new plan calls for. Ulloa Construction pulls the City of Brea permits and keeps the job on schedule.",
    "buena-park":
      "Many Buena Park kitchens in Whitaker Bermuda and Stoneybrook still have their original 1960s and 70s cabinets and closed-off layouts. Ulloa Construction transforms them with new cabinetry, quartz counters, and open floor plans that fit how families cook today. We handle the city permits for any layout, plumbing, or electrical changes.",
    "costa-mesa":
      "Costa Mesa kitchens range from 1940s Eastside bungalows to 1970s Mesa Verde tract homes, each with its own layout challenges. We open them up, install custom cabinetry, and set stone counters with clean seams, working confidently across every construction era in the city. Permits and trade coordination are handled in-house.",
    cypress:
      "Cypress kitchens in the city's 1960s and 70s homes are ideal candidates for a modern remodel. Ulloa Construction reworks the layout, installs new cabinetry, and sets quartz or stone counters for a kitchen that fits the way you actually cook. We manage the full permit and inspection process with the city.",
    "fountain-valley":
      "Fountain Valley's 1960s and 70s ranch homes near Mile Square Park often still have their original kitchens, closed off from the rest of the house. We open them up with new cabinetry, quartz counters, and layouts built for entertaining. Ulloa Construction handles the City of Fountain Valley permits for any plumbing, gas, or electrical work.",
    "garden-grove":
      "Garden Grove kitchens, from West Garden Grove to the neighborhoods near Euclid, span several decades of construction and layouts that no longer fit. Ulloa Construction opens them up with custom cabinetry, stone counters, and modern lighting. We move efficiently through the city's permit and inspection process for every remodel.",
    "la-habra":
      "La Habra's 1940s to 60s bungalows and ranchers often have compact, closed-off kitchens with real potential. We rework the layout, add custom cabinetry and quartz counters, and update the wiring and plumbing to code. For homes near the county line, we coordinate both City of La Habra and LA County permits.",
    "la-palma":
      "La Palma's well-kept 1960s and 70s homes usually still have their original kitchens. Ulloa Construction modernizes them with new cabinetry, stone counters, and smarter layouts that open the space up. Even on this compact city's lots, we bring full permit coordination and a licensed crew to the job.",
    "laguna-beach":
      "Laguna Beach kitchens, from 1920s Village cottages to mid-century homes above Emerald Bay, call for a design that honors the architecture. We remodel with custom cabinetry, stone counters, and layouts that capture the light and views, using materials suited to the coast. We are experienced with Laguna's design review board and coastal commission when a project needs approval.",
    "laguna-hills":
      "Laguna Hills kitchens in Nellie Gail Ranch and the Woodlands were mostly built in the 1970s and 80s and benefit hugely from a modern remodel. Ulloa Construction opens the layout, installs custom cabinetry, and sets quartz counters for a clean, current look. We coordinate any HOA design review the community requires.",
    "laguna-woods":
      "In Laguna Woods Village, kitchen remodels are about making a compact, older layout work beautifully for everyday life. We update cabinetry, counters, lighting, and flooring, often improving accessibility and storage in the process. All work is coordinated through the Village's HOA approval process and scheduled to minimize disruption for neighbors.",
    "lake-forest":
      "Lake Forest kitchens range from 1970s and 80s El Toro tract homes to newer builds in Foothill Ranch and Baker Ranch. Ulloa Construction reworks layouts, installs custom cabinetry, and sets stone counters to bring each one up to date. We handle the city permits and HOA submittals where the community requires them.",
    "los-alamitos":
      "Los Alamitos kitchens in the city's solid mid-century homes are prime candidates for a modern remodel. We open up the layout, add new cabinetry, and set quartz or stone counters for a kitchen built around how you cook and gather. For properties near the county line, we coordinate both City of Los Alamitos and LA County permits.",
    "newport-beach":
      "Newport Beach kitchens carry a high bar, whether it is a waterfront cottage on the Balboa Peninsula, a Dover Shores mid-century, or a newer estate in Newport Coast. Ulloa Construction delivers the craftsmanship those homes demand: custom cabinetry, tight stone seams, and layouts that open up to the light and views. We know the city's coastal-zone and HOA review requirements and manage the permits so your renovation stays on schedule.",
    placentia:
      "Placentia kitchens, especially in the older Craftsman and Spanish Colonial homes near Old Placentia, often need a layout that fits modern life while keeping the home's character. Ulloa Construction adds custom cabinetry, stone counters, and thoughtful layout changes, updating plumbing and electrical to code. We know the City of Placentia permit process, including projects near the historic district.",
    "rancho-santa-margarita":
      "Rancho Santa Margarita kitchens in Tesoro, Melinda Heights, and Dove Canyon were built in the late 80s and 90s and are ready for a refresh. We open the layout, install new cabinetry, and set quartz counters for a current, functional kitchen. We coordinate RSM's HOA design review as part of the project.",
    "seal-beach":
      "Seal Beach kitchens, from Old Town cottages to homes near the Surfside colony, do best with materials that handle the coastal air. Ulloa Construction remodels with durable cabinetry, stone counters, and layouts that open to the casual beach-town lifestyle. Corrosion-resistant hardware and careful detailing keep everything performing near the water.",
    stanton:
      "Stanton's 1950s and 60s homes usually still have their original kitchens, with dated cabinets and laminate counters. We transform them with new cabinetry, quartz counters, and open layouts that add real value without the cost of moving. Ulloa Construction handles the full permit and inspection process with the city.",
    tustin:
      "Tustin kitchens run from the Craftsman and Victorian homes of Old Tustin to the newer builds in Tustin Ranch and Tustin Legacy. In older homes we open up boxed-in layouts and update aging systems; in newer ones we deliver clean, modern cabinetry and stone counters. We manage the city permits and HOA submittals when the community requires them.",
    "villa-park":
      "Villa Park kitchens tend toward larger, high-end scopes that suit the city's custom homes and big lots. Ulloa Construction builds full custom cabinetry, sets premium stone counters, and reworks layouts for serious cooking and entertaining. These detailed projects benefit from a single licensed contractor coordinating every trade.",
    westminster:
      "Westminster's post-war ranch and 60s and 70s tract homes along the Bolsa corridor often still have their original kitchens. Ulloa Construction opens them up with new cabinetry, quartz counters, and better lighting for a modern, functional space. We move efficiently through the City of Westminster permit and inspection process.",
    "yorba-linda":
      "Yorba Linda kitchens, from West Yorba Linda ranchers to the custom estates in Fairmont and Bryant Ranch, are held to a high standard. We build full custom cabinetry, set premium stone counters, and rework layouts to open the kitchen to the living space. These larger scopes benefit from a single licensed general contractor managing the whole project.",
  },
  "smart-home-upgrades": {
    anaheim:
      "From the older ranch homes of West Anaheim to the newer builds in Anaheim Hills, we help homeowners across our home city add smart lighting, thermostats, cameras, and full automation. Older Anaheim homes often lack the neutral wires and circuits modern smart gear needs, and as a licensed contractor we add them safely and to code. We pull City of Anaheim electrical permits whenever the work calls for it.",
    fullerton:
      "Fullerton's mix of Craftsman bungalows and mid-century ranches makes for great smart-home candidates, though older wiring often needs attention first. Ulloa Construction installs smart lighting, thermostats, and security cameras, and handles the neutral wires, circuits, or panel work behind them. As a licensed contractor we do the electrical to code and permit it through the city when needed.",
    orange:
      "In the City of Orange, especially the older homes around Old Towne, adding smart lighting and automation usually starts with updating the wiring behind the walls. We install Lutron and Hue lighting, Nest and Ecobee thermostats, and Ring and Arlo cameras, adding neutrals and circuits where the home needs them. Every electrical upgrade is done to code and permitted through the city.",
    irvine:
      "Irvine homeowners are among the most tech-forward in Orange County, and the master-planned homes in Portola Springs, Great Park, and Cypress Village are ideal candidates for whole-home automation. Ulloa Construction installs smart lighting, thermostats, cameras, and the electrical upgrades behind them, all wired to work reliably rather than just look good in the app. As a licensed contractor we handle any panel or circuit work to code and coordinate Irvine permits when the job calls for it.",
    "huntington-beach":
      "Huntington Beach homeowners near the coast add smart cameras, doorbells, lighting, and thermostats for both convenience and security. Ulloa Construction installs it all with weather-rated, corrosion-resistant hardware suited to the marine air, plus the wiring and circuits behind it. As a licensed contractor we handle the electrical to code and permit it when required.",
    "santa-ana":
      "Santa Ana's historic homes in Floral Park and Park Santiago are wonderful candidates for smart upgrades, but their older wiring usually needs work first. We install smart lighting, thermostats, and cameras, and add the neutrals and circuits the devices require. Because much of Santa Ana predates 1978, we follow all required protocols during any electrical work.",
    "mission-viejo":
      "Mission Viejo's 1960s and 70s homes around Lake Mission Viejo are ready for smart lighting, thermostats, cameras, and automation, though older wiring often needs a neutral or a new circuit. Ulloa Construction installs the devices and handles the electrical behind them to code. We coordinate HOA requirements and city permits where the work calls for it.",
    "laguna-niguel":
      "In Laguna Niguel's hillside neighborhoods like Crown Valley and Bear Brand, homeowners want smart lighting, cameras, and whole-home automation that works reliably. We install and configure it all, adding neutrals, circuits, or panel capacity where needed. As a licensed contractor we handle the electrical to code and prepare HOA submittals when required.",
    "san-clemente":
      "San Clemente homeowners near the coast add smart cameras, doorbells, and lighting for security and convenience, with hardware that handles the marine air. Ulloa Construction installs the devices and the wiring behind them, from neutrals to new circuits. We do the electrical to code and permit it through the city when the work requires it.",
    "dana-point":
      "Dana Point homes in Monarch Beach and near the harbor are great fits for smart lighting, cameras, and automation, installed with coastal-rated hardware. We handle the wiring behind the devices, adding neutrals and circuits as needed. As a licensed contractor we do the electrical to code and manage permits and HOA approvals.",
    "san-juan-capistrano":
      "San Juan Capistrano homes, from historic adobes to newer equestrian-area builds, can absolutely support smart lighting, thermostats, and cameras, often after some wiring upgrades. Ulloa Construction installs the devices and adds the neutrals, circuits, or panel capacity they need. We handle the electrical to code and the city's permit requirements, including for older homes.",
    "aliso-viejo":
      "Aliso Viejo's 1990s homes near the Town Center are well suited to smart lighting, thermostats, cameras, and automation. We install and configure everything, adding neutrals or circuits where the home needs them. As a licensed contractor we handle the electrical to code and prepare the HOA design review these communities require.",
    brea: "Brea homeowners, from the ranch homes near Brea Olinda to the newer builds above Carbon Canyon, add smart lighting, cameras, and thermostats for comfort and security. Ulloa Construction installs the devices and handles the wiring, circuits, and panel work behind them. We do the electrical to code and pull City of Brea permits when the job calls for it.",
    "buena-park":
      "Buena Park's 1960s and 70s homes in Whitaker Bermuda and Stoneybrook make solid smart-home candidates once the older wiring is addressed. We install smart lighting, thermostats, and cameras, adding the neutrals and circuits the devices need. As a licensed contractor we handle the electrical to code and permit it through the city.",
    "costa-mesa":
      "Costa Mesa homeowners, from Eastside bungalows to Mesa Verde tract homes, add smart lighting, cameras, and automation across every construction era. Ulloa Construction installs the devices and handles the wiring behind them, adding neutrals and circuits where older homes need them. Electrical work is done to code and permitted in-house when required.",
    cypress:
      "Cypress's 1960s and 70s homes are great candidates for smart lighting, thermostats, and cameras, though the original wiring often needs a neutral or a new circuit first. We install the devices and handle the electrical behind them to code. Ulloa Construction manages the city permits whenever the work requires them.",
    "fountain-valley":
      "Fountain Valley's 1960s and 70s ranch homes near Mile Square Park are ready for smart lighting, cameras, and automation, once the older wiring is updated. Ulloa Construction installs the devices and adds the neutrals, circuits, or panel capacity they need. As a licensed contractor we handle the electrical to code and permit it through the city.",
    "garden-grove":
      "Across Garden Grove, homeowners add smart lighting, thermostats, cameras, and doorbells for convenience and peace of mind. We install the devices and handle the wiring behind them, adding neutrals and circuits where older homes need them. Ulloa Construction does the electrical to code and moves efficiently through the city's permit process.",
    "la-habra":
      "La Habra's 1940s to 60s bungalows and ranchers make good smart-home candidates once the older wiring is brought up to date. We install smart lighting, thermostats, and cameras, and add the neutrals and circuits the devices require. For homes near the county line, we handle both City of La Habra and LA County electrical permits.",
    "la-palma":
      "La Palma's well-kept 1960s and 70s homes are ready for smart lighting, thermostats, and cameras, though the original wiring may need a neutral or new circuit. Ulloa Construction installs the devices and handles the electrical behind them to code. We manage the city permits whenever the work calls for it.",
    "laguna-beach":
      "Laguna Beach homes, from Village cottages to cliffside homes above Emerald Bay, add smart lighting, cameras, and automation, often after wiring upgrades in the older structures. We install the devices and add the neutrals, circuits, or panel capacity they need. As a licensed contractor we handle the electrical to code and Laguna's design review or coastal requirements when they apply.",
    "laguna-hills":
      "Laguna Hills homes in Nellie Gail Ranch and the Woodlands, mostly built in the 1970s and 80s, are ready for smart lighting, cameras, and automation. Ulloa Construction installs the devices and handles the wiring behind them, adding neutrals and circuits where needed. We do the electrical to code and coordinate any HOA design review.",
    "laguna-woods":
      "In Laguna Woods Village, smart upgrades like voice-controlled lighting, video doorbells, and smart thermostats add real convenience and safety for residents. We install and configure everything, keeping the wiring work minimal and code-compliant in these older units. All work is coordinated through the Village's HOA approval process and scheduled around neighbors.",
    "lake-forest":
      "Lake Forest homes, from 1970s and 80s El Toro neighborhoods to newer Foothill Ranch and Baker Ranch builds, are strong smart-home candidates. Ulloa Construction installs smart lighting, thermostats, and cameras, and handles the neutrals, circuits, or panel work behind them. We do the electrical to code and manage city permits and HOA submittals where needed.",
    "los-alamitos":
      "Los Alamitos homeowners add smart lighting, cameras, and thermostats to the city's solid mid-century homes, usually after a few wiring upgrades. We install the devices and add the neutrals and circuits they need. As a licensed contractor we handle the electrical to code and coordinate both City of Los Alamitos and LA County permits near the line.",
    "newport-beach":
      "Newport Beach homeowners, from the Balboa Peninsula to Newport Coast, expect smart-home systems that are seamless and reliable. Ulloa Construction installs whole-home lighting, climate, cameras, and automation, with the wiring and panel work behind them done cleanly and to code. We handle the city's coastal-zone and HOA review, plus any electrical permits the project requires.",
    placentia:
      "Placentia's older Craftsman and Spanish Colonial homes near Old Placentia make great smart-home candidates once the wiring is updated. We install smart lighting, thermostats, and cameras, adding the neutrals and circuits the devices need. As a licensed contractor we handle the electrical to code and the City of Placentia permits, including near the historic district.",
    "rancho-santa-margarita":
      "Rancho Santa Margarita's late-80s and 90s homes in Tesoro, Melinda Heights, and Dove Canyon are well suited to smart lighting, cameras, and whole-home automation. Ulloa Construction installs the devices and handles the wiring behind them to code. We coordinate RSM's HOA design review and city permits as part of the project.",
    "seal-beach":
      "Seal Beach homeowners near the coast add smart cameras, doorbells, and lighting with weather-rated, corrosion-resistant hardware. We install the devices and handle the wiring behind them, adding neutrals and circuits where the older homes need them. As a licensed contractor we do the electrical to code and permit it through the city.",
    stanton:
      "Stanton's 1950s and 60s homes are good smart-home candidates once the older wiring is brought up to date. Ulloa Construction installs smart lighting, thermostats, and cameras, adding the neutrals and circuits the devices require. We handle the electrical to code and manage the city permits whenever the work calls for it.",
    tustin:
      "Tustin homes, from the historic houses of Old Tustin to the newer builds in Tustin Ranch, are strong candidates for smart lighting, cameras, and automation. In older homes we update wiring and add neutrals first; in newer ones the devices go in cleanly. As a licensed contractor we handle the electrical to code and any HOA or city requirements.",
    "villa-park":
      "Villa Park's large custom homes are ideal for whole-home automation, tying together lighting, climate, security, and cameras across the property. Ulloa Construction installs and configures it all, handling the circuits, neutrals, and panel capacity these larger homes need. We do the electrical to code and manage permits for the full scope.",
    westminster:
      "Westminster's post-war and 60s and 70s homes along the Bolsa corridor make solid smart-home candidates once the older wiring is updated. We install smart lighting, thermostats, and cameras, adding the neutrals and circuits the devices need. As a licensed contractor we handle the electrical to code and permit it through the city.",
    "yorba-linda":
      "Yorba Linda's custom estates in Fairmont, Hidden Hills, and Bryant Ranch are perfect for whole-home automation, from lighting and climate to security cameras across the property. Ulloa Construction installs and configures the systems and handles the circuits and panel capacity behind them. We do the electrical to code and manage HOA review and city permits for the full scope.",
  },
};

export interface CityServicePageData {
  city: string;
  citySlug: CitySlug;
  county: string;
  template: CityServiceTemplate;
  intro: string;
}

/** Returns full page data for a city+service combo, or null if not defined. */
export function getCityService(
  citySlug: string,
  serviceSlug: string,
): CityServicePageData | null {
  if (!cityServiceSlugs.includes(serviceSlug as CityServiceSlug)) return null;
  const service = serviceSlug as CityServiceSlug;
  const location = getLocation(citySlug);
  if (!location) return null;
  const intro = cityServiceIntros[service][location.slug];
  if (!intro) return null;
  return {
    city: location.name,
    citySlug: location.slug,
    county: location.county,
    template: cityServiceTemplates[service],
    intro,
  };
}

/** All city+service combos that currently have a hand-written intro. */
export function cityServiceParams(): Array<{ city: string; service: string }> {
  const params: Array<{ city: string; service: string }> = [];
  for (const service of cityServiceSlugs) {
    for (const citySlug of Object.keys(
      cityServiceIntros[service],
    ) as CitySlug[]) {
      if (cityServiceIntros[service][citySlug]) {
        params.push({ city: citySlug, service });
      }
    }
  }
  return params;
}
