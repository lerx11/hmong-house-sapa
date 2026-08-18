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
    link: "https://maps.google.com/?q=Hmong+House+Sapa+Ta+Van",
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
    priceRange: "400,000 - 1,400,000 VND",
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
    priceRange: "400,000 - 1,400,000 VND per night",
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
    // TODO: replace with real room photos in /public/images/rooms/.
    images: [
      { src: ph(800, 1000, "Room 1"), alt: "Homestay room with mountain view" },
      { src: ph(800, 600, "Room 2"), alt: "Cosy twin room at Hmong House" },
      { src: ph(800, 800, "Room 3"), alt: "Dorm room with rice terrace view" },
      { src: ph(800, 600, "Room 4"), alt: "Private bathroom and terrace" },
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
    image: ph(900, 1100, "Hmong House"),
  },

  // -------- Tours --------
  // 5 core tours. Each slug drives the dynamic route app/tours/[slug].
  tours: [
    {
      slug: "hmong-village-trekking",
      name: "Hmong Village Trekking",
      duration: "1 Day",
      difficulty: "Easy",
      price: "750,000 VND",
      shortDescription:
        "A gentle full-day walk through Hmong villages, rice terraces, and bamboo bridges along the Muong Hoa valley.",
      fullDescription:
        "Our most popular introduction to Sapa. Starting from Hmong House, you walk with a local Hmong guide through Cat Cat, Y Linh Ho, and Lao Chai villages. The trail is mostly downhill and flat along the river, perfect for families and first-time trekkers. Along the way you will see rice terraces, traditional Hmong stilt houses, indigo dyeing, and children herding buffalo. We stop for a home-cooked lunch in a village home before returning in the late afternoon.",
      highlights: [
        "Walk through three Hmong villages",
        "Rice terraces & bamboo bridge crossings",
        "Meet local artisans and dyers",
        "Home-cooked Hmong lunch included",
        "Suitable for families and beginners",
      ],
      itinerary: [
        {
          time: "08:30",
          title: "Meet at Hmong House",
          text: "Welcome briefing with your Hmong guide over ginger tea.",
        },
        {
          time: "09:00",
          title: "Trek Cat Cat → Y Linh Ho",
          text: "Gentle descent into the Muong Hoa valley, ~3 km.",
        },
        {
          time: "12:00",
          title: "Lunch in a village home",
          text: "Traditional Hmong meal with the host family.",
        },
        {
          time: "13:30",
          title: "Lao Chai → Ta Van",
          text: "Continue along the river through Lao Chai village.",
        },
        {
          time: "16:00",
          title: "Return to Hmong House",
          text: "Arrive back for rest, or optional herbal bath add-on.",
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
      images: [ph(1200, 900, "Village Trek 1"), ph(1200, 900, "Village Trek 2")],
    },
    {
      slug: "herbal-trekking-red-dao",
      name: "Herbal Trekking with Red Dao",
      duration: "1 Day",
      difficulty: "Medium",
      price: "850,000 VND",
      shortDescription:
        "Trek with Red Dao healers through herbal forests, then unwind in a traditional herbal leaf bath.",
      fullDescription:
        "This trek is a rare chance to learn from the Red Dao people, famous across Vietnam for their deep knowledge of medicinal plants. You walk with a Red Dao guide into the forest above Ta Phin, identifying the leaves, roots, and bark used in traditional medicine. In the afternoon you return to the village for a legendary Red Dao herbal bath — a centuries-old remedy for tired muscles — before a home-cooked dinner.",
      highlights: [
        "Walk with a Red Dao herbalist",
        "Learn 10+ medicinal plants of Sapa",
        "Traditional Red Dao herbal bath",
        "Red Dao village & stilt home visit",
        "Home-cooked Red Dao dinner",
      ],
      itinerary: [
        {
          time: "09:00",
          title: "Drive to Ta Phin",
          text: "Short transfer from Hmong House to the trailhead.",
        },
        {
          time: "09:30",
          title: "Herbal forest walk",
          text: "Guided identification of medicinal plants, ~4 km.",
        },
        {
          time: "12:30",
          title: "Lunch in Red Dao home",
          text: "Local meal prepared by the host family.",
        },
        {
          time: "14:00",
          title: "Red Dao herbal bath",
          text: "Steaming bath boiled over a wood fire with fresh leaves.",
        },
        {
          time: "16:00",
          title: "Return to Hmong House",
          text: "Drive back to Ta Van.",
        },
      ],
      included: [
        "Red Dao guide & herbalist",
        "Herbal bath experience",
        "Home-cooked lunch",
        "Round-trip transfer from Hmong House",
        "Bottled water",
      ],
      notIncluded: [
        "Travel insurance",
        "Personal expenses",
        "Tips for guides",
      ],
      meetingPoint: "Hmong House Sapa (transfer to Ta Phin included)",
      startTime: "09:00",
      endTime: "16:30",
      images: [
        ph(1200, 900, "Herbal Trek 1"),
        ph(1200, 900, "Herbal Trek 2"),
      ],
    },
    {
      slug: "2d1n-hmong-red-dao-combo",
      name: "2D1N Hmong & Red Dao Combo",
      duration: "2 Days 1 Night",
      difficulty: "Medium",
      price: "1,800,000 VND",
      shortDescription:
        "The best of both cultures — trek Hmong villages by day, then overnight with a Red Dao family and herbal bath.",
      fullDescription:
        "Our signature two-day journey. Day one follows the Hmong Village Trekking route through Cat Cat, Y Linh Ho, and Lao Chai, with a home-cooked lunch in a village home. In the late afternoon you continue into Ta Van and stay overnight with a Red Dao family, sharing dinner and stories around the fire. Day two takes you into the herbal forest with a Red Dao healer, ending with a traditional herbal bath before returning to Hmong House.",
      highlights: [
        "Two cultures, two villages, two days",
        "Overnight with a Red Dao family",
        "Rice terrace sunset viewpoints",
        "Red Dao herbal bath on day two",
        "All meals & homestay included",
      ],
      itinerary: [
        {
          time: "Day 1 · 08:30",
          title: "Hmong valley trek",
          text: "Cat Cat → Y Linh Ho → Lao Chai with a Hmong guide.",
        },
        {
          time: "Day 1 · 17:00",
          title: "Arrive at Red Dao homestay",
          text: "Dinner and overnight with the family.",
        },
        {
          time: "Day 2 · 09:00",
          title: "Herbal forest walk",
          text: "Learn medicinal plants with a Red Dao healer.",
        },
        {
          time: "Day 2 · 14:00",
          title: "Red Dao herbal bath",
          text: "Steaming bath with fresh forest leaves.",
        },
        {
          time: "Day 2 · 16:30",
          title: "Return to Hmong House",
          text: "Arrive back in Ta Van.",
        },
      ],
      included: [
        "Hmong guide (day 1) & Red Dao guide (day 2)",
        "1 night Red Dao homestay",
        "All meals (3 meals + breakfast)",
        "Red Dao herbal bath",
        "Entrance fees & bottled water",
      ],
      notIncluded: [
        "Transport to/from Sapa town",
        "Travel insurance",
        "Personal expenses",
        "Tips for guides",
      ],
      meetingPoint: "Hmong House Sapa, Ta Van Village",
      startTime: "Day 1 · 08:30",
      endTime: "Day 2 · 16:30",
      images: [
        ph(1200, 900, "Combo 1"),
        ph(1200, 900, "Combo 2"),
      ],
    },
    {
      slug: "2-day-camping-trek",
      name: "2-Day Camping Trek",
      duration: "2 Days 1 Night",
      difficulty: "Hard",
      price: "2,000,000 VND",
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
        ph(1200, 900, "Camping 1"),
        ph(1200, 900, "Camping 2"),
      ],
    },
    {
      slug: "motorbike-tour",
      name: "Motorbike Tour",
      duration: "1 Day",
      difficulty: "Easy",
      price: "1,200,000 VND",
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
        ph(1200, 900, "Motorbike 1"),
        ph(1200, 900, "Motorbike 2"),
      ],
    },
  ],

  // -------- Gallery (masonry grid) --------
  // TODO: replace placeholder paths with real photos in /public/images/gallery/.
  gallery: [
    { src: ph(800, 1000, "Gallery 1"), alt: "Rice terraces at sunrise" },
    { src: ph(800, 600, "Gallery 2"), alt: "Hmong guide on the trail" },
    { src: ph(800, 1100, "Gallery 3"), alt: "Indigo dyeing in the village" },
    { src: ph(800, 600, "Gallery 4"), alt: "Bamboo bridge over the river" },
    { src: ph(800, 900, "Gallery 5"), alt: "Red Dao herbal bath" },
    { src: ph(800, 1200, "Gallery 6"), alt: "Valley from a high camp" },
    { src: ph(800, 600, "Gallery 7"), alt: "Stilt house at dusk" },
    { src: ph(800, 1000, "Gallery 8"), alt: "Misty mountain pass" },
    { src: ph(800, 600, "Gallery 9"), alt: "Hmong child with buffalo" },
    { src: ph(800, 900, "Gallery 10"), alt: "Sunset over Ta Van" },
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
