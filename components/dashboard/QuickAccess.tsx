type QuickAccessProps = {
    items: string[];
};

export default function QuickAccess({ items }: QuickAccessProps) {
    return (
        <section className="bg-white rounded-lg p-6 shadow-sm border border-gray-100 mt-8">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Accesos rápidos</h2>
            <ul className="text-gray-700 space-y-2">
                {items.map((item, index) => (
                    <li
                        key={index}
                        className="text-sm cursor-pointer hover:text-[#B64A63] transition"
                    >
                        -{item}
                    </li>
                ))}
            </ul>
        </section>
    );
}
