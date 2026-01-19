"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

type Notification = {
    id: number;
    text: string;
};

export default function Header() {
    const today = new Date();
    const formattedDate = today.toLocaleDateString("es-ES", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
    });

    const [openNotifications, setOpenNotifications] = useState(false);
    const [openUserMenu, setOpenUserMenu] = useState(false);

    const [notifications, setNotifications] = useState<Notification[]>([
        { id: 1, text: "Nuevo pedido recibido" },
        { id: 2, text: "Pedido #102 entregado" },
    ]);

    useEffect(() => {
        const interval = setInterval(() => {
            setNotifications((prev) => [
                ...prev,
                {
                    id: Date.now(),
                    text: "Nuevo pedido automático",
                },
            ]);
        }, 15000);

        return () => clearInterval(interval);
    }, []);

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

            <div className="flex items-center gap-4 relative">
                <button
                    onClick={() => {
                        setOpenNotifications(!openNotifications);
                        setOpenUserMenu(false);
                    }}
                    className="relative p-2 hover:bg-gray-100 rounded-full"
                >
                    <Image
                        src="/icons/campana.png"
                        alt="notificacion"
                        width={22}
                        height={22}
                    />

                    {notifications.length > 0 && (
                        <span className="absolute -top-1 -right-1 bg-red-600 text-white text-[10px] font-bold w-5 h-5 flex items-center justify-center rounded-full">
                            {notifications.length}
                        </span>
                    )}
                </button>

                {openNotifications && (
                    <div className="absolute right-12 top-12 w-72 bg-white border border-gray-200 rounded-xl shadow-lg p-4 z-50">
                        <h3 className="font-semibold text-sm mb-3">
                            Notificaciones
                        </h3>

                        {notifications.length === 0 ? (
                            <p className="text-xs text-gray-500">
                                No hay notificaciones
                            </p>
                        ) : (
                            <ul className="flex flex-col gap-2 mb-3">
                                {notifications.map((n) => (
                                    <li
                                        key={n.id}
                                        className="text-xs bg-gray-50 px-3 py-2 rounded-lg"
                                    >
                                        {n.text}
                                    </li>
                                ))}
                            </ul>
                        )}

                        <button
                            onClick={() => setNotifications([])}
                            className="w-full text-xs bg-[#B64A63] text-white py-2 rounded-lg hover:bg-[#a03f5a]"
                        >
                            Eliminar notificaciones
                        </button>
                    </div>
                )}

                <div className="relative">
                    <div
                        onClick={() => {
                            setOpenUserMenu(!openUserMenu);
                            setOpenNotifications(false);
                        }}
                        className="flex items-center gap-2 cursor-pointer"
                    >
                        <div className="w-9 h-9 flex items-center justify-center bg-[#B64A63] rounded-full">
                            <Image
                                src="/icons/usuario.png"
                                alt="Usuario"
                                width={18}
                                height={18}
                            />
                        </div>
                        <span className="hidden md:block text-sm font-medium text-gray-700">
                            Juan Felipe
                        </span>
                    </div>

                    {openUserMenu && (
                        <div className="absolute right-0 top-12 w-44 bg-white border border-gray-200 rounded-xl shadow-lg p-2 z-50">
                            <button className="w-full text-left text-sm px-4 py-2 hover:bg-gray-100 rounded-lg">
                                Mi perfil
                            </button>
                            <button className="w-full text-left text-sm px-4 py-2 hover:bg-gray-100 rounded-lg">
                                Cerrar sesión
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </header>
    );
}


