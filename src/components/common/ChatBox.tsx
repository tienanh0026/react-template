import { MessageSquare } from 'lucide-react';
import { useRef } from 'react';

import { Button } from '@/components/ui/Button';

export default function ChatBox({ children }: { children: React.ReactNode }) {
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const handleInput = () => {
    const el = textareaRef.current;
    if (el) {
      el.style.height = 'auto';
      el.style.height = `${el.scrollHeight}px`;
    }
  };

  return (
    <>
      {/* chat box */}
      <div className="mx-auto mb-4 min-h-40 w-full max-w-4xl">
        {/* action button */}
        {children}

        {/* chat input */}
        <div className="flex min-h-30 w-full flex-col items-center rounded-[14px] border border-[#D4D4D5] bg-[#F8F8F8F2] p-2 shadow-[0px_7px_15px_0px_rgba(0,_0,_0,_0.09)] backdrop-blur-[20px]">
          <div className="flex min-h-16 w-full items-center px-2">
            <textarea
              ref={textareaRef}
              className="max-h-[calc(1.5rem*7)] flex-1 resize-none overflow-y-auto text-base leading-6 focus:outline-none"
              onInput={handleInput}
              placeholder="Ask me about anything"
              rows={1}
            />
            <Button
              variant="ghost"
              size="icon"
              className="h-12 w-12 cursor-pointer rounded-full bg-[#00338D] hover:bg-[#002970]"
            >
              <MessageSquare size={16} color="white" />
            </Button>
          </div>
          <span className="font-inter mt-2.5 w-full p-2 text-right text-[10px] leading-2.5 font-normal tracking-[0%] text-[#444444]">
            Auditix responses should be reviewed for accuracy to ensure their
            reliability.
          </span>
        </div>
      </div>
    </>
  );
}
