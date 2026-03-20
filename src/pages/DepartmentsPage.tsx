import { Link } from "react-router-dom";
import { Monitor, Calculator, TrendingUp, Mic, Microscope, Landmark, Briefcase, Globe, Users } from "lucide-react";
import { departments } from "@/data/mockData";
import { Badge } from "@/components/ui/badge";
import EmptyState from "@/components/EmptyState";

const iconMap: Record<string, React.ElementType> = {
  Monitor, Calculator, TrendingUp, Mic, Microscope, Landmark, Briefcase, Globe, Users,
};

const DepartmentsPage = () => {
  return (
    <div className="container py-12">
      <Badge className="bg-primary text-primary-foreground mb-4 text-[10px] tracking-widest uppercase font-semibold">
        Browse Departments
      </Badge>
      <h1 className="font-display text-4xl font-extrabold text-foreground">Browse Departments</h1>
      <p className="text-muted-foreground mt-3 max-w-lg">
        Explore curated academic resources including lecture notes, past examinations, and collaborative projects from all faculties.
      </p>

      {departments.length === 0 ? (
        <EmptyState message="No departments available" />
      ) : (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
          {departments.map((dept) => {
            const Icon = iconMap[dept.icon] || Monitor;
            return (
              <Link
                key={dept.id}
                to={`/departments/${dept.id}`}
                className="bg-card border border-border rounded-xl p-6 hover:shadow-md transition-shadow group"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 rounded-lg bg-accent flex items-center justify-center">
                    <Icon className="h-6 w-6 text-accent-foreground" />
                  </div>
                </div>
                <h3 className="font-semibold text-foreground text-lg mb-1">{dept.name}</h3>
                <p className="text-sm text-muted-foreground">{dept.faculty}</p>
                <p className="text-sm text-muted-foreground mt-1">{dept.courseCount} courses available</p>
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default DepartmentsPage;
