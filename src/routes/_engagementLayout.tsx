import EngagementLayout from '@/layout/EngagementLayout';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/_engagementLayout')({
  component: EngagementLayout,
});
