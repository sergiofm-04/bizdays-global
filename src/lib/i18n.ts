// ============================================
// BizDays Global â€” i18n Configuration
// Minimal i18n system for EN/ES
// ============================================

import type { Locale, Dictionary } from "@/types";

export const defaultLocale: Locale = "en";
export const locales: Locale[] = ["en", "es"];

const dictionaries: Record<Locale, Dictionary> = {
  en: {
    meta: {
      title: "BizDays Global â€” Business Days Calculator",
      description:
        "Calculate delivery dates excluding weekends and public holidays for 100+ countries. Free online business days calculator.",
      titleTemplate: "Business Days Calculator for {country} | BizDays Global",
      descriptionTemplate:
        "Calculate working days in {country} excluding weekends and {country} public holidays. Free online tool for delivery date planning.",
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
        description: "Privacy Policy of BizDays Global. Learn how we collect, use, and protect your personal data.",
        lastUpdated: "Last updated: 11/02/2026",
        sections: [
          {
            heading: "1. Data Controller",
            content: "The entity responsible for the processing of your personal data is:\n\nSergio Fuentes Moreno\nCalle Rosario 95, Bajo Comercial, Albacete, España\nEmail: legal@bizdaysglobal.com\n\nIf you have any questions about this Privacy Policy, please contact us at the email address above.",
          },
          {
            heading: "2. Data We Collect",
            content: "We may collect the following types of information:\n\nâ€¢ **Usage data**: Pages visited, time spent, browser type, device type, referring URL, and IP address (anonymized where possible).\nâ€¢ **Cookies and similar technologies**: See our Cookie Policy for details.\nâ€¢ **Contact information**: If you contact us via our contact form, we collect your name, email address, and message content.\n\nWe do NOT collect sensitive personal data. We do NOT require account creation.",
          },
          {
            heading: "3. Purpose of Data Processing",
            content: "We process your data for the following purposes:\n\nâ€¢ **Service provision**: To operate and improve BizDays Global.\nâ€¢ **Analytics**: To understand how users interact with our website (using Google Analytics or similar services).\nâ€¢ **Advertising**: To display relevant advertisements through Google AdSense.\nâ€¢ **Communication**: To respond to your inquiries via the contact form.\nâ€¢ **Legal compliance**: To comply with applicable legal obligations.",
          },
          {
            heading: "4. Legal Basis (GDPR)",
            content: "We process your personal data based on:\n\nâ€¢ **Legitimate interest** (Art. 6(1)(f) GDPR): For analytics and service improvement.\nâ€¢ **Consent** (Art. 6(1)(a) GDPR): For non-essential cookies and advertising.\nâ€¢ **Contractual necessity** (Art. 6(1)(b) GDPR): To respond to contact requests.",
          },
          {
            heading: "5. Third-Party Services",
            content: "We use the following third-party services that may process your data:\n\nâ€¢ **Google Analytics**: Website traffic analysis. [Google Privacy Policy](https://policies.google.com/privacy)\nâ€¢ **Google AdSense**: Personalized advertising. [Google Ad Settings](https://adssettings.google.com)\nâ€¢ **Vercel**: Website hosting. [Vercel Privacy Policy](https://vercel.com/legal/privacy-policy)\n\nThese services may transfer data outside the EU/EEA. Appropriate safeguards are in place (Standard Contractual Clauses).",
          },
          {
            heading: "6. Data Retention",
            content: "We retain your data only for as long as necessary:\n\nâ€¢ **Analytics data**: 26 months (Google Analytics default).\nâ€¢ **Contact form data**: Until your inquiry is resolved, plus up to 12 months for reference.\nâ€¢ **Server logs**: Up to 30 days.",
          },
          {
            heading: "7. Your Rights",
            content: "Under the GDPR, you have the right to:\n\nâ€¢ **Access** your personal data.\nâ€¢ **Rectify** inaccurate data.\nâ€¢ **Erase** your data (\"right to be forgotten\").\nâ€¢ **Restrict** processing.\nâ€¢ **Data portability**.\nâ€¢ **Object** to processing.\nâ€¢ **Withdraw consent** at any time.\n\nTo exercise these rights, contact us at legal@bizdaysglobal.com. You also have the right to lodge a complaint with your local Data Protection Authority.",
          },
          {
            heading: "8. Security",
            content: "We implement appropriate technical and organizational measures to protect your personal data, including HTTPS encryption, secure hosting infrastructure, and access controls.",
          },
          {
            heading: "9. Children's Privacy",
            content: "BizDays Global is not intended for children under 16 years of age. We do not knowingly collect data from children.",
          },
          {
            heading: "10. Changes to This Policy",
            content: "We may update this Privacy Policy from time to time. Changes will be posted on this page with an updated revision date. We encourage you to review this policy periodically.",
          },
        ],
      },
      terms: {
        title: "Terms of Service",
        description: "Terms of Service of BizDays Global. Read the conditions for using our business days calculator.",
        lastUpdated: "Last updated: 11/02/2026",
        sections: [
          {
            heading: "1. Acceptance of Terms",
            content: "By accessing and using BizDays Global (the \"Service\"), you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use the Service.",
          },
          {
            heading: "2. Description of Service",
            content: "BizDays Global is a free online tool that calculates business days (working days) by excluding weekends and public holidays for countries worldwide. The Service is provided \"as is\" and is intended for informational and planning purposes only.",
          },
          {
            heading: "3. Accuracy Disclaimer",
            content: "While we strive to provide accurate holiday data, we do NOT guarantee the accuracy, completeness, or timeliness of the information provided. Public holiday data is sourced from open-source databases and may not reflect:\n\nâ€¢ Regional or local holidays.\nâ€¢ Last-minute government changes to holiday schedules.\nâ€¢ Sector-specific non-working days.\n\n**You should always verify critical dates with local authorities or official sources before making business decisions.**",
          },
          {
            heading: "4. Limitation of Liability",
            content: "To the maximum extent permitted by law, BizDays Global and its operators shall not be liable for any direct, indirect, incidental, special, consequential, or punitive damages arising from:\n\nâ€¢ Use or inability to use the Service.\nâ€¢ Errors or inaccuracies in calculations.\nâ€¢ Business decisions made based on the Service's output.\nâ€¢ Interruptions to the Service.",
          },
          {
            heading: "5. Intellectual Property",
            content: "The BizDays Global name, logo, design, and original content are the property of their respective owners. The source code is available under open-source license. Third-party libraries used in the Service retain their respective licenses.",
          },
          {
            heading: "6. Acceptable Use",
            content: "You agree NOT to:\n\nâ€¢ Use the Service for any unlawful purpose.\nâ€¢ Attempt to gain unauthorized access to our systems.\nâ€¢ Use automated tools to scrape or overload the Service.\nâ€¢ Reproduce or redistribute the Service for commercial purposes without permission.",
          },
          {
            heading: "7. Third-Party Links and Advertising",
            content: "The Service may contain links to third-party websites and display advertisements (including Google AdSense and affiliate partner links). We are not responsible for the content, privacy practices, or terms of third-party sites. Clicking on advertisements or affiliate links may result in cookies being placed on your device by third parties.",
          },
          {
            heading: "8. Modifications",
            content: "We reserve the right to modify, suspend, or discontinue the Service (or any part thereof) at any time without notice. We may also update these Terms of Service periodically. Continued use of the Service constitutes acceptance of updated terms.",
          },
          {
            heading: "9. Governing Law",
            content: "These Terms shall be governed by and construed in accordance with the laws of Albacete, España. Any disputes arising from the use of this Service shall be subject to the exclusive jurisdiction of the courts of Albacete, España.",
          },
          {
            heading: "10. Contact",
            content: "For questions about these Terms of Service, contact us at legal@bizdaysglobal.com.",
          },
        ],
      },
      cookies: {
        title: "Cookie Policy",
        description: "Cookie Policy of BizDays Global. Learn what cookies we use and how to manage them.",
        lastUpdated: "Last updated: 11/02/2026",
        sections: [
          {
            heading: "1. What Are Cookies?",
            content: "Cookies are small text files stored on your device when you visit a website. They help websites function properly, remember preferences, and provide analytics and advertising features.",
          },
          {
            heading: "2. Cookies We Use",
            content: "BizDays Global uses the following types of cookies:\n\n**Essential cookies:**\nâ€¢ Session management and locale preference. These are strictly necessary for the website to function.\n\n**Analytics cookies:**\nâ€¢ Google Analytics (_ga, _gid, _gat): Used to understand user behavior and improve the Service. Data is anonymized.\n\n**Advertising cookies:**\nâ€¢ Google AdSense: Used to display personalized advertisements based on your browsing history. These cookies are set by Google and its advertising partners.\n\n**Third-party cookies:**\nâ€¢ Affiliate partners may set cookies when you click on affiliate links to track referrals.",
          },
          {
            heading: "3. Cookie Consent",
            content: "When you first visit BizDays Global, we will ask for your consent before placing non-essential cookies. You can change your preferences at any time through our cookie settings panel.\n\nEssential cookies do not require consent as they are necessary for the website to function.",
          },
          {
            heading: "4. Managing Cookies",
            content: "You can manage cookies through:\n\nâ€¢ **Our cookie settings**: Use the cookie preferences panel on our website.\nâ€¢ **Browser settings**: Most browsers allow you to block or delete cookies. Refer to your browser's help documentation.\nâ€¢ **Google Ad Settings**: Manage ad personalization at [adssettings.google.com](https://adssettings.google.com).\nâ€¢ **Network Advertising Initiative**: Opt out at [optout.networkadvertising.org](https://optout.networkadvertising.org).\n\nNote: Blocking cookies may affect the functionality of the website.",
          },
          {
            heading: "5. Cookie Duration",
            content: "â€¢ **Session cookies**: Deleted when you close your browser.\nâ€¢ **Persistent cookies**: Remain on your device for a set period (typically 1-24 months) or until manually deleted.\nâ€¢ **Google Analytics cookies**: Up to 26 months.",
          },
          {
            heading: "6. Changes to This Policy",
            content: "We may update this Cookie Policy to reflect changes in the cookies we use or for legal reasons. Check this page periodically for updates.",
          },
          {
            heading: "7. Contact",
            content: "For questions about our use of cookies, contact us at legal@bizdaysglobal.com.",
          },
        ],
      },
      legalNotice: {
        title: "Legal Notice",
        description: "Legal Notice (Aviso Legal) of BizDays Global. Website ownership and legal information.",
        lastUpdated: "Last updated: 11/02/2026",
        sections: [
          {
            heading: "1. Website Owner",
            content: "In compliance with the duty of information set forth in Article 10 of Law 34/2002 on Information Society Services and Electronic Commerce (LSSI-CE), the following information is provided:\n\nâ€¢ **Owner**: Sergio Fuentes Moreno\nâ€¢ **Tax ID (NIF/CIF)**: 49904748S\nâ€¢ **Address**: Calle Rosario 95, Bajo Comercial, Albacete, España\nâ€¢ **Email**: legal@bizdaysglobal.com\nâ€¢ **Website**: https://bizdaysglobal.com",
          },
          {
            heading: "2. Purpose of the Website",
            content: "BizDays Global is an informational website that provides an online business days calculator tool. The website is monetized through online advertising (Google AdSense) and affiliate marketing programs.",
          },
          {
            heading: "3. Intellectual Property",
            content: "All content on this website, including but not limited to text, graphics, logos, icons, images, and software, is the property of BizDays Global or its content suppliers and is protected by international intellectual property laws.\n\nThe open-source code powering this application is available under its respective license terms.",
          },
          {
            heading: "4. Limitation of Liability",
            content: "BizDays Global shall not be held responsible for:\n\nâ€¢ Errors or inaccuracies in the calculated results.\nâ€¢ Damages arising from the use of the information provided.\nâ€¢ Third-party content accessed through links on this website.\nâ€¢ Service interruptions caused by technical issues beyond our control.",
          },
          {
            heading: "5. Applicable Law and Jurisdiction",
            content: "This legal notice is governed by Albacete, España law. For any disputes, the parties agree to submit to the courts of Albacete, España, except where consumer protection law requires otherwise.",
          },
        ],
      },
    },
    contact: {
      title: "Contact Us",
      description: "Get in touch with the BizDays Global team. We'd love to hear from you.",
      subtitle: "Have a question, suggestion, or business inquiry? We'd love to hear from you.",
      form: {
        name: "Your Name",
        email: "Your Email",
        subject: "Subject",
        message: "Message",
        submit: "Send Message",
        successMessage: "Thank you! Your message has been sent. We'll get back to you within 48 hours.",
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
      title: "BizDays Global â€” Calculadora de DÃ­as Laborables",
      description:
        "Calcula fechas de entrega excluyendo fines de semana y festivos locales de mÃ¡s de 100 paÃ­ses. Calculadora gratuita de dÃ­as hÃ¡biles.",
      titleTemplate:
        "Calculadora de DÃ­as Laborables en {country} | BizDays Global",
      descriptionTemplate:
        "Calcula dÃ­as hÃ¡biles en {country} excluyendo fines de semana y festivos de {country}. Herramienta gratuita para planificar entregas.",
    },
    calculator: {
      title: "Calculadora de DÃ­as Laborables",
      subtitle:
        "Calcula fechas de entrega excluyendo fines de semana y festivos a nivel mundial.",
      startDate: "Fecha de Inicio",
      businessDays: "DÃ­as Laborables",
      country: "PaÃ­s",
      countryPlaceholder: "Buscar un paÃ­s...",
      includeSaturdays: "Incluir sÃ¡bados como laborables",
      calculate: "Calcular Fecha Final",
      result: {
        title: "Resultado",
        endDate: "Fecha Final",
        summary: "Resumen",
        skippedWeekends: "DÃ­as de fin de semana omitidos",
        skippedHolidays: "Festivos omitidos",
        holidayList: "Festivos excluidos",
      },
    },
    common: {
      advertisement: "Publicidad",
      affiliateDisclaimer:
        "Podemos recibir una comisiÃ³n de enlaces de socios sin coste adicional para ti.",
      footer: {
        tagline:
          "La calculadora gratuita de dÃ­as laborables para equipos globales.",
        disclaimer:
          "BizDays Global proporciona estimaciones basadas en datos de festivos pÃºblicos. Verifica siempre las fechas crÃ­ticas con las autoridades locales.",
        links: {
          privacy: "PolÃ­tica de Privacidad",
          terms: "TÃ©rminos del Servicio",
          cookies: "PolÃ­tica de Cookies",
          legal: "Aviso Legal",
          contact: "Contacto",
        },
      },
    },
    legal: {
      privacy: {
        title: "PolÃ­tica de Privacidad",
        description: "PolÃ­tica de Privacidad de BizDays Global. Conoce cÃ³mo recogemos, usamos y protegemos tus datos personales.",
        lastUpdated: "Ãšltima actualizaciÃ³n: 11/02/2026",
        sections: [
          {
            heading: "1. Responsable del Tratamiento",
            content: "El responsable del tratamiento de tus datos personales es:\n\nSergio Fuentes Moreno\nCalle Rosario 95, Bajo Comercial, Albacete, España\nEmail: legal@bizdaysglobal.com\n\nSi tienes alguna pregunta sobre esta PolÃ­tica de Privacidad, contÃ¡ctanos en la direcciÃ³n de correo electrÃ³nico indicada.",
          },
          {
            heading: "2. Datos que Recopilamos",
            content: "Podemos recopilar los siguientes tipos de informaciÃ³n:\n\nâ€¢ **Datos de uso**: PÃ¡ginas visitadas, tiempo de permanencia, tipo de navegador, tipo de dispositivo, URL de referencia y direcciÃ³n IP (anonimizada cuando sea posible).\nâ€¢ **Cookies y tecnologÃ­as similares**: Consulta nuestra PolÃ­tica de Cookies para mÃ¡s detalles.\nâ€¢ **InformaciÃ³n de contacto**: Si nos contactas a travÃ©s del formulario, recopilamos tu nombre, direcciÃ³n de correo electrÃ³nico y contenido del mensaje.\n\nNO recopilamos datos personales sensibles. NO requerimos creaciÃ³n de cuenta.",
          },
          {
            heading: "3. Finalidad del Tratamiento",
            content: "Tratamos tus datos con las siguientes finalidades:\n\nâ€¢ **PrestaciÃ³n del servicio**: Para operar y mejorar BizDays Global.\nâ€¢ **AnÃ¡lisis**: Para entender cÃ³mo los usuarios interactÃºan con nuestra web (usando Google Analytics o servicios similares).\nâ€¢ **Publicidad**: Para mostrar anuncios relevantes a travÃ©s de Google AdSense.\nâ€¢ **ComunicaciÃ³n**: Para responder a tus consultas a travÃ©s del formulario de contacto.\nâ€¢ **Cumplimiento legal**: Para cumplir con las obligaciones legales aplicables.",
          },
          {
            heading: "4. Base Legal (RGPD)",
            content: "Tratamos tus datos personales sobre la base de:\n\nâ€¢ **InterÃ©s legÃ­timo** (Art. 6(1)(f) RGPD): Para anÃ¡lisis y mejora del servicio.\nâ€¢ **Consentimiento** (Art. 6(1)(a) RGPD): Para cookies no esenciales y publicidad.\nâ€¢ **Necesidad contractual** (Art. 6(1)(b) RGPD): Para responder a solicitudes de contacto.",
          },
          {
            heading: "5. Servicios de Terceros",
            content: "Utilizamos los siguientes servicios de terceros que pueden procesar tus datos:\n\nâ€¢ **Google Analytics**: AnÃ¡lisis de trÃ¡fico web. [PolÃ­tica de Privacidad de Google](https://policies.google.com/privacy)\nâ€¢ **Google AdSense**: Publicidad personalizada. [ConfiguraciÃ³n de anuncios de Google](https://adssettings.google.com)\nâ€¢ **Vercel**: Alojamiento web. [PolÃ­tica de Privacidad de Vercel](https://vercel.com/legal/privacy-policy)\n\nEstos servicios pueden transferir datos fuera de la UE/EEE. Se aplican las salvaguardas apropiadas (ClÃ¡usulas Contractuales Tipo).",
          },
          {
            heading: "6. ConservaciÃ³n de Datos",
            content: "Conservamos tus datos solo durante el tiempo necesario:\n\nâ€¢ **Datos de anÃ¡lisis**: 26 meses (por defecto de Google Analytics).\nâ€¢ **Datos del formulario de contacto**: Hasta la resoluciÃ³n de tu consulta, mÃ¡s hasta 12 meses de referencia.\nâ€¢ **Registros del servidor**: Hasta 30 dÃ­as.",
          },
          {
            heading: "7. Tus Derechos",
            content: "SegÃºn el RGPD, tienes derecho a:\n\nâ€¢ **Acceder** a tus datos personales.\nâ€¢ **Rectificar** datos inexactos.\nâ€¢ **Suprimir** tus datos (\"derecho al olvido\").\nâ€¢ **Limitar** el tratamiento.\nâ€¢ **Portabilidad** de datos.\nâ€¢ **Oponerte** al tratamiento.\nâ€¢ **Retirar el consentimiento** en cualquier momento.\n\nPara ejercer estos derechos, contÃ¡ctanos en legal@bizdaysglobal.com. TambiÃ©n tienes derecho a presentar una reclamaciÃ³n ante la Agencia EspaÃ±ola de ProtecciÃ³n de Datos (AEPD).",
          },
          {
            heading: "8. Seguridad",
            content: "Implementamos medidas tÃ©cnicas y organizativas apropiadas para proteger tus datos personales, incluyendo cifrado HTTPS, infraestructura de alojamiento segura y controles de acceso.",
          },
          {
            heading: "9. Privacidad de Menores",
            content: "BizDays Global no estÃ¡ dirigido a menores de 16 aÃ±os. No recopilamos datos de menores de forma consciente.",
          },
          {
            heading: "10. Cambios en esta PolÃ­tica",
            content: "Podemos actualizar esta PolÃ­tica de Privacidad periÃ³dicamente. Los cambios se publicarÃ¡n en esta pÃ¡gina con una fecha de revisiÃ³n actualizada. Te recomendamos revisar esta polÃ­tica periÃ³dicamente.",
          },
        ],
      },
      terms: {
        title: "TÃ©rminos del Servicio",
        description: "TÃ©rminos del Servicio de BizDays Global. Lee las condiciones de uso de nuestra calculadora de dÃ­as laborables.",
        lastUpdated: "Ãšltima actualizaciÃ³n: 11/02/2026",
        sections: [
          {
            heading: "1. AceptaciÃ³n de los TÃ©rminos",
            content: "Al acceder y utilizar BizDays Global (el \"Servicio\"), aceptas quedar vinculado por estos TÃ©rminos del Servicio. Si no estÃ¡s de acuerdo con estos tÃ©rminos, por favor no utilices el Servicio.",
          },
          {
            heading: "2. DescripciÃ³n del Servicio",
            content: "BizDays Global es una herramienta online gratuita que calcula dÃ­as laborables (dÃ­as hÃ¡biles) excluyendo fines de semana y festivos pÃºblicos de paÃ­ses de todo el mundo. El Servicio se proporciona \"tal cual\" y estÃ¡ destinado Ãºnicamente a fines informativos y de planificaciÃ³n.",
          },
          {
            heading: "3. Descargo de Responsabilidad sobre Exactitud",
            content: "Aunque nos esforzamos por proporcionar datos de festivos precisos, NO garantizamos la exactitud, integridad o actualidad de la informaciÃ³n proporcionada. Los datos de festivos provienen de bases de datos de cÃ³digo abierto y pueden no reflejar:\n\nâ€¢ Festivos regionales o locales.\nâ€¢ Cambios de Ãºltima hora en los calendarios festivos por parte de los gobiernos.\nâ€¢ DÃ­as no laborables especÃ­ficos de determinados sectores.\n\n**Siempre debes verificar las fechas crÃ­ticas con las autoridades locales o fuentes oficiales antes de tomar decisiones empresariales.**",
          },
          {
            heading: "4. LimitaciÃ³n de Responsabilidad",
            content: "En la mÃ¡xima medida permitida por la ley, BizDays Global y sus operadores no serÃ¡n responsables de ningÃºn daÃ±o directo, indirecto, incidental, especial, consecuente o punitivo derivado de:\n\nâ€¢ El uso o la imposibilidad de uso del Servicio.\nâ€¢ Errores o inexactitudes en los cÃ¡lculos.\nâ€¢ Decisiones empresariales tomadas basÃ¡ndose en los resultados del Servicio.\nâ€¢ Interrupciones del Servicio.",
          },
          {
            heading: "5. Propiedad Intelectual",
            content: "El nombre, logotipo, diseÃ±o y contenido original de BizDays Global son propiedad de sus respectivos titulares. El cÃ³digo fuente estÃ¡ disponible bajo licencia de cÃ³digo abierto. Las librerÃ­as de terceros utilizadas conservan sus respectivas licencias.",
          },
          {
            heading: "6. Uso Aceptable",
            content: "Te comprometes a NO:\n\nâ€¢ Utilizar el Servicio con fines ilÃ­citos.\nâ€¢ Intentar obtener acceso no autorizado a nuestros sistemas.\nâ€¢ Usar herramientas automatizadas para hacer scraping o sobrecargar el Servicio.\nâ€¢ Reproducir o redistribuir el Servicio con fines comerciales sin permiso.",
          },
          {
            heading: "7. Enlaces de Terceros y Publicidad",
            content: "El Servicio puede contener enlaces a sitios web de terceros y mostrar publicidad (incluyendo Google AdSense y enlaces de socios afiliados). No somos responsables del contenido, prÃ¡cticas de privacidad o tÃ©rminos de sitios de terceros.",
          },
          {
            heading: "8. Modificaciones",
            content: "Nos reservamos el derecho de modificar, suspender o interrumpir el Servicio (o cualquier parte del mismo) en cualquier momento sin previo aviso. TambiÃ©n podemos actualizar estos TÃ©rminos del Servicio periÃ³dicamente. El uso continuado del Servicio constituye la aceptaciÃ³n de los tÃ©rminos actualizados.",
          },
          {
            heading: "9. Ley Aplicable",
            content: "Estos TÃ©rminos se regirÃ¡n e interpretarÃ¡n de acuerdo con las leyes de Albacete, España. Cualquier disputa derivada del uso de este Servicio estarÃ¡ sujeta a la jurisdicciÃ³n exclusiva de los tribunales de Albacete, España.",
          },
          {
            heading: "10. Contacto",
            content: "Para preguntas sobre estos TÃ©rminos del Servicio, contÃ¡ctanos en legal@bizdaysglobal.com.",
          },
        ],
      },
      cookies: {
        title: "PolÃ­tica de Cookies",
        description: "PolÃ­tica de Cookies de BizDays Global. Conoce quÃ© cookies usamos y cÃ³mo gestionarlas.",
        lastUpdated: "Ãšltima actualizaciÃ³n: 11/02/2026",
        sections: [
          {
            heading: "1. Â¿QuÃ© son las Cookies?",
            content: "Las cookies son pequeÃ±os archivos de texto que se almacenan en tu dispositivo cuando visitas un sitio web. Ayudan a que los sitios funcionen correctamente, recuerden preferencias y proporcionen funciones de anÃ¡lisis y publicidad.",
          },
          {
            heading: "2. Cookies que Utilizamos",
            content: "BizDays Global utiliza los siguientes tipos de cookies:\n\n**Cookies esenciales:**\nâ€¢ GestiÃ³n de sesiÃ³n y preferencia de idioma. Son estrictamente necesarias para el funcionamiento del sitio.\n\n**Cookies de anÃ¡lisis:**\nâ€¢ Google Analytics (_ga, _gid, _gat): Utilizadas para entender el comportamiento de los usuarios y mejorar el Servicio. Los datos se anonimizan.\n\n**Cookies de publicidad:**\nâ€¢ Google AdSense: Utilizadas para mostrar anuncios personalizados basados en tu historial de navegaciÃ³n. Estas cookies son establecidas por Google y sus socios publicitarios.\n\n**Cookies de terceros:**\nâ€¢ Los socios afiliados pueden establecer cookies cuando haces clic en los enlaces de afiliados para rastrear las referencias.",
          },
          {
            heading: "3. Consentimiento de Cookies",
            content: "Cuando visitas BizDays Global por primera vez, te pediremos tu consentimiento antes de colocar cookies no esenciales. Puedes cambiar tus preferencias en cualquier momento a travÃ©s de nuestro panel de configuraciÃ³n de cookies.\n\nLas cookies esenciales no requieren consentimiento ya que son necesarias para el funcionamiento del sitio web.",
          },
          {
            heading: "4. GestiÃ³n de Cookies",
            content: "Puedes gestionar las cookies a travÃ©s de:\n\nâ€¢ **Nuestra configuraciÃ³n de cookies**: Usa el panel de preferencias de cookies en nuestro sitio.\nâ€¢ **ConfiguraciÃ³n del navegador**: La mayorÃ­a de los navegadores permiten bloquear o eliminar cookies.\nâ€¢ **ConfiguraciÃ³n de anuncios de Google**: Gestiona la personalizaciÃ³n en [adssettings.google.com](https://adssettings.google.com).\n\nNota: Bloquear las cookies puede afectar al funcionamiento del sitio web.",
          },
          {
            heading: "5. DuraciÃ³n de las Cookies",
            content: "â€¢ **Cookies de sesiÃ³n**: Se eliminan al cerrar el navegador.\nâ€¢ **Cookies persistentes**: Permanecen en tu dispositivo durante un perÃ­odo determinado (normalmente 1-24 meses) o hasta que se eliminen manualmente.\nâ€¢ **Cookies de Google Analytics**: Hasta 26 meses.",
          },
          {
            heading: "6. Cambios en esta PolÃ­tica",
            content: "Podemos actualizar esta PolÃ­tica de Cookies para reflejar cambios en las cookies que utilizamos o por motivos legales. Consulta esta pÃ¡gina periÃ³dicamente.",
          },
          {
            heading: "7. Contacto",
            content: "Para preguntas sobre nuestro uso de cookies, contÃ¡ctanos en legal@bizdaysglobal.com.",
          },
        ],
      },
      legalNotice: {
        title: "Aviso Legal",
        description: "Aviso Legal de BizDays Global. InformaciÃ³n sobre la titularidad del sitio web e informaciÃ³n legal.",
        lastUpdated: "Ãšltima actualizaciÃ³n: 11/02/2026",
        sections: [
          {
            heading: "1. Titular del Sitio Web",
            content: "En cumplimiento del deber de informaciÃ³n recogido en el artÃ­culo 10 de la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la InformaciÃ³n y del Comercio ElectrÃ³nico (LSSI-CE), se facilitan los siguientes datos:\n\nâ€¢ **Titular**: Sergio Fuentes Moreno\nâ€¢ **NIF/CIF**: 49904748S\nâ€¢ **Domicilio**: Calle Rosario 95, Bajo Comercial, Albacete, España\nâ€¢ **Email**: legal@bizdaysglobal.com\nâ€¢ **Sitio web**: https://bizdaysglobal.com",
          },
          {
            heading: "2. Objeto del Sitio Web",
            content: "BizDays Global es un sitio web informativo que proporciona una herramienta de cÃ¡lculo de dÃ­as laborables online. El sitio web se monetiza mediante publicidad online (Google AdSense) y programas de marketing de afiliaciÃ³n.",
          },
          {
            heading: "3. Propiedad Intelectual",
            content: "Todo el contenido de este sitio web, incluyendo pero no limitado a textos, grÃ¡ficos, logotipos, iconos, imÃ¡genes y software, es propiedad de BizDays Global o de sus proveedores de contenido y estÃ¡ protegido por las leyes internacionales de propiedad intelectual.\n\nEl cÃ³digo fuente de cÃ³digo abierto que alimenta esta aplicaciÃ³n estÃ¡ disponible bajo los tÃ©rminos de su respectiva licencia.",
          },
          {
            heading: "4. LimitaciÃ³n de Responsabilidad",
            content: "BizDays Global no se hace responsable de:\n\nâ€¢ Errores o inexactitudes en los resultados calculados.\nâ€¢ DaÃ±os derivados del uso de la informaciÃ³n proporcionada.\nâ€¢ Contenidos de terceros accedidos a travÃ©s de enlaces en este sitio web.\nâ€¢ Interrupciones del servicio causadas por problemas tÃ©cnicos ajenos a nuestro control.",
          },
          {
            heading: "5. Ley Aplicable y JurisdicciÃ³n",
            content: "El presente aviso legal se rige por la legislaciÃ³n de Albacete, España. Para cualquier controversia, las partes se someten a los juzgados y tribunales de Albacete, España, salvo que la normativa de protecciÃ³n al consumidor disponga otra cosa.",
          },
        ],
      },
    },
    contact: {
      title: "Contacto",
      description: "Ponte en contacto con el equipo de BizDays Global. Nos encantarÃ­a saber de ti.",
      subtitle: "Â¿Tienes alguna pregunta, sugerencia o consulta comercial? Nos encantarÃ­a saber de ti.",
      form: {
        name: "Tu Nombre",
        email: "Tu Email",
        subject: "Asunto",
        message: "Mensaje",
        submit: "Enviar Mensaje",
        successMessage: "Â¡Gracias! Tu mensaje ha sido enviado. Te responderemos en un plazo de 48 horas.",
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
