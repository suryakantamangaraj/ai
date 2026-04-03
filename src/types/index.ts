export type ToolCategory = 
  | 'Text'
  | 'Image'
  | 'Video'
  | 'Code'
  | 'Audio'
  | 'Productivity'
  | 'Research'
  | 'Data'
  | 'Other';

export interface AITool {
  id: string;
  name: string;
  description: string;
  categories: ToolCategory[];
  url: string;
  icon?: string; // Optional icon name/url
  pricing: 'Free' | 'Freemium' | 'Paid' | 'Open Source';
  featured?: boolean;
}
