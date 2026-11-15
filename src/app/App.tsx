import {BrowserRouter, Navigate, Route, Routes} from "react-router";

import {AppLayout} from "@/layouts/AppLayout";
import {DashboardPage} from "@/features/dashboard/pages/DashboardPage";

function PlaceholderPage({title}: {title: string}) {
    return (
        <div>
            <h1 className="text-2xl font-semibold text-foreground">{title}</h1>
            <p className="mt-1 text-sm text-muted">
                This section is under development.
            </p>
        </div>
    );
}

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<AppLayout />}>
                    <Route
                        index
                        element={<Navigate to="/dashboard" replace />}
                    />

                    <Route path="dashboard" element={<DashboardPage />} />
                    <Route
                        path="work-orders"
                        element={<PlaceholderPage title="Work Orders" />}
                    />
                    <Route
                        path="customers"
                        element={<PlaceholderPage title="Customers" />}
                    />
                    <Route
                        path="team"
                        element={<PlaceholderPage title="Team" />}
                    />
                    <Route
                        path="scheduling"
                        element={<PlaceholderPage title="Scheduling" />}
                    />
                    <Route
                        path="reports"
                        element={<PlaceholderPage title="Reports" />}
                    />
                    <Route
                        path="settings"
                        element={<PlaceholderPage title="Settings" />}
                    />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
