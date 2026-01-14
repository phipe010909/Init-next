import StatCard from "./StatCard";

type StatsSectionProps = {
    stats: Array<{
        label: string;
        value: string | number;
        icon?: React.ReactNode;
        iconUrl?: string;
    }>;
};

export default function StatsSection({ stats }: StatsSectionProps) {
    return (
        <section className="flex flex-col gap-6">
            {stats.map((stat, index) => (
                <StatCard
                    key={index}
                    label={stat.label}
                    value={stat.value}
                    icon={stat.icon}
                    iconUrl={stat.iconUrl}
                />
            ))}
        </section>
    );
}
