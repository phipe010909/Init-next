"use client";

import { useEffect, useState } from "react";
import DashboardLayout from "@/components/dashboard/DashboardLayout";
import StatsSection from "@/components/dashboard/StatsSection";
import RecentOrders from "@/components/dashboard/RecentOrders";
import QuickAccess from "@/components/dashboard/QuickAccess";

export default function Dashboard() {
  const [ventas, setVentas] = useState(450000);
  const [pedidosHoy, setPedidosHoy] = useState(12);
  const [pendientes, setPendientes] = useState(2);

  useEffect(() => {
    const interval = setInterval(() => {
      setVentas((prev) => prev + Math.floor(Math.random() * 50000));

      setPedidosHoy((prev) => prev + Math.floor(Math.random() * 3));

      setPendientes((prev) => {
        const cambio = Math.random() > 0.5 ? 1 : -1;
        const nuevoValor = prev + cambio;
        return nuevoValor < 0 ? 0 : nuevoValor;
      });
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const stats = [
    {
      label: "Pedidos Hoy",
      value: pedidosHoy,
      iconUrl: "/icons/hambuerguesa.png",
      bgColor: "bg-[#F6E6EA]",
    },
    {
      label: "Ventas Hoy",
      value: `$${ventas.toLocaleString("es-CO")}`,
      iconUrl: "/icons/dinero.png",
      bgColor: "bg-[#E8F5E9]",
    },
    {
      label: "Pendientes",
      value: pendientes,
      iconUrl: "/icons/firmar.png",
      bgColor: "bg-[#FFF9C4]",
    },
  ];

  const recentOrders = [
    {
      id: "Pedido #00236",
      status: "En preparación",
      location: "Sucursal Centro",
      time: "12:45 p.m.",
    },
    {
      id: "Pedido #00235",
      status: "Entregado",
      location: "Sucursal Centro",
      time: "11:27 a.m.",
    },
    {
      id: "Pedido #00234",
      status: "Entregado",
      location: "Sucursal Centro",
      time: "10:58 a.m.",
    },
    {
      id: "Pedido #VWBRSA",
      status: "Pendiente",
      location: "Sucursal Centro",
      time: "10:20 a.m.",
    },
  ];

  const quickAccessItems = [
    { label: "Ver Pedidos", iconUrl: "/icons/carritocompras.png" },
    { label: "Ver Facturas", iconUrl: "/icons/documentos2.png" },
    { label: "Nuevo Pedido" },
  ];

  return (
    <DashboardLayout
      title="Mi Dashboard"
      subtitle="Resumen de tus pedidos y facturas"
    >
      <div className="grid grid-cols-3 gap-6 mb-8">
        <StatsSection stats={stats} />
      </div>

      <div className="mb-8">
        <RecentOrders orders={recentOrders} />
      </div>

      <QuickAccess items={quickAccessItems} />
    </DashboardLayout>
  );
}



