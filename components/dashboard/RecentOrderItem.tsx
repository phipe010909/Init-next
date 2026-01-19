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
    <div className="flex items-center justify-between py-4 px-0 border-b border-gray-200 last:border-b-0 hover:bg-gray-50 transition">
      <div className="flex items-center flex-1 min-w-0">
        <div className="flex-1 min-w-0">
          <p className="font-bold text-gray-900 text-sm">
            pedido {id}
          </p>
          {location && (
            <p className="text-xs text-gray-400">{location}</p>
          )}
        </div>
      </div>

      <div className="flex items-center gap-12 ml-4 flex-shrink-0">
        <div
          className={`flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold ${colors.bg} ${colors.text}`}
        >
          <div
            className={`w-2.5 h-2.5 rounded-full ${colors.dot}`}
          ></div>
          {status}
        </div>

        {time && (
          <p className="text-sm text-gray-600 whitespace-nowrap">
            {time}
          </p>
        )}

        <a
          href="#"
          className="text-[#B64A63] text-sm font-medium hover:underline flex items-center"
        >
          Ver <span className="ml-1 text-lg leading-none">&gt;</span>
        </a>

        <button className="bg-[#B64A63] text-white px-8 py-2 rounded-xl font-medium hover:bg-[#a03f5a] transition text-sm whitespace-nowrap">
          Pedido
        </button>
      </div>
    </div>
  );
}

