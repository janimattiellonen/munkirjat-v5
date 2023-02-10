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

  authorBook: Array<authorBookType>;
};
