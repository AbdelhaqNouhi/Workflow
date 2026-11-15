import {createBrowserRouter, Navigate} from "react-router";

import {AppLayout} from "@/layouts/AppLayout";
import {DashboardPage} from "@/features/dashboard/pages/DashboardPage";
import {NotFoundPage} from "@/components/shared/NotFoundPage";

import {PageHeader} from "@/components/shared/PageHeader";

function ComingSoonPage({title}: {title: string}) {
    return (
        <PageHeader
            title={title}
            description="This section is currently under development."
        />
    )
}

export const router = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        children: [
            {
                index: true,
                element: <Navigate to="/dashboard" replace />,
            },
            {
                path: "dashboard",
                element: <DashboardPage />,
            },
            {
                path: "work-orders",
                element: <ComingSoonPage title="Work Orders" />,
            },
            {
                path: "customers",
                element: <ComingSoonPage title="Customers" />,
            },
            {
                path: "team",
                element: <ComingSoonPage title="Team" />,
            },
            {
                path: "scheduling",
                element: <ComingSoonPage title="Scheduling" />,
            },
            {
                path: "reports",
                element: <ComingSoonPage title="Reports" />,
            },
            {
                path: "settings",
                element: <ComingSoonPage title="Settings" />,
            },
            {
                path: "*",
                element: <NotFoundPage />,
            },
        ],
    },
]);
