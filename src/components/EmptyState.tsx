import { FileX } from "lucide-react";

interface EmptyStateProps {
  message: string;
  icon?: React.ElementType;
}

const EmptyState = ({ message, icon: Icon = FileX }: EmptyStateProps) => (
  <div className="flex flex-col items-center justify-center py-16 text-center">
    <div className="w-16 h-16 rounded-full bg-muted flex items-center justify-center mb-4">
      <Icon className="h-8 w-8 text-muted-foreground" />
    </div>
    <p className="text-muted-foreground text-lg font-medium">{message}</p>
  </div>
);

export default EmptyState;
