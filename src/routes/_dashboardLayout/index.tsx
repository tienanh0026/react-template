import DashboardScreen from '@/features/dashboard/pages/DashboardScreen';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/_dashboardLayout/')({
  component: DashboardScreen,
});
