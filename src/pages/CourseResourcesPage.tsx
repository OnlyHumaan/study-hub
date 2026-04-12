import { useParams } from "react-router-dom";
import { ArrowRight, ExternalLink, Search, Code, Play, BookOpen, GraduationCap } from "lucide-react";
import { getCourseById, getResourcesByCourse, getDepartmentById } from "@/data/mockData";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import EmptyState from "@/components/EmptyState";

import resourceMit from "@/assets/resource-mit.jpg";
import resourceCoursera from "@/assets/resource-coursera.jpg";
import resourceCourseraBrand from "@/assets/resource-coursera-brand.jpg";
import resourceGfg from "@/assets/resource-gfg.jpg";
import resourceYoutube from "@/assets/resource-youtube.jpg";
import resourceYoutubeBrand from "@/assets/resource-youtube-brand.jpg";
import resourceKhan from "@/assets/resource-khan.jpg";
import resourceKhanAcademy from "@/assets/resource-khan-academy.jpg";
import resourceWorldbank from "@/assets/resource-worldbank.jpg";
import resourceNature from "@/assets/resource-nature.jpg";
import resourceAccountingCoach from "@/assets/resource-accountingcoach.jpg";
import resourceAcca from "@/assets/resource-acca.jpg";
import resourceFirs from "@/assets/resource-firs.jpg";
import resourceCima from "@/assets/resource-cima.jpg";
import resourceIfrs from "@/assets/resource-ifrs.jpg";
import resourceIcaew from "@/assets/resource-icaew.jpg";

const thumbnailMap: Record<string, string> = {
  "MIT OpenCourseWare": resourceMit,
  "ocw.mit.edu": resourceMit,
  "Coursera": resourceCourseraBrand,
  "GeeksForGeeks": resourceGfg,
  "YouTube Academic": resourceYoutube,
  "YouTube": resourceYoutubeBrand,
  "Khan Academy": resourceKhanAcademy,
  "worldbank.org": resourceWorldbank,
  "nature.com": resourceNature,
  "medici.org": resourceMit,
  "AccountingCoach": resourceAccountingCoach,
  "ACCA Global": resourceAcca,
  "FIRS": resourceFirs,
  "CIMA": resourceCima,
  "IFRS Foundation": resourceIfrs,
  "ICAEW": resourceIcaew,
};

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
  const [resourceSearch, setResourceSearch] = useState("");

  if (!course) {
    return (
      <div className="container py-20 text-center">
        <h1 className="text-2xl font-bold text-foreground">Course not found</h1>
      </div>
    );
  }

  const dept = getDepartmentById(course.departmentId);
  const filtered = (activeFilter === "All Resources" ? resources : resources.filter((r) => r.type === activeFilter))
    .filter((r) => !resourceSearch || r.title.toLowerCase().includes(resourceSearch.toLowerCase()) || r.sourceWebsite.toLowerCase().includes(resourceSearch.toLowerCase()));

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
          <Input
            placeholder="Filter resources..."
            value={resourceSearch}
            onChange={(e) => setResourceSearch(e.target.value)}
            className="pl-9 w-64 bg-card rounded-full"
          />
        </div>
      </div>

      {filtered.length === 0 ? (
        <EmptyState message="No resources available for this course" />
      ) : (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
          {filtered.map((resource, idx) => {
            const Icon = typeIcons[resource.type] || BookOpen;
            const thumbnail = thumbnailMap[resource.sourceWebsite];
            const isPrimary = !!resource.isPrimary;

            return (
              <div
                key={resource.id}
                className={`rounded-2xl overflow-hidden flex flex-col hover:shadow-md transition-shadow bg-card border border-border ${
                  isPrimary ? "sm:col-span-2" : ""
                }`}
              >
                {/* Thumbnail */}
                <div className={`relative ${isPrimary ? "h-52" : "h-40"} overflow-hidden`}>
                  {thumbnail ? (
                    <img
                      src={thumbnail}
                      alt={resource.sourceWebsite}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                      <Icon className="h-12 w-12 text-primary/40" />
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                  <span className="absolute top-3 left-3 bg-card/90 text-foreground text-[10px] font-semibold px-3 py-1 rounded-full backdrop-blur-sm">
                    {resource.type}
                  </span>
                  {isPrimary && (
                    <span className="absolute top-3 right-3 bg-primary text-primary-foreground text-[10px] font-semibold px-3 py-1 rounded-full">
                      Primary Source
                    </span>
                  )}
                </div>

                <div className="p-5 flex flex-col flex-1">
                  <p className="text-xs font-semibold text-primary uppercase tracking-wider mb-1">{resource.sourceWebsite}</p>
                  <h3 className="font-semibold text-foreground text-lg mb-2">{resource.title}</h3>
                  <p className="text-sm text-muted-foreground flex-1">{resource.description}</p>
                  <a href={resource.sourceUrl} target="_blank" rel="noopener noreferrer" className="mt-4">
                    <Button
                      variant={isPrimary ? "default" : "outline"}
                      className={`w-full justify-between rounded-full ${
                        isPrimary
                          ? "bg-gradient-to-r from-primary to-accent text-primary-foreground hover:opacity-90"
                          : "border-primary text-primary hover:bg-primary/5"
                      }`}
                    >
                      Visit Resource
                      {isPrimary ? <ExternalLink className="h-4 w-4" /> : <ArrowRight className="h-4 w-4" />}
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
      </div>
    </div>
  );
};

export default CourseResourcesPage;
