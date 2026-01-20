"use client";

import { useState } from "react";
import RecentOrderItem from "./RecentOrderItem";

type Order = {
  id: string;
  status: string;
  location?: string;
  time?: string;
};

type RecentOrdersProps = {
  orders: Order[];
};

export default function RecentOrders({ orders }: RecentOrdersProps) {
  const [search, setSearch] = useState("");

  const filteredOrders = orders.filter(order =>
    order.id.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <section className="bg-white rounded-xl p-6 shadow-md border border-gray-200">
      <h2 className="text-2xl font-bold text-gray-900 mb-4">
        Pedidos recientes
      </h2>
      <div className="mb-4">
        <input
          type="text"
          placeholder="Buscar pedido por ID..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg text-sm
            focus:outline-none focus:ring-2 focus:ring-[#B64A63]"
        />
      </div>

      <div className="space-y-0 divide-y divide-gray-200">
        {filteredOrders.map((order) => (
          <RecentOrderItem
            key={order.id}
            id={order.id}
            status={order.status}
            location={order.location}
            time={order.time}
          />
        ))}

        {filteredOrders.length === 0 && (
          <p className="text-sm text-gray-400 text-center py-6">
            No se encontraron pedidos con ese ID
          </p>
        )}
      </div>
    </section>
  );
}

