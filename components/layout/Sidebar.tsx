import Image from "next/image";

export default function Sidebar() {
    return (
        <aside className="w-[296px] bg-white border-r flex flex-col justify-between">
            <div>
                <div className="p-2 flex items-center gap-3 font-bold">
                    <Image src="/logo/Homies.png" alt="Logo" width={87} height={87} className="object-contain" />
                    <h2>Homies suite</h2>
                </div>
            </div>
            <div>
                <nav className="flex flex-col gap-1">
                    <Item active label="Mi Dashboard" icon="/icons/hogar.png" />
                    <Item label="Mis pedidos" icon="/icons/carrito-compras.png" />
                    <Item label="Mis Facturas" icon="/icons/cuenta.png" />
                </nav>
            </div>
            <div className="flex flex-col p-4 justify-center items-center gap-2">
                <div className=" text-sm text-gray-500 cursor-pointer">
                Cerrar sesión
                <Image src="/icons/configuracion.png" alt="Cerrar sesión" width={16} height={16} className="inline-block ml-2 object-contain" />
            </div>

            <div className="text-sm text-gray-500 cursor-pointer w-2/3 justify-between flex items-center ">
                Cerrar sesión
                <Image src="/icons/configuracion.png" alt="Cerrar sesión" width={16} height={16} className="inline-block ml-2 object-contain" />
            </div>
            </div>
            
        </aside>
    );
}

type ItemProps = {
    label: string;
    active?: boolean;
    icon?: string;
};

const Item = ({ label, active = false, icon }: ItemProps) => (
    <div
        className={`flex gap-3 px-6 py-3 cursor-pointer items-center ${
            active ? "bg-[#F6E6EA] text-[#B64A63] font-semibold" : "text-gray-700"
        }`}
    >
        {icon && (
            <Image
                src={icon}
                alt={label}
                width={20}
                height={20}
                className="object-contain"
            />
        )}
        {label}
    </div>
);
