import { Lang } from '@/i18n/translations';

export interface Bilingual {
  en: string;
  fr: string;
}

export interface ServiceDetail {
  slug: string;
  icon: string;
  category: Bilingual;
  name: Bilingual;
  h1: Bilingual;
  tagline: Bilingual;
  description: Bilingual;
  benefits: Bilingual[];
  process: { title: Bilingual; desc: Bilingual }[];
  faqs: { question: Bilingual; answer: Bilingual }[];
  relatedServices: string[];
  relatedProducts: string[];
  seo: {
    title: Bilingual;
    description: Bilingual;
  };
}

export const services: ServiceDetail[] = [
  {
    slug: 'website-design-development',
    icon: 'Globe',
    category: { en: 'Digital Presence', fr: 'Présence Digitale' },
    name: { en: 'Website Design & Development', fr: 'Création de Sites Web' },
    h1: {
      en: 'Website Design & Development for Businesses That Want to Be Taken Seriously',
      fr: 'Création de Sites Web pour Entreprises Qui Veulent Être Prises au Sérieux',
    },
    tagline: {
      en: 'Fast, conversion-focused websites that turn visitors into clients.',
      fr: 'Des sites web rapides et orientés conversion qui transforment vos visiteurs en clients.',
    },
    description: {
      en: 'Your website is often the first impression a potential client has of your business. We design and build websites that load fast, rank well on Google, and are engineered to convert visitors into qualified leads — not just look pretty. Every site is custom-built, responsive, and optimized for the markets you serve.',
      fr: 'Votre site web est souvent la première impression qu\'un client potentiel a de votre entreprise. Nous concevons et développons des sites web qui se chargent rapidement, bien référencés sur Google, et conçus pour convertir les visiteurs en prospects qualifiés — pas seulement beaux. Chaque site est sur-mesure, responsive et optimisé pour les marchés que vous servez.',
    },
    benefits: [
      { en: 'Custom design that reflects your brand — no templates', fr: 'Design sur-mesure qui reflète votre marque — sans template' },
      { en: 'Built for speed: optimized for Core Web Vitals and SEO', fr: 'Conçu pour la vitesse : optimisé pour les Core Web Vitals et le SEO' },
      { en: 'Conversion-focused architecture that guides visitors to act', fr: 'Architecture orientée conversion qui guide les visiteurs vers l\'action' },
      { en: 'Fully responsive across mobile, tablet, and desktop', fr: 'Entièrement responsive sur mobile, tablette et desktop' },
      { en: 'Easy-to-manage content with a modern CMS', fr: 'Contenu facile à gérer avec un CMS moderne' },
    ],
    process: [
      { title: { en: 'Discovery & Strategy', fr: 'Découverte & Stratégie' }, desc: { en: 'We map your goals, audience, and competitive landscape to define the right structure.', fr: 'Nous cartographions vos objectifs, audience et paysage concurrentiel pour définir la bonne structure.' } },
      { title: { en: 'Design & Prototype', fr: 'Design & Prototypage' }, desc: { en: 'We craft the visual identity and user experience, validated before development.', fr: 'Nous créons l\'identité visuelle et l\'expérience utilisateur, validées avant le développement.' } },
      { title: { en: 'Build & Launch', fr: 'Construction & Lancement' }, desc: { en: 'We develop, test, and deploy your site with performance and SEO built in.', fr: 'Nous développons, testons et déployons votre site avec performance et SEO intégrés.' } },
    ],
    faqs: [
      { question: { en: 'How long does a custom website take?', fr: 'Combien de temps prend un site web sur-mesure ?' }, answer: { en: 'A typical business website takes 3–6 weeks depending on scope. Larger platforms with custom functionality can take 8–12 weeks. We provide a clear timeline after our discovery call.', fr: 'Un site web professionnel prend généralement 3 à 6 semaines selon la portée. Les plateformes plus importantes avec des fonctionnalités sur-mesure peuvent prendre 8 à 12 semaines. Nous fournissons un calendrier clair après notre appel de découverte.' } },
      { question: { en: 'Will my website rank on Google?', fr: 'Mon site sera-t-il bien référencé sur Google ?' }, answer: { en: 'Every site we build includes SEO foundations: clean code, fast loading, structured data, and optimized meta tags. For competitive keywords, we recommend our ongoing SEO & Digital Growth Strategy service.', fr: 'Chaque site que nous construisons inclut les fondations SEO : code propre, chargement rapide, données structurées et balises méta optimisées. Pour des mots-clés compétitifs, nous recommandons notre service SEO & Stratégie de Croissance Digitale.' } },
      { question: { en: 'Can I update the content myself?', fr: 'Puis-je mettre à jour le contenu moi-même ?' }, answer: { en: 'Yes. We build with a modern CMS so you can edit text, images, and pages without needing a developer.', fr: 'Oui. Nous construisons avec un CMS moderne pour que vous puissiez éditer textes, images et pages sans avoir besoin d\'un développeur.' } },
    ],
    relatedServices: ['seo-digital-growth-strategy', 'brand-strategy-digital-presence'],
    relatedProducts: ['liafrik'],
    seo: {
      title: { en: 'Website Design & Development | LIYAH GROUP', fr: 'Création de Sites Web | LIYAH GROUP' },
      description: { en: 'Custom, fast, conversion-focused websites built for businesses in Africa and the UAE. SEO-ready, responsive, and designed to turn visitors into clients.', fr: 'Sites web sur-mesure, rapides et orientés conversion pour les entreprises en Afrique et aux EAU. Prêts pour le SEO, responsive et conçus pour transformer les visiteurs en clients.' },
    },
  },
  {
    slug: 'ecommerce-shopify',
    icon: 'ShoppingBag',
    category: { en: 'E-Commerce & Revenue', fr: 'E-Commerce & Revenus' },
    name: { en: 'E-Commerce & Shopify', fr: 'E-Commerce & Shopify' },
    h1: {
      en: 'E-Commerce & Shopify Stores Built to Convert and Scale',
      fr: 'Boutiques E-Commerce & Shopify Conçues pour Convertir et Passer à l\'Échelle',
    },
    tagline: {
      en: 'Online stores that generate revenue from day one — not just look good.',
      fr: 'Des boutiques en ligne qui génèrent des revenus dès le premier jour — pas seulement belles.',
    },
    description: {
      en: 'We build e-commerce stores on Shopify and custom platforms that are engineered for conversion. From product architecture to payment integration, logistics, and automation, every element is designed to turn browsers into buyers and buyers into repeat customers. We work with local payment methods across African and Gulf markets.',
      fr: 'Nous construisons des boutiques e-commerce sur Shopify et des plateformes sur-mesure conçues pour la conversion. De l\'architecture produit à l\'intégration des paiements, la logistique et l\'automatisation, chaque élément est conçu pour transformer les visiteurs en acheteurs et les acheteurs en clients fidèles. Nous travaillons avec les méthodes de paiement locales des marchés africains et du Golfe.',
    },
    benefits: [
      { en: 'Shopify and custom e-commerce expertise', fr: 'Expertise Shopify et e-commerce sur-mesure' },
      { en: 'Local payment integrations for African and Gulf markets', fr: 'Intégrations de paiement locales pour les marchés africains et du Golfe' },
      { en: 'Conversion-optimized product pages and checkout flows', fr: 'Pages produit et processus de paiement optimisés pour la conversion' },
      { en: 'Inventory, logistics, and fulfillment automation', fr: 'Automatisation de l\'inventaire, de la logistique et de l\'expédition' },
      { en: 'Scalable architecture that grows with your catalog', fr: 'Architecture évolutive qui grandit avec votre catalogue' },
    ],
    process: [
      { title: { en: 'Strategy & Architecture', fr: 'Stratégie & Architecture' }, desc: { en: 'We define your product catalog, pricing strategy, and conversion funnel.', fr: 'Nous définissons votre catalogue produit, stratégie de prix et tunnel de conversion.' } },
      { title: { en: 'Design & Build', fr: 'Design & Construction' }, desc: { en: 'We design and develop your store with payments, shipping, and automation.', fr: 'Nous concevons et développons votre boutique avec paiements, livraison et automatisation.' } },
      { title: { en: 'Launch & Optimize', fr: 'Lancement & Optimisation' }, desc: { en: 'We launch, track performance, and continuously optimize for revenue growth.', fr: 'Nous lançons, suivons les performances et optimisons en continu pour la croissance des revenus.' } },
    ],
    faqs: [
      { question: { en: 'Do you work with local payment methods in Africa?', fr: 'Travaillez-vous avec les méthodes de paiement locales en Afrique ?' }, answer: { en: 'Yes. We integrate mobile money, local cards, and regional payment gateways alongside international options like Stripe and PayPal.', fr: 'Oui. Nous intégrons le mobile money, les cartes locales et les passerelles de paiement régionales aux côtés d\'options internationales comme Stripe et PayPal.' } },
      { question: { en: 'Shopify or custom — which should I choose?', fr: 'Shopify ou sur-mesure — lequel choisir ?' }, answer: { en: 'Shopify is ideal for most stores and gets you to market fast. A custom platform makes sense for complex catalogs, multi-vendor marketplaces, or unique business logic. We help you decide during the discovery call.', fr: 'Shopify est idéal pour la plupart des boutiques et vous permet d\'aller vite. Une plateforme sur-mesure a du sens pour les catalogues complexes, les marketplaces multi-vendeurs ou la logique métier unique. Nous vous aidons à décider lors de l\'appel de découverte.' } },
      { question: { en: 'Can you migrate my existing store?', fr: 'Pouvez-vous migrer ma boutique existante ?' }, answer: { en: 'Yes. We handle migrations from WooCommerce, Magento, Wix, and other platforms to Shopify or custom builds — preserving your data, SEO, and customer history.', fr: 'Oui. Nous gérons les migrations de WooCommerce, Magento, Wix et autres plateformes vers Shopify ou des solutions sur-mesure — en préservant vos données, votre SEO et l\'historique client.' } },
    ],
    relatedServices: ['custom-platforms-mobile-apps', 'seo-digital-growth-strategy'],
    relatedProducts: ['liafrik'],
    seo: {
      title: { en: 'E-Commerce & Shopify Development | LIYAH GROUP', fr: 'Développement E-Commerce & Shopify | LIYAH GROUP' },
      description: { en: 'Conversion-focused e-commerce stores on Shopify and custom platforms. Local payments, logistics automation, and scalable architecture for Africa and the UAE.', fr: 'Boutiques e-commerce orientées conversion sur Shopify et plateformes sur-mesure. Paiements locaux, automatisation logistique et architecture évolutive pour l\'Afrique et les EAU.' },
    },
  },
  {
    slug: 'custom-platforms-mobile-apps',
    icon: 'Smartphone',
    category: { en: 'Custom Platforms', fr: 'Plateformes Sur-mesure' },
    name: { en: 'Custom Platforms & Mobile Apps', fr: 'Plateformes Sur-mesure & Apps Mobiles' },
    h1: {
      en: 'Custom Platforms & Mobile Apps for Businesses That Need More Than a Website',
      fr: 'Plateformes Sur-mesure & Apps Mobiles pour Entreprises Qui Ont Besoin de Plus qu\'un Site Web',
    },
    tagline: {
      en: 'Scalable software built around your business logic — not the other way around.',
      fr: 'Des logiciels évolutifs construits autour de votre logique métier — pas l\'inverse.',
    },
    description: {
      en: 'When off-the-shelf tools aren\'t enough, we build custom platforms and mobile applications tailored to your exact business requirements. From SaaS products to internal business systems, multi-vendor marketplaces to community platforms, we architect and develop software that scales with your operations and integrates seamlessly with your existing tools.',
      fr: 'Quand les outils standards ne suffisent plus, nous construisons des plateformes sur-mesure et des applications mobiles adaptées à vos besoins métier exacts. Des produits SaaS aux systèmes internes, des marketplaces multi-vendeurs aux plateformes communautaires, nous architecturons et développons des logiciels qui évoluent avec vos opérations et s\'intègrent à vos outils existants.',
    },
    benefits: [
      { en: 'Custom architecture built for your specific business logic', fr: 'Architecture sur-mesure construite pour votre logique métier spécifique' },
      { en: 'Native and cross-platform mobile apps (iOS & Android)', fr: 'Apps mobiles natives et cross-platform (iOS & Android)' },
      { en: 'Scalable cloud infrastructure on AWS and modern stacks', fr: 'Infrastructure cloud évolutive sur AWS et stacks modernes' },
      { en: 'API-first design for seamless integrations', fr: 'Design API-first pour des intégrations sans couture' },
      { en: 'Security and performance built in from day one', fr: 'Sécurité et performance intégrées dès le premier jour' },
    ],
    process: [
      { title: { en: 'Architecture & Planning', fr: 'Architecture & Planification' }, desc: { en: 'We define the technical architecture, data models, and integration points.', fr: 'Nous définissons l\'architecture technique, les modèles de données et les points d\'intégration.' } },
      { title: { en: 'Development & Testing', fr: 'Développement & Tests' }, desc: { en: 'We build in iterative sprints with continuous testing and feedback loops.', fr: 'Nous construisons par sprints itératifs avec tests continus et boucles de feedback.' } },
      { title: { en: 'Deploy & Scale', fr: 'Déploiement & Passage à l\'échelle' }, desc: { en: 'We deploy to cloud infrastructure and monitor for performance and scale.', fr: 'Nous déployons sur l\'infrastructure cloud et surveillons les performances et l\'échelle.' } },
    ],
    faqs: [
      { question: { en: 'What technologies do you use?', fr: 'Quelles technologies utilisez-vous ?' }, answer: { en: 'We use modern stacks: React, Next.js, Node.js, React Native, PostgreSQL, AWS, and cloud-native tools. The exact stack depends on your requirements.', fr: 'Nous utilisons des stacks modernes : React, Next.js, Node.js, React Native, PostgreSQL, AWS et des outils cloud-native. La stack exacte dépend de vos besoins.' } },
      { question: { en: 'Do you build both web and mobile?', fr: 'Construisez-vous à la fois web et mobile ?' }, answer: { en: 'Yes. We build web platforms, native mobile apps, and cross-platform apps that share a single codebase for iOS and Android.', fr: 'Oui. Nous construisons des plateformes web, des apps mobiles natives et des apps cross-platform qui partagent une base de code unique pour iOS et Android.' } },
      { question: { en: 'Can you integrate with my existing systems?', fr: 'Pouvez-vous vous intégrer à mes systèmes existants ?' }, answer: { en: 'Yes. We design API-first architectures that connect with your CRM, ERP, payment gateways, and any third-party tools you use.', fr: 'Oui. Nous concevons des architectures API-first qui se connectent à votre CRM, ERP, passerelles de paiement et tout outil tiers que vous utilisez.' } },
    ],
    relatedServices: ['business-automation-crm', 'website-design-development'],
    relatedProducts: ['liafrik'],
    seo: {
      title: { en: 'Custom Platforms & Mobile Apps | LIYAH GROUP', fr: 'Plateformes Sur-mesure & Apps Mobiles | LIYAH GROUP' },
      description: { en: 'Custom software, SaaS platforms, and mobile apps built to scale. API-first, cloud-native, and engineered for your specific business logic.', fr: 'Logiciels sur-mesure, plateformes SaaS et apps mobiles conçus pour évoluer. API-first, cloud-native et conçus pour votre logique métier spécifique.' },
    },
  },
  {
    slug: 'business-automation-crm',
    icon: 'Zap',
    category: { en: 'Growth & Automation', fr: 'Croissance & Automatisation' },
    name: { en: 'Business Automation & CRM', fr: 'Automatisation Business & CRM' },
    h1: {
      en: 'Business Automation & CRM Systems That Save You Hours Every Week',
      fr: 'Systèmes d\'Automatisation Business & CRM Qui Vous Économisent des Heures Chaque Semaine',
    },
    tagline: {
      en: 'Automate repetitive work. Centralize your customer data. Focus on growth.',
      fr: 'Automatisez le travail répétitif. Centralisez vos données clients. Concentrez-vous sur la croissance.',
    },
    description: {
      en: 'Manual processes slow down growth. We implement CRM systems and business automation that eliminate repetitive tasks, centralize your customer data, and give you real-time visibility into your operations. From lead capture to invoicing to onboarding, we design workflows that run themselves — so your team can focus on high-value work.',
      fr: 'Les processus manuels ralentissent la croissance. Nous implémentons des systèmes CRM et de l\'automatisation business qui éliminent les tâches répétitives, centralisent vos données clients et vous donnent une visibilité en temps réel sur vos opérations. De la capture de leads à la facturation en passant par l\'onboarding, nous concevons des workflows qui tournent seuls — pour que votre équipe se concentre sur le travail à forte valeur.',
    },
    benefits: [
      { en: 'Centralized CRM that tracks every lead and customer interaction', fr: 'CRM centralisé qui suit chaque lead et interaction client' },
      { en: 'Automated workflows for lead capture, follow-ups, and onboarding', fr: 'Workflows automatisés pour la capture de leads, les relances et l\'onboarding' },
      { en: 'Integration with your existing tools and payment systems', fr: 'Intégration avec vos outils et systèmes de paiement existants' },
      { en: 'Real-time dashboards and reporting', fr: 'Tableaux de bord et reporting en temps réel' },
      { en: 'Reduced manual work and human error', fr: 'Travail manuel et erreurs humaines réduits' },
    ],
    process: [
      { title: { en: 'Audit & Map', fr: 'Audit & Cartographie' }, desc: { en: 'We map your current processes and identify automation opportunities.', fr: 'Nous cartographions vos processus actuels et identifions les opportunités d\'automatisation.' } },
      { title: { en: 'Design & Implement', fr: 'Design & Implémentation' }, desc: { en: 'We design and implement your CRM, workflows, and integrations.', fr: 'Nous concevons et implémentons votre CRM, vos workflows et vos intégrations.' } },
      { title: { en: 'Train & Optimize', fr: 'Formation & Optimisation' }, desc: { en: 'We train your team and continuously optimize the workflows.', fr: 'Nous formons votre équipe et optimisons en continu les workflows.' } },
    ],
    faqs: [
      { question: { en: 'Which CRM systems do you work with?', fr: 'Avec quels systèmes CRM travaillez-vous ?' }, answer: { en: 'We work with HubSpot, Salesforce, and custom CRM builds — including the CRM module of our LiAfrik platform. We recommend the best fit for your size and budget.', fr: 'Nous travaillons avec HubSpot, Salesforce et des CRM sur-mesure — y compris le module CRM de notre plateforme LiAfrik. Nous recommandons la meilleure option selon votre taille et votre budget.' } },
      { question: { en: 'How long until I see results?', fr: 'Combien de temps avant de voir des résultats ?' }, answer: { en: 'Most automation projects show measurable time savings within 2–4 weeks of implementation. Full CRM rollout typically takes 4–8 weeks depending on complexity.', fr: 'La plupart des projets d\'automatisation montrent des économies de temps mesurables en 2 à 4 semaines après l\'implémentation. Le déploiement complet d\'un CRM prend généralement 4 à 8 semaines selon la complexité.' } },
    ],
    relatedServices: ['custom-platforms-mobile-apps', 'seo-digital-growth-strategy'],
    relatedProducts: ['liafrik'],
    seo: {
      title: { en: 'Business Automation & CRM | LIYAH GROUP', fr: 'Automatisation Business & CRM | LIYAH GROUP' },
      description: { en: 'CRM systems and business automation that eliminate repetitive work, centralize customer data, and give you real-time operational visibility.', fr: 'Systèmes CRM et automatisation business qui éliminent le travail répétitif, centralisent les données clients et vous donnent une visibilité opérationnelle en temps réel.' },
    },
  },
  {
    slug: 'seo-digital-growth-strategy',
    icon: 'TrendingUp',
    category: { en: 'Growth & Automation', fr: 'Croissance & Automatisation' },
    name: { en: 'SEO & Digital Growth Strategy', fr: 'SEO & Stratégie de Croissance Digitale' },
    h1: {
      en: 'SEO & Digital Growth Strategy That Brings You Qualified Traffic',
      fr: 'SEO & Stratégie de Croissance Digitale Qui Vous Apporte du Trafic Qualifié',
    },
    tagline: {
      en: 'Rank higher. Attract the right audience. Convert traffic into revenue.',
      fr: 'Mieux se positionner. Attirer la bonne audience. Convertir le trafic en revenus.',
    },
    description: {
      en: 'Traffic without revenue is vanity. We build data-driven SEO and growth strategies that attract qualified visitors — people who actually need what you offer. From technical SEO foundations to content strategy, local SEO for African and Gulf markets, and conversion optimization, we align every channel toward measurable business results.',
      fr: 'Le trafic sans revenu n\'est que vanité. Nous construisons des stratégies SEO et de croissance data-driven qui attirent des visiteurs qualifiés — des personnes qui ont réellement besoin de ce que vous offrez. Des fondations SEO techniques à la stratégie de contenu, au SEO local pour les marchés africains et du Golfe, et à l\'optimisation des conversions, nous alignons chaque canal vers des résultats business mesurables.',
    },
    benefits: [
      { en: 'Technical SEO audit and Core Web Vitals optimization', fr: 'Audit SEO technique et optimisation des Core Web Vitals' },
      { en: 'Local SEO for African and Gulf markets', fr: 'SEO local pour les marchés africains et du Golfe' },
      { en: 'Content strategy aligned with your sales funnel', fr: 'Stratégie de contenu alignée avec votre tunnel de vente' },
      { en: 'Conversion rate optimization for landing pages', fr: 'Optimisation du taux de conversion pour les pages de destination' },
      { en: 'Monthly reporting with clear, business-focused metrics', fr: 'Reporting mensuel avec des métriques claires et orientées business' },
    ],
    process: [
      { title: { en: 'Audit & Research', fr: 'Audit & Recherche' }, desc: { en: 'We audit your current SEO, analyze competitors, and identify keyword opportunities.', fr: 'Nous auditons votre SEO actuel, analysons les concurrents et identifions les opportunités de mots-clés.' } },
      { title: { en: 'Strategy & Implementation', fr: 'Stratégie & Implémentation' }, desc: { en: 'We build and implement the SEO and content strategy across your site.', fr: 'Nous construisons et implémentons la stratégie SEO et de contenu sur votre site.' } },
      { title: { en: 'Measure & Scale', fr: 'Mesure & Passage à l\'échelle' }, desc: { en: 'We track results, report monthly, and scale what works.', fr: 'Nous suivons les résultats, reportons mensuellement et passons à l\'échelle ce qui fonctionne.' } },
    ],
    faqs: [
      { question: { en: 'How long until I see SEO results?', fr: 'Combien de temps avant de voir des résultats SEO ?' }, answer: { en: 'SEO is a long-term strategy. You typically see initial improvements in 2–3 months and significant traffic growth in 4–6 months. Local SEO can show results faster.', fr: 'Le SEO est une stratégie de long terme. Vous voyez généralement des améliorations initiales en 2 à 3 mois et une croissance significative du trafic en 4 à 6 mois. Le SEO local peut montrer des résultats plus rapidement.' } },
      { question: { en: 'Do you do local SEO for specific countries?', fr: 'Faites-vous du SEO local pour des pays spécifiques ?' }, answer: { en: 'Yes. We build local SEO strategies for Francophone Africa, Anglophone Africa, and the UAE — including country-specific keyword research and content.', fr: 'Oui. Nous construisons des stratégies SEO locales pour l\'Afrique francophone, l\'Afrique anglophone et les EAU — y compris la recherche de mots-clés et le contenu par pays.' } },
    ],
    relatedServices: ['website-design-development', 'brand-strategy-digital-presence'],
    relatedProducts: ['liafrik'],
    seo: {
      title: { en: 'SEO & Digital Growth Strategy | LIYAH GROUP', fr: 'SEO & Stratégie de Croissance Digitale | LIYAH GROUP' },
      description: { en: 'Data-driven SEO and growth strategy for African and Gulf markets. Technical SEO, local SEO, content strategy, and conversion optimization.', fr: 'Stratégie SEO et de croissance data-driven pour les marchés africains et du Golfe. SEO technique, SEO local, stratégie de contenu et optimisation des conversions.' },
    },
  },
  {
    slug: 'brand-strategy-digital-presence',
    icon: 'Megaphone',
    category: { en: 'Digital Presence', fr: 'Présence Digitale' },
    name: { en: 'Brand Strategy & Digital Presence', fr: 'Stratégie de Marque & Présence Digitale' },
    h1: {
      en: 'Brand Strategy & Digital Presence That Makes Your Business Unforgettable',
      fr: 'Stratégie de Marque & Présence Digitale Qui Rend Votre Entreprise Inoubliable',
    },
    tagline: {
      en: 'A brand that commands attention. A presence that builds trust.',
      fr: 'Une marque qui capte l\'attention. Une présence qui inspire confiance.',
    },
    description: {
      en: 'A strong brand is more than a logo. We build brand strategies and digital presences that make your business instantly recognizable and trusted. From visual identity to messaging, social positioning to content strategy, we create a cohesive brand experience that resonates with your target audience across every touchpoint.',
      fr: 'Une marque forte, c\'est plus qu\'un logo. Nous construisons des stratégies de marque et des présences digitales qui rendent votre entreprise immédiatement reconnaissable et digne de confiance. De l\'identité visuelle au messaging, du positionnement social à la stratégie de contenu, nous créons une expérience de marque cohérente qui résonne avec votre audience cible sur chaque point de contact.',
    },
    benefits: [
      { en: 'Brand identity that stands out in your market', fr: 'Identité de marque qui se démarque sur votre marché' },
      { en: 'Cohhesive messaging across all channels', fr: 'Messaging cohérent sur tous les canaux' },
      { en: 'Social media strategy aligned with your business goals', fr: 'Stratégie de réseaux sociaux alignée avec vos objectifs business' },
      { en: 'Content that builds authority and trust', fr: 'Contenu qui construit l\'autorité et la confiance' },
      { en: 'A digital presence that converts visitors into followers and clients', fr: 'Une présence digitale qui convertit les visiteurs en abonnés et clients' },
    ],
    process: [
      { title: { en: 'Brand Discovery', fr: 'Découverte de Marque' }, desc: { en: 'We define your brand positioning, values, and target audience.', fr: 'Nous définissons votre positionnement de marque, vos valeurs et votre audience cible.' } },
      { title: { en: 'Identity & Guidelines', fr: 'Identité & Lignes Directrices' }, desc: { en: 'We craft your visual identity, voice, and brand guidelines.', fr: 'Nous créons votre identité visuelle, votre voix et vos lignes directrices de marque.' } },
      { title: { en: 'Presence & Content', fr: 'Présence & Contenu' }, desc: { en: 'We deploy your brand across web, social, and content channels.', fr: 'Nous déployons votre marque sur le web, les réseaux sociaux et les canaux de contenu.' } },
    ],
    faqs: [
      { question: { en: 'Do you create logos and visual identities?', fr: 'Créez-vous des logos et des identités visuelles ?' }, answer: { en: 'Yes. We design complete visual identities including logos, color systems, typography, and brand guidelines.', fr: 'Oui. Nous concevons des identités visuelles complètes incluant logos, systèmes de couleurs, typographie et lignes directrices de marque.' } },
      { question: { en: 'Can you manage my social media?', fr: 'Pouvez-vous gérer mes réseaux sociaux ?' }, answer: { en: 'We provide strategy and content frameworks. For ongoing management, we recommend pairing with our growth strategy service for monthly content and community management.', fr: 'Nous fournissons la stratégie et le framework de contenu. Pour la gestion continue, nous recommandons de coupler avec notre service de stratégie de croissance pour le contenu mensuel et la gestion de communauté.' } },
    ],
    relatedServices: ['website-design-development', 'seo-digital-growth-strategy'],
    relatedProducts: ['liafrik'],
    seo: {
      title: { en: 'Brand Strategy & Digital Presence | LIYAH GROUP', fr: 'Stratégie de Marque & Présence Digitale | LIYAH GROUP' },
      description: { en: 'Brand strategy, visual identity, and digital presence design that makes your business recognizable and trusted across every touchpoint.', fr: 'Stratégie de marque, identité visuelle et design de présence digitale qui rendent votre entreprise reconnaissable et digne de confiance sur chaque point de contact.' },
    },
  },
];

export function getServiceBySlug(slug: string): ServiceDetail | undefined {
  return services.find((s) => s.slug === slug);
}

export function tr(b: Bilingual, lang: Lang): string {
  return lang === 'FR' ? b.fr : b.en;
}
