import Image from "next/image";

export default function Header() {
    const today = new Date();
    const formattedDate = today.toLocaleDateString("es-ES", { 
        weekday: "long", 
        year: "numeric", 
        month: "long", 
        day: "numeric" 
    });

    return (
        <header className="bg-white border-b border-gray-200 px-4 md:px-8 py-4 flex justify-between items-center w-full sticky top-0 z-50">
            <div className="flex flex-col min-w-0">
                <h1 className="text-lg md:text-2xl font-bold text-gray-900 italic truncate">
                    Hola, Juan Felipe
                </h1>
                <p className="text-gray-600 text-[10px] md:text-sm mt-1 flex items-center gap-2 italic">
                    <span className="hidden sm:inline">{formattedDate}</span>
                    <span className="inline-flex items-center gap-1 bg-gray-50 px-2 py-0.5 rounded-full border border-gray-100">
                        <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                        <span className="text-[10px] md:text-xs">Abierto</span>
                    </span>
                </p>
            </div>
            <div className="flex items-center gap-3 md:gap-6 ml-4 flex-shrink-0">
                <button className="relative p-2 hover:bg-gray-100 rounded-full transition-colors">
                    <Image 
                        src="/icons/campana.png" 
                        alt="notificacion" 
                        width={22} 
                        height={22} 
                        className="md:w-6 md:h-6 object-contain" 
                    />
                    <span className="absolute top-1.5 right-1.5 block h-2.5 w-2.5 rounded-full bg-red-600 border-2 border-white"></span>
                </button>
                <div className="flex items-center gap-2 cursor-pointer group">
                    <div className="w-9 h-9 md:w-10 md:h-10 flex items-center justify-center bg-[#B64A63] rounded-full group-hover:opacity-90 transition-opacity">
                        <Image 
                            src="/icons/usuario.png" 
                            alt="Usuario" 
                            width={18} 
                            height={18} 
                            className="md:w-5 md:h-5 object-contain" 
                        />
                    </div>
                    <span className="hidden md:block text-sm font-medium text-gray-700">
                        Juan Felipe
                    </span>
                </div>
            </div>
        </header>
    );
}
