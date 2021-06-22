export interface Todo {
  id: number;
  title: string;
  isComplete: boolean;
}

export function createTodo(params: Partial<Todo>) {
  return {
    id: params?.id,
    title: params?.title,
    isComplete: params?.isComplete
  } as Todo;
}
