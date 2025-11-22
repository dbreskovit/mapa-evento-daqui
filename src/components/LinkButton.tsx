import { ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

interface LinkButtonProps {
  href: string;
  children: React.ReactNode;
}

export const LinkButton = ({ href, children }: LinkButtonProps) => {
  return (
    <Button
      asChild
      variant="default"
      size="lg"
      className="w-full max-w-2xl h-auto py-4 px-6 text-base sm:text-lg font-semibold rounded-2xl transition-all duration-300 hover:scale-105 hover:shadow-xl"
    >
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-between gap-3"
      >
        <span className="flex-1 text-left">{children}</span>
        <ExternalLink className="w-5 h-5 flex-shrink-0 opacity-70" />
      </a>
    </Button>
  );
};
