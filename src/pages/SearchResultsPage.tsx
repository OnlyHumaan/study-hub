import { useSearchParams, Link } from "react-router-dom";
import { ArrowRight, SearchX } from "lucide-react";
import { courses, departments } from "@/data/mockData";
import { Button } from "@/components/ui/button";
import EmptyState from "@/components/EmptyState";

const SearchResultsPage = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("q")?.toLowerCase() || "";

  const results = query
    ? courses.filter((c) => {
        const dept = departments.find((d) => d.id === c.departmentId);
        return (
          c.title.toLowerCase().includes(query) ||
          c.code.toLowerCase().includes(query) ||
          dept?.name.toLowerCase().includes(query)
        );
      })
    : [];

  return (
    <div className="container py-12">
      <span className="inline-block text-xs font-semibold tracking-widest text-primary uppercase mb-3">Search Results</span>
      <h1 className="font-display text-4xl font-extrabold text-foreground">
        Results for "{searchParams.get("q") || ""}"
      </h1>
      <p className="text-muted-foreground mt-3">
        {results.length} course{results.length !== 1 ? "s" : ""} found
      </p>

      {results.length === 0 ? (
        <EmptyState message="No matching results found" icon={SearchX} />
      ) : (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
          {results.map((course) => {
            const dept = departments.find((d) => d.id === course.departmentId);
            return (
              <div key={course.id} className="bg-card border border-border rounded-2xl p-6 flex flex-col hover:shadow-md hover:border-primary/30 transition-all">
                <div className="flex items-start justify-between mb-3">
                  <span className="text-xs font-semibold text-primary-foreground bg-primary/80 px-3 py-1 rounded-full">{dept?.name}</span>
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
            );
          })}
        </div>
      )}
    </div>
  );
};

export default SearchResultsPage;
