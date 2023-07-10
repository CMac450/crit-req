export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json }
  | Json[]
  | Date

export interface Database {
  public: {
    Tables: {
      profiles: {
        Row: {
          id: string
          username: string | null
          avatar_url: string | null
          created_date: Date | null
          uploaded_date: Date | null
          password: string | null
        }
        Insert: {
            id: string
            username: string | null
            avatar_url: string | null
            created_date: Date | null
            uploaded_date: Date | null
            password: string | null
        }
        Update: {
            id: string
            username: string | null
            avatar_url: string | null
            created_date: Date | null
            uploaded_date: Date | null
            password: string | null
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
  }
}
