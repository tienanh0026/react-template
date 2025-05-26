import { Outlet } from '@tanstack/react-router';

import Header from '@/components/layout/Header';
import { HEADER_HEIGHT } from '@/constants/ui';

export default function MainLayout() {
  return (
    <>
      <Header />
      <main
        className="font-inter align-middle leading-[100%] tracking-[0%]"
        style={{ height: `calc(100vh - ${HEADER_HEIGHT}px)` }}
      >
        <Outlet />
      </main>
    </>
  );
}
