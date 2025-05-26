import { Check, Layers2 } from 'lucide-react';
import type { ChangeEvent, DragEvent } from 'react';
import { useState } from 'react';
import { Controller, useFormContext } from 'react-hook-form';

import { FormItem, FormLabel, FormMessage } from '@/components/ui/Form';

interface Props {
  name: string;
  label?: string;
  placeholder?: string;
  local?: 'engagement' | 'entity';
}

export default function DragDropFile({
  name,
  label,
  placeholder,
  local,
}: Props) {
  const { control } = useFormContext();

  const [files, setFiles] = useState<File[]>([]);
  const [isDragging, setIsDragging] = useState<boolean>(false);

  const handleDragOver = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (
    e: DragEvent<HTMLDivElement>,
    onChange: (files: File[]) => void,
  ) => {
    e.preventDefault();
    setIsDragging(false);

    const droppedFiles = Array.from(e.dataTransfer.files);

    setFiles((prevFiles) => [...prevFiles, ...droppedFiles]);
    onChange([...files, ...droppedFiles]);
  };

  const handleFileChange = (
    e: ChangeEvent<HTMLInputElement>,
    onChange: (files: File[]) => void,
  ) => {
    if (e.target.files) {
      const selectedFiles = Array.from(e.target.files);

      setFiles((prevFiles) => [...prevFiles, ...selectedFiles]);
      onChange([...files, ...selectedFiles]);
    }
  };

  return (
    <Controller
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem className="font-inter flex-1">
          {label && <FormLabel className="font-bold">{label}</FormLabel>}
          <div
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={(e) => handleDrop(e, field.onChange)}
            className={`${
              isDragging ? 'border-4' : 'border-1'
            } flex h-21 w-full flex-col items-center justify-center rounded-[10px] border border-[#E7E7E7] bg-white`}
          >
            <label
              htmlFor="file"
              className="flex h-full w-full cursor-pointer items-center justify-center gap-2 text-sm"
            >
              <Layers2 size={24} />
              {placeholder ? placeholder : 'Drag and drop files'}
            </label>
            <input
              id="file"
              type="file"
              multiple
              className="hidden"
              onChange={(e) => handleFileChange(e, field.onChange)}
            />
          </div>

          {files.length > 0 && local === 'engagement' && (
            <ul className="mt-2">
              {files.map((file, index) => (
                <li key={index} className="flex items-center gap-2">
                  <Check size={16} />
                  <p className="text-xs leading-5">{file.name}</p>
                </li>
              ))}
            </ul>
          )}

          <FormMessage />
        </FormItem>
      )}
    />
  );
}
