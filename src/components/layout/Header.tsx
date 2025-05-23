import { imagePaths } from '@/constants';
import { Link } from '@tanstack/react-router';
import { Bell, LogOut } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

export default function Header() {
  return (
    <header
      className="fixed top-0 w-full h-14 flex justify-between items-center py-3 px-6 text-black border-b border-gray-300 bg-white box-border
"
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
