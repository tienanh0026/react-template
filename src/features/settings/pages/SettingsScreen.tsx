import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@radix-ui/react-tooltip';
import { Search, Settings2 } from 'lucide-react';

import NavBarMenu from '@/components/common/NavBarMenu';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { Card, CardContent } from '@/components/ui/Card';
import { Input } from '@/components/ui/Input';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/Tabs';
import KnowledgeSheet from '@/features/settings/components/KnowledgeSheet';
import MappingSheet from '@/features/settings/components/MappingSheet';

const cardList = [
  {
    title: 'Industry Name',
    lastUpdatedAt: '14 Apr 2024',
    lastUpdatedBy: 'Uploader Name',
    engagementTypeLabel: 'Development Properties',
    currentPhase: 'Hardclose',
    steps: [
      { label: 'Step 1', count: 0, color: 'bg-[#C6A0F6]' },
      { label: 'Step 2', count: 4, color: 'bg-[#AA71F2]', alert: true },
      { label: 'Step 3', count: 8, color: 'bg-[#8E42EE]' },
      { label: 'Step 4', count: 25, color: 'bg-[#7213EA]' },
    ],
  },
  {
    title: 'Industry Name1',
    lastUpdatedAt: '14 Apr 2024',
    lastUpdatedBy: 'Uploader Name',
    engagementTypeLabel: 'Development Properties',
    currentPhase: 'Planning',
    steps: [
      { label: 'Step 1', count: 1, color: 'bg-[#C6A0F6]', alert: true },
      { label: 'Step 2', count: 5, color: 'bg-[#AA71F2]' },
      { label: 'Step 3', count: 19, color: 'bg-[#8E42EE]' },
      { label: 'Step 4', count: 30, color: 'bg-[#7213EA]' },
    ],
  },
  {
    title: 'Industry Name2',
    lastUpdatedAt: '14 Apr 2024',
    lastUpdatedBy: 'Uploader Name',
    engagementTypeLabel: 'Development Properties',
    currentPhase: 'Final',
    steps: [
      { label: 'Step 1', count: 0, color: 'bg-[#C6A0F6]' },
      { label: 'Step 2', count: 7, color: 'bg-[#AA71F2]' },
      { label: 'Step 3', count: 20, color: 'bg-[#8E42EE]' },
      { label: 'Step 4', count: 20, color: 'bg-[#7213EA]', alert: true },
    ],
  },
  {
    title: 'Industry Name3',
    lastUpdatedAt: '14 Apr 2024',
    lastUpdatedBy: 'Uploader Name',
    engagementTypeLabel: 'Development Properties',
    currentPhase: 'Final',
    steps: [
      { label: 'Step 1', count: 0, color: 'bg-[#C6A0F6]' },
      { label: 'Step 2', count: 7, color: 'bg-[#AA71F2]' },
      { label: 'Step 3', count: 20, color: 'bg-[#8E42EE]' },
      { label: 'Step 4', count: 20, color: 'bg-[#7213EA]', alert: true },
    ],
  },
  {
    title: 'Industry Name4',
    lastUpdatedAt: '14 Apr 2024',
    lastUpdatedBy: 'Uploader Name',
    engagementTypeLabel: 'Development Properties',
    currentPhase: 'Final',
    steps: [
      { label: 'Step 1', count: 0, color: 'bg-[#C6A0F6]' },
      { label: 'Step 2', count: 7, color: 'bg-[#AA71F2]' },
      { label: 'Step 3', count: 20, color: 'bg-[#8E42EE]' },
      { label: 'Step 4', count: 20, color: 'bg-[#7213EA]', alert: true },
    ],
  },
  {
    title: 'Industry Name5',
    lastUpdatedAt: '14 Apr 2024',
    lastUpdatedBy: 'Uploader Name',
    engagementTypeLabel: 'Development Properties',
    currentPhase: 'Final',
    steps: [
      { label: 'Step 1', count: 0, color: 'bg-[#C6A0F6]' },
      { label: 'Step 2', count: 7, color: 'bg-[#AA71F2]' },
      { label: 'Step 3', count: 20, color: 'bg-[#8E42EE]' },
      { label: 'Step 4', count: 20, color: 'bg-[#7213EA]', alert: true },
    ],
  },
];

export default function SettingsScreen() {
  return (
    <div className="px-2">
      <NavBarMenu padding="py-6">
        <div className="relative w-2xs">
          <Search className="absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 text-[#848485]" />
          <Input
            type="text"
            placeholder="Search mapping"
            className="h-full p-3 pl-9"
          />
        </div>
      </NavBarMenu>

      <div className="mt-8">
        <Tabs defaultValue="mapping" className="relative w-full gap-0">
          <div className="flex h-10">
            <TabsList className="bg-muted rounded-[6px]">
              <TabsTrigger
                value="mapping"
                className="text-muted-foreground data-[state=active]:text-foreground cursor-pointer rounded-[4px] px-3 py-1.5"
              >
                Mapping
              </TabsTrigger>
              <TabsTrigger
                value="knowledge"
                className="text-muted-foreground data-[state=active]:text-foreground cursor-pointer rounded-[4px] px-3 py-1.5"
              >
                Knowledge
              </TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="mapping">
            <div className="absolute top-0 right-0">
              <MappingSheet type="add">
                <Button
                  variant="secondary"
                  className="cursor-pointer rounded-sm"
                >
                  Add New Mapping
                </Button>
              </MappingSheet>
            </div>
            <div className="mt-8 grid grid-cols-3 gap-4">
              <TooltipProvider>
                {cardList.map((item) => (
                  <Card
                    key={item.title}
                    className="rounded-[8px] bg-[#FEFEFE] py-4 shadow-none"
                  >
                    <CardContent className="space-y-6 px-4">
                      <div className="space-y-1">
                        <div className="flex items-center justify-between">
                          <h3
                            className={`leading-5 font-semibold text-[#444444]`}
                          >
                            {item.title}
                          </h3>
                          <MappingSheet type="edit">
                            <Settings2 size={16} className="cursor-pointer" />
                          </MappingSheet>
                        </div>

                        <span className="text-xs text-[#999999]">
                          Last Updated on {item.lastUpdatedAt} by{' '}
                          {item.lastUpdatedBy}
                        </span>
                      </div>
                      <div className="space-y-1 text-[#444444]">
                        <p className="text-xs leading-3 font-bold">
                          FSC hierarchy mapping library
                        </p>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <p className="cursor-pointer truncate text-sm">
                              FSC Hierarchy Mapping filename that is very
                              long.xls
                            </p>
                          </TooltipTrigger>
                          <TooltipContent className="rounded-md border border-gray-200 bg-white px-3 py-1 text-xs text-black shadow-md">
                            <p>
                              FSC Hierarchy Mapping filename that is very
                              long.xls
                            </p>
                          </TooltipContent>
                        </Tooltip>
                      </div>
                      <div className="space-y-1 text-[#444444]">
                        <p className="text-xs leading-3 font-bold">
                          Process mapping library
                        </p>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <p className="cursor-pointer truncate text-sm">
                              Process Mapping filename that is very long.xls
                            </p>
                          </TooltipTrigger>
                          <TooltipContent className="rounded-md border border-gray-200 bg-white px-3 py-1 text-xs text-black shadow-md">
                            <p>
                              Process Mapping filename that is very long.xls
                            </p>
                          </TooltipContent>
                        </Tooltip>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </TooltipProvider>
            </div>
          </TabsContent>
          <TabsContent value="knowledge">
            <div className="absolute top-0 right-0">
              <KnowledgeSheet type="add">
                <Button
                  variant="secondary"
                  className="cursor-pointer rounded-sm"
                >
                  Add New Knowledge
                </Button>
              </KnowledgeSheet>
            </div>
            <div className="mt-8 flex flex-wrap gap-4">
              {cardList.map((item) => (
                <Card
                  key={item.title}
                  className="w-[306px] rounded-[8px] bg-[#FEFEFE] py-4 shadow-none"
                >
                  <CardContent className="space-y-4 px-4">
                    <div className="space-y-1">
                      <div className="flex items-center justify-between">
                        <h3
                          className={`leading-5 font-semibold text-[#444444]`}
                        >
                          {item.title}
                        </h3>
                        <KnowledgeSheet type="edit">
                          <Settings2 size={16} className="cursor-pointer" />
                        </KnowledgeSheet>
                      </div>

                      <span className="text-xs text-[#999999]">
                        Last Updated on {item.lastUpdatedAt}
                      </span>
                    </div>
                    <div>
                      <Badge
                        variant="outline"
                        className="h-6 items-center rounded-[100px] border-[#E8E8E8] bg-[#f8f8f8] px-2 py-1 text-xs font-semibold text-[#706767]"
                      >
                        Knowledge Type
                      </Badge>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
