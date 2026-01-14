import Image from "next/image";

type StatCardProps = {
    label: string;
    value: string | number;
    icon: React.ReactNode;
    iconUrl?: string;
};

export default function StatCard({ label, value, icon, iconUrl }: StatCardProps) {
    return (
        <div className="bg-white rounded-lg pl-12 pr-8 py-4 flex items-center justify-between shadow-sm border border-gray-100">
            <div>
                <p className="text-gray-600 text-sm mb-2">{label}</p>
                <p className="text-4xl font-bold text-gray-900">{value}</p>
            </div>
            <div className="flex items-center justify-center">
                {iconUrl ? (
                    <div className="w-20 h-20 flex items-center justify-center bg-[#F6E6EA] rounded-full">
                        <Image
                            src={iconUrl}
                            alt={label}
                            width={48}
                            height={48}
                            className="object-contain"
                        />
                    </div>
                ) : (
                    <div className="text-6xl">{icon}</div>
                )}
            </div>
        </div>
    );
}
