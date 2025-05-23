import { Outlet } from '@tanstack/react-router';
import {
  ArrowRight,
  Check,
  ChevronDown,
  ChevronsUpDown,
  ChevronUp,
  DiamondPlus,
  GalleryVerticalEnd,
  LayoutDashboard,
  ScanSearch,
  UserPlus,
} from 'lucide-react';
import { useState } from 'react';

import ChatBox from '@/components/common/ChatBox';
import { Button } from '@/components/ui/button';
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@/components/ui/Collapsible';
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from '@/components/ui/Command';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/Popover';
import ChatConversation from '@/features/dashboard/components/ChatConversation';
import { cn } from '@/utils';

const frameworks = [
  {
    value: '16-Nov-2024',
    label: '16-Nov-2024',
  },
  {
    value: '17-Nov-2024',
    label: '17Nov-2024',
  },
  {
    value: '18-Nov-2024',
    label: '18-Nov-2024',
  },
  {
    value: '19-Nov-2024',
    label: '19-Nov-2024',
  },
  {
    value: '11-Nov-2024',
    label: '11-Nov-2024',
  },
];

const phaseOptions = [
  { label: 'Mapping', value: 'Mapping', done: true },
  { label: 'Materiality', value: 'Materiality', active: true },
  { label: 'Analytics', value: 'Analytics' },
];

export default function EngagementLayout() {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState('');
  const [isOpenPhase, setIsOpenPhase] = useState(true);

  return (
    <div className="flex h-[calc(100vh-56px)]">
      <div className="h-full w-1/3 border-r border-[#D4D4D5]">
        <div
          className="flex h-[65px] items-center justify-between p-4"
          style={{
            background:
              'linear-gradient(73.26deg, #F1EDFF 0%, #F3F0F8 52.77%, #FCFCFC 100%)',
          }}
        >
          <h3 className="text-sm font-bold">Auditix Intelligence Assistant</h3>
          <div className="flex gap-4">
            <Popover open={open} onOpenChange={setOpen}>
              <PopoverTrigger>
                <div
                  role="combobox"
                  aria-expanded={open}
                  className="flex h-[33px] w-[173px] cursor-pointer justify-between rounded-full border border-[#E8E8E8] bg-[#FCFCFC] py-2 text-[#444444] has-[>svg]:px-4"
                >
                  <GalleryVerticalEnd size={16} />
                  <div className="flex items-center gap-1 font-[400]">
                    <span>{value || <span>16-Nov-2024</span>}</span>
                    <ChevronsUpDown size={16} />
                  </div>
                </div>
              </PopoverTrigger>
              <PopoverContent className="w-[200px] p-0">
                <Command>
                  <CommandInput placeholder="Search framework..." />
                  <CommandList>
                    <CommandEmpty>No framework found.</CommandEmpty>
                    <CommandGroup>
                      {frameworks.map((framework) => (
                        <CommandItem
                          key={framework.value}
                          value={framework.value}
                          onSelect={(currentValue: string) => {
                            setValue(
                              currentValue === value ? '' : currentValue,
                            );
                            setOpen(false);
                          }}
                        >
                          {framework.label}
                        </CommandItem>
                      ))}
                    </CommandGroup>
                  </CommandList>
                </Command>
              </PopoverContent>
            </Popover>
            <Button
              size="sm"
              variant="ghost"
              className="cursor-pointer rounded-full bg-[#f0f0f0]"
            >
              <LayoutDashboard className="h-4 w-4" />
            </Button>
          </div>
        </div>
        <div className="flex h-[calc(100vh-56px-65px)] w-full flex-col p-4 pb-0">
          {/* Management phase */}
          <div className="w-full">
            <Collapsible
              open={isOpenPhase}
              onOpenChange={setIsOpenPhase}
              className="box-border w-full border-b border-[#D4D4D5] p-2 pb-4 text-[#444444]"
            >
              {/* Header with title and actions */}
              <div className="flex items-center justify-between">
                <p className="text-base">
                  Here’s your progress so far with this entity
                </p>
                <CollapsibleTrigger asChild>
                  {isOpenPhase ? (
                    <ChevronUp size={24} />
                  ) : (
                    <ChevronDown size={24} />
                  )}
                </CollapsibleTrigger>
              </div>

              {/* Collapsible content */}
              <CollapsibleContent className={`${isOpenPhase ? 'mt-4' : ''}`}>
                <div className="relative">
                  <div className="flex flex-col gap-2">
                    {phaseOptions.map((phase, index) => (
                      <div
                        key={index}
                        className="flex h-8 items-center gap-2.5"
                      >
                        <div className="flex h-5 w-5 items-center justify-center rounded border-2 border-black bg-white">
                          {phase.done && (
                            <Check
                              size={12}
                              color="black"
                              className="stroke-3"
                            />
                          )}
                        </div>
                        <span
                          className={cn(
                            'text-sm text-black',
                            phase.active && 'font-bold',
                          )}
                        >
                          {phase.label}
                        </span>
                      </div>
                    ))}
                  </div>
                  <div
                    className="absolute right-0 bottom-0 flex w-max cursor-pointer items-center gap-2.5 rounded-full p-2 text-[#222222]"
                    style={{
                      background:
                        'linear-gradient(73.26deg, #F1EDFF 0%, #F3F0F8 52.77%, #FCFCFC 100%)',
                    }}
                  >
                    <p className="text-xs font-bold">
                      Some considerations to take note. Have a look
                    </p>
                    <ArrowRight size={16} className="stroke-2" />
                  </div>
                </div>
              </CollapsibleContent>
            </Collapsible>
          </div>

          <div className="relative flex flex-1 flex-col overflow-y-auto">
            {/* Empty chat */}
            {/* <div className="flex flex-col gap-8">
              <h3 className="font-bold text-[#444444]">
                What can I help for you?
              </h3>
              <div className="flex flex-col gap-2">
                <span className="text-xs font-bold text-black">Suggested</span>
                <div className="flex gap-2 p-2">
                  <Waypoints size={16} />
                  <p className="text-sm text-[#222222]">
                    Guide me through the process of navigating the system
                  </p>
                </div>
              </div>
            </div> */}

            {/* chat conversation */}
            <ChatConversation />
          </div>
          <ChatBox>
            <div className="mb-2 flex gap-4 text-[#222222]">
              <Button
                variant="outline"
                className="h-[33px] cursor-pointer rounded-full border-[#D4D4D4] p-2 has-[>svg]:px-2"
              >
                <DiamondPlus /> Manage Entities
              </Button>
              <Button
                variant="outline"
                className="h-[33px] cursor-pointer rounded-full border-[#D4D4D4] p-2 has-[>svg]:px-2"
              >
                <ScanSearch /> Quick view
              </Button>
              <Button
                variant="outline"
                className="h-[33px] cursor-pointer rounded-full border-[#D4D4D4] p-2 has-[>svg]:px-2"
              >
                <UserPlus /> Modify users
              </Button>
            </div>
          </ChatBox>
        </div>
      </div>

      <div className="w-2/3">
        <Outlet />
      </div>
    </div>
  );
}
