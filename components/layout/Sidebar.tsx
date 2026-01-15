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
                    <Item active label="Mi Dashboard" icon="/icons/hogar.png" showBorder />
                    <Item label="Mis pedidos" icon="/icons/carrito-compras.png" showBorder />
                    <Item label="Mis Facturas" icon="/icons/cuenta.png" />
                </nav>
            </div>
            <div className="flex flex-col p-4 justify-center items-center gap-2">
                <div className=" text-sm text-gray-500 cursor-pointer">
                <Image src="/icons/nueva-cuenta.png" alt="Cerrar sesión" width={30} height={30} className="inline-block ml-2 object-contain" />
                <span className="ml-2">juan.felipe@homies.com</span>
            </div>

            <div className="text-sm text-gray-500 cursor-pointer w-2/3 justify-between flex items-center ">
                <span>Cerrar sesión</span>
                <Image src="/icons/configuracion.png" alt="Cerrar sesión" width={30} height={30} className="inline-block ml-2 object-contain" />
            </div>
            </div>
            
        </aside>
    );
}

type ItemProps = {
    label: string;
    active?: boolean;
    icon?: string;
    showBorder?: boolean;
};

const Item = ({ label, active = false, icon, showBorder = false }: ItemProps) => (
    <div
        className={`flex gap-3 px-6 py-3 cursor-pointer items-center border-l-[6px] ${
            active 
                ? `bg-[#F6E6EA] text-[#B64A63] font-semibold ${showBorder ? "border-[#B64A63]" : "border-transparent"}` 
                : `text-gray-700 ${showBorder ? "border-[#B64A63]" : "border-transparent"}`
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
