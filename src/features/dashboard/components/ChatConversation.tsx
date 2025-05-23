import { Link } from '@tanstack/react-router';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/Avatar';
import { Button } from '@/components/ui/button';

import EngagementForm from './EngagementForm';
import EntityForm from './EntityForm';

export default function ChatConversation() {
  return (
    <div className="flex w-full flex-col pt-6">
      <div className="flex-1 space-y-4 overflow-y-auto sm:space-y-8">
        {/* user message  */}
        <div className="flex justify-end">
          <div>
            <div className="rounded-[100px] bg-[#dde6ef] p-2 text-sm text-[rgb(34,34,34)]">
              create new engagement
            </div>
            <div className="mt-2.5 flex justify-end">
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
              className="rounded-lg bg-white p-4 text-sm leading-4 font-normal text-[#222222]"
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
            <div className="mt-2.5 flex justify-start">
              <div
                className="h-8 w-8 rounded-full"
                style={{
                  background:
                    'linear-gradient(64deg, #8A8AE9 12.53%, #EDB0DB 83.61%)',
                }}
              ></div>
            </div>
          </div>
        </div>

        <EngagementForm />

        <p className="text-sm font-normal">
          Sure, I can help you with that by providing you the fields below to
          start with on your engagement creation. Be ready with an entity list
          for engagement that may have more than 10 entities to save time.{' '}
          <Link to={'/'} className="text-[#00338D] underline">
            Learn more on how to prepare the list here.
          </Link>
        </p>

        <div className="space-y-2">
          <EntityForm />

          <p className="text-sm font-normal">
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
            className="h-8 w-8 rounded-full"
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
