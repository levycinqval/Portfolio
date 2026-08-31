/* ══════════════════════════════════════════════════════
   Portfolio Lévy CINQ-VAL — script.js
   Thème, accessibilité, traductions FR/EN, animations
══════════════════════════════════════════════════════ */

/* ────────────────────────────────────────────────────
   0. DICTIONNAIRE DE TRADUCTION (FR / EN)
   Ne pas traduire : noms propres, noms de projets,
   technologies, "Lévy CINQ-VAL", acronymes (BUT MMI, UI/UX…)
──────────────────────────────────────────────────── */
const I18N = {
  fr: {
    "nav.home": "Accueil",
    "nav.about": "À propos",
    "nav.projects": "Projets",
    "nav.resume": "CV",
    "nav.contact": "Contact",
    "menu.aria": "Menu",
    "a11y.aria": "Accessibilité",
    "a11y.title": "Options d'accessibilité",
    "a11y.panelTitle": "Accessibilité",
    "a11y.theme": "🌓 Thème",
    "a11y.theme.dark": "Sombre",
    "a11y.theme.light": "Clair",
    "a11y.fontSize": "🔤 Taille du texte",
    "a11y.fontSize.normal": "Normal",
    "a11y.fontSize.large": "Grand",
    "a11y.fontSize.xlarge": "Très grand",
    "a11y.contrast": "⚡ Contraste élevé",
    "a11y.contrast.on": "Activé",
    "a11y.contrast.off": "Désactivé",
    "a11y.language": "🌍 Langue",
    "a11y.language.fr": "Français",
    "a11y.language.en": "English",
    "scrollTop.aria": "Retour en haut",

    "home.badge": "⚓ Disponible pour de nouveaux projets ⚓",
    "home.hero.title": "Bonjour, je suis",
    "home.hero.subtitle": "Design graphique · Développement web · Approche stratégique",
    "home.btn.projects": "Voir mes projets",
    "home.btn.contact": "Me contacter",
    "home.btn.resume": "Voir mon CV",
    "home.about.title": "⟡ À propos de moi ⟡",
    "home.about.subtitle": "Un peu de moi en quelques mots",
    "home.about.p1": "Passionné par le <span class=\"highlight\">design</span> et le <span class=\"highlight\">développement web</span>, je combine <span class=\"highlight\">créativité</span> et <span class=\"highlight\">expertise technique</span> pour créer des expériences numériques uniques et mémorables.",
    "home.about.p2": "Formé en <span class=\"highlight\">BUT MMI</span>, je mets ma rigueur technique et ma sensibilité maritime au service de projets authentiques. Je cherche à allier robustesse technique et élégance visuelle, comme un navire bien conçu qui affronte toutes les mers.",
    "home.about.badge1": "⚙️ Solide",
    "home.about.badge2": "🌊 Fluide",
    "home.about.badge3": "🎯 Stratégique",
    "home.skills.title": "Compétences",
    "home.skills.subtitle": "Des capacités forgées dans les profondeurs",
    "home.skill1.title": "Design Robuste",
    "home.skill1.desc": "Des interfaces qui résistent aux tempêtes du changement",
    "home.skill2.title": "Performance Explosive",
    "home.skill2.desc": "Une vitesse qui frappe comme la foudre sur l'océan",
    "home.skill3.title": "Précision Absolue",
    "home.skill3.desc": "Atteindre les objectifs avec la force des marées",
    "home.cta.title": "⟡ Travaillons ensemble ⟡",
    "home.cta.text": "Je serai ravi d'échanger sur vos projets. N'hésitez pas à me contacter pour des collaborations, des projets ou simplement discuter autour du design.",
    "home.social.title": "Suivez-moi sur",

    "about.hero.label": "⚓ BUT MMI — Guadeloupe",
    "about.hero.title.pre": "À ",
    "about.hero.title.hl": "propos",
    "about.hero.title.post": "de moi",
    "about.hero.subtitle": "Design, développement web et création visuelle — je construis des expériences numériques modernes qui allient créativité et fonctionnalité.",
    "about.section1.title": "À propos de moi",
    "about.section1.p1": "Étudiant en <span class=\"hl\">BUT MMI (Métiers du Multimédia et de l'Internet)</span>, je développe des projets mêlant design, développement web et création visuelle. Passionné par l'univers du numérique, j'aime imaginer des expériences modernes, intuitives et esthétiques qui allient créativité et fonctionnalité.",
    "about.section1.p2": "Curieux et polyvalent, je travaille aussi bien sur l'<span class=\"hl\">identité visuelle</span> d'un projet que sur son intégration web ou son expérience utilisateur. J'accorde une grande importance aux détails, à l'ergonomie et à l'impact visuel afin de créer des interfaces à la fois efficaces et agréables à utiliser.",
    "about.section1.p3": "Le <span class=\"hl\">dessin, l'art et la création graphique</span> occupent également une place importante dans mon parcours. Ils nourrissent ma créativité et influencent ma manière de concevoir des projets multimédias. J'aime transformer des idées en concepts visuels dynamiques et donner vie à des univers graphiques uniques.",
    "about.timeline.title": "Mon parcours",
    "about.timeline1.year": "2026 — En cours",
    "about.timeline1.title": "BUT MMI — Métiers du Multimédia et de l'Internet",
    "about.timeline1.desc": "Formation pluridisciplinaire couvrant le développement web, le design UI/UX, la communication digitale, l'audiovisuel, la création graphique et la gestion de projet multimédia.",
    "about.timeline2.year": "Projets",
    "about.timeline2.title": "Projets académiques & personnels",
    "about.timeline2.desc": "Réalisation de sites web, chartes graphiques, identités visuelles, affiches, illustrations digitales et prototypes d'interfaces. Chaque projet est l'occasion d'explorer et de repousser mes limites créatives.",
    "about.timeline3.year": "Aujourd'hui",
    "about.timeline3.title": "Disponible pour de nouveaux projets",
    "about.timeline3.desc": "Ouvert aux collaborations, stages et projets freelance en design graphique, développement web et UI/UX.",
    "about.skills.title": "Mes compétences",
    "about.skills1.cat": "🎨 Design & Création",
    "about.skills1.li1": "UI/UX Design",
    "about.skills1.li2": "Identités visuelles",
    "about.skills1.li3": "Maquettage d'interfaces",
    "about.skills1.li4": "Contenus visuels",
    "about.skills1.li5": "Illustration & dessin",
    "about.skills2.cat": "💻 Développement Web",
    "about.skills2.li1": "HTML / CSS",
    "about.skills2.li2": "JavaScript",
    "about.skills2.li3": "Responsive Design",
    "about.skills2.li4": "Intégration web moderne",
    "about.skills2.li5": "Optimisation d'interface",
    "about.skills3.cat": "📱 Multimédia",
    "about.skills3.li1": "Communication visuelle",
    "about.skills3.li2": "Montage & contenu digital",
    "about.skills3.li3": "Gestion de projet créatif",
    "about.skills3.li4": "Concepts interactifs",
    "about.passions.title": "Mes passions",
    "about.passion1.title": "Art & Dessin",
    "about.passion1.text": "Depuis toujours, le dessin et la création artistique font partie de mon univers. J'aime expérimenter différents styles visuels et développer des concepts graphiques originaux.",
    "about.passion2.title": "Design & Expérience Utilisateur",
    "about.passion2.text": "Je suis passionné par les interfaces modernes, le motion design léger et les expériences interactives qui rendent la navigation plus fluide et immersive.",
    "about.passion3.title": "Développement & Innovation",
    "about.passion3.text": "Créer des sites et des projets web me permet de mélanger logique et créativité. J'aime concevoir des expériences numériques modernes avec une attention particulière au détail.",
    "about.cta.title": "⟡ Travaillons ensemble ⟡",
    "about.cta.text": "Un projet, une idée, une collaboration ? Je suis disponible et prêt à embarquer dans de nouvelles aventures créatives.",
    "about.journal.cta": "Découvrir mon journal de bord de stage",

    "contact.hero.label": "⚓ Prêt à embarquer",
    "contact.hero.title.pre": "Travaillons ",
    "contact.hero.title.hl": "ensemble",
    "contact.hero.subtitle": "Un projet, une idée, une collaboration ?<br>Je suis à votre écoute — chaque grande aventure commence par un message.",
    "contact.available": "Disponible pour de nouveaux projets",
    "contact.available.sub": "Réponse sous 24h en général",
    "contact.info.email": "Email",
    "contact.info.location": "Localisation",
    "contact.info.location.value": "Guadeloupe, France · Remote disponible",
    "contact.info.social": "Réseaux sociaux",
    "contact.info.services": "Services proposés",
    "contact.info.services.value": "Design graphique · Développement web<br>UI/UX · Branding · BUT MMI",
    "contact.form.title": "Envoyez-moi un message",
    "contact.form.subtitle.pre": "Tous les champs marqués",
    "contact.form.subtitle.post": "sont requis.",
    "contact.form.fname": "Prénom",
    "contact.form.fname.placeholder": "Jean",
    "contact.form.lname": "Nom",
    "contact.form.lname.placeholder": "Dupont",
    "contact.form.email": "Email",
    "contact.form.email.placeholder": "jean@exemple.com",
    "contact.form.subject": "Type de projet",
    "contact.form.subject.placeholder": "Sélectionnez une option",
    "contact.form.subject.opt1": "Design graphique / Branding",
    "contact.form.subject.opt2": "Développement web",
    "contact.form.subject.opt3": "UI/UX Design",
    "contact.form.subject.opt4": "Collaboration",
    "contact.form.subject.opt5": "Autre",
    "contact.form.message": "Message",
    "contact.form.message.placeholder": "Décrivez votre projet, vos attentes…",
    "contact.form.submit": "⚓ Envoyer le message",
    "contact.form.sending": "⏳ Envoi en cours…",
    "contact.toast.fname": "⚠️ Veuillez entrer votre prénom.",
    "contact.toast.lname": "⚠️ Veuillez entrer votre nom.",
    "contact.toast.email": "⚠️ Veuillez entrer votre adresse email.",
    "contact.toast.emailInvalid": "⚠️ Adresse email invalide.",
    "contact.toast.message": "⚠️ Veuillez écrire un message.",
    "contact.toast.messageShort": "⚠️ Le message doit contenir au moins 10 caractères.",
    "contact.toast.success": "✅ Message envoyé ! Je vous répondrai rapidement.",
    "contact.toast.error": "❌ Une erreur est survenue. Réessayez ou contactez-moi directement par email.",

    "resume.badge": "⚓ Disponible pour de nouveaux projets",
    "resume.title.pre": "Mon ",
    "resume.title.hl": "CV",
    "resume.subtitle": "Designer graphique &amp; développeur web passionné, formé en BUT MMI. Retrouvez ici l'ensemble de mon parcours, mes compétences et mes expériences.",
    "resume.card.meta": "Mis à jour en 2025 · Format PDF",
    "resume.info.formation": "Formation",
    "resume.info.location": "Localisation",
    "resume.info.location.value": "Guadeloupe · Remote",
    "resume.info.specialties": "Spécialités",
    "resume.info.availability": "Disponibilité",
    "resume.info.availability.value": "Immédiate",
    "resume.btn.view": "Voir mon CV",
    "resume.btn.download": "Télécharger mon CV",
    "resume.btn.contact": "📧 Me contacter directement",
    "resume.note.pre": "Vous pouvez aussi me retrouver sur",
    "resume.note.mid": "ou consulter mes",
    "resume.note.post": "pour voir mon travail en détail.",
    "resume.note.projects": "projets",

    "projects.hero.label": "🌊 Mes réalisations",
    "projects.hero.title.pre": "Des projets ",
    "projects.hero.title.hl": "forgés",
    "projects.hero.title.post": "dans les profondeurs",
    "projects.hero.subtitle": "Chaque projet est une traversée — un défi technique et créatif relevé avec précision, robustesse et sensibilité maritime.",
    "projects.count.suffix": "projet(s) affiché(s)",
    "projects.noResults": "Aucun projet dans cette catégorie pour l'instant.",
    "projects.card.open": "Ouvrir →",
    "projects.card.visit": "Visiter →",
    "projects.card.viewProject": "Explorer le projet →",
    "projects.cta.title": "⟡ Un projet en tête ? ⟡",
    "projects.cta.text": "Je suis disponible pour de nouvelles collaborations. Discutons de votre prochain défi créatif ou technique — chaque bonne idée mérite d'être construite.",
    "projects.cta.contact": "📧 Me contacter",
    "projects.modal.download": "↓ Télécharger",
    "projects.modal.close": "✕ Fermer",
    "projects.modal.loading": "Chargement…",
    "projects.filter.all": "Tous les projets",
    "projects.filter.stage": "Stage SmartPlay",
    "projects.filter.web": "Sites web",
    "projects.filter.design": "Design graphique",
    "projects.filter.branding": "Branding",
    "projects.filter.print": "Print",
    "projects.filter.illustration": "Illustration",
    "projects.filter.uiux": "UI/UX",
    "projects.journal.cta": "Consulter mon journal de bord",
    "projects.journal.title": "Journal de bord de stage",
    "projects.journal.text": "Retrouvez le journal de bord de mon stage de fin de première année : missions, apprentissages et retour d'expérience.",
    "projects.contact.title": "⟡ Get in touch ⟡",
    "projects.contact.text": "Une idée, un projet, une envie de collaborer ? Écrivez-moi, je réponds rapidement.",
  },

  en: {
    "nav.home": "Home",
    "nav.about": "About",
    "nav.projects": "Projects",
    "nav.resume": "Resume",
    "nav.contact": "Contact",
    "menu.aria": "Menu",
    "a11y.aria": "Accessibility",
    "a11y.title": "Accessibility options",
    "a11y.panelTitle": "Accessibility",
    "a11y.theme": "🌓 Theme",
    "a11y.theme.dark": "Dark",
    "a11y.theme.light": "Light",
    "a11y.fontSize": "🔤 Text size",
    "a11y.fontSize.normal": "Normal",
    "a11y.fontSize.large": "Large",
    "a11y.fontSize.xlarge": "Extra large",
    "a11y.contrast": "⚡ High contrast",
    "a11y.contrast.on": "On",
    "a11y.contrast.off": "Off",
    "a11y.language": "🌍 Language",
    "a11y.language.fr": "Français",
    "a11y.language.en": "English",
    "scrollTop.aria": "Back to top",

    "home.badge": "⚓ Available for new projects ⚓",
    "home.hero.title": "Hello, I'm",
    "home.hero.subtitle": "Graphic design · Web development · Strategic approach",
    "home.btn.projects": "View my projects",
    "home.btn.contact": "Contact me",
    "home.btn.resume": "View my resume",
    "home.about.title": "⟡ About me ⟡",
    "home.about.subtitle": "A little about me",
    "home.about.p1": "Passionate about <span class=\"highlight\">design</span> and <span class=\"highlight\">web development</span>, I combine <span class=\"highlight\">creativity</span> and <span class=\"highlight\">technical expertise</span> to create unique, memorable digital experiences.",
    "home.about.p2": "Trained in <span class=\"highlight\">BUT MMI</span>, I put my technical rigour and maritime sensitivity to work on authentic projects. I aim to blend technical robustness with visual elegance, like a well-built ship facing every sea.",
    "home.about.badge1": "⚙️ Solid",
    "home.about.badge2": "🌊 Fluid",
    "home.about.badge3": "🎯 Strategic",
    "home.skills.title": "Skills",
    "home.skills.subtitle": "Abilities forged in the depths",
    "home.skill1.title": "Robust Design",
    "home.skill1.desc": "Interfaces that withstand the storms of change",
    "home.skill2.title": "Explosive Performance",
    "home.skill2.desc": "A speed that strikes like lightning over the ocean",
    "home.skill3.title": "Absolute Precision",
    "home.skill3.desc": "Reaching goals with the force of the tides",
    "home.cta.title": "⟡ Let's work together ⟡",
    "home.cta.text": "I'd be delighted to talk about your projects. Feel free to reach out for collaborations, projects, or simply to chat about design.",
    "home.social.title": "Follow me on",

    "about.hero.label": "⚓ BUT MMI — Guadeloupe",
    "about.hero.title.pre": "About ",
    "about.hero.title.hl": "me",
    "about.hero.title.post": "",
    "about.hero.subtitle": "Design, web development and visual creation — I build modern digital experiences that blend creativity and functionality.",
    "about.section1.title": "About me",
    "about.section1.p1": "A student in <span class=\"hl\">BUT MMI (Multimedia & Internet Professions)</span>, I develop projects mixing design, web development and visual creation. Passionate about the digital world, I love imagining modern, intuitive and aesthetic experiences that combine creativity and functionality.",
    "about.section1.p2": "Curious and versatile, I work as much on a project's <span class=\"hl\">visual identity</span> as on its web integration or user experience. I place great importance on detail, ergonomics and visual impact to create interfaces that are both effective and pleasant to use.",
    "about.section1.p3": "<span class=\"hl\">Drawing, art and graphic creation</span> also hold an important place in my journey. They fuel my creativity and shape how I design multimedia projects. I love turning ideas into dynamic visual concepts and bringing unique graphic universes to life.",
    "about.timeline.title": "My journey",
    "about.timeline1.year": "2026 — Ongoing",
    "about.timeline1.title": "BUT MMI — Multimedia & Internet Professions",
    "about.timeline1.desc": "Multidisciplinary programme covering web development, UI/UX design, digital communication, audiovisual, graphic creation and multimedia project management.",
    "about.timeline2.year": "Projects",
    "about.timeline2.title": "Academic & personal projects",
    "about.timeline2.desc": "Websites, style guides, visual identities, posters, digital illustrations and interface prototypes. Each project is a chance to explore and push my creative limits.",
    "about.timeline3.year": "Today",
    "about.timeline3.title": "Available for new projects",
    "about.timeline3.desc": "Open to collaborations, internships and freelance projects in graphic design, web development and UI/UX.",
    "about.skills.title": "My skills",
    "about.skills1.cat": "🎨 Design & Creation",
    "about.skills1.li1": "UI/UX Design",
    "about.skills1.li2": "Visual identities",
    "about.skills1.li3": "Interface mockups",
    "about.skills1.li4": "Visual content",
    "about.skills1.li5": "Illustration & drawing",
    "about.skills2.cat": "💻 Web Development",
    "about.skills2.li1": "HTML / CSS",
    "about.skills2.li2": "JavaScript",
    "about.skills2.li3": "Responsive Design",
    "about.skills2.li4": "Modern web integration",
    "about.skills2.li5": "Interface optimisation",
    "about.skills3.cat": "📱 Multimedia",
    "about.skills3.li1": "Visual communication",
    "about.skills3.li2": "Editing & digital content",
    "about.skills3.li3": "Creative project management",
    "about.skills3.li4": "Interactive concepts",
    "about.passions.title": "My passions",
    "about.passion1.title": "Art & Drawing",
    "about.passion1.text": "Drawing and artistic creation have always been part of my world. I love experimenting with different visual styles and developing original graphic concepts.",
    "about.passion2.title": "Design & User Experience",
    "about.passion2.text": "I'm passionate about modern interfaces, light motion design and interactive experiences that make navigation smoother and more immersive.",
    "about.passion3.title": "Development & Innovation",
    "about.passion3.text": "Building websites and web projects lets me blend logic and creativity. I love designing modern digital experiences with close attention to detail.",
    "about.cta.title": "⟡ Let's work together ⟡",
    "about.cta.text": "A project, an idea, a collaboration? I'm available and ready to set sail on new creative adventures.",
    "about.journal.cta": "Discover my internship journal",

    "contact.hero.label": "⚓ Ready to set sail",
    "contact.hero.title.pre": "Let's work ",
    "contact.hero.title.hl": "together",
    "contact.hero.subtitle": "A project, an idea, a collaboration?<br>I'm listening — every great adventure starts with a message.",
    "contact.available": "Available for new projects",
    "contact.available.sub": "Usually replies within 24h",
    "contact.info.email": "Email",
    "contact.info.location": "Location",
    "contact.info.location.value": "Guadeloupe, France · Remote available",
    "contact.info.social": "Social media",
    "contact.info.services": "Services offered",
    "contact.info.services.value": "Graphic design · Web development<br>UI/UX · Branding · BUT MMI",
    "contact.form.title": "Send me a message",
    "contact.form.subtitle.pre": "All fields marked",
    "contact.form.subtitle.post": "are required.",
    "contact.form.fname": "First name",
    "contact.form.fname.placeholder": "John",
    "contact.form.lname": "Last name",
    "contact.form.lname.placeholder": "Doe",
    "contact.form.email": "Email",
    "contact.form.email.placeholder": "john@example.com",
    "contact.form.subject": "Project type",
    "contact.form.subject.placeholder": "Select an option",
    "contact.form.subject.opt1": "Graphic design / Branding",
    "contact.form.subject.opt2": "Web development",
    "contact.form.subject.opt3": "UI/UX Design",
    "contact.form.subject.opt4": "Collaboration",
    "contact.form.subject.opt5": "Other",
    "contact.form.message": "Message",
    "contact.form.message.placeholder": "Describe your project, your expectations…",
    "contact.form.submit": "⚓ Send message",
    "contact.form.sending": "⏳ Sending…",
    "contact.toast.fname": "⚠️ Please enter your first name.",
    "contact.toast.lname": "⚠️ Please enter your last name.",
    "contact.toast.email": "⚠️ Please enter your email address.",
    "contact.toast.emailInvalid": "⚠️ Invalid email address.",
    "contact.toast.message": "⚠️ Please write a message.",
    "contact.toast.messageShort": "⚠️ The message must contain at least 10 characters.",
    "contact.toast.success": "✅ Message sent! I'll get back to you shortly.",
    "contact.toast.error": "❌ Something went wrong. Please try again or email me directly.",

    "resume.badge": "⚓ Available for new projects",
    "resume.title.pre": "My ",
    "resume.title.hl": "Resume",
    "resume.subtitle": "Passionate graphic designer &amp; web developer, trained in BUT MMI. Find here my full journey, skills and experience.",
    "resume.card.meta": "Updated in 2025 · PDF Format",
    "resume.info.formation": "Education",
    "resume.info.location": "Location",
    "resume.info.location.value": "Guadeloupe · Remote",
    "resume.info.specialties": "Specialties",
    "resume.info.availability": "Availability",
    "resume.info.availability.value": "Immediate",
    "resume.btn.view": "View my resume",
    "resume.btn.download": "Download my resume",
    "resume.btn.contact": "📧 Contact me directly",
    "resume.note.pre": "You can also find me on",
    "resume.note.mid": "or check out my",
    "resume.note.post": "to see my work in detail.",
    "resume.note.projects": "projects",

    "projects.hero.label": "🌊 My work",
    "projects.hero.title.pre": "Projects ",
    "projects.hero.title.hl": "forged",
    "projects.hero.title.post": "in the depths",
    "projects.hero.subtitle": "Every project is a voyage — a technical and creative challenge met with precision, robustness and maritime sensitivity.",
    "projects.count.suffix": "project(s) shown",
    "projects.noResults": "No projects in this category yet.",
    "projects.card.open": "Open →",
    "projects.card.visit": "Visit →",
    "projects.card.viewProject": "Explore Project →",
    "projects.cta.title": "⟡ Got a project in mind? ⟡",
    "projects.cta.text": "I'm available for new collaborations. Let's talk about your next creative or technical challenge — every good idea deserves to be built.",
    "projects.cta.contact": "📧 Contact me",
    "projects.modal.download": "↓ Download",
    "projects.modal.close": "✕ Close",
    "projects.modal.loading": "Loading…",
    "projects.filter.all": "All",
    "projects.filter.web": "Websites",
    "projects.filter.design": "Graphic design",
    "projects.filter.branding": "Branding",
    "projects.filter.print": "Print",
    "projects.filter.illustration": "Illustration",
    "projects.filter.uiux": "UI/UX",
    "projects.journal.cta": "View my internship journal",
    "projects.journal.title": "Internship journal",
    "projects.journal.text": "Check out the journal from my first-year internship: assignments, lessons learned and takeaways.",
    "projects.contact.title": "⟡ Get in touch ⟡",
    "projects.contact.text": "An idea, a project, want to collaborate? Write to me, I reply quickly.",
  }
};

function t(key) {
  const lang = accessibilityState.language === 'en' ? 'en' : 'fr';
  const dict = I18N[lang] || I18N.fr;
  return (key in dict) ? dict[key] : (I18N.fr[key] !== undefined ? I18N.fr[key] : key);
}
window.t = t; // exposé pour project.html (rendu dynamique des cartes)

/* ────────────────────────────────────────────────────
   1. ÉTAT ACCESSIBILITÉ (persisté dans localStorage)
──────────────────────────────────────────────────── */
let accessibilityState = {
  theme: 'dark',
  fontSize: 'normal',
  highContrast: false,
  language: 'fr'
};

function loadPreferences() {
  const savedTheme    = localStorage.getItem('theme');
  const savedFontSize = localStorage.getItem('fontSize');
  const savedContrast = localStorage.getItem('highContrast') === 'true';
  const savedLang     = localStorage.getItem('language');

  if (savedTheme)    accessibilityState.theme        = savedTheme;
  if (savedFontSize) accessibilityState.fontSize     = savedFontSize;
  if (savedContrast) accessibilityState.highContrast = savedContrast;
  if (savedLang)     accessibilityState.language     = savedLang;

  applyTheme();
  applyFontSize();
  applyContrast();
  applyLanguage();
  updateLabels();
}

/* ── Thème (déjà fonctionnel — inchangé) ── */
function toggleTheme() {
  accessibilityState.theme = accessibilityState.theme === 'dark' ? 'light' : 'dark';
  applyTheme();
  updateLabels();
  localStorage.setItem('theme', accessibilityState.theme);
}

function applyTheme() {
  if (accessibilityState.theme === 'light') {
    document.body.classList.add('light-theme');
  } else {
    document.body.classList.remove('light-theme');
  }
}

/* ── Taille police ──
   ✅ FIX : la classe est posée sur <html> (document.documentElement)
   et non sur <body>. --font-size est lue par `html { font-size:
   var(--font-size) }` ; une variable CSS déclarée sur <body> ne
   remonte jamais vers son parent <html>, donc rien ne changeait. */
function cycleFontSize() {
  const sizes = ['normal', 'large', 'extra-large'];
  const idx   = sizes.indexOf(accessibilityState.fontSize);
  accessibilityState.fontSize = sizes[(idx + 1) % sizes.length];
  applyFontSize();
  updateLabels();
  localStorage.setItem('fontSize', accessibilityState.fontSize);
}

function applyFontSize() {
  const root = document.documentElement;
  root.classList.remove('font-large', 'font-extra-large');
  if (accessibilityState.fontSize === 'large')       root.classList.add('font-large');
  if (accessibilityState.fontSize === 'extra-large') root.classList.add('font-extra-large');
}

/* ── Contraste ── */
function toggleContrast() {
  accessibilityState.highContrast = !accessibilityState.highContrast;
  applyContrast();
  updateLabels();
  localStorage.setItem('highContrast', accessibilityState.highContrast);
}

function applyContrast() {
  document.body.classList.toggle('high-contrast', accessibilityState.highContrast);
}

/* ── Langue ──
   ✅ FIX : le système ne faisait que poser `lang` sur <html> sans
   jamais traduire aucun texte. On parcourt maintenant tous les
   éléments porteurs d'un attribut data-i18n(-*) et on remplace
   leur contenu / attribut par la traduction correspondante. */
function toggleLanguage() {
  accessibilityState.language = accessibilityState.language === 'fr' ? 'en' : 'fr';
  applyLanguage();
  updateLabels();
  localStorage.setItem('language', accessibilityState.language);
  // Permet à project.html de re-générer les cartes projet traduites
  document.dispatchEvent(new CustomEvent('languagechange'));
}

function applyLanguage() {
  document.documentElement.lang = accessibilityState.language;

  document.querySelectorAll('[data-i18n]').forEach(el => {
    el.textContent = t(el.getAttribute('data-i18n'));
  });
  document.querySelectorAll('[data-i18n-html]').forEach(el => {
    el.innerHTML = t(el.getAttribute('data-i18n-html'));
  });
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    el.setAttribute('placeholder', t(el.getAttribute('data-i18n-placeholder')));
  });
  document.querySelectorAll('[data-i18n-aria-label]').forEach(el => {
    el.setAttribute('aria-label', t(el.getAttribute('data-i18n-aria-label')));
  });
  document.querySelectorAll('[data-i18n-title]').forEach(el => {
    el.setAttribute('title', t(el.getAttribute('data-i18n-title')));
  });
  document.querySelectorAll('[data-i18n-alt]').forEach(el => {
    el.setAttribute('alt', t(el.getAttribute('data-i18n-alt')));
  });
}

/* ── Labels ── */
function updateLabels() {
  const tl  = document.getElementById('theme-label');
  const fl  = document.getElementById('font-size-label');
  const cl  = document.getElementById('contrast-label');
  const ll  = document.getElementById('language-label');

  if (tl) tl.textContent = accessibilityState.theme === 'dark' ? t('a11y.theme.dark') : t('a11y.theme.light');
  if (fl) fl.textContent = { normal: t('a11y.fontSize.normal'), large: t('a11y.fontSize.large'), 'extra-large': t('a11y.fontSize.xlarge') }[accessibilityState.fontSize];
  if (cl) cl.textContent = accessibilityState.highContrast ? t('a11y.contrast.on') : t('a11y.contrast.off');
  if (ll) ll.textContent = accessibilityState.language === 'fr' ? t('a11y.language.fr') : t('a11y.language.en');
}

/* ────────────────────────────────────────────────────
   2. WIDGET ACCESSIBILITÉ — toggle panel
──────────────────────────────────────────────────── */
function initAccessibilityWidget() {
  const toggle = document.getElementById('accessibility-toggle');
  const panel  = document.getElementById('accessibility-panel');
  if (!toggle || !panel) return;

  toggle.addEventListener('click', (e) => {
    e.stopPropagation();
    panel.classList.toggle('hidden');
  });

  document.addEventListener('click', (e) => {
    if (!e.target.closest('.accessibility-widget')) {
      panel.classList.add('hidden');
    }
  });

  // Navigation clavier
  toggle.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      panel.classList.toggle('hidden');
    }
    if (e.key === 'Escape') panel.classList.add('hidden');
  });
}

/* ────────────────────────────────────────────────────
   3. NAVIGATION
──────────────────────────────────────────────────── */
function initNavigation() {
  // Lien actif
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-link').forEach(link => {
    const href = link.getAttribute('href');
    link.classList.toggle('active', href === currentPage || (currentPage === '' && href === 'index.html'));
  });

  // Menu hamburger mobile
  const navToggle = document.querySelector('.nav-toggle');
  const nav       = document.querySelector('.nav');
  const header    = document.getElementById('header');

  function isNavOpen() { return nav.classList.contains('open'); }

  function openNav() {
    nav.classList.add('open');
    navToggle.classList.add('active');
    navToggle.setAttribute('aria-expanded', 'true');
    document.body.classList.add('nav-locked');
    if (header) header.style.transform = 'translateY(0)'; // le header reste visible pendant que le menu est ouvert
  }

  function closeNav() {
    nav.classList.remove('open');
    navToggle.classList.remove('active');
    navToggle.setAttribute('aria-expanded', 'false');
    document.body.classList.remove('nav-locked');
  }

  if (navToggle && nav) {
    navToggle.setAttribute('aria-expanded', 'false');

    // ✅ FIX bug mobile : le menu ne reste plus jamais bloqué ouvert.
    // - state clair ouvert/fermé
    // - fermeture au clic sur un lien
    // - fermeture au clic en dehors du menu
    // - fermeture avec Échap (clavier)
    // - fermeture automatique si la fenêtre repasse en desktop
    navToggle.addEventListener('click', (e) => {
      e.stopPropagation();
      isNavOpen() ? closeNav() : openNav();
    });

    nav.querySelectorAll('.nav-link').forEach(l => l.addEventListener('click', closeNav));

    document.addEventListener('click', (e) => {
      if (isNavOpen() && !e.target.closest('.nav') && !e.target.closest('.nav-toggle')) closeNav();
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && isNavOpen()) { closeNav(); navToggle.focus(); }
    });

    window.addEventListener('resize', () => {
      if (window.innerWidth > 768 && isNavOpen()) closeNav();
    });
  }

  // Masquer/afficher header au scroll
  // ✅ FIX : jamais pendant que le menu mobile est ouvert (c'était la cause du
  // menu qui semblait "rester bloqué" — le header entier (donc le menu qu'il
  // contient) se cachait en cours de scroll alors que le menu était toujours ouvert).
  let lastScroll = 0;
  if (header) {
    window.addEventListener('scroll', () => {
      if (nav && nav.classList.contains('open')) return;
      const currentScroll = window.pageYOffset;
      header.style.transform = (currentScroll > lastScroll && currentScroll > 100)
        ? 'translateY(-100%)' : 'translateY(0)';
      lastScroll = currentScroll;
    }, { passive: true });
  }

  // Smooth scroll ancres
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });
}

/* ────────────────────────────────────────────────────
   4. HERO BACKGROUND : fade-in + parallax
──────────────────────────────────────────────────── */
function initHeroBg() {
  const heroBg = document.querySelector('.hero-background');
  if (!heroBg) return;

  setTimeout(() => requestAnimationFrame(() => heroBg.classList.add('loaded')), 100);

  const heroSection = document.querySelector('.hero');
  let ticking = false;

  window.addEventListener('scroll', () => {
    if (!ticking) {
      requestAnimationFrame(() => {
        const scrollY     = window.pageYOffset;
        const heroHeight  = heroSection ? heroSection.offsetHeight : window.innerHeight;
        if (scrollY < heroHeight) {
          heroBg.style.transform = `scale(1) translateY(${scrollY * 0.3}px)`;
          const fadeOut = 1 - (scrollY / heroHeight) * 0.6;
          heroBg.style.opacity  = Math.max(0, Math.min(0.55, 0.55 * fadeOut));
        }
        ticking = false;
      });
      ticking = true;
    }
  }, { passive: true });
}

/* ────────────────────────────────────────────────────
   5. SCROLL REVEAL (Intersection Observer)
──────────────────────────────────────────────────── */
function initScrollReveal() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
}

/* ────────────────────────────────────────────────────
   6. BOUTON SCROLL TO TOP
──────────────────────────────────────────────────── */
function initScrollTop() {
  const btn = document.getElementById('scroll-top-btn');
  if (!btn) return;

  window.addEventListener('scroll', () => {
    btn.classList.toggle('visible', window.pageYOffset > 400);
  }, { passive: true });

  btn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
}

/* ────────────────────────────────────────────────────
   7. FORMULAIRE CONTACT — EmailJS
──────────────────────────────────────────────────── */
function initContactForm() {
  const form  = document.getElementById('contact-form');
  const toast = document.getElementById('form-toast');
  if (!form || !toast) return;

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  function showToast(type, msg) {
    toast.className = 'form-toast ' + type;
    toast.innerHTML = msg;
    toast.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  }

  form.addEventListener('submit', async function(e) {
    e.preventDefault();

    const fname   = document.getElementById('fname')?.value.trim()   || '';
    const lname   = document.getElementById('lname')?.value.trim()   || '';
    const email   = document.getElementById('email')?.value.trim()   || '';
    const message = document.getElementById('message')?.value.trim() || '';
    const subject = document.getElementById('subject')?.value        || 'Non spécifié';

    // Validation
    if (!fname)                       return showToast('error', t('contact.toast.fname'));
    if (!lname)                       return showToast('error', t('contact.toast.lname'));
    if (!email)                       return showToast('error', t('contact.toast.email'));
    if (!emailRegex.test(email))      return showToast('error', t('contact.toast.emailInvalid'));
    if (!message)                     return showToast('error', t('contact.toast.message'));
    if (message.length < 10)          return showToast('error', t('contact.toast.messageShort'));

    const btn = form.querySelector('.submit-btn');
    const originalLabel = btn.textContent;
    btn.textContent = t('contact.form.sending');
    btn.disabled = true;
    toast.className = 'form-toast';
    toast.innerHTML = '';

    try {
      // EmailJS — remplacez les IDs ci-dessous par les vôtres
      // Service ID : votre service EmailJS
      // Template ID : votre template (doit envoyer vers levynetwork05@gmail.com)
      // Public Key : votre clé publique EmailJS
      if (typeof emailjs !== 'undefined') {
        await emailjs.send(
          'service_ccw96ac',   // ← Remplacer par votre Service ID EmailJS
          'template_gvgla5k',  // ← Remplacer par votre Template ID EmailJS
          {
            from_name:    fname + ' ' + lname,
            from_email:   email,
            subject:      subject,
            message:      message,
            to_email:     'levynetwork05@gmail.com',
            reply_to:     email
          }
          // La clé publique est initialisée via emailjs.init() dans le HTML
        );
        showToast('success', t('contact.toast.success'));
        form.reset();
      } else {
        // Fallback si EmailJS non chargé : simulation pour démo
        await new Promise(r => setTimeout(r, 1400));
        showToast('success', t('contact.toast.success'));
        form.reset();
      }
    } catch (err) {
      console.error('EmailJS error:', err);
      showToast('error', t('contact.toast.error'));
    } finally {
      btn.textContent = t('contact.form.submit');
      btn.disabled = false;
    }
  });
}

/* ────────────────────────────────────────────────────
   8. INIT AU CHARGEMENT
──────────────────────────────────────────────────── */
document.addEventListener('DOMContentLoaded', () => {
  loadPreferences();
  initAccessibilityWidget();
  initNavigation();
  initHeroBg();
  initScrollReveal();
  initScrollTop();
  initContactForm();
});
