import { Sidebar } from "./_components/sidebar";
import { OrgSidebar } from "./_components/org-sidebar";

interface DashboardLayoutProps {
    children : React.ReactNode;
}

const DashboardLayout = ({
    children,
}: DashboardLayoutProps) => {
    return (
        <main className="h-full">
            <Sidebar/>
            <div className="pl-[60px] h-full flex">
                <div className="flex gap-x-3 h-full">
                    <OrgSidebar/>
                </div>
                <div className="h-full flex-1">
                    {children}      
                </div>
            </div>
        </main>
    )
}

export default DashboardLayout