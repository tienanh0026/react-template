import {
  FileChartLine,
  FileUp,
  ListCheck,
  SquareChartGantt,
  TriangleAlert,
} from 'lucide-react';
import type { JSX } from 'react';

import type { StepLabel, Step } from '@/types/engagement';

interface PhaseContent {
  bgColor: string;
  icon: JSX.Element;
}

type Phase = {
  [K in StepLabel]: PhaseContent;
};

const phase: Phase = {
  Upload: {
    bgColor: 'bg-[var(--purple-light)]',
    icon: <FileUp />,
  },
  Mapping: {
    bgColor: 'bg-[var(--purple-dark)]',
    icon: <SquareChartGantt />,
  },
  Analytics: {
    bgColor: 'bg-[var(--purple-darker)]',
    icon: <FileChartLine />,
  },
  Completed: {
    bgColor: 'bg-[var(--purple-default)]',
    icon: <ListCheck />,
  },
};

interface Props {
  steps: Step[];
  hasLabel?: boolean;
  hasNumber?: boolean;
  size?: 'medium' | 'large';
}

export default function PhaseTabs({
  steps,
  hasLabel = false,
  hasNumber = false,
  size = 'large',
}: Props) {
  return (
    <div className="flex h-full flex-1 gap-2">
      {steps.map((step, index) => (
        <div
          key={index}
          className={`flex flex-1 flex-col gap-2 rounded-sm text-[#444444] ${
            step.active ? 'bg-[#F5F2F5]' : ''
          } ${size === 'large' ? 'p-2' : 'p-1'}`}
        >
          {hasLabel && (
            <div className="flex h-6 items-center gap-2 px-1">
              {phase[step.label].icon}
              <p className="text-sm font-medium">{step.label}</p>
            </div>
          )}
          {hasNumber && (
            <div className="flex flex-row-reverse items-center justify-between px-1">
              <span
                className={`${
                  size === 'large'
                    ? 'text-xl leading-[20px] font-bold'
                    : 'text-sm font-medium'
                } text-gray-700`}
              >
                {step.count}
              </span>
              {step.alert && <TriangleAlert size={16} color="#eba139" />}
            </div>
          )}
          <div
            className={`w-full ${
              size === 'large' ? 'h-[5px]' : 'h-[3px]'
            } rounded ${
              step.isAvailable
                ? phase[step.label].bgColor
                : 'bg-[var(--purple-lighter)]'
            }`}
          />
        </div>
      ))}
    </div>
  );
}
