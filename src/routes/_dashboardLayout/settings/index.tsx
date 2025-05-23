import SettingsScreen from '@/features/settings/pages/SettingsScreen';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/_dashboardLayout/settings/')({
  component: SettingsScreen,
});
