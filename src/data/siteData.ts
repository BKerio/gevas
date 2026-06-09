export const companyInfo = {
  name: "Gevas International",
  tagline: "Building Tomorrow's Landmarks",
  description: "Global engineering excellence and construction innovation. Trusted partner for landmark projects across 25+ countries.",
  founded: 1999,
  employees: "2,400+",
  projects: "150+",
  countries: 25,
  phone: "+254 728 932651",
  email: "info@gevasinternational.co.ke",
  address: "Nairobi, Kenya",
  hours: {
    weekday: "8:00 AM - 6:00 PM",
    saturday: "9:00 AM - 2:00 PM",
    sunday: "Closed",
  },
  social: {
    facebook: "https://facebook.com/gevasinternational",
    twitter: "https://twitter.com/gevasintl",
    linkedin: "https://linkedin.com/company/gevas-international",
    instagram: "https://instagram.com/gevasinternational",
  },
};

export const navLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Projects", href: "/projects" },
  { label: "Team", href: "/team" },
  { label: "Careers", href: "/careers" },
  { label: "News", href: "/news" },
  { label: "Contact", href: "/contact" },
];

export const heroSlides = [
  {
    image: "/images/hero-1.jpg",
    title: "25 Years of Excellence",
    subtitle: "in Construction & Engineering",
    description: "From concept to completion, we deliver landmark projects that shape skylines and transform communities worldwide.",
    cta1: "Our Projects",
    cta2: "Get a Quote",
  },
  {
    image: "/images/hero-2.jpg",
    title: "Global Engineering Solutions",
    subtitle: "Innovation Without Borders",
    description: "Operating across 25 countries, Gevas International brings world-class expertise to every project.",
    cta1: "Our Services",
    cta2: "Contact Us",
  },
  {
    image: "/images/hero-3.jpg",
    title: "Building Infrastructure",
    subtitle: "That Connects Nations",
    description: "Bridges, highways, and critical infrastructure that drives economic growth and progress.",
    cta1: "View Projects",
    cta2: "Learn More",
  },
];

export const aboutFeatures = [
  {
    title: "Reputation for Excellence",
    description: "Over two decades of delivering projects on time, within budget, and above expectations.",
  },
  {
    title: "We Build Partnerships",
    description: "Long-term relationships with clients, subcontractors, and stakeholders built on trust and transparency.",
  },
  {
    title: "Guided by Commitment",
    description: "Unwavering dedication to safety, quality, and sustainability in every project we undertake.",
  },
  {
    title: "A Team of Professionals",
    description: "2,400+ skilled engineers, architects, and construction specialists driving innovation.",
  },
];

export const coreValues = [
  {
    title: "Safety First",
    description: "Zero compromise on safety. Our comprehensive safety protocols ensure every worker returns home safely every day. We maintain industry-leading safety records across all our project sites.",
    icon: "Shield",
  },
  {
    title: "Client Focus",
    description: "We listen, adapt, and deliver. Every project is tailored to meet the unique needs and vision of our clients, ensuring complete satisfaction from concept to handover.",
    icon: "Users",
  },
  {
    title: "Integrity",
    description: "Transparency and ethical conduct form the foundation of every business relationship. We deliver on our promises with honesty and accountability at every step.",
    icon: "Award",
  },
];

export const services = [
  {
    id: "civil-engineering",
    title: "Civil Engineering",
    shortDesc: "Comprehensive civil engineering solutions from design to execution for infrastructure projects of any scale.",
    fullDesc: "Our civil engineering division delivers comprehensive solutions encompassing site development, structural design, geotechnical analysis, and environmental compliance. We leverage cutting-edge BIM technology and sustainable design practices to create infrastructure that stands the test of time. From initial feasibility studies to final construction management, our team of chartered engineers ensures every project meets the highest standards of safety, efficiency, and innovation.",
    icon: "Building2",
    benefits: [
      "Advanced BIM modeling and 3D visualization",
      "Sustainable design with LEED certification support",
      "Full regulatory compliance and permitting",
      "Value engineering to optimize project costs",
    ],
    image: "/images/project-highway.jpg",
  },
  {
    id: "building-construction",
    title: "Building Construction",
    shortDesc: "From commercial towers to residential complexes, we construct buildings that define city skylines.",
    fullDesc: "Gevas International's building construction division specializes in delivering high-rise commercial towers, luxury residential developments, mixed-use complexes, and institutional facilities. Our integrated approach combines architectural excellence with engineering precision, utilizing prefabrication and modular construction techniques to accelerate timelines while maintaining uncompromising quality standards.",
    icon: "Home",
    benefits: [
      "Turnkey construction management",
      "Green building certification expertise",
      "Advanced project scheduling with Primavera P6",
      "Quality assurance at every phase",
    ],
    image: "/images/project-hq.jpg",
  },
  {
    id: "road-construction",
    title: "Road Construction",
    shortDesc: "Highways, urban roads, and rural infrastructure built to the highest engineering standards.",
    fullDesc: "Our road construction expertise spans highway development, urban arterial roads, rural access routes, and specialized pavement solutions. We employ state-of-the-art paving equipment, automated grade control systems, and advanced materials testing to deliver road networks that ensure safety, durability, and optimal traffic flow for decades.",
    icon: "Road",
    benefits: [
      "Full-spectrum highway development",
      "Smart road technology integration",
      "Environmental impact mitigation",
      "Long-term maintenance planning",
    ],
    image: "/images/project-highway.jpg",
  },
  {
    id: "industrial-projects",
    title: "Industrial Projects",
    shortDesc: "Manufacturing plants, warehouses, and industrial complexes designed for maximum efficiency.",
    fullDesc: "We design and construct industrial facilities that optimize operational workflows, energy efficiency, and worker safety. Our portfolio includes manufacturing plants, distribution centers, cold storage facilities, and heavy industrial complexes. We understand the unique requirements of industrial construction and deliver facilities that meet stringent industry-specific regulations.",
    icon: "Factory",
    benefits: [
      "Process-optimized facility layout",
      "HVAC and utility system design",
      "Regulatory compliance (OSHA, EPA)",
      "Phased construction for operational continuity",
    ],
    image: "/images/project-industrial.jpg",
  },
  {
    id: "mechanical-engineering",
    title: "Mechanical Engineering",
    shortDesc: "HVAC, plumbing, fire protection, and mechanical systems for complex building projects.",
    fullDesc: "Our mechanical engineering services cover the complete lifecycle of building systems from concept design through commissioning. We specialize in high-performance HVAC systems, energy-efficient plumbing solutions, comprehensive fire protection systems, and industrial mechanical installations. Our engineers utilize advanced computational fluid dynamics (CFD) modeling to optimize system performance.",
    icon: "Cog",
    benefits: [
      "Energy-efficient system design",
      "CFD analysis and optimization",
      "Integrated Building Management Systems",
      "Green building compliance",
    ],
    image: "/images/project-industrial.jpg",
  },
  {
    id: "electrical-engineering",
    title: "Electrical Engineering",
    shortDesc: "Power distribution, lighting, and smart building electrical systems.",
    fullDesc: "Gevas International provides comprehensive electrical engineering services including medium and low-voltage power distribution, emergency power systems, intelligent lighting design, structured cabling, and smart building integration. Our certified electrical engineers ensure all installations comply with NEC standards and local electrical codes while maximizing energy efficiency.",
    icon: "Zap",
    benefits: [
      "Complete power system design",
      "Smart building integration",
      "Renewable energy system installation",
      " arc flash analysis and safety",
    ],
    image: "/images/project-solar.jpg",
  },
  {
    id: "water-infrastructure",
    title: "Water Infrastructure",
    shortDesc: "Water treatment plants, distribution networks, and wastewater management systems.",
    fullDesc: "Our water infrastructure division designs and constructs water treatment facilities, sewage treatment plants, distribution networks, stormwater management systems, and desalination plants. We employ advanced treatment technologies and sustainable design practices to ensure communities have access to clean, reliable water supplies while protecting natural ecosystems.",
    icon: "Droplets",
    benefits: [
      "Advanced water treatment technologies",
      "Sustainable stormwater management",
      "SCADA system integration",
      "Environmental compliance expertise",
    ],
    image: "/images/project-water.jpg",
  },
  {
    id: "project-management",
    title: "Project Management",
    shortDesc: "End-to-end project delivery with expert planning, scheduling, and cost control.",
    fullDesc: "Gevas International's project management services provide comprehensive oversight from project inception through final closeout. Our certified project managers employ industry-best methodologies including PMI standards, Lean Construction principles, and Agile project delivery. We utilize advanced project controls software to ensure transparent reporting, proactive risk management, and on-time, on-budget delivery.",
    icon: "ClipboardList",
    benefits: [
      "PMI-certified project managers",
      "Real-time project dashboards",
      "Comprehensive risk management",
      "Stakeholder communication protocols",
    ],
    image: "/images/project-hq.jpg",
  },
  {
    id: "consultancy-services",
    title: "Consultancy Services",
    shortDesc: "Expert advisory on feasibility studies, value engineering, and construction strategy.",
    fullDesc: "Our consultancy division provides strategic advisory services to public and private sector clients. We conduct comprehensive feasibility studies, investment appraisals, value engineering assessments, and construction strategy development. Our advisory team includes chartered surveyors, certified cost engineers, and sustainability consultants who bring decades of combined experience.",
    icon: "Lightbulb",
    benefits: [
      "Independent feasibility assessments",
      "Value engineering workshops",
      "Risk and opportunity analysis",
      "Due diligence for acquisitions",
    ],
    image: "/images/about-building.jpg",
  },
  {
    id: "facility-maintenance",
    title: "Facility Maintenance",
    shortDesc: "Comprehensive maintenance programs to extend asset life and ensure operational efficiency.",
    fullDesc: "Gevas International offers integrated facility maintenance services that keep buildings and infrastructure operating at peak performance. Our comprehensive maintenance programs cover preventive maintenance, corrective repairs, system upgrades, and 24/7 emergency response. We utilize computerized maintenance management systems (CMMS) to optimize maintenance schedules and reduce lifecycle costs.",
    icon: "Wrench",
    benefits: [
      "24/7 emergency response teams",
      "CMMS-driven maintenance scheduling",
      "Energy audit and optimization",
      "Lifecycle asset management",
    ],
    image: "/images/project-residential.jpg",
  },
];

export const projects = [
  {
    id: "nairobi-expressway-link",
    title: "Nairobi Expressway Expansion Link",
    category: "Infrastructure",
    image: "/images/project-highway.jpg",
    location: "Nairobi, Kenya",
    year: "2024",
    client: "Kenya National Highways Authority (KeNHA)",
    value: "$180M",
    description: "A critical 12-kilometer multi-lane highway expansion including elevated links, grade separation, and intelligent toll systems connecting Nairobi's central business district with the international airport.",
    scope: ["Civil engineering", "Highway construction", "Bridge link structures", "Toll plaza development", "Drainage & traffic systems"],
    status: "Completed",
  },
  {
    id: "kigali-heights-ii",
    title: "Kigali Heights Commercial Complex",
    category: "Commercial",
    image: "/images/project-hq.jpg",
    location: "Kigali, Rwanda",
    year: "2023",
    client: "Kigali Estates Ltd",
    value: "$120M",
    description: "A premium 20-story green commercial tower in Kigali featuring intelligent energy management, LEED Gold certification, and advanced retail and office zoning.",
    scope: ["Design-build", "Structural concrete framework", "MEP integration", "Curtain wall cladding", "Interior fit-out"],
    status: "Completed",
  },
  {
    id: "garissa-solar",
    title: "Garissa Solar Power Plant",
    category: "Industrial",
    image: "/images/project-solar.jpg",
    location: "Garissa, Kenya",
    year: "2024",
    client: "Kenya Electricity Generating Company (KenGen)",
    value: "$135M",
    description: "A 100MW solar photovoltaic power complex spanning 250 hectares, integrating state-of-the-art grid tracking systems, dedicated power substations, and transmission networks.",
    scope: ["Civil works", "PV panel installation", "Substation engineering", "Grid integration", "Commissioning"],
    status: "Completed",
  },
  {
    id: "kigamboni-bridge",
    title: "Kigamboni Bridge Expansion",
    category: "Infrastructure",
    image: "/images/project-bridge.jpg",
    location: "Dar es Salaam, Tanzania",
    year: "2023",
    client: "Tanzania National Roads Agency (TANROADS)",
    value: "$210M",
    description: "A 680-meter cable-stayed bridge spanning the Kurasini Creek, connecting Dar es Salaam CBD with Kigamboni district, built with advanced marine piling and suspension systems.",
    scope: ["Marine piling", "Tower construction", "Cable-stay installation", "Deck segment launching", "Approach road networks"],
    status: "Completed",
  },
  {
    id: "nyali-ocean-crest",
    title: "Nyali Ocean Crest Residences",
    category: "Residential",
    image: "/images/project-residential.jpg",
    location: "Mombasa, Kenya",
    year: "2024",
    client: "Coastline Developers Ltd",
    value: "$95M",
    description: "A premium luxury waterfront residential complex in Nyali comprising three 18-story towers, private marina access, recreational amenities, and sustainable oceanfront structural designs.",
    scope: ["Master planning", "Waterfront piling", "Tower construction", "Amenity fit-out", "Eco-friendly landscaping"],
    status: "Completed",
  },
  {
    id: "katosi-water-plant",
    title: "Katosi Water Treatment Plant",
    category: "Water",
    image: "/images/project-water.jpg",
    location: "Kampala, Uganda",
    year: "2023",
    client: "National Water and Sewerage Corporation (NWSC)",
    value: "$150M",
    description: "A modern 240 million liters per day water treatment plant drawing from Lake Victoria, utilizing advanced multi-stage filtration, chemical dosing, and high-capacity pumping systems.",
    scope: ["Intake structure engineering", "Water purification technology", "Pumping station installation", "Main pipeline layout", "SCADA automation"],
    status: "Completed",
  },
];

export const projectCategories = [
  "All",
  "Commercial",
  "Residential",
  "Industrial",
  "Infrastructure",
  "Water",
];

export const testimonials = [
  {
    id: 1,
    name: "Jean-Paul Mugisha",
    title: "CEO",
    company: "Kigali Estates Ltd",
    quote: "Gevas International delivered our commercial complex ahead of schedule while maintaining impeccable quality standards. Their team's professionalism and attention to detail set them apart from any contractor we've worked with before.",
    rating: 5,
    project: "Kigali Heights Commercial Complex",
  },
  {
    id: 2,
    name: "Eng. Moses Kabera",
    title: "Director of Infrastructure",
    company: "TANROADS",
    quote: "The Kigamboni Bridge Expansion was one of the most complex infrastructure undertakings in our nation's history. Gevas International navigated every challenge with expertise and delivered a landmark structure that will serve generations.",
    rating: 5,
    project: "Kigamboni Bridge Expansion",
  },
  {
    id: 3,
    name: "Eng. Joseph Mwangi",
    title: "Chief Development Officer",
    company: "KenGen",
    quote: "From initial concept to final commissioning, Gevas International demonstrated exceptional capability in renewable energy construction. Their expertise in solar installations is truly world-class.",
    rating: 5,
    project: "Garissa Solar Power Plant",
  },
  {
    id: 4,
    name: "Eng. Grace Nduta",
    title: "Director of Capital Projects",
    company: "KeNHA",
    quote: "The phased construction approach Gevas implemented for our expressway expansion link was nothing short of brilliant. They maintained traffic flow while delivering a world-class transit corridor.",
    rating: 5,
    project: "Nairobi Expressway Expansion Link",
  },
  {
    id: 5,
    name: "Dr. Silver Mugisha",
    title: "Managing Director",
    company: "National Water and Sewerage Corporation",
    quote: "Gevas International's expertise in water infrastructure is remarkable. They delivered our treatment facility with zero safety incidents and the plant is performing 15% above design capacity.",
    rating: 5,
    project: "Katosi Water Treatment Plant",
  },
  {
    id: 6,
    name: "Amina Juma",
    title: "Managing Partner",
    company: "Coastline Developers Ltd",
    quote: "Working with Gevas International on our luxury residential complex was an absolute pleasure. They understood our vision and executed it flawlessly, creating a landmark that defines Nyali's shoreline.",
    rating: 5,
    project: "Nyali Ocean Crest Residences",
  },
];

export const teamMembers = [
  {
    id: 1,
    name: "Gevas Korir",
    title: "Chief Executive Officer",
    department: "Executive",
    bio: "Founder and CEO with over 30 years of experience in international construction. Alexander established Gevas International in 1999 with a vision to deliver world-class engineering solutions across the globe.",
    education: "MSc Civil Engineering, MIT",
    image: "/images/team-1.jpg",
  },
  {
    id: 2,
    name: "Victoria Mutai",
    title: "Chief Operations Officer",
    department: "Executive",
    bio: "Victoria oversees all operational aspects of Gevas International's global projects. Her strategic leadership has been instrumental in expanding the company's footprint to 25 countries.",
    education: "MBA, Harvard Business School",
    image: "/images/team-2.jpg",
  },
  {
    id: 3,
    name: "Dr. James Kamau",
    title: "Chief Technical Officer",
    department: "Engineering",
    bio: "A renowned structural engineer, Dr. Thornton leads Gevas International's technical innovation and R&D initiatives. He has published over 50 papers on advanced construction methodologies.",
    education: "PhD Structural Engineering, Stanford",
    image: "/images/team-3.jpg",
  },
  {
    id: 4,
    name: "Nadia Hassan",
    title: "VP of Project Management",
    department: "Project Management",
    bio: "Nadia manages Gevas International's portfolio of mega-projects. Her expertise in complex project delivery has resulted in a 98% on-time completion rate across all divisions.",
    education: "PMP, MSc Construction Management",
    image: "/images/team-4.jpg",
  },
  {
    id: 5,
    name: "Michael Chen",
    title: "Director of Civil Engineering",
    department: "Engineering",
    bio: "Michael leads the civil engineering division with expertise in bridge design, highway construction, and geotechnical engineering. He has overseen $2B+ in infrastructure projects.",
    education: "MSc Civil Engineering, UC Berkeley",
    image: "/images/team-5.jpg",
  },
  {
    id: 6,
    name: "Elena Rossi",
    title: "Director of Sustainability",
    department: "Engineering",
    bio: "Elena drives Gevas International's commitment to sustainable construction. She has implemented green building practices that have reduced project carbon footprints by an average of 40%.",
    education: "MSc Sustainable Design, TU Delft",
    image: "/images/team-6.jpg",
  },
  {
    id: 7,
    name: "David Okafor",
    title: "Regional Director - Africa",
    department: "Executive",
    bio: "David manages Gevas International's operations across 8 African countries. His deep understanding of local markets and regulations has been key to the company's regional success.",
    education: "MBA, INSEAD",
    image: "/images/team-7.jpg",
  },
  {
    id: 8,
    name: "Sarah Mitchell",
    title: "Head of Health & Safety",
    department: "Operations",
    bio: "Sarah has transformed Gevas International's safety culture, achieving industry-leading safety performance metrics with a Lost Time Injury Rate 80% below industry average.",
    education: "NEBOSH Diploma, MSc Safety Management",
    image: "/images/team-8.jpg",
  },
];

export const newsArticles = [
  {
    id: 1,
    title: "Gevas International Wins $95M Nyali Ocean Crest Residences Contract",
    excerpt: "Gevas International has been awarded the landmark Nyali Ocean Crest Residences project in Mombasa, a luxury waterfront development that will redefine the coastal skyline.",
    category: "Company News",
    date: "December 15, 2025",
    author: "Communications Team",
    image: "/images/project-residential.jpg",
    content: `Gevas International is proud to announce that we have been awarded the prestigious Nyali Ocean Crest Residences project, a $95 million luxury waterfront development in Mombasa, Kenya. This landmark project comprises three 18-story towers with premium residential units, retail spaces, and world-class amenities.

The project represents one of the largest residential developments Gevas International has undertaken in East Africa. Our scope includes master planning, tower construction, marina development, landscaping, and full amenity fit-out.

\"We are thrilled to partner with Coastline Developers on this transformative project,\" said Alexander Gevas, CEO of Gevas International. \"This development will set new standards for luxury waterfront living in Mombasa.\"

Construction is scheduled to begin in Q3 2026 with completion targeted for Q4 2028.`,
  },
  {
    id: 2,
    title: "New Sustainability Initiative Targets Net-Zero Construction by 2035",
    excerpt: "Gevas International launches ambitious green construction program with commitment to achieving net-zero carbon emissions across all projects by 2035.",
    category: "Sustainability",
    date: "November 28, 2025",
    author: "Elena Rossi",
    image: "/images/project-solar.jpg",
    content: `Gevas International today announced a groundbreaking sustainability initiative that commits the company to achieving net-zero carbon emissions across all construction projects by 2035. The comprehensive program encompasses every aspect of our operations, from material sourcing and waste management to energy consumption and transportation.

\"As a global leader in construction, we have a responsibility to lead the industry's transition to sustainable practices,\" said Elena Rossi, Director of Sustainability. \"This initiative represents a fundamental shift in how we approach every project.\"

Key components of the program include:
- 100% renewable energy on all project sites by 2028
- 50% reduction in construction waste by 2030
- Mandatory carbon footprint assessment for every project
- Investment in carbon capture technologies
- Partnership with sustainable material suppliers

The initiative builds on Gevas International's existing green building expertise, which has already delivered over 30 LEED-certified projects worldwide.`,
  },
  {
    id: 3,
    title: "Kigamboni Bridge Expansion Wins International Engineering Excellence Award",
    excerpt: "The Kigamboni Bridge Expansion has been recognized with the prestigious International Engineering Excellence Award at the 2025 Global Infrastructure Summit.",
    category: "Awards",
    date: "November 10, 2025",
    author: "Communications Team",
    image: "/images/project-bridge.jpg",
    content: `The Kigamboni Bridge Expansion, constructed by Gevas International, has been honored with the International Engineering Excellence Award at the 2025 Global Infrastructure Summit in Singapore.

The $210 million bridge, which spans the Kurasini Creek in Dar es Salaam, was recognized for its innovative design, engineering complexity, and positive community impact. The project was completed in 2023, three months ahead of schedule.

\"This award is a testament to the incredible talent and dedication of our engineering team,\" said Dr. James Thornton, CTO of Gevas International. \"The Kigamboni Bridge Expansion pushed the boundaries of what is possible in modern bridge engineering.\"

The bridge features a cable-stayed suspension design and was constructed using advanced marine piling and incremental deck segment launching techniques that minimized environmental impact on the surrounding creek ecosystem.`,
  },
  {
    id: 4,
    title: "Gevas International Expands Operations to Southeast Asia",
    excerpt: "Strategic expansion into Southeast Asian markets with new regional headquarters in Singapore to capitalize on growing infrastructure investment.",
    category: "Company News",
    date: "October 22, 2025",
    author: "Victoria Sterling",
    image: "/images/hero-2.jpg",
    content: `Gevas International is pleased to announce our expansion into Southeast Asia with the opening of a new regional headquarters in Singapore. This strategic move positions the company to capitalize on the region's $2.5 trillion infrastructure investment pipeline over the next decade.

The new office will serve as Gevas International's hub for operations across Singapore, Malaysia, Indonesia, Thailand, Vietnam, and the Philippines. We have appointed seasoned industry executive Richard Lim as Regional Director for Asia-Pacific.

\"Southeast Asia represents one of the most dynamic construction markets in the world,\" said Victoria Sterling, COO. \"Our expansion reflects our confidence in the region's growth trajectory and our commitment to being a leading infrastructure partner.\"

The Singapore headquarters will initially employ 150 staff across project management, engineering, and business development functions.`,
  },
  {
    id: 5,
    title: "Implementing AI-Powered Construction Safety Monitoring",
    excerpt: "Gevas International deploys cutting-edge AI computer vision systems across all project sites to enhance worker safety and prevent incidents.",
    category: "Technology",
    date: "October 5, 2025",
    author: "Dr. James Thornton",
    image: "/images/hero-3.jpg",
    content: `Gevas International has rolled out an industry-first AI-powered safety monitoring system across all active construction sites globally. The system uses computer vision and machine learning to detect potential safety hazards in real-time and alert site supervisors before incidents occur.

The technology can identify over 50 different safety scenarios including workers without proper PPE, unsafe proximity to heavy machinery, fall hazards, and structural anomalies. The system processes over 10 million images daily across our project portfolio.

\"This represents a paradigm shift in construction safety,\" said Sarah Mitchell, Head of Health & Safety. \"We are moving from reactive safety measures to predictive prevention.\"

Early results from pilot deployments show a 65% reduction in near-miss incidents and a 40% improvement in PPE compliance rates. The system integrates with our existing safety management platform to provide comprehensive risk analytics.`,
  },
  {
    id: 6,
    title: "Katosi Water Treatment Plant Exceeds Performance Targets",
    excerpt: "Kampala's new water treatment facility, built by Gevas International, is performing 15% above design capacity while maintaining exceptional water quality standards.",
    category: "Project Update",
    date: "September 18, 2025",
    author: "Communications Team",
    image: "/images/project-water.jpg",
    content: `The Katosi Water Treatment Plant in Kampala, constructed by Gevas International for the National Water and Sewerage Corporation (NWSC), is exceeding all performance expectations six months after commissioning.

The $150 million facility, which employs advanced membrane filtration and UV disinfection technologies, is currently processing 276 million liters per day, 15% above its 240 million liter design capacity, while maintaining water quality standards that exceed WHO guidelines.

\"The facility's exceptional performance is a direct result of the precision engineering and quality construction delivered by Gevas International,\" said Dr. Silver Mugisha, Managing Director of NWSC Uganda.

The project was completed with zero safety incidents and has been recognized by the African Water Association as a benchmark for modern water treatment facility design.`,
  },
];

export const faqCategories = [
  {
    title: "General Questions",
    questions: [
      {
        q: "What services does Gevas International offer?",
        a: "Gevas International provides comprehensive engineering and construction services including civil engineering, building construction, road construction, industrial projects, mechanical and electrical engineering, water infrastructure, project management, consultancy services, and facility maintenance. We serve clients across commercial, residential, industrial, and infrastructure sectors.",
      },
      {
        q: "How long has Gevas International been in business?",
        a: "Gevas International was founded in 1999 and has over 25 years of experience delivering landmark projects across 25 countries. We have grown from a regional construction firm to a global engineering conglomerate with 2,400+ employees worldwide.",
      },
      {
        q: "What geographic regions does Gevas International operate in?",
        a: "We operate across North America, Europe, the Middle East, Africa, and Asia-Pacific. Our regional headquarters are located in Nairobi, London, Dubai, Lagos, and Singapore, with additional offices in 15 other countries.",
      },
    ],
  },
  {
    title: "Services & Projects",
    questions: [
      {
        q: "What is the typical project size Gevas International handles?",
        a: "We handle projects ranging from $5 million specialized constructions to over $500 million mega-developments. Our portfolio includes high-rise towers, highway systems, power plants, water treatment facilities, and large-scale residential communities.",
      },
      {
        q: "Does Gevas International offer design-build services?",
        a: "Yes, we offer comprehensive design-build services that integrate design and construction under a single contract. This approach reduces project timelines, improves cost control, and ensures seamless coordination between design and construction teams.",
      },
      {
        q: "Can Gevas International work with our existing architects and engineers?",
        a: "Absolutely. We regularly collaborate with client-selected design teams and can adapt our construction methodologies to integrate with any architectural or engineering partner. Our collaborative approach ensures the best outcomes for every project.",
      },
    ],
  },
  {
    title: "Project Process",
    questions: [
      {
        q: "What is Gevas International's typical project process?",
        a: "Our process begins with a comprehensive discovery phase including site assessment, feasibility studies, and stakeholder consultations. We then proceed through design development, permitting, pre-construction planning, construction execution, commissioning, and final handover. Each phase includes regular client reviews and transparent progress reporting.",
      },
      {
        q: "How does Gevas International ensure projects stay on budget?",
        a: "We employ rigorous cost management systems including detailed quantity surveys, value engineering workshops, real-time cost tracking, and proactive change management. Our project controls team provides weekly cost reports and early warnings on potential budget impacts.",
      },
      {
        q: "What safety standards does Gevas International follow?",
        a: "Safety is our top priority. We follow OSHA standards, local safety regulations, and our own internal safety protocols that often exceed industry requirements. Our Lost Time Injury Rate is 80% below industry average, and we have achieved zero-incident records on numerous projects.",
      },
    ],
  },
];

export const jobOpenings = [
  {
    id: 1,
    title: "Senior Project Manager",
    department: "Project Management",
    location: "Dubai, UAE",
    type: "Full-time",
    experience: "8+ years",
    description: "Lead large-scale construction projects from inception to completion, managing budgets, schedules, and stakeholder relationships.",
  },
  {
    id: 2,
    title: "Structural Engineer",
    department: "Engineering",
    location: "Nairobi, Kenya",
    type: "Full-time",
    experience: "5+ years",
    description: "Design and analyze structural systems for high-rise buildings, bridges, and industrial facilities using advanced engineering software.",
  },
  {
    id: 3,
    title: "Site Safety Manager",
    department: "Health & Safety",
    location: "London, UK",
    type: "Full-time",
    experience: "5+ years",
    description: "Oversee safety operations on construction sites, conduct risk assessments, and ensure compliance with all safety regulations.",
  },
  {
    id: 4,
    title: "Quantity Surveyor",
    department: "Commercial",
    location: "Singapore",
    type: "Full-time",
    experience: "4+ years",
    description: "Manage project costs, prepare tender documents, and conduct valuation of work completed for complex construction projects.",
  },
  {
    id: 5,
    title: "MEP Engineer",
    department: "Engineering",
    location: "Riyadh, Saudi Arabia",
    type: "Full-time",
    experience: "6+ years",
    description: "Design and oversee installation of mechanical, electrical, and plumbing systems for commercial and industrial projects.",
  },
  {
    id: 6,
    title: "BIM Coordinator",
    department: "Technology",
    location: "Remote",
    type: "Full-time",
    experience: "3+ years",
    description: "Coordinate Building Information Modeling processes across project teams, ensuring model accuracy and clash detection.",
  },
];

export const benefits = [
  "Competitive salary and performance bonuses",
  "Comprehensive health, dental, and vision insurance",
  "401(k) retirement plan with company matching",
  "Professional development and certification support",
  "Global rotation and international assignment opportunities",
  "Flexible work arrangements",
  "Paid time off and parental leave",
  "Employee wellness programs",
];

export const stats = [
  { value: 150, suffix: "+", label: "Projects Completed" },
  { value: 25, suffix: "", label: "Countries" },
  { value: 2400, suffix: "+", label: "Team Members" },
  { value: 25, suffix: "+", label: "Years of Excellence" },
];

export const clientLogos = [
  "KeNHA",
  "KenGen",
  "KURA",
  "KeRRA",
  "Kenya Power",
  "KETRACO",
  "Nairobi Water",
  "Kenya Pipeline",
  "Kenya Railways",
  "Kisumu Water",
];

export const milestones = [
  { year: "1999", title: "Company Founded", description: "Gevas International established in Nairobi, Kenya" },
  { year: "2003", title: "First International Project", description: "Awarded landmark bridge project in Canada" },
  { year: "2007", title: "European Expansion", description: "Opened London regional headquarters" },
  { year: "2010", title: "1,000 Employee Milestone", description: "Grew to over 1,000 team members globally" },
  { year: "2013", title: "Middle East Entry", description: "Launched operations in Dubai, UAE" },
  { year: "2016", title: "$1B Revenue Mark", description: "Achieved annual revenue exceeding $1 billion" },
  { year: "2019", title: "20th Anniversary", description: "Celebrated 20 years of engineering excellence" },
  { year: "2021", title: "Sustainability Initiative", description: "Committed to net-zero carbon by 2035" },
  { year: "2024", title: "25th Anniversary", description: "25 years of building tomorrow's landmarks" },
];

export const certifications = [
  "ISO 9001:2015 Quality Management",
  "ISO 14001:2015 Environmental Management",
  "ISO 45001:2018 Occupational Health & Safety",
  "LEED Accredited Professional",
  "PMI Registered Education Provider",
  "OSHA 30-Hour Construction Certified",
];
