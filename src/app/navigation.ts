import {
    LayoutDashboard,
    ClipboardList,
    Users,
    UserRound,
    CalendarDays,
    ChartNoAxesCombined,
    Settings,
} from "lucide-react";

import type {LucideIcon} from "lucide-react";

export interface NavigationItem {
    label: string;
    to: string;
    icon: LucideIcon;
    end?: boolean;
}

export const appNavigation = [
    {
        label: "Dashboard",
        to: "/dashboard",
        icon: LayoutDashboard,
        end: true,
    },
    {
        label: "Work Orders",
        to: "/work-orders",
        icon: ClipboardList,
    },
    {
        label: "Customers",
        to: "/customers",
        icon: Users,
    },
    {
        label: "Team",
        to: "/team",
        icon: UserRound,
    },
    {
        label: "Scheduling",
        to: "/scheduling",
        icon: CalendarDays,
    },
    {
        label: "Reports",
        to: "/reports",
        icon: ChartNoAxesCombined,
    },
] satisfies readonly NavigationItem[];

export const settingsNavigation: NavigationItem[] = [
    {
        label: "Settings",
        to: "/settings",
        icon: Settings,
    },
];
