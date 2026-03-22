import { Link, useParams } from "react-router-dom";
import { ArrowRight, SlidersHorizontal, Share2 } from "lucide-react";
import { getCoursesByDepartment, getDepartmentById } from "@/data/mockData";
import { Button } from "@/components/ui/button";
import EmptyState from "@/components/EmptyState";

const CourseListPage = () => {
  const { dept } = useParams<{ dept: string }>();
  const department = getDepartmentById(dept || "");
  const courses = getCoursesByDepartment(dept || "");

  if (!department) {
    return (
      <div className="container py-20 text-center">
        <h1 className="text-2xl font-bold text-foreground">Department not found</h1>
      </div>
    );
  }

  return (
    <div className="container py-12">
      <span className="inline-block text-xs font-semibold tracking-widest text-primary uppercase mb-3">
        {department.faculty}
      </span>
      <h1 className="font-display text-4xl font-extrabold text-foreground">
        Department: {department.name}
      </h1>
      <p className="text-muted-foreground mt-3 max-w-lg">
        Explore curated academic resources from the core disciplines of {department.name.toLowerCase()}.
      </p>

      <div className="flex items-center gap-3 mt-6">
        <Button variant="outline" className="gap-2 rounded-full border-primary text-primary hover:bg-primary/5">
          <SlidersHorizontal className="h-4 w-4" /> Filter Courses
        </Button>
        <Button className="gap-2 rounded-full bg-gradient-to-r from-primary to-accent text-primary-foreground hover:opacity-90">
          <Share2 className="h-4 w-4" /> Share Catalog
        </Button>
      </div>

      {courses.length === 0 ? (
        <EmptyState message="No courses found in this department" />
      ) : (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
          {courses.map((course) => (
            <div key={course.id} className="bg-card border border-border rounded-2xl p-6 flex flex-col hover:shadow-md hover:border-primary/30 transition-all">
              <div className="flex items-start justify-between mb-3">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                  <span className="text-primary text-lg">📘</span>
                </div>
                <span className="text-xs font-medium text-muted-foreground">{course.code}</span>
              </div>
              <h3 className="font-semibold text-foreground mb-1">{course.title}</h3>
              <p className="text-sm text-muted-foreground flex-1">{course.description}</p>
              <Link to={`/courses/${course.id}`}>
                <Button variant="outline" className="w-full mt-4 justify-between rounded-full border-primary text-primary hover:bg-primary/5">
                  View Resources <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CourseListPage;
