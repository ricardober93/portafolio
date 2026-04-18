export const locales = ['en', 'es'] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = 'en';

export type LocalizedText = Record<Locale, string>;

export type NavItem = {
  label: LocalizedText;
  href: string;
};

export type LinkItem = {
  label: string;
  href: string;
};

export type LocalizedLinkItem = {
  label: LocalizedText;
  href: string;
};

export type ExpertiseItem = {
  title: LocalizedText;
  description: LocalizedText;
};

export type StackSection = {
  title: LocalizedText;
  items: string[];
};

export type ExperienceItem = {
  company: LocalizedText;
  role: LocalizedText;
  period: LocalizedText;
  summary: LocalizedText;
};

export type Project = {
  slug: string;
  title: LocalizedText;
  category: LocalizedText;
  year: string;
  status: LocalizedText;
  summary: LocalizedText;
  description: LocalizedText;
  challenge: LocalizedText;
  solution: LocalizedText;
  impact: LocalizedText;
  stack: string[];
  links: LocalizedLinkItem[];
  featured?: boolean;
};

export type Post = {
  slug: string;
  title: LocalizedText;
  date: string;
  category: LocalizedText;
  readTime: LocalizedText;
  summary: LocalizedText;
  content: [LocalizedText, LocalizedText, LocalizedText];
  tags: string[];
};

export type ReferenceSlide = {
  slug: string;
  title: LocalizedText;
  caption: LocalizedText;
};

export type LocaleContent = {
  site: {
    name: string;
    role: string;
    headline: string;
    subheadline: string;
    description: string;
    whatsapp: string;
    telegram: string;
    location: string;
  };
  navigation: NavItem[];
  featuredLinks: LinkItem[];
  expertise: ExpertiseItem[];
  stackSections: StackSection[];
  experience: ExperienceItem[];
  principles: string[];
  pages: {
    home: {
      title: string;
      description: string;
      eyebrow: string;
      currentFocusLabel: string;
      currentFocus: string;
      baseLabel: string;
      base: string;
      coreExpertiseEyebrow: string;
      coreExpertiseTitle: string;
      coreExpertiseLead: string;
      stackEyebrow: string;
      stackTitle: string;
      stackLead: string;
      ctaEyebrow: string;
      ctaTitle: string;
      ctaPrimary: string;
      ctaSecondary: string;
    };
    about: {
      title: string;
      description: string;
      eyebrow: string;
      titleText: string;
      lead: string;
      profileEyebrow: string;
      profile: string;
      contactEyebrow: string;
      workingPrinciplesEyebrow: string;
      workingPrinciplesTitle: string;
      workingPrinciplesLead: string;
    };
    contact: {
      title: string;
      description: string;
      eyebrow: string;
      titleText: string;
      lead: string;
      whatsapp: string;
      telegram: string;
      linkedin: string;
      availability: string;
      worksWellEyebrow: string;
      worksWell: string;
      responseEyebrow: string;
      response: string;
    };
    projectsIndex: {
      title: string;
      description: string;
      eyebrow: string;
      titleText: string;
      lead: string;
      manifestoEyebrow: string;
      manifestoTitle: string;
      manifestoLead: string;
      ctaEyebrow: string;
      ctaTitle: string;
      ctaPrimary: string;
    };
    blogIndex: {
      title: string;
      description: string;
      eyebrow: string;
      titleText: string;
      lead: string;
      dateHeader: string;
      subjectHeader: string;
      categoryHeader: string;
      pageLabel: string;
      previousLabel: string;
      nextLabel: string;
    };
    references: {
      title: string;
      description: string;
      eyebrow: string;
      titleText: string;
      lead: string;
    };
    notFound: {
      title: string;
      description: string;
      eyebrow: string;
      titleText: string;
      lead: string;
      cta: string;
    };
    projectDetail: {
      title: string;
      description: string;
      year: string;
      status: string;
      stack: string;
      challenge: string;
      architecture: string;
      results: string;
      quote: string;
      links: string;
      previous: string;
      next: string;
    };
    blogDetail: {
      title: string;
      description: string;
      date: string;
      readTime: string;
      tags: string;
      overview: string;
      process: string;
      outcome: string;
      quote: string;
    };
  };
  projects: Project[];
  posts: Post[];
  referenceSlides: ReferenceSlide[];
};

export function isLocale(value: string | null | undefined): value is Locale {
  return value === 'en' || value === 'es';
}

export function getLocale(value: string | null | undefined): Locale {
  return isLocale(value) ? value : defaultLocale;
}

export function stripLocalePrefix(pathname: string): string {
  if (pathname === '/' || pathname === '') {
    return '/';
  }

  for (const locale of locales) {
    if (locale === defaultLocale) {
      continue;
    }

    const prefix = `/${locale}`;

    if (pathname === prefix) {
      return '/';
    }

    if (pathname.startsWith(`${prefix}/`)) {
      const withoutPrefix = pathname.slice(prefix.length);
      return withoutPrefix === '' ? '/' : withoutPrefix;
    }
  }

  return pathname;
}

export function localizeHref(locale: Locale, href: string): string {
  if (!href.startsWith('/')) {
    return href;
  }

  const path = stripLocalePrefix(href);

  if (locale === defaultLocale) {
    return path;
  }

  return path === '/' ? `/${locale}` : `/${locale}${path}`;
}

export function getLocaleData(locale: string | null | undefined): LocaleContent {
  return localeData[getLocale(locale)];
}

export const localeData: Record<Locale, LocaleContent> = {
  en: {
    site: {
      name: 'Ricardo Bermudez',
      role: 'Senior Software Engineer',
      headline: 'SENIOR SOFTWARE ENGINEER.',
      subheadline:
        'I build software end to end with a design background in the mix. That means frontend judgment, fullstack ownership, and UX/UI context when product decisions get messy.',
      description:
        'Portfolio of Ricardo Bermudez. Senior software engineering with frontend depth, product judgment, and a design-aware approach to delivery.',
      whatsapp: '+573145063381',
      telegram: '@ricardobo93',
      location: 'LatAm / Remote',
    },
    navigation: [
      { label: { en: 'Home', es: 'Inicio' }, href: '/' },
      { label: { en: 'Projects', es: 'Proyectos' }, href: '/projects' },
      { label: { en: 'Blog', es: 'Blog' }, href: '/blog' },
      { label: { en: 'About', es: 'About' }, href: '/about' },
      { label: { en: 'Contact', es: 'Contacto' }, href: '/contact' },
    ],
    featuredLinks: [
      { label: 'LinkedIn', href: 'https://www.linkedin.com/in/ricardotellez7/' },
      { label: 'WhatsApp', href: 'https://wa.me/573145063381' },
    ],
    expertise: [
      {
        title: { en: 'Product ownership', es: 'Ownership de producto' },
        description: {
          en: 'I turn vague requirements into shipping code, clear interfaces, and decisions the next engineer can still work with.',
          es: 'Convierto requerimientos ambiguos en código entregable, interfaces claras y decisiones que otro ingeniero puede seguir usando.',
        },
      },
      {
        title: { en: 'Frontend architecture', es: 'Arquitectura frontend' },
        description: {
          en: 'I build large surfaces with boundaries that stay readable, maintainable, and fast under real usage.',
          es: 'Construyo superficies grandes con límites que se mantienen legibles, mantenibles y rápidas bajo uso real.',
        },
      },
      {
        title: { en: 'Design context', es: 'Contexto de diseño' },
        description: {
          en: 'I use graphic design and UX/UI instincts to protect hierarchy, spacing, and clarity while still shipping like an engineer.',
          es: 'Uso mi base en diseño gráfico y UX/UI para proteger jerarquía, espaciado y claridad sin dejar de entregar como ingeniero.',
        },
      },
    ],
    stackSections: [
      {
        title: { en: 'Language', es: 'Lenguajes' },
        items: ['TypeScript', 'JavaScript', 'Go', 'HTML', 'CSS'],
      },
      {
        title: { en: 'Frameworks', es: 'Frameworks' },
        items: ['Astro', 'React', 'Preact', 'Node.js'],
      },
      {
        title: { en: 'Platform', es: 'Plataforma' },
        items: ['Vercel', 'OpenAI', 'APIs', 'Markdown'],
      },
      {
        title: { en: 'Systems', es: 'Sistemas' },
        items: ['UX', 'Design systems', 'Routing', 'Accessibility'],
      },
    ],
    principles: [
      'Understand the constraint before touching the UI or the API.',
      'Use AI to explore faster, not to outsource judgment.',
      'Prefer decisions that survive handoff, scale, and maintenance.',
    ],
    experience: [
      {
        company: { en: 'Panels.lat', es: 'Panels.lat' },
        role: { en: 'Fullstack Engineer', es: 'Fullstack Engineer' },
        period: { en: 'Solo project / AI-assisted', es: 'Proyecto personal / con apoyo de IA' },
        summary: {
          en: 'Built the product end to end and handled Neon, Vercel Blob, JWT auth, user management, and the frontend flows around infinite scroll.',
          es: 'Construí el producto de punta a punta y resolví Neon, Vercel Blob, auth con JWT, gestión de usuarios y los flujos de frontend alrededor del infinite scroll.',
        },
      },
      {
        company: { en: 'Mercado Libre', es: 'Mercado Libre' },
        role: { en: 'Software Engineer', es: 'Software Engineer' },
        period: { en: 'Almost 3 years', es: 'Casi 3 años' },
        summary: {
          en: 'Worked on webview integrations between web apps and mobile surfaces inside a large product environment.',
          es: 'Trabajé en integraciones de webview entre aplicaciones web y superficies móviles dentro de un entorno de producto grande.',
        },
      },
      {
        company: { en: 'Bolsiyo', es: 'Bolsiyo' },
        role: { en: 'Senior Frontend Developer', es: 'Senior Frontend Developer' },
        period: { en: 'Startup stage', es: 'Etapa startup' },
        summary: {
          en: 'Worked in Angular and proposed a DDD-oriented frontend structure for complex changes in a fast-moving startup.',
          es: 'Trabajé en Angular y propuse una estructura frontend orientada a DDD para cambios complejos en una startup en movimiento.',
        },
      },
      {
        company: { en: 'IES', es: 'IES' },
        role: { en: 'Frontend Developer', es: 'Frontend Developer' },
        period: { en: 'Large project', es: 'Proyecto grande' },
        summary: {
          en: 'Owned the frontend of a large project and kept the implementation moving across a substantial surface area.',
          es: 'Me encargué del frontend de un proyecto grande y mantuve la implementación avanzando sobre una superficie amplia.',
        },
      },
    ],
    pages: {
      home: {
        title: 'Ricardo Bermudez | Senior Software Engineer',
        description:
          'Bilingual portfolio for a Senior Software Engineer with frontend depth, fullstack delivery, and a design-aware approach to product work.',
        eyebrow: 'Senior / Software / Product / Design',
        currentFocusLabel: 'Current focus',
        currentFocus:
          'Shipping product systems with auth, user management, storage, webview integrations, and frontend flows that stay understandable as they grow.',
        baseLabel: 'Base',
        base: 'Frontend / Fullstack / UX context / AI-assisted delivery',
        coreExpertiseEyebrow: 'Core strengths',
        coreExpertiseTitle: 'What I bring to a team.',
        coreExpertiseLead:
          'Senior Software Engineer with frontend judgment, fullstack ownership, and a design background that helps me solve product problems without losing clarity.',
        stackEyebrow: 'The stack',
        stackTitle: 'Tools I use to ship and maintain.',
        stackLead:
          'A practical stack for building products that stay fast, readable, and easy for another engineer to extend.',
        experienceEyebrow: 'Experience',
        experienceTitle: 'Where I have shipped.',
        experienceLead:
          'A quick view of the teams and products that shaped how I work today.',
        ctaEyebrow: 'Next step',
        ctaTitle: 'Need someone to own the build?',
        ctaPrimary: 'Contact',
        ctaSecondary: 'LinkedIn',
      },
      about: {
        title: 'About | Ricardo Bermudez',
        description: 'About my background, experience, and how I build software.',
        eyebrow: 'About / Experience',
        titleText: 'FROM DESIGN TO DELIVERY.',
        lead:
          'I build software with product judgment and a design lens. That lets me move comfortably between UX context, frontend execution, and the backend decisions needed to ship complex products.',
        profileEyebrow: 'Profile',
        profile:
          'I started in graphic design and moved into frontend, fullstack, and architecture work. That mix helps me read interfaces, systems, and implementation as one conversation instead of separate disciplines.',
        contactEyebrow: 'Contact',
        experienceEyebrow: 'Experience',
        experienceTitle: 'Teams and products I have worked in.',
        experienceLead:
          'The short version of where I have shipped, what I owned, and why it matters.',
        workingPrinciplesEyebrow: 'Working principles',
        workingPrinciplesTitle: 'How I show up on a project.',
        workingPrinciplesLead:
          'Simple rules: understand the constraint, protect the system, and use AI as leverage without handing over judgment.',
      },
      contact: {
        title: 'Contact | Ricardo Bermudez',
        description: 'Contact Ricardo Bermudez for product, frontend, or fullstack work.',
        eyebrow: 'Contact',
        titleText: "LET'S BUILD THE PART THAT HOLDS UP.",
        lead:
          'If you need a Senior Software Engineer who can own frontend surfaces, fullstack delivery, and design-sensitive product work, I can help.',
        whatsapp: 'WhatsApp',
        telegram: 'Telegram',
        linkedin: 'LinkedIn',
        availability: 'Open to freelance, product, and team roles',
        worksWellEyebrow: 'Where I fit best',
        worksWell:
          'Large frontend surfaces, auth flows, user systems, storage-heavy products, webview integrations, and apps that need clear state boundaries.',
        responseEyebrow: 'Response',
        response: 'I usually reply with context, a recommended direction, and the first concrete change I would make.',
      },
      projectsIndex: {
        title: 'Projects | Ricardo Bermudez',
        description: 'Selected projects that show product complexity, frontend depth, and fullstack delivery.',
        eyebrow: 'Selected work',
        titleText: 'PROJECTS WITH REAL CONSTRAINTS.',
        lead:
          'Projects that show product ownership, frontend depth, fullstack delivery, and the kind of complexity that senior engineers spend their time untangling.',
        manifestoEyebrow: 'What the work proves',
        manifestoTitle: 'Why these projects matter.',
        manifestoLead:
          'Each one shows a different part of the job: architecture, delivery, maintenance, or product judgment under real constraints.',
        ctaEyebrow: 'Next step',
        ctaTitle: 'Need someone to own the build?',
        ctaPrimary: 'Contact',
      },
      blogIndex: {
        title: 'Blog | Ricardo Bermudez',
        description: 'Notes on software delivery, product decisions, and AI-assisted work.',
        eyebrow: 'Field notes',
        titleText: 'NOTES FROM THE BUILD.',
        lead:
          'Short notes on frontend decisions, product delivery, and the tradeoffs that show up when you actually ship.',
        dateHeader: 'Date',
        subjectHeader: 'Topic / Subject',
        categoryHeader: 'Category',
        pageLabel: 'Page 01 of 01',
        previousLabel: 'Previous',
        nextLabel: 'Next archive',
      },
      references: {
        title: 'References | Ricardo Bermudez',
        description: 'Visual references and supporting assets for the portfolio direction.',
        eyebrow: 'Reference board',
        titleText: 'VISUAL REFERENCES.',
        lead:
          'Support page to review the included frames and keep traceability of the visual system behind the site.',
      },
      notFound: {
        title: '404 | Ricardo Bermudez',
        description: 'Page not found.',
        eyebrow: '404',
        titleText: 'PAGE NOT FOUND.',
        lead: 'The route does not exist. Go back home to keep exploring the portfolio.',
        cta: 'Back to home',
      },
      projectDetail: {
        title: 'Project details',
        description: 'Project detail page.',
        year: 'Year',
        status: 'Status',
        stack: 'Stack',
        challenge: 'The problem',
        architecture: 'Approach',
        results: 'Results',
        quote:
          'Senior work is not only writing code. It is choosing the boundary, keeping the system predictable, and making the next change cheaper.',
        links: 'Links',
        previous: 'Previous project',
        next: 'Next project',
      },
      blogDetail: {
        title: 'Article',
        description: 'Blog article detail.',
        date: 'Date',
        readTime: 'Read time',
        tags: 'Tags',
        overview: 'Overview',
        process: 'Process',
        outcome: 'Outcome',
        quote:
          'Good technical writing makes the next decision easier, not just the current one.',
      },
    },
    projects: [
      {
        slug: 'micro-frontend-farm-admin',
        title: { en: 'FarmAdmin', es: 'FarmAdmin' },
        category: { en: 'Microfrontend', es: 'Microfrontend' },
        year: '2026',
        status: { en: 'Public', es: 'Público' },
        summary: {
          en: 'A modular admin system built to keep a growing product readable.',
          es: 'Un sistema admin modular pensado para mantener legible un producto que crece.',
        },
        description: {
          en: 'A workspace built to split responsibilities by domain and avoid a frontend that becomes impossible to extend.',
          es: 'Un workspace construido para dividir responsabilidades por dominio y evitar un frontend imposible de extender.',
        },
        challenge: {
          en: 'Separate screens, domains, and flows without letting the frontend turn into a monolith.',
          es: 'Separar pantallas, dominios y flujos sin dejar que el frontend se convierta en un monolito.',
        },
        solution: {
          en: 'I used shared pieces and clear domain boundaries to scale the UI without losing order.',
          es: 'Usé piezas compartidas y fronteras claras entre dominios para escalar la UI sin perder orden.',
        },
        impact: {
          en: 'It shows frontend architecture judgment and a practical way to organize complex admin applications.',
          es: 'Muestra criterio de arquitectura frontend y una forma práctica de organizar aplicaciones admin complejas.',
        },
        stack: ['Nx', 'Microfrontends', 'TypeScript', 'Modular UI'],
        links: [{ label: { en: 'GitHub', es: 'GitHub' }, href: 'https://github.com/ricardober93/micro-frontend-farm-admin' }],
        featured: true,
      },
      {
        slug: 'tingo-tingo-tango',
        title: { en: 'Tingo Tingo Tango', es: 'Tingo Tingo Tango' },
        category: { en: 'Browser game', es: 'Juego web' },
        year: '2026',
        status: { en: 'Public', es: 'Público' },
        summary: {
          en: 'A one-device local game that I built as a playable frontend architecture case study.',
          es: 'Un juego local para un solo dispositivo que construí como caso de estudio de arquitectura frontend.',
        },
        description: {
          en: 'A React + Vite project where game feel, browser APIs, and code structure had to work together without turning into ad hoc logic.',
          es: 'Un proyecto en React + Vite donde la sensación del juego, las APIs del navegador y la estructura del código tenían que convivir sin caer en lógica improvisada.',
        },
        challenge: {
          en: 'Build a simple game that still proves architecture decisions, explainable randomness, and reliable browser-side interactions.',
          es: 'Construir un juego simple que igual demostrara decisiones de arquitectura, aleatoriedad explicable e interacciones confiables en el navegador.',
        },
        solution: {
          en: 'I organized the app around Zustand, explicit game services, and browser adapters for audio, wake lock, fullscreen, haptics, and persistence.',
          es: 'Organicé la app alrededor de Zustand, servicios explícitos del juego y adapters del navegador para audio, wake lock, fullscreen, háptica y persistencia.',
        },
        impact: {
          en: 'It shows I can turn a small product into a sharp frontend case study with real technical decisions behind the interaction.',
          es: 'Muestra que puedo convertir un producto pequeño en un caso sólido de frontend con decisiones técnicas reales detrás de la interacción.',
        },
        stack: ['React', 'TypeScript', 'Vite', 'Zustand', 'Browser APIs'],
        links: [
          { label: { en: 'GitHub', es: 'GitHub' }, href: 'https://github.com/ricardober93/tingo-tingo-tango' },
          { label: { en: 'Demo', es: 'Demo' }, href: 'https://tingo-tingo-tango.vercel.app/' },
        ],
        featured: true,
      },
      {
        slug: 'vector-map',
        title: { en: 'Vector Map', es: 'Vector Map' },
        category: { en: 'Python / data', es: 'Python / datos' },
        year: '2026',
        status: { en: 'Public', es: 'Público' },
        summary: {
          en: 'A Python project focused on structured map data and repeatable processing.',
          es: 'Un proyecto en Python enfocado en datos de mapa estructurados y procesamiento repetible.',
        },
        description: {
          en: 'A deeper technical project that shows how I handle non-trivial Python work and spatial logic.',
          es: 'Un proyecto técnico más profundo que muestra cómo trabajo código Python no trivial y lógica espacial.',
        },
        challenge: {
          en: 'Handle map-related data and processing without turning the codebase into a tangle.',
          es: 'Manejar datos y procesamiento relacionados con mapas sin convertir la base de código en un enredo.',
        },
        solution: {
          en: 'I structured the Python code around clear steps, processing boundaries, and reusable pieces.',
          es: 'Estructuré el código en Python alrededor de pasos claros, límites de procesamiento y piezas reutilizables.',
        },
        impact: {
          en: 'It shows I can work through a more technical Python problem and keep the result understandable.',
          es: 'Muestra que puedo resolver un problema más técnico en Python y mantener el resultado entendible.',
        },
        stack: ['Python', 'Spatial Data', 'Processing', 'Shell'],
        links: [
          { label: { en: 'GitHub', es: 'GitHub' }, href: 'https://github.com/ricardober93/vector-map' },
        ],
        featured: true,
      },
      {
        slug: 'lector-novelas-online',
        title: { en: 'Panels.lat', es: 'Panels.lat' },
        category: { en: 'Web app', es: 'App web' },
        year: '2026',
        status: { en: 'Public', es: 'Público' },
        summary: {
          en: 'A fullstack product I built solo with AI support and shipped at panels.lat.',
          es: 'Un producto fullstack que construí solo con apoyo de IA y publiqué en panels.lat.',
        },
        description: {
          en: 'A product with auth, storage, and user flows that had to work cleanly from the first release.',
          es: 'Un producto con auth, storage y flujos de usuario que tenían que funcionar bien desde la primera versión.',
        },
        challenge: {
          en: 'Ship a product that handled auth, image storage, and scrolling without turning the frontend into a mess.',
          es: 'Lanzar un producto que manejara auth, almacenamiento de imágenes e infinite scroll sin volver el frontend un desastre.',
        },
        solution: {
          en: 'I integrated Neon and Vercel Blob, handled JWT auth and user management, and kept the interface tight around the reading flow.',
          es: 'Integré Neon y Vercel Blob, manejé auth con JWT y gestión de usuarios, y mantuve la interfaz centrada en el flujo de lectura.',
        },
        impact: {
          en: 'It is the clearest proof that I can take a product from idea to shipping and solve the problems that show up along the way.',
          es: 'Es la prueba más clara de que puedo llevar un producto de la idea al despliegue y resolver los problemas que aparecen en el camino.',
        },
        stack: ['TypeScript', 'JavaScript', 'CSS', 'Web'],
        links: [
          { label: { en: 'GitHub', es: 'GitHub' }, href: 'https://github.com/ricardober93/lector-novelas-online' },
          { label: { en: 'Demo', es: 'Demo' }, href: 'https://www.panels.lat/' },
        ],
        featured: true,
      },
      {
        slug: 'cv-generator',
        title: { en: 'CV Generator', es: 'CV Generator' },
        category: { en: 'Utility', es: 'Utilidad' },
        year: '2025',
        status: { en: 'Public', es: 'Público' },
        summary: {
          en: 'A personal tool for generating resumes with less friction.',
          es: 'Una herramienta personal para generar hojas de vida con menos fricción.',
        },
        description: {
          en: 'A practical utility focused on speed, structure, and a straightforward workflow.',
          es: 'Una utilidad práctica enfocada en velocidad, estructura y un flujo directo.',
        },
        challenge: {
          en: 'Make resume creation fast without adding unnecessary steps or complexity.',
          es: 'Hacer rápida la creación de una hoja de vida sin meter pasos ni complejidad innecesaria.',
        },
        solution: {
          en: 'I kept the workflow simple so the tool stays fast to use and easy to maintain.',
          es: 'Mantuve el flujo simple para que la herramienta siga siendo rápida de usar y fácil de mantener.',
        },
        impact: {
          en: 'It is a finished tool that solves one job clearly and does not waste the user’s time.',
          es: 'Es una herramienta terminada que resuelve bien una sola tarea y no le hace perder tiempo al usuario.',
        },
        stack: ['TypeScript', 'JavaScript', 'HTML', 'CSS'],
        links: [
          { label: { en: 'GitHub', es: 'GitHub' }, href: 'https://github.com/ricardober93/cv-generator' },
        ],
        featured: true,
      },
      {
        slug: 'flutter-map',
        title: { en: 'Flutter Map', es: 'Flutter Map' },
        category: { en: 'Mobile app', es: 'App móvil' },
        year: '2023',
        status: { en: 'Reference', es: 'Referencia' },
        summary: {
          en: 'A Flutter app focused on maps, geolocation, and route-aware interactions.',
          es: 'Una app en Flutter enfocada en mapas, geolocalización e interacciones con rutas.',
        },
        description: {
          en: 'A practical mobile project that shows how I work with location-aware experiences and map UI.',
          es: 'Un proyecto móvil práctico que muestra cómo trabajo experiencias con ubicación e interfaces de mapa.',
        },
        challenge: {
          en: 'Build a useful map-based experience that handles position, permissions, and visual clarity without friction.',
          es: 'Construir una experiencia útil basada en mapas que gestione posición, permisos y claridad visual sin fricción.',
        },
        solution: {
          en: 'I combined Flutter, Google Maps, geolocation, and permission handling to keep the flow direct and reliable.',
          es: 'Combiné Flutter, Google Maps, geolocalización y manejo de permisos para mantener un flujo directo y confiable.',
        },
        impact: {
          en: 'It adds a strong mobile example to the portfolio and shows practical experience with map-driven interfaces.',
          es: 'Aporta un ejemplo móvil sólido al portafolio y muestra experiencia práctica con interfaces guiadas por mapas.',
        },
        stack: ['Flutter', 'Google Maps', 'Geolocation', 'Permissions'],
        links: [
          { label: { en: 'GitHub', es: 'GitHub' }, href: 'https://github.com/ricardober93/flutter-map' },
        ],
        featured: true,
      },
      {
        slug: 'learn-to-speak',
        title: { en: 'Learn to Speak', es: 'Learn to Speak' },
        category: { en: 'Personal app', es: 'App personal' },
        year: '2025',
        status: { en: 'Personal', es: 'Personal' },
        summary: {
          en: 'A small app I built for my daughter to learn to read.',
          es: 'Una pequeña app que armé para mi hija para aprender a leer.',
        },
        description: {
          en: 'A personal project with a warm, simple experience aimed at early learning.',
          es: 'Un proyecto personal con una experiencia cálida y simple, pensado para aprendizaje temprano.',
        },
        challenge: {
          en: 'Create something friendly, simple, and useful for a child learning to read.',
          es: 'Crear algo amable, simple y útil para una niña que está aprendiendo a leer.',
        },
        solution: {
          en: 'I kept the interaction light and direct so the app feels approachable and easy to use.',
          es: 'Mantuve la interacción ligera y directa para que la app se sienta cercana y fácil de usar.',
        },
        impact: {
          en: 'It is a personal project with real purpose and a clear human story behind it.',
          es: 'Es un proyecto personal con un propósito real y una historia humana clara detrás.',
        },
        stack: ['TypeScript', 'JavaScript', 'CSS', 'Web'],
        links: [
          { label: { en: 'GitHub', es: 'GitHub' }, href: 'https://github.com/ricardober93/learn-to-speak' },
        ],
        featured: true,
      },
    ],
    posts: [
      {
        slug: 'diseno-estrategia-y-codigo',
        title: {
          en: 'My stack is not a checklist; it is how I build with less friction',
          es: 'Mi stack no es una lista; es la forma en que construyo con menos fricción',
        },
        date: '2026-03-12',
        category: { en: 'Stack', es: 'Stack' },
        readTime: { en: '6 min', es: '6 min' },
        summary: {
          en: 'TypeScript, React, Next.js, and Figma give me one continuous path from design to backend.',
          es: 'TypeScript, React, Next.js y Figma me dan un camino continuo entre diseño, frontend y backend.',
        },
        content: [
          {
            en: 'I work with JavaScript and TypeScript because they give me one shared language for frontend and backend, which keeps the whole system easier to reason about.',
            es: 'Trabajo con JavaScript y TypeScript porque me dan un lenguaje común para frontend y backend, y eso hace que todo el sistema sea más fácil de entender.',
          },
          {
            en: 'I use Node or Bun when I need speed and flexibility, Express or Hono when the backend needs a more specific shape, and React or Next.js when the frontend has to feel like my specialty.',
            es: 'Uso Node o Bun cuando necesito velocidad y flexibilidad, Express o Hono cuando el backend pide una forma más específica, y React o Next.js cuando el frontend tiene que sentirse como mi especialidad.',
          },
          {
            en: 'Knowing Figma also helps me pay attention to composition, hierarchy, spacing, and detail, so the transition from design to code feels natural instead of forced.',
            es: 'Saber Figma también me ayuda a cuidar composición, jerarquía, espaciado y detalle, para que la transición de diseño a código se sienta natural y no forzada.',
          },
        ],
        tags: ['typescript', 'fullstack', 'figma'],
      },
      {
        slug: 'astro-preact-portafolio',
        title: {
          en: 'Why Astro + Preact is a strong base for a fast, elegant portfolio',
          es: 'Por qué Astro + Preact es una gran base para un portafolio rápido y elegante',
        },
        date: '2026-03-02',
        category: { en: 'Frontend', es: 'Frontend' },
        readTime: { en: '5 min', es: '5 min' },
        summary: {
          en: 'Lightweight, flexible, and a good fit for mixing static content with focused interaction.',
          es: 'Ligero, flexible y muy cómodo para mezclar contenido estático con interacción puntual.',
        },
        content: [
          {
            en: 'Astro lets me build solid, fast pages without shipping unnecessary JavaScript.',
            es: 'Astro me deja construir páginas sólidas y rápidas sin cargar JavaScript innecesario.',
          },
          {
            en: 'Preact only comes in where the user actually interacts, like the mobile menu.',
            es: 'Preact entra solo donde el usuario realmente interactúa, como el menú mobile.',
          },
          {
            en: 'The result feels more premium because the technology does not steal the visual spotlight.',
            es: 'El resultado se siente más premium porque la tecnología no se roba el protagonismo visual.',
          },
        ],
        tags: ['astro', 'preact', 'performance'],
      },
      {
        slug: 'ia-en-mi-flujo',
        title: {
          en: 'How I work with AI: explore, specify, delegate, review',
          es: 'Cómo trabajo con IA: explorar, especificar, delegar y revisar',
        },
        date: '2026-02-19',
        category: { en: 'AI', es: 'IA' },
        readTime: { en: '4 min', es: '4 min' },
        summary: {
          en: 'I use Codex and Claude Code to move faster without handing over my judgment.',
          es: 'Uso Codex y Claude Code para avanzar más rápido sin soltar mi criterio.',
        },
        content: [
          {
            en: 'I like working with Codex because it feels more comfortable for the way I move through a feature: first I explore ideas and understand the problem before I write anything.',
            es: 'Me gusta trabajar con Codex porque me resulta más cómodo para avanzar en una feature: primero exploro ideas y entiendo el problema antes de escribir algo.',
          },
          {
            en: 'Then I write clear specifications with a concrete goal and tasks that leave less room for ambiguity, and only after that do I let the agent implement the code.',
            es: 'Después escribo especificaciones claras, con un objetivo concreto y tareas que dejen menos espacio para la ambigüedad, y solo entonces dejo que el agente implemente el código.',
          },
          {
            en: 'The last step is review: if something does not feel right, I go back to exploration and improve the specification before moving forward again.',
            es: 'El último paso es la review: si algo no me convence, vuelvo a la exploración y mejoro la especificación antes de seguir adelante.',
          },
        ],
        tags: ['ai', 'workflow', 'specs'],
      },
    ],
    referenceSlides: [
      {
        slug: 'home-final-unified',
        title: { en: 'Home final unified', es: 'Home final unificado' },
        caption: {
          en: 'Typographic hero, clear hierarchy, and a closing CTA that points to contact.',
          es: 'Hero tipográfico, jerarquía clara y un cierre con CTA que lleva a contacto.',
        },
      },
      {
        slug: 'projects-archive-final',
        title: { en: 'Projects archive final', es: 'Archivo final de proyectos' },
        caption: {
          en: 'Project archive built for fast scanning and simple navigation.',
          es: 'Archivo de proyectos pensado para escaneo rápido y navegación simple.',
        },
      },
      {
        slug: 'about-contact-updated-header',
        title: { en: 'About / contact', es: 'About / contacto' },
        caption: {
          en: 'About block that names the background and gives a direct path to contact.',
          es: 'Bloque de about que nombra el background y da un camino directo a contacto.',
        },
      },
      {
        slug: 'blog-text-focused',
        title: { en: 'Blog index', es: 'Índice del blog' },
        caption: {
          en: 'Reading list designed for quick scanning and short-form thought.',
          es: 'Listado de lectura pensado para escaneo rápido y pensamiento breve.',
        },
      },
      {
        slug: 'blog-post-detail-final',
        title: { en: 'Blog post detail', es: 'Detalle de post del blog' },
        caption: {
          en: 'Article detail with clear sections for long reading.',
          es: 'Detalle de artículo con secciones claras para lectura larga.',
        },
      },
      {
        slug: 'project-detail-final',
        title: { en: 'Project detail', es: 'Detalle de proyecto' },
        caption: {
          en: 'Case study layout that shows constraints, decisions, and proof.',
          es: 'Layout de caso de estudio que muestra restricciones, decisiones y prueba.',
        },
      },
    ],
  },
  es: {
    site: {
      name: 'Ricardo Bermudez',
      role: 'Senior Software Engineer',
      headline: 'SENIOR SOFTWARE ENGINEER.',
      subheadline:
        'Construyo software de punta a punta con una base en diseño gráfico y UX/UI. Eso me permite unir frontend, fullstack y criterio de producto sin perder claridad.',
      description:
        'Portafolio de Ricardo Bermudez. Senior Software Engineer con profundidad frontend, delivery fullstack y criterio de producto.',
      whatsapp: '+573145063381',
      telegram: '@ricardobo93',
      location: 'LatAm / Remote',
    },
    navigation: [
      { label: { en: 'Home', es: 'Inicio' }, href: '/' },
      { label: { en: 'Projects', es: 'Proyectos' }, href: '/projects' },
      { label: { en: 'Blog', es: 'Blog' }, href: '/blog' },
      { label: { en: 'About', es: 'About' }, href: '/about' },
      { label: { en: 'Contact', es: 'Contacto' }, href: '/contact' },
    ],
    featuredLinks: [
      { label: 'LinkedIn', href: 'https://www.linkedin.com/in/ricardotellez7/' },
      { label: 'WhatsApp', href: 'https://wa.me/573145063381' },
    ],
    expertise: [
      {
        title: { en: 'Product ownership', es: 'Ownership de producto' },
        description: {
          en: 'I turn vague requirements into shipping code, clear interfaces, and decisions the next engineer can still work with.',
          es: 'Convierto requerimientos ambiguos en código entregable, interfaces claras y decisiones que otro ingeniero puede seguir usando.',
        },
      },
      {
        title: { en: 'Frontend architecture', es: 'Arquitectura frontend' },
        description: {
          en: 'I build large surfaces with boundaries that stay readable, maintainable, and fast under real usage.',
          es: 'Construyo superficies grandes con límites que se mantienen legibles, mantenibles y rápidas bajo uso real.',
        },
      },
      {
        title: { en: 'Design context', es: 'Contexto de diseño' },
        description: {
          en: 'I use graphic design and UX/UI instincts to protect hierarchy, spacing, and clarity while still shipping like an engineer.',
          es: 'Uso mi base en diseño gráfico y UX/UI para proteger jerarquía, espaciado y claridad sin dejar de entregar como ingeniero.',
        },
      },
    ],
    stackSections: [
      {
        title: { en: 'Language', es: 'Lenguajes' },
        items: ['TypeScript', 'JavaScript', 'Go', 'HTML', 'CSS'],
      },
      {
        title: { en: 'Frameworks', es: 'Frameworks' },
        items: ['Astro', 'React', 'Preact', 'Node.js'],
      },
      {
        title: { en: 'Platform', es: 'Plataforma' },
        items: ['Vercel', 'OpenAI', 'APIs', 'Markdown'],
      },
      {
        title: { en: 'Systems', es: 'Sistemas' },
        items: ['UX', 'Design systems', 'Routing', 'Accessibility'],
      },
    ],
    principles: [
      'Entender la restricción antes de tocar la UI o la API.',
      'Usar IA para explorar más rápido, no para soltar el criterio.',
      'Preferir decisiones que sobreviven handoff, escala y mantenimiento.',
    ],
    experience: [
      {
        company: { en: 'Panels.lat', es: 'Panels.lat' },
        role: { en: 'Fullstack Engineer', es: 'Fullstack Engineer' },
        period: { en: 'Solo project / AI-assisted', es: 'Proyecto personal / con apoyo de IA' },
        summary: {
          en: 'Built the product end to end and handled Neon, Vercel Blob, JWT auth, user management, and the frontend flows around infinite scroll.',
          es: 'Construí el producto de punta a punta y resolví Neon, Vercel Blob, auth con JWT, gestión de usuarios y los flujos de frontend alrededor del infinite scroll.',
        },
      },
      {
        company: { en: 'Mercado Libre', es: 'Mercado Libre' },
        role: { en: 'Software Engineer', es: 'Software Engineer' },
        period: { en: 'Almost 3 years', es: 'Casi 3 años' },
        summary: {
          en: 'Worked on webview integrations between web apps and mobile surfaces inside a large product environment.',
          es: 'Trabajé en integraciones de webview entre aplicaciones web y superficies móviles dentro de un entorno de producto grande.',
        },
      },
      {
        company: { en: 'Bolsiyo', es: 'Bolsiyo' },
        role: { en: 'Senior Frontend Developer', es: 'Senior Frontend Developer' },
        period: { en: 'Startup stage', es: 'Etapa startup' },
        summary: {
          en: 'Worked in Angular and proposed a DDD-oriented frontend structure for complex changes in a fast-moving startup.',
          es: 'Trabajé en Angular y propuse una estructura frontend orientada a DDD para cambios complejos en una startup en movimiento.',
        },
      },
      {
        company: { en: 'IES', es: 'IES' },
        role: { en: 'Frontend Developer', es: 'Frontend Developer' },
        period: { en: 'Large project', es: 'Proyecto grande' },
        summary: {
          en: 'Owned the frontend of a large project and kept the implementation moving across a substantial surface area.',
          es: 'Me encargué del frontend de un proyecto grande y mantuve la implementación avanzando sobre una superficie amplia.',
        },
      },
    ],
    pages: {
      home: {
        title: 'Ricardo Bermudez | Senior Software Engineer',
        description:
          'Portafolio bilingüe para un Senior Software Engineer con profundidad frontend, delivery fullstack y una forma de trabajar consciente del diseño.',
        eyebrow: 'Senior / Software / Producto / Diseño',
        currentFocusLabel: 'En foco',
        currentFocus:
          'Entregar sistemas de producto con auth, gestión de usuarios, storage, integraciones con webview y flujos de frontend que sigan siendo entendibles cuando crecen.',
        baseLabel: 'Base',
        base: 'Frontend / Fullstack / UX context / AI-assisted delivery',
        coreExpertiseEyebrow: 'Fortalezas clave',
        coreExpertiseTitle: 'Lo que llevo a un equipo.',
        coreExpertiseLead:
          'Senior Software Engineer con criterio frontend, ownership fullstack y una base en diseño que ayuda a resolver problemas de producto sin perder claridad.',
        stackEyebrow: 'El stack',
        stackTitle: 'Herramientas que uso para entregar y mantener.',
        stackLead:
          'Un stack práctico para construir productos rápidos, legibles y fáciles de extender por otro ingeniero.',
        experienceEyebrow: 'Experiencia',
        experienceTitle: 'Dónde he entregado.',
        experienceLead:
          'Una vista rápida de equipos y productos que moldearon cómo trabajo hoy.',
        ctaEyebrow: 'Siguiente paso',
        ctaTitle: '¿Necesitas a alguien que se haga cargo del build?',
        ctaPrimary: 'Contacto',
        ctaSecondary: 'LinkedIn',
      },
      about: {
        title: 'About | Ricardo Bermudez',
        description: 'Sobre mi experiencia, enfoque y forma de construir software.',
        eyebrow: 'About / Contacto',
        titleText: 'DEL DISEÑO A LA ENTREGA.',
        lead:
          'Construyo software con criterio de producto y una mirada de diseño. Eso me deja moverme con comodidad entre contexto UX, ejecución frontend y las decisiones backend que hacen falta para entregar productos complejos.',
        profileEyebrow: 'Perfil',
        profile:
          'Empecé en diseño gráfico y después me moví a frontend, fullstack y arquitectura. Esa mezcla me ayuda a leer interfaces, sistemas e implementación como una sola conversación.',
        contactEyebrow: 'Contacto',
        experienceEyebrow: 'Experiencia',
        experienceTitle: 'Equipos y productos donde he trabajado.',
        experienceLead:
          'La versión corta de dónde he entregado, qué me tocó y por qué importa.',
        workingPrinciplesEyebrow: 'Principios de trabajo',
        workingPrinciplesTitle: 'Cómo me comporto en un proyecto.',
        workingPrinciplesLead:
          'Reglas simples: entender la restricción, proteger el sistema y usar IA como palanca sin soltar el criterio.',
      },
      contact: {
        title: 'Contacto | Ricardo Bermudez',
        description: 'Contacta a Ricardo Bermudez para trabajo de producto, frontend o fullstack.',
        eyebrow: 'Contacto',
        titleText: 'CONSTRUYAMOS LA PARTE QUE SÍ AGUANTA.',
        lead:
          'Si necesitas un Senior Software Engineer que pueda hacerse cargo de frontend, delivery fullstack y trabajo sensible al diseño, puedo ayudar.',
        whatsapp: 'WhatsApp',
        telegram: 'Telegram',
        linkedin: 'LinkedIn',
        availability: 'Abierto a freelance, producto y equipos',
        worksWellEyebrow: 'Dónde encajo mejor',
        worksWell:
          'Superficies grandes de frontend, auth, sistemas de usuarios, productos pesados en storage, integraciones con webview y apps que necesiten límites claros de estado.',
        responseEyebrow: 'Respuesta',
        response: 'Normalmente respondo con contexto, una dirección recomendada y el primer cambio concreto que haría.',
      },
      projectsIndex: {
        title: 'Proyectos | Ricardo Bermudez',
        description: 'Proyectos seleccionados que muestran complejidad de producto, profundidad frontend y delivery fullstack.',
        eyebrow: 'Trabajo seleccionado',
        titleText: 'PROYECTOS CON RESTRICCIONES REALES.',
        lead:
          'Proyectos que muestran ownership de producto, profundidad frontend, delivery fullstack y el tipo de complejidad que un senior termina desatando.',
        manifestoEyebrow: 'Lo que el trabajo demuestra',
        manifestoTitle: 'Por qué importan estos proyectos.',
        manifestoLead:
          'Cada uno muestra una parte distinta del trabajo: arquitectura, entrega, mantenimiento o criterio de producto bajo restricciones reales.',
        ctaEyebrow: 'Siguiente paso',
        ctaTitle: '¿Necesitas a alguien que se haga cargo del build?',
        ctaPrimary: 'Contacto',
      },
      blogIndex: {
        title: 'Blog | Ricardo Bermudez',
        description: 'Notas sobre entrega de software, decisiones de producto y trabajo asistido por IA.',
        eyebrow: 'Field notes',
        titleText: 'NOTAS DEL BUILD.',
        lead:
          'Notas cortas sobre decisiones de frontend, entrega de producto y los tradeoffs que aparecen cuando realmente lanzas algo.',
        dateHeader: 'Fecha',
        subjectHeader: 'Tema / asunto',
        categoryHeader: 'Categoría',
        pageLabel: 'Página 01 de 01',
        previousLabel: 'Anterior',
        nextLabel: 'Siguiente archivo',
      },
      references: {
        title: 'Referencias | Ricardo Bermudez',
        description: 'Referencias visuales y assets de apoyo para la dirección del portafolio.',
        eyebrow: 'Reference board',
        titleText: 'REFERENCIAS VISUALES.',
        lead:
          'Página de apoyo para revisar los frames incluidos y mantener trazabilidad del sistema visual detrás del sitio.',
      },
      notFound: {
        title: '404 | Ricardo Bermudez',
        description: 'Página no encontrada.',
        eyebrow: '404',
        titleText: 'PÁGINA NO ENCONTRADA.',
        lead: 'La ruta no existe. Vuelve al inicio para seguir explorando el portafolio.',
        cta: 'Volver al inicio',
      },
      projectDetail: {
        title: 'Detalle de proyecto',
        description: 'Página de detalle de proyecto.',
        year: 'Año',
        status: 'Estado',
        stack: 'Stack',
        challenge: 'El problema',
        architecture: 'Enfoque',
        results: 'Resultados',
        quote:
          'El trabajo senior no es solo escribir código. Es elegir el límite, mantener el sistema predecible y hacer que el siguiente cambio salga más barato.',
        links: 'Enlaces',
        previous: 'Proyecto anterior',
        next: 'Siguiente proyecto',
      },
      blogDetail: {
        title: 'Artículo',
        description: 'Detalle de artículo del blog.',
        date: 'Fecha',
        readTime: 'Tiempo de lectura',
        tags: 'Tags',
        overview: 'Resumen',
        process: 'Proceso',
        outcome: 'Resultado',
        quote:
          'Escribir bien sobre técnica hace que la siguiente decisión sea más fácil, no solo la actual.',
      },
    },
    projects: [
      {
        slug: 'micro-frontend-farm-admin',
        title: { en: 'FarmAdmin', es: 'FarmAdmin' },
        category: { en: 'Microfrontend', es: 'Microfrontend' },
        year: '2026',
        status: { en: 'Public', es: 'Público' },
        summary: {
          en: 'A modular admin system built to keep a growing product readable.',
          es: 'Un sistema admin modular pensado para mantener legible un producto que crece.',
        },
        description: {
          en: 'A workspace built to split responsibilities by domain and avoid a frontend that becomes impossible to extend.',
          es: 'Un workspace construido para dividir responsabilidades por dominio y evitar un frontend imposible de extender.',
        },
        challenge: {
          en: 'Separate screens, domains, and flows without letting the frontend turn into a monolith.',
          es: 'Separar pantallas, dominios y flujos sin dejar que el frontend se convierta en un monolito.',
        },
        solution: {
          en: 'I used shared pieces and clear domain boundaries to scale the UI without losing order.',
          es: 'Usé piezas compartidas y fronteras claras entre dominios para escalar la UI sin perder orden.',
        },
        impact: {
          en: 'It shows frontend architecture judgment and a practical way to organize complex admin applications.',
          es: 'Muestra criterio de arquitectura frontend y una forma práctica de organizar aplicaciones admin complejas.',
        },
        stack: ['Nx', 'Microfrontends', 'TypeScript', 'Modular UI'],
        links: [{ label: { en: 'GitHub', es: 'GitHub' }, href: 'https://github.com/ricardober93/micro-frontend-farm-admin' }],
        featured: true,
      },
      {
        slug: 'tingo-tingo-tango',
        title: { en: 'Tingo Tingo Tango', es: 'Tingo Tingo Tango' },
        category: { en: 'Browser game', es: 'Juego web' },
        year: '2026',
        status: { en: 'Public', es: 'Público' },
        summary: {
          en: 'A one-device local game that I built as a playable frontend architecture case study.',
          es: 'Un juego local para un solo dispositivo que construí como caso de estudio de arquitectura frontend.',
        },
        description: {
          en: 'A React + Vite project where game feel, browser APIs, and code structure had to work together without turning into ad hoc logic.',
          es: 'Un proyecto en React + Vite donde la sensación del juego, las APIs del navegador y la estructura del código tenían que convivir sin caer en lógica improvisada.',
        },
        challenge: {
          en: 'Build a simple game that still proves architecture decisions, explainable randomness, and reliable browser-side interactions.',
          es: 'Construir un juego simple que igual demostrara decisiones de arquitectura, aleatoriedad explicable e interacciones confiables en el navegador.',
        },
        solution: {
          en: 'I organized the app around Zustand, explicit game services, and browser adapters for audio, wake lock, fullscreen, haptics, and persistence.',
          es: 'Organicé la app alrededor de Zustand, servicios explícitos del juego y adapters del navegador para audio, wake lock, fullscreen, háptica y persistencia.',
        },
        impact: {
          en: 'It shows I can turn a small product into a sharp frontend case study with real technical decisions behind the interaction.',
          es: 'Muestra que puedo convertir un producto pequeño en un caso sólido de frontend con decisiones técnicas reales detrás de la interacción.',
        },
        stack: ['React', 'TypeScript', 'Vite', 'Zustand', 'Browser APIs'],
        links: [
          { label: { en: 'GitHub', es: 'GitHub' }, href: 'https://github.com/ricardober93/tingo-tingo-tango' },
          { label: { en: 'Demo', es: 'Demo' }, href: 'https://tingo-tingo-tango.vercel.app/' },
        ],
        featured: true,
      },
      {
        slug: 'vector-map',
        title: { en: 'Vector Map', es: 'Vector Map' },
        category: { en: 'Python / data', es: 'Python / datos' },
        year: '2026',
        status: { en: 'Public', es: 'Público' },
        summary: {
          en: 'A Python project focused on structured map data and repeatable processing.',
          es: 'Un proyecto en Python enfocado en datos de mapa estructurados y procesamiento repetible.',
        },
        description: {
          en: 'A deeper technical project that shows how I handle non-trivial Python work and spatial logic.',
          es: 'Un proyecto técnico más profundo que muestra cómo trabajo código Python no trivial y lógica espacial.',
        },
        challenge: {
          en: 'Handle map-related data and processing without turning the codebase into a tangle.',
          es: 'Manejar datos y procesamiento relacionados con mapas sin convertir la base de código en un enredo.',
        },
        solution: {
          en: 'I structured the Python code around clear steps, processing boundaries, and reusable pieces.',
          es: 'Estructuré el código en Python alrededor de pasos claros, límites de procesamiento y piezas reutilizables.',
        },
        impact: {
          en: 'It shows I can work through a more technical Python problem and keep the result understandable.',
          es: 'Muestra que puedo resolver un problema más técnico en Python y mantener el resultado entendible.',
        },
        stack: ['Python', 'Spatial Data', 'Processing', 'Shell'],
        links: [
          { label: { en: 'GitHub', es: 'GitHub' }, href: 'https://github.com/ricardober93/vector-map' },
        ],
        featured: true,
      },
      {
        slug: 'lector-novelas-online',
        title: { en: 'Panels.lat', es: 'Panels.lat' },
        category: { en: 'Web app', es: 'App web' },
        year: '2026',
        status: { en: 'Public', es: 'Público' },
        summary: {
          en: 'A fullstack product I built solo with AI support and shipped at panels.lat.',
          es: 'Un producto fullstack que construí solo con apoyo de IA y publiqué en panels.lat.',
        },
        description: {
          en: 'A product with auth, storage, and user flows that had to work cleanly from the first release.',
          es: 'Un producto con auth, storage y flujos de usuario que tenían que funcionar bien desde la primera versión.',
        },
        challenge: {
          en: 'Ship a product that handled auth, image storage, and scrolling without turning the frontend into a mess.',
          es: 'Lanzar un producto que manejara auth, almacenamiento de imágenes e infinite scroll sin volver el frontend un desastre.',
        },
        solution: {
          en: 'I integrated Neon and Vercel Blob, handled JWT auth and user management, and kept the interface tight around the reading flow.',
          es: 'Integré Neon y Vercel Blob, manejé auth con JWT y gestión de usuarios, y mantuve la interfaz centrada en el flujo de lectura.',
        },
        impact: {
          en: 'It is the clearest proof that I can take a product from idea to shipping and solve the problems that show up along the way.',
          es: 'Es la prueba más clara de que puedo llevar un producto de la idea al despliegue y resolver los problemas que aparecen en el camino.',
        },
        stack: ['TypeScript', 'JavaScript', 'CSS', 'Web'],
        links: [
          { label: { en: 'GitHub', es: 'GitHub' }, href: 'https://github.com/ricardober93/lector-novelas-online' },
          { label: { en: 'Demo', es: 'Demo' }, href: 'https://www.panels.lat/' },
        ],
        featured: true,
      },
      {
        slug: 'cv-generator',
        title: { en: 'CV Generator', es: 'CV Generator' },
        category: { en: 'Utility', es: 'Utilidad' },
        year: '2025',
        status: { en: 'Public', es: 'Público' },
        summary: {
          en: 'A personal tool for generating resumes with less friction.',
          es: 'Una herramienta personal para generar hojas de vida con menos fricción.',
        },
        description: {
          en: 'A practical utility focused on speed, structure, and a straightforward workflow.',
          es: 'Una utilidad práctica enfocada en velocidad, estructura y un flujo directo.',
        },
        challenge: {
          en: 'Make resume creation fast without adding unnecessary steps or complexity.',
          es: 'Hacer rápida la creación de una hoja de vida sin meter pasos ni complejidad innecesaria.',
        },
        solution: {
          en: 'I kept the workflow simple so the tool stays fast to use and easy to maintain.',
          es: 'Mantuve el flujo simple para que la herramienta siga siendo rápida de usar y fácil de mantener.',
        },
        impact: {
          en: 'It is a finished tool that solves one job clearly and does not waste the user’s time.',
          es: 'Es una herramienta terminada que resuelve bien una sola tarea y no le hace perder tiempo al usuario.',
        },
        stack: ['TypeScript', 'JavaScript', 'HTML', 'CSS'],
        links: [
          { label: { en: 'GitHub', es: 'GitHub' }, href: 'https://github.com/ricardober93/cv-generator' },
        ],
        featured: true,
      },
      {
        slug: 'flutter-map',
        title: { en: 'Flutter Map', es: 'Flutter Map' },
        category: { en: 'Mobile app', es: 'App móvil' },
        year: '2023',
        status: { en: 'Reference', es: 'Referencia' },
        summary: {
          en: 'A Flutter app focused on maps, geolocation, and route-aware interactions.',
          es: 'Una app en Flutter enfocada en mapas, geolocalización e interacciones con rutas.',
        },
        description: {
          en: 'A practical mobile project that shows how I work with location-aware experiences and map UI.',
          es: 'Un proyecto móvil práctico que muestra cómo trabajo experiencias con ubicación e interfaces de mapa.',
        },
        challenge: {
          en: 'Build a useful map-based experience that handles position, permissions, and visual clarity without friction.',
          es: 'Construir una experiencia útil basada en mapas que gestione posición, permisos y claridad visual sin fricción.',
        },
        solution: {
          en: 'I combined Flutter, Google Maps, geolocation, and permission handling to keep the flow direct and reliable.',
          es: 'Combiné Flutter, Google Maps, geolocalización y manejo de permisos para mantener un flujo directo y confiable.',
        },
        impact: {
          en: 'It adds a strong mobile example to the portfolio and shows practical experience with map-driven interfaces.',
          es: 'Aporta un ejemplo móvil sólido al portafolio y muestra experiencia práctica con interfaces guiadas por mapas.',
        },
        stack: ['Flutter', 'Google Maps', 'Geolocation', 'Permissions'],
        links: [
          { label: { en: 'GitHub', es: 'GitHub' }, href: 'https://github.com/ricardober93/flutter-map' },
        ],
        featured: true,
      },
      {
        slug: 'learn-to-speak',
        title: { en: 'Learn to Speak', es: 'Learn to Speak' },
        category: { en: 'Personal app', es: 'App personal' },
        year: '2025',
        status: { en: 'Personal', es: 'Personal' },
        summary: {
          en: 'A small app I built for my daughter to learn to read.',
          es: 'Una pequeña app que armé para mi hija para aprender a leer.',
        },
        description: {
          en: 'A personal project with a warm, simple experience aimed at early learning.',
          es: 'Un proyecto personal con una experiencia cálida y simple, pensado para aprendizaje temprano.',
        },
        challenge: {
          en: 'Create something friendly, simple, and useful for a child learning to read.',
          es: 'Crear algo amable, simple y útil para una niña que está aprendiendo a leer.',
        },
        solution: {
          en: 'I kept the interaction light and direct so the app feels approachable and easy to use.',
          es: 'Mantuve la interacción ligera y directa para que la app se sienta cercana y fácil de usar.',
        },
        impact: {
          en: 'It is a personal project with real purpose and a clear human story behind it.',
          es: 'Es un proyecto personal con un propósito real y una historia humana clara detrás.',
        },
        stack: ['TypeScript', 'JavaScript', 'CSS', 'Web'],
        links: [
          { label: { en: 'GitHub', es: 'GitHub' }, href: 'https://github.com/ricardober93/learn-to-speak' },
        ],
        featured: true,
      },
    ],
    posts: [
      {
        slug: 'diseno-estrategia-y-codigo',
        title: {
          en: 'Design, strategy, and code: how I think about products that matter',
          es: 'Diseño, estrategia y código: cómo pienso productos que de verdad importan',
        },
        date: '2026-03-12',
        category: { en: 'Product', es: 'Producto' },
        readTime: { en: '6 min', es: '6 min' },
        summary: {
          en: 'A personal framework for moving from scattered requirements to interfaces with intention.',
          es: 'Un marco personal para pasar de requerimientos dispersos a interfaces con intención real.',
        },
        content: [
          {
            en: 'Before opening the editor, I try to understand the business problem, the user, and the technical context.',
            es: 'Antes de abrir el editor, busco entender el problema del negocio, el usuario y el contexto técnico.',
          },
          {
            en: 'Once that base is clear, the UI stops being decoration and becomes a decision.',
            es: 'Cuando esa base está clara, la UI deja de ser decoración y se vuelve una decisión.',
          },
          {
            en: 'AI helps, but the direction is still human: judgment, focus, and priorities.',
            es: 'La IA ayuda, pero la dirección sigue siendo humana: criterio, foco y prioridades.',
          },
        ],
        tags: ['product thinking', 'ux', 'ai'],
      },
      {
        slug: 'astro-preact-portafolio',
        title: {
          en: 'Why Astro + Preact is a strong base for a fast, elegant portfolio',
          es: 'Por qué Astro + Preact es una base fuerte para un portafolio rápido y elegante',
        },
        date: '2026-03-02',
        category: { en: 'Frontend', es: 'Frontend' },
        readTime: { en: '5 min', es: '5 min' },
        summary: {
          en: 'Lightweight, flexible, and a good fit for mixing static content with focused interaction.',
          es: 'Ligero, flexible y muy cómodo para mezclar contenido estático con interacción puntual.',
        },
        content: [
          {
            en: 'Astro lets me build solid, fast pages without shipping unnecessary JavaScript.',
            es: 'Astro me deja construir páginas sólidas y rápidas sin cargar JavaScript innecesario.',
          },
          {
            en: 'Preact only comes in where the user actually interacts, like the mobile menu.',
            es: 'Preact entra solo donde el usuario realmente interactúa, como el menú mobile.',
          },
          {
            en: 'The result feels more premium because the technology does not steal the visual spotlight.',
            es: 'El resultado se siente más premium porque la tecnología no se roba el protagonismo visual.',
          },
        ],
        tags: ['astro', 'preact', 'performance'],
      },
      {
        slug: 'ia-en-mi-flujo',
        title: {
          en: 'AI in my workflow: speed without losing judgment',
          es: 'IA en mi flujo: velocidad sin perder criterio',
        },
        date: '2026-02-19',
        category: { en: 'AI', es: 'IA' },
        readTime: { en: '4 min', es: '4 min' },
        summary: {
          en: 'How I use AI to review, prototype, and think better without falling into empty automation.',
          es: 'Cómo uso IA para revisar, prototipar y pensar mejor sin caer en automatización vacía.',
        },
        content: [
          {
            en: 'I use it to speed up exploration, compare approaches, and review risks.',
            es: 'La uso para acelerar exploración, comparar enfoques y revisar riesgos.',
          },
          {
            en: 'I do not use it to shut down thinking; I use it to make thinking faster and more visible.',
            es: 'No la uso para apagar el pensamiento; la uso para hacerlo más rápido y más visible.',
          },
          {
            en: 'That lets me deliver better architecture and better UX in less time.',
            es: 'Eso me permite entregar mejor arquitectura y mejor UX en menos tiempo.',
          },
        ],
        tags: ['ai', 'workflow', 'architecture'],
      },
    ],
    referenceSlides: [
      {
        slug: 'home-final-unified',
        title: { en: 'Home final unified', es: 'Home final unificado' },
        caption: {
          en: 'Typographic hero, clear hierarchy, and a closing CTA that points to contact.',
          es: 'Hero tipográfico, jerarquía clara y un cierre con CTA que lleva a contacto.',
        },
      },
      {
        slug: 'projects-archive-final',
        title: { en: 'Projects archive final', es: 'Archivo final de proyectos' },
        caption: {
          en: 'Project archive built for fast scanning and simple navigation.',
          es: 'Archivo de proyectos pensado para escaneo rápido y navegación simple.',
        },
      },
      {
        slug: 'about-contact-updated-header',
        title: { en: 'About / contact', es: 'About / contacto' },
        caption: {
          en: 'About block that names the background and gives a direct path to contact.',
          es: 'Bloque de about que nombra el background y da un camino directo a contacto.',
        },
      },
      {
        slug: 'blog-text-focused',
        title: { en: 'Blog index', es: 'Índice del blog' },
        caption: {
          en: 'Reading list designed for quick scanning and short-form thought.',
          es: 'Listado de lectura pensado para escaneo rápido y pensamiento breve.',
        },
      },
      {
        slug: 'blog-post-detail-final',
        title: { en: 'Blog post detail', es: 'Detalle de post del blog' },
        caption: {
          en: 'Article detail with clear sections for long reading.',
          es: 'Detalle de artículo con secciones claras para lectura larga.',
        },
      },
      {
        slug: 'project-detail-final',
        title: { en: 'Project detail', es: 'Detalle de proyecto' },
        caption: {
          en: 'Case study layout that shows constraints, decisions, and proof.',
          es: 'Layout de caso de estudio que muestra restricciones, decisiones y prueba.',
        },
      },
    ],
  },
};

export const site = localeData.en.site;
export const navigation = localeData.en.navigation;
export const featuredLinks = localeData.en.featuredLinks;
export const expertise = localeData.en.expertise;
export const stackSections = localeData.en.stackSections;
export const experience = localeData.en.experience;
export const principles = localeData.en.principles;
export const projects = localeData.en.projects;
export const posts = localeData.en.posts;
export const referenceSlides = localeData.en.referenceSlides;
