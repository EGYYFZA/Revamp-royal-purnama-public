import media from "./media.json" with { type: "json" };

export const image = (id) => media[id];
export const bookingUrl =
  "https://book-directonline.com/properties/theroyalpurnama";
export const contact = {
  email: "reservations@theroyalpurnama.com",
  phone: "+62 361 849 3706",
  phoneHref: "tel:+623618493706",
  whatsapp: "+62 878 0058 1000",
  whatsappHref: "https://wa.me/6287800581000",
  address: "Jl. Pantai Purnama, Sukawati, Gianyar, Bali, Indonesia",
  map: "https://www.google.com/maps/search/?api=1&query=The+Royal+Purnama+Bali",
};
export const navigation = [
  ["Villas & suites", "/villas"],
  ["Dining", "/dining"],
  ["Wellness", "/wellness"],
  ["Experiences", "/experiences"],
  ["Offers", "/offers"],
  ["Contact", "/contact"],
];
export const villas = [
  {
    id: "jepun-jacuzzi-king",
    name: "Jepun",
    type: "One Bedroom Jacuzzi Suite · King",
    beds: "King bed",
    bedrooms: 1,
    adults: 2,
    size: 75,
    water: "Private jacuzzi",
    image: 15,
    gallery: [70, 71, 75],
    source: "/villa/one-bedroom-suite-jacuzzi-jepun-ocean-garden-view",
    summary:
      "An intimate upper-level retreat, with a private veranda jacuzzi and room to slow down together.",
    paragraphs: [
      "Sunlight, locally inspired details, and a generous living room create a peaceful home for two. A separate king bedroom opens to the quiet rhythm of a Balinese escape.",
      "Unwind in your veranda jacuzzi, then retreat to a semi-open-air bathroom with a bathtub and rain shower. A thoughtful choice for couples who value privacy and unhurried moments.",
    ],
    amenities: [
      "Private veranda jacuzzi",
      "Separate living room",
      "Semi-open-air bathroom",
      "Bathtub & rain shower",
      "Upper-level setting",
    ],
  },
  {
    id: "jepun-jacuzzi-twin",
    name: "Jepun",
    type: "One Bedroom Jacuzzi Suite · Twin",
    beds: "Twin beds",
    bedrooms: 1,
    adults: 2,
    size: 75,
    water: "Private jacuzzi",
    image: 16,
    gallery: [336, 337, 338],
    source: "/villa/one-bedroom-jacuzzi-suite-twin-jepun",
    summary:
      "A light-filled suite for two, pairing twin beds with a private jacuzzi on the balcony veranda.",
    paragraphs: [
      "Share the ease of a spacious suite while enjoying the comfort of separate twin beds. Locally inspired interiors and a separate living room make time indoors feel just as inviting.",
      "The private veranda jacuzzi is a place to pause between adventures. A semi-open-air bathroom, bathtub, and rain shower complete this tranquil upper-level retreat.",
    ],
    amenities: [
      "Private veranda jacuzzi",
      "Separate living room",
      "Twin-bed configuration",
      "Bathtub & rain shower",
      "Upper-level setting",
    ],
  },
  {
    id: "jepun-pool",
    name: "Jepun",
    type: "One Bedroom Pool Villa",
    beds: "King bed",
    bedrooms: 1,
    adults: 2,
    size: 205,
    water: "Private pool",
    image: 17,
    gallery: [80, 91, 92],
    source: "/villa/one-bedroom-suite-private-pool-jepun",
    summary:
      "Handcrafted Balinese details and your own 3 × 10-metre pool, wrapped in tropical greenery.",
    paragraphs: [
      "Step into a ground-floor sanctuary where bedroom, living space, and private pool feel naturally connected. Handcrafted furnishings bring the warmth of Bali into an intimate retreat for two.",
      "A separate kitchenette and dining area make slow mornings effortless. The semi-open-air bathroom offers double vanities, an oversized granite bathtub, and a rain shower.",
    ],
    amenities: [
      "Private 3 × 10 m pool",
      "Kitchenette & dining area",
      "Separate living space",
      "Granite bathtub",
      "Double vanities & rain shower",
    ],
  },
  {
    id: "cempaka-pool",
    name: "Cempaka",
    type: "One Bedroom Pool Villa",
    beds: "King bed",
    bedrooms: 1,
    adults: 2,
    size: 220,
    water: "Private pool",
    image: 18,
    gallery: [93, 99, 100],
    source: "/villa/one-bedroom-villa-private-pool-cempaka",
    summary:
      "A garden sanctuary for two. Hand-carved wood, a private pool, and the luxury of your own pace.",
    paragraphs: [
      "Soft tropical light meets hand-carved woodwork in this single-storey villa. The bedroom and living area open to a private 3 × 10-metre pool, with a shaded daybed for afternoons that need no plans.",
      "A kitchenette, dining area, and semi-open-air bathroom offer room for everyday rituals. Double vanities, a granite bathtub, and a rain shower bring a sense of ease to your private Balinese retreat.",
    ],
    amenities: [
      "Private 3 × 10 m pool",
      "Poolside daybed",
      "Kitchenette & dining area",
      "Semi-open-air bathroom",
      "Single-storey layout",
    ],
  },
  {
    id: "melati-pool",
    name: "Melati",
    type: "Two Bedroom Pool Villa",
    beds: "King & twin beds",
    bedrooms: 2,
    adults: 4,
    size: 240,
    water: "Private pool",
    image: 19,
    gallery: [117, 118, 119],
    source: "/villa/two-bedroom-villa-private-pool-melati",
    summary:
      "Room to reconnect with friends, with two bedrooms, a full kitchen, and a private tropical pool.",
    paragraphs: [
      "A king bedroom and a twin bedroom, each with its own semi-open-air bathroom, create a comfortable setting for four adults. An open-plan lounge, full kitchen, and dining space make gathering easy.",
      "Your private 3 × 10-metre pool and daybed invite long, relaxed afternoons. The resort’s three Melati villas each have a different layout and décor; photographs represent one of the villas.",
    ],
    amenities: [
      "Private 3 × 10 m pool",
      "Two ensuite bedrooms",
      "Fully equipped kitchen",
      "Indoor dining & lounge",
      "Individual layouts & décor",
    ],
  },
  {
    id: "sunrise-presidential",
    name: "Sunrise",
    type: "Four Bedroom Presidential Beachfront Pool Villa",
    beds: "King & twin beds",
    bedrooms: 4,
    adults: 8,
    size: 1200,
    water: "Private pool",
    image: 20,
    gallery: [140, 141, 142, 143],
    source: "/villa/four-bedroom-presidential-beach-front-pool-villa-sunrise",
    summary:
      "An expansive beachfront residence, opening to a 5 × 14-metre pool and the Indian Ocean.",
    paragraphs: [
      "Arrive along a garden pathway and discover 1,200 square metres of private beachfront living. Four ensuite bedrooms, a spacious lounge, a dining area, a full kitchen, and a bar give eight adults room to gather and retreat.",
      "A private 5 × 14-metre pool sits on the beachfront terrace. Shaded gazebos and sun loungers frame uninterrupted ocean views, just steps from Purnama’s black-sand shore.",
    ],
    amenities: [
      "Beachfront location",
      "Private 5 × 14 m pool",
      "Four ensuite bedrooms",
      "Full kitchen & bar",
      "Terraces & shaded gazebos",
    ],
  },
];
export function filterVillas(items, bedrooms = "all", water = "all") {
  return items.filter(
    (v) =>
      (bedrooms === "all" || String(v.bedrooms) === bedrooms) &&
      (water === "all" || v.water === water),
  );
}
export const venues = [
  {
    name: "Standing Stones",
    fullName: "Standing Stones Beach Restaurant",
    category: "Oceanfront dining",
    image: 28,
    description:
      "Fresh, locally inspired cuisine, a lush seaside garden, and the sculptural monoliths that give this restaurant its name. Take a little longer over lunch. Let dinner become an occasion.",
    note: "Dining welcomes guests aged 12 and above.",
    menus: true,
  },
  {
    name: "Moonstone",
    fullName: "Moonstone Beach Lounge",
    category: "Beachfront leisure",
    image: 30,
    description:
      "Settle into a daybed beside a curving pool, with palms overhead and Purnama Beach beyond. A relaxed beachfront setting for conversation, a refreshing drink, and time well spent.",
    note: "Access and daybeds are subject to availability. Ask our team about current arrangements.",
  },
  {
    name: "Stone Bar",
    fullName: "Stone Bar",
    category: "Cocktails by the sea",
    image: 284,
    description:
      "A quiet pause between garden and ocean. Discover handcrafted cocktails and enjoy the sea breeze in an intimate, open-air setting.",
    note: "Contact our team for current opening hours and reservations.",
  },
];
export const treatments = [
  {
    name: "Volcanic sand ritual",
    category: "Signature experience",
    image: 305,
    duration: "Ask about available rituals",
    description:
      "Discover the resort’s signature volcanic sand experience, inspired by the elements of Bali’s black-sand coastline.",
  },
  {
    name: "Balinese massage",
    category: "Traditional touch",
    image: 31,
    duration: "Treatment options available",
    description:
      "Make space for rest with a traditional massage in a private spa setting. Our therapists can help you choose a treatment.",
  },
  {
    name: "Sound healing",
    category: "Swara Usadha",
    image: 307,
    duration: "60 minutes",
    description:
      "Settle into a contemplative experience with Tibetan singing bowls, guided by the resort’s wellness practitioner.",
  },
  {
    name: "Cakra balancing",
    category: "Mindful connection",
    image: 308,
    duration: "90 minutes",
    description:
      "A guided wellness ritual bringing together consultation, Balinese massage, singing bowls, and traditional energy practices.",
  },
];
export const offers = [
  {
    id: "stay-three",
    name: "Stay a little longer",
    original: "Stay 3 Nights and Pay 2 Nights",
    label: "Stay 3, pay 2",
    image: 18,
    source: "/special-offers/stay-3-nights-pay-2-nights",
    description:
      "Give yourself another morning in Bali. A three-night escape with a complimentary night reflected in the average nightly rate.",
    benefits: [
      "Daily à la carte breakfast",
      "One selected cocktail or mocktail at Moonstone",
      "30% off spa treatments; restrictions apply",
    ],
    terms:
      "Stay period: until 19 December 2026. Advance payment is non-refundable. Cannot be combined with other promotions. Confirm current availability and full terms before booking.",
  },
  {
    id: "romantic",
    name: "Just the two of you",
    original: "Romantic Escape Package",
    label: "Romantic escape",
    image: 321,
    source: "/special-offers/romantic-escape-package",
    description:
      "A minimum three-night escape with thoughtful moments to share, from a beachside dinner to a quiet Balinese massage.",
    benefits: [
      "One three-course romantic beachside dinner",
      "One 60-minute Balinese massage",
      "Return airport transfer",
    ],
    terms:
      "Package inclusions are for two guests. Floating breakfast applies to villas with a private pool. Deposit and cancellation conditions apply; confirm current details with reservations.",
  },
  {
    id: "soul-renewal",
    name: "Return to your rhythm",
    original: "Purnama Soul Renewal Escape",
    label: "4 days / 3 nights",
    image: 31,
    source: "/special-offers/purnama-soul-renewal-escape",
    description:
      "A mindful coastal stay with traditional Balinese wellness experiences, nourishing moments, and space to reconnect.",
    benefits: [
      "One 90-minute Cakra balancing session",
      "One sound healing meditation",
      "One 60-minute Signature Balinese Massage",
    ],
    terms:
      "Direct-booking package. Advance reservation, payment, and cancellation conditions apply. Please confirm the current programme and suitability with our team.",
  },
  {
    id: "royal-escape",
    name: "The Luxury Royal Escape",
    original: "Luxury Royal Escape",
    label: "Make it your own",
    image: 20,
    source: "/luxury-royal-escape",
    description:
      "A longer stay with thoughtful additions. Let our reservations team help you find the right villa and the right pace.",
    benefits: [
      "Daily à la carte breakfast",
      "Selected benefits based on length of stay",
      "Direct assistance from our reservations team",
    ],
    terms:
      "Benefits depend on length of stay. Transfers, meals, and spa inclusions have conditions. View the current official offer or ask reservations before booking.",
  },
  {
    id: "summer-escape",
    name: "A little coastal sunshine",
    original: "Purnama Summer Escape",
    label: "Purnama summer escape",
    image: 14,
    source: "/special-offers/purnama-summer-escape",
    description:
      "Ocean air, a private retreat, and time together on Purnama Beach. Discover the resort’s seasonal escape and settle into a slower coastal rhythm.",
    benefits: [
      "Daily à la carte breakfast",
      "Moonstone Beach Lounge access, subject to availability",
      "Direct assistance from our reservations team",
    ],
    terms:
      "This is a seasonal package. Confirm current stay dates, minimum nights, inclusions, payment conditions, and availability with reservations before booking.",
  },
  {
    id: "exclusive-offer",
    name: "A stay with thoughtful extras",
    original: "Exclusive Offer",
    label: "Selected accommodation",
    image: 17,
    source: "/special-offers/exclusive-offer",
    description:
      "Explore a direct-booking offer for selected accommodation, with considered additions to make your stay feel a little more personal.",
    benefits: [
      "Daily à la carte breakfast",
      "One selected cocktail or mocktail at Moonstone",
      "One-way airport transfer for eligible stays of three nights",
    ],
    terms:
      "Room eligibility, transfer conditions, deposit, payment, and cancellation terms apply. Please confirm the current official offer with our reservations team.",
  },
];
export const experiences = [
  {
    name: "A table for two",
    category: "Shared moments",
    image: 159,
    description:
      "From a private beachside dinner to a leisurely garden lunch, discover dining experiences made for connection.",
    link: "/dining",
    action: "Explore dining",
  },
  {
    name: "The art of slowing down",
    category: "Balinese wellness",
    image: 305,
    description:
      "Traditional touch, volcanic sand, and mindful rituals create time to listen to yourself again.",
    link: "/wellness",
    action: "Find your ritual",
  },
  {
    name: "A promise by the ocean",
    category: "Intimate weddings",
    image: 226,
    description:
      "Celebrate with the sea as your backdrop, in a setting shaped around the people closest to you.",
    link: "/weddings",
    action: "Plan your celebration",
  },
];
export const faqs = [
  [
    "Where is The Royal Purnama?",
    "Our resort is on Purnama Beach in Sukawati, Gianyar, on Bali’s black-sand coastline. Contact our team to arrange directions or an airport transfer.",
  ],
  [
    "Is the resort adults only?",
    "The Royal Purnama is an adults-only resort. Standing Stones Beach Restaurant welcomes diners aged 12 and above. Please confirm the applicable guest policy with reservations when planning your visit.",
  ],
  [
    "Do all villas have a private pool?",
    "Jepun King and Twin Suites have a private jacuzzi. Jepun, Cempaka, Melati, and Sunrise Pool Villas have a private swimming pool.",
  ],
  [
    "How do I book directly?",
    "Use the Book your stay link to reach our official booking engine, or speak to our reservations team by email or WhatsApp. Availability, rates, inclusions, and payment terms are confirmed there.",
  ],
  [
    "Can you arrange a special occasion?",
    "Our team can help with intimate weddings, romantic dinners, and personalised experiences. Share your preferred date and occasion with us so we can advise on availability.",
  ],
];
export function enquiryDraft({ name, email, interest, message }) {
  const subject = "The Royal Purnama enquiry — " + interest;
  const body =
    "Name: " +
    name.trim() +
    "\nEmail: " +
    email.trim() +
    "\nInterest: " +
    interest +
    "\n\n" +
    message.trim();
  return {
    subject,
    body,
    url:
      "mailto:" +
      contact.email +
      "?subject=" +
      encodeURIComponent(subject) +
      "&body=" +
      encodeURIComponent(body),
  };
}
