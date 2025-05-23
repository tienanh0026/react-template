import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@radix-ui/react-tooltip';
import { Link } from '@tanstack/react-router';
import { Search } from 'lucide-react';

import NavBarMenu from '@/components/common/NavBarMenu';
import PhaseTabs from '@/components/common/PhaseTabs';
import { Badge } from '@/components/ui/Badge';
import { Card, CardContent } from '@/components/ui/Card';
import { Input } from '@/components/ui/Input';
import { imagePaths } from '@/constants';
import { Route as engagementDetailRoute } from '@/routes/_engagementLayout/engagements/$engagementId';
import type { Step } from '@/types/engagement';

type EngagementCard = {
  id: string;
  engagementTitle: string;
  periodEndDate: string;
  engagementType: string;
  engagementTypeLabel: string;
  currentPhase: string;
  steps: Step[];
};

const cardList: EngagementCard[] = [
  {
    id: '1',
    engagementTitle: 'Algorithm Aura Enterprise',
    periodEndDate: 'DEC-2023',
    engagementType: 'DP',
    engagementTypeLabel: 'Development Properties',
    currentPhase: 'Hardclose',
    steps: [
      {
        label: 'Upload',
        count: 0,
        isAvailable: true,
      },
      {
        label: 'Mapping',
        count: 4,
        isAvailable: true,
      },
      {
        label: 'Analytics',
        count: 8,
      },
      { label: 'Completed', count: 25 },
    ],
  },
  {
    id: '2',
    engagementTitle: 'Some long company name here Some long company name here',
    periodEndDate: 'DEC-2023',
    engagementType: 'DP',
    engagementTypeLabel: 'Development Properties',
    currentPhase: 'Planning',
    steps: [
      {
        label: 'Upload',
        count: 0,
        isAvailable: true,
      },
      {
        label: 'Mapping',
        count: 4,
        isAvailable: true,
      },
      {
        label: 'Analytics',
        count: 8,
        alert: true,
      },
      { label: 'Completed', count: 25 },
    ],
  },
  {
    id: '3',
    engagementTitle: 'Data Delta Limited1',
    periodEndDate: 'DEC-2023',
    engagementType: 'DP',
    engagementTypeLabel: 'Development Properties',
    currentPhase: 'Final',
    steps: [
      {
        label: 'Upload',
        count: 0,
        isAvailable: true,
      },
      {
        label: 'Mapping',
        count: 4,
        isAvailable: true,
      },
      {
        label: 'Analytics',
        count: 8,
      },

      { label: 'Completed', count: 25, alert: true },
    ],
  },
  {
    id: '4',
    engagementTitle: 'Data Delta Limited2',
    periodEndDate: 'DEC-2023',
    engagementType: 'DP',
    engagementTypeLabel: 'Development Properties',
    currentPhase: 'Final',
    steps: [
      {
        label: 'Upload',
        count: 0,
        isAvailable: true,
      },
      {
        label: 'Mapping',
        count: 4,
        isAvailable: true,
      },
      {
        label: 'Analytics',
        count: 8,
      },
      { label: 'Completed', count: 25 },
    ],
  },
  {
    id: '5',
    engagementTitle: 'Data Delta Limited3',
    periodEndDate: 'DEC-2023',
    engagementType: 'DP',
    engagementTypeLabel: 'Development Properties',
    currentPhase: 'Final',
    steps: [
      {
        label: 'Upload',
        count: 0,
        isAvailable: true,
      },
      {
        label: 'Mapping',
        count: 4,
        isAvailable: true,
      },
      {
        label: 'Analytics',
        count: 8,
        isAvailable: true,
      },
      { label: 'Completed', count: 25, isAvailable: true },
    ],
  },
  {
    id: '6',
    engagementTitle: 'Data Delta Limited4',
    periodEndDate: 'DEC-2023',
    engagementType: 'DP',
    engagementTypeLabel: 'Development Properties',
    currentPhase: 'Final',
    steps: [
      {
        label: 'Upload',
        count: 0,
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
        isAvailable: true,
      },
      { label: 'Completed', count: 25 },
    ],
  },
];

// Map phaseName => key trong imagePaths
const phaseToImageKey: Record<string, keyof typeof imagePaths> = {
  Planning: 'planningIcon',
  Hardclose: 'hardCloseIcon',
  Final: 'finalIcon',
};

export default function EngagementsScreen() {
  const getImagePathByPhase = (phaseName: string) => {
    const key = phaseToImageKey[phaseName];
    return imagePaths[key];
  };

  return (
    <>
      <NavBarMenu>
        <div className="relative h-[45px] w-[421px]">
          <Search className="absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 text-[#848485]" />
          <Input
            type="text"
            placeholder="Search engagement "
            className="h-full pl-9"
          />
        </div>
      </NavBarMenu>

      <div className="mt-[79px] flex flex-wrap gap-4">
        <TooltipProvider>
          {cardList.map((engagement) => (
            <Link
              to={engagementDetailRoute.to}
              params={{ engagementId: engagement.id }}
              key={engagement.engagementTitle}
            >
              <Card className="w-[306px] rounded-[8px] bg-[#FEFEFE] py-4 shadow-none">
                <CardContent className="space-y-4 px-4">
                  <div className="space-y-1">
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <h3
                          className={`mb-0 truncate leading-[19px] font-semibold text-[#444444] ${
                            engagement.engagementTitle.length > 35
                              ? 'cursor-pointer'
                              : ''
                          }`}
                        >
                          {engagement.engagementTitle}
                        </h3>
                      </TooltipTrigger>
                      {engagement.engagementTitle.length > 35 && (
                        <TooltipContent className="rounded-md border border-gray-200 bg-white px-3 py-1 text-xs text-black shadow-md">
                          <p>{engagement.engagementTitle}</p>
                        </TooltipContent>
                      )}
                    </Tooltip>

                    <span className="text-xs text-[#999999]">
                      {engagement.periodEndDate}
                    </span>
                  </div>
                  <div className="flex gap-2.5">
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Badge
                          variant="outline"
                          className="h-6 cursor-pointer rounded-[100px] border-[#E8E8E8] bg-[#f8f8f8] px-2 py-1 text-xs font-semibold tracking-[0.16px] text-[#706767]"
                        >
                          {engagement.engagementType}
                        </Badge>
                      </TooltipTrigger>
                      <TooltipContent className="rounded-md border border-gray-200 bg-white px-3 py-1 text-xs text-black shadow-md">
                        <p>{engagement.engagementTypeLabel}</p>
                      </TooltipContent>
                    </Tooltip>

                    <Badge
                      variant="outline"
                      className="flex h-6 items-center gap-2 rounded-[100px] border-[#E8E8E8] bg-[#f8f8f8] px-2 py-1 text-xs font-semibold tracking-[0.16px] text-[#706767]"
                    >
                      <img
                        src={getImagePathByPhase(engagement.currentPhase)}
                        alt="Hard close icon"
                        width={16}
                        height={16}
                      />
                      <span className="text-muted-foreground text-center text-xs leading-[20px]">
                        {engagement.currentPhase}
                      </span>
                    </Badge>
                  </div>
                  <div className="flex h-full gap-2">
                    <PhaseTabs
                      steps={engagement.steps}
                      hasNumber
                      size="medium"
                    />
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </TooltipProvider>
      </div>
    </>
  );
}
