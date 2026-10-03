// pageContent.js — Copy for the inner pages.
// Source of truth: "SOVAR TECH PRIVATE LIMITED website" client document.
// Do not add specifications, ranges, customers or certifications that are not in that document.

// Sector imagery. Several client images are posters with a headline block on the
// left and an icon strip along the bottom; bands with left-aligned copy use those
// (the copy-side gradient covers the headline, `center top` crops the strip).
import sectorLngVesselImg from '../assets/sector-lng-vessel.jpg';
import productOffshoreImg from '../assets/product-offshore.jpg';
import offshoreRigImg from '../assets/app-maritime.jpg';
import lngTerminalJettyImg from '../assets/hero-banner2.png';
// about-vessel.jpg shows an LNG shore plant
import lngShorePlantImg from '../assets/about-vessel.jpg';
import tankerMastSheetImg from '../assets/app-oilgas.jpg';
import offshoreMastSheetImg from '../assets/services-team.jpg';

export const companyChain = [
  'Research',
  'Development',
  'Design',
  'Manufacturing',
  'System Integration',
  'Deployment'
];

export const about = {
  whoWeAre: [
    'SOVAR TECH PRIVATE LIMITED is an Indian technology and engineering company focused on Counter-UAS, anti-drone systems, radar, RF detection, EO/IR surveillance, AI-based tracking, command-and-control software and integrated security solutions.',
    'We develop integrated solutions for ships, oil & gas facilities, offshore platforms, ports, terminals, industrial facilities and critical infrastructure, helping operators detect, identify, track and respond to unauthorized unmanned aerial systems.',
    'We combine R&D, engineering, manufacturing and system integration to develop application-specific airspace protection solutions.'
  ],
  mission: {
    title: 'Protecting Critical Airspace',
    paragraphs: [
      'The increasing use of unmanned aerial systems creates new security challenges for maritime, offshore, industrial and critical infrastructure environments.',
      'SOVAR TECH develops technology designed to provide early detection, situational awareness and intelligent tracking of drones and other aerial objects.',
      'Our objective is to combine advanced sensing technologies, intelligent software and integrated command-and-control systems into reliable and scalable protection solutions.'
    ]
  },
  vision: {
    title: 'A Trusted Technology Partner for Air & Maritime Security',
    paragraphs: [
      'SOVAR TECH aims to build an Indian technology and manufacturing capability focused on Counter-UAS, advanced surveillance, maritime security and critical infrastructure protection.',
      'Our long-term vision is to develop globally deployable technologies that combine sensing, intelligence, software and engineering into integrated protection systems.'
    ]
  },
  pillars: [
    { id: 'engineering', title: 'Engineering Driven', iconName: 'Cog', text: 'We combine hardware, software and systems engineering to develop integrated security solutions.' },
    { id: 'rd', title: 'R&D Focused', iconName: 'FlaskConical', text: 'Our focus is on developing and adapting technologies for real-world maritime, offshore and industrial environments.' },
    { id: 'modular', title: 'Modular Architecture', iconName: 'Boxes', text: 'Our systems are designed to support integration of multiple sensors and technologies.' },
    { id: 'application', title: 'Application Specific', iconName: 'Crosshair', text: 'Solutions can be engineered around vessel type, platform configuration, operational environment and customer requirements.' },
    { id: 'lifecycle', title: 'Lifecycle Support', iconName: 'RefreshCw', text: 'From engineering and installation to commissioning, upgrades and maintenance, we support the complete system lifecycle.' }
  ],
  values: [
    { title: 'Innovation', text: 'Continuous development of new technologies and solutions.' },
    { title: 'Engineering Excellence', text: 'Strong focus on design, reliability and system performance.' },
    { title: 'Integrity', text: 'Responsible and transparent engagement with customers and partners.' },
    { title: 'Reliability', text: 'Technology designed for demanding operational environments.' },
    { title: 'Partnership', text: 'Long-term collaboration with customers, technology partners and system integrators.' }
  ]
};

export const technologies = [
  {
    id: 'radar',
    code: 'TEC-01',
    name: '3D RADAR',
    role: 'Detection & Tracking',
    iconName: 'Radar',
    text: 'Three-dimensional radar technology designed to detect and track aerial objects.',
    points: ['Range', 'Bearing', 'Elevation', 'Track information', 'Speed', 'Direction of movement']
  },
  {
    id: 'rf',
    code: 'TEC-02',
    name: 'RF DETECTION',
    role: 'Detection & Direction Finding',
    iconName: 'Wifi',
    text: 'Radio-frequency detection and direction finding, integrated with radar and EO/IR sensors for improved situational awareness.',
    points: ['RF detection', 'Direction finding', 'Integration with radar and EO/IR']
  },
  {
    id: 'eoir',
    code: 'TEC-03',
    name: 'EO/IR',
    role: 'Visual Confirmation',
    iconName: 'Eye',
    text: 'Electro-optical and infrared systems provide visual confirmation and tracking of detected aerial objects.',
    points: ['Daylight camera', 'Thermal imaging', 'Long-range observation']
  },
  {
    id: 'ai',
    code: 'TEC-04',
    name: 'AI & MACHINE LEARNING',
    role: 'Intelligent Classification',
    iconName: 'BrainCircuit',
    text: 'Artificial intelligence and machine learning support AI-assisted classification and intelligent tracking of aerial objects.',
    points: ['AI-assisted classification', 'Intelligent tracking']
  },
  {
    id: 'cv',
    code: 'TEC-05',
    name: 'COMPUTER VISION',
    role: 'Video Intelligence',
    iconName: 'ScanEye',
    text: 'Computer vision applied to EO/IR video to support tracking and identification.',
    points: ['Automatic target tracking', 'Video analytics', 'Visual identification support']
  },
  {
    id: 'fusion',
    code: 'TEC-06',
    name: 'SENSOR FUSION',
    role: 'Unified Awareness',
    iconName: 'Combine',
    text: 'Bringing radar, RF and EO/IR sensor data together into a single picture for improved situational awareness.',
    points: ['Multi-sensor integration', 'Unified situational picture']
  },
  {
    id: 'embedded',
    code: 'TEC-07',
    name: 'EMBEDDED SYSTEMS',
    role: 'Electronics & Hardware',
    iconName: 'Cpu',
    text: 'Embedded electronics developed with a focus on modular design, reliable electronics and ruggedized systems for marine and offshore applications.',
    points: ['Modular design', 'Reliable electronics', 'Ruggedized systems']
  },
  {
    id: 'signal',
    code: 'TEC-08',
    name: 'SIGNAL PROCESSING',
    role: 'Sensor Data Processing',
    iconName: 'Activity',
    text: 'Signal processing underpins the detection and tracking capabilities of SOVAR sensing technologies.',
    points: ['Detection', 'Tracking']
  },
  {
    id: 'c2',
    code: 'TEC-09',
    name: 'COMMAND & CONTROL',
    role: 'Centralized Management',
    iconName: 'MonitorCheck',
    text: 'A centralized software platform designed to bring multiple sensors and security systems together.',
    points: ['Real-time situational awareness', 'Track management', 'Alert management', 'System health monitoring']
  }
];

export const architectureFlow = [
  { step: 'DETECT', text: 'Early detection of drones and other aerial objects.', sources: '3D Radar · RF Detection' },
  { step: 'IDENTIFY', text: 'Visual confirmation and AI-assisted classification.', sources: 'EO/IR · AI · Computer Vision' },
  { step: 'TRACK', text: 'Track information, speed and direction of movement.', sources: '3D Radar · Automatic Tracking' },
  { step: 'ANALYZE', text: 'Sensor data brought together into a unified picture.', sources: 'Sensor Fusion · Signal Processing' },
  { step: 'RESPOND', text: 'Event monitoring, alert management and operator interface.', sources: 'Command & Control' },
  { step: 'PROTECT', text: 'Airspace situational awareness around protected assets.', sources: 'Integrated System' }
];

// Nodes for the interactive sensor-fusion diagram on /technology
export const fusionSensors = [
  { id: 'radar', label: '3D RADAR', outputs: ['Range', 'Bearing', 'Elevation', 'Speed', 'Direction of movement'] },
  { id: 'rf', label: 'RF DETECTION', outputs: ['RF detection', 'Direction finding'] },
  { id: 'eoir', label: 'EO/IR', outputs: ['Daylight camera', 'Thermal imaging', 'Visual confirmation'] },
  { id: 'ai', label: 'AI / VISION', outputs: ['AI-assisted classification', 'Automatic target tracking', 'Video analytics'] }
];

export const sectors = [
  {
    id: 'maritime',
    title: 'MARITIME',
    text: 'Protection and monitoring for commercial vessels and maritime operations.',
    items: ['Ships', 'Tankers', 'LNG Carriers', 'Offshore Support Vessels', 'Ports'],
    image: sectorLngVesselImg,
    imagePosition: 'center 20%',
    iconName: 'Ship',
    related: ['marine', 'cuas-360']
  },
  {
    id: 'oil-gas',
    title: 'OIL & GAS',
    text: 'Airspace monitoring around critical energy infrastructure.',
    items: ['Platforms', 'FPSO', 'Refineries', 'LNG', 'Terminals', 'Petrochemical Facilities'],
    image: productOffshoreImg,
    imagePosition: 'center',
    iconName: 'Flame',
    related: ['offshore', 'cuas-360']
  },
  {
    id: 'offshore',
    title: 'OFFSHORE',
    text: 'Integrated aerial-threat detection for remote offshore installations.',
    items: ['Offshore Platforms', 'Energy Facilities', 'Remote Installations'],
    image: offshoreRigImg,
    imagePosition: 'center top',
    iconName: 'Waves',
    related: ['offshore', 'radar-3d']
  },
  {
    id: 'ports',
    title: 'PORTS & TERMINALS',
    text: 'Advanced aerial surveillance for ports and high-value maritime infrastructure.',
    items: ['Ports', 'Harbours', 'Terminals', 'Shipyards', 'Logistics Facilities'],
    image: lngTerminalJettyImg,
    imagePosition: '55% center',
    iconName: 'Anchor',
    related: ['cuas-360', 'c2']
  },
  {
    id: 'infrastructure',
    title: 'CRITICAL INFRASTRUCTURE',
    text: 'Technology solutions for facilities where unauthorized aerial activity can create safety or security risks.',
    items: ['Power', 'Energy', 'Industrial', 'Transportation', 'Strategic Infrastructure'],
    image: lngShorePlantImg,
    imagePosition: 'center top',
    iconName: 'Building2',
    related: ['cuas-360', 'c2']
  }
];

export const rdModules = [
  { name: 'Radar Technology', iconName: 'Radar', text: 'Radar and 3D sensing for detecting and tracking aerial objects.' },
  { name: 'RF Sensing', iconName: 'Wifi', text: 'RF detection and direction finding.' },
  { name: 'AI & Machine Learning', iconName: 'BrainCircuit', text: 'Artificial intelligence and machine learning for classification and tracking.' },
  { name: 'Computer Vision', iconName: 'ScanEye', text: 'Video analytics and visual identification support for EO/IR systems.' },
  { name: 'Sensor Fusion', iconName: 'Combine', text: 'Bringing multiple sensors together into unified awareness.' },
  { name: 'Embedded Systems', iconName: 'Cpu', text: 'Reliable, modular and ruggedized electronics.' },
  { name: 'Command & Control', iconName: 'MonitorCheck', text: 'Command-and-control software, security and monitoring platforms.' },
  { name: 'Maritime Surveillance', iconName: 'Ship', text: 'Electro-optical, infrared and radar surveillance for maritime environments.' }
];

export const manufacturingApproach = [
  'Modular design',
  'Reliable electronics',
  'Ruggedized systems',
  'Marine and offshore applications',
  'System integration',
  'Quality testing',
  'Configuration management',
  'Maintainability'
];

export const lifecycle = [
  'Research',
  'Design',
  'Prototype',
  'Engineering',
  'Manufacturing',
  'Integration',
  'Testing',
  'Installation',
  'Commissioning',
  'Maintenance'
];

export const services = [
  { id: 'engineering', title: 'ENGINEERING', iconName: 'Compass', text: 'System design, architecture and application engineering.' },
  { id: 'integration', title: 'SYSTEM INTEGRATION', iconName: 'Network', text: 'Site/vessel surveys, architecture, equipment and sensor integration.' },
  { id: 'installation', title: 'INSTALLATION & COMMISSIONING', iconName: 'HardHat', text: 'On-site installation, integration, testing and commissioning.' },
  { id: 'maintenance', title: 'MAINTENANCE', iconName: 'Wrench', text: 'Preventive and corrective maintenance with lifecycle support.' },
  { id: 'upgrades', title: 'UPGRADES', iconName: 'RefreshCw', text: 'Technology upgrades, software updates and system enhancements.' },
  { id: 'training', title: 'TRAINING', iconName: 'GraduationCap', text: 'Operator and maintenance training for deployed systems.' },
  { id: 'support', title: 'TECHNICAL SUPPORT', iconName: 'Headset', text: 'Remote and on-site technical assistance.' }
];

export const integrationScope = [
  'Site and vessel surveys',
  'System architecture',
  'Engineering design',
  'Equipment integration',
  'Electrical and communication interfaces',
  'Software integration',
  'Sensor integration',
  'Factory testing',
  'Installation',
  'Commissioning',
  'Training',
  'Maintenance',
  'Upgrades and lifecycle support'
];

export const enquiryInterests = [
  'Maritime',
  'Oil & Gas',
  'Offshore',
  'Ports',
  'Industrial',
  'Critical Infrastructure',
  'Other'
];

// ---------------------------------------------------------------------------
// Dedicated-page data that differs from the homepage data in sovarData.js.
// The homepage keeps using sovarData.js unchanged; these entries follow the
// client source document only.
// ---------------------------------------------------------------------------
export const primaryMarkets = ['Maritime', 'Oil & Gas', 'Offshore', 'Ports', 'Industrial', 'Critical Infrastructure'];

export const contactInfo = {
  emails: ['projects@sovartech.com', 'sarun@sovartech.com', 'sachin@sovartech.com'],
  phone: '+91 99470 93156',
  phoneHref: 'tel:+919947093156',
  // Website enquiries: sent TO the projects mailbox, with the other two in CC.
  enquiryTo: 'projects@sovartech.com',
  enquiryCc: ['sarun@sovartech.com', 'sachin@sovartech.com']
};

// Contact page content as supplied by the client. Phone numbers are shown exactly
// as written; `href` is the same number with spaces removed for tel: links.
export const contactPage = {
  intro:
    'For enquiries related to Anti-Drone & Counter-UAS Systems, Maritime Protection, Oil & Gas Security, LNG Facilities, System Integration, R&D, Software Development, Manufacturing, and Maintenance, please contact our team.',
  services: [
    'Anti-Drone & Counter-UAS',
    'Maritime Security',
    'Oil & Gas',
    'LNG',
    'Offshore',
    'R&D',
    'Software',
    'System Integration',
    'Manufacturing',
    'Maintenance'
  ],
  regions: [
    { flag: '🇮🇳', country: 'India', phones: [{ label: '+91 99470 93156', href: 'tel:+919947093156' }], email: 'projects@sovartech.com' },
    { flag: '🇦🇪', country: 'UAE', phones: [{ label: '+971 52 667 6444', href: 'tel:+971526676444' }], email: 'projects@sovartech.com' },
    { flag: '🇧🇪', country: 'Belgium', note: 'Regional Office / Contact — Coming Soon', email: 'projects@sovartech.com' },
    { flag: '🇷🇺', country: 'Russia', note: 'Regional Office / Contact — Coming Soon', email: 'projects@sovartech.com' }
  ],
  keyContacts: [
    {
      name: 'Sarun Saju',
      title: 'Director – Business & Technology',
      phones: [
        { label: '+91 99470 93156', href: 'tel:+919947093156' },
        { label: '+971526705946', href: 'tel:+971526705946' }
      ],
      email: 'sarun@sovartech.com'
    },
    {
      name: 'Sachin Mohan',
      title: 'Director – Business Development & Operations',
      phones: [{ label: '+971 52 667 6444', href: 'tel:+971526676444' }],
      email: 'sachin@sovartech.com'
    }
  ],
  closing: {
    name: 'SOVAR TECH',
    tagline: 'Advanced Air & Maritime Protection'
  }
};

// Merged over the homepage product records (by id) on /products.
export const productDetails = {
  'cuas-360': {
    description: 'A modular Counter-UAS platform designed to provide 360° aerial surveillance and situational awareness.',
    capabilitiesLabel: 'The system can integrate',
    capabilities: ['3D radar', 'RF detection', 'EO/IR cameras', 'AI-assisted classification', 'Tracking', 'Sensor fusion', 'Command & control'],
    applications: primaryMarkets
  },
  'radar-3d': {
    description: 'Three-dimensional radar technology designed to detect and track aerial objects. Designed for integration into maritime, offshore and land-based security applications.',
    capabilitiesLabel: 'Provides information such as',
    capabilities: ['Range', 'Bearing', 'Elevation', 'Track information', 'Speed', 'Direction of movement'],
    applications: ['Maritime security', 'Offshore security', 'Land-based security']
  },
  marine: {
    description: 'A dedicated shipboard solution that can integrate radar, RF and EO/IR sensors with centralized monitoring and command-and-control capabilities.',
    capabilitiesLabel: 'Can integrate',
    capabilities: ['Radar', 'RF detection', 'EO/IR sensors', 'Centralized monitoring', 'Command-and-control'],
    applications: ['Commercial vessels', 'Tankers', 'LNG/LPG carriers', 'Offshore support vessels', 'Naval and government vessels', 'Special-purpose vessels'],
    // Client product sheet (SOVAR anti-drone mast on a tanker); shown uncropped.
    featureImage: tankerMastSheetImg,
    featureFit: 'contain'
  },
  offshore: {
    description: 'Designed for environments where aerial security is critical. The system provides integrated detection and tracking capabilities to improve airspace situational awareness around protected facilities.',
    capabilitiesLabel: 'Provides',
    capabilities: ['Integrated detection', 'Integrated tracking', 'Airspace situational awareness around protected facilities'],
    applications: ['Offshore oil & gas platforms', 'FPSO', 'LNG facilities', 'Offshore terminals', 'Energy infrastructure', 'Petrochemical facilities', 'Remote industrial installations'],
    // Client product sheet (SOVAR OFFSHORE mast); shown uncropped.
    featureImage: offshoreMastSheetImg,
    featureFit: 'contain'
  },
  c2: {
    subtitle: 'Command & Control',
    description: 'A centralized software platform designed to bring multiple sensors and security systems together. One platform. Multiple sensors. Unified awareness.',
    capabilitiesLabel: 'Key capabilities may include',
    capabilities: ['Real-time situational awareness', 'Multi-sensor integration', 'Track management', 'Event monitoring', 'Alert management', 'Operator interface', 'System health monitoring', 'Data logging and reporting'],
    applications: primaryMarkets
  },
  'eo-ir': {
    description: 'EO/IR systems provide visual confirmation and tracking of detected aerial objects, and can be integrated with radar and RF detection systems for improved situational awareness.',
    capabilitiesLabel: 'Capabilities may include',
    capabilities: ['Daylight camera', 'Thermal imaging', 'Long-range observation', 'Automatic target tracking', 'Video analytics', 'Visual identification support'],
    applications: primaryMarkets
  }
};
