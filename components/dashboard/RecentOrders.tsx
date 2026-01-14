import RecentOrderItem from "./RecentOrderItem";

type Order = {
    id: string;
    status: string;
    location?: string;
};

type RecentOrdersProps = {
    orders: Order[];
};

export default function RecentOrders({ orders }: RecentOrdersProps) {
    return (
        <section className="bg-white h-full rounded-lg p-6 shadow-sm border border-gray-100">
            <h2 className="text-xl font-bold text-gray-900 mb-6">Pedidos recientes</h2>
            <div>
                {orders.map((order) => (
                    <RecentOrderItem
                        key={order.id}
                        id={order.id}
                        status={order.status}
                        location={order.location}
                    />
                ))}
            </div>
        </section>
    );
}
