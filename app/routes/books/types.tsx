export type authorType = {
  id: number;
  firstName: number;
  lastName: number;
};

export type authorBookType = {
  authorId?: number;
  bookId?: number;
  author: authorType;
};

export type bookType = {
  id: number;
  createdAt?: string;
  updatedAt?: string;
  title: string;
  language: string;
  pageCount: number;
  startedReading?: string;
  finishedReading?: string;
  rating?: number;
  price?: number;
  format: string;
  isRead: boolean;

  author_book: Array<authorBookType>;
};

export type dbAuthorType = {
  id: number;
  first_name: number;
  last_name: number;
};

export type dbAuthorBookType = {
  author: dbAuthorType;
};

export type dbBbookType = {
  id: number;
  created_at?: string;
  updated_at?: string;
  title: string;
  language: string;
  page_count: number;
  started_reading?: string;
  finished_reading?: string;
  rating?: number;
  price?: number;
  format: string;
  is_read: boolean;

  author_book: Array<dbAuthorBookType>;
};

export type authorDTO = {
  id: number;
  firstName: number;
  lastName: number;
};

export type authorBookDTO = {
  authorId?: number;
  bookId?: number;
  author: authorDTO;
};

export type bookDTO = {
  id: number;
  createdAt?: string;
  updatedAt?: string;
  title: string;
  language: string;
  pageCount: number;
  startedReading?: string;
  finishedReading?: string;
  rating?: number;
  price?: number;
  format: string;
  isRead: boolean;

  authors: Array<authorDTO>;
};
