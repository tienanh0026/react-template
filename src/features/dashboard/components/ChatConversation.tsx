import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

import { Button } from '@/components/ui/button';
import EngagementForm from './EngagementForm';
import { Link } from '@tanstack/react-router';
import EntityForm from './EntityForm';

export default function ChatConversation() {
  return (
    <div className="w-full flex flex-col pt-6">
      <div className="flex-1 overflow-y-auto space-y-4 sm:space-y-8">
        {/* user message  */}
        <div className="flex justify-end">
          <div>
            <div className="p-2 text-sm text-[rgb(34,34,34)] rounded-[100px] bg-[#dde6ef]">
              create new engagement
            </div>
            <div className="flex justify-end mt-2.5">
              <Avatar>
                <AvatarImage
                  src="https://github.com/shadcn.png"
                  alt="@shadcn"
                />
                <AvatarFallback>user avatar</AvatarFallback>
              </Avatar>
            </div>
          </div>
        </div>

        {/* bot message  */}
        <div className="flex justify-start">
          <div>
            <div
              className="p-4 text-sm text-[#222222] font-normal leading-4 bg-white rounded-lg"
              style={{
                position: 'relative',
                zIndex: 0,
              }}
            >
              <div
                style={{
                  position: 'absolute',
                  zIndex: -1,
                  inset: 0,
                  borderRadius: '8px',
                  padding: '1px',
                  background:
                    'linear-gradient(64deg, #8A8AE9 12.53%, #EDB0DB 83.61%)',
                  WebkitMask:
                    'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                  WebkitMaskComposite: 'xor',
                  maskComposite: 'exclude',
                }}
              ></div>
              Hi, I’m Auditix. I have created an audit engagement for Horizon
              Dynamics Ltd. Since this is a new client, lets start by providing
              me an entities list through the widget below.
            </div>
            <div className="flex justify-start mt-2.5">
              <div
                className="w-8 h-8 rounded-full"
                style={{
                  background:
                    'linear-gradient(64deg, #8A8AE9 12.53%, #EDB0DB 83.61%)',
                }}
              ></div>
            </div>
          </div>
        </div>

        <EngagementForm />

        <p className="font-normal text-sm">
          Sure, I can help you with that by providing you the fields below to
          start with on your engagement creation. Be ready with an entity list
          for engagement that may have more than 10 entities to save time.{' '}
          <Link to={'/'} className="text-[#00338D] underline">
            Learn more on how to prepare the list here.
          </Link>
        </p>

        <div className="space-y-2">
          <EntityForm />

          <p className="font-normal text-sm">
            Engagement has been created. You can proceed to view the engagement
            overview or continue to create more engagement. Do let me know if
            you need help on the engagement you are creating.
          </p>

          <Button variant={'secondary'} className="cursor-pointer">
            View created engagement
          </Button>
        </div>

        {/* Bot avatar */}
        <div className="flex justify-start">
          <div
            className="w-8 h-8 rounded-full"
            style={{
              background:
                'linear-gradient(64deg, #8A8AE9 12.53%, #EDB0DB 83.61%)',
            }}
          ></div>
        </div>
      </div>
    </div>
  );
}
