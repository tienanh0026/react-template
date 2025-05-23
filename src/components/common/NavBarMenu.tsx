import { cn } from '@/utils';

import Navigation from './Navigation';

export default function NavBarMenu({
  children,
  padding,
  className,
}: {
  children: React.ReactNode;
  padding?: string;
  className?: string;
}) {
  return (
    <div className={cn('bg-white/70 backdrop-blur-[10px]', className)}>
      <div
        className={`flex h-full w-full shrink-0 items-center justify-between ${
          padding ? `${padding}` : 'py-4'
        }`}
      >
        <Navigation />

        {children}
      </div>
    </div>
  );
}
