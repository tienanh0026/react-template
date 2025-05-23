import DashboardLayout from '@/layout/DashboardLayout';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/_dashboardLayout')({
  component: DashboardLayout,
});
