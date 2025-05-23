import { createFileRoute } from '@tanstack/react-router';

import DashboardScreen from '@/features/dashboard/pages/DashboardScreen';

export const Route = createFileRoute('/_dashboardLayout/')({
  component: DashboardScreen,
});
