import { Link } from '@tanstack/react-router';
import { Bell, LogOut } from 'lucide-react';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/Avatar';
import { imagePaths } from '@/constants';
import { HEADER_HEIGHT } from '@/constants/ui';

export default function Header() {
  return (
    <header
      className="box-border flex w-full items-center justify-between border-b border-gray-300 bg-white px-6 py-3 text-black"
      style={{ height: `${HEADER_HEIGHT}px` }}
    >
      <Link to="/" className="text-2xl font-bold">
        <img src={imagePaths.logo} alt="logo auditix" height={20} width={129} />
      </Link>

      <div className="flex items-center gap-4">
        <Avatar className="mr-2">
          <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>

        <Bell size={24} />
        <LogOut size={24} />
      </div>
    </header>
  );
}
