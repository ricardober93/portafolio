export type Project = {
  slug: string;
  title: string;
  category: string;
  year: string;
  status: string;
  summary: string;
  description: string;
  challenge: string;
  solution: string;
  impact: string;
  stack: string[];
  links: { label: string; href: string }[];
  featured?: boolean;
};

export type Post = {
  slug: string;
  title: string;
  date: string;
  category: string;
  readTime: string;
  summary: string;
  content: string[];
  tags: string[];
};

export const site = {
  name: 'Ricardo Tellez',
  role: 'Product Designer Developer',
  headline: 'Construyo productos digitales con intención.',
  subheadline:
    'Diseño sistemas y desarrollo experiencias que conectan estrategia, UX y arquitectura técnica. La IA es parte de mi flujo, no un adorno.',
  description:
    'Portafolio bilingüe de Ricardo Tellez. React, Angular, Node.js, diseño gráfico y soluciones impulsadas por IA.',
  email: 'hola@ricardotellez.dev',
  location: 'LatAm / Remote',
};

export const navigation = [
  { label: 'Inicio', href: '/' },
  { label: 'Proyectos', href: '/projects' },
  { label: 'Blog', href: '/blog' },
  { label: 'About', href: '/about' },
  { label: 'Contacto', href: '/contact' },
] as const;

export const featuredLinks = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/ricardotellez7/' },
  { label: 'Panels', href: 'https://lector-novelas-online.vercel.app/' },
] as const;

export const stats = [
  { value: '5+', label: 'años creando productos con React, Angular y Node.js' },
  { value: 'IA', label: 'como parte del proceso para acelerar decisiones y calidad' },
  { value: 'UX', label: 'con visión de negocio, diseño y arquitectura' },
] as const;

export const manifesto = [
  'Pienso desde el problema del producto, no solo desde el código.',
  'Uso IA como multiplicador real de productividad y criterio.',
  'Combino visión técnica con sensibilidad visual y negocio.',
] as const;

export const projects: Project[] = [
  {
    slug: 'panels',
    title: 'Panels',
    category: 'Producto web',
    year: '2026',
    status: 'Live',
    summary:
      'Plataforma para mangas, cómics y novelas visuales orientada a lectores de Latinoamérica.',
    description:
      'Una experiencia de lectura enfocada en continuidad, descubrimiento y navegación simple.',
    challenge:
      'Traducir un catálogo grande en una interfaz clara, rápida y fácil de volver a usar en mobile.',
    solution:
      'Arquitectura de navegación por secciones, jerarquía editorial y rutas pensadas para lectura continua.',
    impact:
      'Sirve como caso real de producto, contenido y experiencia: una base ideal para mostrar criterio de diseño y ejecución.',
    stack: ['Astro', 'UI editorial', 'Responsive', 'Contenido dinámico'],
    links: [{ label: 'Abrir proyecto', href: 'https://lector-novelas-online.vercel.app/' }],
    featured: true,
  },
  {
    slug: 'strategy-system',
    title: 'Strategy System',
    category: 'Portfolio framework',
    year: '2026',
    status: 'Concept',
    summary:
      'Sistema visual para presentar productos, casos de estudio y pensamiento estratégico con un lenguaje premium.',
    description:
      'Una capa editorial para ordenar narrativa, resultados y sistemas de diseño.',
    challenge:
      'Evitar el look genérico de portafolio plantilla y construir una identidad clara, sofisticada y memorable.',
    solution:
      'Bloques sobrios, tipografía dominante y ritmo visual inspirado en publicaciones de arquitectura y diseño.',
    impact:
      'Define la estética del portafolio y el tono del contenido bilingüe.',
    stack: ['Astro', 'Preact', 'Markdown', 'Design language'],
    links: [{ label: 'Ver en el sitio', href: '/projects/strategy-system' }],
  },
  {
    slug: 'ai-workflow-kit',
    title: 'AI Workflow Kit',
    category: 'Producto / IA',
    year: '2025',
    status: 'Shipped',
    summary:
      'Patrón de trabajo para integrar IA en análisis, revisión de código y prototipado.',
    description:
      'Un kit conceptual para convertir IA en un multiplicador real del proceso de desarrollo.',
    challenge:
      'Usar IA sin perder criterio, coherencia ni calidad de arquitectura.',
    solution:
      'Flujos cortos, prompts específicos y decisiones guiadas por contexto del producto.',
    impact:
      'Refuerza tu perfil como alguien que aplica IA con intención, no por moda.',
    stack: ['OpenAI', 'Node.js', 'React', 'Procesos'],
    links: [{ label: 'Explorar', href: '/projects/ai-workflow-kit' }],
  },
];

export const posts: Post[] = [
  {
    slug: 'diseno-estrategia-y-codigo',
    title: 'Diseño, estrategia y código: cómo pienso productos que sí importan',
    date: '2026-03-12',
    category: 'Producto',
    readTime: '6 min',
    summary:
      'Un marco personal para pasar de requerimientos dispersos a interfaces con intención.',
    content: [
      'Antes de abrir el editor, busco entender el problema del negocio, el usuario y el contexto técnico.',
      'Cuando esa base está clara, la UI deja de ser decoración y se vuelve una decisión.',
      'La IA ayuda, pero la dirección sigue siendo humana: criterio, foco y prioridades.',
    ],
    tags: ['product thinking', 'ux', 'ia'],
  },
  {
    slug: 'astro-preact-portafolio',
    title: 'Por qué Astro + Preact es una gran base para un portafolio rápido y elegante',
    date: '2026-03-02',
    category: 'Frontend',
    readTime: '5 min',
    summary:
      'Ligero, flexible y perfecto para combinar contenido estático con interacción puntual.',
    content: [
      'Astro me deja construir páginas sólidas y rápidas sin cargar JavaScript innecesario.',
      'Preact entra solo donde el usuario realmente interactúa, como el menú mobile.',
      'El resultado se siente más premium porque la tecnología no se roba el protagonismo visual.',
    ],
    tags: ['astro', 'preact', 'performance'],
  },
  {
    slug: 'ia-en-mi-flujo',
    title: 'IA en mi flujo: velocidad sin sacrificar criterio',
    date: '2026-02-19',
    category: 'IA',
    readTime: '4 min',
    summary:
      'Cómo usar IA para revisar, prototipar y pensar mejor sin caer en automatización vacía.',
    content: [
      'La uso para acelerar exploración, comparar enfoques y revisar riesgos.',
      'No la uso para apagar el pensamiento; la uso para hacerlo más rápido y más visible.',
      'Eso me permite entregar mejor arquitectura y mejor UX en menos tiempo.',
    ],
    tags: ['ai', 'workflow', 'architecture'],
  },
];

export const referenceSlides = [
  {
    slug: 'home-final-unified',
    title: 'Home final unified',
    caption: 'Hero tipográfico, jerarquía editorial y cierre con CTA contundente.',
  },
  {
    slug: 'projects-archive-final',
    title: 'Projects archive final',
    caption: 'Archivo de proyectos en grid sobrio con navegación clara.',
  },
  {
    slug: 'about-contact-updated-header',
    title: 'About / contact',
    caption: 'Bloque de manifiesto con foco en credenciales y llamado a contacto.',
  },
  {
    slug: 'blog-text-focused',
    title: 'Blog index',
    caption: 'Listado de lectura con ritmo visual limpio y tipografía dominante.',
  },
  {
    slug: 'blog-post-detail-final',
    title: 'Blog post detail',
    caption: 'Detalle editorial con jerarquía de lectura y bloques de contenido.',
  },
  {
    slug: 'project-detail-final',
    title: 'Project detail',
    caption: 'Caso de estudio con métricas, stack y narrativa de proceso.',
  },
] as const;
