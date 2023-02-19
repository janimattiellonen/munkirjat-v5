export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json }
  | Json[]

export interface Database {
  public: {
    Tables: {
      author: {
        Row: {
          created_at: string | null
          first_name: string | null
          id: number
          last_name: string | null
        }
        Insert: {
          created_at?: string | null
          first_name?: string | null
          id?: number
          last_name?: string | null
        }
        Update: {
          created_at?: string | null
          first_name?: string | null
          id?: number
          last_name?: string | null
        }
      }
      author_book: {
        Row: {
          author_id: number | null
          book_id: number | null
          id: number
        }
        Insert: {
          author_id?: number | null
          book_id?: number | null
          id?: number
        }
        Update: {
          author_id?: number | null
          book_id?: number | null
          id?: number
        }
      }
      book: {
        Row: {
          created_at: string | null
          finished_reading: string | null
          format: string | null
          id: number
          is_read: boolean | null
          language: string | null
          page_count: number | null
          price: number | null
          rating: number | null
          started_reading: string | null
          title: string | null
          updated_at: string | null
        }
        Insert: {
          created_at?: string | null
          finished_reading?: string | null
          format?: string | null
          id?: number
          is_read?: boolean | null
          language?: string | null
          page_count?: number | null
          price?: number | null
          rating?: number | null
          started_reading?: string | null
          title?: string | null
          updated_at?: string | null
        }
        Update: {
          created_at?: string | null
          finished_reading?: string | null
          format?: string | null
          id?: number
          is_read?: boolean | null
          language?: string | null
          page_count?: number | null
          price?: number | null
          rating?: number | null
          started_reading?: string | null
          title?: string | null
          updated_at?: string | null
        }
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}
