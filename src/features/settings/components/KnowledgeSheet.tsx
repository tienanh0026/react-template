import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { ArrowLeft } from 'lucide-react';
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
          <SheetTitle className="flex gap-2 items-center">
            <SheetClose asChild>
              <Button
                variant="outline"
                size="icon"
                className="w-10 h-10 cursor-pointer [&_svg:not([class*='size-'])]:size-6"
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
