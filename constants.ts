import { CheckCircle2, Factory, RefreshCw, Zap, ShieldCheck, Leaf, BarChart3, Activity } from "lucide-react";

export const NAV_LINKS = ["Overview", "Standards", "Compliance"];

export const TIMELINE_STEPS = [
  {
    title: "Manufacturing",
    description: "Chemistry, origin, and initial capacity data is logged on creation.",
    icon: Factory,
  },
  {
    title: "Usage Phase",
    description: "Real-time performance logs: charge cycles, temperature peaks, and degradation.",
    icon: Activity,
  },
  {
    title: "Second Life",
    description: "If health > 70%, battery is repurposed for stationary grid storage.",
    icon: Zap,
  },
  {
    title: "Recycling",
    description: "End-of-life material recovery of Lithium, Cobalt, and Nickel.",
    icon: RefreshCw,
  },
];

export const BOTTOM_CARDS = [
  {
    title: "Enhanced Safety",
    description: "Prevents thermal runaway risks by flagging damaged cells early. The digital passport ensures no unsafe refurbished batteries re-enter the market illegally.",
    icon: ShieldCheck,
    color: "text-orange-500",
    bg: "bg-orange-50"
  },
  {
    title: "Circular Economy",
    description: "Enables efficient 'Urban Mining'. Recyclers can scan the ID to know exactly what chemicals are inside, optimizing the extraction of rare earth metals.",
    icon: RefreshCw,
    color: "text-accent",
    bg: "bg-teal-50"
  },
  {
    title: "Sustainability Tracking",
    description: "Calculates the total Carbon Footprint of the battery. Essential for meeting international environmental compliance (e.g., EU Battery Regulation).",
    icon: Leaf,
    color: "text-primary",
    bg: "bg-green-50"
  },
];