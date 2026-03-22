import { Link } from "react-router-dom";
import { Monitor, Calculator, TrendingUp, Mic, Microscope, Landmark, Briefcase, Globe, Users } from "lucide-react";
import { departments } from "@/data/mockData";
import EmptyState from "@/components/EmptyState";

const iconMap: Record<string, React.ElementType> = {
  Monitor, Calculator, TrendingUp, Mic, Microscope, Landmark, Briefcase, Globe, Users,
};

const DepartmentsPage = () => {
  return (
    <div className="container py-12">
      <div className="text-center mb-10">
        <span className="inline-block text-xs font-semibold tracking-widest text-primary uppercase mb-3">Explore</span>
        <h1 className="font-display text-4xl font-extrabold text-foreground">Browse Departments</h1>
        <p className="text-muted-foreground mt-3 max-w-lg mx-auto">
          Explore curated academic resources from all faculties and fields of study.
        </p>
      </div>

      {departments.length === 0 ? (
        <EmptyState message="No departments available" />
      ) : (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {departments.map((dept) => {
            const Icon = iconMap[dept.icon] || Monitor;
            return (
              <Link
                key={dept.id}
                to={`/departments/${dept.id}`}
                className="bg-card border border-border rounded-2xl p-6 hover:shadow-md hover:border-primary/30 transition-all group"
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <Icon className="h-7 w-7 text-primary" />
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
