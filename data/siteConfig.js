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
      { src: "/images/rooms/room-3.jpeg", alt: "Comfortable bed with warm linens" },
      { src: "/images/rooms/room-4.jpeg", alt: "Bathroom" },
      { src: "/images/rooms/room-5.jpeg", alt: "Balcony view of the valley" },
      { src: "/images/rooms/room-6.jpg", alt: "Traditional Hmong style room" },
      { src: "/images/rooms/room-7.jpg", alt: "Cozy bedroom interior" },
      { src: "/images/rooms/room-8.jpg", alt: "Twin beds with mountain view" },
      { src: "/images/rooms/room-9.jpg", alt: "Room with wooden decor" },
      { src: "/images/rooms/room-10.jpg", alt: "Sunlit bedroom" },
      { src: "/images/rooms/room-11.jpg", alt: "Family room" },
      { src: "/images/rooms/room-12.jpg", alt: "Panoramic window room" },
      { src: "/images/rooms/room-13.jpg", alt: "Room with rice terrace view" },
      { src: "/images/rooms/room-14.jpg", alt: "Attic style sleeping area" },
      { src: "/images/rooms/room-15.jpg", alt: "Private balcony room" },
      { src: "/images/rooms/room-16.jpg", alt: "Evening room lighting" },
      { src: "/images/rooms/room-17.jpg", alt: "Shared dormitory space" },
    ],
  },

  // -------- About section --------
  about: {
    eyebrow: "Our Story",
    title: "A Hmong home at the edge of the rice terraces",
    subtitle:
      "We are a Hmong family sharing our village, our trails, and our traditions with travellers who want more than a postcard.",
    story: [
      "I was born in a remote village 40 kilometers from the bustling town of Sa Pa. Fate smiled upon me when I was just three days old; I was fortunate enough to be adopted by a kind Hmong mother from Ta Van village. Yet, like most highland girls of that time, I did not attend school or learn to read and write, facing instead a predetermined future: early marriage and resignation to my lot in life.",
      "That year, a man dragged me away to become his wife, following an old custom. Amidst the darkness of that unfamiliar house, a wake-up call rang out in my mind: 'If I accept this, my life will forever be a cycle of days spent toiling in the fields, with no way out.' I summoned all my courage to flee that marriage. It was not merely an escape from a man, but an escape from an imposed destiny.",
      "I realized that to change my life, I needed to connect with the world. With no money, no formal education, and no teachers, I began learning English—haltingly at first—from foreign tourists visiting Ta Van. I learned word by word, mimicked their pronunciation, and persisted in speaking whenever the opportunity arose. From those initial, hesitant words—and fueled by unwavering determination—I mastered English. This opened a new door for me, completely transforming my life; I gained confidence in communication and became a genuine tour guide. English helped me recognize my own true worth and the unique beauty of my homeland.",
      "We are two women—one who dared to dream and one who dared to act; one who is literate and one who speaks English—united by a deep, shared belief. Today, we proudly own a homestay and operate local tours right here in the beautiful land of Ta Van. When you choose to stay at our homestay or join us on our tours, you are not just exploring Sa Pa; you are also helping us write a meaningful story.",
      "Our ultimate goal is to create livelihoods for women and generate stable employment for the Hmong and Dao women who serve as local guides, breathing life and soul into this beautiful region. We want these highland women to realize just how capable and valuable they are. They possess their own unique worth and deserve to be confident and masters of their own lives.",
      "Travel is about more than just sightseeing; it is about connecting souls, creating value, transforming lives, and fostering hope for the future. Join our tour to experience a truly different side of Sa Pa—one filled with resilience and the warmth of human connection.",
    ],
    mission:
      "To create livelihoods for Hmong and Dao women through sustainable tourism, empowering them to be confident and independent.",
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
      price: "$20 - $25",
      priceGroup: "$20",
      pricePrivate: "$25",
      priceNote: "per person",
      shortDescription:
        "Visit six authentic villages, ancient Hmong houses, and panoramic mountain views",
      fullDescription:
        "Around 9:30 AM, meet your guide at Hmong House and begin your journey. Just a few steps away lies an ancient village — about 10 houses inhabited by the same tribe, preserving the oldest cultural lifestyle in Sapa that has not been commercialized. These houses are hundreds of years old, passed down from father to son. One house can accommodate 15-25 people living together under a multi-generational family system. Through this ancient village, you will witness the authentic life of the Hmong people — see buffalo, cows, pigs, and chickens, and listen to your guide share stories about their culture. Continue across a small stream and through primary bamboo forest to Ta Van Mong village, then climb along a narrow trail to Lao Chai San 1 — the highest point with panoramic views of mountain peaks, Sa Pa town, and Fansipan peak.",
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
          title: "Visit ancient Hmong village with traditional houses",
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
        "/images/tours/hmong-village/1.jpeg",
        "/images/tours/hmong-village/2.jpeg",
        "/images/tours/hmong-village/3.jpeg",
        "/images/tours/hmong-village/4.jpeg",
        "/images/tours/hmong-village/5.jpeg",
        "/images/tours/hmong-village/6.jpeg",
        "/images/tours/hmong-village/7.jpeg",
        "/images/tours/hmong-village/8.jpeg",
        "/images/tours/hmong-village/9.jpeg",
        "/images/tours/hmong-village/10.jpeg",
        "/images/tours/hmong-village/11.jpeg",
        "/images/tours/hmong-village/12.jpeg",
        "/images/tours/hmong-village/13.jpeg",
        "/images/tours/hmong-village/14.jpeg",
        "/images/tours/hmong-village/15.jpeg",
        "/images/tours/hmong-village/16.jpeg",
        "/images/tours/hmong-village/17.jpeg",
        "/images/tours/hmong-village/18.jpeg",
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
        "/images/tours/herbal-trekking/1.jpeg",
        "/images/tours/herbal-trekking/2.jpeg",
        "/images/tours/herbal-trekking/3.jpeg",
        "/images/tours/herbal-trekking/4.jpeg",
        "/images/tours/herbal-trekking/5.jpeg",
        "/images/tours/herbal-trekking/6.jpg",
        "/images/tours/herbal-trekking/7.jpg",
        "/images/tours/herbal-trekking/8.jpeg",
        "/images/tours/herbal-trekking/9.jpeg",
        "/images/tours/herbal-trekking/10.jpeg",
        "/images/tours/herbal-trekking/11.jpeg",
        "/images/tours/herbal-trekking/12.jpeg",
        "/images/tours/herbal-trekking/13.jpeg",
        "/images/tours/herbal-trekking/14.jpeg",
        "/images/tours/herbal-trekking/15.jpeg",
        "/images/tours/herbal-trekking/16.jpeg",
        "/images/tours/herbal-trekking/17.jpeg",
        "/images/tours/herbal-trekking/18.jpeg",
        "/images/tours/herbal-trekking/19.jpeg",
        "/images/tours/herbal-trekking/20.jpeg",
        "/images/tours/herbal-trekking/21.jpeg",
        "/images/tours/herbal-trekking/22.jpeg",
        "/images/tours/herbal-trekking/23.jpeg",
        "/images/tours/herbal-trekking/24.jpeg",
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
        "/images/tours/2d1n-combo/1.jpeg",
        "/images/tours/2d1n-combo/2.jpeg",
        "/images/tours/2d1n-combo/3.jpeg",
        "/images/tours/2d1n-combo/4.jpeg",
        "/images/tours/2d1n-combo/5.jpeg",
        "/images/tours/2d1n-combo/6.jpg",
        "/images/tours/2d1n-combo/7.jpeg",
        "/images/tours/2d1n-combo/8.jpeg",
        "/images/tours/2d1n-combo/9.jpeg",
        "/images/tours/2d1n-combo/10.jpeg",
        "/images/tours/2d1n-combo/11.jpeg",
        "/images/tours/2d1n-combo/12.jpeg",
        "/images/tours/2d1n-combo/13.jpeg",
        "/images/tours/2d1n-combo/14.jpeg",
        "/images/tours/2d1n-combo/15.jpeg",
        "/images/tours/2d1n-combo/16.jpeg",
        "/images/tours/2d1n-combo/17.jpeg",
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
        "2-day adventure trek with camping in the forest, waterfall visit, and local farm experience",
      fullDescription:
        "At 9:30 AM, meet your guide and begin the journey. Visit an ancient village with houses hundreds of years old, preserving the oldest cultural lifestyle in Sapa. Continue to Ta Van Mong village, then climb to Lao Chai San — home to the most beautiful terraced fields in Vietnam. Reach the mountain peak where you can catch the sea of clouds if weather permits. Lunch is prepared by us and served at a scenic spot — there are no restaurants in this peaceful, rarely crowded area. Day 1 ends at a local farm where camping is set up in the forest. Harvest vegetables and cook with locals, enjoy dinner with the guide and family, then sleep surrounded by nature with views of the ancient forest. Day 2: Wake early for sunrise. At 9:30 AM, hike down through primary bamboo forest to a waterfall — swim if weather allows. Visit Giang Ta Chai Dao village, walk along Muong Hoa stream, and end at Hmong House with a relaxing herbal foot soak.",
      highlights: [
        "Camping in the forest with views of primary forest",
        "Visit ancient Hmong village and most beautiful terraced fields",
        "Catch the sea of clouds at mountain peak",
        "Harvest vegetables and cook with locals",
        "Visit waterfall and Red Dao village",
        "Herbal foot soak at the end",
      ],
      itinerary: [
        {
          time: "Day 1",
          title: "Start trek from Hmong House",
        },
        {
          time: "9:30 AM",
          title: "Meet guide at Hmong House",
        },
        {
          time: "10:00 AM",
          title: "Visit ancient Hmong village",
        },
        {
          time: "11:30 AM",
          title: "Visit Ta Van Mong village",
        },
        {
          time: "1:00 PM",
          title: "Climb to Lao Chai San",
        },
        {
          time: "3:00 PM",
          title: "Reach mountain peak, sea of clouds",
        },
        {
          time: "5:00 PM",
          title: "Arrive at local farm, set up camping",
        },
        {
          time: "6:00 PM",
          title: "Harvest vegetables and cook dinner with locals",
        },
        {
          time: "Day 2",
          title: "Hike down through forest and villages",
        },
        {
          time: "7:00 AM",
          title: "Sunrise breakfast",
        },
        {
          time: "9:30 AM",
          title: "Hike down through bamboo forest",
        },
        {
          time: "11:00 AM",
          title: "Visit waterfall (swim if weather permits)",
        },
        {
          time: "12:30 PM",
          title: "Lunch",
        },
        {
          time: "1:30 PM",
          title: "Visit Giang Ta Chai Dao village",
        },
        {
          time: "3:00 PM",
          title: "Walk along Muong Hoa stream",
        },
        {
          time: "4:00 PM",
          title: "Return to Hmong House, herbal foot soak",
        },
      ],
      included: [
        "Taxes",
        "Filtered water",
        "2 guides",
        "2 lunches",
        "Camping gear",
        "Group dinner",
        "Private sleeping tents",
        "Herbal foot soak",
        "Laundry and drying",
        "Shoe drying",
        "Luggage transfer support",
      ],
      notIncluded: [
        "Extra drinks during camping and lunch",
        "Souvenirs",
        "Tips",
      ],
      meetingPoint: "Hmong House Sapa, Ta Van Village",
      startTime: "Day 1 · 07:30",
      endTime: "Day 2 · 16:00",
      images: [
        "/images/tours/camping-trek/1.jpeg",
        "/images/tours/camping-trek/2.jpeg",
        "/images/tours/camping-trek/3.jpeg",
        "/images/tours/camping-trek/4.jpeg",
        "/images/tours/camping-trek/5.jpeg",
        "/images/tours/camping-trek/6.jpeg",
        "/images/tours/camping-trek/7.jpeg",
        "/images/tours/camping-trek/8.jpeg",
        "/images/tours/camping-trek/9.jpeg",
        "/images/tours/camping-trek/10.jpeg",
        "/images/tours/camping-trek/11.jpeg",
        "/images/tours/camping-trek/12.jpeg",
        "/images/tours/camping-trek/13.jpeg",
        "/images/tours/camping-trek/14.jpeg",
        "/images/tours/camping-trek/15.jpeg",
        "/images/tours/camping-trek/16.jpeg",
        "/images/tours/camping-trek/17.jpeg",
        "/images/tours/camping-trek/18.jpeg",
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
        "Explore all famous spots in Sa Pa by motorbike: villages, waterfall, Heaven's Gate, and Glass Bridge",
      fullDescription:
        "Depart at 9:30 AM from Hmong House. Visit Ta Van Village, then Lao Chai Village, and continue to Y Linh Ho — boasting the most beautiful terraced rice fields in Sa Pa. Stop for stunning photos along the way. Continue along terraced fields to Sa Pa town to visit Cat Cat Village — famous and comparable to Fenghuang Ancient Town in China. Ride to Love Waterfall, the most famous waterfall in Sa Pa with its romantic legend and mystical beauty. Then reach Heaven's Gate — the highest peak where two provinces meet, offering panoramic views and drifting clouds. Optional visit to the Glass Bridge for adventure activities. Return via national highway. This tour explores almost all famous spots in Sa Pa, passing through about 10 villages.",
      highlights: [
        "Visit Ta Van, Lao Chai, and Y Linh Ho villages",
        "See the most beautiful terraced rice fields in Sa Pa",
        "Visit Cat Cat Village and Love Waterfall",
        "Reach Heaven's Gate - the highest peak with panoramic views",
        "Optional visit to Glass Bridge",
        "Pass through about 10 villages",
      ],
      itinerary: [
        {
          time: "9:30 AM",
          title: "Depart from Hmong House",
        },
        {
          time: "10:00 AM",
          title: "Visit Ta Van Village",
        },
        {
          time: "10:30 AM",
          title: "Visit Lao Chai Village",
        },
        {
          time: "11:30 AM",
          title: "Y Linh Ho Village (most beautiful terraces)",
        },
        {
          time: "12:30 PM",
          title: "Lunch break",
        },
        {
          time: "1:30 PM",
          title: "Visit Cat Cat Village",
        },
        {
          time: "2:30 PM",
          title: "Love Waterfall",
        },
        {
          time: "3:30 PM",
          title: "Heaven's Gate",
        },
        {
          time: "4:30 PM",
          title: "Optional Glass Bridge",
        },
        {
          time: "5:30 PM",
          title: "Return via national highway",
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
        "/images/tours/motorbike-tour/1.jpg",
        "/images/tours/motorbike-tour/2.jpg",
        "/images/tours/motorbike-tour/3.jpg",
        "/images/tours/motorbike-tour/4.jpeg",
        "/images/tours/motorbike-tour/5.jpeg",
        "/images/tours/motorbike-tour/6.jpeg",
        "/images/tours/motorbike-tour/7.jpeg",
        "/images/tours/motorbike-tour/8.jpeg",
        "/images/tours/motorbike-tour/9.jpeg",
        "/images/tours/motorbike-tour/10.jpeg",
        "/images/tours/motorbike-tour/11.jpeg",
        "/images/tours/motorbike-tour/12.jpeg",
        "/images/tours/motorbike-tour/13.jpeg",
        "/images/tours/motorbike-tour/14.jpeg",
        "/images/tours/motorbike-tour/15.jpeg",
        "/images/tours/motorbike-tour/16.jpeg",
        "/images/tours/motorbike-tour/17.jpeg",
        "/images/tours/motorbike-tour/18.jpeg",
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
