import type { ServiceSlug } from "./services";

export type CitySlug =
  | "anaheim"
  | "fullerton"
  | "orange"
  | "irvine"
  | "huntington-beach"
  | "santa-ana"
  | "mission-viejo"
  | "laguna-niguel"
  | "san-clemente"
  | "dana-point"
  | "san-juan-capistrano"
  | "aliso-viejo";

export interface LocationData {
  slug: CitySlug;
  name: string;
  county: string;
  para1: string;
  para2: string;
  callout: string;
}

export const allServiceSlugs: ServiceSlug[] = [
  "kitchen-remodeling",
  "bathroom-renovation",
  "flooring",
  "roofing",
  "painting",
  "drywall",
  "window-installation",
  "door-installation",
  "siding",
  "room-additions",
  "new-construction",
  "interior-remodeling",
];

export const allServiceNames: Record<ServiceSlug, string> = {
  "kitchen-remodeling": "Kitchen Remodeling",
  "bathroom-renovation": "Bathroom Renovation",
  "flooring": "Flooring Installation",
  "roofing": "Roofing",
  "painting": "Interior & Exterior Painting",
  "drywall": "Drywall Installation & Repair",
  "window-installation": "Window Installation",
  "door-installation": "Door Installation",
  "siding": "Siding Installation & Replacement",
  "room-additions": "Room Additions & ADUs",
  "new-construction": "New Home Construction",
  "interior-remodeling": "Interior Remodeling",
};

export const locations: LocationData[] = [
  {
    slug: "anaheim",
    name: "Anaheim",
    county: "Orange County",
    para1:
      "Anaheim is Ulloa Construction's home base — we've completed hundreds of projects across Anaheim Hills, the Platinum Triangle, and established neighborhoods near downtown. From kitchen remodels in the hillside estates of Anaheim Hills to full interior renovations in Canyon Terrace and Viewpointe, we know Anaheim's housing stock, its permit process, and what works for local homeowners. Our crew is on-site throughout Orange County daily, with Anaheim as our most familiar territory.",
    para2:
      "Anaheim homes range from post-war ranch houses in West Anaheim to custom hillside builds in the 92807 zip code — and we've remodeled across all of them. We understand the seismic zone requirements, the City of Anaheim building department's inspection schedule, and the aesthetic preferences of OC homeowners who want modern, durable results without over-designed gimmicks. Call (714) 487-1860 to talk through your project with the owner directly.",
    callout: "Serving Anaheim, Anaheim Hills, and all surrounding Orange County communities.",
  },
  {
    slug: "fullerton",
    name: "Fullerton",
    county: "Orange County",
    para1:
      "Fullerton's mix of Craftsman bungalows, mid-century ranches, and newer suburban builds makes it one of the most varied remodeling markets in North Orange County. Ulloa Construction has worked extensively in Fullerton — updating kitchens and bathrooms in the historic Cherrywood and Sunny Hills neighborhoods, adding ADUs in the Raymond Hills area, and delivering full interior remodels near Cal State Fullerton. We understand the City of Fullerton's permitting process and work efficiently through inspections to keep your project on schedule.",
    para2:
      "Whether your Fullerton home needs a single bathroom renovation or a whole-house overhaul that includes flooring, paint, new doors, and kitchen cabinetry, Ulloa Construction provides the licensed general contracting services to handle it all under one contract. We're licensed under CSLB #1144906, fully insured, and committed to the direct-owner communication that Fullerton homeowners consistently tell us they appreciate most.",
    callout: "Serving Fullerton and all surrounding North Orange County communities.",
  },
  {
    slug: "orange",
    name: "Orange",
    county: "Orange County",
    para1:
      "The City of Orange is one of Orange County's most charming communities — known for its historic Old Towne district, tree-lined streets, and well-preserved Craftsman and Spanish Colonial homes. Ulloa Construction works regularly throughout Orange, from kitchen and bathroom renovations near Chapman University to room additions and ADU construction in newer developments near the 55 freeway. We respect the architectural character of older Orange homes and bring the same quality of work to every project regardless of size.",
    para2:
      "Renovation projects in the City of Orange often require careful coordination with city inspectors, especially in historically significant areas. Our team is experienced in navigating local permitting requirements and coordinating with HOAs when applicable. We hold CSLB License #1144906, carry full general liability and workers' comp, and provide written estimates with clear allowances on every project.",
    callout: "Serving the City of Orange and all surrounding communities in Orange County.",
  },
  {
    slug: "irvine",
    name: "Irvine",
    county: "Orange County",
    para1:
      "Irvine homeowners expect a high standard of quality, precision, and professionalism — and Ulloa Construction delivers exactly that. We've completed kitchen remodels in Quail Hill and Turtle Ridge, luxury bathroom renovations in Shady Canyon and Portola Springs, and whole-home interior overhauls in Northwood, Woodbridge, and Orchard Hills. Irvine's master-planned communities often have HOA design review requirements, and our team is experienced in preparing submittal packages and coordinating approvals before any work begins.",
    para2:
      "From high-end material selections to clean job-site practices that protect Irvine's manicured streets and common areas, we operate at the level Irvine projects demand. Ulloa Construction is licensed under CSLB #1144906, fully insured, and has never missed a final inspection in Irvine. Call (714) 487-1860 to speak with the owner about your Irvine remodeling project.",
    callout: "Serving Irvine and nearby South OC communities including Laguna Hills, Lake Forest, Mission Viejo, Aliso Viejo, and Laguna Niguel.",
  },
  {
    slug: "huntington-beach",
    name: "Huntington Beach",
    county: "Orange County",
    para1:
      "Huntington Beach homes face unique challenges: coastal salt air, moisture infiltration, and the particular humidity that comes with living near the Pacific. Ulloa Construction has extensive experience remodeling and building in Surf City — from bathroom renovations with proper waterproofing and marine-grade fixtures to new roofing and siding installations that stand up to coastal weather. We've worked in Old Town HB, Huntington Harbour, and the master-planned communities around Seacliff and Sunset Beach.",
    para2:
      "Coastal construction in Huntington Beach requires attention to corrosion-resistant fasteners, moisture barriers, and material selection that performs in a marine environment. Our CSLB-licensed crew (#1144906) understands these requirements and specifies accordingly. Whether you need a full kitchen remodel near the beach or a room addition that takes advantage of ocean views, we handle every detail from permit to final walkthrough.",
    callout: "Serving Huntington Beach, Sunset Beach, Huntington Harbour, and surrounding coastal OC communities.",
  },
  {
    slug: "santa-ana",
    name: "Santa Ana",
    county: "Orange County",
    para1:
      "Santa Ana is one of Orange County's most historic cities — with a rich architectural legacy that includes Spanish Revival commercial buildings, early 20th-century bungalows, and mid-century residential neighborhoods that are increasingly being updated by a new generation of homeowners. Ulloa Construction works throughout Santa Ana on kitchen and bathroom remodels, flooring and interior renovations, ADU additions, and complete home renovations in neighborhoods including Floral Park, Park Santiago, and Cabrillo Park.",
    para2:
      "Santa Ana's building department has specific requirements for older homes, including careful attention to lead paint and asbestos testing for pre-1978 construction. Our team follows all required protocols, coordinates with certified abatement contractors when needed, and works through the City of Santa Ana's inspection process efficiently. We hold CSLB License #1144906, carry full insurance, and bring the same commitment to quality to every Santa Ana project.",
    callout: "Serving Santa Ana and all surrounding communities in Central Orange County.",
  },
  {
    slug: "mission-viejo",
    name: "Mission Viejo",
    county: "Orange County",
    para1:
      "Mission Viejo is one of South Orange County's most established and desirable communities — a master-planned city known for its lakefront neighborhoods, well-maintained housing stock, and strong sense of community. Ulloa Construction serves Mission Viejo homeowners with full-scope remodeling services, from kitchen and bathroom renovations in the Lake Mission Viejo corridor to room additions and ADU construction in residential neighborhoods throughout the city. We are familiar with Mission Viejo's HOA design review process and work efficiently through city permitting to keep your project on schedule.",
    para2:
      "Mission Viejo homes range from late 1960s tract homes to custom builds in the hills, and our crew has the experience to work across the full spectrum. Whether you're updating a primary bathroom with a walk-in shower and new tile or undertaking a whole-home interior remodel, Ulloa Construction provides the licensed general contracting services to handle it all under one contract. We hold CSLB License #1144906, carry full general liability and workers' comp insurance, and serve Mission Viejo and nearby communities including Laguna Hills, Lake Forest, Aliso Viejo, and Rancho Santa Margarita.",
    callout: "Serving Mission Viejo and all surrounding South Orange County communities.",
  },
  {
    slug: "laguna-niguel",
    name: "Laguna Niguel",
    county: "Orange County",
    para1:
      "Laguna Niguel sits at the heart of South Orange County — a city of rolling hills, upscale neighborhoods, and proximity to both the coast and the freeway corridor that serves South OC. Ulloa Construction works throughout Laguna Niguel on kitchen remodels, bathroom renovations, flooring installations, and room additions for homeowners who expect a high standard of quality and professional communication throughout the project. We've completed work in Crown Valley, Bear Brand, and the master-planned communities that define this part of OC.",
    para2:
      "Laguna Niguel's building department and local HOAs have specific design requirements, and our team is experienced in navigating both. We prepare complete permit packages, coordinate HOA submittals when required, and maintain clean job sites throughout the project. Ulloa Construction holds CSLB License #1144906, is fully insured, and also serves nearby Aliso Viejo, Mission Viejo, Dana Point, and Laguna Beach as part of our South OC service area.",
    callout: "Serving Laguna Niguel and all surrounding South Orange County communities.",
  },
  {
    slug: "san-clemente",
    name: "San Clemente",
    county: "Orange County",
    para1:
      "San Clemente — the Spanish Village by the Sea — is South Orange County's southernmost city, known for its Spanish Colonial architecture, surf culture, and stunning coastal location. Ulloa Construction serves San Clemente homeowners with remodeling and construction services that respect the city's architectural character while delivering modern functionality. We work on kitchen renovations in the hillside neighborhoods, bathroom remodels in coastal cottages, and room additions that take advantage of San Clemente's spectacular ocean views.",
    para2:
      "Coastal construction in San Clemente requires careful attention to materials that perform in a marine environment — corrosion-resistant fasteners, moisture barriers, and marine-grade fixtures are standard on our coastal projects. We hold CSLB License #1144906 and carry full insurance, and our team understands San Clemente's building department requirements and the special considerations for homes near the bluffs and ocean. We also serve nearby Dana Point, San Juan Capistrano, and Laguna Niguel as part of our South OC coverage.",
    callout: "Serving San Clemente and all surrounding South Orange County communities.",
  },
  {
    slug: "dana-point",
    name: "Dana Point",
    county: "Orange County",
    para1:
      "Dana Point is one of Orange County's most scenic coastal cities — home to the world-famous Dana Point Harbor, dramatic blufftop neighborhoods, and communities like Monarch Beach, Capistrano Beach, and Lantern District. Ulloa Construction serves Dana Point homeowners with kitchen and bathroom renovations, flooring and interior remodels, and room additions that maximize the coastal lifestyle. Our crews are experienced with the material requirements and moisture considerations that come with building near the Pacific.",
    para2:
      "Dana Point's combination of ocean proximity, architectural variety, and HOA oversight in some communities means remodeling projects require an experienced general contractor who can navigate the full permitting and approval process. Ulloa Construction holds CSLB License #1144906, carries full general liability and workers' comp insurance, and provides detailed written proposals on every project. We serve Dana Point and the surrounding South OC communities of San Clemente, San Juan Capistrano, Laguna Niguel, and Laguna Beach.",
    callout: "Serving Dana Point and all surrounding South Orange County communities.",
  },
  {
    slug: "san-juan-capistrano",
    name: "San Juan Capistrano",
    county: "Orange County",
    para1:
      "San Juan Capistrano is one of California's most historically significant cities — home to the famous mission, a thriving equestrian community, and a mix of historic adobe homes, modern custom builds, and established residential neighborhoods. Ulloa Construction works throughout San Juan Capistrano on kitchen and bathroom remodels, interior renovations, ADU construction, and room additions. We bring the same standard of craftsmanship to every project, whether it's a cosmetic kitchen update or a comprehensive whole-home renovation.",
    para2:
      "San Juan Capistrano's older housing stock and historic district considerations require a contractor experienced in working with existing structures that may have specific permit or preservation requirements. Our team is knowledgeable about the city's building process and coordinates all inspections in-house. Ulloa Construction holds CSLB License #1144906, is fully insured, and serves San Juan Capistrano alongside nearby Dana Point, San Clemente, Laguna Niguel, and Mission Viejo.",
    callout: "Serving San Juan Capistrano and all surrounding South Orange County communities.",
  },
  {
    slug: "aliso-viejo",
    name: "Aliso Viejo",
    county: "Orange County",
    para1:
      "Aliso Viejo is one of Orange County's newest incorporated cities — a planned community with a strong sense of neighborhood identity, excellent schools, and a mix of townhomes, condos, and single-family homes across communities like Aliso Viejo Town Center and the neighborhoods surrounding Aliso and Wood Canyons Wilderness Park. Ulloa Construction serves Aliso Viejo homeowners with kitchen remodels, bathroom renovations, flooring installations, interior remodels, and room additions. Our team is well-versed in HOA coordination and the specific design standards common throughout Aliso Viejo's planned communities.",
    para2:
      "Aliso Viejo's building department and active HOA landscape require a general contractor who understands the approval process from end to end. We prepare and submit complete permit applications, coordinate with HOA design review boards when needed, and maintain clear communication throughout the project. Ulloa Construction holds CSLB License #1144906 and carries full insurance. We serve Aliso Viejo and the surrounding South OC communities of Laguna Niguel, Laguna Hills, Mission Viejo, and Laguna Beach.",
    callout: "Serving Aliso Viejo and all surrounding South Orange County communities.",
  },
];

export function getLocation(slug: string): LocationData | undefined {
  return locations.find((l) => l.slug === slug);
}

export const locationSlugList: CitySlug[] = locations.map((l) => l.slug);
