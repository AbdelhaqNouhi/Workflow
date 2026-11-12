import {MetricCard} from "@/components/shared/MetricCard";
import type {MetricCardProps} from "@/components/shared/MetricCard";
import {PageHeader} from "@/components/shared/PageHeader";

const metrics = [
    {
        label: "Total Work Orders",
        value: "248",
        trend: {
            value: "+12.5%",
            description: "vs last month",
            tone: "positive",
        },
    },
    {
        label: "Active Work Orders",
        value: "42",
        trend: {
            value: "+8.2%",
            description: "vs last month",
            tone: "positive",
        },
    },
    {
        label: "Completed",
        value: "186",
        trend: {
            value: "+16.4%",
            description: "vs last month",
            tone: "positive",
        },
    },
    {
        label: "Overdue",
        value: "12",
        trend: {
            value: "-3.1%",
            description: "vs last month",
            tone: "positive",
        },
    },
] satisfies MetricCardProps[];

export function DashboardPage() {
    return (
        <div className="space-y-8">
            <PageHeader
                title="Dashboard"
                description="Monitor your operations and team performance."
            />

            {/* KPI cards */}
            <section
                aria-label="Key performance indicators"
                className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4"
            >
                {metrics.map((metric) => (
                    <MetricCard key={metric.label} {...metric} />
                ))}
            </section>

            {/* Analytics */}
            <section
                aria-labelledby="work-orders-chart-title"
                className="rounded-lg border border-border bg-surface p-5 sm:p-6"
            >
                <div>
                    <h2
                        id="work-orders-chart-title"
                        className="text-base font-semibold text-foreground"
                    >
                        Work Orders Overview
                    </h2>

                    <p className="mt-1 text-sm text-muted">
                        Track work order activity over time.
                    </p>
                </div>

                <div className="mt-6 flex min-h-64 items-center justify-center rounded-md border border-dashed border-border bg-background">
                    <p className="text-sm text-muted">
                        Analytics chart coming next.
                    </p>
                </div>
            </section>
        </div>
    );
}
