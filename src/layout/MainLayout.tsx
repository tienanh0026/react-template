import Header from '@/components/layout/Header';
import { Outlet } from '@tanstack/react-router';

export default function MainLayout() {
  return (
    <>
      <Header />
      <main className="font-inter mt-[56px] max-h-[calc(100vh-56px)] overflow-auto leading-[100%] tracking-[0%] align-middle">
        <Outlet />
      </main>
    </>
  );
}
