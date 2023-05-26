export interface Book {
  id: number;
  good_reads_id: number | null;
  title: string;
  isbn: number | null;
  image_url: string;
  user_id: number;
  dismissed: boolean;
  already_read: boolean;
  author: string;
  price: string;
  amazon_url: string;
  created_at: string;
  page_num: string;
  description: null;
  genres: null | String[];
  iskindleunlimited: null | boolean;
  amazon_code: string;
}
