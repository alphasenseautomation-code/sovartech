// icons.js — Maps the iconName strings used in data files to lucide-react components.
import {
  Activity,
  Anchor,
  Boxes,
  BrainCircuit,
  Building2,
  Cog,
  Combine,
  Compass,
  Cpu,
  Crosshair,
  Eye,
  FlaskConical,
  Flame,
  GraduationCap,
  HardHat,
  Headset,
  MonitorCheck,
  Network,
  Radar,
  RefreshCw,
  ScanEye,
  Ship,
  Waves,
  Wifi,
  Wrench
} from 'lucide-react';

export const iconMap = {
  Activity,
  Anchor,
  Boxes,
  BrainCircuit,
  Building2,
  Cog,
  Combine,
  Compass,
  Cpu,
  Crosshair,
  Eye,
  FlaskConical,
  Flame,
  GraduationCap,
  HardHat,
  Headset,
  MonitorCheck,
  Network,
  Radar,
  RefreshCw,
  ScanEye,
  Ship,
  Waves,
  Wifi,
  Wrench
};

export function getIcon(name) {
  return iconMap[name] || Radar;
}
