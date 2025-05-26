import { Check, ChevronsRight, ChevronsUpDown, Coins } from 'lucide-react';
import { useState } from 'react';

import { Badge } from '@/components/ui/Badge';
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
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/Tabs';
import { imagePaths } from '@/constants';
import EngagementContent from '@/features/engagements/components/EngagementContent';

const engagements = [
  {
    id: '1',
    engagementName: 'Horizon Dynamics Ltd',
    phase: 'Hardclose',
  },
  {
    id: '2',
    engagementName: 'Locus International Co Ltd',
    phase: 'Planning',
  },
  {
    id: '3',
    engagementName: 'Goldman Machines Corporation',
    phase: 'Final',
  },
];

export default function EngagementScreen() {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState('');

  return (
    <div className="bg-[#FCFCFC] p-4">
      <Tabs defaultValue="1">
        {/* engagement header */}
        <div className="flex justify-between">
          <div className="flex items-center gap-2">
            <Badge
              variant="outline"
              className="h-6 cursor-pointer rounded-[100px] border-[#E8E8E8] bg-[#f8f8f8] px-2 py-1 text-xs font-semibold text-[#706767]"
            >
              DP
            </Badge>
            <div className="pr-2">
              <h3 className="font-semibold text-[#222222]">
                Horizon Dynamics Ltd
              </h3>
              <span className="text-xs text-[#999999]">
                AU302245SG • 1-Jan-2024 to 31-Dec-2024
              </span>
            </div>
            <Popover open={open} onOpenChange={setOpen}>
              <PopoverTrigger>
                <ChevronsUpDown size={16} className="cursor-pointer" />
              </PopoverTrigger>
              <PopoverContent className="font-inter w-md p-1">
                <Command>
                  <CommandInput placeholder="Search engagement" />
                  <CommandList className="p-1">
                    <CommandEmpty>No framework found.</CommandEmpty>
                    <CommandGroup heading="All">
                      {engagements.map((engagement) => (
                        <CommandItem
                          key={engagement.id}
                          value={engagement.engagementName}
                          onSelect={(currentValue) => {
                            setValue(
                              currentValue === value ? '' : currentValue,
                            );
                            setOpen(false);
                          }}
                        >
                          <div className="flex w-full justify-between">
                            <p>{engagement.engagementName}</p>
                            <Badge
                              variant="outline"
                              className="h-6 cursor-pointer rounded-[100px] border-[#E8E8E8] bg-[#f8f8f8] px-2 py-1 text-xs font-semibold text-[#706767]"
                            >
                              {engagement.phase}
                            </Badge>
                          </div>
                        </CommandItem>
                      ))}
                    </CommandGroup>
                  </CommandList>
                </Command>
              </PopoverContent>
            </Popover>
          </div>

          <div className="flex items-center gap-4">
            <Coins />
            <TabsList className="h-13">
              <TabsTrigger value="1" className="cursor-pointer px-3 py-1.5">
                <div className="flex items-center gap-4">
                  <div className="flex w-max gap-2">
                    <img
                      src={imagePaths.planningIcon}
                      alt="Planning icon"
                      width={16}
                      height={16}
                    />
                    <span className="text-muted-foreground text-center text-xs leading-[20px]">
                      P
                    </span>
                  </div>
                  <Check size={16} color="#806a87" />
                </div>
              </TabsTrigger>
              <TabsTrigger value="2" className="cursor-pointer px-3 py-2">
                <div className="flex items-center gap-4">
                  <div className="flex w-max gap-2">
                    <img
                      src={imagePaths.hardCloseIcon}
                      alt="Hardclose icon"
                      width={16}
                      height={16}
                    />
                    <span className="text-muted-foreground text-center text-xs leading-[20px]">
                      HC
                    </span>
                  </div>
                  <div className="flex h-8 w-8 items-center justify-center rounded-[6px] bg-[#6C757D]">
                    <ChevronsRight size={24} color="white" />
                  </div>
                </div>
              </TabsTrigger>
              <TabsTrigger value="3">
                <div className="flex w-max gap-2">
                  <img
                    src={imagePaths.finalIcon}
                    alt="Final icon"
                    width={16}
                    height={16}
                  />
                  <span className="text-muted-foreground text-center text-xs leading-[20px]">
                    F
                  </span>
                </div>
              </TabsTrigger>
            </TabsList>
          </div>
        </div>
        <div className="mt-8">
          <TabsContent value="1">
            <EngagementContent />
          </TabsContent>
          <TabsContent value="2">
            <EngagementContent />
          </TabsContent>
          <TabsContent value="3">
            <EngagementContent />
          </TabsContent>
        </div>
      </Tabs>
    </div>
  );
}
