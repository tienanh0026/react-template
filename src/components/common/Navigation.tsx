import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from '@/components/ui/navigation-menu';
import { cn } from '@/utils';
import { Link, useRouterState } from '@tanstack/react-router';

export default function Navigation() {
  const router = useRouterState();

  const isActive = (path: string) => router.location.pathname === path;

  const menuItems = [
    { label: 'Main', href: '/' },
    { label: 'Engagements', href: '/engagements' },
    { label: 'Settings', href: '/settings' },
  ];
  return (
    <NavigationMenu className="h-[33px]">
      <NavigationMenuList>
        {menuItems.map((item) => (
          <NavigationMenuItem key={item.label}>
            <NavigationMenuLink
              className={cn(
                'font-inter p-2 text-[14px] font-bold text-[#B4B4B4]',
                isActive(item.href) && 'text-[#00338D]',
              )}
              asChild
            >
              <Link to={item.href}>{item.label}</Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
}
