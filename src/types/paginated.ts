export type PaginationParams = {
  page?: number;
  per_page?: number;
};

export type Paginated<T> = Readonly<{
  data: T[];
  current_page: number;
  per_page: number;
  first_page_url: string | null;
  next_page_url: string | null;
  prev_page_url: string | null;
  path: string;
  from: number;
  to: number;
}>;
