import EngagementsScreen from '@/features/engagements/pages/EngagementsScreen';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/_dashboardLayout/engagements/')({
  component: EngagementsScreen,
});
