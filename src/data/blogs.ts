export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  tags: string[];
  image?: string;
}

export const blogsData: BlogPost[] = [
];
