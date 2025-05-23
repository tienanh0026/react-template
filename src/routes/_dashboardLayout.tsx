import { createFileRoute } from '@tanstack/react-router';

import DashboardLayout from '@/layout/DashboardLayout';

export const Route = createFileRoute('/_dashboardLayout')({
  component: DashboardLayout,
});
