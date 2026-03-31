import { departments, courses, resources } from "@/data/mockData";
import { BarChart3, TrendingUp, BookOpen, FileText } from "lucide-react";

const AnalyticsView = () => {
  const deptStats = departments.map((dept) => {
    const deptCourses = courses.filter((c) => c.departmentId === dept.id);
    const resCount = deptCourses.reduce((sum, c) => sum + resources.filter((r) => r.courseId === c.id).length, 0);
    return { name: dept.name, courses: deptCourses.length, resources: resCount };
  }).sort((a, b) => b.resources - a.resources);

  const totalRes = resources.length;
  const avgPerCourse = (totalRes / courses.length).toFixed(1);
  const typeBreakdown = resources.reduce((acc, r) => { acc[r.type] = (acc[r.type] || 0) + 1; return acc; }, {} as Record<string, number>);

  return (
    <div className="p-8 space-y-8">
      <div>
        <h1 className="font-display text-2xl font-bold text-foreground">Analytics</h1>
        <p className="text-sm text-muted-foreground">Resource distribution and usage statistics</p>
      </div>

      <div className="grid grid-cols-4 gap-6">
        {[
          { label: "Total Resources", value: totalRes, icon: FileText },
          { label: "Total Courses", value: courses.length, icon: BookOpen },
          { label: "Avg Resources/Course", value: avgPerCourse, icon: TrendingUp },
          { label: "Departments", value: departments.length, icon: BarChart3 },
        ].map((s) => (
          <div key={s.label} className="bg-card border border-border rounded-2xl p-5 flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
              <s.icon className="h-6 w-6 text-primary" />
            </div>
            <div>
              <p className="text-xs text-muted-foreground uppercase tracking-wider">{s.label}</p>
              <p className="text-2xl font-bold text-foreground">{s.value}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-2 gap-6">
        {/* Resource types */}
        <div className="bg-card border border-border rounded-2xl p-6">
          <h3 className="font-display font-bold text-foreground mb-4">Resource Types</h3>
          <div className="space-y-3">
            {Object.entries(typeBreakdown).map(([type, count]) => (
              <div key={type}>
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-muted-foreground">{type}</span>
                  <span className="font-semibold text-foreground">{count}</span>
                </div>
                <div className="w-full h-2 bg-secondary rounded-full">
                  <div className="h-2 bg-gradient-to-r from-primary to-accent rounded-full" style={{ width: `${(count / totalRes) * 100}%` }} />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Top departments */}
        <div className="bg-card border border-border rounded-2xl p-6">
          <h3 className="font-display font-bold text-foreground mb-4">Top Departments by Resources</h3>
          <div className="space-y-2">
            {deptStats.slice(0, 8).map((d, i) => (
              <div key={d.name} className="flex items-center justify-between text-sm py-1.5 border-b border-border last:border-0">
                <span className="text-muted-foreground"><span className="text-primary font-semibold mr-2">#{i + 1}</span>{d.name}</span>
                <span className="font-semibold text-foreground">{d.resources} resources</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnalyticsView;
