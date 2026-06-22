export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  tags: string[];
  image?: string;
}

export const blogsData: BlogPost[] = [
  {
    slug: 'first-year-phd',
    title: 'What My First Year of PhD Felt Like',
    date: '2026-06-22',
    excerpt: 'A personal, non-technical reflection on my first year of PhD life—the doubts, routines, and small moments that made the journey meaningful.',
    tags: ['PhD', 'Experience', 'Reflection'],
    image: 'thumbnail.png'
  }
];
