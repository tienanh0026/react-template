import { ChevronsUpDown, GalleryVerticalEnd } from 'lucide-react';
import { useState } from 'react';

import NavBarMenu from '@/components/common/NavBarMenu';
import { Button } from '@/components/ui/button';
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

const frameworks = [
  {
    value: '16-Nov-2024, 3.30pm',
    label: '16-Nov-2024, 3.30pm',
  },
  {
    value: '16-Nov-2024, 4.30pm',
    label: '16-Nov-2024, 4.30pm',
  },
  {
    value: '16-Nov-2024, 5.30pm',
    label: '16-Nov-2024, 5.30pm',
  },
  {
    value: '16-Nov-2024, 6.30pm',
    label: '16-Nov-2024, 6.30pm',
  },
  {
    value: '16-Nov-2024, 7.30pm',
    label: '16-Nov-2024, 7.30pm',
  },
];

export default function NavBar({ className }: { className?: string }) {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState('');

  return (
    <NavBarMenu className={className}>
      {/* choose version */}
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger>
          <Button
            variant="outline"
            role="combobox"
            aria-expanded={open}
            className="h-[32px] w-[210px] cursor-pointer justify-between rounded-full border border-[#E8E8E8] bg-[#F8F8F8] px-4 py-2 text-[#444444]"
          >
            <GalleryVerticalEnd size={16} />
            <div className="flex items-center gap-1 font-[400]">
              <span>{value || <span>16-Nov-2024, 3.30pm</span>}</span>
              <ChevronsUpDown />
            </div>
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-[200px] rounded-xl p-0 shadow-lg">
          <Command>
            <CommandInput placeholder="Search framework..." />
            <CommandList>
              <CommandEmpty>No framework found.</CommandEmpty>
              <CommandGroup>
                {frameworks.map((framework) => (
                  <CommandItem
                    key={framework.value}
                    value={framework.value}
                    onSelect={(currentValue) => {
                      setValue(currentValue === value ? '' : currentValue);
                      setOpen(false);
                    }}
                  >
                    {framework.label}
                  </CommandItem>
                ))}
              </CommandGroup>
            </CommandList>
          </Command>
        </PopoverContent>
      </Popover>
    </NavBarMenu>
  );
}
