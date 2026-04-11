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
  | "aliso-viejo"
  | "brea"
  | "buena-park"
  | "costa-mesa"
  | "cypress"
  | "fountain-valley"
  | "garden-grove"
  | "la-habra"
  | "la-palma"
  | "laguna-beach"
  | "laguna-hills"
  | "laguna-woods"
  | "lake-forest"
  | "los-alamitos"
  | "newport-beach"
  | "placentia"
  | "rancho-santa-margarita"
  | "seal-beach"
  | "stanton"
  | "tustin"
  | "villa-park"
  | "westminster"
  | "yorba-linda";

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
      "Anaheim is Ulloa Construction's home base. We've completed hundreds of projects across Anaheim Hills, the Platinum Triangle, and established neighborhoods near downtown. From kitchen remodels in the hillside estates of Anaheim Hills to full interior renovations in Canyon Terrace and Viewpointe, we know Anaheim's housing stock, its permit process, and what works for local homeowners. Our crew is on-site throughout Orange County daily, with Anaheim as our most familiar territory.",
    para2:
      "Anaheim homes range from post-war ranch houses in West Anaheim to custom hillside builds in the 92807 zip code. We've remodeled across all of them. We understand the seismic zone requirements, the City of Anaheim building department's inspection schedule, and the aesthetic preferences of OC homeowners who want modern, durable results without over-designed gimmicks. Call (714) 487-1860 to talk through your project with the owner directly.",
    callout: "Serving Anaheim, Anaheim Hills, and all surrounding Orange County communities.",
  },
  {
    slug: "fullerton",
    name: "Fullerton",
    county: "Orange County",
    para1:
      "Fullerton's mix of Craftsman bungalows, mid-century ranches, and newer suburban builds makes it one of the most varied remodeling markets in North Orange County. Ulloa Construction has worked extensively in Fullerton, updating kitchens and bathrooms in the historic Cherrywood and Sunny Hills neighborhoods, adding ADUs in the Raymond Hills area, and delivering full interior remodels near Cal State Fullerton. We understand the City of Fullerton's permitting process and work efficiently through inspections to keep your project on schedule.",
    para2:
      "Whether your Fullerton home needs a single bathroom renovation or a whole-house overhaul that includes flooring, paint, new doors, and kitchen cabinetry, Ulloa Construction provides the licensed general contracting services to handle it all under one contract. We're licensed under CSLB #1144906, fully insured, and committed to the direct-owner communication that Fullerton homeowners consistently tell us they appreciate most.",
    callout: "Serving Fullerton and all surrounding North Orange County communities.",
  },
  {
    slug: "orange",
    name: "Orange",
    county: "Orange County",
    para1:
      "The City of Orange is one of Orange County's most charming communities, known for its historic Old Towne district, tree-lined streets, and well-preserved Craftsman and Spanish Colonial homes. Ulloa Construction works regularly throughout Orange, from kitchen and bathroom renovations near Chapman University to room additions and ADU construction in newer developments near the 55 freeway. We respect the architectural character of older Orange homes and bring the same quality of work to every project regardless of size.",
    para2:
      "Renovation projects in the City of Orange often require careful coordination with city inspectors, especially in historically significant areas. Our team is experienced in navigating local permitting requirements and coordinating with HOAs when applicable. We hold CSLB License #1144906, carry full general liability and workers' comp, and provide written estimates with clear allowances on every project.",
    callout: "Serving the City of Orange and all surrounding communities in Orange County.",
  },
  {
    slug: "irvine",
    name: "Irvine",
    county: "Orange County",
    para1:
      "Irvine homeowners expect a high standard of quality, precision, and professionalism. Ulloa Construction delivers exactly that. We've completed kitchen remodels in Quail Hill and Turtle Ridge, luxury bathroom renovations in Shady Canyon and Portola Springs, and whole-home interior overhauls in Northwood, Woodbridge, and Orchard Hills. Irvine's master-planned communities often have HOA design review requirements, and our team is experienced in preparing submittal packages and coordinating approvals before any work begins.",
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
      "Santa Ana is one of Orange County's most historic cities, with a rich architectural legacy that includes Spanish Revival commercial buildings, early 20th-century bungalows, and mid-century residential neighborhoods that are increasingly being updated by a new generation of homeowners. Ulloa Construction works throughout Santa Ana on kitchen and bathroom remodels, flooring and interior renovations, ADU additions, and complete home renovations in neighborhoods including Floral Park, Park Santiago, and Cabrillo Park.",
    para2:
      "Santa Ana's building department has specific requirements for older homes, including careful attention to lead paint and asbestos testing for pre-1978 construction. Our team follows all required protocols, coordinates with certified abatement contractors when needed, and works through the City of Santa Ana's inspection process efficiently. We hold CSLB License #1144906, carry full insurance, and bring the same commitment to quality to every Santa Ana project.",
    callout: "Serving Santa Ana and all surrounding communities in Central Orange County.",
  },
  {
    slug: "mission-viejo",
    name: "Mission Viejo",
    county: "Orange County",
    para1:
      "Mission Viejo is one of South Orange County's most established and desirable communities, a master-planned city known for its lakefront neighborhoods, well-maintained housing stock, and strong sense of community. Ulloa Construction serves Mission Viejo homeowners with full-scope remodeling services, from kitchen and bathroom renovations in the Lake Mission Viejo corridor to room additions and ADU construction in residential neighborhoods throughout the city. We are familiar with Mission Viejo's HOA design review process and work efficiently through city permitting to keep your project on schedule.",
    para2:
      "Mission Viejo homes range from late 1960s tract homes to custom builds in the hills, and our crew has the experience to work across the full spectrum. Whether you're updating a primary bathroom with a walk-in shower and new tile or undertaking a whole-home interior remodel, Ulloa Construction provides the licensed general contracting services to handle it all under one contract. We hold CSLB License #1144906, carry full general liability and workers' comp insurance, and serve Mission Viejo and nearby communities including Laguna Hills, Lake Forest, Aliso Viejo, and Rancho Santa Margarita.",
    callout: "Serving Mission Viejo and all surrounding South Orange County communities.",
  },
  {
    slug: "laguna-niguel",
    name: "Laguna Niguel",
    county: "Orange County",
    para1:
      "Laguna Niguel sits at the heart of South Orange County, a city of rolling hills, upscale neighborhoods, and proximity to both the coast and the freeway corridor that serves South OC. Ulloa Construction works throughout Laguna Niguel on kitchen remodels, bathroom renovations, flooring installations, and room additions for homeowners who expect a high standard of quality and professional communication throughout the project. We've completed work in Crown Valley, Bear Brand, and the master-planned communities that define this part of OC.",
    para2:
      "Laguna Niguel's building department and local HOAs have specific design requirements, and our team is experienced in navigating both. We prepare complete permit packages, coordinate HOA submittals when required, and maintain clean job sites throughout the project. Ulloa Construction holds CSLB License #1144906, is fully insured, and also serves nearby Aliso Viejo, Mission Viejo, Dana Point, and Laguna Beach as part of our South OC service area.",
    callout: "Serving Laguna Niguel and all surrounding South Orange County communities.",
  },
  {
    slug: "san-clemente",
    name: "San Clemente",
    county: "Orange County",
    para1:
      "San Clemente, known as the Spanish Village by the Sea, is South Orange County's southernmost city, known for its Spanish Colonial architecture, surf culture, and stunning coastal location. Ulloa Construction serves San Clemente homeowners with remodeling and construction services that respect the city's architectural character while delivering modern functionality. We work on kitchen renovations in the hillside neighborhoods, bathroom remodels in coastal cottages, and room additions that take advantage of San Clemente's spectacular ocean views.",
    para2:
      "Coastal construction in San Clemente requires careful attention to materials that perform in a marine environment. Corrosion-resistant fasteners, moisture barriers, and marine-grade fixtures are standard on our coastal projects. We hold CSLB License #1144906 and carry full insurance, and our team understands San Clemente's building department requirements and the special considerations for homes near the bluffs and ocean. We also serve nearby Dana Point, San Juan Capistrano, and Laguna Niguel as part of our South OC coverage.",
    callout: "Serving San Clemente and all surrounding South Orange County communities.",
  },
  {
    slug: "dana-point",
    name: "Dana Point",
    county: "Orange County",
    para1:
      "Dana Point is one of Orange County's most scenic coastal cities, home to the world-famous Dana Point Harbor, dramatic blufftop neighborhoods, and communities like Monarch Beach, Capistrano Beach, and Lantern District. Ulloa Construction serves Dana Point homeowners with kitchen and bathroom renovations, flooring and interior remodels, and room additions that maximize the coastal lifestyle. Our crews are experienced with the material requirements and moisture considerations that come with building near the Pacific.",
    para2:
      "Dana Point's combination of ocean proximity, architectural variety, and HOA oversight in some communities means remodeling projects require an experienced general contractor who can navigate the full permitting and approval process. Ulloa Construction holds CSLB License #1144906, carries full general liability and workers' comp insurance, and provides detailed written proposals on every project. We serve Dana Point and the surrounding South OC communities of San Clemente, San Juan Capistrano, Laguna Niguel, and Laguna Beach.",
    callout: "Serving Dana Point and all surrounding South Orange County communities.",
  },
  {
    slug: "san-juan-capistrano",
    name: "San Juan Capistrano",
    county: "Orange County",
    para1:
      "San Juan Capistrano is one of California's most historically significant cities, home to the famous mission, a thriving equestrian community, and a mix of historic adobe homes, modern custom builds, and established residential neighborhoods. Ulloa Construction works throughout San Juan Capistrano on kitchen and bathroom remodels, interior renovations, ADU construction, and room additions. We bring the same standard of craftsmanship to every project, whether it's a cosmetic kitchen update or a comprehensive whole-home renovation.",
    para2:
      "San Juan Capistrano's older housing stock and historic district considerations require a contractor experienced in working with existing structures that may have specific permit or preservation requirements. Our team is knowledgeable about the city's building process and coordinates all inspections in-house. Ulloa Construction holds CSLB License #1144906, is fully insured, and serves San Juan Capistrano alongside nearby Dana Point, San Clemente, Laguna Niguel, and Mission Viejo.",
    callout: "Serving San Juan Capistrano and all surrounding South Orange County communities.",
  },
  {
    slug: "aliso-viejo",
    name: "Aliso Viejo",
    county: "Orange County",
    para1:
      "Aliso Viejo is one of Orange County's newest incorporated cities, a planned community with a strong sense of neighborhood identity, excellent schools, and a mix of townhomes, condos, and single-family homes across communities like Aliso Viejo Town Center and the neighborhoods surrounding Aliso and Wood Canyons Wilderness Park. Ulloa Construction serves Aliso Viejo homeowners with kitchen remodels, bathroom renovations, flooring installations, interior remodels, and room additions. Our team is well-versed in HOA coordination and the specific design standards common throughout Aliso Viejo's planned communities.",
    para2:
      "Aliso Viejo's building department and active HOA landscape require a general contractor who understands the approval process from end to end. We prepare and submit complete permit applications, coordinate with HOA design review boards when needed, and maintain clear communication throughout the project. Ulloa Construction holds CSLB License #1144906 and carries full insurance. We serve Aliso Viejo and the surrounding South OC communities of Laguna Niguel, Laguna Hills, Mission Viejo, and Laguna Beach.",
    callout: "Serving Aliso Viejo and all surrounding South Orange County communities.",
  },
  {
    slug: "brea",
    name: "Brea",
    county: "Orange County",
    para1:
      "Brea is one of North Orange County's most livable cities, a community known for its revitalized downtown, the Brea Mall corridor, and a mix of post-war ranch homes, 1970s tract developments, and newer custom builds in the hills above Carbon Canyon. Ulloa Construction works throughout Brea on kitchen and bathroom renovations, flooring installations, interior remodels, and room additions. We serve homeowners in zip codes 92821 and 92823, from established neighborhoods near Brea Olinda High School to the more recent developments along Lambert Road.",
    para2:
      "Brea's housing stock includes a wide range of construction eras — older ranchers that benefit from updated kitchens and baths, and mid-century homes that are increasingly being transformed with open-concept layouts and modern finishes. Our CSLB-licensed crew (#1144906) is experienced with the City of Brea's building and permit process and serves Brea alongside neighboring Fullerton, Placentia, and La Habra as part of our North Orange County coverage.",
    callout: "Serving Brea and all surrounding North Orange County communities.",
  },
  {
    slug: "buena-park",
    name: "Buena Park",
    county: "Orange County",
    para1:
      "Buena Park is a well-established city in northwest Orange County, home to Knott's Berry Farm, a busy commercial corridor along Beach Boulevard, and a large stock of post-war and 1960s–70s residential homes. Ulloa Construction serves Buena Park homeowners in zip codes 90620 and 90621 with kitchen remodels, bathroom renovations, flooring upgrades, interior remodeling, and room additions. We work throughout neighborhoods including Whitaker Bermuda, Stoneybrook, and the residential streets south of La Palma Avenue.",
    para2:
      "Many Buena Park homes are prime candidates for modernization — original kitchens with dated cabinetry, bathrooms with older fixtures, and interiors that can benefit from updated flooring and fresh layouts. Our team brings the same licensed, insured craftsmanship (CSLB #1144906) to every Buena Park project, working efficiently through the city's permitting process to keep projects on schedule. We also serve neighboring Anaheim, Fullerton, La Palma, and Cypress.",
    callout: "Serving Buena Park and all surrounding North Orange County communities.",
  },
  {
    slug: "costa-mesa",
    name: "Costa Mesa",
    county: "Orange County",
    para1:
      "Costa Mesa sits at the heart of central Orange County, a city with an eclectic character that includes the South Coast Plaza shopping district, the Eastside neighborhood of craftsman and mid-century homes, and Mesa Verde's well-maintained suburban streets. Ulloa Construction serves Costa Mesa homeowners in zip codes 92626, 92627, and 92628 with kitchen remodels, bathroom renovations, flooring installations, ADU additions, and full interior renovations. We've worked in the historic Eastside as well as the newer developments closer to the 405 and 73 freeways.",
    para2:
      "Costa Mesa's diverse housing stock — from 1940s bungalows on the Eastside to 1970s tract homes in Mesa Verde and contemporary builds near Segerstrom Center — means every project requires a contractor experienced across multiple construction eras. Ulloa Construction holds CSLB License #1144906, carries full insurance, and works seamlessly through Costa Mesa's building and permit process. We also serve nearby Newport Beach, Huntington Beach, Irvine, and Santa Ana.",
    callout: "Serving Costa Mesa and all surrounding central Orange County communities.",
  },
  {
    slug: "cypress",
    name: "Cypress",
    county: "Orange County",
    para1:
      "Cypress is a compact, primarily residential city in northwest Orange County — bordered by Buena Park, La Palma, Garden Grove, and Los Alamitos. Home to Cypress College and a network of well-established single-family neighborhoods, Cypress offers a stable housing market where homeowners invest in quality remodeling rather than relocation. Ulloa Construction serves Cypress (zip code 90630) with kitchen renovations, bathroom remodels, flooring upgrades, interior remodeling, and room additions for homeowners throughout the city.",
    para2:
      "Cypress homes are predominantly from the 1960s and 1970s and are well-suited for modernization — updated kitchens with new cabinetry and countertops, bathrooms renovated with walk-in showers and contemporary tile, and whole-home flooring replacements that transform the feel of the space. Our CSLB-licensed crew (#1144906) handles the full scope, from design coordination through permit and final inspection. We serve Cypress alongside neighboring Buena Park, La Palma, Los Alamitos, and Garden Grove.",
    callout: "Serving Cypress and all surrounding North Orange County communities.",
  },
  {
    slug: "fountain-valley",
    name: "Fountain Valley",
    county: "Orange County",
    para1:
      "Fountain Valley, proudly dubbed 'A Nice Place to Live', is a mid-Orange County city known for its excellent schools, quiet residential streets, and large 1960s–70s ranch and tract homes that are increasingly popular with homeowners ready to invest in renovation. Ulloa Construction serves Fountain Valley (zip code 92708) with kitchen remodels, bathroom renovations, flooring installations, interior renovations, and room additions. We work throughout neighborhoods near Mile Square Park, Masuda Middle School, and the Edinger corridor.",
    para2:
      "Fountain Valley homes from the 1960s and early 1970s often feature original kitchens and baths that are ripe for transformation — and our crews deliver modern results that respect the character of these well-built homes. We hold CSLB License #1144906, carry full general liability and workers' comp insurance, and are thoroughly familiar with the City of Fountain Valley's building department requirements. We also serve neighboring Huntington Beach, Westminster, Garden Grove, and Costa Mesa.",
    callout: "Serving Fountain Valley and all surrounding central Orange County communities.",
  },
  {
    slug: "garden-grove",
    name: "Garden Grove",
    county: "Orange County",
    para1:
      "Garden Grove is one of Orange County's largest and most diverse cities, a community with deep roots, a vibrant Little Saigon corridor along Bolsa Avenue, and a broad range of residential neighborhoods spanning zip codes 92840 through 92845. Ulloa Construction works throughout Garden Grove on kitchen and bathroom renovations, flooring and interior remodels, room additions, and ADU construction. We serve homeowners in West Garden Grove, the streets near Euclid and Garden Grove Boulevard, and neighborhoods throughout the city.",
    para2:
      "Garden Grove's housing stock spans several decades of construction — from the post-war ranch homes of the 1950s to 1970s tract neighborhoods and more recent infill development. Our CSLB-licensed crew (#1144906) handles all eras of residential construction and works efficiently through Garden Grove's building department permitting process. We serve Garden Grove alongside neighboring Anaheim, Santa Ana, Westminster, Stanton, and Fountain Valley.",
    callout: "Serving Garden Grove and all surrounding central Orange County communities.",
  },
  {
    slug: "la-habra",
    name: "La Habra",
    county: "Orange County",
    para1:
      "La Habra occupies the northeast corner of Orange County, a city with a distinct small-town feel, a historic downtown on Whittier Boulevard, and a housing stock that includes 1940s–60s bungalows in the flats, mid-century ranchers throughout the core, and newer hillside builds near the La Habra Heights border. Ulloa Construction serves La Habra (zip code 90631) with kitchen remodels, bathroom renovations, flooring, interior remodeling, and room additions. We work throughout established neighborhoods like the streets north of La Habra High School and the quieter residential areas near Portola Park.",
    para2:
      "La Habra's older housing stock provides excellent opportunities for meaningful renovation — kitchens that benefit from new cabinetry, bathrooms upgraded with modern tile and fixtures, and interiors that open up beautifully with new flooring and fresh paint. Our licensed crew (CSLB #1144906) is experienced in navigating both the City of La Habra and Los Angeles County permitting requirements for projects near the county line. We serve La Habra alongside neighboring Brea, Fullerton, and Buena Park.",
    callout: "Serving La Habra and all surrounding North Orange County communities.",
  },
  {
    slug: "la-palma",
    name: "La Palma",
    county: "Orange County",
    para1:
      "La Palma is one of Orange County's smallest incorporated cities, a tightly knit planned community in north-central OC known for its manicured streets, strong homeowner pride, and predominantly 1960s–70s single-family housing stock. Ulloa Construction serves La Palma (zip code 90623) with kitchen remodels, bathroom renovations, flooring installations, interior updates, and room additions. Though the city is compact, our crew brings full general contracting capabilities to every La Palma project, handling permits, inspections, and all trade coordination.",
    para2:
      "La Palma's homes are well-maintained but often still carry original kitchens and bathrooms from their construction era — ideal candidates for modern renovations that increase both livability and value. We hold CSLB License #1144906, carry full insurance, and work with the City of La Palma's building department to ensure all work is properly permitted and inspected. We serve La Palma alongside neighboring Buena Park, Cypress, and Cerritos.",
    callout: "Serving La Palma and all surrounding North Orange County communities.",
  },
  {
    slug: "laguna-beach",
    name: "Laguna Beach",
    county: "Orange County",
    para1:
      "Laguna Beach is one of California's most iconic coastal communities, a city defined by dramatic blufftop views, a renowned arts scene, and an architectural landscape that ranges from historic 1920s cottages in the Village to mid-century modern cliffside homes and contemporary estates above Emerald Bay and Irvine Cove. Ulloa Construction serves Laguna Beach homeowners in zip codes 92651 and 92652 with kitchen remodels, bathroom renovations, ADU additions, and interior renovations that respect the unique character of each home and neighborhood.",
    para2:
      "Remodeling in Laguna Beach requires a contractor who understands the city's strict design review process, coastal commission requirements, and the specific material and construction demands of a marine environment. Our CSLB-licensed crew (#1144906) is experienced with corrosion-resistant construction details, HOA coordination in Emerald Bay and other gated communities, and navigating Laguna Beach's design review board for projects requiring architectural approval. We also serve nearby Laguna Niguel, Dana Point, and Aliso Viejo.",
    callout: "Serving Laguna Beach and all surrounding South Orange County communities.",
  },
  {
    slug: "laguna-hills",
    name: "Laguna Hills",
    county: "Orange County",
    para1:
      "Laguna Hills is a planned community in South Orange County, a city that developed rapidly in the 1970s and 1980s with a mix of single-family homes, townhomes, and condo communities along the Moulton Parkway and El Toro Road corridors. Ulloa Construction serves Laguna Hills homeowners in zip codes 92653 and 92656 with kitchen remodels, bathroom renovations, flooring upgrades, interior remodeling, and room additions. We work throughout neighborhoods including Nellie Gail Ranch, Woodlands, and the established residential streets near Laguna Hills High School.",
    para2:
      "Laguna Hills homes from the 1970s and 1980s often benefit significantly from targeted renovations — updated kitchens with new cabinetry and quartz countertops, master bathrooms transformed with walk-in showers and modern fixtures, and whole-home flooring replacements. Our CSLB-licensed crew (#1144906) handles all of it, including coordination with any applicable HOA design review requirements. We serve Laguna Hills alongside neighboring Mission Viejo, Aliso Viejo, Laguna Niguel, and Lake Forest.",
    callout: "Serving Laguna Hills and all surrounding South Orange County communities.",
  },
  {
    slug: "laguna-woods",
    name: "Laguna Woods",
    county: "Orange County",
    para1:
      "Laguna Woods, formerly part of the renowned Leisure World retirement community, is a master-planned city in South Orange County, home to thousands of residents in a well-established network of condominiums, villas, and cooperative units managed by a network of HOAs within the larger Laguna Woods Village association. Ulloa Construction serves Laguna Woods (zip code 92637) with interior renovations, kitchen and bathroom remodels, flooring installations, and accessibility upgrades that help residents remain comfortable and independent in their homes.",
    para2:
      "Remodeling within Laguna Woods Village requires careful coordination with the multiple HOAs and the Village's architectural approval process. Our CSLB-licensed crew (#1144906) is experienced working within the community's established procedures, scheduling work to minimize disruption to neighbors, and using materials and methods that comply with HOA guidelines. We serve Laguna Woods alongside nearby Laguna Hills, Mission Viejo, Aliso Viejo, and Laguna Niguel.",
    callout: "Serving Laguna Woods and all surrounding South Orange County communities.",
  },
  {
    slug: "lake-forest",
    name: "Lake Forest",
    county: "Orange County",
    para1:
      "Lake Forest, which incorporates the former El Toro area, is one of South Orange County's larger cities, featuring an extensive network of planned communities, established neighborhoods, and newer developments near the Foothill Ranch and Baker Ranch areas. Ulloa Construction serves Lake Forest homeowners in zip code 92630 with kitchen remodels, bathroom renovations, flooring, interior remodeling, ADU additions, and room additions. We work across the city from the original El Toro neighborhoods to the newer builds in Baker Ranch.",
    para2:
      "Lake Forest's housing spans several decades — 1970s–80s tract homes in older El Toro neighborhoods that benefit from modernization, and newer construction in planned communities like Foothill Ranch and Baker Ranch where HOA coordination is part of the process. Our team holds CSLB License #1144906, carries full insurance, and handles the permit process with the City of Lake Forest from application through final inspection. We serve Lake Forest alongside neighboring Mission Viejo, Laguna Hills, Aliso Viejo, and Irvine.",
    callout: "Serving Lake Forest and all surrounding South Orange County communities.",
  },
  {
    slug: "los-alamitos",
    name: "Los Alamitos",
    county: "Orange County",
    para1:
      "Los Alamitos is a small, close-knit city straddling the Orange and Los Angeles county line, known for its well-regarded school district, quiet tree-lined streets, and a mix of post-war homes, 1960s–70s ranchers, and newer infill builds throughout its compact residential neighborhoods. Ulloa Construction serves Los Alamitos (zip code 90720) with kitchen remodels, bathroom renovations, flooring upgrades, interior renovations, and room additions. We work throughout the city's neighborhoods including those near Los Alamitos High School and the older residential areas near Katella Avenue.",
    para2:
      "Los Alamitos homes are often well-maintained but carry original kitchens and bathrooms from their construction era — the perfect canvas for renovations that modernize the space while preserving the character of these solid mid-century builds. Our CSLB-licensed crew (#1144906) handles the entire project, including coordination with both the City of Los Alamitos and applicable LA County permit jurisdictions for properties near the county line. We serve Los Alamitos alongside neighboring Seal Beach, Cypress, Garden Grove, and Long Beach.",
    callout: "Serving Los Alamitos and all surrounding northwest Orange County communities.",
  },
  {
    slug: "newport-beach",
    name: "Newport Beach",
    county: "Orange County",
    para1:
      "Newport Beach is one of Southern California's most prestigious coastal cities, home to Newport Harbor, the Balboa Peninsula, exclusive communities like Dover Shores, Harbor Ridge, and Newport Coast, and a diverse mix of architectural styles ranging from charming waterfront cottages to contemporary estate homes. Ulloa Construction serves Newport Beach homeowners in zip codes 92660, 92661, 92662, and 92663 with full-scope remodeling services including kitchen renovations, luxury bathroom remodels, interior overhauls, ADU construction, and room additions.",
    para2:
      "Newport Beach projects demand the highest standard of craftsmanship, material quality, and professionalism. That is precisely what Ulloa Construction delivers. We are experienced with Newport Beach's building and planning departments, coastal commission requirements for properties within the coastal zone, and HOA design review in communities throughout the city. We hold CSLB License #1144906, carry full general liability and workers' comp insurance, and serve Newport Beach alongside neighboring Costa Mesa, Irvine, and Laguna Beach.",
    callout: "Serving Newport Beach and all surrounding Orange County communities.",
  },
  {
    slug: "placentia",
    name: "Placentia",
    county: "Orange County",
    para1:
      "Placentia is a historic North Orange County city, one of the region's oldest communities, with a charming downtown district, a mix of early 20th-century Craftsman homes, mid-century ranchers, and newer suburban developments near the 57 freeway. Ulloa Construction serves Placentia (zip code 92870) with kitchen remodels, bathroom renovations, flooring, interior renovations, and room additions. We work throughout the city's neighborhoods, from the tree-lined streets of Old Placentia near Bradford Avenue to newer residential areas in the Valencia and Golden Avenue corridors.",
    para2:
      "Placentia's older housing stock — including Craftsman and Spanish Colonial homes near the downtown historic district — requires a contractor experienced in working with existing structures and permit requirements for historically significant properties. Our CSLB-licensed crew (#1144906) is familiar with the City of Placentia's building department process and brings the same standard of licensed, insured craftsmanship to every project. We serve Placentia alongside neighboring Fullerton, Brea, Anaheim, and Yorba Linda.",
    callout: "Serving Placentia and all surrounding North Orange County communities.",
  },
  {
    slug: "rancho-santa-margarita",
    name: "Rancho Santa Margarita",
    county: "Orange County",
    para1:
      "Rancho Santa Margarita is one of South Orange County's newest incorporated cities — a master-planned community built largely in the 1980s and 1990s around the man-made Rancho Santa Margarita Lake, featuring a network of planned neighborhoods, excellent schools, and a strong HOA-governed community identity. Ulloa Construction serves Rancho Santa Margarita (zip code 92688) with kitchen remodels, bathroom renovations, flooring installations, interior updates, and room additions. We work throughout RSM's neighborhoods including Tesoro, Melinda Heights, Dove Canyon, and the areas surrounding the town center.",
    para2:
      "Rancho Santa Margarita homes built in the late 1980s and early 1990s are entering their prime renovation window — kitchens and baths that are functionally sound but aesthetically dated, and interiors that benefit from updated flooring, lighting, and modern finishes. Our team holds CSLB License #1144906 and is experienced coordinating with Rancho Santa Margarita's HOA design review process. We serve RSM alongside neighboring Mission Viejo, Coto de Caza, Laguna Hills, and Aliso Viejo.",
    callout: "Serving Rancho Santa Margarita and all surrounding South Orange County communities.",
  },
  {
    slug: "seal-beach",
    name: "Seal Beach",
    county: "Orange County",
    para1:
      "Seal Beach is Orange County's northernmost coastal city, a relaxed beach town with a historic Old Town district of beach cottages and bungalows, the large Leisure World retirement community (now partially within Los Alamitos jurisdiction), and newer waterfront homes along the Seal Beach and Surfside colony areas. Ulloa Construction serves Seal Beach (zip code 90740) with kitchen remodels, bathroom renovations, interior renovations, flooring installations, and room additions. We understand the coastal construction requirements that come with proximity to the Pacific.",
    para2:
      "Seal Beach's coastal location demands careful material selection — corrosion-resistant fasteners, moisture barriers, marine-grade fixtures, and coatings that withstand salt air. Our CSLB-licensed crew (#1144906) specifies accordingly on every project near the coast. We also coordinate with Seal Beach's building department and, where applicable, HOA design standards in communities throughout the city. We serve Seal Beach alongside neighboring Long Beach, Los Alamitos, Huntington Beach, and Cypress.",
    callout: "Serving Seal Beach and all surrounding northwest Orange County communities.",
  },
  {
    slug: "stanton",
    name: "Stanton",
    county: "Orange County",
    para1:
      "Stanton is a small, densely residential city in north-central Orange County, bordered by Anaheim, Garden Grove, Buena Park, and Cypress. Despite its compact footprint, Stanton has a significant base of single-family homes from the 1950s and 1960s that represent excellent remodeling opportunities for homeowners who want modern functionality without a disruptive move. Ulloa Construction serves Stanton (zip code 90680) with kitchen and bathroom renovations, flooring upgrades, interior remodels, and room additions throughout the city.",
    para2:
      "Stanton homes are often original construction — kitchens with dated cabinetry and laminate countertops, bathrooms with original tile, and interiors that transform dramatically with new flooring and updated layouts. Our CSLB-licensed crew (#1144906) is familiar with Stanton's building department and provides full permit coordination on every project. We serve Stanton alongside neighboring Anaheim, Garden Grove, Buena Park, and Cypress.",
    callout: "Serving Stanton and all surrounding North Orange County communities.",
  },
  {
    slug: "tustin",
    name: "Tustin",
    county: "Orange County",
    para1:
      "Tustin is a city with two distinct faces: historic Old Tustin, with its charming tree-lined streets, Victorian-era homes, and Craftsman bungalows near the downtown EI Camino Real corridor; and the newer Tustin Ranch and Tustin Legacy communities east of the 55 freeway, featuring master-planned residential neighborhoods and contemporary builds. Ulloa Construction serves Tustin homeowners in zip codes 92780 and 92782 with kitchen remodels, bathroom renovations, flooring, interior renovations, ADU additions, and room additions across both the historic and newer parts of the city.",
    para2:
      "Old Tustin's historic homes require a contractor experienced in working with older structures — understanding original framing, plumbing, and electrical systems and bringing them up to code while preserving the character of the home. In Tustin Ranch, HOA design review is part of the process, and our team manages all submittals and approvals. We hold CSLB License #1144906, carry full insurance, and serve Tustin alongside neighboring Irvine, Orange, Santa Ana, and Anaheim.",
    callout: "Serving Tustin and all surrounding central Orange County communities.",
  },
  {
    slug: "villa-park",
    name: "Villa Park",
    county: "Orange County",
    para1:
      "Villa Park is one of Orange County's smallest and most exclusive cities, a community of large lots, custom and semi-custom homes, equestrian properties, and tree-lined streets that have made it a destination for homeowners who value privacy, space, and quality. Ulloa Construction serves Villa Park (zip code 92861) with high-end kitchen remodels, luxury bathroom renovations, interior renovations, room additions, and ADU construction for homeowners who expect the same level of precision and quality in their contractor that they bring to every other aspect of their home.",
    para2:
      "Villa Park projects often involve larger scopes — full kitchen overhauls with custom cabinetry, spa bathrooms with premium tile and fixtures, and room additions that require careful attention to the existing home's architecture. Our CSLB-licensed crew (#1144906) brings the management skills and trade coordination to handle complex, multi-phase renovations. We serve Villa Park alongside neighboring Orange, Anaheim Hills, Anaheim, and Placentia.",
    callout: "Serving Villa Park and all surrounding central Orange County communities.",
  },
  {
    slug: "westminster",
    name: "Westminster",
    county: "Orange County",
    para1:
      "Westminster is the cultural heart of Little Saigon, home to one of the largest Vietnamese-American communities in the United States, a vibrant commercial district along Bolsa Avenue, and a broad residential base of post-war ranch homes, 1960s–70s tract neighborhoods, and newer infill construction. Ulloa Construction serves Westminster (zip code 92683) with kitchen remodels, bathroom renovations, flooring installations, interior renovations, and room additions for homeowners throughout the city.",
    para2:
      "Westminster's older housing stock offers significant renovation potential — original kitchens and bathrooms that benefit from modern updates, and interiors that open up with new flooring, updated lighting, and contemporary finishes. Our CSLB-licensed crew (#1144906) is experienced with the City of Westminster's building and permit process and works efficiently through inspections to keep projects on schedule. We serve Westminster alongside neighboring Garden Grove, Fountain Valley, Huntington Beach, and Seal Beach.",
    callout: "Serving Westminster and all surrounding central Orange County communities.",
  },
  {
    slug: "yorba-linda",
    name: "Yorba Linda",
    county: "Orange County",
    para1:
      "Yorba Linda, birthplace of President Richard Nixon and home to the Nixon Presidential Library, is one of North Orange County's most affluent and desirable communities. Known for its rolling hills, horse properties, excellent schools, and a housing stock that ranges from mid-century ranchers in the older West Yorba Linda neighborhoods to newer custom estates in the Fairmont, Hidden Hills, and Bryant Ranch areas. Ulloa Construction serves Yorba Linda homeowners in zip codes 92886 and 92887 with full-scope remodeling services including kitchen renovations, luxury bathroom remodels, interior overhauls, ADU construction, and room additions.",
    para2:
      "Yorba Linda projects often involve larger, higher-quality scopes — custom cabinetry, premium tile and stone, and architectural details that reflect the character of these well-appointed homes. Our CSLB-licensed crew (#1144906) provides the full-scope general contracting, trade coordination, and permit management that complex Yorba Linda projects require. We serve Yorba Linda alongside neighboring Anaheim Hills, Placentia, Brea, and Chino Hills as part of our North Orange County coverage.",
    callout: "Serving Yorba Linda and all surrounding North Orange County communities.",
  },
];

export function getLocation(slug: string): LocationData | undefined {
  return locations.find((l) => l.slug === slug);
}

export const locationSlugList: CitySlug[] = locations.map((l) => l.slug);
