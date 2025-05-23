import EngagementScreen from '@/features/engagements/pages/EngagementScreen';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute(
  '/_engagementLayout/engagements/$engagementId/',
)({
  component: EngagementScreen,
});
