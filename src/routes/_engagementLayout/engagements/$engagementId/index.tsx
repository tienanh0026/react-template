import { createFileRoute } from '@tanstack/react-router';

import EngagementScreen from '@/features/engagements/pages/EngagementScreen';

export const Route = createFileRoute(
  '/_engagementLayout/engagements/$engagementId/',
)({
  component: EngagementScreen,
});
