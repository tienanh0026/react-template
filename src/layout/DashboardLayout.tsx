import { HistorySidebar } from '@/components/common/HistorySidebar';
import { Outlet } from '@tanstack/react-router';

interface Props {
  children: React.ReactNode;
}

export default function DashboardLayout() {
  return (
    <div className="flex">
      <div className="min-w-[calc(100vw-210px)] flex flex-col items-center">
        <div className="w-[950px] h-[calc(100vh-56px)] flex flex-col">
          {/* {children} */}
          <Outlet />
        </div>
      </div>
      <HistorySidebar />
    </div>
  );
}
