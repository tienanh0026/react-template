import { createFileRoute, Outlet } from '@tanstack/react-router';

export const Route = createFileRoute('/_layout1')({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div>
      Hello "/_layout1"!
      <Outlet />
    </div>
  );
}
