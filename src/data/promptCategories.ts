export const promptCategories = [
  "All",
  "Writing",
  "Coding",
  "Marketing",
  "Education",
  "Business",
  "Creative",
  "Technical",
  "Data",
  "Design",
];

export const categorySubItems: Record<string, string[]> = {
  Writing: ["Blog Writing", "Copywriting", "Academic Writing", "SEO Writing", "Email Writing", "Script Writing"],
  Coding: ["Web Development", "Mobile Apps", "Backend", "DevOps", "Algorithms", "Code Review"],
  Marketing: ["Social Media", "Content Marketing", "Email Marketing", "SEO", "PPC", "Brand Strategy"],
  Education: ["Lesson Plans", "Tutoring", "Quiz Creation", "Curriculum Design", "Study Guides"],
  Business: ["Business Plans", "Pitch Decks", "Financial Analysis", "HR", "Operations"],
  Creative: ["Storytelling", "Poetry", "Screenwriting", "Game Design", "Music"],
  Technical: ["Documentation", "API Design", "System Architecture", "Testing", "Security"],
  Data: ["Data Analysis", "Visualization", "Machine Learning", "SQL Queries", "ETL Pipelines"],
  Design: ["UI/UX", "Graphic Design", "Branding", "Motion Design", "Prototyping"],
};

export const promptTypes = [
  { value: "all", label: "All Types" },
  { value: "text", label: "Text" },
  { value: "image", label: "Image" },
  { value: "audio", label: "Audio" },
  { value: "video", label: "Video" },
  { value: "code", label: "Code" },
];

export const industryTags = [
  "Teachers", "Freelancers", "Doctors", "Translators", "Marketers",
  "Developers", "Designers", "Writers", "Students", "Entrepreneurs",
  "Researchers", "Lawyers", "Engineers", "Analysts", "Consultants",
  "Coaches", "Photographers", "Musicians", "Architects", "Scientists",
  "Journalists", "Therapists", "Accountants", "Recruiters", "Product Managers",
  "Data Scientists", "DevOps", "QA Testers", "Content Creators", "Influencers",
  "Filmmakers", "Animators", "Game Developers", "Cybersecurity", "Healthcare",
  "Real Estate", "E-commerce", "SaaS", "Startups", "Non-profit",
];
