import Image from "next/image";

export default function Sidebar() {
  return (
    <aside className="w-[220px] bg-white border-r border-gray-300 flex flex-col justify-between h-screen">
      <div>
        <div className="p-4 flex items-center gap-2 font-bold border-b border-gray-200">
          <Image
            src="/logo/Homies.png"
            alt="Logo"
            width={40}
            height={40}
            className="object-contain"
          />
          <h2 className="text-base">Homies suite</h2>
        </div>

        <nav className="flex flex-col gap-0 py-2">
          <Item active label="Mi Dashboard" icon="/icons/ventana.png" />
          <Item label="Mis Pedidos" icon="/icons/carritodecompras.png" />
          <Item label="Mis Facturas" icon="/icons/documentos.png" />
        </nav>
      </div>

      <div className="flex flex-col p-4 gap-3 border-t border-gray-200">
        <div className="flex items-center gap-3 text-xs text-gray-700 cursor-pointer">
          <div className="w-9 h-9 bg-[#B64A63] rounded-full flex items-center justify-center">
            <span className="text-xs font-bold text-white">JF</span>
          </div>
          <div className="flex flex-col">
            <span className="font-medium">juan.felipe@homies.</span>
            <span>com</span>
          </div>
        </div>

        <div className="text-xs text-gray-600 cursor-pointer flex items-center justify-between hover:text-gray-800">
          <span>Cerrar sesión</span>
          <Image
            src="/icons/configuracion.png"
            alt="Cerrar sesión"
            width={22}
            height={22}
          />
        </div>
      </div>
    </aside>
  );
}

type ItemProps = {
  label: string;
  icon?: string;
  active?: boolean;
};

function Item({ label, icon, active = false }: ItemProps) {
  return (
    <div className="relative">
      {active && (
        <div className="absolute right-0 top-0 bottom-0 w-1 bg-[#B64A63]" />
      )}

      <div
        className={`flex items-center mx-2 my-1 rounded px-3 py-3 text-sm transition ${
          active
            ? "bg-[#F6E6EA] text-[#B64A63] font-semibold"
            : "text-gray-700 hover:bg-gray-50"
        }`}
      >
        {icon && (
          <Image
            src={icon}
            alt={label}
            width={18}
            height={18}
            className="object-contain"
          />
        )}
        <span className="ml-3">{label}</span>
      </div>
    </div>
  );
}


