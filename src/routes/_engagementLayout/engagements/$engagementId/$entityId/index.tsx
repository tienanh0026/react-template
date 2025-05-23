import { createFileRoute } from '@tanstack/react-router';

import UploadScreen from '@/features/entity/pages/UploadScreen';

export const Route = createFileRoute(
  '/_engagementLayout/engagements/$engagementId/$entityId/',
)({
  component: UploadScreen,
});
