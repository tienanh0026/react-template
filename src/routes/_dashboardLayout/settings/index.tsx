import { createFileRoute } from '@tanstack/react-router';

import SettingsScreen from '@/features/settings/pages/SettingsScreen';

export const Route = createFileRoute('/_dashboardLayout/settings/')({
  component: SettingsScreen,
});
