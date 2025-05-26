import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from '@radix-ui/react-popover';
import { Separator } from '@radix-ui/react-select';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@radix-ui/react-tabs';
import {
  ArrowLeft,
  ChevronsUpDown,
  ChevronRight,
  TrendingUp,
  Coins,
  Check,
  ChevronsRight,
} from 'lucide-react';
import { useState } from 'react';

import PhaseTabs from '@/components/common/PhaseTabs';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from '@/components/ui/Command';
import { imagePaths } from '@/constants';
import UploadEntityForm from '@/features/engagements/components/UploadEntityForm';
import type { Step } from '@/types/engagement';

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

const entitiesDropdown = [
  {
    groupId: '1',
    groupName: 'Prioritised',
    entities: [
      {
        id: '1',
        entityName: 'Catalyst Ventures',
        phase: 'Mapping',
      },
      {
        id: '2',
        entityName: 'Pulse Technologies',
        phase: 'Mapping',
      },
      {
        id: '3',
        entityName: 'Terra Sustainability Labs',
        phase: 'Mapping',
      },
      {
        id: '4',
        entityName: 'Vista Analytics',
        phase: 'Mapping',
      },
    ],
  },
  {
    groupId: '2',
    groupName: 'All',
    entities: [
      {
        id: '5',
        entityName: 'Atlas Construction Technologies',
        phase: 'Completed',
      },
      {
        id: '6',
        entityName: 'Echo Maritime Systems',
        phase: 'Analytics',
      },
      {
        id: '7',
        entityName: 'Helios Educational Technologies',
        phase: 'Completed',
      },
    ],
  },
];

const phaseSteps: Step[] = [
  {
    label: 'Upload',
    count: 0,
    active: true,
    isAvailable: true,
  },
  {
    label: 'Mapping',
    count: 4,
    alert: true,
    isAvailable: true,
  },
  {
    label: 'Analytics',
    count: 8,
  },
  { label: 'Completed', count: 25 },
];

export default function Page() {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState('');
  const [openEntityDropdown, setOpenEntityDropdown] = useState(false);

  return (
    <div className="bg-[#FCFCFC] p-4">
      <Tabs defaultValue="1">
        {/* engagement header */}
        <div className="flex justify-between">
          <div className="flex items-center gap-2">
            <Button
              variant="outline"
              size="icon"
              className="h-10 w-10 cursor-pointer [&_svg:not([class*='size-'])]:size-4"
            >
              <ArrowLeft size={16} />
            </Button>
            <div className="flex gap-1">
              <h3 className="font-semibold text-[#222222]">
                Horizon Dynamics Ltd
              </h3>
              {/* Engagement dropdown */}
              <Popover open={open} onOpenChange={setOpen}>
                <PopoverTrigger>
                  <ChevronsUpDown size={16} className="cursor-pointer" />
                </PopoverTrigger>
                <PopoverContent className="font-inter w-md rounded-xl p-1 shadow-lg">
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
            <ChevronRight size={16} />
            <div className="flex gap-1 text-[#00338D]">
              <h3 className="font-semibold">Elite Urban Properties</h3>
              {/* Entity dropdown */}
              <Popover
                open={openEntityDropdown}
                onOpenChange={setOpenEntityDropdown}
              >
                <PopoverTrigger>
                  <ChevronsUpDown size={16} className="cursor-pointer" />
                </PopoverTrigger>
                <PopoverContent className="font-inter z-50 w-md rounded-xl p-1 shadow-lg">
                  <Command>
                    <CommandInput placeholder="Search engagement" />
                    <CommandList className="p-1">
                      <CommandEmpty>No entity found.</CommandEmpty>
                      {entitiesDropdown.map((item, index) => (
                        <>
                          <CommandGroup
                            // heading={item.groupName}
                            key={item.groupId}
                          >
                            <div className="text-muted-foreground flex items-center gap-2 px-2 py-1.5 text-xs font-medium">
                              {item.groupName === 'Prioritised' && (
                                <TrendingUp
                                  className="h-4 w-4"
                                  color="#f82e2e"
                                />
                              )}
                              {item.groupName}
                            </div>
                            {item.entities.map((entity) => (
                              <CommandItem
                                key={entity.id}
                                value={entity.entityName}
                                onSelect={(currentValue) => {
                                  setValue(
                                    currentValue === value ? '' : currentValue,
                                  );
                                  setOpen(false);
                                }}
                              >
                                <div className="flex w-full justify-between">
                                  <p>{entity.entityName}</p>
                                  <Badge
                                    variant="outline"
                                    className="h-6 cursor-pointer rounded-[100px] border-[#E8E8E8] bg-[#f8f8f8] px-2 py-1 text-xs font-semibold text-[#706767]"
                                  >
                                    {entity.phase}
                                  </Badge>
                                </div>
                              </CommandItem>
                            ))}
                          </CommandGroup>
                          {index < entitiesDropdown.length - 1 && <Separator />}
                        </>
                      ))}
                    </CommandList>
                  </Command>
                </PopoverContent>
              </Popover>
            </div>
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
                    <span className="text-muted-foreground text-center text-xs leading-5">
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
                    <span className="text-muted-foreground text-center text-xs leading-5">
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
                  <span className="text-muted-foreground text-center text-xs leading-5">
                    F
                  </span>
                </div>
              </TabsTrigger>
            </TabsList>
          </div>
        </div>
        <div className="mt-8">
          <div className="flex h-full flex-col gap-4">
            <PhaseTabs steps={phaseSteps} hasLabel />
            <TabsContent value="1">
              <div className="mt-4 h-[calc(100vh-56px-233px-12px)] overflow-y-auto">
                <UploadEntityForm local="entity" />
              </div>
            </TabsContent>
            <TabsContent value="2">
              <div className="mt-4 h-[calc(100vh-56px-233px-12px)] overflow-y-auto">
                <UploadEntityForm local="entity" />
              </div>
            </TabsContent>
            <TabsContent value="3">
              <div className="mt-4 h-[calc(100vh-56px-233px-12px)] overflow-y-auto">
                <UploadEntityForm local="entity" />
              </div>
            </TabsContent>
          </div>
        </div>
      </Tabs>
    </div>
  );
}
