import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/_layout1/engagement/')({
  component: RouteComponent,
});

function RouteComponent() {
  return <div>Hello "/_layout1/engagement/"!</div>;
}
