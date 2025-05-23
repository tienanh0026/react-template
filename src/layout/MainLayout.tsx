import { Outlet } from '@tanstack/react-router';

import Header from '@/components/layout/Header';

export default function MainLayout() {
  return (
    <>
      <Header />
      <main className="font-inter h-[calc(100vh-56px)] align-middle leading-[100%] tracking-[0%]">
        <Outlet />
      </main>
    </>
  );
}
