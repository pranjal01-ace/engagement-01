/**
 * Anshika & Aman - Royal Engagement Invitation Data
 * Central configuration file for easy updating of names, families, event details, and media assets.
 */

export const INVITATION_DATA = {
  // Event Titles
  celebrationTitle: "Royal Engagement Ceremony",
  ceremonySubheading: "A Sacred Union of Two Souls & Two Families",
  
  // Bride Information (Anshika First)
  bride: {
    firstName: "Anshika",
    fullName: "Anshika",
    tagline: "The Royal Bride",
    parents: {
      father: "Santosh Kumar",
      mother: "Anju Kashyap",
      description: "D/o Shri Santosh Kumar & Smt. Anju Kashyap"
    },
    photo: "/assets/images/bride/anshika-portrait-floral.jpeg",
    alternatePhoto: "/assets/images/bride/anshika-traditional-temple.jpeg",
    images: [
      "/assets/images/bride/anshika-portrait-floral.jpeg",
      "/assets/images/bride/anshika-traditional-temple.jpeg"
    ]
  },

  // Groom Information (Aman Second)
  groom: {
    firstName: "Aman",
    fullName: "Aman",
    tagline: "The Royal Groom",
    parents: {
      father: "Dildaar Singh",
      mother: "Mithlesh Devi",
      description: "S/o Shri Dildaar Singh & Smt. Mithlesh Devi"
    },
    photo: "/assets/images/groom/aman-royal-kurta.jpeg",
    alternatePhoto: "/assets/images/groom/aman-classic-portrait.jpeg",
    images: [
      "/assets/images/groom/aman-royal-kurta.jpeg",
      "/assets/images/groom/aman-classic-portrait.jpeg"
    ]
  },

  // Couple Shared Images (Anshika & Aman)
  couple: {
    title: "Anshika & Aman",
    subtitle: "Two Souls Destined by Grace",
    portraitPhoto: "/assets/images/couple/aman-anshika-portrait.jpeg",
    togetherPhoto: "/assets/images/couple/aman-anshika-together.jpeg",
    images: [
      "/assets/images/couple/aman-anshika-portrait.jpeg",
      "/assets/images/couple/aman-anshika-together.jpeg"
    ]
  },

  // Families Information & Dedicated Photograph Paths (Bride Family First)
  families: {
    brideFamily: {
      name: "Kashyap Parivaar",
      father: "Santosh Kumar",
      mother: "Anju Kashyap",
      photo: "/assets/images/bride-family/kashyap-family-blessings.jpeg",
      description: "D/o Shri Santosh Kumar & Smt. Anju Kashyap"
    },
    groomFamily: {
      name: "Singh Parivaar",
      father: "Dildaar Singh",
      mother: "Mithlesh Devi",
      photo: "/assets/images/groom-family/singh-family-blessings.jpeg",
      description: "S/o Shri Dildaar Singh & Smt. Mithlesh Devi"
    }
  },

  // Categorized Arrays of Photographs (Bride Images First)
  brideImages: [
    "/assets/images/bride/anshika-portrait-floral.jpeg",
    "/assets/images/bride/anshika-traditional-temple.jpeg"
  ],
  groomImages: [
    "/assets/images/groom/aman-royal-kurta.jpeg",
    "/assets/images/groom/aman-classic-portrait.jpeg"
  ],
  coupleImages: [
    "/assets/images/couple/aman-anshika-portrait.jpeg",
    "/assets/images/couple/aman-anshika-together.jpeg"
  ],
  brideFamilyImages: [
    "/assets/images/bride-family/kashyap-family-blessings.jpeg"
  ],
  groomFamilyImages: [
    "/assets/images/groom-family/singh-family-blessings.jpeg"
  ],

  // Event Date and Time
  event: {
    type: "Engagement Ceremony",
    // 22 November 2026 at 12:00 PM IST (GMT+5:30)
    isoDate: "2026-11-22T12:00:00+05:30",
    dateFormatted: "Sunday, 22nd November 2026",
    timeFormatted: "12:00 PM (Noon)",
    dayName: "Sunday",
    dayNumber: "22",
    monthName: "November",
    year: "2026",
    muhuratNote: "Subh Muhurat : 12:00 PM onwards"
  },

  // Venue Details
  venue: {
    name: "M.G. Polytechnic College (Gate No. 2)",
    addressLine1: "Gate No. 2 ke samne, M.G. Polytechnic College",
    addressLine2: "Agra Road, Avas Vikas Colony",
    city: "Hathras",
    state: "Uttar Pradesh",
    pincode: "204101",
    country: "India",
    fullAddress: "Gate No. 2 ke samne, M.G. Polytechnic College, Agra Road, Avas Vikas Colony, Hathras, Uttar Pradesh – 204101, India",
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=Gate+No.+2+M.G.+Polytechnic+College+Agra+Road+Avas+Vikas+Colony+Hathras+Uttar+Pradesh+204101",
    embedQuery: "Gate No. 2 M.G. Polytechnic College Agra Road Hathras 204101"
  },

  // Opening Invocation
  ganeshOpening: {
    sanskritMantra: "|| श्री गणेशाय नमः ||",
    englishMantra: "Shree Ganeshay Namaha",
    shloka: "वक्रतुण्ड महाकाय सूर्यकोटि समप्रभ। निर्विघ्नं कुरु मे देव सर्वकार्येषु सर्वदा॥",
    shlokaMeaning: "O Lord Ganesha, of curved trunk, immense body, and the brilliance of a million suns, please make all our endeavors obstacle-free always.",
    image: "/assets/images/ganesh/shri-ganesh.png",
    svgFallback: "/assets/images/ganesh/shri-ganesh.svg"
  },

  // Royal Welcome Messages
  welcome: {
    blessing: "With the divine blessings of Shri Ganesh Ji",
    quote: "Two families, two hearts, one beautiful celebration.",
    invitationNote: "Together with our families, we cordially invite you to celebrate a special beginning as Anshika & Aman exchange rings and embark on a timeless journey of love and togetherness."
  },

  // Photo Gallery Configuration - Anshika First, then Aman
  gallery: [
    {
      id: "couple-portrait",
      category: "couple",
      title: "Anshika & Aman",
      subtitle: "A Sacred Bond Begins",
      image: "/assets/images/gallery/gallery-01-couple-portrait.jpeg",
      aspectRatio: "portrait",
      objectPosition: "object-[center_25%]"
    },
    {
      id: "bride-floral",
      category: "bride",
      title: "The Radiant Bride",
      subtitle: "Anshika",
      image: "/assets/images/gallery/gallery-05-bride-portrait.jpeg",
      aspectRatio: "portrait",
      objectPosition: "object-[center_15%]"
    },
    {
      id: "groom-royal",
      category: "groom",
      title: "The Royal Groom",
      subtitle: "Aman in Traditional Kurta",
      image: "/assets/images/gallery/gallery-03-groom-royal-kurta.jpeg",
      aspectRatio: "portrait",
      objectPosition: "object-[center_15%]"
    },
    {
      id: "couple-together",
      category: "couple",
      title: "Moments of Joy",
      subtitle: "Anshika & Aman",
      image: "/assets/images/gallery/gallery-02-couple-together.jpeg",
      aspectRatio: "landscape",
      objectPosition: "object-[center_20%]"
    },
    {
      id: "bride-traditional",
      category: "bride",
      title: "Divine Grace",
      subtitle: "Anshika in Traditional Anarkali",
      image: "/assets/images/gallery/gallery-04-bride-traditional.jpeg",
      aspectRatio: "portrait",
      objectPosition: "object-[center_15%]"
    },
    {
      id: "groom-classic",
      category: "groom",
      title: "Aman",
      subtitle: "Evening Reflections",
      image: "/assets/images/gallery/gallery-06-groom-classic.jpeg",
      aspectRatio: "portrait",
      objectPosition: "object-[center_15%]"
    },
    {
      id: "bride-family",
      category: "family",
      title: "Kashyap Parivaar",
      subtitle: "Santosh Kumar, Anju Kashyap & Anshika",
      image: "/assets/images/bride-family/kashyap-family-blessings.jpeg",
      aspectRatio: "landscape",
      objectPosition: "object-[center_35%]"
    },
    {
      id: "groom-family",
      category: "family",
      title: "Singh Parivaar",
      subtitle: "Dildaar Singh, Mithlesh Devi & Aman",
      image: "/assets/images/gallery/gallery-08-groom-family.jpeg",
      aspectRatio: "landscape",
      objectPosition: "object-[center_25%]"
    }
  ],

  // Background Audio Configuration
  audio: {
    src: "/assets/audio/song.mp3",
    mpegSrc: "/assets/audio/song.mpeg",
    title: "Anshika & Aman Engagement Celebration Song"
  },

  // Final Closing Note
  finalInvitation: {
    closingHeading: "Warmest Regards & Invitation",
    mainMessage: "Your gracious presence will make our celebration even more memorable and special.",
    blessingNote: "With love and blessings,",
    signature: "Anshika & Aman",
    rsvpFamilies: "Kashyap & Singh Families",
    partingWord: "Looking forward to celebrating with you!"
  }
};
