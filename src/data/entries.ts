export interface DirectoryEntry {
  title: string;
  href: string | null;
  external?: boolean;
  section: 'case-studies' | 'side-projects';
  year: number;
  company?: string;
  yearDisplay?: string;
  tags?: string[];
}

export function tagSlug(tag: string): string {
  return tag.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
}

export const entries: DirectoryEntry[] = [
  {
    title: 'example case study',
    href: '/example-case-study',
    section: 'case-studies',
    year: 2025,
    company: 'your company',
    tags: ['design systems', 'program design'],
  },
  {
    title: 'example project',
    href: '/example-project',
    section: 'side-projects',
    year: 2025,
  },
];
