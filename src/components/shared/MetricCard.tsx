export type MetricTone = "positive" | "negative" | "neutral";

export interface MetricCardProps {
    label: string;
    value: string;
    trend?: {
        value: string;
        description: string;
        tone: MetricTone;
    };
}

const trendStyles: Record<MetricTone, string> = {
    positive: "text-success",
    negative: "text-danger",
    neutral: "text-muted",
};

export function MetricCard({label, value, trend}: MetricCardProps) {
    return (
        <article className="rounded-lg border border-border bg-surface p-5">
            <h2 className="text-sm font-medium text-muted">{label}</h2>

            <p className="mt-3 text-3xl font-semibold tracking-tight text-foreground">
                {value}
            </p>

            {trend && (
                <p className="mt-2 flex flex-wrap items-center gap-1 text-xs">
                    <span
                        className={`font-semibold ${trendStyles[trend.tone]}`}
                    >
                        {trend.value}
                    </span>

                    <span className="text-muted">{trend.description}</span>
                </p>
            )}
        </article>
    );
}
