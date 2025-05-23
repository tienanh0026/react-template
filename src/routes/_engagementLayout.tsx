import { createFileRoute } from '@tanstack/react-router';

import EngagementLayout from '@/layout/EngagementLayout';

export const Route = createFileRoute('/_engagementLayout')({
  component: EngagementLayout,
});
