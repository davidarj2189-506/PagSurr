import { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'en' | 'es';

type Translations = Record<Language, Record<string, any>>;

export const translations: Translations = {
  en: {
    menu: {
      home: 'Home',
      classes: 'Classes',
      kids: 'Kids (6-12)',
      family: 'Family Surf',
      private: 'Private Coaching',
      about: 'About Bryan',
      booking: 'Book a Lesson',
      faq: 'FAQ',
      gallery: 'Gallery',
      contact: 'Contact & WhatsApp',
      us: 'Our Story',
      service: 'All Services',
      blog: 'Surf Guide'
    },
    home: {
      heroTitle: 'FIRST PEAK',
      heroSubtitle: 'Where first waves become forever memories.',
      heroBadge: 'Nosara, Costa Rica • Boutique Kids & Family Surf School',
      aboutConnection: '01 / Safety & Philosophy',
      aboutTitle: 'Gentle Waves. Big Smiles.',
      aboutDesc: 'Located on the warm, sand-bottom shores of Playa Guiones, First Peak Surf is designed specifically for children (ages 6–12) and families. We combine calm, positive pedagogy with unmatched ocean safety standards to ensure every session is pure joy.',
      aboutBtn: 'Meet Coach Bryan',
      differentiatorsTitle: 'The First Peak Difference',
      differentiatorsSubtitle: 'Why Parents Trust Us',
      differentiators: [
        {
          num: '01',
          title: '1:3 Max Ratio',
          desc: 'We never compromise on safety. A strict maximum of 3 kids per certified instructor ensures eyes and hands are always there.'
        },
        {
          num: '02',
          title: 'Pediatric First Aid',
          desc: 'Every instructor is certified in pediatric CPR and ocean lifeguarding, with specialized child-development training.'
        },
        {
          num: '03',
          title: 'Video Analysis Included',
          desc: 'High-definition beachside footage included with every session. Review your child’s progress and keep the memory forever.'
        },
        {
          num: '04',
          title: 'Eco-Stewardship',
          desc: 'Surfing inside the Ostional wildlife corridor. We teach kids to respect the ocean, spot sea turtles, and protect the reef.'
        }
      ],
      servicesTitle: 'Our Programs',
      servicesSubtitle: 'Crafted for Every Family Need',
      servicesItems: [
        {
          title: 'Kids Grom Academy (6-12)',
          desc: 'Playful, safe, and empowering. Water confidence games, pop-up mastery, and catching endless gentle whitewater rollers.',
          path: '/classes/kids',
          tag: 'Most Popular'
        },
        {
          title: 'Family Surf Session',
          desc: 'Catch waves side-by-side. Customized boards for parents and kids, shared laughter, and zero pressure.',
          path: '/classes/family',
          tag: 'Family Favorite'
        },
        {
          title: '1-on-1 VIP Private',
          desc: 'Dedicated coaching with Coach Bryan. Rapid progress, video breakdown, and tailored wave selection for beginners to intermediate.',
          path: '/classes/private',
          tag: 'Dedicated 1:1'
        },
        {
          title: 'Multi-Day Progression Camp',
          desc: '3 or 5 day immersion. Daily video review, ocean reading skills, ocean ecology certificate, and huge confidence gains.',
          path: '/classes',
          tag: 'Best Value'
        }
      ],
      videoBannerTitle: 'See the Joy in Action',
      videoBannerSubtitle: 'Video analysis isn’t an extra charge here—it’s fundamental to our teaching and your family memories.',
      statsRatio: '1:3',
      statsRatioLabel: 'Max Student-Coach Ratio',
      statsSafety: '100%',
      statsSafetyLabel: 'Pediatric Safety Record',
      statsAge: '6-12',
      statsAgeLabel: 'Core Age Focus',
      statsBeach: '300+',
      statsBeachLabel: 'Days of Gentle Waves / Year',
      testimonialsTitle: 'What Families Say',
      testimonials: [
        {
          quote: "Bryan has an extraordinary gift with kids. My 7-year-old daughter was terrified of the waves at first, and within 40 minutes she was standing up with the biggest grin I’ve ever seen.",
          parent: "Sarah & Maya M.",
          from: "San Francisco, CA"
        },
        {
          quote: "The 1:3 ratio and the video analysis made all the difference. We got to watch the clips back at our hotel and see exactly how our boys improved every day. Truly unforgettable.",
          parent: "David & Tom K.",
          from: "Toronto, Canada"
        }
      ],
      ctaBannerTitle: 'Ready for Your Family’s First Wave?',
      ctaBannerText: 'Spaces are limited to ensure strict 1:3 ratios. Reserve your session in Playa Guiones or message us directly on WhatsApp.',
      ctaBookBtn: 'Book Session',
      ctaWhatsappBtn: 'Chat on WhatsApp',
      contactPre: 'Direct Connection',
      footer1: '© 2026 First Peak Surf Nosara',
      footer2: 'Playa Guiones, Guanacaste, Costa Rica',
      footer3: 'Where First Waves Become Forever Memories'
    },
    classes: {
      title: 'Surf Programs &\nExperiences',
      subtitle: 'Tailored for young minds, growing confidence, and family bonding in Playa Guiones.',
      overviewBadge: 'Boutique Coaching • Max 1:3 Ratio • Video Included',
      programs: [
        {
          id: 'kids',
          title: 'Kids Grom Academy (Ages 6-12)',
          tagline: 'The ultimate confidence-building ocean experience for young surfers.',
          duration: '1.5 Hours',
          ratio: 'Max 1:3 Ratio',
          price: '$95',
          priceNote: 'per child • video clips included',
          bullets: [
            '15-minute playful sand safety & pop-up practice',
            'Dedicated certified coach right next to your child at all times',
            'Ultra-buoyant, ultra-safe soft-top foam boards',
            'Full HD video analysis package sent to parents after session',
            'High-SPF zinc sunscreen, rash guard, and fresh coconut water'
          ],
          cta: 'Explore Kids Program',
          path: '/classes/kids',
          image: 'https://images.unsplash.com/photo-1502680390469-be75c86b636f?auto=format&fit=crop&q=80'
        },
        {
          id: 'family',
          title: 'Family Wave Adventure',
          tagline: 'Ride together, celebrate together. Perfect for parents and kids.',
          duration: '2 Hours',
          ratio: '2 Coaches for Family of 4',
          price: '$320',
          priceNote: 'family of 4 ($75 each additional)',
          bullets: [
            'Two coaches assigned to balance parent and child paces',
            'Group video analysis session with coach tips for the whole family',
            'Complimentary beach canopy setup for relaxed spectating',
            'Safety gear, child & adult premium soft-top and longboard options',
            'Family group photos and action clips included'
          ],
          cta: 'Explore Family Surf',
          path: '/classes/family',
          image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&q=80'
        },
        {
          id: 'private',
          title: '1-on-1 VIP Coaching',
          tagline: 'Exclusive personal coaching with Coach Bryan for accelerated learning.',
          duration: '1.5 Hours',
          ratio: '1:1 Private Attention',
          price: '$140',
          priceNote: 'per surfer • high performance coaching',
          bullets: [
            '100% dedicated focus tailored to exact skill level and goals',
            'In-depth wave mechanics, paddle efficiency, and positioning',
            'Continuous in-water feedback with live coach assistance',
            'Slow-motion video breakdown session directly on the beach tablet',
            'Ideal for nervous first-timers or kids ready to catch green waves'
          ],
          cta: 'Explore 1-on-1 Coaching',
          path: '/classes/private',
          image: 'https://images.unsplash.com/photo-1528150177508-7cc0c36cda5c?auto=format&fit=crop&q=80'
        }
      ],
      packagesTitle: '3 & 5 Day Progression Packages',
      packagesSubtitle: 'True transformation happens over several tides.',
      packages3Day: '3-Day Immersion ($255/child)',
      packages3DayDesc: 'From whitewater to paddling into their own reform waves. Includes 3 video sessions and progress log.',
      packages5Day: '5-Day Grom Camp ($395/child)',
      packages5DayDesc: 'Complete ocean literacy, rip current safety, catching green waves, and First Peak Junior Surfer diploma.',
      packagesCta: 'Book Multi-Day Package'
    },
    kids: {
      badge: 'Ages 6 to 12 • Safety First',
      title: 'Kids Grom\nAcademy',
      subtitle: 'Where patience, ocean science, and playtime meet to create lifelong confident surfers.',
      heroImage: 'https://images.unsplash.com/photo-1502680390469-be75c86b636f?auto=format&fit=crop&q=80',
      introTitle: 'Why Nosara is the Best Place on Earth for Kids to Learn',
      introText: 'Playa Guiones features a wide, gentle sandy shelf with no sharp rocks, no reef hazards, and hundreds of meters of soft waist-deep whitewater. It is nature’s safest classroom. We pair this world-class arena with gentle instruction designed specifically for developing motor skills and tender ocean confidence.',
      pillars: [
        {
          title: 'Safety is Non-Negotiable',
          desc: 'Never more than 3 kids per instructor. Our coaches hold hands, guide every pop-up, and stay by your child’s side in the water at all times.'
        },
        {
          title: 'Gamified Skill Building',
          desc: 'We turn balance into games like "The Flamingo", paddling into "Turtle Chases", and pop-ups into "The Ninja Spring" on the sand first.'
        },
        {
          title: 'Child-Sized Gear',
          desc: 'Lightweight, extra-wide foam boards that won’t bruise small knees or heads, soft rubber fins, and rash guards with UPF 50+ sun defense.'
        },
        {
          title: 'Video Celebration',
          desc: 'We capture the smiles, the wipeouts turned into laughs, and the triumphant first standing ride for parents to cherish forever.'
        }
      ],
      stepTitle: 'The Kids Lesson Blueprint (90 Minutes)',
      steps: [
        {
          time: '00-15 Min',
          name: 'Beach Safety & Sand Drills',
          detail: 'Ocean rules, wave breathing, board anatomy, and popping up into our balance stance on the soft sand.'
        },
        {
          time: '15-60 Min',
          name: 'Whitewater Gliding & Pop-ups',
          detail: 'In waist-deep water with coach launching every board. Focus on timing, looking forward, and celebrating each ride.'
        },
        {
          time: '60-75 Min',
          name: 'Independent Catching & Turning',
          detail: 'Kids learn to spot their own foam rollers, paddle with energy, and steer the board left and right.'
        },
        {
          time: '75-90 Min',
          name: 'Fresh Coconut & Video Review',
          detail: 'Cooling down under our shade tent, drinking fresh cold pipa fría, and watching their video highlights.'
        }
      ],
      ctaTitle: 'Give Your Child the Gift of the Ocean',
      ctaText: 'Sessions run daily timed with the best morning or sunset low tides. Spaces strictly capped.',
      ctaBtn: 'Book Kids Academy'
    },
    family: {
      badge: 'All Ages • Parents & Kids Together',
      title: 'Family Surf\nAdventures',
      subtitle: 'Unplug from screens. Connect with nature and each other on the warm waves of Nosara.',
      heroImage: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&q=80',
      introTitle: 'Shared Triumphs in Warm Costa Rican Water',
      introText: 'There is nothing quite like hearing your kids cheer for you as you catch a wave, or watching them ride their first roller with pure joy. Our family sessions are designed so everyone progresses at their own pace without feeling rushed or left behind.',
      features: [
        {
          title: 'Tailored Equipment for All',
          desc: 'High-volume cruising boards for mom and dad, lightweight stable foamies for the groms, plus shade umbrellas and fresh fruit for the beach.'
        },
        {
          title: 'Dual Coach Strategy',
          desc: 'One coach stays focused on the kids in the inside whitewater, while a second coach guides parents out to the reform or outside peaks.'
        },
        {
          title: 'Zero Pressure, Pure Fun',
          desc: 'Take breaks whenever you want. Our beach setup ensures grandparents and resting family members have prime viewing in comfort.'
        }
      ],
      ctaBtn: 'Reserve Family Experience'
    },
    private: {
      badge: '1-on-1 VIP Instruction',
      title: 'Private Surf\nCoaching',
      subtitle: 'Personalized attention with Coach Bryan to fast-track technique, ocean awareness, and wave count.',
      heroImage: 'https://images.unsplash.com/photo-1528150177508-7cc0c36cda5c?auto=format&fit=crop&q=80',
      introTitle: '100% Focused on Your Journey',
      introText: 'Whether your child needs gentle one-on-one encouragement to conquer water anxiety, or you are an adult looking to transition from foamies to trimming green waves, our private coaching offers the ultimate customized curriculum.',
      benefits: [
        {
          title: 'Tide-Optimized Scheduling',
          desc: 'We select the exact hour of the day with the cleanest wave shape and lowest crowd density for your session.'
        },
        {
          title: 'Immediate In-Water Coaching',
          desc: 'Bryan paddles right alongside you, positioning you on the peak and giving real-time cues before, during, and after every ride.'
        },
        {
          title: 'Frame-by-Frame Video Clinic',
          desc: 'Review slow-motion playback on an iPad right on the beach immediately after exiting the water to lock in muscle memory.'
        }
      ],
      ctaBtn: 'Book 1-on-1 Session'
    },
    about: {
      badge: 'Nosara Waterman & Educator',
      title: 'Meet Coach\nBryan',
      subtitle: 'Founder, certified lifeguard, and passionate surf mentor for the next generation.',
      heroImage: 'https://images.unsplash.com/photo-1528150177508-7cc0c36cda5c?auto=format&fit=crop&q=80',
      bio1: 'Born and raised with the ocean as his backyard in Guanacaste, Bryan has spent over two decades surfing the Pacific breaks of Costa Rica. For the past 12 years, he has dedicated his life to teaching—specializing in children and nervous beginners who need more than just technique: they need trust.',
      bio2: 'Bryan founded First Peak Surf with a simple belief: every child’s first experience with the ocean should be safe, magical, and empowering. By limiting class sizes to a maximum of 3 students per coach and incorporating video feedback, he ensures no child is ever overlooked.',
      certificationsTitle: 'Safety Credentials & Certifications',
      certs: [
        'ISA (International Surfing Association) Level 2 Surf Coach',
        'Pediatric & Adult CPR / AED Certified (Red Cross Costa Rica)',
        'Professional Ocean Lifeguard (Nosara Lifeguards Association)',
        'Child Psychology in Sports Fundamentals Training',
        'Ostional Wildlife Refuge Eco-Guide Certified'
      ],
      philosophyTitle: 'The First Peak Philosophy',
      philosophies: [
        {
          title: 'Empowerment Over Ego',
          desc: 'We never push a child beyond their comfort zone. Confidence is built wave by wave through encouragement, patience, and clear communication.'
        },
        {
          title: 'The Blue Zone Lifestyle',
          desc: 'Nosara is one of the world’s rare Blue Zones. We embrace healthy living, clean eating, mindful breathing, and deep respect for our marine environment.'
        },
        {
          title: 'Community Roots',
          desc: 'First Peak Surf supports local community beach cleanups and sponsors surf clinics for local Guanacaste youth throughout the year.'
        }
      ],
      ctaTitle: 'Come Surf with Bryan',
      ctaText: 'Experience the magic of Playa Guiones through the eyes of someone who truly loves sharing the waves.',
      ctaBtn: 'Book with Bryan'
    },
    booking: {
      badge: 'Easy Online Scheduling',
      title: 'Book Your\nSession',
      subtitle: 'Select your preferred class, date, and group size. We time every lesson around the optimal tide for safety.',
      step1: '1. Select Your Program',
      step2: '2. Date & Time Preferences',
      step3: '3. Surfer Details & Special Notes',
      step4: '4. Instant Confirmation & WhatsApp Sync',
      programs: [
        { id: 'kids', name: 'Kids Grom Academy (6-12)', price: '$95 / child', ratio: '1:3 Max Ratio' },
        { id: 'family', name: 'Family Wave Adventure', price: '$320 (up to 4)', ratio: '2 Coaches' },
        { id: 'private', name: '1-on-1 VIP Private Coaching', price: '$140', ratio: '1:1 Coaching' },
        { id: 'camp3', name: '3-Day Progression Package', price: '$255 / child', ratio: 'Multi-Day Immersion' },
        { id: 'camp5', name: '5-Day Grom Master Camp', price: '$395 / child', ratio: 'Diploma & Full Video' }
      ],
      form: {
        programLabel: 'Selected Program',
        dateLabel: 'Preferred Date',
        timeLabel: 'Preferred Time Window',
        timeOptions: ['Morning Low Tide (Calmest, Recommended)', 'Mid-Day Mellow Session', 'Sunset Golden Hour Session'],
        surfersLabel: 'Number of Surfers',
        kidsAgesLabel: 'Ages of Children (if applicable)',
        experienceLabel: 'Experience Level',
        expOptions: ['Absolute First Time', 'Has Tried Once or Twice', 'Comfortable in Whitewater', 'Starting to Paddle Green Waves'],
        swimmingLabel: 'Swimming Comfort',
        swimOptions: ['Basic Water Comfort (can tread / float)', 'Confident Swimmer', 'Very Confident Swimmer'],
        parentNameLabel: 'Parent / Lead Name',
        emailLabel: 'Email Address',
        phoneLabel: 'Phone / WhatsApp Number (with country code)',
        notesLabel: 'Special Requests / Health or Ocean Anxiety Notes',
        notesPlaceholder: 'Tell us about your kids, if they are nervous, if you have specific boards, or any medical notes...',
        submitBtn: 'Confirm Reservation Request',
        calendlyAlt: 'Prefer to pick a live calendar slot? Click below to open Coach Bryan’s Calendly schedule directly:',
        calendlyBtn: 'Open Live Calendly Schedule',
        guarantee: 'No cancellation fee for weather/tide adjustments. We always coordinate the safest window.'
      },
      successTitle: 'Reservation Request Received!',
      successDesc: 'Bryan or our concierge will message you on WhatsApp and email within 2 hours with your exact tide-optimized meeting time at Playa Guiones.'
    },
    faq: {
      badge: 'Parent & Surfer Guide',
      title: 'Frequently Asked\nQuestions',
      subtitle: 'Everything parents need to know about safety, tides, equipment, and learning to surf in Nosara.',
      categories: [
        {
          cat: 'Safety & Ocean Conditions',
          items: [
            {
              q: 'What makes Playa Guiones safe for kids?',
              a: 'Playa Guiones has an entirely sandy bottom with no dangerous rocks, coral, or sea urchins in our lesson zones. It has a very gradual gradient, meaning kids can stand comfortably in waist-deep water while catching long, soft whitewater rollers that glide for 50+ meters.'
            },
            {
              q: 'What is your instructor-to-student ratio?',
              a: 'We operate on a strict maximum of 1:3 ratio for kids. For young children under 7 or children with ocean apprehension, we recommend or automatically assign 1:1 or 1:2 to ensure direct physical supervision at all times.'
            },
            {
              q: 'Are your instructors certified in CPR and First Aid?',
              a: 'Yes. Bryan and all First Peak coaches hold active certifications in Pediatric and Adult CPR, AED, and Ocean Lifeguard Rescue through the Costa Rican Red Cross and the International Surfing Association (ISA).'
            }
          ]
        },
        {
          cat: 'Age, Swimming & Lessons',
          items: [
            {
              q: 'Does my child need to be an Olympic swimmer?',
              a: 'No! Basic water comfort is all that is required. For beginners and kids, all lessons take place in waist-deep water where they can comfortably touch the sandy bottom. Our coaches stay right beside them, stabilizing the board and guiding every movement.'
            },
            {
              q: 'What is the minimum age for surf lessons?',
              a: 'Our core program is built for ages 6 to 12. For 4 and 5 year olds, we offer gentle 1-on-1 "Tadpole" ocean introduction sessions focused on playful water familiarity and tandem riding with Coach Bryan.'
            },
            {
              q: 'What if my child is nervous or afraid of the ocean?',
              a: 'This is Bryan’s specialty! We never rush into the waves. We start on the dry sand with games, practice breathing exercises, explain how waves work, and only wade into gentle ankle-deep water when the child feels safe, curious, and excited.'
            }
          ]
        },
        {
          cat: 'Equipment & Logistics',
          items: [
            {
              q: 'What equipment is included in the lesson?',
              a: 'Everything is provided: custom high-buoyancy soft-top surfboards, soft flex fins, safety leashes, high-UPF rash guards, mineral reef-safe zinc sunscreen, cold drinking water, and fresh coconuts after the session.'
            },
            {
              q: 'How does the video analysis work?',
              a: 'A dedicated team member films key waves from the beach with a telephoto lens. Immediately after or during the post-surf review, we pull up the footage on an iPad so your child can see their pop-up. We deliver all edited full-HD video clips and photos directly to your phone.'
            },
            {
              q: 'What should we bring with us?',
              a: 'Just a swimsuit/boardshorts, a towel, and a water bottle! We provide everything else at our Playa Guiones beach setup.'
            },
            {
              q: 'What is your cancellation and weather policy?',
              a: 'In Nosara, rain is warm and surfing in light rain is wonderful. However, if there is lightning, strong onshore storms, or unsuitable swell for kids, we will happily reschedule to the next safe window or provide a 100% full refund.'
            }
          ]
        }
      ]
    },
    contact: {
      badge: 'Get in Touch',
      title: 'Contact &\nWhatsApp',
      subtitle: 'Have questions or want to check tomorrow’s tides? Message Coach Bryan directly on WhatsApp for instant assistance.',
      whatsappTitle: 'Direct WhatsApp Concierge',
      whatsappDesc: 'The fastest way to reach Bryan directly in Nosara. Ask about tides, board rentals, or family packages.',
      whatsappBtn: 'Open WhatsApp Chat (+506 8899-SURF)',
      whatsappNumber: '+506 8899-7873',
      whatsappMessage: 'Hola Bryan! I would like to inquire about surf lessons for my family in Playa Guiones.',
      emailLabel: 'Email Address',
      email: 'info@firstpeaksurf.com',
      phoneLabel: 'Phone / Costa Rica',
      phone: '+506 8899-7873',
      addressLabel: 'Meeting Location',
      address: 'Playa Guiones (Main Beach Path, North Section), Nosara, Guanacaste, Costa Rica',
      messageTitle: 'Send an Inquiry',
      namePlaceholder: 'Your Name',
      emailPlaceholder: 'Your Email',
      phonePlaceholder: 'WhatsApp / Phone Number',
      messagePlaceholder: 'Tell us about your family, kids’ ages, and dates in Nosara...',
      sendBtn: 'Send Message',
      successMsg: 'Thank you! We will reply within a few hours.',
      socials: ['Instagram', 'Facebook', 'TripAdvisor', 'YouTube']
    },
    gallery: {
      title: 'Family Gallery',
      subtitle: 'Smiles, Waves & Guiones Sunsets',
      images: [
        'https://images.unsplash.com/photo-1502680390469-be75c86b636f?auto=format&fit=crop&q=80',
        'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&q=80',
        'https://images.unsplash.com/photo-1528150177508-7cc0c36cda5c?auto=format&fit=crop&q=80',
        'https://images.unsplash.com/photo-1414490929659-9a12b7e31907?auto=format&fit=crop&q=80',
        'https://images.unsplash.com/photo-1459749411177-042180ce673c?auto=format&fit=crop&q=80',
        'https://images.unsplash.com/photo-1510007551642-eabcb64a1322?auto=format&fit=crop&q=80'
      ]
    },
    us: {
      title: 'First Peak Surf School',
      subtitle: 'Where First Waves Become Forever Memories',
      intro: 'In the heart of Nosara, one of the world’s rare Blue Zones, First Peak Surf was born out of a passion to share the life-changing joy of surfing with kids and families in the safest, most positive environment on earth.',
      sections: [
        {
          subtitle: 'The Perfect Classroom: Playa Guiones',
          paragraph: 'With over 300 days of consistent waves a year and a gentle, sandy slope, Playa Guiones is universally recognized as the safest beach in Central America to teach children.'
        },
        {
          subtitle: 'Pediatric Safety & 1:3 Max Ratio',
          paragraph: 'We never crowd our sessions. Our 1:3 maximum ratio guarantees that every child receives uninterrupted coach attention and constant encouragement.'
        },
        {
          subtitle: 'Video Memories Included',
          paragraph: 'Every triumph, from the first pop-up to riding all the way to the sand, is captured by our beachside video team for your family to cherish forever.'
        }
      ],
      whyTitle: 'Why Surf With First Peak?',
      whyBullets: [
        { title: 'Certified Pediatric Care', desc: 'Every instructor is trained in child CPR, AED, and ocean lifeguard rescue.' },
        { title: 'Gentle, Patient Coaching', desc: 'No pressure, no shouting. We use positive reinforcement, fun games, and ocean science.' },
        { title: 'Eco-Stewardship', desc: 'We teach kids to love and protect Nosara’s marine wildlife and turtle nesting sanctuaries.' }
      ],
      ctaTitle: 'Ready for Your Family’s First Wave?',
      ctaText: 'Join Coach Bryan in Playa Guiones. We provide all child-friendly gear, video analysis, and pure Costa Rican stoke.'
    },
    service: {
      title: 'Our Surf Services\nin Nosara',
      subtitle: 'Every lesson is 1.5 to 2 hours long and includes custom soft-top boards, video analysis, and fresh coconut water.',
      items: [
        {
          name: 'Kids Grom Academy (6-12)',
          tagline: 'Safe, fun, and empowering ocean experience with 1:3 max ratio.',
          bullets: [
            'Duration: 1.5 Hours',
            'Max 3 students per certified coach',
            'HD video analysis package included',
            'Soft-top high-buoyancy custom boards'
          ],
          cta: 'Book Kids Academy',
          image: 'https://images.unsplash.com/photo-1502680390469-be75c86b636f?auto=format&fit=crop&q=80'
        },
        {
          name: 'Family Surf Adventure',
          tagline: 'Ride together with dedicated coaches for parents and kids.',
          bullets: [
            'Duration: 2 Hours',
            'Two coaches for balanced progression',
            'Family photo & video album included',
            'Shade canopy & fresh coconuts on the sand'
          ],
          cta: 'Book Family Adventure',
          image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&q=80'
        },
        {
          name: '1-on-1 VIP Private',
          tagline: 'Personalized mastery with Coach Bryan for rapid confidence.',
          bullets: [
            'Duration: 1.5 Hours',
            '100% dedicated local certified master coach',
            'Slow-motion beach iPad video breakdown',
            'Ideal for nervous beginners or green wave transition'
          ],
          cta: 'Book Private Lesson',
          image: 'https://images.unsplash.com/photo-1528150177508-7cc0c36cda5c?auto=format&fit=crop&q=80'
        }
      ],
      packagesTitle: 'Multi-Day Grom Camps\n(3 or 5 Days)',
      packagesDesc: "True confidence develops over several consecutive tides. Build an unbreakable foundation and take home complete video progress archives.",
      packagesCta: 'Contact us to customize your package'
    },
    blog: {
      title: 'Family Surf Guide',
      subtitle: 'Tips, Tides & Ocean Safety',
      content: {
        h2: 'The Ultimate Guide to Family Surfing in Nosara, Costa Rica',
        h3_1: 'Why Playa Guiones is the Safest Beach for Kids',
        p_1: 'Unlike steep shorebreaks with heavy dumpers, Playa Guiones features a wide, gently sloping sandy shelf. The waves break hundreds of meters out, creating smooth, rolling whitewater that cushions every fall. Combined with 80°F (27°C) warm water year-round, kids never get cold or discouraged.',
        tableHead: ['Program', 'Ages', 'Coach Ratio', 'Key Focus'],
        tableBody: [
           ['Kids Grom Academy', '6-12 Years', 'Max 1:3', 'Fun, Pop-up Mastery, Ocean Safety'],
           ['Family Wave Session', 'All Ages', '2 Coaches (Family of 4)', 'Shared Smiles, Zero Pressure'],
           ['1:1 VIP Private', 'Any Age', '1:1 Exclusive', 'Overcoming Fear, Rapid Progression'],
           ['Multi-Day Grom Camp', '6-12 Years', 'Max 1:3', 'Ocean Literacy, Green Waves, Video Log']
        ],
        h3_2: '5 Tips for Preparing Your Child for Their First Surf Lesson',
        bullets_2: [
           { title: '1. Practice Pop-ups on the Carpet', desc: 'Make it a game at home! Practice springing from stomach to a low surfing stance with knees bent.' },
           { title: '2. Talk About the Ocean as a Friend', desc: 'Explain that the ocean is like a giant playground with rhythm. Respecting waves removes mystery and fear.' },
           { title: '3. Hydration and Zinc Sunscreen', desc: 'Costa Rican tropical sun is intense. Mineral zinc sticks stay on in the water and protect delicate young skin.' },
           { title: '4. Trust the 1:3 Ratio', desc: 'At First Peak, a coach is never more than an arm’s reach away from your child in the water.' }
        ],
        h3_3: 'Why Video Analysis is a Game Changer for Kids',
        bullets_3: [
           { title: 'Visual Confirmation', desc: 'Kids often think they are bending their knees when they are only bending at the waist. Seeing themselves on video creates instant AHA moments!' },
           { title: 'Celebrating Success', desc: 'Watching their successful rides boosts self-esteem and creates tangible excitement for the next morning.' }
        ],
        h3_4: 'Need Local Advice?',
        p_4: 'Reach out to Coach Bryan on WhatsApp anytime. We are happy to advise on tides, local Nosara restaurants, and family activities in Guanacaste.'
      }
    }
  },
  es: {
    menu: {
      home: 'Inicio',
      classes: 'Clases',
      kids: 'Niños (6-12)',
      family: 'Familias',
      private: 'Privadas',
      about: 'Sobre Bryan',
      booking: 'Reservar',
      faq: 'Preguntas Frecuentes',
      gallery: 'Galería',
      contact: 'Contacto y WhatsApp',
      us: 'Nuestra Historia',
      service: 'Todos los Servicios',
      blog: 'Guía de Surf'
    },
    home: {
      heroTitle: 'FIRST PEAK',
      heroSubtitle: 'Donde las primeras olas se convierten en recuerdos eternos.',
      heroBadge: 'Nosara, Costa Rica • Escuela Boutique de Surf para Niños y Familias',
      aboutConnection: '01 / Seguridad y Filosofía',
      aboutTitle: 'Olas Suaves. Grandes Sonrisas.',
      aboutDesc: 'Ubicada en las cálidas aguas de fondo de arena de Playa Guiones, First Peak Surf está diseñada específicamente para niños (6 a 12 años) y familias. Combinamos una pedagogía paciente y positiva con los más altos estándares de seguridad marina.',
      aboutBtn: 'Conoce al Coach Bryan',
      differentiatorsTitle: 'La Diferencia First Peak',
      differentiatorsSubtitle: 'Por Qué los Padres Confían en Nosotros',
      differentiators: [
        {
          num: '01',
          title: 'Ratio Máximo 1:3',
          desc: 'Nunca comprometemos la seguridad. Un máximo estricto de 3 niños por instructor certificado garantiza supervisión directa y constante.'
        },
        {
          num: '02',
          title: 'Primeros Auxilios Pediátricos',
          desc: 'Todos los instructores están certificados en RCP pediátrico y salvamento acuático por la Cruz Roja, con formación en pedagogía infantil.'
        },
        {
          num: '03',
          title: 'Videoanálisis Incluido',
          desc: 'Grabaciones en alta definición desde la playa incluidas en cada sesión. Revisa el progreso de tu hijo y conserva el recuerdo para siempre.'
        },
        {
          num: '04',
          title: 'Conciencia Ecológica',
          desc: 'Surfeamos dentro del corredor de vida silvestre de Ostional. Enseñamos a los niños a respetar el mar y proteger a las tortugas marinas.'
        }
      ],
      servicesTitle: 'Nuestros Programas',
      servicesSubtitle: 'Diseñados para Cada Necesidad Familiar',
      servicesItems: [
        {
          title: 'Kids Grom Academy (6-12 Años)',
          desc: 'Divertido, seguro e inspirador. Juegos de confianza en el agua, técnica de puesta en pie y olas de espuma suaves.',
          path: '/classes/kids',
          tag: 'Más Popular'
        },
        {
          title: 'Aventura de Surf Familiar',
          desc: 'Atrapen olas juntos padres e hijos. Tablas adaptadas a cada edad, risas compartidas y cero presión.',
          path: '/classes/family',
          tag: 'Favorito Familiar'
        },
        {
          title: 'Clase VIP 1-a-1 Privada',
          desc: 'Entrenamiento exclusivo con el Coach Bryan. Progreso acelerado, videoanálisis inmediato y lectura personalizada de olas.',
          path: '/classes/private',
          tag: 'Exclusivo 1:1'
        },
        {
          title: 'Campamento de Progresión Multi-Día',
          desc: 'Inmersión de 3 o 5 días. Revisión diaria en video, lectura de corrientes, diploma First Peak y enorme aumento de confianza.',
          path: '/classes',
          tag: 'Mejor Valor'
        }
      ],
      videoBannerTitle: 'Mira la Alegría en Acción',
      videoBannerSubtitle: 'El videoanálisis no es un costo adicional: es el pilar de nuestra pedagogía y tus recuerdos familiares.',
      statsRatio: '1:3',
      statsRatioLabel: 'Ratio Máximo Alumno-Coach',
      statsSafety: '100%',
      statsSafetyLabel: 'Récord de Seguridad Pediátrica',
      statsAge: '6-12',
      statsAgeLabel: 'Foco Central de Edad',
      statsBeach: '300+',
      statsBeachLabel: 'Días de Olas Suaves al Año',
      testimonialsTitle: 'Lo Que Dicen las Familias',
      testimonials: [
        {
          quote: "Bryan tiene un don extraordinario con los niños. Mi hija de 7 años le tenía miedo a las olas y en 40 minutos estaba parada sobre la tabla con la sonrisa más grande que le he visto.",
          parent: "Sarah y Maya M.",
          from: "San Francisco, CA"
        },
        {
          quote: "El ratio 1:3 y el videoanálisis marcaron toda la diferencia. Pudimos ver los videos en el hotel y entender exactamente cómo mejoraron nuestros hijos cada día. Inolvidable.",
          parent: "David y Tom K.",
          from: "Toronto, Canadá"
        }
      ],
      ctaBannerTitle: '¿Listos para la Primera Ola de tu Familia?',
      ctaBannerText: 'Los cupos son limitados para mantener el ratio estricto 1:3. Reserva tu horario en Playa Guiones o escríbenos directamente por WhatsApp.',
      ctaBookBtn: 'Reservar Sesión',
      ctaWhatsappBtn: 'Chatear por WhatsApp',
      contactPre: 'Conexión Directa',
      footer1: '© 2026 First Peak Surf Nosara',
      footer2: 'Playa Guiones, Guanacaste, Costa Rica',
      footer3: 'Donde las Primeras Olas se Convierten en Recuerdos Eternos'
    },
    classes: {
      title: 'Programas y\nExperiencias de Surf',
      subtitle: 'Diseñados para mentes jóvenes, confianza creciente y conexión familiar en Playa Guiones.',
      overviewBadge: 'Coaching Boutique • Máx Ratio 1:3 • Video Incluido',
      programs: [
        {
          id: 'kids',
          title: 'Kids Grom Academy (6-12 Años)',
          tagline: 'La experiencia marina definitiva para ganar confianza sobre las olas.',
          duration: '1.5 Horas',
          ratio: 'Máx 1:3 Ratio',
          price: '$95',
          priceNote: 'por niño • videos incluidos',
          bullets: [
            '15 minutos de seguridad lúdica y práctica de pop-up en la arena',
            'Instructor certificado al lado de tu hijo en el agua en todo momento',
            'Tablas de espuma blanda de máxima flotabilidad y seguridad',
            'Paquete de videos HD enviado a los padres tras la sesión',
            'Protector solar con zinc, licra de protección y agua de pipa fría'
          ],
          cta: 'Ver Programa de Niños',
          path: '/classes/kids',
          image: 'https://images.unsplash.com/photo-1502680390469-be75c86b636f?auto=format&fit=crop&q=80'
        },
        {
          id: 'family',
          title: 'Aventura de Olas Familiar',
          tagline: 'Surfeen juntos, celebren juntos. Perfecto para padres e hijos.',
          duration: '2 Horas',
          ratio: '2 Coaches para Familia de 4',
          price: '$320',
          priceNote: 'familia de 4 ($75 por persona adicional)',
          bullets: [
            'Dos instructores para equilibrar el ritmo de adultos y niños',
            'Sesión de videoanálisis familiar con consejos personalizados',
            'Carpa y sombra en la playa para espectadores y descansos',
            'Equipo de seguridad completo y tablas a la medida de cada uno',
            'Fotos familiares en acción y clips de video incluidos'
          ],
          cta: 'Ver Surf Familiar',
          path: '/classes/family',
          image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&q=80'
        },
        {
          id: 'private',
          title: 'Coaching VIP 1-a-1',
          tagline: 'Instrucción personalizada exclusiva con el Coach Bryan.',
          duration: '1.5 Horas',
          ratio: 'Atención 1:1 Privada',
          price: '$140',
          priceNote: 'por surfista • coaching de alto rendimiento',
          bullets: [
            '100% de atención enfocada en tu nivel y objetivos específicos',
            'Mecánica de olas, eficiencia de remada y posicionamiento en el pico',
            'Retroalimentación constante en el agua ola tras ola',
            'Análisis en cámara lenta en tablet directamente en la playa',
            'Ideal para niños tímidos o surfistas listos para olas verdes'
          ],
          cta: 'Ver Coaching 1-a-1',
          path: '/classes/private',
          image: 'https://images.unsplash.com/photo-1528150177508-7cc0c36cda5c?auto=format&fit=crop&q=80'
        }
      ],
      packagesTitle: 'Paquetes de Progresión de 3 y 5 Días',
      packagesSubtitle: 'La verdadera transformación ocurre a lo largo de varias mareas.',
      packages3Day: 'Inmersión de 3 Días ($255/niño)',
      packages3DayDesc: 'Desde la espuma hasta remar sus propias olas. Incluye 3 sesiones de video y bitácora de progreso.',
      packages5Day: 'Campamento Grom de 5 Días ($395/niño)',
      packages5DayDesc: 'Lectura completa del mar, seguridad en corrientes, primeras olas verdes y diploma oficial First Peak Junior.',
      packagesCta: 'Reservar Paquete Multi-Día'
    },
    kids: {
      badge: 'Edades de 6 a 12 Años • Seguridad Absoluta',
      title: 'Kids Grom\nAcademy',
      subtitle: 'Donde la paciencia, la diversión y la pedagogía marina crean surfistas confiados de por vida.',
      heroImage: 'https://images.unsplash.com/photo-1502680390469-be75c86b636f?auto=format&fit=crop&q=80',
      introTitle: 'Por Qué Nosara es el Mejor Lugar del Mundo para que los Niños Aprendan',
      introText: 'Playa Guiones tiene un fondo de arena suave y extenso, sin rocas afiladas ni corales peligrosos, con cientos de metros de olas de espuma donde el agua llega a la cintura. Es el aula natural más segura del planeta. Adaptamos esta maravilla con un método pedagógico positivo centrado en el desarrollo motriz y la confianza infantil.',
      pillars: [
        {
          title: 'La Seguridad No se Negocia',
          desc: 'Nunca más de 3 niños por coach. Nuestros instructores toman de la mano, guían cada pop-up y están al lado de tu hijo en cada segundo.'
        },
        {
          title: 'Juegos y Dinámicas Divertidas',
          desc: 'Convertimos el equilibrio en juegos como "El Flamenco", la remada en "La Tortuga Marina" y la puesta en pie en "El Salto Ninja".'
        },
        {
          title: 'Equipo a la Medida de los Niños',
          desc: 'Tablas de espuma blanda ultralivianas, quillas de goma flexibles y licras con factor de protección solar UPF 50+.'
        },
        {
          title: 'Celebración en Video',
          desc: 'Capturamos las sonrisas y la triunfal primera ola de pie para que los padres conserven el recuerdo para siempre.'
        }
      ],
      stepTitle: 'La Estructura de la Clase (90 Minutos)',
      steps: [
        {
          time: '00-15 Min',
          name: 'Seguridad en la Arena y Práctica',
          detail: 'Reglas del mar, respiración con las olas, anatomía de la tabla y puesta en pie en la arena suave.'
        },
        {
          time: '15-60 Min',
          name: 'Deslizamiento y Pop-ups en el Agua',
          detail: 'En agua que llega a la cintura con el coach impulsando cada tabla y celebrando cada intento.'
        },
        {
          time: '60-75 Min',
          name: 'Remada Independiente y Giros',
          detail: 'Los niños aprenden a identificar su propia espuma, remar con energía y dirigir la tabla hacia los lados.'
        },
        {
          time: '75-90 Min',
          name: 'Agua de Pipa y Videoanálisis',
          detail: 'Descanso bajo nuestra carpa de sombra, agua de pipa fría y revisión de los mejores momentos en video.'
        }
      ],
      ctaTitle: 'Dale a Tu Hijo el Regalo del Mar',
      ctaText: 'Las sesiones se programan a diario coordinadas con las mejores mareas de la mañana o el atardecer.',
      ctaBtn: 'Reservar Kids Academy'
    },
    family: {
      badge: 'Para Todas las Edades • Padres e Hijos Juntos',
      title: 'Aventuras de Surf\nen Familia',
      subtitle: 'Desconéctense de las pantallas. Conéctense con la naturaleza y compartan olas inolvidables en Nosara.',
      heroImage: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&q=80',
      introTitle: 'Triunfos Compartidos en Aguas Cálidas',
      introText: 'No hay nada como escuchar a tus hijos celebrar cuando te paras en una ola, o verlos deslizarse con una sonrisa radiante. Nuestras clases familiares están diseñadas para que cada uno avance a su ritmo sin presiones ni frustraciones.',
      features: [
        {
          title: 'Equipo Personalizado para Todos',
          desc: 'Tablas estables y de gran volumen para papá y mamá, y tablas blandas ultraligeras para los pequeños, con carpa de sombra en la playa.'
        },
        {
          title: 'Estrategia de Doble Instructor',
          desc: 'Un coach se enfoca en los niños en la zona de espuma suave, mientras el segundo instructor guía a los padres hacia olas con mayor recorrido.'
        },
        {
          title: 'Cero Presión, Pura Alegría',
          desc: 'Toma descansos cuando quieras. Nuestra zona de playa permite que abuelos o acompañantes disfruten de la vista cómodamente.'
        }
      ],
      ctaBtn: 'Reservar Experiencia Familiar'
    },
    private: {
      badge: 'Instrucción VIP 1-a-1',
      title: 'Coaching Privado\nde Surf',
      subtitle: 'Atención 100% personalizada con el Coach Bryan para acelerar tu técnica, seguridad marina y conteo de olas.',
      heroImage: 'https://images.unsplash.com/photo-1528150177508-7cc0c36cda5c?auto=format&fit=crop&q=80',
      introTitle: 'Enfocado 100% en Tu Camino',
      introText: 'Ya sea que tu hijo necesite paciencia individual para superar el miedo al mar, o que seas un adulto buscando pasar de tablas de espuma a girar en la pared de la ola, nuestro coaching privado te brinda el plan exacto a tu medida.',
      benefits: [
        {
          title: 'Horario Optimizado por Mareas',
          desc: 'Elegimos la hora exacta con las mejores condiciones de viento y menos afluencia en el agua para tu clase.'
        },
        {
          title: 'Instrucción Inmediata en el Agua',
          desc: 'Bryan rema a tu lado, posicionándote en el pico y dándote indicaciones en tiempo real antes, durante y después de cada ola.'
        },
        {
          title: 'Clínica de Video Cuadro por Cuadro',
          desc: 'Revisión en cámara lenta en tablet en la playa inmediatamente después de salir del agua para fijar la memoria muscular.'
        }
      ],
      ctaBtn: 'Reservar Sesión 1-a-1'
    },
    about: {
      badge: 'Waterman de Nosara y Educador',
      title: 'Conoce al Coach\nBryan',
      subtitle: 'Fundador, salvavidas certificado y apasionado mentor de surf para las nuevas generaciones.',
      heroImage: 'https://images.unsplash.com/photo-1528150177508-7cc0c36cda5c?auto=format&fit=crop&q=80',
      bio1: 'Nacido y criado con el Pacífico como patio trasero en Guanacaste, Bryan lleva más de dos décadas surfeando las costas de Costa Rica. Durante los últimos 12 años, ha dedicado su vida a la enseñanza, especializándose en niños y personas que necesitan más que técnica: necesitan confianza.',
      bio2: 'Bryan fundó First Peak Surf con una convicción clara: la primera experiencia de un niño en el océano debe ser segura, mágica y empoderadora. Al limitar las clases a un ratio máximo de 3 alumnos por instructor y sumar análisis en video, asegura que ningún niño quede desatendido.',
      certificationsTitle: 'Credenciales y Certificaciones de Seguridad',
      certs: [
        'Entrenador de Surf Nivel 2 ISA (International Surfing Association)',
        'Certificación en RCP Pediátrico y Adultos / DEA (Cruz Roja Costarricense)',
        'Salvavidas Profesional de Océano (Asociación de Salvavidas de Nosara)',
        'Capacitación en Psicología Infantil aplicada al Deporte',
        'Guía Ecológico Certificado del Refugio de Vida Silvestre Ostional'
      ],
      philosophyTitle: 'La Filosofía de First Peak',
      philosophies: [
        {
          title: 'Empoderamiento sin Ego',
          desc: 'Nunca forzamos a un niño más allá de su zona de comodidad. La confianza se forja ola por ola con paciencia, empatía y comunicación clara.'
        },
        {
          title: 'Estilo de Vida de la Zona Azul',
          desc: 'Nosara es una de las raras Zonas Azules del mundo. Fomentamos la vida saludable, el aire puro y el respeto sagrado por el mar.'
        },
        {
          title: 'Raíces Comunitarias',
          desc: 'First Peak Surf organiza limpiezas de playa locales y patrocina clínicas de surf para niños de la comunidad de Guanacaste.'
        }
      ],
      ctaTitle: 'Ven a Surfear con Bryan',
      ctaText: 'Descubre la magia de Playa Guiones de la mano de un local apasionado por transmitir el amor al océano.',
      ctaBtn: 'Reservar con Bryan'
    },
    booking: {
      badge: 'Reserva Rápida y Fácil',
      title: 'Reserva Tu\nClase',
      subtitle: 'Elige tu programa, fecha y cantidad de alumnos. Coordinamos cada clase con la marea ideal para máxima seguridad.',
      step1: '1. Selecciona Tu Programa',
      step2: '2. Fecha y Horario Preferido',
      step3: '3. Datos del Alumno y Notas',
      step4: '4. Confirmación Inmediata por WhatsApp',
      programs: [
        { id: 'kids', name: 'Kids Grom Academy (6-12 Años)', price: '$95 / niño', ratio: 'Ratio Máx 1:3' },
        { id: 'family', name: 'Aventura de Olas Familiar', price: '$320 (hasta 4)', ratio: '2 Coaches' },
        { id: 'private', name: 'Coaching VIP 1-a-1 Privado', price: '$140', ratio: 'Coaching 1:1' },
        { id: 'camp3', name: 'Paquete de Progresión 3 Días', price: '$255 / niño', ratio: 'Inmersión Multi-Día' },
        { id: 'camp5', name: 'Grom Master Camp 5 Días', price: '$395 / niño', ratio: 'Diploma y Video Total' }
      ],
      form: {
        programLabel: 'Programa Elegido',
        dateLabel: 'Fecha Deseada',
        timeLabel: 'Ventana de Horario Preferida',
        timeOptions: ['Marea Baja de la Mañana (Olas más suaves, Recomendado)', 'Sesión Relajada de Media Mañana', 'Sesión Dorada al Atardecer'],
        surfersLabel: 'Número de Surfistas',
        kidsAgesLabel: 'Edades de los Niños (si aplica)',
        experienceLabel: 'Nivel de Experiencia',
        expOptions: ['Primera Vez Absoluta', 'Ha Probado 1 o 2 Veces', 'Cómodo en la Espuma', 'Comenzando a Remar Olas Verdes'],
        swimmingLabel: 'Comodidad en el Agua',
        swimOptions: ['Comodidad Básica (sabe flotar)', 'Nadador Seguro', 'Muy Buen Nadador'],
        parentNameLabel: 'Nombre del Padre / Responsable',
        emailLabel: 'Correo Electrónico',
        phoneLabel: 'Teléfono / WhatsApp (con código de país)',
        notesLabel: 'Peticiones Especiales / Notas de Temor o Salud',
        notesPlaceholder: 'Cuéntanos sobre tus hijos, si son tímidos con el agua, si tienen necesidades especiales...',
        submitBtn: 'Enviar Solicitud de Reserva',
        calendlyAlt: '¿Prefieres elegir tu horario en nuestro calendario en vivo? Haz clic para ver la agenda de Bryan en Calendly:',
        calendlyBtn: 'Abrir Calendario en Calendly',
        guarantee: 'Sin penalización por reprogramación debido a mareas o clima. Siempre elegimos la ventana más segura.'
      },
      successTitle: '¡Solicitud de Reserva Recibida!',
      successDesc: 'Bryan o nuestro equipo te contactará por WhatsApp y correo en menos de 2 horas con tu hora exacta coordinada según la marea en Playa Guiones.'
    },
    faq: {
      badge: 'Guía para Familias',
      title: 'Preguntas\nFrecuentes',
      subtitle: 'Todo lo que los padres necesitan saber sobre seguridad, mareas, equipamiento y el aprendizaje en Nosara.',
      categories: [
        {
          cat: 'Seguridad y Condiciones del Mar',
          items: [
            {
              q: '¿Por qué Playa Guiones es tan segura para niños?',
              a: 'Playa Guiones tiene un fondo de arena suave y parejo, sin rocas afiladas ni erizos en la zona de clases. Tiene una pendiente muy suave donde los niños tocan fondo con el agua a la cintura mientras toman olas de espuma suave que se deslizan por decenas de metros.'
            },
            {
              q: '¿Cuál es el ratio de instructor por alumno?',
              a: 'Trabajamos con un ratio máximo estricto de 1:3 para niños. Para pequeños menores de 7 años o niños con temor al agua, recomendamos o asignamos automáticamente atención 1:1 o 1:2 para supervisión directa.'
            },
            {
              q: '¿Los instructores tienen certificaciones de primeros auxilios?',
              a: 'Sí. Bryan y todos los coaches de First Peak cuentan con certificaciones vigentes en RCP Pediátrico y Adultos, DEA y Salvamento Acuático por la Cruz Roja Costarricense y la Asociación Internacional de Surf (ISA).'
            }
          ]
        },
        {
          cat: 'Edades, Natación y Clases',
          items: [
            {
              q: '¿Mi hijo necesita ser un nadador experto?',
              a: '¡No! Solo se requiere comodidad básica en el agua. Todas las clases para principiantes se realizan en zonas donde hacen pie en la arena. Los instructores están a su lado sosteniendo la tabla en todo momento.'
            },
            {
              q: '¿Cuál es la edad mínima para las clases?',
              a: 'Nuestro programa principal es para niños de 6 a 12 años. Para pequeños de 4 y 5 años, ofrecemos clases privadas suaves de introducción al mar en tándem con el Coach Bryan.'
            },
            {
              q: '¿Qué pasa si mi hijo siente miedo al mar?',
              a: '¡Esa es la especialidad de Bryan! Nunca forzamos a un niño a entrar al agua profunda. Comenzamos en la arena con juegos, practicamos respiración, explicamos cómo funcionan las olas y solo entramos a la orilla cuando el niño sonríe y se siente entusiasmado.'
            }
          ]
        },
        {
          cat: 'Equipo y Logística',
          items: [
            {
              q: '¿Qué equipo está incluido en la clase?',
              a: 'Todo está incluido: tablas especiales de espuma de alta flotabilidad, quillas suaves, leashes, licras con protección UV, bloqueador solar mineral de zinc, agua fresca y pipas frías al terminar.'
            },
            {
              q: '¿Cómo funciona el videoanálisis?',
              a: 'Un miembro de nuestro equipo graba las mejores olas desde la playa con teleobjetivo. Al terminar, revisamos los videos en una tablet para que los niños vean su técnica y enviamos todos los archivos en alta resolución a tu teléfono.'
            },
            {
              q: '¿Qué debemos llevar a la clase?',
              a: 'Solo traje de baño, toalla y botella de agua reutilizable. Nosotros tenemos todo el equipo listo en nuestro campamento en la playa.'
            },
            {
              q: '¿Cuál es la política de cancelación y clima?',
              a: 'En Nosara el agua siempre está tibia (27°C) y surfear con llovizna suave es hermoso. Pero si hay tormenta eléctrica o mar picado no apto para niños, reprogramamos sin costo o reembolsamos el 100% de tu pago.'
            }
          ]
        }
      ]
    },
    contact: {
      badge: 'Ponte en Contacto',
      title: 'Contacto y\nWhatsApp',
      subtitle: '¿Tienes dudas o quieres conocer las mareas de mañana? Escríbele directamente al Coach Bryan por WhatsApp para atención inmediata.',
      whatsappTitle: 'WhatsApp Directo con Bryan',
      whatsappDesc: 'La forma más rápida de comunicarte en Nosara. Consulta mareas, disponibilidad y paquetes familiares.',
      whatsappBtn: 'Abrir Chat de WhatsApp (+506 8899-SURF)',
      whatsappNumber: '+506 8899-7873',
      whatsappMessage: 'Hola Bryan! Me gustaría consultar sobre clases de surf para mi familia en Playa Guiones.',
      emailLabel: 'Correo Electrónico',
      email: 'info@firstpeaksurf.com',
      phoneLabel: 'Teléfono / Costa Rica',
      phone: '+506 8899-7873',
      addressLabel: 'Punto de Encuentro',
      address: 'Playa Guiones (Sendero Principal, Sector Norte), Nosara, Guanacaste, Costa Rica',
      messageTitle: 'Envíanos un Mensaje',
      namePlaceholder: 'Tu Nombre',
      emailPlaceholder: 'Tu Correo Electrónico',
      phonePlaceholder: 'Teléfono / WhatsApp',
      messagePlaceholder: 'Cuéntanos sobre tu familia, edades de los niños y fechas en Nosara...',
      sendBtn: 'Enviar Mensaje',
      successMsg: '¡Gracias! Te responderemos en pocas horas.',
      socials: ['Instagram', 'Facebook', 'TripAdvisor', 'YouTube']
    },
    gallery: {
      title: 'Galería Familiar',
      subtitle: 'Sonrisas, Olas y Atardeceres en Guiones',
      images: [
        'https://images.unsplash.com/photo-1502680390469-be75c86b636f?auto=format&fit=crop&q=80',
        'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&q=80',
        'https://images.unsplash.com/photo-1528150177508-7cc0c36cda5c?auto=format&fit=crop&q=80',
        'https://images.unsplash.com/photo-1414490929659-9a12b7e31907?auto=format&fit=crop&q=80',
        'https://images.unsplash.com/photo-1459749411177-042180ce673c?auto=format&fit=crop&q=80',
        'https://images.unsplash.com/photo-1510007551642-eabcb64a1322?auto=format&fit=crop&q=80'
      ]
    },
    us: {
      title: 'First Peak Surf School',
      subtitle: 'Donde las Primeras Olas se Convierten en Recuerdos Eternos',
      intro: 'En el corazón de Nosara, una de las raras Zonas Azules del planeta, First Peak Surf nació con la pasión de compartir la magia del surf con niños y familias en el entorno más seguro y positivo del mundo.',
      sections: [
        {
          subtitle: 'El Aula Perfecta: Playa Guiones',
          paragraph: 'Con más de 300 días de olas consistentes al año y un fondo de arena suave, Playa Guiones es reconocida como la playa más segura de Centroamérica para enseñar a niños.'
        },
        {
          subtitle: 'Seguridad Pediátrica y Ratio Máx 1:3',
          paragraph: 'Nunca saturamos las clases. Nuestro ratio máximo de 1:3 garantiza que cada niño reciba atención ininterrumpida y apoyo constante.'
        },
        {
          subtitle: 'Recuerdos en Video Incluidos',
          paragraph: 'Cada logro, desde la primera puesta en pie hasta llegar a la orilla, es filmado por nuestro equipo en la playa para que tu familia lo atesore para siempre.'
        }
      ],
      whyTitle: '¿Por Qué Elegir First Peak?',
      whyBullets: [
        { title: 'Cuidado Pediátrico Certificado', desc: 'Todos los instructores están certificados en RCP infantil, DEA y rescate acuático.' },
        { title: 'Pedagogía Paciente y Positiva', desc: 'Sin gritos ni presiones. Usamos refuerzo positivo, juegos en la arena y ciencia marina.' },
        { title: 'Conciencia Ecológica', desc: 'Enseñamos a los niños a amar y proteger la fauna marina y los anidamientos de tortugas de Nosara.' }
      ],
      ctaTitle: '¿Listos para la Primera Ola de Tu Familia?',
      ctaText: 'Acompáñanos en Playa Guiones con el Coach Bryan. Tenemos todo el equipo infantil, videoanálisis y la mejor energía de Costa Rica.',
    },
    service: {
      title: 'Nuestras Clases\nde Surf en Nosara',
      subtitle: 'Cada lección dura de 1.5 a 2 horas e incluye tablas de espuma de alta flotabilidad, videoanálisis y agua de pipa fría.',
      items: [
        {
          name: 'Kids Grom Academy (6-12 Años)',
          tagline: 'Experiencia segura, divertida y formativa con ratio máx 1:3.',
          bullets: [
            'Duración: 1.5 Horas',
            'Máx 3 niños por instructor certificado',
            'Paquete de videoanálisis en HD incluido',
            'Tablas de espuma blanda especiales para niños'
          ],
          cta: 'Reservar Kids Academy',
          image: 'https://images.unsplash.com/photo-1502680390469-be75c86b636f?auto=format&fit=crop&q=80'
        },
        {
          name: 'Aventura de Surf Familiar',
          tagline: 'Surfeen juntos con instructores dedicados para adultos y niños.',
          bullets: [
            'Duración: 2 Horas',
            'Dos instructores para progreso equilibrado',
            'Álbum de fotos y videos familiares incluido',
            'Carpa de sombra y agua de pipa en la playa'
          ],
          cta: 'Reservar Aventura Familiar',
          image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&q=80'
        },
        {
          name: 'Clase VIP Privada 1-a-1',
          tagline: 'Instrucción personalizada con el Coach Bryan para ganar confianza rápida.',
          bullets: [
            'Duración: 1.5 Horas',
            'Coach local certificado dedicado exclusivamente a ti',
            'Revisión en cámara lenta en tablet en la playa',
            'Ideal para niños con temor o transición a olas verdes'
          ],
          cta: 'Reservar Clase Privada',
          image: 'https://images.unsplash.com/photo-1528150177508-7cc0c36cda5c?auto=format&fit=crop&q=80'
        }
      ],
      packagesTitle: 'Campamentos Grom Multi-Día\n(3 o 5 Días)',
      packagesDesc: "La confianza real se construye a lo largo de varias mareas consecutivas. Crea una base sólida y llévate videos de todo tu progreso.",
      packagesCta: 'Contáctanos para personalizar tu paquete'
    },
    blog: {
      title: 'Guía de Surf Familiar',
      subtitle: 'Consejos, Mareas y Seguridad Marina',
      content: {
        h2: 'La Guía Definitiva de Surf Familiar en Nosara, Costa Rica',
        h3_1: 'Por Qué Playa Guiones es la Playa Más Segura para Niños',
        p_1: 'A diferencia de playas con rompientes empinadas y orilleros fuertes, Playa Guiones cuenta con una pendiente arenosa suave y extensa. Las olas rompen a cientos de metros de la costa, generando espumas largas y suaves que amortiguan cada caída. Con agua a 27°C todo el año, los niños jamás sienten frío.',
        tableHead: ['Programa', 'Edades', 'Ratio Coach', 'Enfoque Principal'],
        tableBody: [
           ['Kids Grom Academy', '6-12 Años', 'Máx 1:3', 'Diversión, Puesta en Pie, Seguridad'],
           ['Sesión Familiar', 'Todas las Edades', '2 Coaches (Familia de 4)', 'Risas Compartidas, Cero Presión'],
           ['VIP Privado 1:1', 'Cualquier Edad', '1:1 Exclusivo', 'Superar Miedos, Progreso Rápido'],
           ['Campamento Multi-Día', '6-12 Años', 'Máx 1:3', 'Lectura de Olas, Olas Verdes, Video']
        ],
        h3_2: '5 Consejos para Preparar a Tu Hijo para su Primera Clase de Surf',
        bullets_2: [
           { title: '1. Practica la Puesta en Pie en la Alfombra', desc: '¡Conviértelo en un juego en casa! Salten desde la posición boca abajo hacia una postura baja con rodillas flexionadas.' },
           { title: '2. Habla del Océano como un Amigo', desc: 'Explícale que el mar es como un gran parque de juegos con ritmo propio. Respetar el agua elimina el miedo.' },
           { title: '3. Hidratación y Bloqueador de Zinc', desc: 'El sol tropical en Costa Rica es fuerte. El zinc mineral protege la piel sensible de los niños en el agua.' },
           { title: '4. Confía en el Ratio 1:3', desc: 'En First Peak, un instructor nunca está a más de un brazo de distancia de tu hijo en el agua.' }
        ],
        h3_3: 'Por Qué el Videoanálisis es una Revolución para los Niños',
        bullets_3: [
           { title: 'Confirmación Visual', desc: 'Los niños a menudo creen que flexionan las rodillas cuando solo doblan la cintura. Ver sus propios videos crea momentos de comprensión instantáneos.' },
           { title: 'Celebrar el Éxito', desc: 'Ver sus olas exitosas eleva la autoestima y despierta emoción genuina para la clase del día siguiente.' }
        ],
        h3_4: '¿Necesitas Consejos Locales?',
        p_4: 'Escríbele al Coach Bryan por WhatsApp en cualquier momento. Con gusto te asesoramos sobre mareas, restaurantes familiares y paseos en Nosara.'
      }
    }
  }
};

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
  t: (key: keyof typeof translations.en) => any;
}

export const LanguageContext = createContext<LanguageContextType>({
  language: 'en',
  toggleLanguage: () => {},
  t: () => ({})
});

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>('en');

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'en' ? 'es' : 'en');
  };

  const t = (key: keyof typeof translations.en) => {
    return translations[language][key] || translations['en'][key] || {};
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
