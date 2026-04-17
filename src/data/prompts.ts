export interface PromptItem {
  id: string;
  title: string;
  description: string;
  prompt: string;
  category: string;
  tags: string[];
  likes: number;
  type?: "text" | "image" | "audio" | "video" | "code";
  author?: string;
}

export { promptCategories, industryTags, promptTypes, categorySubItems } from "./promptCategories";

export const prompts: PromptItem[] = [
  {
    id: "1",
    title: "Act as a Linux Terminal",
    description: "I want you to act as a linux terminal. I will type commands and you will reply with what the terminal should show.",
    prompt: 'I want you to act as a linux terminal. I will type commands and you will reply with what the terminal should show. I want you to only reply with the terminal output inside one unique code block, and nothing else. Do not write explanations. Do not type commands unless I instruct you to do so. When I need to tell you something in English, I will do so by putting text inside curly brackets {like this}. My first command is pwd.',
    category: "Technical",
    tags: ["Linux", "Terminal", "System"],
    likes: 842,
    type: "code",
    author: "techmaster42",
  },
  {
    id: "2",
    title: "Act as an English Translator",
    description: "I want you to act as an English translator, spelling corrector and improver.",
    prompt: "I want you to act as an English translator, spelling corrector and improver. I will speak to you in any language and you will detect the language, translate it and answer in the corrected and improved version of my text, in English.",
    category: "Writing",
    tags: ["Translation", "English", "Writing"],
    likes: 1203,
    type: "text",
    author: "linguistpro",
  },
  {
    id: "3",
    title: "Act as a JavaScript Console",
    description: "I want you to act as a javascript console. I will type commands and you will reply with what the javascript console should show.",
    prompt: 'I want you to act as a javascript console. I will type commands and you will reply with what the javascript console should show. I want you to only reply with the terminal output inside one unique code block, and nothing else. Do not write explanations. Do not type commands unless I instruct you to do so. When I need to tell you something in english, I will do so by putting text inside curly brackets {like this}. My first command is console.log("Hello World");',
    category: "Coding",
    tags: ["JavaScript", "Console", "Developer"],
    likes: 654,
    type: "code",
    author: "jsdev99",
  },
  {
    id: "4",
    title: "Act as a Marketing Expert",
    description: "I want you to act as a digital marketing expert who can help create compelling campaigns.",
    prompt: "I want you to act as a digital marketing expert. I will provide you with details about a product or service, and you will develop a comprehensive marketing strategy including target audience, key messaging, channel recommendations, and campaign ideas.",
    category: "Marketing",
    tags: ["Marketing", "Strategy", "Business"],
    likes: 987,
    type: "text",
    author: "marketguru",
  },
  {
    id: "5",
    title: "Act as a SQL Terminal",
    description: "I want you to act as a SQL terminal in front of an example database.",
    prompt: "I want you to act as a SQL terminal in front of an example database. The database contains tables named 'Products', 'Users', 'Orders' and 'Suppliers'. I will type queries and you will reply with what the terminal would show. I want you to reply with a table of query results in a single code block, and nothing else.",
    category: "Data",
    tags: ["SQL", "Database", "Data"],
    likes: 543,
    type: "code",
    author: "datawhiz",
  },
  {
    id: "6",
    title: "Act as a UX/UI Developer",
    description: "I want you to act as a UX/UI developer who focuses on design and user experience.",
    prompt: "I want you to act as a UX/UI developer. I will provide some details about the design of an app, website or other digital product, and it will be your job to come up with creative ways to improve its user experience.",
    category: "Design",
    tags: ["UX", "UI", "Design"],
    likes: 765,
    type: "text",
    author: "uxcraft",
  },
  {
    id: "7",
    title: "Act as a Socratic Teacher",
    description: "I want you to act as a Socrat. You must use the Socratic method to teach me.",
    prompt: "I want you to act as a Socrat. You must use the Socratic method to continue teaching me. You will ask me questions to help me explore my own beliefs and challenge my assumptions. I will provide you with a statement or question, and you will engage me in a Socratic dialogue.",
    category: "Education",
    tags: ["Education", "Teaching", "Socratic"],
    likes: 432,
    type: "text",
    author: "philosophyx",
  },
  {
    id: "8",
    title: "Act as a Creative Writing Coach",
    description: "I want you to act as a creative writing coach who helps improve storytelling.",
    prompt: "I want you to act as a creative writing coach. I will share my writing with you, and you will provide constructive feedback on narrative structure, character development, dialogue, pacing, and prose style. Offer specific suggestions for improvement while maintaining the writer's unique voice.",
    category: "Creative",
    tags: ["Writing", "Creative", "Storytelling"],
    likes: 876,
    type: "text",
    author: "storysmith",
  },
  {
    id: "9",
    title: "Act as a Business Plan Writer",
    description: "I want you to act as a business plan writer who creates comprehensive plans.",
    prompt: "I want you to act as a business plan writer. I will provide you with details about a business idea, and you will create a comprehensive business plan including executive summary, market analysis, competitive landscape, marketing strategy, operations plan, and financial projections.",
    category: "Business",
    tags: ["Business", "Planning", "Strategy"],
    likes: 654,
    type: "text",
    author: "bizplanner",
  },
  {
    id: "10",
    title: "Act as a Code Reviewer",
    description: "I want you to act as a senior code reviewer providing thorough feedback.",
    prompt: "I want you to act as a senior code reviewer. I will share code snippets with you, and you will review them for: code quality, potential bugs, performance issues, security vulnerabilities, adherence to best practices, and suggest improvements. Provide your feedback in a structured format.",
    category: "Coding",
    tags: ["Code Review", "Developer", "Quality"],
    likes: 1105,
    type: "code",
    author: "coderabbit",
  },
  {
    id: "11",
    title: "AI Image Prompt Generator",
    description: "Generate detailed prompts for AI image generation tools like DALL-E, Midjourney, and Stable Diffusion.",
    prompt: "You are an expert AI image prompt engineer. I will describe a concept or scene, and you will generate highly detailed, creative prompts optimized for AI image generation. Include style references, lighting, composition, mood, and technical parameters.",
    category: "Creative",
    tags: ["Art", "Image Generation", "AI Art"],
    likes: 2341,
    type: "image",
    author: "artgenmaster",
  },
  {
    id: "12",
    title: "Podcast Script Writer",
    description: "Create engaging podcast scripts with natural dialogue and transitions.",
    prompt: "Act as a professional podcast script writer. I will give you a topic, target audience, and episode length. Create a complete podcast script with intro hook, segment transitions, talking points, guest interview questions, and outro. Make the tone conversational and engaging.",
    category: "Creative",
    tags: ["Podcast", "Audio", "Content"],
    likes: 567,
    type: "audio",
    author: "podcastpro",
  },
  {
    id: "13",
    title: "Video Storyboard Creator",
    description: "Generate detailed video storyboards with scene descriptions and shot compositions.",
    prompt: "You are a professional video storyboard artist. I will describe a video concept, and you will create a detailed storyboard with scene-by-scene breakdowns including: camera angles, shot types, transitions, dialogue/narration, visual elements, timing, and mood for each scene.",
    category: "Creative",
    tags: ["Video", "Storyboard", "Film"],
    likes: 891,
    type: "video",
    author: "filmcraft",
  },
  {
    id: "14",
    title: "Flutter App Architecture",
    description: "Design scalable Flutter app architectures with clean code patterns.",
    prompt: "You are an expert Flutter architect. I will describe an app concept, and you will design a complete architecture including: folder structure, state management approach, dependency injection, repository pattern, API layer, error handling, and navigation. Follow clean architecture principles.",
    category: "Coding",
    tags: ["Flutter", "Mobile", "Architecture"],
    likes: 723,
    type: "code",
    author: "flutterdev",
  },
  {
    id: "15",
    title: "SEO Content Optimizer",
    description: "Optimize any content for search engines while maintaining readability.",
    prompt: "Act as an SEO specialist. I will share content with you, and you will optimize it for search engines. Analyze keyword density, suggest meta descriptions, improve headings, add internal linking opportunities, and ensure proper semantic HTML structure while keeping the content natural and engaging.",
    category: "Marketing",
    tags: ["SEO", "Content", "Optimization"],
    likes: 1456,
    type: "text",
    author: "seowizard",
  },
];

export interface LearnSection {
  id: string;
  title: string;
  children?: LearnSection[];
}

export const learnNavigation: LearnSection[] = [
  {
    id: "introduction",
    title: "Introduction",
  },
  {
    id: "prompt-engineering",
    title: "Prompt Engineering",
    children: [
      { id: "llm-settings", title: "LLM Settings" },
      { id: "basics", title: "Basics of Prompting" },
      { id: "elements", title: "Prompt Elements" },
      { id: "tips", title: "General Tips" },
      { id: "examples", title: "Examples of Prompts" },
    ],
  },
  {
    id: "techniques",
    title: "Prompting Techniques",
    children: [
      { id: "zero-shot", title: "Zero-shot Prompting" },
      { id: "few-shot", title: "Few-shot Prompting" },
      { id: "chain-of-thought", title: "Chain-of-Thought" },
      { id: "meta-prompting", title: "Meta Prompting" },
      { id: "self-consistency", title: "Self-Consistency" },
      { id: "tree-of-thought", title: "Tree of Thoughts" },
      { id: "rag", title: "Retrieval Augmented Generation" },
    ],
  },
  {
    id: "applications",
    title: "Applications",
    children: [
      { id: "code-generation", title: "Code Generation" },
      { id: "creative-writing", title: "Creative Writing" },
      { id: "data-analysis", title: "Data Analysis" },
      { id: "chatbots", title: "Building Chatbots" },
    ],
  },
  {
    id: "models",
    title: "Models",
    children: [
      { id: "gpt-4", title: "GPT-4" },
      { id: "claude", title: "Claude" },
      { id: "gemini", title: "Gemini" },
      { id: "llama", title: "LLaMA" },
    ],
  },
  {
    id: "risks",
    title: "Risks & Misuses",
    children: [
      { id: "prompt-injection", title: "Prompt Injection" },
      { id: "jailbreaking", title: "Jailbreaking" },
      { id: "bias", title: "Biases" },
    ],
  },
];

export const learnContent: Record<string, { title: string; content: string }> = {
  introduction: {
    title: "Introduction to Prompt Engineering",
    content: `Prompt engineering is a relatively new discipline for developing and optimizing prompts to efficiently use language models (LMs) for a wide variety of applications and research topics. Prompt engineering skills help to better understand the capabilities and limitations of large language models (LLMs).

Researchers use prompt engineering to improve the capacity of LLMs on a wide range of common and complex tasks such as question answering and arithmetic reasoning. Developers use prompt engineering to design robust and effective prompting techniques that interface with LLMs and other tools.

Prompt engineering is not just about designing and developing prompts. It encompasses a wide range of skills and techniques that are useful for interacting and developing with LLMs. It's an important skill to interface, build with, and understand capabilities of LLMs. You can use prompt engineering to improve safety of LLMs and build new capabilities like augmenting LLMs with domain knowledge and external tools.

## Why Prompt Engineering Matters

As LLMs become more powerful and widely adopted, the ability to effectively communicate with them becomes increasingly valuable. Good prompt engineering can:

- **Improve accuracy**: Well-crafted prompts lead to more precise and relevant responses
- **Save time and resources**: Efficient prompts reduce the need for multiple iterations
- **Enable complex tasks**: Advanced prompting techniques unlock capabilities that simple queries cannot
- **Ensure consistency**: Structured prompts produce more reliable and reproducible outputs

## Getting Started

This guide provides a comprehensive overview of prompt engineering, from basic concepts to advanced techniques. Whether you're a beginner looking to understand the fundamentals or an experienced practitioner seeking to refine your skills, you'll find valuable insights and practical examples throughout.`,
  },
  "llm-settings": {
    title: "LLM Settings",
    content: `When working with LLMs, you can configure several parameters that affect the output. Understanding these settings is crucial for effective prompt engineering.

## Temperature

The temperature parameter controls the randomness of the model's output. A lower temperature (e.g., 0.1) makes the output more deterministic and focused, while a higher temperature (e.g., 0.9) makes it more creative and diverse.

- **Low temperature (0.0-0.3)**: Best for factual, consistent responses
- **Medium temperature (0.4-0.7)**: Balanced creativity and coherence
- **High temperature (0.8-1.0)**: Best for creative, varied outputs

## Top P (Nucleus Sampling)

Top P is an alternative to temperature sampling. It controls the cumulative probability of the token selection. A top_p of 0.1 means only tokens comprising the top 10% probability mass are considered.

## Max Tokens

This parameter sets the maximum number of tokens the model will generate. It's important to set this appropriately to avoid truncated responses or unnecessary verbosity.

## Frequency Penalty

This parameter reduces the likelihood of the model repeating the same line verbatim. Values range from 0 to 2.

## Presence Penalty

Similar to frequency penalty, but it reduces the likelihood of the model talking about the same topic again. This encourages the model to cover new ground.`,
  },
  basics: {
    title: "Basics of Prompting",
    content: `A prompt can contain any of the following elements: instruction, context, input data, and output indicator. Not all elements are required, and the format depends on the task at hand.

## Simple Prompts

The simplest prompts are straightforward instructions or questions:

\`\`\`
What is the capital of France?
\`\`\`

## Prompt Formatting

A well-structured prompt typically follows this pattern:

\`\`\`
[Instruction]
[Context]
[Input Data]
[Output Indicator]
\`\`\`

## Example

\`\`\`
Classify the text into neutral, negative, or positive.

Text: I think the vacation was okay.

Sentiment:
\`\`\`

The model would respond with "Neutral" based on this well-structured prompt.

## Key Principles

1. **Be specific**: Clear instructions lead to better results
2. **Provide examples**: When possible, show the model what you expect
3. **Iterate**: Refine your prompts based on the outputs you receive
4. **Use delimiters**: Separate different parts of your prompt clearly`,
  },
};
