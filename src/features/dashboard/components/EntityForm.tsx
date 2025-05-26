import { zodResolver } from '@hookform/resolvers/zod';
import { ListPlus, Trash, Upload } from 'lucide-react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import { Button } from '@/components/ui/Button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/Form';
import { Input } from '@/components/ui/Input';

const formSchema = z.object({
  entityName: z.string(),
  entityCode: z.string(),
  engagementCode: z.string(),
});

type PeriodFormValues = z.infer<typeof formSchema>;

export default function EntityForm() {
  const [entities, setEntities] = useState<PeriodFormValues[]>([]);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      entityName: '',
      entityCode: '',
      engagementCode: '',
    },
  });

  const { handleSubmit, control, reset } = form;

  const addEntity = (data: PeriodFormValues) => {
    setEntities((currentEntities) => [
      ...currentEntities,
      {
        ...data,
      },
    ]);
    reset();
  };

  const removeEntity = (entityCode: string) => {
    const removedEntities = entities.filter(
      (entity) => entity.entityCode !== entityCode,
    );

    setEntities(removedEntities);
  };

  return (
    <div className="box-border space-y-4 rounded-[10px] border border-[#E8E8E8] bg-[#F8F8FA] p-6 text-[#222222]">
      <Form {...form}>
        <form onSubmit={handleSubmit(addEntity)} className="space-y-6">
          <div className="flex gap-3">
            <FormField
              control={control}
              name="entityName"
              render={({ field }) => (
                <FormItem className="flex-2">
                  <FormLabel className="font-bold">Engagement Name</FormLabel>
                  <FormControl>
                    <Input
                      className="h-10 bg-white text-[13.34px]"
                      placeholder="Enter entity name"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={control}
              name="entityCode"
              render={({ field }) => (
                <FormItem className="flex-1">
                  <FormLabel className="font-bold">Entity Code</FormLabel>
                  <FormControl>
                    <Input
                      className="h-10 bg-white text-[13.34px]"
                      placeholder="Enter entity code"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={control}
              name="engagementCode"
              render={({ field }) => (
                <FormItem className="flex-1">
                  <FormLabel className="font-bold">Engagement Code</FormLabel>
                  <FormControl>
                    <Input
                      className="h-10 bg-white text-[13.34px]"
                      placeholder="Enter engagement code"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="flex items-end">
              <Button
                size="icon"
                className="h-10 w-10 p-0 [&_svg:not([class*='size-'])]:size-6"
              >
                <ListPlus size={24} />
              </Button>
            </div>
          </div>
        </form>
      </Form>
      <div className="min-h-50 space-y-2">
        {entities.length > 0 ? (
          entities.map(({ entityName, entityCode, engagementCode }) => (
            <div
              key={entityCode}
              className="flex h-9 items-center rounded-sm border bg-white px-3 text-xs leading-4 text-black"
            >
              <div className="flex-2">{entityName}</div>
              <div className="flex-1">{entityCode}</div>
              <div className="flex-1">{engagementCode}</div>
              <div className="text-right">
                <Button
                  size="sm"
                  variant="ghost"
                  onClick={() => removeEntity(entityCode)}
                  className="cursor-pointer"
                >
                  <Trash className="h-4 w-4" />
                </Button>
              </div>
            </div>
          ))
        ) : (
          <div className="flex h-50 w-full items-center justify-center">
            <span className="text-xs font-medium">
              Start adding entitles for this engagement by uploading .csv or
              adding it manually
            </span>
          </div>
        )}
      </div>
      <div className="flex justify-between">
        <div>
          <input id="file-upload" type="file" className="hidden" />
          <label htmlFor="file-upload">
            <Button
              variant="primary"
              className="flex cursor-pointer items-center gap-2 bg-black"
            >
              <Upload size={16} />
              .csv
            </Button>
          </label>
        </div>
        <div>
          <Button variant={'ghost'} className="cursor-pointer">
            Previous
          </Button>
          <Button className="cursor-pointer">Create Engagement</Button>
        </div>
      </div>
    </div>
  );
}
