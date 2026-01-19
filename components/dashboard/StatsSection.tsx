import StatCard from "./StatCard";

type StatsSectionProps = {
    stats: Array<{
        label: string;
        value: string | number;
        icon?: React.ReactNode;
        iconUrl?: string;
        bgColor?: string;
    }>;
};

export default function StatsSection({ stats }: StatsSectionProps) {
    return (
        <>
            {stats.map((stat, index) => (
                <StatCard
                    key={index}
                    label={stat.label}
                    value={stat.value}
                    icon={stat.icon}
                    iconUrl={stat.iconUrl}
                    bgColor={stat.bgColor}
                />
            ))}
        </>
    );
}
