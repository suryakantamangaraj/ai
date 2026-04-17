import { useState } from "react";
import { ChevronRight, ChevronDown, Search, BookOpen } from "lucide-react";
import { Input } from "@/components/ui/input";
import { learnNavigation, learnContent, type LearnSection } from "@/data/prompts";
import { cn } from "@/lib/utils";

const NavItem = ({
  section,
  activeId,
  onSelect,
  depth = 0,
}: {
  section: LearnSection;
  activeId: string;
  onSelect: (id: string) => void;
  depth?: number;
}) => {
  const [open, setOpen] = useState(true);
  const hasChildren = section.children && section.children.length > 0;

  return (
    <div>
      <button
        onClick={() => {
          if (hasChildren) setOpen(!open);
          onSelect(section.id);
        }}
        className={cn(
          "flex items-center gap-2 w-full text-left px-3 py-2 rounded-md text-sm transition-colors",
          activeId === section.id
            ? "bg-primary/10 text-primary font-medium"
            : "text-muted-foreground hover:text-foreground hover:bg-secondary",
          depth > 0 && "pl-6"
        )}
      >
        {hasChildren &&
          (open ? (
            <ChevronDown className="h-3.5 w-3.5 flex-shrink-0" />
          ) : (
            <ChevronRight className="h-3.5 w-3.5 flex-shrink-0" />
          ))}
        {!hasChildren && <span className="w-3.5" />}
        <span className="truncate">{section.title}</span>
      </button>
      {hasChildren && open && (
        <div className="ml-2">
          {section.children!.map((child) => (
            <NavItem
              key={child.id}
              section={child}
              activeId={activeId}
              onSelect={onSelect}
              depth={depth + 1}
            />
          ))}
        </div>
      )}
    </div>
  );
};

const PromptsLearn = () => {
  const [activeId, setActiveId] = useState("introduction");
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const content = learnContent[activeId] || learnContent["introduction"];

  return (
    <div className="flex min-h-[calc(100vh-4rem)]">
      {/* Sidebar */}
      <aside
        className={cn(
          "w-72 border-r border-border/50 bg-background/50 backdrop-blur-sm flex-shrink-0 flex flex-col",
          "fixed lg:static inset-y-16 left-0 z-40 transition-transform",
          sidebarOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
        )}
      >
        <div className="p-4 border-b border-border/50">
          <div className="flex items-center gap-2 mb-4">
            <BookOpen className="h-5 w-5 text-primary" />
            <span className="font-semibold text-foreground text-sm">
              Prompt Engineering Guide
            </span>
          </div>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-muted-foreground" />
            <Input
              placeholder="Search... (Ctrl+K)"
              className="pl-9 h-8 bg-secondary border-border text-xs"
            />
          </div>
        </div>
        <nav className="flex-1 overflow-auto p-3 space-y-0.5">
          {learnNavigation.map((section) => (
            <NavItem
              key={section.id}
              section={section}
              activeId={activeId}
              onSelect={(id) => {
                setActiveId(id);
                setSidebarOpen(false);
              }}
            />
          ))}
        </nav>
      </aside>

      {/* Mobile toggle */}
      <button
        className="lg:hidden fixed bottom-4 left-4 z-50 bg-primary text-primary-foreground p-3 rounded-full shadow-lg"
        onClick={() => setSidebarOpen(!sidebarOpen)}
      >
        <BookOpen className="h-5 w-5" />
      </button>

      {/* Overlay */}
      {sidebarOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-background/60 z-30"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Content */}
      <div className="flex-1 overflow-auto">
        <article className="max-w-3xl mx-auto px-6 py-10">
          <h1 className="text-3xl font-bold text-foreground mb-6">
            {content.title}
          </h1>
          <div className="prose prose-invert prose-sm max-w-none">
            {content.content.split("\n\n").map((para, i) => {
              if (para.startsWith("## ")) {
                return (
                  <h2
                    key={i}
                    className="text-xl font-semibold text-foreground mt-8 mb-4"
                  >
                    {para.replace("## ", "")}
                  </h2>
                );
              }
              if (para.startsWith("```")) {
                const code = para.replace(/```\w*\n?/g, "").trim();
                return (
                  <pre
                    key={i}
                    className="bg-secondary rounded-lg p-4 text-sm text-foreground overflow-x-auto my-4"
                  >
                    <code>{code}</code>
                  </pre>
                );
              }
              if (para.startsWith("- **")) {
                const items = para.split("\n");
                return (
                  <ul key={i} className="list-disc list-inside space-y-2 my-4">
                    {items.map((item, j) => (
                      <li key={j} className="text-muted-foreground text-sm">
                        <span
                          dangerouslySetInnerHTML={{
                            __html: item
                              .replace(/^- /, "")
                              .replace(/\*\*(.*?)\*\*/g, "<strong class='text-foreground'>$1</strong>"),
                          }}
                        />
                      </li>
                    ))}
                  </ul>
                );
              }
              if (para.match(/^\d\./)) {
                const items = para.split("\n");
                return (
                  <ol key={i} className="list-decimal list-inside space-y-2 my-4">
                    {items.map((item, j) => (
                      <li key={j} className="text-muted-foreground text-sm">
                        <span
                          dangerouslySetInnerHTML={{
                            __html: item
                              .replace(/^\d+\.\s*/, "")
                              .replace(/\*\*(.*?)\*\*/g, "<strong class='text-foreground'>$1</strong>"),
                          }}
                        />
                      </li>
                    ))}
                  </ol>
                );
              }
              return (
                <p key={i} className="text-muted-foreground leading-relaxed mb-4">
                  {para}
                </p>
              );
            })}
          </div>

          {/* Related cards */}
          <div className="mt-12 pt-8 border-t border-border/50">
            <h3 className="text-lg font-semibold text-foreground mb-4">
              Related Learning
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                {
                  title: "Prompt Engineering Course",
                  desc: "Complete course on mastering prompts for any LLM.",
                },
                {
                  title: "Advanced Techniques Workshop",
                  desc: "Deep dive into CoT, ToT, and meta-prompting.",
                },
              ].map((card) => (
                <div
                  key={card.title}
                  className="glass-card rounded-lg p-5 hover:border-primary/30 transition-all cursor-pointer"
                >
                  <h4 className="font-medium text-foreground mb-1">
                    {card.title}
                  </h4>
                  <p className="text-sm text-muted-foreground">{card.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </article>
      </div>
    </div>
  );
};

export default PromptsLearn;
