import { Bilingual, tr } from './services';
import { Lang } from '@/i18n/translations';

export interface SaaSProduct {
  slug: string;
  name: string;
  category: Bilingual;
  valueProposition: Bilingual;
  mainBenefit: Bilingual;
  icon: string;
  accent: string;
  mockupType: string;
  isModule: boolean;
  parentProduct?: string;
  audience: Bilingual;
  problemSolved: Bilingual;
  features: Bilingual[];
  outcomes: Bilingual[];
  howItWorks: { title: Bilingual; desc: Bilingual }[];
  faqs: { question: Bilingual; answer: Bilingual }[];
  seo: {
    title: Bilingual;
    description: Bilingual;
  };
}

export const saasProducts: SaaSProduct[] = [
  {
    slug: 'liafrik',
    name: 'LiAfrik',
    category: { en: 'All-in-One Business Platform', fr: 'Plateforme Business Tout-en-Un' },
    valueProposition: {
      en: 'The unified African business operating system — all your modules in one platform.',
      fr: 'Le système d\'exploitation business africain unifié — tous vos modules sur une seule plateforme.',
    },
    mainBenefit: {
      en: 'Run your entire business from one platform — activate only the modules you need.',
      fr: 'Gérez toute votre entreprise depuis une seule plateforme — activez uniquement les modules dont vous avez besoin.',
    },
    icon: 'Boxes',
    accent: 'from-secondary-600 to-accent-500',
    mockupType: 'dashboard',
    isModule: false,
    audience: {
      en: 'SMEs, startups, and growing businesses across Africa and the UAE that want one system instead of many disconnected tools.',
      fr: 'PME, startups et entreprises en croissance en Afrique et aux EAU qui veulent un seul système au lieu de nombreux outils déconnectés.',
    },
    problemSolved: {
      en: 'African businesses juggle 5–10 disconnected tools for sales, HR, accounting, and operations. Data is scattered, costs pile up, and nothing talks to each other.',
      fr: 'Les entreprises africaines jonglent avec 5 à 10 outils déconnectés pour les ventes, les RH, la comptabilité et les opérations. Les données sont éparpillées, les coûts s\'accumulent, et rien ne communique.',
    },
    features: [
      { en: 'Unified dashboard across all modules', fr: 'Tableau de bord unifié sur tous les modules' },
      { en: 'Modular activation — turn on what you need', fr: 'Activation modulaire — activez ce dont vous avez besoin' },
      { en: 'Shared data layer — CRM, POS, HR, accounting all connected', fr: 'Couche de données partagée — CRM, POS, RH, comptabilité connectés' },
      { en: 'Bilingual French/English by default', fr: 'Bilingue français/anglais par défaut' },
      { en: 'Local payment integrations (mobile money, cards)', fr: 'Intégrations de paiement locales (mobile money, cartes)' },
      { en: 'API-first for custom integrations', fr: 'API-first pour des intégrations sur-mesure' },
      { en: 'Cloud-based, accessible from any device', fr: 'Basé dans le cloud, accessible depuis tout appareil' },
      { en: 'Role-based access for teams', fr: 'Accès basé sur les rôles pour les équipes' },
    ],
    outcomes: [
      { en: 'One unified system instead of 5–10 disconnected tools', fr: 'Un système unifié au lieu de 5 à 10 outils déconnectés' },
      { en: 'Lower software costs through modular activation', fr: 'Coûts logiciels réduits grâce à l\'activation modulaire' },
      { en: 'Real-time visibility across your entire business', fr: 'Visibilité en temps réel sur toute votre entreprise' },
      { en: 'Scalable architecture that grows with you', fr: 'Architecture évolutive qui grandit avec vous' },
    ],
    howItWorks: [
      { title: { en: 'Choose Your Modules', fr: 'Choisissez Vos Modules' }, desc: { en: 'Select only the modules your business needs today. Add more as you grow.', fr: 'Sélectionnez uniquement les modules dont votre entreprise a besoin aujourd\'hui. Ajoutez-en au fur et à mesure de votre croissance.' } },
      { title: { en: 'We Configure & Onboard', fr: 'Nous Configurons & Accompagnons' }, desc: { en: 'Our team configures your platform, migrates your data, and trains your team.', fr: 'Notre équipe configure votre plateforme, migre vos données et forme votre équipe.' } },
      { title: { en: 'You Run & Scale', fr: 'Vous Gérez & Évoluez' }, desc: { en: 'Manage your entire business from one dashboard. Activate new modules anytime.', fr: 'Gérez toute votre entreprise depuis un seul tableau de bord. Activez de nouveaux modules à tout moment.' } },
    ],
    faqs: [
      { question: { en: 'Do I have to buy all modules at once?', fr: 'Dois-je acheter tous les modules en même temps ?' }, answer: { en: 'No. You activate only the modules you need today and add more as your business grows. This keeps your costs aligned with your stage.', fr: 'Non. Vous activez uniquement les modules dont vous avez besoin aujourd\'hui et en ajoutez au fur et à mesure que votre entreprise grandit. Cela aligne vos coûts sur votre stade de développement.' } },
      { question: { en: 'Is LiAfrik available in French and English?', fr: 'LiAfrik est-il disponible en français et en anglais ?' }, answer: { en: 'Yes. LiAfrik is fully bilingual and designed for Francophone and Anglophone African markets, as well as the UAE.', fr: 'Oui. LiAfrik est entièrement bilingue et conçu pour les marchés africains francophones et anglophones, ainsi que pour les EAU.' } },
      { question: { en: 'Can LiAfrik integrate with my existing tools?', fr: 'LiAfrik peut-il s\'intégrer à mes outils existants ?' }, answer: { en: 'Yes. LiAfrik is API-first and connects with popular payment gateways, accounting tools, and third-party services.', fr: 'Oui. LiAfrik est API-first et se connecte aux passerelles de paiement populaires, outils comptables et services tiers.' } },
      { question: { en: 'How is LiAfrik different from using separate SaaS tools?', fr: 'En quoi LiAfrik est-il différent de l\'utilisation d\'outils SaaS séparés ?' }, answer: { en: 'LiAfrik shares a single data layer across all modules. Your CRM talks to your POS, your POS talks to your accounting, and your HR talks to your payroll — without manual data entry or integrations to maintain.', fr: 'LiAfrik partage une couche de données unique sur tous les modules. Votre CRM communique avec votre POS, votre POS avec votre comptabilité, et vos RH avec votre paie — sans saisie manuelle ni intégrations à maintenir.' } },
    ],
    seo: {
      title: { en: 'LiAfrik — All-in-One Modular Business Platform | LIYAH GROUP', fr: 'LiAfrik — Plateforme Business Modulaire Tout-en-Un | LIYAH GROUP' },
      description: { en: 'LiAfrik is a unified business operating system for Africa and the world. CRM, POS, HR, Health, Accounting, E-commerce, Education, Real Estate — 11 modules on one scalable platform.', fr: 'LiAfrik est un système d\'exploitation business unifié pour l\'Afrique et le monde. CRM, POS, RH, Santé, Comptabilité, E-commerce, Éducation, Immobilier — 11 modules sur une plateforme évolutive.' },
    },
  },
  {
    slug: 'liafrik-digital-skills',
    name: 'Digital Skills',
    category: { en: 'Training & Learning', fr: 'Formation & Apprentissage' },
    valueProposition: {
      en: 'Online learning and professional training platform for African talent.',
      fr: 'Plateforme d\'apprentissage en ligne et de formation professionnelle pour les talents africains.',
    },
    mainBenefit: {
      en: 'Upskill your team and community with structured courses, certifications, and progress tracking.',
      fr: 'Développez les compétences de votre équipe et communauté avec des cours structurés, des certifications et un suivi de progression.',
    },
    icon: 'GraduationCap',
    accent: 'from-violet-500 to-purple-600',
    mockupType: 'learning',
    isModule: true,
    parentProduct: 'liafrik',
    audience: {
      en: 'Businesses, schools, training centers, and individuals who need structured online learning with certification.',
      fr: 'Entreprises, écoles, centres de formation et particuliers qui ont besoin d\'un apprentissage en ligne structuré avec certification.',
    },
    problemSolved: {
      en: 'Professional training in Africa is often fragmented, untracked, and hard to scale. Businesses cannot measure if their teams are actually learning.',
      fr: 'La formation professionnelle en Afrique est souvent fragmentée, non suivie et difficile à passer à l\'échelle. Les entreprises ne peuvent pas mesurer si leurs équipes apprennent réellement.',
    },
    features: [
      { en: 'Course builder with video, text, and quizzes', fr: 'Créateur de cours avec vidéo, texte et quiz' },
      { en: 'Certification and completion tracking', fr: 'Certification et suivi de complétion' },
      { en: 'Student progress dashboards', fr: 'Tableaux de bord de progression des étudiants' },
      { en: 'Enrollment and payment management', fr: 'Gestion des inscriptions et paiements' },
      { en: 'Bilingual course content support', fr: 'Support de contenu de cours bilingue' },
    ],
    outcomes: [
      { en: 'Measurable skills development across your team', fr: 'Développement mesurable des compétences de votre équipe' },
      { en: 'Certified, trackable training programs', fr: 'Programmes de formation certifiés et traçables' },
      { en: 'Reduced training costs through online delivery', fr: 'Coûts de formation réduits grâce à la livraison en ligne' },
    ],
    howItWorks: [
      { title: { en: 'Create Courses', fr: 'Créez les Cours' }, desc: { en: 'Build courses with video lessons, quizzes, and downloadable resources.', fr: 'Créez des cours avec des leçons vidéo, des quiz et des ressources téléchargeables.' } },
      { title: { en: 'Enroll Learners', fr: 'Inscrivez les Apprenants' }, desc: { en: 'Invite students, manage enrollments, and process payments.', fr: 'Invitez les étudiants, gérez les inscriptions et traitez les paiements.' } },
      { title: { en: 'Track & Certify', fr: 'Suivez & Certifiez' }, desc: { en: 'Monitor progress, issue certificates, and measure learning outcomes.', fr: 'Suivez la progression, délivrez les certificats et mesurez les résultats d\'apprentissage.' } },
    ],
    faqs: [
      { question: { en: 'Can I sell my courses through Digital Skills?', fr: 'Puis-je vendre mes cours via Digital Skills ?' }, answer: { en: 'Yes. You can charge for courses with integrated payment processing including mobile money.', fr: 'Oui. Vous pouvez facturer les cours avec un traitement de paiement intégré incluant le mobile money.' } },
      { question: { en: 'Does it connect to Klasoo?', fr: 'Se connecte-t-il à Klasoo ?' }, answer: { en: 'Yes. Digital Skills is part of the LiAfrik ecosystem and shares data with Klasoo for school management.', fr: 'Oui. Digital Skills fait partie de l\'écosystème LiAfrik et partage les données avec Klasoo pour la gestion scolaire.' } },
    ],
    seo: {
      title: { en: 'Digital Skills — Online Learning Platform | LiAfrik by LIYAH GROUP', fr: 'Digital Skills — Plateforme d\'Apprentissage en Ligne | LiAfrik par LIYAH GROUP' },
      description: { en: 'Digital Skills by LiAfrik: online learning and professional training with courses, certifications, and progress tracking for businesses and institutions worldwide.', fr: 'Digital Skills par LiAfrik : apprentissage en ligne et formation professionnelle avec cours, certifications et suivi de progression pour les entreprises et institutions du monde entier.' },
    },
  },
  {
    slug: 'liafrik-pos-commerce',
    name: 'POS Commerce',
    category: { en: 'Commerce & Retail', fr: 'Commerce & Retail' },
    valueProposition: {
      en: 'Point-of-sale and commerce management for physical and hybrid retail.',
      fr: 'Point de vente et gestion du commerce pour le retail physique et hybride.',
    },
    mainBenefit: {
      en: 'Process sales, manage inventory, and track your store performance in real time.',
      fr: 'Traitez les ventes, gérez l\'inventaire et suivez les performances de votre magasin en temps réel.',
    },
    icon: 'ScanLine',
    accent: 'from-orange-500 to-amber-600',
    mockupType: 'pos',
    isModule: true,
    parentProduct: 'liafrik',
    audience: {
      en: 'Retail stores, restaurants, pharmacies, and any business with physical point-of-sale operations.',
      fr: 'Magasins de détail, restaurants, pharmacies et toute entreprise avec des opérations de point de vente physique.',
    },
    problemSolved: {
      en: 'Physical retail in Africa relies on manual inventory, disconnected cash registers, and no real-time sales visibility.',
      fr: 'Le retail physique en Afrique repose sur un inventaire manuel, des caisses déconnectées et aucune visibilité des ventes en temps réel.',
    },
    features: [
      { en: 'Fast POS checkout with barcode scanning', fr: 'Encaissement rapide avec scan de codes-barres' },
      { en: 'Real-time inventory management', fr: 'Gestion d\'inventaire en temps réel' },
      { en: 'Multi-store and multi-cashier support', fr: 'Support multi-magasins et multi-caissiers' },
      { en: 'Mobile money and card payment integration', fr: 'Intégration mobile money et paiement par carte' },
      { en: 'Sales reports and daily reconciliation', fr: 'Rapports de ventes et réconciliation quotidienne' },
      { en: 'Offline mode with sync when online', fr: 'Mode hors-ligne avec sync quand en ligne' },
    ],
    outcomes: [
      { en: 'Faster checkout and shorter queues', fr: 'Encaissement plus rapide et files plus courtes' },
      { en: 'Real-time stock visibility across stores', fr: 'Visibilité des stocks en temps réel sur tous les magasins' },
      { en: 'Reduced shrinkage and stockouts', fr: 'Réduction des pertes et ruptures de stock' },
    ],
    howItWorks: [
      { title: { en: 'Set Up Store', fr: 'Configurez le Magasin' }, desc: { en: 'Add products, set prices, and configure your register and payment methods.', fr: 'Ajoutez des produits, fixez les prix et configurez votre caisse et vos méthodes de paiement.' } },
      { title: { en: 'Process Sales', fr: 'Traitez les Ventes' }, desc: { en: 'Scan, checkout, and accept payments — online or offline.', fr: 'Scannez, encaissez et acceptez les paiements — en ligne ou hors-ligne.' } },
      { title: { en: 'Analyze & Restock', fr: 'Analysez & Réapprovisionnez' }, desc: { en: 'Review sales reports, identify trends, and trigger restock alerts.', fr: 'Consultez les rapports de ventes, identifiez les tendances et déclenchez des alertes de réapprovisionnement.' } },
    ],
    faqs: [
      { question: { en: 'Does POS Commerce work offline?', fr: 'POS Commerce fonctionne-t-il hors-ligne ?' }, answer: { en: 'Yes. POS Commerce works offline and syncs all transactions when your connection returns.', fr: 'Oui. POS Commerce fonctionne hors-ligne et synchronise toutes les transactions quand votre connexion revient.' } },
      { question: { en: 'Can I connect it to OS for online sales?', fr: 'Puis-je le connecter à OS pour les ventes en ligne ?' }, answer: { en: 'Yes. POS Commerce and OS share inventory in real time. A sale in-store updates your online stock instantly.', fr: 'Oui. POS Commerce et OS partagent l\'inventaire en temps réel. Une vente en magasin met à jour votre stock en ligne instantanément.' } },
    ],
    seo: {
      title: { en: 'POS Commerce — Point-of-Sale & Retail Management | LiAfrik', fr: 'POS Commerce — Point de Vente & Gestion Retail | LiAfrik' },
      description: { en: 'POS Commerce by LiAfrik: fast point-of-sale checkout, real-time inventory, multi-store management, and mobile money payments for retail businesses in Africa and worldwide.', fr: 'POS Commerce par LiAfrik : encaissement rapide, inventaire en temps réel, gestion multi-magasins et paiements mobile money pour les commerces en Afrique et dans le monde.' },
    },
  },
  {
    slug: 'liafrik-mafo-la-reine',
    name: 'Mafo La Reine',
    category: { en: 'Women\'s Wellness', fr: 'Bien-être des Femmes' },
    valueProposition: {
      en: 'Menstrual-cycle tracking, pregnancy stages, and women\'s wellness platform.',
      fr: 'Suivi du cycle menstruel, étapes de grossesse et plateforme de bien-être des femmes.',
    },
    mainBenefit: {
      en: 'Empower women with personalized health tracking, cycle predictions, and wellness insights.',
      fr: 'Aidez les femmes avec un suivi de santé personnalisé, des prédictions de cycle et des conseils de bien-être.',
    },
    icon: 'HeartPulse',
    accent: 'from-pink-500 to-rose-600',
    mockupType: 'wellness',
    isModule: true,
    parentProduct: 'liafrik',
    audience: {
      en: 'Women across Africa who want to track their menstrual cycle, monitor pregnancy, and manage their wellness journey.',
      fr: 'Les femmes à travers l\'Afrique qui veulent suivre leur cycle menstruel, surveiller leur grossesse et gérer leur parcours de bien-être.',
    },
    problemSolved: {
      en: 'Women\'s health tools are often Western-centric, not bilingual, and don\'t account for African healthcare realities and cultural context.',
      fr: 'Les outils de santé des femmes sont souvent occidentaux, non bilingues, et ne tiennent pas compte des réalités de santé africaines et du contexte culturel.',
    },
    features: [
      { en: 'Menstrual cycle tracking and prediction', fr: 'Suivi et prédiction du cycle menstruel' },
      { en: 'Pregnancy stage tracking with weekly updates', fr: 'Suivi des étapes de grossesse avec mises à jour hebdomadaires' },
      { en: 'Fertility window identification', fr: 'Identification de la fenêtre de fertilité' },
      { en: 'Wellness tips and health articles', fr: 'Conseils de bien-être et articles de santé' },
      { en: 'Reminder and notification system', fr: 'Système de rappels et notifications' },
      { en: 'Privacy-first data protection', fr: 'Protection des données axée sur la confidentialité' },
    ],
    outcomes: [
      { en: 'Better health awareness and informed decisions', fr: 'Meilleure conscience de la santé et décisions éclairées' },
      { en: 'Personalized cycle and pregnancy tracking', fr: 'Suivi personnalisé du cycle et de la grossesse' },
      { en: 'A culturally relevant wellness companion', fr: 'Un compagnon de bien-être culturellement pertinent' },
    ],
    howItWorks: [
      { title: { en: 'Set Up Profile', fr: 'Configurez le Profil' }, desc: { en: 'Enter your cycle data or pregnancy stage to personalize your experience.', fr: 'Saisissez vos données de cycle ou votre étape de grossesse pour personnaliser votre expérience.' } },
      { title: { en: 'Track Daily', fr: 'Suivez Quotidiennement' }, desc: { en: 'Log symptoms, moods, and wellness data with a simple daily check-in.', fr: 'Enregistrez les symptômes, humeurs et données de bien-être avec un check-in quotidien simple.' } },
      { title: { en: 'Get Insights', fr: 'Obtenez des Insights' }, desc: { en: 'Receive predictions, tips, and wellness guidance tailored to your cycle.', fr: 'Recevez des prédictions, conseils et un accompagnement de bien-être adaptés à votre cycle.' } },
    ],
    faqs: [
      { question: { en: 'Is my health data private?', fr: 'Mes données de santé sont-elles privées ?' }, answer: { en: 'Yes. Mafo La Reine is privacy-first. Your health data is encrypted and never shared without your consent.', fr: 'Oui. Mafo La Reine est axée sur la confidentialité. Vos données de santé sont chiffrées et jamais partagées sans votre consentement.' } },
      { question: { en: 'Is it available in French?', fr: 'Est-ce disponible en français ?' }, answer: { en: 'Yes. Mafo La Reine is fully bilingual French and English, designed for African women.', fr: 'Oui. Mafo La Reine est entièrement bilingue français et anglais, conçu pour les femmes africaines.' } },
    ],
    seo: {
      title: { en: 'Mafo La Reine — Women\'s Wellness & Cycle Tracking | LiAfrik', fr: 'Mafo La Reine — Bien-être des Femmes & Suivi de Cycle | LiAfrik' },
      description: { en: 'Mafo La Reine by LiAfrik: menstrual-cycle tracking, pregnancy stages, fertility windows, and wellness insights for women in Africa and around the world.', fr: 'Mafo La Reine par LiAfrik : suivi du cycle menstruel, étapes de grossesse, fenêtres de fertilité et conseils de bien-être pour les femmes en Afrique et dans le monde.' },
    },
  },
  {
    slug: 'liafrik-faka-hr',
    name: 'Faka HR',
    category: { en: 'HR & Payroll', fr: 'RH & Paie' },
    valueProposition: {
      en: 'Employee and HR management platform — hiring, payroll, leave, and performance.',
      fr: 'Plateforme de gestion des employés et des RH — recrutement, paie, congés et performance.',
    },
    mainBenefit: {
      en: 'Manage your entire employee lifecycle from hiring to payroll in one bilingual platform.',
      fr: 'Gérez tout le cycle de vie de vos employés du recrutement à la paie sur une seule plateforme bilingue.',
    },
    icon: 'Users',
    accent: 'from-blue-500 to-indigo-600',
    mockupType: 'hr',
    isModule: true,
    parentProduct: 'liafrik',
    audience: {
      en: 'Businesses with 5+ employees who need structured HR, payroll, and leave management.',
      fr: 'Entreprises avec 5+ employés qui ont besoin d\'une gestion structurée des RH, de la paie et des congés.',
    },
    problemSolved: {
      en: 'African businesses manage HR with spreadsheets and paper. Payroll is error-prone, leave is untracked, and compliance is manual.',
      fr: 'Les entreprises africaines gèrent les RH avec des tableurs et du papier. La paie est sujette aux erreurs, les congés ne sont pas suivis, et la conformité est manuelle.',
    },
    features: [
      { en: 'Employee records and profiles', fr: 'Dossiers et profils des employés' },
      { en: 'Payroll processing with local tax rules', fr: 'Traitement de la paie avec règles fiscales locales' },
      { en: 'Leave management and approval workflows', fr: 'Gestion des congés et workflows d\'approbation' },
      { en: 'Attendance and time tracking', fr: 'Suivi de présence et des heures' },
      { en: 'Performance reviews and goals', fr: 'Évaluations de performance et objectifs' },
      { en: 'Document management (contracts, certificates)', fr: 'Gestion des documents (contrats, certificats)' },
    ],
    outcomes: [
      { en: 'Accurate, on-time payroll every cycle', fr: 'Paie précise et à l\'heure à chaque cycle' },
      { en: 'Full visibility into leave and attendance', fr: 'Visibilité complète sur les congés et la présence' },
      { en: 'Compliant HR records and documentation', fr: 'Dossiers RH conformes et documentés' },
    ],
    howItWorks: [
      { title: { en: 'Add Employees', fr: 'Ajoutez les Employés' }, desc: { en: 'Create employee profiles, upload contracts, and set up salary and tax details.', fr: 'Créez des profils d\'employés, téléchargez des contrats et configurez les salaires et détails fiscaux.' } },
      { title: { en: 'Run Payroll', fr: 'Exécutez la Paie' }, desc: { en: 'Process payroll with local tax calculations, generate payslips, and approve payments.', fr: 'Traitez la paie avec calculs fiscaux locaux, générez les fiches de paie et approuvez les paiements.' } },
      { title: { en: 'Manage & Review', fr: 'Gérez & Évaluez' }, desc: { en: 'Track leave, monitor attendance, and conduct performance reviews.', fr: 'Suivez les congés, surveillez la présence et menez les évaluations de performance.' } },
    ],
    faqs: [
      { question: { en: 'Does Faka HR handle local tax calculations?', fr: 'Faka HR gère-t-il les calculs fiscaux locaux ?' }, answer: { en: 'Yes. Faka HR supports local tax rules for multiple African countries, with regular updates as regulations change.', fr: 'Oui. Faka HR supporte les règles fiscales locales de plusieurs pays africains, avec des mises à jour régulières selon les changements de réglementation.' } },
      { question: { en: 'Can employees access their own information?', fr: 'Les employés peuvent-ils accéder à leurs propres informations ?' }, answer: { en: 'Yes. Employees get a self-service portal to view payslips, request leave, and update their information.', fr: 'Oui. Les employés ont un portail en libre-service pour consulter leurs fiches de paie, demander des congés et mettre à jour leurs informations.' } },
    ],
    seo: {
      title: { en: 'Faka HR — HR & Payroll Management Platform | LiAfrik', fr: 'Faka HR — Plateforme de Gestion RH & Paie | LiAfrik' },
      description: { en: 'Faka HR by LiAfrik: employee management, payroll with local tax rules, leave management, attendance tracking, and performance reviews for businesses in Africa and worldwide.', fr: 'Faka HR par LiAfrik : gestion des employés, paie avec règles fiscales locales, gestion des congés, suivi de présence et évaluations de performance pour les entreprises en Afrique et dans le monde.' },
    },
  },
  {
    slug: 'liafrik-health',
    name: 'Health',
    category: { en: 'Healthcare Management', fr: 'Gestion de Santé' },
    valueProposition: {
      en: 'Hospital and healthcare management platform for clinics and medical centers.',
      fr: 'Plateforme de gestion hospitalière et de santé pour cliniques et centres médicaux.',
    },
    mainBenefit: {
      en: 'Manage patients, appointments, medical records, and billing in one system.',
      fr: 'Gérez les patients, rendez-vous, dossiers médicaux et facturation dans un seul système.',
    },
    icon: 'Stethoscope',
    accent: 'from-emerald-500 to-teal-600',
    mockupType: 'health',
    isModule: true,
    parentProduct: 'liafrik',
    audience: {
      en: 'Clinics, hospitals, pharmacies, and medical centers across Africa.',
      fr: 'Cliniques, hôpitaux, pharmacies et centres médicaux à travers l\'Afrique.',
    },
    problemSolved: {
      en: 'African healthcare facilities manage patient records on paper, leading to lost files, long wait times, and billing errors.',
      fr: 'Les établissements de santé africains gèrent les dossiers patients sur papier, entraînant des dossiers perdus, de longs temps d\'attente et des erreurs de facturation.',
    },
    features: [
      { en: 'Patient registration and medical records', fr: 'Enregistrement des patients et dossiers médicaux' },
      { en: 'Appointment scheduling and queue management', fr: 'Planification des rendez-vous et gestion de file' },
      { en: 'Electronic medical records (EMR)', fr: 'Dossiers médicaux électroniques (EMR)' },
      { en: 'Pharmacy and inventory management', fr: 'Gestion de pharmacie et d\'inventaire' },
      { en: 'Medical billing and insurance claims', fr: 'Facturation médicale et demandes d\'assurance' },
      { en: 'Lab results and prescriptions', fr: 'Résultats de laboratoire et ordonnances' },
    ],
    outcomes: [
      { en: 'Reduced patient wait times', fr: 'Temps d\'attente des patients réduits' },
      { en: 'Accurate, accessible medical records', fr: 'Dossiers médicaux précis et accessibles' },
      { en: 'Streamlined billing and insurance', fr: 'Facturation et assurance simplifiées' },
    ],
    howItWorks: [
      { title: { en: 'Register Patients', fr: 'Enregistrez les Patients' }, desc: { en: 'Create patient profiles, capture medical history, and assign to departments.', fr: 'Créez des profils patients, capturez l\'historique médical et assignez aux départements.' } },
      { title: { en: 'Manage Care', fr: 'Gérez les Soins' }, desc: { en: 'Schedule appointments, record consultations, prescribe medications, and order labs.', fr: 'Planifiez les rendez-vous, enregistrez les consultations, prescrivez des médicaments et commandez des analyses.' } },
      { title: { en: 'Bill & Report', fr: 'Facturez & Rapportez' }, desc: { en: 'Generate invoices, process insurance claims, and access health analytics.', fr: 'Générez des factures, traitez les demandes d\'assurance et accédez aux analyses de santé.' } },
    ],
    faqs: [
      { question: { en: 'Is patient data secure?', fr: 'Les données des patients sont-elles sécurisées ?' }, answer: { en: 'Yes. Health uses encrypted medical records with role-based access to protect patient confidentiality.', fr: 'Oui. Health utilise des dossiers médicaux chiffrés avec accès basé sur les rôles pour protéger la confidentialité des patients.' } },
      { question: { en: 'Can it handle multiple departments?', fr: 'Peut-il gérer plusieurs départements ?' }, answer: { en: 'Yes. Health supports multi-department scheduling, with each department having its own queue and staff.', fr: 'Oui. Health supporte la planification multi-départements, chaque département ayant sa propre file et son personnel.' } },
    ],
    seo: {
      title: { en: 'Health — Hospital & Healthcare Management | LiAfrik', fr: 'Health — Gestion Hospitalière & de Santé | LiAfrik' },
      description: { en: 'Health by LiAfrik: patient management, electronic medical records, appointment scheduling, pharmacy, and medical billing for clinics and hospitals in Africa and worldwide.', fr: 'Health par LiAfrik : gestion des patients, dossiers médicaux électroniques, planification des rendez-vous, pharmacie et facturation médicale pour les cliniques et hôpitaux en Afrique et dans le monde.' },
    },
  },
  {
    slug: 'liafrik-crm',
    name: 'CRM',
    category: { en: 'Sales & Relationships', fr: 'Ventes & Relations' },
    valueProposition: {
      en: 'Customer relationship and sales management — from lead to loyal client.',
      fr: 'Gestion des relations clients et des ventes — du prospect au client fidèle.',
    },
    mainBenefit: {
      en: 'Never lose a lead. Track every interaction and close more deals with a visual pipeline.',
      fr: 'Ne perdez plus jamais un prospect. Suivez chaque interaction et concluez plus d\'affaires avec un pipeline visuel.',
    },
    icon: 'Contact',
    accent: 'from-sky-500 to-blue-600',
    mockupType: 'crm',
    isModule: true,
    parentProduct: 'liafrik',
    audience: {
      en: 'Sales teams, solo entrepreneurs, and any business that needs to track leads and customer relationships.',
      fr: 'Équipes commerciales, entrepreneurs solo et toute entreprise qui doit suivre les prospects et les relations clients.',
    },
    problemSolved: {
      en: 'Leads fall through the cracks when businesses rely on notebooks and memory. There\'s no visibility into the sales pipeline.',
      fr: 'Les prospects se perdent quand les entreprises utilisent des carnets et la mémoire. Il n\'y a aucune visibilité sur le pipeline commercial.' },
    features: [
      { en: 'Visual sales pipeline with drag-and-drop', fr: 'Pipeline de ventes visuel avec glisser-déposer' },
      { en: 'Lead capture from web, WhatsApp, and forms', fr: 'Capture de prospects depuis le web, WhatsApp et les formulaires' },
      { en: 'Contact and company management', fr: 'Gestion des contacts et des entreprises' },
      { en: 'Activity tracking and reminders', fr: 'Suivi des activités et rappels' },
      { en: 'Sales forecasting and reporting', fr: 'Prévisions de ventes et reporting' },
      { en: 'WhatsApp and email integration', fr: 'Intégration WhatsApp et email' },
    ],
    outcomes: [
      { en: 'More leads converted into clients', fr: 'Plus de prospects convertis en clients' },
      { en: 'Full visibility into your sales pipeline', fr: 'Visibilité complète sur votre pipeline commercial' },
      { en: 'No lead left behind', fr: 'Aucun prospect oublié' },
    ],
    howItWorks: [
      { title: { en: 'Capture Leads', fr: 'Capturez les Prospects' }, desc: { en: 'Collect leads from your website, WhatsApp, walk-ins, and referrals into one inbox.', fr: 'Collectez les prospects depuis votre site, WhatsApp, visites et recommandations dans une boîte de réception.' } },
      { title: { en: 'Nurture & Track', fr: 'Nourrissez & Suivez' }, desc: { en: 'Move leads through your pipeline, log every interaction, and set follow-up reminders.', fr: 'Faites avancer les prospects dans votre pipeline, enregistrez chaque interaction et définissez des rappels.' } },
      { title: { en: 'Close & Retain', fr: 'Concluez & Fidélisez' }, desc: { en: 'Convert leads to clients, track satisfaction, and identify upsell opportunities.', fr: 'Convertissez les prospects en clients, suivez la satisfaction et identifiez les opportunités de vente additionnelle.' } },
    ],
    faqs: [
      { question: { en: 'Can I capture leads from WhatsApp?', fr: 'Puis-je capturer des prospects depuis WhatsApp ?' }, answer: { en: 'Yes. CRM integrates with WhatsApp so you can convert conversations into tracked leads automatically.', fr: 'Oui. CRM s\'intègre à WhatsApp pour transformer automatiquement les conversations en prospects suivis.' } },
      { question: { en: 'Does CRM share data with POS Commerce?', fr: 'CRM partage-t-il des données avec POS Commerce ?' }, answer: { en: 'Yes. A customer in CRM is a customer across all LiAfrik modules — POS, accounting, and e-commerce all see the same profile.', fr: 'Oui. Un client dans CRM est un client sur tous les modules LiAfrik — POS, comptabilité et e-commerce voient le même profil.' } },
    ],
    seo: {
      title: { en: 'CRM — Customer Relationship & Sales Management | LiAfrik', fr: 'CRM — Gestion des Relations Clients & Ventes | LiAfrik' },
      description: { en: 'CRM by LiAfrik: visual sales pipeline, lead capture from web and WhatsApp, contact management, and sales forecasting for businesses in Africa and worldwide.', fr: 'CRM par LiAfrik : pipeline de ventes visuel, capture de prospects depuis le web et WhatsApp, gestion des contacts et prévisions de ventes pour les entreprises en Afrique et dans le monde.' },
    },
  },
  {
    slug: 'liafrik-libooks',
    name: 'Libooks',
    category: { en: 'Accounting & Finance', fr: 'Comptabilité & Finance' },
    valueProposition: {
      en: 'Accounting and financial management — bookkeeping, invoicing, and reporting.',
      fr: 'Comptabilité et gestion financière — tenue de livres, facturation et reporting.',
    },
    mainBenefit: {
      en: 'Keep accurate books, send professional invoices, and know your numbers in real time.',
      fr: 'Tenez une comptabilité précise, envoyez des factures professionnelles et connaissez vos chiffres en temps réel.',
    },
    icon: 'Calculator',
    accent: 'from-green-500 to-emerald-600',
    mockupType: 'accounting',
    isModule: true,
    parentProduct: 'liafrik',
    audience: {
      en: 'Small and growing businesses that need proper bookkeeping without hiring a full-time accountant.',
      fr: 'Petites entreprises en croissance qui ont besoin d\'une comptabilité correcte sans embaucher un comptable à temps plein.' },
    problemSolved: {
      en: 'Most African SMEs don\'t have real-time financial visibility. Invoicing is manual, receipts are lost, and tax filing is stressful.',
      fr: 'La plupart des PME africaines n\'ont pas de visibilité financière en temps réel. La facturation est manuelle, les reçus sont perdus et la déclaration fiscale est stressante.' },
    features: [
      { en: 'Double-entry bookkeeping', fr: 'Tenue de livres en partie double' },
      { en: 'Professional invoicing and quotes', fr: 'Facturation et devis professionnels' },
      { en: 'Expense tracking and receipt capture', fr: 'Suivi des dépenses et capture des reçus' },
      { en: 'Financial reports (P&L, balance sheet, cash flow)', fr: 'Rapports financiers (compte de résultat, bilan, trésorerie)' },
      { en: 'Multi-currency support', fr: 'Support multi-devises' },
      { en: 'Tax preparation and filing reports', fr: 'Préparation fiscale et rapports de déclaration' },
    ],
    outcomes: [
      { en: 'Real-time financial visibility', fr: 'Visibilité financière en temps réel' },
      { en: 'Professional, trackable invoicing', fr: 'Facturation professionnelle et traçable' },
      { en: 'Stress-free tax preparation', fr: 'Préparation fiscale sans stress' },
    ],
    howItWorks: [
      { title: { en: 'Set Up Accounts', fr: 'Configurez les Comptes' }, desc: { en: 'Configureate your chart of accounts, currencies, and tax settings.', fr: 'Configurez votre plan comptable, vos devises et vos paramètres fiscaux.' } },
      { title: { en: 'Track Transactions', fr: 'Suivez les Transactions' }, desc: { en: 'Record income and expenses, send invoices, and capture receipts.', fr: 'Enregistrez les revenus et dépenses, envoyez des factures et capturez les reçus.' } },
      { title: { en: 'Report & Analyze', fr: 'Rapportez & Analysez' }, desc: { en: 'Generate financial statements and track your business health.', fr: 'Générez des états financiers et suivez la santé de votre entreprise.' } },
    ],
    faqs: [
      { question: { en: 'Does Libooks support local tax systems?', fr: 'Libooks supporte-t-il les systèmes fiscaux locaux ?' }, answer: { en: 'Yes. Libooks supports local tax configurations for multiple African countries, including VAT and withholding tax.', fr: 'Oui. Libooks supporte les configurations fiscales locales de plusieurs pays africains, incluant la TVA et la retenue à la source.' } },
      { question: { en: 'Can it auto-import from POS Commerce?', fr: 'Peut-il importer automatiquement depuis POS Commerce ?' }, answer: { en: 'Yes. POS Commerce sales flow automatically into Libooks — no manual data entry needed.', fr: 'Oui. Les ventes de POS Commerce affluent automatiquement dans Libooks — aucune saisie manuelle nécessaire.' } },
    ],
    seo: {
      title: { en: 'Libooks — Accounting & Financial Management | LiAfrik', fr: 'Libooks — Comptabilité & Gestion Financière | LiAfrik' },
      description: { en: 'Libooks by LiAfrik: double-entry bookkeeping, professional invoicing, expense tracking, and financial reporting with multi-currency and local tax support.', fr: 'Libooks par LiAfrik : comptabilité en partie double, facturation professionnelle, suivi des dépenses et reporting financier avec multi-devises et support fiscal local.' },
    },
  },
  {
    slug: 'liafrik-klasoo',
    name: 'Klasoo',
    category: { en: 'Education Management', fr: 'Gestion de l\'Éducation' },
    valueProposition: {
      en: 'Management platform for schools and educational institutions.',
      fr: 'Plateforme de gestion pour les écoles et institutions éducatives.',
    },
    mainBenefit: {
      en: 'Manage students, teachers, classes, grades, attendance, and fees in one system.',
      fr: 'Gérez les étudiants, enseignants, classes, notes, présence et frais dans un seul système.',
    },
    icon: 'School',
    accent: 'from-amber-500 to-orange-600',
    mockupType: 'school',
    isModule: true,
    parentProduct: 'liafrik',
    audience: {
      en: 'Primary schools, secondary schools, universities, and training centers across Africa.',
      fr: 'Écoles primaires, secondaires, universités et centres de formation à travers l\'Afrique.' },
    problemSolved: {
      en: 'Schools manage student records in notebooks, collect fees in cash, and communicate with parents through paper notes.',
      fr: 'Les écoles gèrent les dossiers des étudiants dans des cahiers, collectent les frais en espèces et communiquent avec les parents par des notes papier.' },
    features: [
      { en: 'Student and guardian management', fr: 'Gestion des étudiants et tuteurs' },
      { en: 'Class and timetable scheduling', fr: 'Planification des classes et des emplois du temps' },
      { en: 'Grade and report card management', fr: 'Gestion des notes et des bulletins' },
      { en: 'Attendance tracking', fr: 'Suivi de présence' },
      { en: 'Fee collection and invoicing', fr: 'Collecte des frais et facturation' },
      { en: 'Parent portal and SMS notifications', fr: 'Portail parents et notifications SMS' },
    ],
    outcomes: [
      { en: 'Digital, organized student records', fr: 'Dossiers étudiants numériques et organisés' },
      { en: 'Faster, trackable fee collection', fr: 'Collecte des frais plus rapide et traçable' },
      { en: 'Better parent-school communication', fr: 'Meilleure communication école-parents' },
    ],
    howItWorks: [
      { title: { en: 'Set Up School', fr: 'Configurez l\'École' }, desc: { en: 'Add classes, teachers, students, and configure academic terms and fee structures.', fr: 'Ajoutez les classes, enseignants, étudiants et configurez les trimestres et les structures de frais.' } },
      { title: { en: 'Manage Daily', fr: 'Gérez au Quotidien' }, desc: { en: 'Track attendance, record grades, and manage timetables.', fr: 'Suivez la présence, enregistrez les notes et gérez les emplois du temps.' } },
      { title: { en: 'Report & Communicate', fr: 'Rapportez & Communiquez' }, desc: { en: 'Generate report cards, collect fees, and notify parents via SMS or portal.', fr: 'Générez les bulletins, collectez les frais et notifiez les parents par SMS ou portail.' } },
    ],
    faqs: [
      { question: { en: 'Can parents access their child\'s information?', fr: 'Les parents peuvent-ils accéder aux informations de leur enfant ?' }, answer: { en: 'Yes. Parents get a portal to view grades, attendance, fee status, and school announcements.', fr: 'Oui. Les parents ont un portail pour consulter les notes, la présence, le statut des frais et les annonces de l\'école.' } },
      { question: { en: 'Does Klasoo connect to Digital Skills?', fr: 'Klasoo se connecte-t-il à Digital Skills ?' }, answer: { en: 'Yes. Students in Klasoo can be enrolled in Digital Skills courses, with grades flowing back to their academic records.', fr: 'Oui. Les étudiants de Klasoo peuvent être inscrits aux cours de Digital Skills, avec les notes revenant vers leur dossier scolaire.' } },
    ],
    seo: {
      title: { en: 'Klasoo — School Management Platform | LiAfrik', fr: 'Klasoo — Plateforme de Gestion Scolaire | LiAfrik' },
      description: { en: 'Klasoo by LiAfrik: student and teacher management, class scheduling, grades, attendance, fee collection, and parent portal for schools in Africa and worldwide.', fr: 'Klasoo par LiAfrik : gestion des étudiants et enseignants, planification des classes, notes, présence, collecte des frais et portail parents pour les écoles en Afrique et dans le monde.' },
    },
  },
  {
    slug: 'liafrik-bailly',
    name: 'Bailly',
    category: { en: 'Real Estate & Property', fr: 'Immobilier & Propriété' },
    valueProposition: {
      en: 'Real-estate and property management — tenants, leases, rent, and maintenance.',
      fr: 'Gestion immobilière et de propriété — locataires, baux, loyers et maintenance.',
    },
    mainBenefit: {
      en: 'Manage your properties, tenants, and rent collection without spreadsheets.',
      fr: 'Gérez vos propriétés, locataires et collecte de loyers sans tableurs.',
    },
    icon: 'Building2',
    accent: 'from-stone-500 to-slate-600',
    mockupType: 'realestate',
    isModule: true,
    parentProduct: 'liafrik',
    audience: {
      en: 'Property owners, real-estate agencies, and property managers across Africa.',
      fr: 'Propriétaires immobiliers, agences immobilières et gestionnaires de propriétés à travers l\'Afrique.' },
    problemSolved: {
      en: 'Property management in Africa relies on paper leases, cash rent collection, and no maintenance tracking.',
      fr: 'La gestion immobilière en Afrique repose sur des baux papier, la collecte de loyers en espèces et aucun suivi de maintenance.' },
    features: [
      { en: 'Property and unit management', fr: 'Gestion des propriétés et des unités' },
      { en: 'Tenant registration and lease tracking', fr: 'Enregistrement des locataires et suivi des baux' },
      { en: 'Rent collection and reminders', fr: 'Collecte des loyers et rappels' },
      { en: 'Maintenance request management', fr: 'Gestion des demandes de maintenance' },
      { en: 'Financial reporting per property', fr: 'Reporting financier par propriété' },
      { en: 'Tenant portal for payments and requests', fr: 'Portail locataire pour paiements et demandes' },
    ],
    outcomes: [
      { en: 'On-time rent collection with reminders', fr: 'Collecte des loyers à l\'heure avec rappels' },
      { en: 'Full visibility into property performance', fr: 'Visibilité complète sur la performance des propriétés' },
      { en: 'Organized maintenance and tenant communication', fr: 'Maintenance organisée et communication locataire' },
    ],
    howItWorks: [
      { title: { en: 'Add Properties', fr: 'Ajoutez les Propriétés' }, desc: { en: 'Register your properties, units, and rental terms.', fr: 'Enregistrez vos propriétés, unités et termes de location.' } },
      { title: { en: 'Manage Tenants', fr: 'Gérez les Locataires' }, desc: { en: 'Onboard tenants, sign leases digitally, and set rent schedules.', fr: 'Embarquez les locataires, signez les baux numériquement et définissez les calendriers de loyer.' } },
      { title: { en: 'Collect & Report', fr: 'Collectez & Rapportez' }, desc: { en: 'Collect rent, track maintenance, and generate property performance reports.', fr: 'Collectez les loyers, suivez la maintenance et générez des rapports de performance.' } },
    ],
    faqs: [
      { question: { en: 'Can tenants pay rent through Bailly?', fr: 'Les locataires peuvent-ils payer le loyer via Bailly ?' }, answer: { en: 'Yes. Tenants can pay rent through the tenant portal with mobile money or card payments.', fr: 'Oui. Les locataires peuvent payer le loyer via le portail locataire avec mobile money ou paiements par carte.' } },
      { question: { en: 'Does Bailly connect to Libooks for accounting?', fr: 'Bailly se connecte-t-il à Libooks pour la comptabilité ?' }, answer: { en: 'Yes. Rent income and maintenance expenses flow automatically into Libooks for real-time financial reporting.', fr: 'Oui. Les revenus de loyer et les dépenses de maintenance affluent automatiquement dans Libooks pour un reporting financier en temps réel.' } },
    ],
    seo: {
      title: { en: 'Bailly — Real Estate & Property Management | LiAfrik', fr: 'Bailly — Gestion Immobilière & de Propriété | LiAfrik' },
      description: { en: 'Bailly by LiAfrik: property and unit management, tenant tracking, digital leases, rent collection with mobile money, and maintenance requests for real estate in Africa and worldwide.', fr: 'Bailly par LiAfrik : gestion des propriétés et unités, suivi des locataires, baux numériques, collecte de loyers avec mobile money et demandes de maintenance pour l\'immobilier en Afrique et dans le monde.' },
    },
  },
  {
    slug: 'liafrik-liafund',
    name: 'Liafund',
    category: { en: 'Community & Savings', fr: 'Communauté & Épargne' },
    valueProposition: {
      en: 'Community, savings group, and tontine management platform.',
      fr: 'Plateforme de gestion de communauté, groupe d\'épargne et tontine.',
    },
    mainBenefit: {
      en: 'Digitize your tontine or savings group with transparent tracking and automated contributions.',
      fr: 'Numérisez votre tontine ou groupe d\'épargne avec un suivi transparent et des cotisations automatisées.',
    },
    icon: 'PiggyBank',
    accent: 'from-yellow-500 to-amber-600',
    mockupType: 'tontine',
    isModule: true,
    parentProduct: 'liafrik',
    audience: {
      en: 'Tontine groups, savings circles, cooperatives, and community financial groups across Africa.',
      fr: 'Groupes de tontine, cercles d\'épargne, coopératives et groupes financiers communautaires à travers l\'Afrique.' },
    problemSolved: {
      en: 'Tontines and savings groups in Africa are managed on paper and trust. Contributions are hard to track and disputes are common.',
      fr: 'Les tontines et groupes d\'épargne en Afrique sont gérés sur papier et la confiance. Les cotisations sont difficiles à suivre et les litiges sont fréquents.' },
    features: [
      { en: 'Tontine and savings group creation', fr: 'Création de tontines et groupes d\'épargne' },
      { en: 'Member management and contribution tracking', fr: 'Gestion des membres et suivi des cotisations' },
      { en: 'Automated contribution reminders', fr: 'Rappels de cotisation automatisés' },
      { en: 'Transparent payout scheduling', fr: 'Planification transparente des paiements' },
      { en: 'Mobile money contribution collection', fr: 'Collecte des cotisations via mobile money' },
      { en: 'Group chat and notifications', fr: 'Chat de groupe et notifications' },
    ],
    outcomes: [
      { en: 'Transparent, dispute-free savings groups', fr: 'Groupes d\'épargne transparents et sans litige' },
      { en: 'Automated contribution tracking and reminders', fr: 'Suivi et rappels de cotisation automatisés' },
      { en: 'Digital records for every transaction', fr: 'Registres numériques pour chaque transaction' },
    ],
    howItWorks: [
      { title: { en: 'Create Group', fr: 'Créez le Groupe' }, desc: { en: 'Set up your tontine or savings group with members, contribution amounts, and payout schedule.', fr: 'Configurez votre tontine ou groupe d\'épargne avec les membres, montants des cotisations et calendrier de paiement.' } },
      { title: { en: 'Collect Contributions', fr: 'Collectez les Cotisations' }, desc: { en: 'Members contribute via mobile money with automatic tracking and reminders.', fr: 'Les membres cotisent via mobile money avec suivi et rappels automatiques.' } },
      { title: { en: 'Distribute Payouts', fr: 'Distribuez les Paiements' }, desc: { en: 'Manage payout rotations transparently with digital records for every member.', fr: 'Gérez les rotations de paiement de manière transparente avec des registres numériques pour chaque membre.' } },
    ],
    faqs: [
      { question: { en: 'Can members contribute via mobile money?', fr: 'Les membres peuvent-ils cotiser via mobile money ?' }, answer: { en: 'Yes. Liafund integrates with mobile money platforms so members can contribute directly from their phones.', fr: 'Oui. Liafund s\'intègre aux plateformes de mobile money pour que les membres puissent cotiser directement depuis leurs téléphones.' } },
      { question: { en: 'Is Liafund secure for group funds?', fr: 'Liafund est-il sécurisé pour les fonds de groupe ?' }, answer: { en: 'Yes. Every contribution and payout is recorded digitally with transparent tracking visible to all group members.', fr: 'Oui. Chaque cotisation et paiement est enregistré numériquement avec un suivi transparent visible par tous les membres du groupe.' } },
    ],
    seo: {
      title: { en: 'Liafund — Tontine & Savings Group Management | LiAfrik', fr: 'Liafund — Gestion de Tontine & Groupes d\'Épargne | LiAfrik' },
      description: { en: 'Liafund by LiAfrik: digitize your tontine or savings group with member management, mobile money contributions, automated reminders, and transparent payouts for communities in Africa and worldwide.', fr: 'Liafund par LiAfrik : numérisez votre tontine ou groupe d\'épargne avec gestion des membres, cotisations mobile money, rappels automatisés et paiements transparents pour les communautés en Afrique et dans le monde.' },
    },
  },
  {
    slug: 'liafrik-os',
    name: 'OS',
    category: { en: 'E-Commerce & Merchant Tools', fr: 'E-Commerce & Outils Marchands' },
    valueProposition: {
      en: 'The Shopify of Africa — e-commerce stores, payments, products, orders, and merchant tools.',
      fr: 'Le Shopify de l\'Afrique — boutiques e-commerce, paiements, produits, commandes et outils marchands.',
    },
    mainBenefit: {
      en: 'Launch your online store with local payments, product management, and order fulfillment — built for Africa.',
      fr: 'Lancez votre boutique en ligne avec paiements locaux, gestion des produits et expédition des commandes — conçu pour l\'Afrique.',
    },
    icon: 'ShoppingBag',
    accent: 'from-cyan-500 to-blue-600',
    mockupType: 'ecommerce',
    isModule: true,
    parentProduct: 'liafrik',
    audience: {
      en: 'Entrepreneurs, merchants, and businesses who want to sell online across African markets.',
      fr: 'Entrepreneurs, commerçants et entreprises qui veulent vendre en ligne sur les marchés africains.' },
    problemSolved: {
      en: 'African merchants can\'t use Shopify easily — local payment methods aren\'t supported, logistics are different, and the tools don\'t fit local commerce.',
      fr: 'Les commerçants africains ne peuvent pas utiliser Shopify facilement — les méthodes de paiement locales ne sont pas supportées, la logistique est différente et les outils ne correspondent pas au commerce local.' },
    features: [
      { en: 'Store builder with customizable themes', fr: 'Créateur de boutique avec thèmes personnalisables' },
      { en: 'Product and inventory management', fr: 'Gestion des produits et de l\'inventaire' },
      { en: 'Local payment integration (mobile money, cards)', fr: 'Intégration de paiement locale (mobile money, cartes)' },
      { en: 'Order management and fulfillment', fr: 'Gestion des commandes et expédition' },
      { en: 'Shipping and delivery tracking', fr: 'Suivi de livraison et expédition' },
      { en: 'Merchant dashboard with sales analytics', fr: 'Tableau de bord marchand avec analyses de ventes' },
    ],
    outcomes: [
      { en: 'Sell online with local payment methods', fr: 'Vendez en ligne avec des méthodes de paiement locales' },
      { en: 'Manage products and orders from one dashboard', fr: 'Gérez produits et commandes depuis un seul tableau de bord' },
      { en: 'Scale your commerce across African markets', fr: 'Évoluez votre commerce sur les marchés africains' },
    ],
    howItWorks: [
      { title: { en: 'Build Your Store', fr: 'Créez votre Boutique' }, desc: { en: 'Choose a theme, add products, and configure your store settings and payments.', fr: 'Choisissez un thème, ajoutez des produits et configurez les paramètres et paiements de votre boutique.' } },
      { title: { en: 'Receive Orders', fr: 'Recevez les Commandes' }, desc: { en: 'Customers browse, pay with mobile money or card, and you get instant order notifications.', fr: 'Les clients naviguent, paient avec mobile money ou carte, et vous recevez des notifications de commande instantanées.' } },
      { title: { en: 'Fulfill & Scale', fr: 'Expédiez & Évoluez' }, desc: { en: 'Manage fulfillment, track deliveries, and analyze sales to grow your store.', fr: 'Gérez l\'expédition, suivez les livraisons et analysez les ventes pour développer votre boutique.' } },
    ],
    faqs: [
      { question: { en: 'Why OS instead of Shopify?', fr: 'Pourquoi OS au lieu de Shopify ?' }, answer: { en: 'OS is built for African commerce — local payments, local logistics, bilingual support, and pricing adapted to African markets. Shopify doesn\'t natively support mobile money or local delivery systems.', fr: 'OS est conçu pour le commerce africain — paiements locaux, logistique locale, support bilingue et tarification adaptée aux marchés africains. Shopify ne supporte pas nativement le mobile money ou les systèmes de livraison locaux.' } },
      { question: { en: 'Does OS share inventory with POS Commerce?', fr: 'OS partage-t-il l\'inventaire avec POS Commerce ?' }, answer: { en: 'Yes. OS and POS Commerce share a single inventory layer. Sell online or in-store — stock updates in real time across both.', fr: 'Oui. OS et POS Commerce partagent une seule couche d\'inventaire. Vendez en ligne ou en magasin — le stock se met à jour en temps réel sur les deux.' } },
    ],
    seo: {
      title: { en: 'OS — E-Commerce Platform for Africa | LiAfrik by LIYAH GROUP', fr: 'OS — Plateforme E-Commerce pour l\'Afrique | LiAfrik par LIYAH GROUP' },
      description: { en: 'OS by LiAfrik: the Shopify of Africa. Build online stores with mobile money payments, product management, order fulfillment, and merchant tools built for commerce in Africa and worldwide.', fr: 'OS par LiAfrik : le Shopify de l\'Afrique. Créez des boutiques en ligne avec paiements mobile money, gestion des produits, expédition des commandes et outils marchands conçus pour le commerce en Afrique et dans le monde.' },
    },
  },
];

export function getSaaSProductBySlug(slug: string): SaaSProduct | undefined {
  return saasProducts.find((p) => p.slug === slug);
}

export function getLiAfrikModules(): SaaSProduct[] {
  return saasProducts.filter((p) => p.isModule);
}

export function getProductName(slug: string, lang: Lang): string {
  const product = saasProducts.find((p) => p.slug === slug);
  if (!product) return '';
  return product.name;
}

export { tr };
export type { Bilingual, Lang };
