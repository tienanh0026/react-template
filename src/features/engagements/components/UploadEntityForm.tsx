import DragDropFile from '@/components/common/DragDropFile';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { MAX_FILE_SIZE, ACCEPTED_FILE_TYPES } from '@/constants';
import { zodResolver } from '@hookform/resolvers/zod';
import { FormProvider, useForm } from 'react-hook-form';
import { z } from 'zod';

const formSchema = z.object({
  priorYear: z
    .array(z.instanceof(File))
    .min(1, { message: 'Vui lòng chọn ít nhất một file.' })
    .refine((files) => files.every((file) => file.size <= MAX_FILE_SIZE), {
      message: 'Kích thước mỗi file phải nhỏ hơn 5MB.',
    })
    .refine(
      (files) => files.every((file) => ACCEPTED_FILE_TYPES.includes(file.type)),
      { message: 'Chỉ chấp nhận các loại file: JPEG, PNG, PDF.' },
    ),
  trialBalance: z
    .array(z.instanceof(File))
    .min(1, { message: 'Vui lòng chọn ít nhất một file.' })
    .refine((files) => files.every((file) => file.size <= MAX_FILE_SIZE), {
      message: 'Kích thước mỗi file phải nhỏ hơn 5MB.',
    })
    .refine(
      (files) => files.every((file) => ACCEPTED_FILE_TYPES.includes(file.type)),
      { message: 'Chỉ chấp nhận các loại file: JPEG, PNG, PDF.' },
    ),
  generalLedger: z
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

type FormData = z.infer<typeof formSchema>;

interface Props {
  local?: 'engagement' | 'entity';
}

export default function UploadEntityForm({ local = 'engagement' }: Props) {
  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      priorYear: [],
      trialBalance: [],
      generalLedger: [],
    },
  });

  const handleFiles = (data: FormData) => {
    console.log('form data upload', data);
  };

  const data = [
    {
      fileName: 'TBFILE-180124.csv',
      uploaded: 'Uploaded by xxx on 18 JAN 2024',
    },
    {
      fileName: 'TBFILE-180124.csv',
      uploaded: 'Uploaded by xxx on 18 JAN 2024',
    },
  ];

  return (
    <>
      <FormProvider {...form}>
        <form onSubmit={form.handleSubmit(handleFiles)}>
          <div className="flex w-full gap-4">
            <DragDropFile
              name="priorYear"
              placeholder="Drag and drop prior year files here"
              local={local}
            />
            <DragDropFile
              name="trialBalance"
              placeholder="Drag and drop trial balance files here"
              local={local}
            />
            <DragDropFile
              name="generalLedger"
              placeholder="Drag and drop general ledger files here"
              local={local}
            />
          </div>
        </form>
      </FormProvider>
      {local === 'entity' && (
        <div className="mt-4 border border-[#E8E8E8]">
          <Table className="bg-white">
            <TableHeader>
              <TableRow>
                <TableHead className="px-2 py-5">Uploaded Files</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {data.map((row, index) => (
                <TableRow key={index}>
                  <TableCell className="p-4 font-medium">
                    {row.fileName}
                  </TableCell>
                  <TableCell className="p-4 text-right font-normal text-[#444444]">
                    {row.uploaded}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      )}
    </>
  );
}
