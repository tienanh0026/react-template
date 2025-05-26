import { Link } from '@tanstack/react-router';
import { ChevronDown, ChevronUp, Eye, TrendingUp } from 'lucide-react';
import { useState } from 'react';

import { Button } from '@/components/ui/Button';
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@/components/ui/Collapsible';
import { Route } from '@/routes/_engagementLayout/engagements/$engagementId/$entityId';

import UploadEntityForm from './UploadEntityForm';

interface Props {
  entityName: string;
}

export default function EntityCard({ entityName }: Props) {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <Collapsible
      open={isOpen}
      onOpenChange={setIsOpen}
      className="box-border w-full rounded-lg border border-[#D4D4D5] p-4 text-[#222222]"
    >
      {/* Header with title and actions */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <CollapsibleTrigger asChild>
            {isOpen ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
          </CollapsibleTrigger>
          <h3 className="leading-5 font-medium">{entityName}</h3>
        </div>
        <div className="flex items-center gap-2">
          <Button
            variant="ghost"
            size="icon"
            className="h-10 w-10 cursor-pointer [&_svg:not([class*='size-'])]:size-4"
            disabled
          >
            <TrendingUp size={16} />
          </Button>
          <Button
            variant="secondary"
            size="icon"
            className="h-10 w-10 cursor-pointer [&_svg:not([class*='size-'])]:size-4"
          >
            <Link to={Route.to} params={{ engagementId: '1', entityId: '1' }}>
              <Eye size={16} />
            </Link>
          </Button>
        </div>
      </div>

      {/* Collapsible content */}
      <CollapsibleContent className={`${isOpen ? 'mt-4' : ''}`}>
        {/* upload entity form  */}
        <UploadEntityForm />
      </CollapsibleContent>
    </Collapsible>
  );
}
