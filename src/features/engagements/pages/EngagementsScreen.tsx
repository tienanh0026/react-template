import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@radix-ui/react-tooltip';
import { Search } from 'lucide-react';
import { Step } from '../types/engagements';
import { imagePaths } from '@/constants';
import NavBarMenu from '@/components/common/NavBarMenu';
import { Link } from '@tanstack/react-router';
import { Card, CardContent } from '@/components/ui/card';
import PhaseTabs from '@/components/common/PhaseTabs';
import { Route as engagementDetailRoute } from '@/routes/_engagementLayout/engagements/$engagementId';

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
        <div className="relative w-[421px] h-[45px]">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-[#848485]" />
          <Input
            type="text"
            placeholder="Search engagement "
            className="pl-9 h-full"
          />
        </div>
      </NavBarMenu>

      <div className="mt-[79px] flex gap-4 flex-wrap">
        <TooltipProvider>
          {cardList.map((engagement) => (
            <Link
              to={engagementDetailRoute.to}
              params={{ engagementId: engagement.id }}
              key={engagement.engagementTitle}
            >
              <Card className="w-[306px] py-4 rounded-[8px] shadow-none bg-[#FEFEFE]">
                <CardContent className="px-4 space-y-4">
                  <div className="space-y-1">
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <h3
                          className={`font-semibold text-[#444444] truncate leading-[19px] mb-0 ${
                            engagement.engagementTitle.length > 35
                              ? 'cursor-pointer'
                              : ''
                          }`}
                        >
                          {engagement.engagementTitle}
                        </h3>
                      </TooltipTrigger>
                      {engagement.engagementTitle.length > 35 && (
                        <TooltipContent className="bg-white text-black border border-gray-200 shadow-md rounded-md px-3 py-1 text-xs">
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
                          className="h-6 px-2 py-1 text-xs bg-[#f8f8f8] rounded-[100px] border-[#E8E8E8] font-semibold tracking-[0.16px] text-[#706767] cursor-pointer"
                        >
                          {engagement.engagementType}
                        </Badge>
                      </TooltipTrigger>
                      <TooltipContent className="bg-white text-black border border-gray-200 shadow-md rounded-md px-3 py-1 text-xs">
                        <p>{engagement.engagementTypeLabel}</p>
                      </TooltipContent>
                    </Tooltip>

                    <Badge
                      variant="outline"
                      className="flex h-6 items-center gap-2 px-2 py-1 text-xs bg-[#f8f8f8] rounded-[100px] border-[#E8E8E8] font-semibold tracking-[0.16px] text-[#706767]"
                    >
                      <img
                        src={getImagePathByPhase(engagement.currentPhase)}
                        alt="Hard close icon"
                        width={16}
                        height={16}
                      />
                      <span className="text-muted-foreground text-xs leading-[20px] text-center">
                        {engagement.currentPhase}
                      </span>
                    </Badge>
                  </div>
                  <div className="flex gap-2 h-full">
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
