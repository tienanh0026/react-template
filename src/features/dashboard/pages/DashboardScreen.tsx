import { DiamondPlus, ScanSearch } from 'lucide-react';

import ChatBox from '@/components/common/ChatBox';
import NavBar from '@/components/layout/NavBar';
import { Button } from '@/components/ui/button';
import ChatConversation from '@/features/dashboard/components/ChatConversation';

export default function Dashboard() {
  return (
    <div className="m-auto flex h-full flex-col">
      <div className="h-full flex-col overflow-auto">
        <NavBar className="sticky top-0 z-10" />
        <div className="relative flex flex-1 flex-col pt-16">
          <ChatConversation />
        </div>
      </div>
      <ChatBox>
        <div className="mb-2 flex gap-4 text-[#222222]">
          <Button
            variant="outline"
            className="h-[33px] cursor-pointer rounded-full border-[#D4D4D4]"
          >
            <DiamondPlus /> New engagement
          </Button>
          <Button
            variant="outline"
            className="h-[33px] cursor-pointer rounded-full border-[#D4D4D4]"
          >
            <ScanSearch /> Quick view
          </Button>
        </div>
      </ChatBox>
    </div>
  );
}
