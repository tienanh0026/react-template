import { Outlet } from '@tanstack/react-router';

import { HistorySidebar } from '@/components/common/HistorySidebar';

export default function DashboardLayout() {
  return (
    <div className="flex h-full">
      <div className="mx-auto h-full max-w-4xl">
        <Outlet />
      </div>
      <HistorySidebar />
    </div>
  );
}
