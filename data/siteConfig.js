// ============================================================
// Hmong House Sapa — Central site configuration & content
// ------------------------------------------------------------
// All copy, tour data, gallery, and reviews live in this single file
// so the whole site can be edited from one place.
//
// NOTE: Images currently use https://placehold.co placeholders with a
// green/cream color scheme. Replace with real photos in /public/images/
// (subfolders: /tours/, /gallery/, /about/) and update the paths here.
// TODO comments mark where real content is still needed.
// ============================================================

// Helper: generate a consistent placeholder image URL with the brand palette.
// bg = rice green (#6B8E4E), fg = cream (#FFF8F0).
const ph = (w, h, label) =>
  `https://placehold.co/${w}x${h}/6B8E4E/FFF8F0?text=${encodeURIComponent(
    label
  )}`;

export const siteConfig = {
  // -------- Business identity --------
  businessName: "Hmong House Sapa",
  tagline: "Nature, Guides & Cultural Tours",
  // Short blurb used in headers / SEO / footers
  shortIntro:
    "A family-run Hmong homestay in Ta Van Village offering authentic trekking, herbal walks, and cultural experiences in the Sapa highlands.",

  // -------- Contact channels --------
  // TODO: confirm the correct WhatsApp display format (international, no "+").
  // WhatsApp is the primary contact method (email removed in favour of chat).
  whatsappNumber: "+84359545459",
  whatsappLink: "https://wa.me/84359545459",
  address: "Ta Van Village, Sapa, Lào Cai, Vietnam",

  // -------- Google Maps --------
  maps: {
    link: "https://maps.app.goo.gl/bZKJbqss59Gs3dor6",
    displayText: "Get Directions",
    embedUrl: "", // TODO: Add Google Maps embed URL
  },

  // -------- Social profiles --------
  // TODO: replace "#" with the real profile URLs.
  socialLinks: {
    instagram: "#",
    facebook: "#",
    tiktok: "#",
  },

  // -------- Reputation --------
  rating: "4.95",
  reviewCount: 128, // TODO: sync with real review platform count

  // -------- Booking.com rating badge --------
  // Visible text is just "Booking.com"; the href opens the full hotel page.
  booking: {
    rating: "4.95",
    reviewCount: "1,398",
    link: "https://www.booking.com/hotel/vn/h-moong-view-homestay.en-gb.html",
    displayText: "Booking.com",
  },

  // -------- Accommodation (homestay rooms) --------
  rooms: {
    count: 20,
    priceRange: "$16 - $55 per night",
    amenities: [
      "Mountain & rice terrace views",
      "Private and dorm options",
      "Hot shower & western toilets",
      "Free Wi-Fi in common areas",
      "Home-cooked Hmong meals",
      "Bicycle & motorbike rental",
    ],
  },

  // -------- Stay With Us section --------
  // Detailed homestay content for the dedicated home-page section.
  stay: {
    eyebrow: "Stay With Us",
    title: "Stay With Us",
    subtitle: "Experience authentic Hmong hospitality",
    description:
      "Our homestay features 20 comfortable rooms with stunning mountain views. Wake up to the sight of rice terraces and enjoy traditional home-cooked meals with our family.",
    priceRange: "$16 - $55 per night",
    amenities: [
      { icon: "mountain", label: "Mountain view" },
      { icon: "wifi", label: "Free WiFi" },
      { icon: "shower", label: "Hot shower" },
      { icon: "coffee", label: "Breakfast included" },
      { icon: "sun", label: "Terrace" },
      { icon: "parking", label: "Free parking" },
      { icon: "users", label: "Family rooms" },
      { icon: "meal", label: "Traditional meals" },
    ],
    images: [
      { src: "/images/rooms/room-1.jpeg", alt: "Room at Hmong House Sapa" },
      { src: "/images/rooms/room-2.jpeg", alt: "Room with mountain view" },
      { src: "/images/rooms/room-3.jpeg", alt: "Comfortable bed" },
      { src: "/images/rooms/room-4.jpeg", alt: "Bathroom" },
      { src: "/images/rooms/room-5.jpeg", alt: "Balcony view" },
    ],
  },

  // -------- About section --------
  about: {
    eyebrow: "Our Story",
    title: "A Hmong home at the edge of the rice terraces",
    subtitle:
      "We are a Hmong family sharing our village, our trails, and our traditions with travellers who want more than a postcard.",
    story: [
      "Hmong House was built by our family three generations ago, on a small rise above the Muong Hoa valley in Ta Van Village. What began as a single guest room for trekkers passing through has grown into a 20-room homestay — but the spirit has not changed.",
      "We are Hmong, and our neighbours are Red Dao. Together we guide visitors along the same footpaths our grandparents walked to reach the rice fields, the herbal forests, and the high camps above the clouds. Every trek supports local guides, their families, and the crafts that keep our culture alive.",
    ],
    mission:
      "To share Sapa honestly — through real people, real trails, and real hospitality — while protecting the land and communities that make it worth visiting.",
    values: [
      {
        icon: "leaf",
        title: "Rooted in nature",
        text: "Our trails follow the seasons, the rivers, and the rice cycles. We leave nothing behind and take only memories.",
      },
      {
        icon: "users",
        title: "Local & family-run",
        text: "Every guide is from this valley. Your stay supports Hmong and Red Dao families, not a distant corporation.",
      },
      {
        icon: "compass",
        title: "Authentic culture",
        text: "Indigo dyeing, herbal baths, village life — we share our traditions as they really are, not staged for show.",
      },
    ],
    images: [
      "/images/about/su-sisters.jpeg",
      "/images/about/homestay-exterior.jpeg",
      "/images/about/about-extra.jpeg",
    ],
  },

  // -------- Hero --------
  hero: {
    backgroundImage: "/images/hero/hero-bg.jpeg",
  },

  // -------- Tours --------
  // 5 core tours. Each slug drives the dynamic route app/tours/[slug].
  tours: [
    {
      slug: "hmong-village-trekking",
      name: "Hmong Village Trekking",
      duration: "1 Day",
      difficulty: "Easy",
      price: "$20",
      priceGroup: "$20",
      pricePrivate: "$25",
      priceNote: "per person",
      shortDescription:
        "Visit six authentic villages, ancient Hmong houses, and panoramic mountain views",
      fullDescription:
        "Visiting six villages, besides the Hmong people, there are also several other ethnic groups living together. Around 9:30 a.m., you meet the tour guide and begin the tour. Just a few steps from the Hmong house is an ancient village, with about 10 houses inhabited by the same tribe, almost perfectly preserving the ancient and longest-standing cultural lifestyle in the Sapa region that has not been commercialized. One house can accommodate 15-25 people living together under a multi-generational family system. These houses are hundreds of years old, passed down from father to son. The front roof is low and black. There is no separation between the kitchen and the main house, and they have an attic for storing crops or sleeping. Through this ancient village, you will witness the authentic life of the Hmong people, see animals such as buffalo, cows, pigs, and chickens. After that, you walk across a small stream and through a primary bamboo forest to Ta Van Mong village, then continue climbing to Lao Chai San 1 village, the highest point where you can enjoy panoramic views of many mountain peaks, Sa Pa town, and Fansipan peak.",
      highlights: [
        "Visit six authentic villages with different ethnic groups",
        "See ancient Hmong houses that are hundreds of years old",
        "Walk through primary bamboo forest and cross streams",
        "Panoramic views of mountains, Sa Pa town, and Fansipan peak",
        "Learn about Hmong culture and daily life",
      ],
      itinerary: [
        {
          time: "9:30 AM",
          title: "Meet guide at Hmong House Sapa",
        },
        {
          time: "10:00 AM",
          title: "Visit ancient Hmong village with 10 traditional houses",
        },
        {
          time: "11:00 AM",
          title: "Walk through bamboo forest and cross stream",
        },
        {
          time: "11:30 AM",
          title: "Visit Ta Van Mong village",
        },
        {
          time: "12:30 PM",
          title: "Lunch break",
        },
        {
          time: "1:30 PM",
          title: "Climb to Lao Chai San 1 village",
        },
        {
          time: "2:30 PM",
          title: "Enjoy panoramic views of Sa Pa and Fansipan",
        },
        {
          time: "4:00 PM",
          title: "Return to Hmong House",
        },
      ],
      included: [
        "Local English-speaking Hmong guide",
        "Home-cooked lunch",
        "Entrance fees to villages",
        "Bottled water & snacks",
      ],
      notIncluded: [
        "Transport to/from Sapa town",
        "Travel insurance",
        "Personal expenses",
        "Tips for guides",
      ],
      meetingPoint: "Hmong House Sapa, Ta Van Village",
      startTime: "08:30",
      endTime: "16:00",
      images: [
        "/images/tours/hmong-village-1.jpeg",
        "/images/tours/hmong-village-2.jpeg",
        "/images/tours/hmong-village-3.jpeg",
        "/images/tours/hmong-village-4.jpeg",
        "/images/tours/hmong-village-5.jpeg",
      ],
    },
    {
      slug: "herbal-trekking-red-dao",
      name: "Herbal Trekking with Red Dao",
      duration: "1 Day",
      difficulty: "Medium",
      price: "$30 - $35",
      priceGroup: "$30",
      pricePrivate: "$35",
      priceNote: "per person",
      shortDescription:
        "Discover Red Dao culture, herbal medicine traditions, and enjoy a traditional herbal foot bath",
      fullDescription:
        "Go off the beaten path and discover a Vietnam rich in culture and healing traditions, where the Red Dao people have preserved ancient herbal medicine for generations. Trek through rice terraces, bamboo forests, and a mountain waterfall, then visit a Red Dao village for a traditional herbal foot bath and massage. Learn about their ancient writing, herbal manuscripts, and unique wedding rituals.",
      highlights: [
        "Trek through rice terraces, bamboo forests, and a mountain waterfall",
        "Visit Hoang Lien National Park and learn about medicinal herbs",
        "Enjoy a traditional herbal foot bath and massage",
        "Local lunch in a Red Dao village",
        "Learn about Red Dao writing, herbal manuscripts, and wedding rituals",
      ],
      itinerary: [
        {
          time: "09:30",
          title: "Depart from Hmong House Sapa with a local Red Dao guide",
        },
        {
          time: "10:00",
          title: "Trek through rice terraces, bamboo forests, and mountain waterfall",
        },
        {
          time: "11:30",
          title: "Visit Hoang Lien National Park, learn about medicinal herbs",
        },
        {
          time: "12:00",
          title: "Arrive at Red Dao village, local lunch",
        },
        {
          time: "13:30",
          title: "Traditional herbal foot bath and massage",
        },
        {
          time: "14:30",
          title: "Trek along streams and rice terraces",
        },
        {
          time: "15:30",
          title: "Return to Sapa",
        },
      ],
      included: [
        "Local Red Dao guide",
        "Scenic trek through rice terraces and bamboo forests",
        "Visit to mountain waterfall",
        "Visit to Hoang Lien National Park",
        "Local lunch in Red Dao village",
        "Traditional herbal foot bath and massage",
        "Transport from/to Sapa",
      ],
      notIncluded: [
        "Personal expenses",
        "Tips",
      ],
      meetingPoint: "Hmong House Sapa (transfer to Ta Phin included)",
      startTime: "09:00",
      endTime: "16:30",
      images: [
        "/images/tours/herbal-trekking-1.jpeg",
        "/images/tours/herbal-trekking-2.jpeg",
        "/images/tours/herbal-trekking-3.jpeg",
        "/images/tours/herbal-trekking-4.jpeg",
        "/images/tours/herbal-trekking-5.jpeg",
        "/images/tours/herbal-trekking-6.jpg",
        "/images/tours/herbal-trekking-7.jpg",
      ],
    },
    {
      slug: "2d1n-hmong-red-dao-combo",
      name: "2D1N Hmong & Red Dao Combo",
      duration: "2 Days 1 Night",
      difficulty: "Medium",
      price: "$55",
      priceNote: "per person",
      shortDescription:
        "Discover Hmong and Red Dao cultures on a 2-day trek with homestay, herbal bath, and cooking class",
      fullDescription:
        "Embark on a 2-day journey to discover the two most unique ethnic groups of Vietnam – the Hmong and the Red Dao – through breathtaking landscapes, ancient traditions and unforgettable local experiences. Trek through terraced rice fields, visit Hmong and Red Dao villages, learn about traditional herbal medicine, enjoy a cooking class, and experience a traditional Red Dao herbal bath.",
      highlights: [
        "Immerse yourself in Hmong and Red Dao culture",
        "Trek through breathtaking landscapes and terraced rice fields",
        "Learn about traditional herbal medicine from the Red Dao community",
        "Enjoy a cosy homestay with a local family and a cooking class",
        "Experience a traditional herbal bath",
      ],
      itinerary: [
        {
          time: "Day 1",
          title: "Sapa → Y Linh Ho → Lao Chai → Ta Van",
        },
        {
          time: "9:00 AM",
          title: "Pickup from Hmong House Sapa or Stone Church",
          text: "Trek through terraced fields with clouds drifting over Hoang Lien Son range",
        },
        {
          time: "12:00",
          title: "Lunch with views of rice terraces",
        },
        {
          time: "1:30 PM",
          title: "Visit Lao Chai Hmong village",
        },
        {
          time: "3:00 PM",
          title: "Continue to Ta Van village",
        },
        {
          time: "4:00 PM",
          title: "Arrive at Hmong House Homestay",
        },
        {
          time: "6:00 PM",
          title: "Cooking class and cultural performance",
        },
        {
          time: "Day 2",
          title: "Ta Van → Hoang Lien Ancient Forest → Giang Ta Chai → Sapa",
        },
        {
          time: "8:30 AM",
          title: "Breakfast",
        },
        {
          time: "9:30 AM",
          title: "Trek with Red Dao guide through bamboo forest",
        },
        {
          time: "11:00 AM",
          title: "Visit Hoang Lien ancient forest, learn about medicinal herbs",
        },
        {
          time: "12:30 PM",
          title: "Lunch in small village",
        },
        {
          time: "1:30 PM",
          title: "Red Dao herbal bath",
        },
        {
          time: "3:30 PM",
          title: "Return to Sapa",
        },
      ],
      included: [
        "Hmong guide",
        "Red Dao guide",
        "Lunch on both days",
        "Overnight stay at Hmong House Homestay",
        "Cultural performance",
        "Red Dao herbal bath",
        "Transport of luggage",
        "Dinner on Day 1",
      ],
      notIncluded: [
        "Personal expenses",
        "Tips",
      ],
      meetingPoint: "Hmong House Sapa, Ta Van Village",
      startTime: "Day 1 · 08:30",
      endTime: "Day 2 · 16:30",
      images: [
        "/images/tours/2d1n-combo-1.jpeg",
        "/images/tours/2d1n-combo-2.jpeg",
        "/images/tours/2d1n-combo-3.jpeg",
        "/images/tours/2d1n-combo-4.jpeg",
        "/images/tours/2d1n-combo-5.jpeg",
        "/images/tours/2d1n-combo-6.jpg",
      ],
    },
    {
      slug: "2-day-camping-trek",
      name: "2-Day Camping Trek",
      duration: "2 Days 1 Night",
      difficulty: "Hard",
      price: "$60",
      priceNote: "per person",
      shortDescription:
        "A rugged two-day trek above the clouds, camping on a high ridge with sunrise over the rice terraces.",
      fullDescription:
        "For trekkers who want to go further. This two-day route climbs out of the Muong Hoa valley toward the high ridges above Sin Chai, where we set up a private camp for the night. You will cross bamboo forest, mountain streams, and remote Hmong hamlets few tourists reach. At camp, guides cook dinner over an open fire and you sleep under one of the clearest skies in northern Vietnam. Day two descends back through a different valley to Ta Van.",
      highlights: [
        "High-ridge camp above the clouds",
        "Sunrise over the rice terraces",
        "Remote Hmong hamlets off the tourist trail",
        "Open-fire dinner & mountain stories",
        "Two valleys, two days of trekking",
      ],
      itinerary: [
        {
          time: "Day 1 · 07:30",
          title: "Depart Hmong House",
          text: "Early start to maximise daylight on the long climb.",
        },
        {
          time: "Day 1 · 12:00",
          title: "Lunch at a mountain stream",
          text: "Picnic lunch beside the trail.",
        },
        {
          time: "Day 1 · 16:00",
          title: "Arrive at camp",
          text: "Set up tents, open-fire dinner, sunset.",
        },
        {
          time: "Day 2 · 06:00",
          title: "Sunrise at the ridge",
          text: "Coffee with sunrise over the valley.",
        },
        {
          time: "Day 2 · 09:00",
          title: "Descend via second valley",
          text: "Long downhill trek back toward Ta Van.",
        },
        {
          time: "Day 2 · 16:00",
          title: "Return to Hmong House",
          text: "Hot shower and herbal bath add-on available.",
        },
      ],
      included: [
        "Experienced mountain guide & porter",
        "Tents, sleeping bags & camping gear",
        "All meals (3 meals + breakfast)",
        "Entrance fees & permits",
        "Bottled water & snacks",
      ],
      notIncluded: [
        "Transport to/from Sapa town",
        "Travel insurance",
        "Personal hiking gear (boots, jacket)",
        "Tips for guides & porter",
      ],
      meetingPoint: "Hmong House Sapa, Ta Van Village",
      startTime: "Day 1 · 07:30",
      endTime: "Day 2 · 16:00",
      images: [
        "/images/tours/camping-trek-1.jpeg",
        "/images/tours/camping-trek-2.jpeg",
        "/images/tours/camping-trek-3.jpeg",
      ],
    },
    {
      slug: "motorbike-tour",
      name: "Motorbike Tour",
      duration: "1 Day",
      difficulty: "Easy",
      price: "$45",
      priceNote: "per person",
      shortDescription:
        "Ride pillion with a local guide through Sapa's most scenic mountain passes, waterfalls, and viewpoints.",
      fullDescription:
        "See more of Sapa in a day. You ride pillion (as a passenger) on a semi-automatic motorbike driven by an experienced local guide, or self-drive if you hold a valid licence. The route crosses the Silver Waterfall, Tram Ton Pass (the highest road in Vietnam), and Heaven's Gate, with stops at viewpoints, tea farms, and a Hmong village. No trekking experience required — perfect for those short on time or with limited mobility.",
      highlights: [
        "Tram Ton Pass — Vietnam's highest road",
        "Silver Waterfall & Heaven's Gate",
        "Ride pillion or self-drive",
        "Mountain & valley viewpoints",
        "No trekking required",
      ],
      itinerary: [
        {
          time: "08:30",
          title: "Briefing at Hmong House",
          text: "Helmet fitting and safety briefing.",
        },
        {
          time: "09:00",
          title: "Ride to Silver Waterfall",
          text: "Scenic climb from the valley.",
        },
        {
          time: "11:00",
          title: "Tram Ton Pass",
          text: "Stop at the highest road pass in Vietnam.",
        },
        {
          time: "12:30",
          title: "Lunch at Heaven's Gate",
          text: "Local restaurant with mountain views.",
        },
        {
          time: "14:00",
          title: "Village & tea farm loop",
          text: "Gentle descent through a Hmong village.",
        },
        {
          time: "16:00",
          title: "Return to Hmong House",
          text: "Arrive back at Ta Van.",
        },
      ],
      included: [
        "Local guide / driver",
        "Semi-automatic motorbike & fuel",
        "Helmet",
        "Lunch & bottled water",
        "All entrance fees",
      ],
      notIncluded: [
        "Travel insurance (must cover motorbikes)",
        "Personal expenses",
        "Tips for guide",
      ],
      meetingPoint: "Hmong House Sapa, Ta Van Village",
      startTime: "08:30",
      endTime: "16:00",
      images: [
        "/images/tours/motorbike-tour-1.jpg",
        "/images/tours/motorbike-tour-2.jpg",
        "/images/tours/motorbike-tour-3.jpg",
      ],
    },
  ],

  // -------- Gallery (masonry grid) --------
  gallery: [
    { src: "/images/gallery/photo1.jpeg", alt: "Sapa rice terraces" },
    { src: "/images/gallery/photo2.jpeg", alt: "Hmong village" },
    { src: "/images/gallery/photo3.jpeg", alt: "Red Dao herbal bath" },
    { src: "/images/gallery/photo4.jpeg", alt: "Trekking trail through valleys" },
    { src: "/images/gallery/photo5.jpeg", alt: "Homestay exterior at sunrise" },
    { src: "/images/gallery/photo6.jpeg", alt: "Misty mountain peaks" },
    { src: "/images/gallery/photo7.jpeg", alt: "Stilt house among rice fields" },
    { src: "/images/gallery/photo8.jpeg", alt: "Hmong textile crafts" },
    { src: "/images/gallery/photo9.jpeg", alt: "Local market in Sapa" },
    { src: "/images/gallery/photo10.jpeg", alt: "Bamboo bridge over river" },
    { src: "/images/gallery/photo11.jpeg", alt: "Sunset over Muong Hoa valley" },
    { src: "/images/gallery/photo12.jpeg", alt: "Trekking guide on the trail" },
    { src: "/images/gallery/photo13.jpeg", alt: "Camping under the stars" },
    { src: "/images/gallery/photo14.jpeg", alt: "Traditional Hmong breakfast" },
    { src: "/images/gallery/photo15.jpeg", alt: "Indigo dyeing process" },
    { src: "/images/gallery/photo16.jpeg", alt: "Rice field workers" },
    { src: "/images/gallery/photo17.jpeg", alt: "Room view from balcony" },
    { src: "/images/gallery/photo18.jpeg", alt: "Waterfall on trekking route" },
    { src: "/images/gallery/photo19.jpeg", alt: "Family dinner at the homestay" },
    { src: "/images/gallery/photo20.jpeg", alt: "Panoramic Sapa landscape" },
  ],

  // -------- Guest reviews --------
  // TODO: replace with verified reviews (e.g. Google, TripAdvisor).
  reviews: [
    {
      name: "Sophie Laurent",
      country: "France",
      rating: 5,
      date: "March 2026",
      text: "The most authentic experience we had in Vietnam. Our Hmong guide Zuz took us through villages we'd never have found alone, and the herbal bath with the Red Dao family was unforgettable. Felt like visiting friends, not a tour.",
    },
    {
      name: "James O'Connor",
      country: "Ireland",
      rating: 5,
      date: "February 2026",
      text: "We did the 2D1N combo and it was the highlight of our three weeks in Vietnam. Sleeping in a Red Dao home, sharing dinner, learning about the plants — this is the real Sapa, not the bus-tour version. Highly recommend.",
    },
    {
      name: "Yuki Tanaka",
      country: "Japan",
      rating: 5,
      date: "January 2026",
      text: "I travelled solo and felt completely safe the whole time. The camping trek is hard but worth every step — sunrise above the clouds is something I'll never forget. The guides took such good care of me.",
    },
    {
      name: "Maria González",
      country: "Spain",
      rating: 5,
      date: "December 2025",
      text: "Beautiful homestay, incredible food, and guides who genuinely love their land. The motorbike tour was perfect for my parents who can't trek far. We'll be back.",
    },
  ],

  // -------- Navigation --------
  // Anchors are root-relative so the links work from any page (e.g. tour pages)
  // and still scroll smoothly when already on the home page.
  nav: [
    { label: "About", href: "/#about" },
    { label: "Tours", href: "/#tours" },
    { label: "Gallery", href: "/#gallery" },
    { label: "Reviews", href: "/#reviews" },
    { label: "Contact", href: "/#contact" },
  ],
};

// -------- Helpers --------
// Build a WhatsApp deep-link with a pre-filled message.
export function buildWhatsappLink(message = "") {
  const base = siteConfig.whatsappLink;
  if (!message) return base;
  return `${base}?text=${encodeURIComponent(message)}`;
}

// Build a per-tour WhatsApp booking link.
export function buildTourBookingLink(tourName) {
  return buildWhatsappLink(
    `Hi! I'm interested in the "${tourName}" tour. Is it available?`
  );
}

// Look up a tour by slug (used by the dynamic [slug] page).
export function getTourBySlug(slug) {
  return siteConfig.tours.find((t) => t.slug === slug);
}

// Get other tours (for the "similar tours" section on a tour page).
export function getSimilarTours(currentSlug, limit = 3) {
  return siteConfig.tours
    .filter((t) => t.slug !== currentSlug)
    .slice(0, limit);
}

export default siteConfig;
