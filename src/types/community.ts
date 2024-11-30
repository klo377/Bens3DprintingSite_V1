export interface Group {
  id: string;
  name: string;
  description: string;
  created_at: string;
  created_by: string;
  member_count: number;
}

export interface Post {
  id: string;
  title: string;
  content: string;
  created_at: string;
  author_id: string;
  group_id: string;
  likes: number;
  comment_count: number;
}

export interface Comment {
  id: string;
  content: string;
  created_at: string;
  author_id: string;
  post_id: string;
}

export interface STLFile {
  id: string;
  name: string;
  description: string;
  file_url: string;
  preview_url: string;
  price: number | null;
  created_at: string;
  author_id: string;
  group_id: string;
  download_count: number;
}