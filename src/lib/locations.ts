import type { ServiceSlug } from "./services";

export type CitySlug =
  | "anaheim"
  | "fullerton"
  | "orange"
  | "irvine"
  | "huntington-beach"
  | "santa-ana";

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
      "Anaheim homes range from post-war ranch houses in West Anaheim to custom hillside builds in the 92807 zip code — and we've remodeled across all of them. We understand the seismic zone requirements, the City of Anaheim building department's inspection schedule, and the aesthetic preferences of OC homeowners who want modern, durable results without over-designed gimmicks. Call (657) 400-2896 to talk through your project with the owner directly.",
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
      "From high-end material selections to clean job-site practices that protect Irvine's manicured streets and common areas, we operate at the level Irvine projects demand. Ulloa Construction is licensed under CSLB #1144906, fully insured, and has never missed a final inspection in Irvine. Call (657) 400-2896 to speak with the owner about your Irvine remodeling project.",
    callout: "Serving Irvine and all Irvine Company planned communities across Orange County.",
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
];

export function getLocation(slug: string): LocationData | undefined {
  return locations.find((l) => l.slug === slug);
}

export const locationSlugList: CitySlug[] = locations.map((l) => l.slug);
