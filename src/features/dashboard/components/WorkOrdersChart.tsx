import {
    Area,
    AreaChart,
    CartesianGrid,
    ResponsiveContainer,
    Tooltip,
    XAxis,
    YAxis,
} from "recharts";

const data = [
    {month: "Jan", created: 35, completed: 25},
    {month: "Feb", created: 45, completed: 32},
    {month: "Mar", created: 38, completed: 30},
    {month: "Apr", created: 58, completed: 42},
    {month: "May", created: 48, completed: 39},
    {month: "Jun", created: 72, completed: 55},
    {month: "Jul", created: 65, completed: 52},
];

export function WorkOrdersChart() {
    return (
        <div className="rounded-lg border border-border bg-surface p-6">
            <div className="mb-6">
                <h2 className="text-base font-semibold text-foreground">
                    Work Orders Overview
                </h2>
                <p className="mt-1 text-sm text-muted">
                    Created and completed work orders over time.
                </p>
            </div>

            <div className="h-[280px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                    <AreaChart
                        data={data}
                        margin={{top: 10, right: 10, left: -20, bottom: 0}}
                    >
                        <defs>
                            <linearGradient
                                id="createdGradient"
                                x1="0"
                                y1="0"
                                x2="0"
                                y2="1"
                            >
                                <stop
                                    offset="0%"
                                    stopColor="#2563EB"
                                    stopOpacity={0.2}
                                />
                                <stop
                                    offset="100%"
                                    stopColor="#2563EB"
                                    stopOpacity={0}
                                />
                            </linearGradient>
                        </defs>

                        <CartesianGrid
                            stroke="#E2E8F0"
                            strokeDasharray="3 3"
                            vertical={false}
                        />

                        <XAxis
                            dataKey="month"
                            axisLine={false}
                            tickLine={false}
                            tick={{fill: "#64748B", fontSize: 12}}
                            dy={10}
                        />

                        <YAxis
                            axisLine={false}
                            tickLine={false}
                            tick={{fill: "#64748B", fontSize: 12}}
                        />

                        <Tooltip
                            contentStyle={{
                                border: "1px solid #E2E8F0",
                                borderRadius: "8px",
                                fontSize: "12px",
                            }}
                        />

                        <Area
                            type="monotone"
                            dataKey="created"
                            name="Created"
                            stroke="#2563EB"
                            strokeWidth={2}
                            fill="url(#createdGradient)"
                        />

                        <Area
                            type="monotone"
                            dataKey="completed"
                            name="Completed"
                            stroke="#16A34A"
                            strokeWidth={2}
                            fill="transparent"
                        />
                    </AreaChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
}
