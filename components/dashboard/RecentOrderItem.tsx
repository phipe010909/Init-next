type RecentOrderItemProps = {
    id: string;
    status: string;
    location?: string;
};

export default function RecentOrderItem({ id, status, location }: RecentOrderItemProps) {
    const isRequestedStatus = status === "solicitado";

    return (
        <div className="flex items-center justify-between py-4 border-b border-gray-200 last:border-b-0">
            <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-[#F6E6EA] border-2 border-[#B64A63] flex items-center justify-center">
                </div>
                <div>
                    <p className="font-semibold text-gray-900">{id}</p>
                    {location && <p className="text-xs text-gray-500">{location}</p>}
                </div>
            </div>
            <span
                className={`text-sm font-medium ${
                    isRequestedStatus ? "text-gray-400" : "text-gray-600"
                }`}
            >
                {status}
            </span>
        </div>
    );
}
