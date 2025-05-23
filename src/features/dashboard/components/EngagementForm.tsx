import { zodResolver } from '@hookform/resolvers/zod';
import dayjs from 'dayjs';
import { CalendarDays, ChevronDown, X } from 'lucide-react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/Calendar';
import { Checkbox } from '@/components/ui/Checkbox';
import {
  Command,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from '@/components/ui/Command';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/Form';
import { Input } from '@/components/ui/Input';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/Popover';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/Select';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/Tabs';
import { imagePaths } from '@/constants';
import { cn } from '@/utils';

const formSchema = z.object({
  engagementName: z.string().min(2, {
    message: 'Engagement name must be at least 2 characters.',
  }),
  startPeriod: z.date().nullable(),
  endPeriod: z.date().nullable(),
  engagementType: z.string(),
  startPhase: z.string(),
  indicateEndDate: z.date().nullable(),
  industry: z.string(),
  engagementManagers: z.string().array(),
  teamMembers: z.string().array(),
  referencedEngagementId: z.string(),
});

type PeriodFormValues = z.infer<typeof formSchema>;

const industries = [
  { label: 'Automotive', value: 'automotive' },
  { label: 'Aviation', value: 'aviation' },
  { label: 'Banking', value: 'banking' },
  { label: 'Benefit Plans', value: 'benefit-plans' },
  { label: 'Construction', value: 'construction' },
  { label: 'Consumer Products', value: 'consumer-products' },
  {
    label: 'Energy and Natural Resources',
    value: 'energy-and-natural-resources',
  },
];

const members = [
  { id: '1', name: 'Tan, John (SG/AUDIT REC&T)' },
  { id: '2', name: 'Yeoh, Vincent (SG/AUDIT TL&A' },
  { id: '3', name: 'Goh, Wilson (SG/AUDIT REC&T)' },
  { id: '4', name: 'Ang, Justin (SG/AUDIT REC&T)' },
];

export default function EngagementForm() {
  const [phase, setPhase] = useState('planning');

  const [engagementManagerQuery, setEngagementManagerQuery] = useState('');
  const [teamMembersQuery, setTeamMembersQuery] = useState('');

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      engagementName: '',
      startPeriod: null,
      endPeriod: null,
      engagementType: '',
      startPhase: '',
      indicateEndDate: null,
      industry: '',
      engagementManagers: [],
      teamMembers: [],
      referencedEngagementId: '',
    },
  });

  const handleCreate = (_data: PeriodFormValues) => {
    // console.log('Submitted data:', data);
  };

  const handlePhaseChange = (value: string) => {
    setPhase(value);
    form.setValue('startPhase', value);
  };

  const formatDate = (date: Date, type: 'date' | 'month') => {
    const formatType = type === 'date' ? 'DD-MMM-YYYY' : 'MMM-YYYY';
    return dayjs(date).format(formatType).toUpperCase();
  };

  return (
    <div className="box-border rounded-[10px] border border-[#E8E8E8] bg-[#F8F8FA] p-6 text-[#222222]">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(handleCreate)} className="space-y-6">
          <FormField
            control={form.control}
            name="engagementName"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="font-bold">Engagement Name</FormLabel>
                <FormControl>
                  <Input
                    className="h-10 bg-white text-[13.34px]"
                    placeholder="Enter engagement name"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <div>
            <FormLabel className="mb-2 font-bold">Financial Period</FormLabel>
            <div className="flex gap-2">
              <FormField
                control={form.control}
                name="startPeriod"
                render={({ field }) => (
                  <FormItem className="flex-1">
                    <Popover>
                      <PopoverTrigger>
                        <FormControl>
                          <div
                            className={cn(
                              'border-input bg-background flex h-10 w-full items-center rounded-md border px-3 text-left font-normal shadow-sm',
                              !field.value && 'text-muted-foreground',
                              'cursor-pointer',
                            )}
                          >
                            <span>
                              {field.value
                                ? formatDate(field.value, 'month')
                                : 'Select start period'}
                            </span>
                            <CalendarDays className="ml-auto h-4 w-4 opacity-50" />
                          </div>
                        </FormControl>
                      </PopoverTrigger>
                      <PopoverContent>
                        <Calendar
                          mode="single"
                          selected={field.value ?? undefined}
                          onSelect={field.onChange}
                          initialFocus
                        />
                      </PopoverContent>
                    </Popover>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormLabel className="font-bold">to</FormLabel>

              <FormField
                control={form.control}
                name="endPeriod"
                render={({ field }) => (
                  <FormItem className="flex-1">
                    <Popover>
                      <PopoverTrigger>
                        <FormControl>
                          <div
                            className={cn(
                              'border-input bg-background flex h-10 w-full items-center justify-between rounded-md border px-3 text-left font-normal shadow-sm',
                              !field.value && 'text-muted-foreground',
                              'cursor-pointer',
                            )}
                          >
                            {field.value
                              ? formatDate(field.value, 'month')
                              : 'Select end period'}
                            <CalendarDays className="ml-auto h-4 w-4 opacity-50" />
                          </div>
                        </FormControl>
                      </PopoverTrigger>
                      <PopoverContent>
                        <Calendar
                          mode="single"
                          selected={field.value ?? undefined}
                          onSelect={field.onChange}
                          initialFocus
                        />
                      </PopoverContent>
                    </Popover>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>

          <div className="flex gap-2">
            <div className="flex-1">
              <FormField
                control={form.control}
                name="engagementType"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="font-bold">Engagement Type</FormLabel>
                    <FormControl>
                      <Input
                        className="h-10 bg-white text-[13.34px]"
                        placeholder="Enter engagement type"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className="flex flex-1 items-end gap-2">
              <FormField
                name="startPhase"
                control={form.control}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="font-bold">Start Phase</FormLabel>
                    <FormControl>
                      <Tabs
                        value={phase}
                        onValueChange={(value) => {
                          handlePhaseChange(value);
                          field.onChange(value);
                        }}
                        className="bg-muted"
                      >
                        <TabsList className="h-10">
                          <TabsTrigger
                            value="planning"
                            className="cursor-pointer px-3 py-2"
                          >
                            <img
                              src={imagePaths.planningIcon}
                              alt="Planning icon"
                              width={16}
                              height={16}
                            />
                            <span className="text-muted-foreground text-center text-xs leading-[20px]">
                              P
                            </span>
                          </TabsTrigger>
                          <TabsTrigger
                            value="hardClose"
                            className="cursor-pointer px-3 py-2"
                          >
                            <img
                              src={imagePaths.hardCloseIcon}
                              alt="Hard close icon"
                              width={16}
                              height={16}
                            />
                            <span className="text-muted-foreground text-center text-xs leading-[20px]">
                              HC
                            </span>
                          </TabsTrigger>
                        </TabsList>
                      </Tabs>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="indicateEndDate"
                render={({ field }) => (
                  <FormItem className="flex-1">
                    <Popover>
                      <PopoverTrigger>
                        <FormControl>
                          <div
                            className={cn(
                              'border-input bg-background flex h-10 w-full items-center rounded-md border px-3 text-left font-normal shadow-sm',
                              !field.value && 'text-muted-foreground',
                              'cursor-pointer',
                            )}
                          >
                            <span>
                              {field.value
                                ? formatDate(field.value, 'date')
                                : 'Indicate period end'}
                            </span>
                            <CalendarDays className="ml-auto h-4 w-4 opacity-50" />
                          </div>
                        </FormControl>
                      </PopoverTrigger>
                      <PopoverContent>
                        <Calendar
                          mode="single"
                          selected={field.value ?? undefined}
                          onSelect={field.onChange}
                          initialFocus
                        />
                      </PopoverContent>
                    </Popover>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>

          <FormField
            name="industry"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormLabel className="font-bold">Industry</FormLabel>
                <FormControl>
                  <Select value={field.value} onValueChange={field.onChange}>
                    <SelectTrigger className="h-10 w-full bg-white data-[size=default]:h-10">
                      <SelectValue placeholder="Select industry" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        {industries.map(({ label, value }) => (
                          <SelectItem key={value} value={value}>
                            {label}
                          </SelectItem>
                        ))}
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Engagement Managers */}
          <FormField
            control={form.control}
            name="engagementManagers"
            render={({ field }) => {
              const filteredMembers = members.filter((m) =>
                m.name
                  .toLowerCase()
                  .includes(engagementManagerQuery.toLowerCase()),
              );

              return (
                <FormItem>
                  <FormLabel className="font-bold">
                    Engagement Managers
                  </FormLabel>

                  <div className="relative w-full">
                    <div className="focus-within:ring-ring flex min-h-[40px] flex-wrap items-center gap-2 rounded-md border bg-white p-2 focus-within:ring-2">
                      {field.value?.map((value: string) => {
                        const member = members.find((m) => m.id === value);
                        if (!member) return null;
                        return (
                          <Badge
                            key={value}
                            variant="secondary"
                            className="flex items-center gap-2 rounded-[15px] bg-[var(--form-states-fill-static)] px-2 py-1 text-xs leading-[16.8px] font-bold tracking-[0.16px] text-[#323C4E]"
                          >
                            {member.name}
                            <button
                              type="button"
                              onClick={(e) => {
                                e.stopPropagation();
                                field.onChange(
                                  field.value.filter(
                                    (id: string) => id !== value,
                                  ),
                                );
                              }}
                              className="cursor-pointer hover:text-black"
                            >
                              <X className="h-4 w-4" />
                            </button>
                          </Badge>
                        );
                      })}
                      <Input
                        className="h-6 w-full flex-1 border-0 p-0 text-sm shadow-none focus-visible:ring-0 focus-visible:ring-offset-0"
                        placeholder="Search to add engagement managers"
                        value={engagementManagerQuery}
                        onChange={(e) =>
                          setEngagementManagerQuery(e.target.value)
                        }
                        onKeyDown={(e) => e.stopPropagation()}
                      />
                    </div>

                    {engagementManagerQuery && filteredMembers.length > 0 && (
                      <div className="absolute z-50 mt-1 max-h-60 w-full overflow-auto rounded-md border bg-white shadow">
                        {filteredMembers.map((member) => {
                          const isSelected = field.value?.includes(member.id);
                          return (
                            <div
                              key={member.id}
                              className="hover:bg-muted flex cursor-pointer items-center p-2"
                              onClick={() => {
                                const newValue = isSelected
                                  ? field.value.filter(
                                      (id: string) => id !== member.id,
                                    )
                                  : [...(field.value || []), member.id];
                                field.onChange(newValue);
                                setEngagementManagerQuery('');
                              }}
                            >
                              <Checkbox checked={isSelected} className="mr-2" />
                              {member.name}
                            </div>
                          );
                        })}
                      </div>
                    )}
                  </div>

                  <FormMessage />
                </FormItem>
              );
            }}
          />

          {/* Team Members */}
          <FormField
            control={form.control}
            name="teamMembers"
            render={({ field }) => {
              const filteredMembers = members.filter((m) =>
                m.name.toLowerCase().includes(teamMembersQuery.toLowerCase()),
              );

              return (
                <FormItem>
                  <FormLabel className="font-bold">Team Members</FormLabel>

                  <div className="relative w-full">
                    <div className="focus-within:ring-ring flex min-h-[40px] flex-wrap items-center gap-2 rounded-md border bg-white p-2 focus-within:ring-2">
                      {field.value?.map((value: string) => {
                        const member = members.find((m) => m.id === value);
                        if (!member) return null;
                        return (
                          <Badge
                            key={value}
                            variant="secondary"
                            className="flex items-center gap-2 rounded-[15px] bg-[var(--form-states-fill-static)] px-2 py-1 text-xs leading-[16.8px] font-bold tracking-[0.16px] text-[#323C4E]"
                          >
                            {member.name}
                            <button
                              type="button"
                              onClick={(e) => {
                                e.stopPropagation();
                                field.onChange(
                                  field.value.filter(
                                    (id: string) => id !== value,
                                  ),
                                );
                              }}
                              className="cursor-pointer hover:text-black"
                            >
                              <X className="h-4 w-4" />
                            </button>
                          </Badge>
                        );
                      })}
                      <Input
                        className="h-6 w-full flex-1 border-0 p-0 text-sm shadow-none focus-visible:ring-0 focus-visible:ring-offset-0"
                        placeholder="Search to add team members"
                        value={teamMembersQuery}
                        onChange={(e) => setTeamMembersQuery(e.target.value)}
                        onKeyDown={(e) => e.stopPropagation()}
                      />
                    </div>

                    {teamMembersQuery && filteredMembers.length > 0 && (
                      <div className="absolute z-50 mt-1 max-h-60 w-full overflow-auto rounded-md border bg-white shadow">
                        {filteredMembers.map((member) => {
                          const isSelected = field.value?.includes(member.id);
                          return (
                            <div
                              key={member.id}
                              className="hover:bg-muted flex cursor-pointer items-center p-2"
                              onClick={() => {
                                const newValue = isSelected
                                  ? field.value.filter(
                                      (id: string) => id !== member.id,
                                    )
                                  : [...(field.value || []), member.id];
                                field.onChange(newValue);
                                setTeamMembersQuery('');
                              }}
                            >
                              <Checkbox checked={isSelected} className="mr-2" />
                              {member.name}
                            </div>
                          );
                        })}
                      </div>
                    )}
                  </div>

                  <FormMessage />
                </FormItem>
              );
            }}
          />

          <FormField
            control={form.control}
            name="referencedEngagementId"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="font-bold">
                  Referenced Engagement ID
                </FormLabel>
                <Popover>
                  <PopoverTrigger>
                    <FormControl>
                      <div
                        role="combobox"
                        aria-expanded="false" // hoặc true nếu dropdown đang mở
                        className={cn(
                          'border-input flex h-10 w-full items-center justify-between rounded-md border bg-white px-3 shadow-sm',
                          'cursor-pointer',
                        )}
                      >
                        <span>
                          {field.value
                            ? industries.find(
                                (item) => item.value === field.value,
                              )?.label
                            : 'Enter engagement ID'}
                        </span>
                        <ChevronDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                      </div>
                    </FormControl>
                  </PopoverTrigger>
                  <PopoverContent className="w-full p-0">
                    <Command>
                      <CommandInput placeholder="Search industry..." />
                      <CommandList>
                        <CommandGroup>
                          {industries.map((item) => (
                            <CommandItem
                              key={item.value}
                              onSelect={() => {
                                field.onChange(item.value);
                              }}
                            >
                              {item.label}
                            </CommandItem>
                          ))}
                        </CommandGroup>
                      </CommandList>
                    </Command>
                  </PopoverContent>
                </Popover>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className="flex w-full justify-end">
            <Button className="cursor-pointer px-3 text-[#FAFAFA]">
              Add Entities
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
}
