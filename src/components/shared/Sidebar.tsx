import {Link, NavLink} from "react-router";
import {X} from "lucide-react";

import {settingsNavigation, appNavigation} from "@/app/navigation";

interface SidebarProps {
    isOpen: boolean;
    onClose: () => void;
}

export function Sidebar({isOpen, onClose}: SidebarProps) {
    const linkClasses = ({isActive}: {isActive: boolean}) =>
        [
            "flex items-center gap-3 rounded-md px-3 py-2.5",
            "text-sm font-medium transition-colors",
            isActive
                ? "bg-primary text-white"
                : "text-slate-300 hover:bg-white/10 hover:text-white",
        ].join(" ");

    return (
        <div
            id="workflow-sidebar"
            aria-label="Application sidebar"
            className={[
                "fixed inset-y-0 left-0 z-40 flex w-64 flex-col",
                "bg-sidebar text-sidebar-foreground",
                "transition-transform duration-200 ease-in-out",
                isOpen ? "translate-x-0" : "-translate-x-full",
                "lg:translate-x-0",
            ].join(" ")}
        >
            {/* Brand */}
            <div className="flex h-16 shrink-0 items-center justify-between border-b border-white/10 px-6">
                <Link
                    to="/dashboard"
                    onClick={onClose}
                    className="text-xl font-bold tracking-tight"
                    aria-label="WorkFlow dashboard"
                >
                    WorkFlow<span className="text-primary">.</span>
                </Link>

                <button
                    type="button"
                    onClick={onClose}
                    aria-label="Close navigation"
                    className="rounded-md p-2 text-slate-300 hover:bg-white/10 lg:hidden"
                >
                    <X size={18} />
                </button>
            </div>

            {/* Main navigation */}
            <nav
                aria-label="Main navigation"
                className="flex-1 space-y-2 overflow-y-auto px-3 py-6"
            >
            {appNavigation.map((item) => {
                const Icon = item.icon;
                return (
                    <NavLink
                        key={item.to}
                        to={item.to}
                        end={item.end}
                        onClick={onClose}
                        className={linkClasses}
                    >
                        <Icon
                            size={18}
                            strokeWidth={1.8}
                            aria-hidden="true"
                        />
                        <span>{item.label}</span>
                    </NavLink>
                );
            })}
        </nav>

            {/* Settings navigation */}
            <div className="shrink-0 border-t border-white/10 p-3">
                {settingsNavigation.map((item) => {
                    const Icon = item.icon;

                    return (
                        <NavLink
                            key={item.to}
                            to={item.to}
                            onClick={onClose}
                            className={linkClasses}
                        >
                            <Icon
                                size={18}
                                strokeWidth={1.8}
                                aria-hidden="true"
                            />
                            <span>{item.label}</span>
                        </NavLink>
                    );
                })}
            </div>
        </div>
    );
}
