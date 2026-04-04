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

export type PromptCategory = 
  | 'Writing'
  | 'Programming'
  | 'Analysis'
  | 'Creative'
  | 'Business'
  | 'Marketing'
  | 'Academic'
  | 'Personal'
  | 'Other';

export interface PromptTemplate {
  id: string;
  title: string;
  description: string;
  prompt: string;
  category: PromptCategory;
  tags?: string[];
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
}

export interface LearnModule {
  id: string;
  title: string;
  description: string;
  content: string;
  order: number;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  duration: string; // e.g., "10 min"
  topics: string[];
}

export interface AITool {
  id: string;
  name: string;
  description: string;
  categories: ToolCategory[];
  url: string;
  icon?: string; // Optional icon name/url
  pricing: 'Free' | 'Freemium' | 'Paid' | 'Open Source' | string;
  tags?: string[];
  featured?: boolean;
}
