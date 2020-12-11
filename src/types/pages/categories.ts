export interface Posts {
  posts: {
    id: number;
    title: string;
    subtitle: string;
    content: string;
    category: number;
    likes: number;
  }[];
}

export interface DataFetch {
  id: number;
  name: string;
  posts: Posts;
}
