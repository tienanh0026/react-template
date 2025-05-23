import { DiamondPlus, ScanSearch } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ChatBox from '@/components/common/ChatBox';
import NavBar from '@/components/layout/NavBar';
import ChatConversation from '../components/ChatConversation';

export default function Dashboard() {
  return (
    <>
      <NavBar />
      <div className="relative flex-1 overflow-y-auto flex flex-col pt-16">
        {/* Empty chat */}
        {/* <h1 className="font-bold text-[32px] leading-[100%]">
          <span className="bg-[linear-gradient(64deg,_#8A8AE9_12.53%,_#EDB0DB_83.61%)] bg-clip-text text-transparent">
            Hello Poh Jee,
          </span>
          <br />
          How can I help you today?
        </h1> */}

        {/* chat conversation */}
        <ChatConversation />
      </div>
      <ChatBox>
        <div className="flex gap-4 mb-2 text-[#222222]">
          <Button
            variant="outline"
            className="h-[33px] border-[#D4D4D4] rounded-full cursor-pointer"
          >
            <DiamondPlus /> New engagement
          </Button>
          <Button
            variant="outline"
            className="h-[33px] border-[#D4D4D4] rounded-full cursor-pointer"
          >
            <ScanSearch /> Quick view
          </Button>
        </div>
      </ChatBox>
    </>
  );
}
