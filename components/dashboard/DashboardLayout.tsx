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
                <div className="flex-1 overflow-y-auto bg-gray-100">
                    <main className="p-8 w-full">
                        {children}
                    </main>
                </div>
            </div>
        </div>
    );
}
