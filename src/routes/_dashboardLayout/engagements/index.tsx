import { createFileRoute } from '@tanstack/react-router';

import EngagementsScreen from '@/features/engagements/pages/EngagementsScreen';

export const Route = createFileRoute('/_dashboardLayout/engagements/')({
  component: EngagementsScreen,
});
