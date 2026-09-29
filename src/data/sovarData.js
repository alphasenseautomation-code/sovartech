import cuas360Img from '../assets/product-cuas360.jpg';
import radar3dImg from '../assets/product-radar3d.jpg';
import eoirImg from '../assets/product-eoir.jpg';
import c2Img from '../assets/product-c2.jpg';
import marineImg from '../assets/product-marine.jpg';
import offshoreImg from '../assets/product-offshore.jpg';

import appMaritimeImg from '../assets/app-maritime-operations.jpg';
import appOilgasImg from '../assets/app-oilgas-offshore.jpg';
import appPortsImg from '../assets/app-ports-terminals.jpg';
import appIndustrialImg from '../assets/app-industrial-facilities.jpg';
import appInfraImg from '../assets/app-critical-infrastructure.jpg';

import rdLabImg from '../assets/rd-lab.jpg';
import servicesTeamImg from '../assets/services-team.jpg';
import aboutVesselImg from '../assets/about-vessel.jpg';

export const companyDetails = {
  name: "SOVAR TECH PRIVATE LIMITED",
  shortName: "SOVAR TECH",
  tagline: "Advanced Air & Maritime Protection",
  description: "SOVAR TECH is an engineering and technology company focused on research, development, design, manufacturing, system integration and deployment of advanced Counter-Unmanned Aircraft Systems (C-UAS) and security technologies.",
  location: "Kochi, India",
  primaryEmail: "projects@sovartech.com",
  // Official addresses, in display order. projects@ is the primary enquiry mailbox.
  emails: ["projects@sovartech.com", "sarun@sovartech.com", "sachin@sovartech.com"],
  phone: "+91 99470 93156",
  phoneHref: "tel:+919947093156",
  copyrightYear: 2026
};

export const capabilities = [
  {
    id: "detection",
    title: "DRONE DETECTION",
    subtitle: "Early and accurate detection",
    iconName: "Radar"
  },
  {
    id: "identification",
    title: "THREAT IDENTIFICATION",
    subtitle: "Real-time tracking",
    iconName: "Crosshair"
  },
  {
    id: "neutralization",
    title: "THREAT NEUTRALIZATION",
    subtitle: "Disrupt and take control",
    iconName: "ShieldAlert"
  },
  {
    id: "infrastructure",
    title: "CRITICAL INFRASTRUCTURE",
    subtitle: "Protect assets and operations",
    iconName: "Building2"
  },
  {
    id: "scalable",
    title: "SCALABLE SOLUTIONS",
    subtitle: "From single site to multi-site",
    iconName: "Layers"
  }
];

export const products = [
  {
    id: "cuas-360",
    name: "SOVAR C-UAS 360",
    category: "Integrated System",
    subtitle: "Integrated Counter-Drone System",
    description: "Complete end-to-end 360-degree detection, tracking and countermeasure suite engineered for naval vessels and coastal facilities.",
    image: cuas360Img,
    specs: {
      range: "Up to 15 km detection radius",
      sensors: "Integrated 3D Radar + RF + EO/IR Turret",
      deployment: "Fixed, Naval Shipboard & Mobile Units",
      responseLatency: "< 1.5 seconds automated trigger"
    }
  },
  {
    id: "radar-3d",
    name: "SOVAR RADAR 3D",
    category: "Detection System",
    subtitle: "Advanced Drone Detection Radar",
    description: "High-precision 3D Active Electronically Scanned Array (AESA) radar providing continuous micro-UAV airspace surveillance.",
    image: radar3dImg,
    specs: {
      frequencyBand: "X-Band Pulse-Doppler",
      elevationCoverage: "-10° to +70°",
      azimuthCoverage: "360° Continuous",
      targetCapacity: "Track up to 200 simultaneous targets"
    }
  },
  {
    id: "eo-ir",
    name: "SOVAR EO/IR",
    category: "Tracking Sensor",
    subtitle: "Electro-Optical & Infrared Tracking",
    description: "Gyrostabilized dual thermal and daylight optical payload for long-range visual identification and autonomous target locking.",
    image: eoirImg,
    specs: {
      optics: "Continuous Zoom Daylight (HD) + MWIR Thermal Camera",
      stabilization: "0.05 mrad Gyrostabilized Pan-Tilt Platform",
      laserRangefinder: "Up to 10 km eye-safe LRF",
      trackingMode: "AI-assisted autonomous target locking"
    }
  },
  {
    id: "c2",
    name: "SOVAR C2",
    category: "Software",
    subtitle: "Command & Control Software",
    description: "Tactical command and control software consolidating multi-sensor telemetry, threat classification, map overlays, and automated responses.",
    image: c2Img,
    specs: {
      architecture: "Modular, Cloud/On-Prem Military Standard",
      sensorSupport: "Radar, RF, Optical, Acoustic & Jammers",
      mapSupport: "GIS 3D Airspace & Maritime Charts",
      apiIntegration: "Open API for existing C4I system integration"
    }
  },
  {
    id: "marine",
    name: "SOVAR MARINE",
    category: "Naval Protection",
    subtitle: "Shipboard Counter-UAS & Airspace Protection",
    description: "Ruggedized salt-spray resistant Counter-UAS system tailored specifically for commercial tankers, LNG carriers, and naval vessels.",
    image: marineImg,
    specs: {
      environmentRating: "IP67 / MIL-STD-810H Marine Grade",
      motionCompensation: "Active ship roll & pitch pitch stabilization",
      powerSupply: "Standard marine auxiliary power compatibility",
      operation: "Autonomous or bridge-controlled mode"
    }
  },
  {
    id: "offshore",
    name: "SOVAR OFFSHORE",
    category: "Energy Protection",
    subtitle: "Oil & Gas and Offshore Protection",
    description: "Specialized perimeter airspace defense designed for offshore oil platforms, FPSOs, gas terminals, and remote marine energy assets.",
    image: offshoreImg,
    specs: {
      coverage: "Multi-platform mesh network surveillance",
      hazardousRating: "ATEX Zone 2 / IECEx certified option",
      weatherProofing: "Extreme oceanic climate resistance",
      alerting: "Encrypted wireless bridge to shore command"
    }
  }
];

export const applications = [
  {
    id: "maritime",
    title: "MARITIME OPERATIONS",
    subtitle: "Ships / Tankers / LNG Carriers / Offshore Support Vessels",
    description: "Comprehensive airborne threat mitigation for vessels traversing high-risk international waters and maritime trade corridors.",
    image: appMaritimeImg
  },
  {
    id: "oilgas",
    title: "OIL & GAS OFFSHORE",
    subtitle: "Platforms / FPSO / Energy Facilities",
    description: "Safeguarding critical offshore drilling platforms and floating production storage facilities against drone intrusion and surveillance.",
    image: appOilgasImg
  },
  {
    id: "ports",
    title: "PORTS & TERMINALS",
    subtitle: "Ports / Harbours / Terminals / Shipyards",
    description: "Multi-layered airspace security perimeter for commercial seaports, container terminals, and ship construction facilities.",
    image: appPortsImg
  },
  {
    id: "industrial",
    title: "INDUSTRIAL FACILITIES",
    subtitle: "Industrial and strategic infrastructure",
    description: "Early warning detection and protection for high-value manufacturing plants, refineries, and strategic industrial hubs.",
    image: appIndustrialImg
  },
  {
    id: "infrastructure",
    title: "CRITICAL INFRASTRUCTURE",
    subtitle: "Power / Energy / Transportation / Strategic Infrastructure",
    description: "Persistent airspace surveillance and non-kinetic neutralization for power stations, substations, and transport corridors.",
    image: appInfraImg
  }
];

export const techModules = [
  {
    id: "radar",
    name: "3D RADAR",
    role: "Detection & Tracking",
    description: "Long-range micro-doppler radar identification of small airborne targets in all weather conditions.",
    iconName: "Radio"
  },
  {
    id: "rf",
    name: "RF DETECTION",
    role: "Direction Finding",
    description: "Passive radio frequency spectrum monitoring to pinpoint drone control links and pilot locations.",
    iconName: "Wifi"
  },
  {
    id: "eoir",
    name: "EO/IR SENSORS",
    role: "Visual Confirmation",
    description: "Dual daylight and thermal infrared zoom cameras for precise optical threat verification.",
    iconName: "Eye"
  },
  {
    id: "ai",
    name: "AI & MACHINE LEARNING",
    role: "Intelligent Classification",
    description: "Deep learning algorithms filtering birds, clutter, and non-threat objects from true drone threats.",
    iconName: "Cpu"
  },
  {
    id: "fusion",
    name: "SENSOR FUSION",
    role: "Unified Awareness",
    description: "Synthesizing data streams from all sensors into a single, low-latency tactical picture.",
    iconName: "Combine"
  },
  {
    id: "c2",
    name: "COMMAND & CONTROL",
    role: "Centralized Management",
    description: "Intuitive operator dashboard enabling instant threat assessment and countermeasure execution.",
    iconName: "MonitorCheck"
  }
];

export const rdTopics = [
  "Radar Technology",
  "RF Sensing",
  "AI & Machine Learning",
  "Computer Vision",
  "Sensor Fusion",
  "Embedded Systems",
  "Command & Control",
  "Maritime Surveillance"
];

export const serviceModules = [
  {
    id: "engineering",
    title: "ENGINEERING & DESIGN",
    description: "Custom site assessment, threat risk analysis, and tailored system architecture design for specific maritime and onshore assets.",
    iconName: "Compass"
  },
  {
    id: "manufacturing",
    title: "MANUFACTURING & INTEGRATION",
    description: "In-house precision manufacturing, quality control assembly, and multi-sensor hardware integration built to defense standards.",
    iconName: "Wrench"
  },
  {
    id: "installation",
    title: "INSTALLATION & COMMISSIONING",
    description: "Turnkey marine and industrial installation, structural mounting, cabling, and field calibration by certified engineers.",
    iconName: "HardHat"
  },
  {
    id: "maintenance",
    title: "MAINTENANCE & SUPPORT",
    description: "24/7 dedicated support, preventive field maintenance, sensor calibration, and rapid spare parts dispatch.",
    iconName: "ShieldCheck"
  },
  {
    id: "training",
    title: "TRAINING & OPERATOR SUPPORT",
    description: "Comprehensive operator certification, tactical scenario simulations, and bridge crew standard operating procedure training.",
    iconName: "GraduationCap"
  },
  {
    id: "upgrades",
    title: "UPGRADES & LIFECYCLE SUPPORT",
    description: "Continuous software feature updates, AI threat library enhancements, and long-term hardware modernization programs.",
    iconName: "RefreshCw"
  }
];
