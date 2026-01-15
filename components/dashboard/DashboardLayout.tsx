import Header from "../layout/Header";
import Sidebar from "../layout/Sidebar";

type DashboardLayoutProps = {
    title: string;
    subtitle: string;
    children: React.ReactNode;
};

export default function DashboardLayout({ title, subtitle, children }: DashboardLayoutProps) {
    return (
        <div className="flex h-screen">
            <Sidebar />
            <div className="flex flex-col flex-1 overflow-hidden">
                <Header />
                <div className="flex-1 overflow-y-auto">
                    <main className="p-8 bg-gray-50 w-full">
                        <div className="mb-8">
                            <h1 className="text-4xl font-bold text-gray-900">{title}</h1>
                            <p className="text-gray-600 text-sm mt-1">{subtitle}</p>
                        </div>
                        {children}
                    </main>
                </div>
            </div>
        </div>
    );
}
