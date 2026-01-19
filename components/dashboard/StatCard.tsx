import Image from "next/image";

type StatCardProps = {
    label: string;
    value: string | number;
    icon: React.ReactNode;
    iconUrl?: string;
    bgColor?: string;
};

export default function StatCard({ label, value, icon, iconUrl, bgColor = "bg-[#F6E6EA]" }: StatCardProps) {
    return (
        <div className="bg-white rounded-xl p-6 flex items-center justify-between shadow-md border border-gray-200 h-full">
            <div>
                <p className="text-black-700 text-sm font-semibold mb-2">{label}</p>
                <p className="text-4xl font-bold text-gray-900">{value}</p>
            </div>
            <div className="flex items-center justify-center flex-shrink-0 ml-4">
                {iconUrl ? (
                    <div className={`w-20 h-20 flex items-center justify-center ${bgColor} rounded-full`}>
                        <Image
                            src={iconUrl}
                            alt={label}
                            width={56}
                            height={56}
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
