import { useQuery, queryOptions } from '@tanstack/react-query';

import type { APIResponse } from '@/interface/api/types';
import { api } from '@/libs/axios';
import type { QueryConfig } from '@/libs/react-query/types';

type Todo = {
  id: string;
  name: string;
};

type TodoListResponse = APIResponse<Todo[]>;

const getTodoList = async (): Promise<TodoListResponse> => {
  const response = await api.get('/todo');
  return response.data;
};

export const getTodoOptions = () =>
  queryOptions({
    queryKey: ['todo'],
    queryFn: () => getTodoList(),
  });

export const useGetTodo = (
  queryConfig?: QueryConfig<typeof getTodoOptions>,
) => {
  return useQuery({
    ...getTodoOptions(),
    ...(queryConfig || {}),
  });
};
