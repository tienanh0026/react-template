import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/_layout2/engagement/$engagementId/')({
  component: RouteComponent,
});

function RouteComponent() {
  return <div>Hello "/_layout2/engagement/$engagementId/"!</div>;
}
