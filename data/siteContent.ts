import { 
  Briefcase, 
  Landmark, 
  GraduationCap, 
  Plane, 
  Calculator, 
  Wheat, 
  Laptop,
  Scale,
  ShieldAlert,
  HeartPulse,
  Compass,
  Building2,
  FileCheck2,
  Car,
  HandHelping,
  FileText,
  BadgeCheck
} from "lucide-react";

export interface NavItem {
  name: string;
  href: string;
  badge?: string;
  children?: {
    name: string;
    description: string;
    href: string;
    iconName?: string;
  }[];
}

export const navigationItems: NavItem[] = [
  { name: "Home", href: "#hero" },
  { name: "About SREE", href: "#about" },
  { name: "Our Mission", href: "#mission" },
  { 
    name: "Services", 
    href: "#services",
    children: [
      { name: "EPFO & ESIC Assistance", description: "PF claims, passbook issues, ESIC benefit claims, pension guidance", href: "#services" },
      { name: "Passport & Government Services", description: "Passport issuance, verification, corrections & citizen facilitation", href: "#services" },
      { name: "Study Abroad Guidance", description: "Honest counseling, university shortlisting & legitimate visas", href: "#services" },
      { name: "Travel & Mobility", description: "Visa processing, international flight ticketing & logistics", href: "#services" },
      { name: "Recruitment & Placement", description: "Transparent job placements for youth and skilled trades", href: "#services" },
      { name: "Tax & Accounts", description: "ITR filing, GST compliance & bookkeeping for small ventures", href: "#services" },
      { name: "Insurance Advisory", description: "Life, health & crop insurance assistance without mis-selling", href: "#services" },
      { name: "Legal Guidance Support", description: "Initial legal direction, documentation review & rights advice", href: "#services" },
      { name: "Banking & Financial Services", description: "Account queries, MSME loan facilitation & DBT subsidy link", href: "#services" },
      { name: "Medical Assistance", description: "Ayushman Bharat, Arogyasri scheme guidance & hospital help", href: "#services" },
      { name: "Career Guru", description: "1-on-1 career pathing, resume refinement & mock interviews", href: "#services" },
      { name: "SREE Academy", description: "Employability bootcamps, digital literacy & soft skills", href: "#services" },
      { name: "Kisan Dost", description: "Farmer registrations, input subsidy & PM-Kisan verification", href: "#services" },
      { name: "Revenue Assistance", description: "Patta passbook, land records (Meebhoomi) & encumbrance checks", href: "#services" },
      { name: "RTO & Vehicle Services", description: "Driving license, registration transfer & fitness certificates", href: "#services" },
      { name: "SREE Seva", description: "Doorstep and community facilitation for senior citizens and disabled", href: "#services" },
      { name: "Digital Services", description: "Fastag, Aadhaar update facilitation & certified digital printing", href: "#services" },
    ]
  },
  { name: "SREE Grievance System", href: "#grievance", badge: "Priority" },
  { name: "Empowerment", href: "#empowerment" },
  { name: "Global Services", href: "#global-services" },
  { name: "Our Network", href: "#network" },
  { name: "Contact", href: "#contact" },
];

export const serviceCategories = [
  {
    id: "employment-social-security",
    title: "Employment & Social Security",
    description: "Guidance for contract workers, EPF claims, ESIC health access, gratuity, and pension facilitation.",
    icon: "Briefcase",
    link: "#grievance",
    tags: ["EPFO", "ESIC", "Pensions", "Labor Rights"]
  },
  {
    id: "government-citizen-services",
    title: "Government & Citizen Services",
    description: "Step-by-step guidance for Passports, RTO documentation, Aadhaar, Revenue & MeeSeva linkages.",
    icon: "Landmark",
    link: "#contact",
    tags: ["Passports", "RTO", "Revenue", "MeeSeva"]
  },
  {
    id: "education-career",
    title: "Education & Career",
    description: "Student counseling, career roadmaps, ethical study-abroad guidance, and SREE Academy skill development.",
    icon: "GraduationCap",
    link: "#empowerment",
    tags: ["Career Guru", "Study Abroad", "SREE Academy"]
  },
  {
    id: "travel-global-mobility",
    title: "Travel & Global Mobility",
    description: "Legitimate visa documentation, international ticketing, and ethical overseas employment assistance.",
    icon: "Plane",
    link: "#global-services",
    tags: ["Visas", "Ticketing", "Global Relocation"]
  },
  {
    id: "business-tax-finance",
    title: "Business, Tax & Finance",
    description: "Income tax return filings, GST support, small business accounting, and banking loan guidance.",
    icon: "Calculator",
    link: "#contact",
    tags: ["ITR Filing", "GST", "MSME Finance"]
  },
  {
    id: "agriculture-rural-services",
    title: "Agriculture & Rural Services",
    description: "Dedicated Kisan Dost scheme guidance, soil testing advisory, crop insurance, and subsidy records.",
    icon: "Wheat",
    link: "#empowerment",
    tags: ["Kisan Dost", "PM-Kisan", "Crop Insurance"]
  },
  {
    id: "digital-professional-services",
    title: "Digital & Professional Services",
    description: "Digital certifications, documentation verification, compliance assistance, and SREE Seva.",
    icon: "Laptop",
    link: "#contact",
    tags: ["Digital Seva", "Documentation", "Compliance"]
  }
];

export const grievanceSteps = [
  {
    step: "01",
    title: "Submit Grievance",
    subtitle: "Share your issue",
    description: "Citizen or employee securely submits grievance details along with relevant employment or identity records."
  },
  {
    step: "02",
    title: "Document Review",
    subtitle: "Thorough verification",
    description: "Our dedicated case desk validates records, payslips, PF numbers, and verifies the legal/procedural ground."
  },
  {
    step: "03",
    title: "Identify Channel",
    subtitle: "Correct jurisdictional route",
    description: "We determine the appropriate statutory authority (EPFO, Labor Commissioner, District Collectorate, etc.)."
  },
  {
    step: "04",
    title: "Assistance & Follow-up",
    subtitle: "Persistent facilitation",
    description: "We facilitate official submission, draft clear representation, and follow through required departmental stages."
  },
  {
    step: "05",
    title: "Status Update",
    subtitle: "Transparent reporting",
    description: "The citizen receives timely status updates until formal institutional response or disposal is reached."
  }
];

export const businessNetwork = [
  {
    id: "sree-solutions",
    name: "SREE SOLUTIONS",
    location: "India (HQ: Vijayawada, AP)",
    tagline: "Educate. Encourage. Empower My Country.",
    description: "Citizen support, employment assistance, statutory grievance guidance, rural empowerment, and career mentoring.",
    focusAreas: ["Grievance Facilitation", "Citizen Seva", "Youth & Farmer Mentorship"],
    linkText: "Current Entity",
    isCurrent: true,
  },
  {
    id: "sree-nexus-global",
    name: "SREE NEXUS GLOBAL",
    location: "Dubai, United Arab Emirates",
    tagline: "Global Gateway & Mobility Partner",
    description: "Independent international mobility entity handling global travel advisory, tourism, and overseas business facilitation.",
    focusAreas: ["Global Mobility", "Travel Logistics", "UAE Business Advisory"],
    linkText: "Learn About Nexus",
    externalUrl: "https://sreenexusglobal.com",
    isCurrent: false,
  },
  {
    id: "vexton-it",
    name: "VextonIT",
    location: "United States",
    tagline: "Technology Talent & Payroll Solutions",
    description: "Independent technology enterprise delivering specialized IT recruitment, technical placement, and enterprise payroll services.",
    focusAreas: ["IT Staffing", "Contract Placement", "US Payroll Solutions"],
    linkText: "Visit VextonIT",
    externalUrl: "https://vextonit.com",
    isCurrent: false,
  },
  {
    id: "manjucart",
    name: "ManjuCart",
    location: "E-Commerce",
    tagline: "Smart Shopping, Better Living.",
    description: "Consumer retail e-commerce platform curating high-value lifestyle, utility, and essentials for everyday citizens.",
    focusAreas: ["Direct Consumer Retail", "Everyday Essentials", "Customer Value"],
    linkText: "Visit ManjuCart.com",
    externalUrl: "https://manjucart.com/",
    isCurrent: false,
  }
];

export const globalServicesCountries = [
  {
    name: "Germany",
    code: "DE",
    description: "Assistance for Indian diaspora and skilled professionals with India-related EPFO, passport renewals & documentation.",
    highlight: "Skilled Migration & Statutory Linkage"
  },
  {
    name: "Canada",
    code: "CA",
    description: "NRI support for ancestral property records, Indian pension claims, and identity attestation guidance.",
    highlight: "NRI Records & Documentation"
  },
  {
    name: "United States",
    code: "US",
    description: "Dual documentation, overseas consular liaison guidance, and Indian statutory accounts management.",
    highlight: "Diaspora Assistance"
  },
  {
    name: "United Kingdom",
    code: "UK",
    description: "Indian citizenship certificates, repatriation paperwork, and academic credential verification advisory.",
    highlight: "Student & Expat Guidance"
  },
  {
    name: "United Arab Emirates",
    code: "AE",
    description: "Gulf migrant workers assistance, employment contract advisory, and state government welfare linkages.",
    highlight: "Gulf Returnees & Migrant Support"
  }
];

export const knowledgeArticles = [
  {
    id: "epf-passbook-claim-guide",
    category: "Employee Rights",
    title: "How Contract & Outsourced Workers Can Access EPF Passbooks & Check Contributions",
    description: "A complete step-by-step handbook on UAN activation, verifying employer monthly contributions, and spotting deduction discrepancies.",
    language: "English / తెలుగు",
    readTime: "5 min read",
    tag: "Practical Guide"
  },
  {
    id: "kisan-schemes-andhra-pradesh",
    category: "Kisan Guidance",
    title: "Essential Welfare Schemes Every Farmer in Andhra Pradesh Must Know in 2026",
    description: "Understanding e-Crop booking, input subsidy transfers, Rythu Bharosa linkages, and official dispute resolution channels.",
    language: "English / తెలుగు",
    readTime: "7 min read",
    tag: "Agriculture"
  },
  {
    id: "youth-career-first-job-readiness",
    category: "Career & Skill",
    title: "Beyond the Degree: Practical Skills and Internship Steps for Rural & Small-Town Graduates",
    description: "How young graduates can build verified work portfolios, gain practical digital skills, and avoid fraudulent recruitment agents.",
    language: "English",
    readTime: "4 min read",
    tag: "Youth Empowerment"
  }
];

export const contactDetails = {
  address: "31-1-3A, Sardar Patel Road, Near Alluri Seetha Rama Raju Vanthena, Maruthi Nagar, Vijayawada – 520004, Andhra Pradesh, India.",
  phone: "+91 85198 69749",
  phoneRaw: "+918519869749",
  email: "contact@sreesolutions.net",
  website: "www.sreesolutions.net",
  whatsappUrl: "https://wa.me/918519869749?text=Hello%20SREE%20SOLUTIONS%2C%20I%20would%20like%20to%20know%20more%20about%20your%20services.",
  operatingHours: "Monday – Saturday: 9:30 AM – 6:30 PM IST"
};
