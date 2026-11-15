import {WorkOrdersChart} from "../components/WorkOrdersChart";
import {WorkOrderStatusChart} from "../components/WorkOrderStatusChart";

const metrics = [
    {label: "Total Work Orders", value: "260", change: "+12.5%"},
    {label: "Active Work Orders", value: "42", change: "+8.2%"},
    {label: "Completed", value: "186", change: "+16.4%"},
    {label: "Overdue", value: "12", change: "-3.1%"},
];

export function DashboardPage() {
    return (
        <div className="space-y-8">
            <div>
                <h1 className="text-2xl font-semibold tracking-tight text-foreground">
                    Dashboard
                </h1>

                <p className="mt-1 text-sm text-muted">
                    Here's what's happening with your operations today.
                </p>
            </div>

            <section className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4">
                {metrics.map((metric) => (
                    <article
                        key={metric.label}
                        className="rounded-lg border border-border bg-surface p-5"
                    >
                        <p className="text-sm font-medium text-muted">
                            {metric.label}
                        </p>

                        <div className="mt-3 flex items-end justify-between">
                            <h2 className="text-3xl font-semibold tracking-tight text-foreground">
                                {metric.value}
                            </h2>

                            <span className="text-sm font-medium text-success">
                                {metric.change}
                            </span>
                        </div>
                    </article>
                ))}
            </section>

            <section className="grid grid-cols-1 gap-5 xl:grid-cols-3">
                <div className="xl:col-span-2">
                    <WorkOrdersChart />
                </div>

                <WorkOrderStatusChart />
            </section>
        </div>
    );
}
