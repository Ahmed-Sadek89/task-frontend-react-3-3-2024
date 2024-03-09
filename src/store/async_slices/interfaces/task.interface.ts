export type taskOutput = {
  id: number,
  title: string,
  description: string,
  category: "PERSONAL" | "WORK" | "OTHERS" | "SHOPPING",
  status: "PENDING" | "COMPLETED",
  date: string,
  userId: number
}[]

export type taskInput = {
  id?: number,
  title?: string,
  description?: string,
  category?: string,
  status?: "PENDING" | "COMPLETED",
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