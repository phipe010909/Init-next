import DashboardLayout from "@/components/dashboard/DashboardLayout";
import StatsSection from "@/components/dashboard/StatsSection";
import RecentOrders from "@/components/dashboard/RecentOrders";
import QuickAccess from "@/components/dashboard/QuickAccess";

export default function Dashboard() {
    const stats = [
        {
            label: "Mis pedidos",
            value: "1",
            iconUrl: "/icons/carrito-de-compras.png",
        },
        {
            label: "Mis Facturas",
            value: "0",
            iconUrl: "/icons/correo-electronico.png",
        },
        {
            label: "Mis Pendientes",
            value: "1",
            iconUrl: "/icons/firmar.png",
        },
    ];

    const recentOrders = [
        {
            id: "#ls Setudo",
            status: "solicitado",
        },
        {
            id: "#ls Setudo",
            status: "320",
        },
        {
            id: "pedido #VWBRSA",
            status: "solicitado",
            location: "Sucursal centro",
        },
    ];

    const quickAccessItems = [
        "Mis pedidos: revisa estados y entregas",
        "Mis facturas: consulta comprobantes emitidos",
    ];

    return (
        <DashboardLayout
            title="Mi Dashboard"
            subtitle="resumen de tus pedidos y facturas"
        >
            <div className="flex flex-col lg:flex-row gap-8 mb-8">
                <div className="w-full lg:w-2/5">
                    <StatsSection stats={stats} />
                </div>
                <div className="w-full lg:w-3/5">
                    <RecentOrders orders={recentOrders} />
                </div>
            </div>
            <QuickAccess items={quickAccessItems} />
        </DashboardLayout>
    );
}