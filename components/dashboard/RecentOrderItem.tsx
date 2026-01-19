"use client";

import { useState } from "react";

type RecentOrderItemProps = {
  id: string;
  status: string;
  location?: string;
  time?: string;
};

export default function RecentOrderItem({
  id,
  status,
  location,
  time,
}: RecentOrderItemProps) {
  const [open, setOpen] = useState(false);

  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case "en preparación":
        return {
          bg: "bg-yellow-100",
          text: "text-yellow-700",
          dot: "bg-yellow-400",
        };
      case "entregado":
        return {
          bg: "bg-green-100",
          text: "text-green-700",
          dot: "bg-green-500",
        };
      case "pendiente":
        return {
          bg: "bg-red-100",
          text: "text-red-700",
          dot: "bg-red-500",
        };
      default:
        return {
          bg: "bg-gray-100",
          text: "text-gray-700",
          dot: "bg-gray-400",
        };
    }
  };

  const colors = getStatusColor(status);

  return (
    <>
      <div className="flex items-center justify-between py-4 border-b last:border-b-0 hover:bg-gray-50 transition">
        <div className="flex-1">
          <p className="font-bold text-gray-900 text-sm">
            Pedido {id}
          </p>
          {location && (
            <p className="text-xs text-gray-400">{location}</p>
          )}
        </div>

        <div className="flex items-center gap-8">
          <div
            className={`flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold ${colors.bg} ${colors.text}`}
          >
            <div
              className={`w-2.5 h-2.5 rounded-full ${colors.dot}`}
            />
            {status}
          </div>

          {time && (
            <p className="text-sm text-gray-600 whitespace-nowrap">
              {time}
            </p>
          )}

          <button
            onClick={() => setOpen(true)}
            className="bg-[#B64A63] text-white px-6 py-2 rounded-xl font-medium hover:bg-[#a03f5a] transition text-sm"
          >
            Pedido
          </button>
        </div>
      </div>

      {open && (
        <div className="fixed inset-0 z-50 bg-black/30 flex items-center justify-center">
          <div className="bg-white rounded-2xl w-[90%] max-w-md p-6 shadow-xl">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-bold">
                Detalle del pedido {id}
              </h2>
              <button
                onClick={() => setOpen(false)}
                className="text-gray-500 text-xl hover:text-gray-800"
              >
                ✕
              </button>
            </div>

            <div className="space-y-3 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-500">Estado</span>
                <span className="font-semibold">{status}</span>
              </div>

              <div className="flex justify-between">
                <span className="text-gray-500">Sucursal</span>
                <span className="font-semibold">
                  {location ?? "Principal"}
                </span>
              </div>

              <div className="flex justify-between">
                <span className="text-gray-500">Hora</span>
                <span className="font-semibold">{time}</span>
              </div>

              <hr />

              <div>
                <p className="font-semibold mb-2">Productos</p>
                <ul className="text-gray-600 text-sm space-y-1">
                  <li>• Hamburguesa clásica</li>
                  <li>• Papas medianas</li>
                  <li>• Gaseosa</li>
                </ul>
              </div>

              <div className="flex justify-between text-base font-bold mt-4">
                <span>Total</span>
                <span>$45.000</span>
              </div>
            </div>

            <button
              onClick={() => setOpen(false)}
              className="mt-6 w-full bg-[#B64A63] text-white py-2 rounded-xl font-semibold hover:opacity-90 transition"
            >
              Cerrar
            </button>
          </div>
        </div>
      )}
    </>
  );
}


