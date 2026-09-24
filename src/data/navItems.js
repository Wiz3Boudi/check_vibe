import {
  Home,
  Search,
  PlusSquare,
  PlayCircle,
  Bell,
  User,
  MessageCircle,
} from "lucide-react";
export const navItems = [
  { path: "/feeds", label: "Home Feeds", icon: Home },
  { path: "/search-explore", label: "Explore & Search", icon: Search },
  { path: "/reels", label: "Vibe Reels", icon: PlusSquare },
  { path: "/messages", label: "Direct Messages", icon: MessageCircle },
  { path: "/post", label: "post", icon: PlayCircle },
  { path: "/notifications", label: "Notifications", icon: Bell },
  { path: "/profile", label: "Profile", icon: User },
];
