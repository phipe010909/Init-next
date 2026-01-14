import Image from "next/image";

export default function Header() {
    return (
        <header className="bg-[#B64A63] text-white px-8 py-6 flex justify-between items-center">
            <h1 className="text-3xl font-bold">portal de punto</h1>
            <div className="flex items-center gap-6">
                <button className="text-2xl"><Image src="/icons/notificacion.png" alt="notificacion" width={30} height={30} className="object-contain" /></button>
                <div className="flex items-center gap-2 cursor-pointer">
                    <div className="w-8 h-8 flex items-center justify-center text-[#B64A63]">
                        <Image src="/icons/nueva-cuenta.png" alt="usuario" width={40} height={40} className="object-contain" />
                    </div>
                    <span className="text-sm">juan felipe</span>
                </div>
            </div>
        </header>
    );
}
