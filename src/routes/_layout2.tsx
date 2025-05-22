import { createFileRoute, Outlet } from '@tanstack/react-router';

export const Route = createFileRoute('/_layout2')({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div>
      Hello "/_layout2"!
      <Outlet />
    </div>
  );
}
