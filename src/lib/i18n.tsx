import { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'en' | 'es';

type Translations = Record<Language, Record<string, any>>;

export const translations: Translations = {
  en: {
    menu: {
      home: 'Home',
      us: 'Us',
      service: 'Services',
      gallery: 'Gallery',
      blog: 'Guide',
      contact: 'Contact'
    },
    home: {
      heroTitle: 'Swell',
      heroSubtitle: 'Ride the Edge',
      aboutConnection: '01 / Connection',
      aboutTitle: 'Pure Spirit',
      aboutDesc: 'Surfing is not just a sport, it’s a connection to the raw power of the ocean. We bridge that gap with craft and soul, dedicated to the search of the perfect wave.',
      aboutBtn: 'Our Philosophy',
      servicesTitle: 'Services',
      servicesSubtitle: 'Our Offerings',
      servicesItems: [
        { title: 'Group Lesson', desc: 'Share the energy of the ocean with friends.' },
        { title: 'Private Lesson', desc: '100% personalized coaching to accelerate progress.' },
        { title: 'Surf Guiding', desc: 'Explore the best peaks with a local expert.' },
        { title: 'Multi-Day', desc: 'Discounted multi-lesson packages.' }
      ],
      galleryMoment: 'Moment',
      blogTitle: 'Lineup',
      blogPosts: [
        { date: '12.05.26', title: 'The Winter Swell Report' },
        { date: '28.04.26', title: 'Crafting the Perfect Fin' },
        { date: '15.04.26', title: 'Conservation of the Blue' }
      ],
      contactPre: 'Connect With Us',
      footer1: '© 2026 Swell Studio Ltd.',
      footer2: 'Handcrafted in the North Shore',
      footer3: 'All Waves Reserved'
    },
    us: {
      title: 'Lucas Surf School',
      subtitle: 'Where the Ocean Meets the Soul',
      intro: 'In the heart of Nosara, one of the most magical corners on earth, is born a project dedicated to those who seek not only to learn how to surf, but to connect deeply with the essence of Costa Rica. At Lucas Surf School, we don\'t just teach a technique; we share a lifestyle based on respect for the ocean and the pure joy of riding the waves.',
      sections: [
        {
          subtitle: 'The Perfect Playground: Playa Guiones',
          paragraph: 'Our school is based in Playa Guiones, globally renowned for its unmatched consistency. Here, the ocean is generous: with over 300 days of rideable waves a year, it is the ultimate playground for both absolute beginners and intermediate surfers looking to refine their style. Its sandy bottom and long-riding waves guarantee a safe, smooth, and thrilling learning experience.'
        },
        {
          subtitle: 'More Than Surf: A Blue Zone Experience',
          paragraph: 'Choosing Nosara means choosing wellness. As part of one of the world\'s few designated Blue Zones, the energy here is different. While waiting for your next wave, it is common to spot howler monkeys in the coastal trees or sea turtles swimming nearby. In Nosara, nature isn’t just a backdrop; it is the main character.'
        },
        {
          subtitle: 'Sunsets That Stand Still',
          paragraph: 'Surfing during a Nosara sunset is a mystical experience. The sky turns into shades of purple and gold, the wind drops, and the sea becomes a perfect mirror. It’s the exact moment where our students always say "everything makes sense." At Lucas Surf School, we make sure you capture those unforgettable moments forever.'
        }
      ],
      whyTitle: 'Why Surf With Us?',
      whyBullets: [
        { title: 'Local Knowledge', desc: 'Lucas and his team understand every tide shift and wind direction in Nosara, ensuring you are always at the right spot at the right time.' },
        { title: 'Eco-Commitment', desc: 'We are part of a community that deeply protects its wildlife refuge. We surf on pristine beaches with no high-rises—just you and the horizon.' },
        { title: 'Personalized Focus', desc: 'We don\'t believe in crowded classes. We focus on instructor-student connection for real, safe, and fun progress.' }
      ],
      ctaTitle: 'Ready for the adventure?',
      ctaText: 'Come to Nosara. Let the rhythm of the ocean dictate your day. We provide the board; you bring the stoke for the adventure of a lifetime.'
    },
    service: {
      title: 'Our Surf Services\nin Nosara',
      subtitle: 'Every lesson is 1.5 hours long and includes a premium surfboard, leash, rash guard, and fresh water.',
      items: [
        {
          name: 'Group Surf Lesson',
          tagline: 'Share the energy of the ocean and catch your first waves with friends.',
          bullets: [
            'Duration: 1.5 Hours',
            'Max 4 students per instructor for ultimate safety',
            'Perfect for beginners, families, and solo travelers',
            'Soft-top surfboards for easy balance and stability'
          ],
          cta: 'Book Group Lesson',
          image: 'https://images.unsplash.com/photo-1502680390469-be75c86b636f?auto=format&fit=crop&q=80'
        },
        {
          name: 'Private Surf Lesson',
          tagline: '100% personalized coaching to accelerate your progress and build confidence.',
          bullets: [
            'Duration: 1.5 Hours',
            'One-on-one dedicated local certified coach',
            'Tailored board selection based on your weight and level',
            'Immediate feedback and analysis on every single wave'
          ],
          cta: 'Book Private Lesson',
          image: 'https://images.unsplash.com/photo-1528150177508-7cc0c36cda5c?auto=format&fit=crop&q=80'
        },
        {
          name: 'Surf Guiding &\nAdvanced Coaching',
          tagline: 'Explore the best peaks in Playa Guiones and Pelada with a local expert.',
          bullets: [
            'Flexible timing based on the daily tide and wind report',
            'Deep analysis of local currents, sandbanks, and swells',
            'In-water positioning guidance to catch the wave of the day',
            'Ideal for intermediate and independent surfers'
          ],
          cta: 'Inquire Now',
          image: 'https://images.unsplash.com/photo-1414490929659-9a12b7e31907?auto=format&fit=crop&q=80'
        }
      ],
      packagesTitle: 'Multi-Day Surf Packages\n(3 or 5 Days)',
      packagesDesc: "Don't settle for just one day. Build a solid foundation, track your progress daily, and truly experience the Nosara surf lifestyle with our discounted multi-lesson packages.",
      packagesCta: 'Contact us to customize your surf package'
    },
    gallery: {
      title: 'Gallery',
      subtitle: 'Moments in Time',
      images: [
        'https://images.unsplash.com/photo-1459749411177-042180ce673c?auto=format&fit=crop&q=80',
        'https://images.unsplash.com/photo-1502680399488-2a6574c55c57?auto=format&fit=crop&q=80',
        'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&q=80',
        'https://images.unsplash.com/photo-1414490929659-9a12b7e31907?auto=format&fit=crop&q=80',
        'https://images.unsplash.com/photo-1510007551642-eabcb64a1322?auto=format&fit=crop&q=80',
        'https://images.unsplash.com/photo-1533036813247-f471e8fb36ea?auto=format&fit=crop&q=80'
      ]
    },
    blog: {
      title: 'Surf Guide',
      subtitle: 'Board Tips & Benefits',
      content: {
        h2: 'The Ultimate Surf Guide: Board Tips and Benefits for Everyone',
        h3_1: 'How to Choose the Right Surfboard for Your Level',
        p_1: 'Choosing the right surfboard is crucial for catching more waves and avoiding frustration. In Santa Teresa\'s consistent waves, matching your weight and experience to the correct board volume makes all the difference. Here is a quick breakdown:',
        tableHead: ['Board Type', 'Best For', 'Skill Level', 'Key Benefit'],
        tableBody: [
           ['Soft-top / Foamie', 'Beginners & First-timers', 'Beginner', 'High stability & safety'],
           ['Funboard / Longboard', 'Cruising & paddlers', 'Intermediate', 'Easy paddling & long rides'],
           ['Fish / Groveler', 'Small or mushy waves', 'Intermediate-Advanced', 'Speed in slower sections'],
           ['Shortboard', 'Punchy, hollow waves like La Lora', 'Advanced', 'Maximum maneuverability']
        ],
        h3_2: 'The Benefits of Surfing for Kids (Ages 5-12)',
        bullets_2: [
           { title: 'Physical Coordination', desc: 'Surfing builds core strength, balance, and fine motor skills at an early age.' },
           { title: 'Ocean Safety and Confidence', desc: 'Kids learn how to read currents, respect marine life, and lose fear of the water.' },
           { title: 'Screen-Free Fun', desc: 'It connects children directly with Santa Teresa\'s nature, keeping them active outdoors.' }
        ],
        h3_3: 'Why Adults and Seniors Should Start Surfing Today',
        bullets_3: [
           { title: 'Low-Impact Cardio', desc: 'Surfing is an incredible full-body workout that burns calories without heavy joint stress.' },
           { title: 'Mental Clarity & Stress Relief', desc: 'The ultimate "ocean therapy." Being in the water acts as a natural reset for anxiety and daily stress.' },
           { title: 'Age is Just a Number', desc: 'Our custom adult lessons focus on safety and technique, proving you can catch your first wave at 30, 40, or 50+.' }
        ],
        h3_4: 'Quick Tip for Voice Search (Alexa/Siri)',
        p_4: 'If you are wondering: "Where can I rent a beginner surfboard in Santa Teresa?", our school provides the perfect soft-top equipment with every lesson near Playa Carmen.'
      }
    },
    contact: {
      title: 'Contact',
      subtitle: 'Drop In',
      emailLabel: 'Email',
      email: 'hello@swell.surf',
      phoneLabel: 'Phone',
      addressLabel: 'Location',
      address: 'North Shore, Oahu',
      messageTitle: 'Send a Message',
      namePlaceholder: 'Your Name',
      emailPlaceholder: 'Your Email',
      messagePlaceholder: 'Your Message',
      sendBtn: 'Send',
      socials: ['Instagram', 'Dribbble', 'LinkedIn', 'Vimeo']
    }
  },
  es: {
    menu: {
      home: 'Inicio',
      us: 'Nosotros',
      service: 'Servicios',
      gallery: 'Galería',
      blog: 'Guía',
      contact: 'Contacto'
    },
    home: {
      heroTitle: 'Ola',
      heroSubtitle: 'Monta el Límite',
      aboutConnection: '01 / Conexión',
      aboutTitle: 'Espíritu Puro',
      aboutDesc: 'El surf no es un deporte, es una conexión con el poder del océano. Acercamos esa brecha con arte y alma, dedicados a buscar la ola perfecta.',
      aboutBtn: 'Nuestra Filosofía',
      servicesTitle: 'Servicios',
      servicesSubtitle: 'Nuestras Opciones',
      servicesItems: [
        { title: 'Clase Grupal', desc: 'Comparte la energía del océano en grupo.' },
        { title: 'Clase Privada', desc: 'Entrenamiento 100% personalizado.' },
        { title: 'Guía de Surf', desc: 'Explora los mejores picos con un experto.' },
        { title: 'Multi-Día', desc: 'Paquetes con descuento de varias lecciones.' }
      ],
      galleryMoment: 'Momento',
      blogTitle: 'Alineación',
      blogPosts: [
        { date: '12.05.26', title: 'El Reporte de Oleaje de Invierno' },
        { date: '28.04.26', title: 'Diseñando la Quilla Perfecta' },
        { date: '15.04.26', title: 'Conservación del Azul' }
      ],
      contactPre: 'Conecta con Nosotros',
      footer1: '© 2026 Ola Estudio Ltd.',
      footer2: 'Hecho a mano en North Shore',
      footer3: 'Todas las Olas Reservadas'
    },
    us: {
      title: 'Lucas Surf School',
      subtitle: 'Donde el Mar y el Alma se Encuentran',
      intro: 'En el corazón de Nosara, uno de los rincones más mágicos del planeta, nace un proyecto dedicado a quienes no solo buscan aprender a surfear, sino conectar profundamente con la esencia de Costa Rica. En Lucas Surf School, no solo enseñamos una técnica; compartimos un estilo de vida basado en el respeto al océano y la alegría de deslizarse sobre el agua.',
      sections: [
        {
          subtitle: 'El Escenario Perfecto: Playa Guiones',
          paragraph: 'Nuestra escuela tiene su hogar en Playa Guiones, reconocida mundialmente por su consistencia inigualable. Aquí, el océano es generoso: con más de 300 días de olas perfectas al año, es el "playground" ideal tanto para quienes tocan una tabla por primera vez como para los que buscan perfeccionar su estilo. Su fondo de arena suave y sus olas de recorrido largo garantizan un aprendizaje seguro, fluido y lleno de adrenalina.'
        },
        {
          subtitle: 'Mucho más que Surf: Una Experiencia en la Zona Azul',
          paragraph: 'Elegir Nosara es elegir bienestar. Al ser parte de una de las pocas Zonas Azules del mundo, la energía que se respira aquí es distinta. Mientras esperas tu próxima ola, es común ver monos congo en las copas de los árboles que bordean la costa o tortugas marinas que visitan nuestras aguas. En Nosara, la naturaleza no es el telón de fondo; es la protagonista.'
        },
        {
          subtitle: 'Atardeceres que Detienen el Tiempo',
          paragraph: 'Practicar surf en el "sunset" de Nosara es una experiencia mística. El cielo se tiñe de tonos púrpuras y dorados, el viento se calma y el mar se vuelve un espejo. Es el momento donde nuestros estudiantes suelen decir que "todo cobra sentido". En Lucas Surf School, nos aseguramos de que captures esos momentos que se quedan grabados para siempre.'
        }
      ],
      whyTitle: '¿Por qué surfear con nosotros?',
      whyBullets: [
        { title: 'Conocimiento Local', desc: 'Lucas y su equipo entienden cada cambio de marea y cada dirección del viento en Nosara, asegurando que siempre estés en el lugar correcto en el momento exacto.' },
        { title: 'Compromiso Ecológico', desc: 'Somos parte de una comunidad que protege su refugio de vida silvestre. Surfeamos en playas vírgenes, sin edificios altos—solo tú y el horizonte.' },
        { title: 'Enfoque Personalizado', desc: 'No creemos en las clases masivas. Creemos en la conexión instructor-alumno para que tu progreso sea real, seguro y divertido.' }
      ],
      ctaTitle: '¿Listo para la aventura?',
      ctaText: 'Ven a Nosara. Deja que el ritmo del mar dicte tu día. Nosotros ponemos la tabla, tú pones las ganas de vivir la mejor aventura de tu vida.'
    },
    service: {
      title: 'Nuestras Clases\nde Surf en Nosara',
      subtitle: 'Cada lección dura 1 hora y 30 minutos e incluye tabla de surf premium, leash, licra de protección y agua fresca.',
      items: [
        {
          name: 'Clase de Surf Grupal',
          tagline: 'Comparte la energía del océano y atrapa tus primeras olas en grupo.',
          bullets: [
            'Duración: 1.5 Horas',
            'Máximo 4 estudiantes por instructor para total seguridad',
            'Perfecto para principiantes, familias y viajeros solitarios',
            'Tablas de espuma (soft-top) para facilitar el equilibrio y la estabilidad'
          ],
          cta: 'Reservar Clase Grupal',
          image: 'https://images.unsplash.com/photo-1502680390469-be75c86b636f?auto=format&fit=crop&q=80'
        },
        {
          name: 'Clase de Surf Privada',
          tagline: 'Entrenamiento 100% personalizado para acelerar tu progreso y ganar confianza.',
          bullets: [
            'Duración: 1.5 Horas',
            'Un instructor local certificado dedicado exclusivamente a ti',
            'Selección de tabla a la medida según tu peso y nivel',
            'Retroalimentación inmediata y análisis en cada ola'
          ],
          cta: 'Reservar Clase Privada',
          image: 'https://images.unsplash.com/photo-1528150177508-7cc0c36cda5c?auto=format&fit=crop&q=80'
        },
        {
          name: 'Guía de Surf y\nCoaching Avanzado',
          tagline: 'Explora los mejores picos en Playa Guiones y Pelada con un experto local.',
          bullets: [
            'Horarios flexibles basados en el reporte diario de mareas y vientos',
            'Análisis profundo de corrientes locales, bancos de arena y oleaje',
            'Guía de posicionamiento en el agua para atrapar la ola del día',
            'Ideal para surfistas intermedios e independientes'
          ],
          cta: 'Consultar Ahora',
          image: 'https://images.unsplash.com/photo-1414490929659-9a12b7e31907?auto=format&fit=crop&q=80'
        }
      ],
      packagesTitle: 'Paquetes de Surf\nMulti-Día (3 o 5 Días)',
      packagesDesc: "No te conformes con un solo día. Construye una base sólida, sigue tu progreso diario y vive el verdadero estilo de vida del surf en Nosara con nuestros paquetes con descuento.",
      packagesCta: 'Contáctanos para personalizar tu paquete de surf'
    },
    gallery: {
      title: 'Galería',
      subtitle: 'Momentos en el Tiempo',
      images: [
        'https://images.unsplash.com/photo-1459749411177-042180ce673c?auto=format&fit=crop&q=80',
        'https://images.unsplash.com/photo-1502680399488-2a6574c55c57?auto=format&fit=crop&q=80',
        'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&q=80',
        'https://images.unsplash.com/photo-1414490929659-9a12b7e31907?auto=format&fit=crop&q=80',
        'https://images.unsplash.com/photo-1510007551642-eabcb64a1322?auto=format&fit=crop&q=80',
        'https://images.unsplash.com/photo-1533036813247-f471e8fb36ea?auto=format&fit=crop&q=80'
      ]
    },
    blog: {
      title: 'Guía de Surf',
      subtitle: 'Conocimientos',
      content: {
        h2: 'La Guía de Surf Definitiva: Consejos de Tablas y Beneficios para Todos',
        h3_1: 'Cómo Elegir la Tabla de Surf Correcta según tu Nivel',
        p_1: 'Elegir la tabla de surf adecuada es crucial para atrapar más olas y evitar la frustración. En las constantes olas de Santa Teresa, adaptar tu peso y experiencia al volumen correcto de la tabla marca toda la diferencia. Aquí tienes un desglose rápido:',
        tableHead: ['Tipo de Tabla', 'Ideal Para', 'Nivel', 'Beneficio Clave'],
        tableBody: [
           ['Soft-top / Foamie', 'Principiantes', 'Novato', 'Máxima estabilidad y seguridad'],
           ['Funboard / Longboard', 'Surfistas de marea media', 'Intermedio', 'Remada fácil y olas largas'],
           ['Fish / Groveler', 'Olas pequeñas o suaves', 'Intermedio-Avanzado', 'Velocidad en secciones lentas'],
           ['Shortboard', 'Olas potentes', 'Avanzado', 'Máxima maniobrabilidad y giros']
        ],
        h3_2: 'Los Beneficios del Surf en Niños (Edades 5-12)',
        bullets_2: [
           { title: 'Coordinación Física', desc: 'El surf desarrolla la fuerza central, el equilibrio y las habilidades motoras a una edad temprana.' },
           { title: 'Seguridad y Confianza en el Mar', desc: 'Los niños aprenden a leer corrientes, respetar la vida marina y perder el miedo al agua.' },
           { title: 'Diversión sin Pantallas', desc: 'Conecta a los niños directamente con la naturaleza de Santa Teresa, manteniéndolos activos al aire libre.' }
        ],
        h3_3: 'Por qué los Adultos deberían Empezar a Surfear Hoy',
        bullets_3: [
           { title: 'Cardio de Bajo Impacto', desc: 'El surf es un entrenamiento increíble para todo el cuerpo que quema calorías sin estresar las articulaciones.' },
           { title: 'Claridad Mental y Alivio del Estrés', desc: 'La "terapia de océano" definitiva. Estar en el agua actúa como un reinicio natural para la ansiedad.' },
           { title: 'La Edad es Solo un Número', desc: 'Nuestras clases personalizadas para adultos se enfocan en la seguridad, demostrando que puedes atrapar tu primera ola a los 30, 40 o 50+ años.' }
        ],
        h3_4: 'Tip Rápido para Búsqueda por Voz (Alexa/Siri)',
        p_4: 'Si te estás preguntando: "¿Dónde puedo alquilar una tabla de surf para principiantes en Santa Teresa?", nuestra escuela te proporciona el equipo soft-top ideal en cada clase cerca de Playa Carmen.'
      }
    },
    contact: {
      title: 'Contacto',
      subtitle: 'Visítanos',
      emailLabel: 'Correo Electrónico',
      email: 'hello@swell.surf',
      phoneLabel: 'Teléfono',
      addressLabel: 'Ubicación',
      address: 'North Shore, Oahu',
      messageTitle: 'Enviar un Mensaje',
      namePlaceholder: 'Tu Nombre',
      emailPlaceholder: 'Tu Correo Electrónico',
      messagePlaceholder: 'Tu Mensaje',
      sendBtn: 'Enviar',
      socials: ['Instagram', 'Dribbble', 'LinkedIn', 'Vimeo']
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
    return translations[language][key];
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
