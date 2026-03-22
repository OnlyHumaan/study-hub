import { useParams } from "react-router-dom";
import { ArrowRight, ExternalLink, Search, Code, Play, BookOpen, GraduationCap } from "lucide-react";
import { getCourseById, getResourcesByCourse, getDepartmentById } from "@/data/mockData";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import EmptyState from "@/components/EmptyState";

const typeFilters = ["All Resources", "Video Lectures", "Interactive Tutorials", "Text Documentation", "Certification Courses"];

const typeIcons: Record<string, React.ElementType> = {
  "Video Lectures": Play,
  "Interactive Tutorials": Code,
  "Text Documentation": BookOpen,
  "Certification Courses": GraduationCap,
};

const CourseResourcesPage = () => {
  const { courseId } = useParams<{ courseId: string }>();
  const course = getCourseById(courseId || "");
  const resources = getResourcesByCourse(courseId || "");
  const [activeFilter, setActiveFilter] = useState("All Resources");

  if (!course) {
    return (
      <div className="container py-20 text-center">
        <h1 className="text-2xl font-bold text-foreground">Course not found</h1>
      </div>
    );
  }

  const dept = getDepartmentById(course.departmentId);
  const filtered = activeFilter === "All Resources" ? resources : resources.filter((r) => r.type === activeFilter);

  return (
    <div className="container py-12">
      <span className="inline-block text-xs font-semibold tracking-widest text-primary uppercase mb-3">
        {dept?.name || "Department"} • {course.code}
      </span>
      <h1 className="font-display text-4xl font-extrabold text-foreground">
        Course: {course.title}
      </h1>
      <p className="text-muted-foreground mt-3 max-w-2xl">
        A curated digital collection of high-authority resources for mastering {course.title.toLowerCase()}.
      </p>

      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mt-8">
        <div className="flex flex-wrap gap-2">
          {typeFilters.map((f) => (
            <button
              key={f}
              onClick={() => setActiveFilter(f)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                activeFilter === f
                  ? "bg-gradient-to-r from-primary to-accent text-primary-foreground"
                  : "bg-card border border-border text-muted-foreground hover:text-foreground hover:border-primary/30"
              }`}
            >
              {f}
            </button>
          ))}
        </div>
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input placeholder="Filter resources..." className="pl-9 w-64 bg-card rounded-full" />
        </div>
      </div>

      {filtered.length === 0 ? (
        <EmptyState message="No resources available for this course" />
      ) : (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
          {filtered.map((resource, idx) => {
            const Icon = typeIcons[resource.type] || BookOpen;
            return (
              <div
                key={resource.id}
                className={`rounded-2xl overflow-hidden flex flex-col hover:shadow-md transition-shadow ${
                  idx === 0 && resource.isPrimary
                    ? "sm:col-span-2 sm:flex-row bg-card border border-border"
                    : "bg-card border border-border"
                }`}
              >
                {idx === 0 && resource.isPrimary && (
                  <div className="sm:w-72 h-48 sm:h-auto bg-gradient-to-br from-primary to-accent relative shrink-0">
                    <span className="absolute top-4 left-4 bg-card/90 text-foreground text-[10px] font-semibold px-3 py-1 rounded-full">Primary Source</span>
                  </div>
                )}
                <div className="p-6 flex flex-col flex-1">
                  {!(idx === 0 && resource.isPrimary) && (
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                      <Icon className="h-5 w-5 text-primary" />
                    </div>
                  )}
                  <p className="text-xs font-semibold text-primary uppercase tracking-wider mb-1">{resource.sourceWebsite}</p>
                  <h3 className="font-semibold text-foreground text-lg mb-2">{resource.title}</h3>
                  <p className="text-sm text-muted-foreground flex-1">{resource.description}</p>
                  <a href={resource.sourceUrl} target="_blank" rel="noopener noreferrer" className="mt-4">
                    <Button
                      variant={idx === 0 && resource.isPrimary ? "default" : "outline"}
                      className={`w-full justify-between rounded-full ${
                        idx === 0 && resource.isPrimary
                          ? "bg-gradient-to-r from-primary to-accent text-primary-foreground hover:opacity-90"
                          : "border-primary text-primary hover:bg-primary/5"
                      }`}
                    >
                      Visit Resource
                      {idx === 0 && resource.isPrimary ? <ExternalLink className="h-4 w-4" /> : <ArrowRight className="h-4 w-4" />}
                    </Button>
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      )}

      <div className="text-center mt-12">
        <p className="text-xs tracking-widest text-muted-foreground uppercase mb-3">
          Showing {filtered.length} of {course.resourceCount} Resources
        </p>
        <Button variant="outline" className="gap-2 rounded-full border-primary text-primary hover:bg-primary/5">
          Load More Resources <ArrowRight className="h-4 w-4 rotate-90" />
        </Button>
      </div>
    </div>
  );
};

export default CourseResourcesPage;
