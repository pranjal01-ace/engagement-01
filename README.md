# 💍 Anshika & Aman – Royal Engagement Invitation

An interactive, cinematic royal traditional Indian engagement invitation web application crafted for **Anshika & Aman**.

Built with **React**, **Vite**, **Tailwind CSS**, and **Framer Motion**, featuring traditional Rajput/Mughal decorative aesthetics, devotional Shri Ganesh Ji invocation, royal palace arches, interactive photo gallery, live dynamic countdown, and seamless WhatsApp sharing.

---

## 🌟 Event Details

- **Bride**: Anshika (D/o Shri Santosh Kumar & Smt. Anju Kashyap)
- **Groom**: Aman (S/o Shri Dildaar Singh & Smt. Mithlesh Devi)
- **Event**: Royal Engagement Ceremony (सगाई एवं मुद्रिका प्रदान समारोह)
- **Date**: Sunday, 22nd November 2026
- **Time**: 12:00 PM (Noon) onwards
- **Venue**: Gate No. 2 ke samne, M.G. Polytechnic College, Agra Road, Avas Vikas Colony, Hathras, Uttar Pradesh – 204101, India
- **Google Maps**: [Get Directions](https://www.google.com/maps/search/?api=1&query=Gate+No.+2+M.G.+Polytechnic+College+Agra+Road+Avas+Vikas+Colony+Hathras+Uttar+Pradesh+204101)

---

## 👑 Cinematic Scenes & Features

1. **Devotional Invocation (Shri Ganesh Ji)**:
   - Full-screen dark navy backdrop with a slowly rotating golden mandala.
   - Ornate corner filigree and floating celestial golden particles.
   - Sacred Sanskrit shloka (*"वक्रतुण्ड महाकाय सूर्यकोटि समप्रभ..."*) and *"|| श्री गणेशाय नमः ||"*.
2. **Royal Palace Welcome**:
   - Scalloped archway and golden wax seal crest.
   - Traditional auspicious greetings and muhurat confirmation.
3. **Couple Introduction (Anshika & Aman)**:
   - Staggered Framer Motion reveals with royal gold and maroon framing.
   - Anshika (The Royal Bride) presented first on the left, calligraphic ampersand, Aman (The Royal Groom) on the right.
   - Interactive photo switcher toggling between festive portraits.
4. **Family Lineage (Kashyap & Singh Parivaars)**:
   - High-resolution family group portraits.
   - Traditional blessings honoring parents: Shri Santosh Kumar & Smt. Anju Kashyap, and Shri Dildaar Singh & Smt. Mithlesh Devi.
5. **Cherished Moments (Photo Gallery)**:
   - Curated gallery with category filtering: *All*, *Couple*, *Bride*, *Groom*, and *Families*.
   - Intelligent face-centered object positioning.
   - Full-screen lightbox modal with keyboard navigation (`←`, `→`, `Esc`).
6. **Save The Date & Live Countdown**:
   - Real-time countdown updating every second to 22 November 2026 at 12:00 PM IST.
   - One-click **"Add to Google Calendar"** with pre-filled venue address.
7. **Destination & Maps**:
   - Complete venue address with embedded responsive Google Maps card.
   - One-click **"Get Directions"** and **"Copy Address"** buttons.
8. **Royal Blessings & WhatsApp Sharing**:
   - Interactive **"Shower Royal Blessings"** firing golden confetti and rose petal particles (`canvas-confetti`).
   - One-click **"Share on WhatsApp"** button generating a formatted royal invite message.
9. **Audio Soundtrack**:
   - Background audio playback (`song.mpeg` / `song.mp3`) with dual-source fallback and Web Audio API synthesizer.

---

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher recommended)
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/kashyap01pranjal/Engagement.git
cd Engagement

# Install dependencies
npm install

# Start development server
npm run dev
```

The application will be live at: `http://localhost:5174/`

### Production Build

```bash
# Create optimized production build
npm run build

# Preview build locally
npm run preview
```

---

## 📁 Project Structure

```
Engagement/
├── index.html                           # SEO, Open Graph & Google Fonts
├── vite.config.js                       # Vite configuration
├── tailwind.config.js                   # Royal color palette & keyframes
├── vercel.json                          # Vercel deployment configuration
├── public/
│   ├── favicon.svg                      # Royal Kalash / Ganesha favicon
│   ├── og-image.svg                     # WhatsApp preview card
│   └── assets/
│       ├── audio/
│       │   ├── song.mpeg                # Original audio track
│       │   └── song.mp3                 # Cross-platform MP3 companion
│       └── images/
│           ├── bride/                   # Anshika's portraits
│           ├── groom/                   # Aman's portraits
│           ├── couple/                  # Couple portraits
│           ├── bride-family/            # Kashyap family portrait
│           ├── groom-family/            # Singh family portrait
│           ├── gallery/                 # Curated gallery photographs
│           ├── decorations/             # Mandalas, arches, seals, filigree
│           └── ganesh/                  # Devotional Ganesh Ji artwork
└── src/
    ├── data/
    │   └── invitation.js                # Central configuration (names, dates, assets)
    ├── components/
    │   ├── LoadingScreen.jsx            # Royal curtain gate & seal
    │   ├── MusicControl.jsx             # Audio player with mute/unmute
    │   ├── CinematicParticles.jsx       # Floating golden dust/embers canvas
    │   ├── GaneshOpening.jsx            # Scene 1: Ganesh Ji
    │   ├── RoyalWelcome.jsx             # Scene 2: Royal Welcome
    │   ├── CoupleIntroduction.jsx       # Scene 3: Anshika & Aman
    │   ├── FamilyIntroduction.jsx       # Scene 4: Families
    │   ├── PhotoGallery.jsx             # Scene 5: Photo Gallery
    │   ├── LightboxModal.jsx            # Full-screen image viewer
    │   ├── Countdown.jsx                # Scene 6: Live Countdown
    │   ├── VenueSection.jsx             # Scene 7: Venue & Google Maps
    │   ├── FinalInvitation.jsx          # Scene 8: Blessings & WhatsApp share
    │   ├── NavigationPills.jsx          # Quick-jump scene pills
    │   └── CornerOrnaments.jsx          # Traditional corner filigree
    ├── App.jsx
    └── main.jsx
```

---

## 🌐 Deploy to Vercel

1. Push your repository to GitHub (`main` branch).
2. Go to [Vercel](https://vercel.com) and import the repository.
3. Framework preset will automatically detect **Vite**.
4. Click **Deploy**. Your invitation will be live at `https://<your-project>.vercel.app`!

---

## 💖 Credits

Dedicated with love to **Anshika & Aman** on their Royal Engagement Ceremony.
Wishing both families endless happiness, prosperity, and joy!

