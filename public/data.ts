import {
  CalendarDotsIcon,
  GaugeIcon,
  HandGrabbingIcon,
  Layout,
  PuzzlePieceIcon,
  RocketIcon,
  SparkleIcon,
  TextAaIcon,
} from "@phosphor-icons/react";
import {
  CustomDashboard,
  DailyRecommendations,
  PremiumMembership,
  TaskManagement,
} from "./images/images";

export const TabContentsData = [
  {
    id: 1,
    title: "Easy Onboarding",
    icon: RocketIcon,
    image: PremiumMembership,
  },
  {
    id: 2,
    title: "Task Management",
    icon: CalendarDotsIcon,
    image: TaskManagement,
  },
  {
    id: 3,
    title: "Daily Reccomendation",
    icon: SparkleIcon,
    image: DailyRecommendations,
  },
  {
    id: 4,
    title: "Custom Dashboard",
    icon: Layout,
    image: CustomDashboard,
  },
];

export const BottomSection = [
  {
    id: 1,
    title: "Great Typography",
    icon: TextAaIcon,
  },
  {
    id: 2,
    title: "Light Speed Page Load",
    icon: GaugeIcon,
  },
  {
    id: 3,
    title: "Drag and Drop Features",
    icon: HandGrabbingIcon,
  },
  {
    id: 4,
    title: "Ready to Use Components",
    icon: PuzzlePieceIcon,
  },
];
