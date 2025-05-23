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
import { Input } from '@/components/ui/Input';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/Select';
import { ACCEPTED_FILE_TYPES, MAX_FILE_SIZE } from '@/constants';

const formSchema = z.object({
  documentName: z.string(),
  uploadDocuments: z
    .array(z.instanceof(File))
    .min(1, { message: 'Vui lòng chọn ít nhất một file.' })
    .refine((files) => files.every((file) => file.size <= MAX_FILE_SIZE), {
      message: 'Kích thước mỗi file phải nhỏ hơn 5MB.',
    })
    .refine(
      (files) => files.every((file) => ACCEPTED_FILE_TYPES.includes(file.type)),
      { message: 'Chỉ chấp nhận các loại file: JPEG, PNG, PDF.' },
    ),
  categoryKnowledge: z.string(),
});

type PeriodFormValues = z.infer<typeof formSchema>;

const knowledgeList = [
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

export default function KnowledgeForm({ type }: Props) {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      documentName: '',
      uploadDocuments: [],
      categoryKnowledge: '',
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
            control={form.control}
            name="documentName"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="font-bold">Engagement Name</FormLabel>
                <FormControl>
                  <Input
                    className="h-10 bg-white text-[13.34px]"
                    placeholder="Enter a name"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <DragDropFile name="uploadDocuments" label="Upload documents" />

          <FormField
            name="categoryKnowledge"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormLabel className="font-bold">
                  Categorise knowledge
                </FormLabel>
                <FormControl>
                  <Select value={field.value} onValueChange={field.onChange}>
                    <SelectTrigger className="h-10 w-full bg-white data-[size=default]:h-10">
                      <SelectValue placeholder="Select a category" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        {knowledgeList.map(({ label, value }) => (
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
