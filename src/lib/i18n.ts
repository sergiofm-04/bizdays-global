// ============================================
// BizDays Global — i18n Configuration
// Minimal i18n system for EN/ES
// ============================================

import type { Locale, Dictionary } from "@/types";

export const defaultLocale: Locale = "en";
export const locales: Locale[] = ["en", "es"];

const dictionaries: Record<Locale, Dictionary> = {
  en: {
    meta: {
      title: "BizDays Global — Business Days Calculator",
      description:
        "Calculate delivery dates excluding weekends and public holidays for 100+ countries. Free online business days calculator.",
      titleTemplate: "Business Days Calculator for {country} | BizDays Global",
      descriptionTemplate:
        "Calculate working days in {country} excluding weekends and {country} public holidays. Free online tool for delivery date planning.",
    },
    home: {
      hero: {
        title: "Calculate Business Days",
        highlight: "Across 170+ Countries",
        subtitle:
          "The free, instant tool used by logistics, HR, finance and legal teams worldwide to calculate delivery dates, exclude public holidays, and plan international deadlines with confidence.",
        startButton: "Start Calculating",
      },
      stats: [
        { value: "170+", label: "Countries" },
        { value: "10k+", label: "Holidays tracked" },
        { value: "100%", label: "Free forever" },
        { value: "<50ms", label: "Calculation speed" },
      ],
      features: {
        title: "Why teams choose BizDays Global",
        items: [
          {
            title: "Accurate holiday data",
            description:
              "Official public holiday calendars sourced from government databases and updated annually for every country we support.",
          },
          {
            title: "Instant calculations",
            description:
              "Results appear in milliseconds. No server round-trips — everything runs in your browser for maximum speed and privacy.",
          },
          {
            title: "Weekend customization",
            description:
              "Include or exclude Saturdays as working days. Perfect for regions where Saturday is a business day.",
          },
          {
            title: "Bidirectional counting",
            description:
              "Count forward to find a delivery date, or count backward to find a shipping deadline. Negative days supported.",
          },
          {
            title: "No signup required",
            description:
              "Open the page, pick your country, and get your answer. No accounts, no subscriptions, no data collection.",
          },
          {
            title: "SEO-friendly country pages",
            description:
              "Dedicated pages for every country with full holiday tables — perfect for bookmarking and sharing with colleagues.",
          },
        ],
      },
      howItWorks: {
        title: "How it works",
        steps: [
          {
            title: "Select your country",
            description:
              "Choose from 170+ countries. We load the official public holiday calendar for the current year.",
          },
          {
            title: "Set your parameters",
            description:
              "Pick a start date, enter the number of business days to add (or subtract), and choose whether Saturdays count.",
          },
          {
            title: "Get your result",
            description:
              "Instantly see the end date, a breakdown of skipped weekends and holidays, and which specific holidays were excluded.",
          },
        ],
      },
      useCases: {
        title: "Built for professionals",
        subtitle:
          "Teams across industries rely on BizDays Global for deadline accuracy.",
        items: [
          {
            title: "International logistics",
            description:
              "Calculate precise delivery windows for cross-border shipments accounting for local holidays at origin and destination.",
          },
          {
            title: "Human resources",
            description:
              "Compute notice periods, probation end dates, and payroll deadlines that comply with local labor regulations.",
          },
          {
            title: "Finance & legal",
            description:
              "Determine settlement dates, contract deadlines, and regulatory filing windows that exclude non-business days.",
          },
          {
            title: "Project management",
            description:
              "Plan international sprint timelines and milestone dates that account for team members in different countries.",
          },
        ],
      },
      faq: {
        title: "Frequently asked questions",
        items: [
          {
            question: "What is a business day?",
            answer:
              "A business day (also called a working day) is any day that is not a weekend or a public holiday. Most countries consider Monday through Friday as business days, though this varies by region.",
          },
          {
            question: "How accurate is the holiday data?",
            answer:
              "We source holiday data from the open-source date-holidays library, which aggregates government-published holiday calendars. Data is updated regularly but we recommend verifying critical dates with local authorities.",
          },
          {
            question: "Can I count business days backward?",
            answer:
              "Yes. Enter a negative number of business days to count backward from your start date. This is useful for finding shipping deadlines when you know the required delivery date.",
          },
          {
            question: "Does this tool account for regional holidays?",
            answer:
              "Our tool focuses on national public holidays. Some countries have regional holidays that vary by state or province. For regional accuracy, always cross-reference with local government sources.",
          },
          {
            question: "Is this calculator free to use?",
            answer:
              "Yes, BizDays Global is completely free and always will be. No signup, no limits, no hidden features behind a paywall.",
          },
          {
            question: "Why do I need a business days calculator?",
            answer:
              "Manual counting is error-prone, especially across borders. Missing a single holiday can delay shipments, breach contract deadlines, or cause payroll miscalculations. Automating this eliminates human error.",
          },
        ],
      },
      cta: {
        title: "Ready to calculate?",
        subtitle: "Scroll up and try the calculator — it takes 5 seconds.",
        button: "Try the calculator",
      },
    },
    nav: {
      calculator: "Calculator",
      countries: "Countries",
      about: "About",
      startCalculating: "Start Calculating",
    },
    cookieConsent: {
      title: "We value your privacy",
      description: "We use cookies to enhance your browsing experience, serve personalized ads or content, and analyze our traffic. By clicking \"Accept All\", you consent to our use of cookies. You can customize your preferences or reject non-essential cookies.",
      acceptAll: "Accept All",
      rejectAll: "Reject All",
      customize: "Customize",
      save: "Save Preferences",
      necessary: "Strictly Necessary",
      necessaryDesc: "These cookies are essential for the website to function properly and cannot be disabled.",
      analytics: "Analytics",
      analyticsDesc: "These cookies help us understand how visitors interact with the website by collecting anonymous information.",
      advertising: "Advertising",
      advertisingDesc: "These cookies are used to deliver personalized advertisements and measure the effectiveness of ad campaigns.",
      moreInfo: "Read our Cookie Policy",
    },
    calculator: {
      title: "Business Days Calculator",
      subtitle:
        "Calculate delivery dates excluding weekends and public holidays worldwide.",
      startDate: "Start Date",
      businessDays: "Business Days",
      country: "Country",
      countryPlaceholder: "Search for a country...",
      includeSaturdays: "Include Saturdays as working days",
      calculate: "Calculate End Date",
      result: {
        title: "Result",
        endDate: "End Date",
        summary: "Summary",
        skippedWeekends: "Weekend days skipped",
        skippedHolidays: "Public holidays skipped",
        holidayList: "Holidays excluded",
      },
    },
    common: {
      advertisement: "Advertisement",
      affiliateDisclaimer:
        "We may earn a commission from partner links at no extra cost to you.",
      footer: {
        tagline: "The free business days calculator for global teams.",
        disclaimer:
          "BizDays Global provides estimates based on public holiday data. Always verify critical dates with local authorities.",
        links: {
          privacy: "Privacy Policy",
          terms: "Terms of Service",
          cookies: "Cookie Policy",
          legal: "Legal Notice",
          contact: "Contact",
        },
      },
    },
    legal: {
      privacy: {
        title: "Privacy Policy",
        description:
          "Privacy Policy of BizDays Global. Learn how we collect, use, and protect your personal data.",
        lastUpdated: "Last updated: 11/02/2026",
        sections: [
          {
            heading: "1. Data Controller",
            content:
              "The entity responsible for the processing of your personal data is:\n\nSergio Fuentes Moreno\nCalle Rosario 95, Bajo Comercial, Albacete, España\nEmail: legal@bizdaysglobal.com\n\nIf you have any questions about this Privacy Policy, please contact us at the email address above.",
          },
          {
            heading: "2. Data We Collect",
            content:
              "We may collect the following types of information:\n\n• **Usage data**: Pages visited, time spent, browser type, device type, referring URL, and IP address (anonymized where possible).\n• **Cookies and similar technologies**: See our Cookie Policy for details.\n• **Contact information**: If you contact us via our contact form, we collect your name, email address, and message content.\n\nWe do NOT collect sensitive personal data. We do NOT require account creation.",
          },
          {
            heading: "3. Purpose of Data Processing",
            content:
              "We process your data for the following purposes:\n\n• **Service provision**: To operate and improve BizDays Global.\n• **Analytics**: To understand how users interact with our website (using Google Analytics or similar services).\n• **Advertising**: To display relevant advertisements through Google AdSense.\n• **Communication**: To respond to your inquiries via the contact form.\n• **Legal compliance**: To comply with applicable legal obligations.",
          },
          {
            heading: "4. Legal Basis (GDPR)",
            content:
              "We process your personal data based on:\n\n• **Legitimate interest** (Art. 6(1)(f) GDPR): For analytics and service improvement.\n• **Consent** (Art. 6(1)(a) GDPR): For non-essential cookies and advertising.\n• **Contractual necessity** (Art. 6(1)(b) GDPR): To respond to contact requests.",
          },
          {
            heading: "5. Third-Party Services",
            content:
              "We use the following third-party services that may process your data:\n\n• **Google Analytics**: Website traffic analysis. [Google Privacy Policy](https://policies.google.com/privacy)\n• **Google AdSense**: Personalized advertising. [Google Ad Settings](https://adssettings.google.com)\n• **Vercel**: Website hosting. [Vercel Privacy Policy](https://vercel.com/legal/privacy-policy)\n\nThese services may transfer data outside the EU/EEA. Appropriate safeguards are in place (Standard Contractual Clauses).",
          },
          {
            heading: "6. Data Retention",
            content:
              "We retain your data only for as long as necessary:\n\n• **Analytics data**: 26 months (Google Analytics default).\n• **Contact form data**: Until your inquiry is resolved, plus up to 12 months for reference.\n• **Server logs**: Up to 30 days.",
          },
          {
            heading: "7. Your Rights",
            content:
              'Under the GDPR, you have the right to:\n\n• **Access** your personal data.\n• **Rectify** inaccurate data.\n• **Erase** your data ("right to be forgotten").\n• **Restrict** processing.\n• **Data portability**.\n• **Object** to processing.\n• **Withdraw consent** at any time.\n\nTo exercise these rights, contact us at legal@bizdaysglobal.com. You also have the right to lodge a complaint with your local Data Protection Authority.',
          },
          {
            heading: "8. Security",
            content:
              "We implement appropriate technical and organizational measures to protect your personal data, including HTTPS encryption, secure hosting infrastructure, and access controls.",
          },
          {
            heading: "9. Children's Privacy",
            content:
              "BizDays Global is not intended for children under 16 years of age. We do not knowingly collect data from children.",
          },
          {
            heading: "10. Changes to This Policy",
            content:
              "We may update this Privacy Policy from time to time. Changes will be posted on this page with an updated revision date. We encourage you to review this policy periodically.",
          },
        ],
      },
      terms: {
        title: "Terms of Service",
        description:
          "Terms of Service of BizDays Global. Read the conditions for using our business days calculator.",
        lastUpdated: "Last updated: 11/02/2026",
        sections: [
          {
            heading: "1. Acceptance of Terms",
            content:
              'By accessing and using BizDays Global (the "Service"), you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use the Service.',
          },
          {
            heading: "2. Description of Service",
            content:
              'BizDays Global is a free online tool that calculates business days (working days) by excluding weekends and public holidays for countries worldwide. The Service is provided "as is" and is intended for informational and planning purposes only.',
          },
          {
            heading: "3. Accuracy Disclaimer",
            content:
              "While we strive to provide accurate holiday data, we do NOT guarantee the accuracy, completeness, or timeliness of the information provided. Public holiday data is sourced from open-source databases and may not reflect:\n\n• Regional or local holidays.\n• Last-minute government changes to holiday schedules.\n• Sector-specific non-working days.\n\n**You should always verify critical dates with local authorities or official sources before making business decisions.**",
          },
          {
            heading: "4. Limitation of Liability",
            content:
              "To the maximum extent permitted by law, BizDays Global and its operators shall not be liable for any direct, indirect, incidental, special, consequential, or punitive damages arising from:\n\n• Use or inability to use the Service.\n• Errors or inaccuracies in calculations.\n• Business decisions made based on the Service's output.\n• Interruptions to the Service.",
          },
          {
            heading: "5. Intellectual Property",
            content:
              "The BizDays Global name, logo, design, and original content are the property of their respective owners. The source code is available under open-source license. Third-party libraries used in the Service retain their respective licenses.",
          },
          {
            heading: "6. Acceptable Use",
            content:
              "You agree NOT to:\n\n• Use the Service for any unlawful purpose.\n• Attempt to gain unauthorized access to our systems.\n• Use automated tools to scrape or overload the Service.\n• Reproduce or redistribute the Service for commercial purposes without permission.",
          },
          {
            heading: "7. Third-Party Links and Advertising",
            content:
              "The Service may contain links to third-party websites and display advertisements (including Google AdSense and affiliate partner links). We are not responsible for the content, privacy practices, or terms of third-party sites. Clicking on advertisements or affiliate links may result in cookies being placed on your device by third parties.",
          },
          {
            heading: "8. Modifications",
            content:
              "We reserve the right to modify, suspend, or discontinue the Service (or any part thereof) at any time without notice. We may also update these Terms of Service periodically. Continued use of the Service constitutes acceptance of updated terms.",
          },
          {
            heading: "9. Governing Law",
            content:
              "These Terms shall be governed by and construed in accordance with the laws of Albacete, España. Any disputes arising from the use of this Service shall be subject to the exclusive jurisdiction of the courts of Albacete, España.",
          },
          {
            heading: "10. Contact",
            content:
              "For questions about these Terms of Service, contact us at legal@bizdaysglobal.com.",
          },
        ],
      },
      cookies: {
        title: "Cookie Policy",
        description:
          "Cookie Policy of BizDays Global. Learn what cookies we use and how to manage them.",
        lastUpdated: "Last updated: 11/02/2026",
        sections: [
          {
            heading: "1. What Are Cookies?",
            content:
              "Cookies are small text files stored on your device when you visit a website. They help websites function properly, remember preferences, and provide analytics and advertising features.",
          },
          {
            heading: "2. Cookies We Use",
            content:
              "BizDays Global uses the following types of cookies:\n\n**Essential cookies:**\n• Session management and locale preference. These are strictly necessary for the website to function.\n\n**Analytics cookies:**\n• Google Analytics (_ga, _gid, _gat): Used to understand user behavior and improve the Service. Data is anonymized.\n\n**Advertising cookies:**\n• Google AdSense: Used to display personalized advertisements based on your browsing history. These cookies are set by Google and its advertising partners.\n\n**Third-party cookies:**\n• Affiliate partners may set cookies when you click on affiliate links to track referrals.",
          },
          {
            heading: "3. Cookie Consent",
            content:
              "When you first visit BizDays Global, we will ask for your consent before placing non-essential cookies. You can change your preferences at any time through our cookie settings panel.\n\nEssential cookies do not require consent as they are necessary for the website to function.",
          },
          {
            heading: "4. Managing Cookies",
            content:
              "You can manage cookies through:\n\n• **Our cookie settings**: Use the cookie preferences panel on our website.\n• **Browser settings**: Most browsers allow you to block or delete cookies. Refer to your browser's help documentation.\n• **Google Ad Settings**: Manage ad personalization at [adssettings.google.com](https://adssettings.google.com).\n• **Network Advertising Initiative**: Opt out at [optout.networkadvertising.org](https://optout.networkadvertising.org).\n\nNote: Blocking cookies may affect the functionality of the website.",
          },
          {
            heading: "5. Cookie Duration",
            content:
              "• **Session cookies**: Deleted when you close your browser.\n• **Persistent cookies**: Remain on your device for a set period (typically 1-24 months) or until manually deleted.\n• **Google Analytics cookies**: Up to 26 months.",
          },
          {
            heading: "6. Changes to This Policy",
            content:
              "We may update this Cookie Policy to reflect changes in the cookies we use or for legal reasons. Check this page periodically for updates.",
          },
          {
            heading: "7. Contact",
            content:
              "For questions about our use of cookies, contact us at legal@bizdaysglobal.com.",
          },
        ],
      },
      legalNotice: {
        title: "Legal Notice",
        description:
          "Legal Notice (Aviso Legal) of BizDays Global. Website ownership and legal information.",
        lastUpdated: "Last updated: 11/02/2026",
        sections: [
          {
            heading: "1. Website Owner",
            content:
              "In compliance with the duty of information set forth in Article 10 of Law 34/2002 on Information Society Services and Electronic Commerce (LSSI-CE), the following information is provided:\n\n• **Owner**: Sergio Fuentes Moreno\n• **Tax ID (NIF/CIF)**: 49904748S\n• **Address**: Calle Rosario 95, Bajo Comercial, Albacete, España\n• **Email**: legal@bizdaysglobal.com\n• **Website**: https://bizdaysglobal.com",
          },
          {
            heading: "2. Purpose of the Website",
            content:
              "BizDays Global is an informational website that provides an online business days calculator tool. The website is monetized through online advertising (Google AdSense) and affiliate marketing programs.",
          },
          {
            heading: "3. Intellectual Property",
            content:
              "All content on this website, including but not limited to text, graphics, logos, icons, images, and software, is the property of BizDays Global or its content suppliers and is protected by international intellectual property laws.\n\nThe open-source code powering this application is available under its respective license terms.",
          },
          {
            heading: "4. Limitation of Liability",
            content:
              "BizDays Global shall not be held responsible for:\n\n• Errors or inaccuracies in the calculated results.\n• Damages arising from the use of the information provided.\n• Third-party content accessed through links on this website.\n• Service interruptions caused by technical issues beyond our control.",
          },
          {
            heading: "5. Applicable Law and Jurisdiction",
            content:
              "This legal notice is governed by Albacete, España law. For any disputes, the parties agree to submit to the courts of Albacete, España, except where consumer protection law requires otherwise.",
          },
        ],
      },
    },
    contact: {
      title: "Contact Us",
      description:
        "Get in touch with the BizDays Global team. We'd love to hear from you.",
      subtitle:
        "Have a question, suggestion, or business inquiry? We'd love to hear from you.",
      form: {
        name: "Your Name",
        email: "Your Email",
        subject: "Subject",
        message: "Message",
        submit: "Send Message",
        successMessage:
          "Thank you! Your message has been sent. We'll get back to you within 48 hours.",
      },
      info: {
        title: "Other Ways to Reach Us",
        email: "Email: legal@bizdaysglobal.com",
        responseTime: "We typically respond within 24-48 hours.",
      },
    },
  },
  es: {
    meta: {
      title: "BizDays Global — Calculadora de Días Laborables",
      description:
        "Calcula fechas de entrega excluyendo fines de semana y festivos locales de más de 100 países. Calculadora gratuita de días hábiles.",
      titleTemplate:
        "Calculadora de Días Laborables en {country} | BizDays Global",
      descriptionTemplate:
        "Calcula días hábiles en {country} excluyendo fines de semana y festivos de {country}. Herramienta gratuita para planificar entregas.",
    },
    home: {
      hero: {
        title: "Calcula Días Laborables",
        highlight: "En Más de 170 Países",
        subtitle:
          "La herramienta gratuita e instantánea que usan equipos de logística, RRHH, finanzas y legal en todo el mundo para calcular fechas de entrega, excluir festivos y planificar plazos internacionales con confianza.",
        startButton: "Empieza a calcular",
      },
      stats: [
        { value: "170+", label: "Países" },
        { value: "10k+", label: "Festivos registrados" },
        { value: "100%", label: "Gratis siempre" },
        { value: "<50ms", label: "Velocidad de cálculo" },
      ],
      features: {
        title: "Por qué los equipos eligen BizDays Global",
        items: [
          {
            title: "Datos de festivos precisos",
            description:
              "Calendarios oficiales de festivos públicos obtenidos de bases de datos gubernamentales y actualizados anualmente para cada país.",
          },
          {
            title: "Cálculos instantáneos",
            description:
              "Los resultados aparecen en milisegundos. Sin peticiones al servidor — todo se ejecuta en tu navegador para máxima velocidad y privacidad.",
          },
          {
            title: "Personalización de fines de semana",
            description:
              "Incluye o excluye sábados como días laborables. Perfecto para regiones donde el sábado es día hábil.",
          },
          {
            title: "Conteo bidireccional",
            description:
              "Cuenta hacia adelante para encontrar una fecha de entrega, o hacia atrás para encontrar un plazo de envío. Se admiten días negativos.",
          },
          {
            title: "Sin registro necesario",
            description:
              "Abre la página, selecciona tu país y obtén tu respuesta. Sin cuentas, sin suscripciones, sin recopilación de datos.",
          },
          {
            title: "Páginas por país optimizadas para SEO",
            description:
              "Páginas dedicadas para cada país con tablas completas de festivos — perfectas para guardar en favoritos y compartir con colegas.",
          },
        ],
      },
      howItWorks: {
        title: "Cómo funciona",
        steps: [
          {
            title: "Selecciona tu país",
            description:
              "Elige entre más de 170 países. Cargamos el calendario oficial de festivos públicos del año actual.",
          },
          {
            title: "Configura tus parámetros",
            description:
              "Elige una fecha de inicio, introduce el número de días laborables a sumar (o restar), y decide si los sábados cuentan.",
          },
          {
            title: "Obtén tu resultado",
            description:
              "Ve instantáneamente la fecha final, un desglose de fines de semana y festivos omitidos, y qué festivos específicos se excluyeron.",
          },
        ],
      },
      useCases: {
        title: "Diseñado para profesionales",
        subtitle:
          "Equipos de múltiples industrias confían en BizDays Global para la precisión de sus plazos.",
        items: [
          {
            title: "Logística internacional",
            description:
              "Calcula ventanas de entrega precisas para envíos transfronterizos teniendo en cuenta festivos locales en origen y destino.",
          },
          {
            title: "Recursos humanos",
            description:
              "Calcula períodos de preaviso, fechas de fin de prueba y plazos de nómina según la regulación laboral local.",
          },
          {
            title: "Finanzas y legal",
            description:
              "Determina fechas de liquidación, plazos contractuales y ventanas de cumplimiento regulatorio que excluyen días no laborables.",
          },
          {
            title: "Gestión de proyectos",
            description:
              "Planifica cronogramas de sprints internacionales y fechas de hitos teniendo en cuenta miembros del equipo en distintos países.",
          },
        ],
      },
      faq: {
        title: "Preguntas frecuentes",
        items: [
          {
            question: "¿Qué es un día laborable?",
            answer:
              "Un día laborable (también llamado día hábil) es cualquier día que no sea fin de semana ni festivo público. La mayoría de países consideran de lunes a viernes como días laborables, aunque varía según la región.",
          },
          {
            question: "¿Cómo de precisos son los datos de festivos?",
            answer:
              "Obtenemos los datos de festivos de la librería open-source date-holidays, que agrega calendarios de festivos publicados por gobiernos. Los datos se actualizan regularmente pero recomendamos verificar fechas críticas con las autoridades locales.",
          },
          {
            question: "¿Puedo contar días laborables hacia atrás?",
            answer:
              "Sí. Introduce un número negativo de días laborables para contar hacia atrás desde tu fecha de inicio. Útil para encontrar plazos de envío cuando conoces la fecha de entrega requerida.",
          },
          {
            question: "¿Esta herramienta tiene en cuenta los festivos regionales?",
            answer:
              "Nuestra herramienta se centra en festivos públicos nacionales. Algunos países tienen festivos regionales que varían por comunidad autónoma o provincia. Para mayor precisión, consulta las fuentes oficiales locales.",
          },
          {
            question: "¿Es gratuita esta calculadora?",
            answer:
              "Sí, BizDays Global es completamente gratuita y siempre lo será. Sin registro, sin límites, sin funciones ocultas de pago.",
          },
          {
            question: "¿Por qué necesito una calculadora de días laborables?",
            answer:
              "El conteo manual es propenso a errores, especialmente entre países. Perder un solo festivo puede retrasar envíos, incumplir plazos contractuales o causar errores en nóminas. Automatizarlo elimina el error humano.",
          },
        ],
      },
      cta: {
        title: "¿Listo para calcular?",
        subtitle: "Sube y prueba la calculadora — solo toma 5 segundos.",
        button: "Probar la calculadora",
      },
    },
    nav: {
      calculator: "Calculadora",
      countries: "Países",
      about: "Acerca de",
      startCalculating: "Empieza a calcular",
    },
    cookieConsent: {
      title: "Valoramos tu privacidad",
      description: "Utilizamos cookies para mejorar tu experiencia de navegación, mostrar anuncios o contenido personalizado y analizar nuestro tráfico. Al hacer clic en \"Aceptar todo\", consientes el uso de cookies. Puedes personalizar tus preferencias o rechazar las cookies no esenciales.",
      acceptAll: "Aceptar todo",
      rejectAll: "Rechazar todo",
      customize: "Personalizar",
      save: "Guardar preferencias",
      necessary: "Estrictamente necesarias",
      necessaryDesc: "Estas cookies son esenciales para el correcto funcionamiento del sitio web y no se pueden desactivar.",
      analytics: "Analíticas",
      analyticsDesc: "Estas cookies nos ayudan a entender cómo los visitantes interactúan con el sitio web recopilando información anónima.",
      advertising: "Publicidad",
      advertisingDesc: "Estas cookies se utilizan para mostrar anuncios personalizados y medir la efectividad de las campañas publicitarias.",
      moreInfo: "Leer nuestra Política de Cookies",
    },
    calculator: {
      title: "Calculadora de Días Laborables",
      subtitle:
        "Calcula fechas de entrega excluyendo fines de semana y festivos a nivel mundial.",
      startDate: "Fecha de Inicio",
      businessDays: "Días Laborables",
      country: "País",
      countryPlaceholder: "Buscar un país...",
      includeSaturdays: "Incluir sábados como laborables",
      calculate: "Calcular Fecha Final",
      result: {
        title: "Resultado",
        endDate: "Fecha Final",
        summary: "Resumen",
        skippedWeekends: "Días de fin de semana omitidos",
        skippedHolidays: "Festivos omitidos",
        holidayList: "Festivos excluidos",
      },
    },
    common: {
      advertisement: "Publicidad",
      affiliateDisclaimer:
        "Podemos recibir una comisión de enlaces de socios sin coste adicional para ti.",
      footer: {
        tagline:
          "La calculadora gratuita de días laborables para equipos globales.",
        disclaimer:
          "BizDays Global proporciona estimaciones basadas en datos de festivos públicos. Verifica siempre las fechas críticas con las autoridades locales.",
        links: {
          privacy: "Política de Privacidad",
          terms: "Términos del Servicio",
          cookies: "Política de Cookies",
          legal: "Aviso Legal",
          contact: "Contacto",
        },
      },
    },
    legal: {
      privacy: {
        title: "Política de Privacidad",
        description:
          "Política de Privacidad de BizDays Global. Conoce cómo recogemos, usamos y protegemos tus datos personales.",
        lastUpdated: "Última actualización: 11/02/2026",
        sections: [
          {
            heading: "1. Responsable del Tratamiento",
            content:
              "El responsable del tratamiento de tus datos personales es:\n\nSergio Fuentes Moreno\nCalle Rosario 95, Bajo Comercial, Albacete, España\nEmail: legal@bizdaysglobal.com\n\nSi tienes alguna pregunta sobre esta Política de Privacidad, contáctanos en la dirección de correo electrónico indicada.",
          },
          {
            heading: "2. Datos que Recopilamos",
            content:
              "Podemos recopilar los siguientes tipos de información:\n\n• **Datos de uso**: Páginas visitadas, tiempo de permanencia, tipo de navegador, tipo de dispositivo, URL de referencia y dirección IP (anonimizada cuando sea posible).\n• **Cookies y tecnologías similares**: Consulta nuestra Política de Cookies para más detalles.\n• **Información de contacto**: Si nos contactas a través del formulario, recopilamos tu nombre, dirección de correo electrónico y contenido del mensaje.\n\nNO recopilamos datos personales sensibles. NO requerimos creación de cuenta.",
          },
          {
            heading: "3. Finalidad del Tratamiento",
            content:
              "Tratamos tus datos con las siguientes finalidades:\n\n• **Prestación del servicio**: Para operar y mejorar BizDays Global.\n• **Análisis**: Para entender cómo los usuarios interactúan con nuestra web (usando Google Analytics o servicios similares).\n• **Publicidad**: Para mostrar anuncios relevantes a través de Google AdSense.\n• **Comunicación**: Para responder a tus consultas a través del formulario de contacto.\n• **Cumplimiento legal**: Para cumplir con las obligaciones legales aplicables.",
          },
          {
            heading: "4. Base Legal (RGPD)",
            content:
              "Tratamos tus datos personales sobre la base de:\n\n• **Interés legítimo** (Art. 6(1)(f) RGPD): Para análisis y mejora del servicio.\n• **Consentimiento** (Art. 6(1)(a) RGPD): Para cookies no esenciales y publicidad.\n• **Necesidad contractual** (Art. 6(1)(b) RGPD): Para responder a solicitudes de contacto.",
          },
          {
            heading: "5. Servicios de Terceros",
            content:
              "Utilizamos los siguientes servicios de terceros que pueden procesar tus datos:\n\n• **Google Analytics**: Análisis de tráfico web. [Política de Privacidad de Google](https://policies.google.com/privacy)\n• **Google AdSense**: Publicidad personalizada. [Configuración de anuncios de Google](https://adssettings.google.com)\n• **Vercel**: Alojamiento web. [Política de Privacidad de Vercel](https://vercel.com/legal/privacy-policy)\n\nEstos servicios pueden transferir datos fuera de la UE/EEE. Se aplican las salvaguardas apropiadas (Cláusulas Contractuales Tipo).",
          },
          {
            heading: "6. Conservación de Datos",
            content:
              "Conservamos tus datos solo durante el tiempo necesario:\n\n• **Datos de análisis**: 26 meses (por defecto de Google Analytics).\n• **Datos del formulario de contacto**: Hasta la resolución de tu consulta, más hasta 12 meses de referencia.\n• **Registros del servidor**: Hasta 30 días.",
          },
          {
            heading: "7. Tus Derechos",
            content:
              'Según el RGPD, tienes derecho a:\n\n• **Acceder** a tus datos personales.\n• **Rectificar** datos inexactos.\n• **Suprimir** tus datos ("derecho al olvido").\n• **Limitar** el tratamiento.\n• **Portabilidad** de datos.\n• **Oponerte** al tratamiento.\n• **Retirar el consentimiento** en cualquier momento.\n\nPara ejercer estos derechos, contáctanos en legal@bizdaysglobal.com. También tienes derecho a presentar una reclamación ante la Agencia Española de Protección de Datos (AEPD).',
          },
          {
            heading: "8. Seguridad",
            content:
              "Implementamos medidas técnicas y organizativas apropiadas para proteger tus datos personales, incluyendo cifrado HTTPS, infraestructura de alojamiento segura y controles de acceso.",
          },
          {
            heading: "9. Privacidad de Menores",
            content:
              "BizDays Global no está dirigido a menores de 16 años. No recopilamos datos de menores de forma consciente.",
          },
          {
            heading: "10. Cambios en esta Política",
            content:
              "Podemos actualizar esta Política de Privacidad periódicamente. Los cambios se publicarán en esta página con una fecha de revisión actualizada. Te recomendamos revisar esta política periódicamente.",
          },
        ],
      },
      terms: {
        title: "Términos del Servicio",
        description:
          "Términos del Servicio de BizDays Global. Lee las condiciones de uso de nuestra calculadora de días laborables.",
        lastUpdated: "Última actualización: 11/02/2026",
        sections: [
          {
            heading: "1. Aceptación de los Términos",
            content:
              'Al acceder y utilizar BizDays Global (el "Servicio"), aceptas quedar vinculado por estos Términos del Servicio. Si no estás de acuerdo con estos términos, por favor no utilices el Servicio.',
          },
          {
            heading: "2. Descripción del Servicio",
            content:
              'BizDays Global es una herramienta online gratuita que calcula días laborables (días hábiles) excluyendo fines de semana y festivos públicos de países de todo el mundo. El Servicio se proporciona "tal cual" y está destinado únicamente a fines informativos y de planificación.',
          },
          {
            heading: "3. Descargo de Responsabilidad sobre Exactitud",
            content:
              "Aunque nos esforzamos por proporcionar datos de festivos precisos, NO garantizamos la exactitud, integridad o actualidad de la información proporcionada. Los datos de festivos provienen de bases de datos de código abierto y pueden no reflejar:\n\n• Festivos regionales o locales.\n• Cambios de última hora en los calendarios festivos por parte de los gobiernos.\n• Días no laborables específicos de determinados sectores.\n\n**Siempre debes verificar las fechas críticas con las autoridades locales o fuentes oficiales antes de tomar decisiones empresariales.**",
          },
          {
            heading: "4. Limitación de Responsabilidad",
            content:
              "En la máxima medida permitida por la ley, BizDays Global y sus operadores no serán responsables de ningún daño directo, indirecto, incidental, especial, consecuente o punitivo derivado de:\n\n• El uso o la imposibilidad de uso del Servicio.\n• Errores o inexactitudes en los cálculos.\n• Decisiones empresariales tomadas basándose en los resultados del Servicio.\n• Interrupciones del Servicio.",
          },
          {
            heading: "5. Propiedad Intelectual",
            content:
              "El nombre, logotipo, diseño y contenido original de BizDays Global son propiedad de sus respectivos titulares. El código fuente está disponible bajo licencia de código abierto. Las librerías de terceros utilizadas conservan sus respectivas licencias.",
          },
          {
            heading: "6. Uso Aceptable",
            content:
              "Te comprometes a NO:\n\n• Utilizar el Servicio con fines ilícitos.\n• Intentar obtener acceso no autorizado a nuestros sistemas.\n• Usar herramientas automatizadas para hacer scraping o sobrecargar el Servicio.\n• Reproducir o redistribuir el Servicio con fines comerciales sin permiso.",
          },
          {
            heading: "7. Enlaces de Terceros y Publicidad",
            content:
              "El Servicio puede contener enlaces a sitios web de terceros y mostrar publicidad (incluyendo Google AdSense y enlaces de socios afiliados). No somos responsables del contenido, prácticas de privacidad o términos de sitios de terceros.",
          },
          {
            heading: "8. Modificaciones",
            content:
              "Nos reservamos el derecho de modificar, suspender o interrumpir el Servicio (o cualquier parte del mismo) en cualquier momento sin previo aviso. También podemos actualizar estos Términos del Servicio periódicamente. El uso continuado del Servicio constituye la aceptación de los términos actualizados.",
          },
          {
            heading: "9. Ley Aplicable",
            content:
              "Estos Términos se regirán e interpretarán de acuerdo con las leyes de Albacete, España. Cualquier disputa derivada del uso de este Servicio estará sujeta a la jurisdicción exclusiva de los tribunales de Albacete, España.",
          },
          {
            heading: "10. Contacto",
            content:
              "Para preguntas sobre estos Términos del Servicio, contáctanos en legal@bizdaysglobal.com.",
          },
        ],
      },
      cookies: {
        title: "Política de Cookies",
        description:
          "Política de Cookies de BizDays Global. Conoce qué cookies usamos y cómo gestionarlas.",
        lastUpdated: "Última actualización: 11/02/2026",
        sections: [
          {
            heading: "1. ¿Qué son las Cookies?",
            content:
              "Las cookies son pequeños archivos de texto que se almacenan en tu dispositivo cuando visitas un sitio web. Ayudan a que los sitios funcionen correctamente, recuerden preferencias y proporcionen funciones de análisis y publicidad.",
          },
          {
            heading: "2. Cookies que Utilizamos",
            content:
              "BizDays Global utiliza los siguientes tipos de cookies:\n\n**Cookies esenciales:**\n• Gestión de sesión y preferencia de idioma. Son estrictamente necesarias para el funcionamiento del sitio.\n\n**Cookies de análisis:**\n• Google Analytics (_ga, _gid, _gat): Utilizadas para entender el comportamiento de los usuarios y mejorar el Servicio. Los datos se anonimizan.\n\n**Cookies de publicidad:**\n• Google AdSense: Utilizadas para mostrar anuncios personalizados basados en tu historial de navegación. Estas cookies son establecidas por Google y sus socios publicitarios.\n\n**Cookies de terceros:**\n• Los socios afiliados pueden establecer cookies cuando haces clic en los enlaces de afiliados para rastrear las referencias.",
          },
          {
            heading: "3. Consentimiento de Cookies",
            content:
              "Cuando visitas BizDays Global por primera vez, te pediremos tu consentimiento antes de colocar cookies no esenciales. Puedes cambiar tus preferencias en cualquier momento a través de nuestro panel de configuración de cookies.\n\nLas cookies esenciales no requieren consentimiento ya que son necesarias para el funcionamiento del sitio web.",
          },
          {
            heading: "4. Gestión de Cookies",
            content:
              "Puedes gestionar las cookies a través de:\n\n• **Nuestra configuración de cookies**: Usa el panel de preferencias de cookies en nuestro sitio.\n• **Configuración del navegador**: La mayoría de los navegadores permiten bloquear o eliminar cookies.\n• **Configuración de anuncios de Google**: Gestiona la personalización en [adssettings.google.com](https://adssettings.google.com).\n\nNota: Bloquear las cookies puede afectar al funcionamiento del sitio web.",
          },
          {
            heading: "5. Duración de las Cookies",
            content:
              "• **Cookies de sesión**: Se eliminan al cerrar el navegador.\n• **Cookies persistentes**: Permanecen en tu dispositivo durante un período determinado (normalmente 1-24 meses) o hasta que se eliminen manualmente.\n• **Cookies de Google Analytics**: Hasta 26 meses.",
          },
          {
            heading: "6. Cambios en esta Política",
            content:
              "Podemos actualizar esta Política de Cookies para reflejar cambios en las cookies que utilizamos o por motivos legales. Consulta esta página periódicamente.",
          },
          {
            heading: "7. Contacto",
            content:
              "Para preguntas sobre nuestro uso de cookies, contáctanos en legal@bizdaysglobal.com.",
          },
        ],
      },
      legalNotice: {
        title: "Aviso Legal",
        description:
          "Aviso Legal de BizDays Global. Información sobre la titularidad del sitio web e información legal.",
        lastUpdated: "Última actualización: 11/02/2026",
        sections: [
          {
            heading: "1. Titular del Sitio Web",
            content:
              "En cumplimiento del deber de información recogido en el artículo 10 de la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la Información y del Comercio Electrónico (LSSI-CE), se facilitan los siguientes datos:\n\n• **Titular**: Sergio Fuentes Moreno\n• **NIF/CIF**: 49904748S\n• **Domicilio**: Calle Rosario 95, Bajo Comercial, Albacete, España\n• **Email**: legal@bizdaysglobal.com\n• **Sitio web**: https://bizdaysglobal.com",
          },
          {
            heading: "2. Objeto del Sitio Web",
            content:
              "BizDays Global es un sitio web informativo que proporciona una herramienta de cálculo de días laborables online. El sitio web se monetiza mediante publicidad online (Google AdSense) y programas de marketing de afiliación.",
          },
          {
            heading: "3. Propiedad Intelectual",
            content:
              "Todo el contenido de este sitio web, incluyendo pero no limitado a textos, gráficos, logotipos, iconos, imágenes y software, es propiedad de BizDays Global o de sus proveedores de contenido y está protegido por las leyes internacionales de propiedad intelectual.\n\nEl código fuente de código abierto que alimenta esta aplicación está disponible bajo los términos de su respectiva licencia.",
          },
          {
            heading: "4. Limitación de Responsabilidad",
            content:
              "BizDays Global no se hace responsable de:\n\n• Errores o inexactitudes en los resultados calculados.\n• Daños derivados del uso de la información proporcionada.\n• Contenidos de terceros accedidos a través de enlaces en este sitio web.\n• Interrupciones del servicio causadas por problemas técnicos ajenos a nuestro control.",
          },
          {
            heading: "5. Ley Aplicable y Jurisdicción",
            content:
              "El presente aviso legal se rige por la legislación de Albacete, España. Para cualquier controversia, las partes se someten a los juzgados y tribunales de Albacete, España, salvo que la normativa de protección al consumidor disponga otra cosa.",
          },
        ],
      },
    },
    contact: {
      title: "Contacto",
      description:
        "Ponte en contacto con el equipo de BizDays Global. Nos encantaría saber de ti.",
      subtitle:
        "¿Tienes alguna pregunta, sugerencia o consulta comercial? Nos encantaría saber de ti.",
      form: {
        name: "Tu Nombre",
        email: "Tu Email",
        subject: "Asunto",
        message: "Mensaje",
        submit: "Enviar Mensaje",
        successMessage:
          "¡Gracias! Tu mensaje ha sido enviado. Te responderemos en un plazo de 48 horas.",
      },
      info: {
        title: "Otras Formas de Contactarnos",
        email: "Email: legal@bizdaysglobal.com",
        responseTime: "Normalmente respondemos en 24-48 horas.",
      },
    },
  },
};

/**
 * Get the dictionary for a given locale.
 */
export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale] ?? dictionaries[defaultLocale];
}

/**
 * Check if a string is a valid locale.
 */
export function isValidLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}
