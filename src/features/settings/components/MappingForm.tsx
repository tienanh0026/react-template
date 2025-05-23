import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import DragDropFile from '@/components/common/DragDropFile';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/Form';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/Select';

// Định nghĩa schema như ở trên
const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5MB
const ACCEPTED_FILE_TYPES = ['image/jpeg', 'image/png', 'application/pdf'];

const formSchema = z.object({
  industryToMap: z.string(),
  FSCFile: z
    .array(z.instanceof(File))
    .min(1, { message: 'Vui lòng chọn ít nhất một file.' })
    .refine((files) => files.every((file) => file.size <= MAX_FILE_SIZE), {
      message: 'Kích thước mỗi file phải nhỏ hơn 5MB.',
    })
    .refine(
      (files) => files.every((file) => ACCEPTED_FILE_TYPES.includes(file.type)),
      { message: 'Chỉ chấp nhận các loại file: JPEG, PNG, PDF.' },
    ),
  processMapping: z
    .array(z.instanceof(File))
    .min(1, { message: 'Vui lòng chọn ít nhất một file.' })
    .refine((files) => files.every((file) => file.size <= MAX_FILE_SIZE), {
      message: 'Kích thước mỗi file phải nhỏ hơn 5MB.',
    })
    .refine(
      (files) => files.every((file) => ACCEPTED_FILE_TYPES.includes(file.type)),
      { message: 'Chỉ chấp nhận các loại file: JPEG, PNG, PDF.' },
    ),
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

interface Props {
  type: 'add' | 'edit';
}

export default function MappingForm({ type }: Props) {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      industryToMap: '',
      FSCFile: [],
    },
  });

  const onSubmit = (_data: PeriodFormValues) => {
    // console.log('Submitted data:', data);
  };

  return (
    <div className="p-4 text-[#222222]">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <FormField
            name="industryToMap"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormLabel className="font-bold">Industry To Map</FormLabel>
                <FormControl>
                  <Select value={field.value} onValueChange={field.onChange}>
                    <SelectTrigger className="h-10 w-full bg-white data-[size=default]:h-10">
                      <SelectValue placeholder="Select an industry" />
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

          <DragDropFile name="FSCFile" label="FSC hierarchy mapping library" />

          <DragDropFile name="processMapping" label="Process mapping library" />

          <div className="flex w-full justify-end">
            <Button className="mt-2 cursor-pointer px-3 text-[#FAFAFA]">
              {type === 'add' ? 'Add' : 'Save'}
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
}
