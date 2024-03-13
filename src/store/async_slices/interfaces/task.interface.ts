export type taskOutput = {
  id: number,
  title: string,
  description: string,
  category?: string
  status?: string,
  date: string,
  userId: number,
  count: number[]
}[]


export type taskInput = {
  id?: number,
  title?: string,
  description?: string,
  category?: string
  status?: string,
  userId?: number
}

export type userId = {
  userId: number;
};

export type taskId = {
  id: number;
};

export type taskState = {
  loading: boolean,
  error: boolean,
  data: taskOutput | null
}

