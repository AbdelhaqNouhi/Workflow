import {useState} from "react";
import {Outlet} from "react-router";

import {Header} from "@/components/shared/Header";
import {Sidebar} from "@/components/shared/Sidebar";

export function AppLayout() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const openSidebar = () => setIsSidebarOpen(true);
    const closeSidebar = () => setIsSidebarOpen(false);

    return (
        <div className="min-h-screen bg-background">
            {/* Mobile overlay */}
            {isSidebarOpen && (
                <button
                    type="button"
                    aria-label="Close navigation overlay"
                    onClick={closeSidebar}
                    className="fixed inset-0 z-30 bg-slate-950/50 lg:hidden"
                />
            )}

            <div className="min-h-screen lg:pl-64">
                <Sidebar isOpen={isSidebarOpen} onClose={closeSidebar} />
                <Header onMenuClick={openSidebar} />

                <main
                    id="main-content"
                    className="mx-auto w-ful max-w-full p-4 sm:p-6 lg:p-8"
                >
                    <Outlet />
                </main>
            </div>
        </div>
    );
}
