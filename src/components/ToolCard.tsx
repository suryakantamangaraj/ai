import { Star } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import type { Tool } from "@/data/tools";

const ToolCard = ({ tool }: { tool: Tool }) => {
  return (
    <div className="glass-card-glow rounded-lg p-4 hover:cosmic-glow-strong transition-all group cursor-pointer">
      <div className="flex items-start gap-4">
        <div className="text-3xl flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-lg bg-secondary">
          {tool.icon}
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-1">
            <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors truncate">
              {tool.name}
            </h3>
            {tool.isNew && (
              <Badge variant="secondary" className="text-xs bg-primary/20 text-primary border-0">
                New
              </Badge>
            )}
          </div>
          <p className="text-sm text-muted-foreground mb-2 line-clamp-2">
            {tool.description}
          </p>
          <div className="flex items-center gap-3 text-xs text-muted-foreground">
            <span className="flex items-center gap-1">
              <Star className="h-3 w-3 fill-primary text-primary" />
              {tool.stars.toLocaleString()}
            </span>
            <Badge variant="outline" className="text-xs border-border">
              {tool.platform}
            </Badge>
            <span className="ml-auto font-medium text-foreground">
              {tool.price}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ToolCard;
