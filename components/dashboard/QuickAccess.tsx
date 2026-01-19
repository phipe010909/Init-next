import Image from "next/image";

type QuickAccessProps = {
    items: Array<{
        label: string;
        icon?: string;
        iconUrl?: string;
    }>;
};

export default function QuickAccess({ items }: QuickAccessProps) {
    return (
        <section className="bg-white rounded-xl p-6 shadow-md border border-gray-200">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Accesos rápidos</h2>
            <div className="grid grid-cols-3 gap-4">
                {items.map((item, index) => (
                    <div key={index} className={`flex items-center gap-2 px-5 py-3 border border-gray-300 rounded-lg hover:border-[#B64A63] transition ${index === items.length - 1 ? "justify-between" : ""}`}>
                        {index === items.length - 1 && (
                            <span className="text-[#B64A63] text-3xl font-bold">+</span>
                        )}
                        {item.iconUrl ? (
                            <div className="w-8 h-8 flex items-center justify-center flex-shrink-0">
                                <Image
                                    src={item.iconUrl}
                                    alt={item.label}
                                    width={32}
                                    height={32}
                                    className="object-contain"
                                />
                            </div>
                        ) : (
                            <span className="text-2xl flex-shrink-0">{item.icon}</span>
                        )}
                        <span className="text-gray-800 font-bold text-sm whitespace-nowrap">{item.label}</span>
                        {index === items.length - 1 && (
                            <button className="bg-[#B64A63] text-white text-[15px] px-6 py-1 rounded-[12px] font-medium hover:bg-[#a03f5a] transition text-sm whitespace-nowrap flex-shrink-0">
                                Ver ›
                            </button>
                        )}
                    </div>
                ))}
            </div>
        </section>
    );
}
