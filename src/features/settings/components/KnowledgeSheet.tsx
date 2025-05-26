import { ArrowLeft } from 'lucide-react';

import { Button } from '@/components/ui/Button';
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/Sheet';

import KnowledgeForm from './KnowledgeForm';

interface Props {
  type: 'add' | 'edit';
  children: React.ReactNode;
}

export default function KnowledgeSheet({ type, children }: Props) {
  return (
    <Sheet>
      <SheetTrigger asChild>{children}</SheetTrigger>
      <SheetContent className="w-[520px] sm:max-w-[520px]">
        <SheetHeader className="p-2">
          <SheetTitle className="flex items-center gap-2">
            <SheetClose asChild>
              <Button
                variant="outline"
                size="icon"
                className="h-10 w-10 cursor-pointer [&_svg:not([class*='size-'])]:size-6"
              >
                <ArrowLeft size={24} />
              </Button>
            </SheetClose>
            <p className="text-xl">
              {type === 'add' ? 'Add New Knowledge' : 'Modify Knowledge'}
            </p>
          </SheetTitle>
        </SheetHeader>
        <KnowledgeForm type={type} />
      </SheetContent>
    </Sheet>
  );
}
