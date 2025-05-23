import { useEffect, useState } from 'react';

import PhaseTabs from '@/components/common/PhaseTabs';
import type { Step } from '@/types/engagement';

import EngagementLoading from './EngagementsLoading';
import EntityCard from './EntityCard';

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

export default function EngagementContent() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  const entities = [
    { id: '1', name: 'Crescent City Real Estate' },
    { id: '2', name: 'Elite Urban Properties' },
    { id: '3', name: 'GoldenGate Realty' },
    { id: '4', name: 'Harborview Real Estate' },
    { id: '5', name: 'Skyline Property Solutions' },
  ];

  return (
    <div className="flex h-full flex-col gap-4">
      <PhaseTabs steps={phaseSteps} hasLabel hasNumber />
      <div className="h-[calc(100vh-56px-233px)] overflow-y-auto">
        {isLoading ? (
          <EngagementLoading />
        ) : (
          <div className="space-y-2.5">
            {entities.map((entity) => (
              <EntityCard key={entity.id} entityName={entity.name} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
