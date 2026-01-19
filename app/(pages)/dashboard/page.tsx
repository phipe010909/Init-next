import DashboardLayout from "@/components/dashboard/DashboardLayout";
import StatsSection from "@/components/dashboard/StatsSection";
import RecentOrders from "@/components/dashboard/RecentOrders";
import QuickAccess from "@/components/dashboard/QuickAccess";

export default function Dashboard() {
    const stats = [
        {
            label: "Pedidos Hoy",
            value: "12",
            iconUrl: "/icons/hambuerguesa.png",
            bgColor: "bg-[#F6E6EA]",
        },
        {
            label: "Ventas Hoy",
            value: "$450,000",
            iconUrl: "/icons/dinero.png",
            bgColor: "bg-[#E8F5E9]",
        },
        {
            label: "Pendientes",
            value: "2",
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
        { label: "Ver facturas", iconUrl: "/icons/documentos2.png" },
        { label: "Nuevo pedido", },
    ];

    return (
        <DashboardLayout
            title="Mi Dashboard"
            subtitle="resumen de tus pedidos y facturas"
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