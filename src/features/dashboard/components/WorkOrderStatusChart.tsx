import {Cell, Pie, PieChart, ResponsiveContainer, Tooltip} from "recharts";

const data = [
    {name: "Completed", value: 186, color: "#16A34A"},
    {name: "In Progress", value: 42, color: "#2563EB"},
    {name: "Pending", value: 20, color: "#D97706"},
    {name: "Overdue", value: 12, color: "#DC2626"},
];

export function WorkOrderStatusChart() {
    const total = data.reduce((sum, item) => sum + item.value, 0);

    return (
        <div className="rounded-lg border border-border bg-surface p-6">
            <div className="mb-6">
                <h2 className="text-base font-semibold text-foreground">
                    Work Orders by Status
                </h2>
                <p className="mt-1 text-sm text-muted">
                    Current distribution of work orders.
                </p>
            </div>

            <div className="flex flex-col items-center gap-6 sm:flex-row">
                <div className="relative h-[220px] w-full sm:w-1/2">
                    <ResponsiveContainer width="100%" height="100%">
                        <PieChart>
                            <Pie
                                data={data}
                                dataKey="value"
                                nameKey="name"
                                innerRadius={65}
                                outerRadius={90}
                                paddingAngle={3}
                                stroke="none"
                            >
                                {data.map((item) => (
                                    <Cell key={item.name} fill={item.color} />
                                ))}
                            </Pie>

                            <Tooltip />
                        </PieChart>
                    </ResponsiveContainer>

                    <div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center">
                        <span className="text-2xl font-semibold text-foreground">
                            {total}
                        </span>
                        <span className="text-xs text-muted">Total orders</span>
                    </div>
                </div>

                <div className="w-full flex-1 space-y-4">
                    {data.map((item) => (
                        <div
                            key={item.name}
                            className="flex items-center justify-between gap-3"
                        >
                            <div className="flex items-center gap-2">
                                <span
                                    className="size-2.5 rounded-full"
                                    style={{backgroundColor: item.color}}
                                />
                                <span className="text-sm text-muted">
                                    {item.name}
                                </span>
                            </div>
                            <span className="text-sm font-semibold text-foreground">
                                {item.value}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
