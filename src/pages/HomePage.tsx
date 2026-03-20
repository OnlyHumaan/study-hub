import { Link } from "react-router-dom";
import { Search, Shield, FileText, UserCheck, Monitor, Calculator, TrendingUp, Mic, Microscope, Landmark, Briefcase, Globe, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { departments } from "@/data/mockData";

const iconMap: Record<string, React.ElementType> = {
  Monitor, Calculator, TrendingUp, Mic, Microscope, Landmark, Briefcase, Globe, Users,
};

const HomePage = () => {
  return (
    <>
      {/* Hero */}
      <section className="bg-hero py-20">
        <div className="container text-center">
          <span className="inline-block text-xs font-semibold tracking-widest text-primary uppercase mb-4">
            Empowering Scholars
          </span>
          <h1 className="font-display text-4xl md:text-5xl font-extrabold text-foreground leading-tight max-w-2xl mx-auto">
            Find Quality Study Resources for Your University Courses
          </h1>
          <p className="mt-4 text-muted-foreground max-w-lg mx-auto">
            Discover curated websites, tutorials, and learning platforms recommended for your academic success.
          </p>
          <div className="mt-8 flex items-center max-w-xl mx-auto bg-card rounded-lg shadow-sm border border-border overflow-hidden">
            <div className="flex items-center flex-1 px-4">
              <Search className="h-5 w-5 text-muted-foreground mr-3 shrink-0" />
              <Input
                placeholder="Search by course name, code, or topic..."
                className="border-0 shadow-none focus-visible:ring-0 px-0"
              />
            </div>
            <Button className="rounded-none rounded-r-lg h-12 px-6">Search</Button>
          </div>
        </div>
      </section>

      {/* Browse by Department */}
      <section className="container py-16">
        <div className="flex items-end justify-between mb-2">
          <div>
            <h2 className="font-display text-2xl font-bold text-foreground">Browse by Department</h2>
            <div className="w-12 h-1 bg-primary rounded mt-2" />
          </div>
          <Link to="/departments" className="text-sm font-medium text-primary hover:underline flex items-center gap-1">
            View All Faculties →
          </Link>
        </div>
        <p className="text-sm text-muted-foreground mt-3 mb-8 max-w-md">
          Navigate through our structured academic archives to find resources specific to your faculty and field of study.
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {departments.map((dept) => {
            const Icon = iconMap[dept.icon] || Monitor;
            const isHighlighted = dept.id === "cs";
            return (
              <Link
                key={dept.id}
                to={`/departments/${dept.id}`}
                className={`group rounded-xl p-6 transition-all hover:shadow-md ${
                  isHighlighted
                    ? "bg-primary text-primary-foreground shadow-lg row-span-1"
                    : "bg-card border border-border"
                }`}
              >
                <Icon className={`h-7 w-7 mb-6 ${isHighlighted ? "text-primary-foreground" : "text-primary"}`} />
                <p className={`text-[10px] uppercase tracking-widest font-medium mb-1 ${isHighlighted ? "text-primary-foreground/70" : "text-muted-foreground"}`}>
                  {dept.faculty}
                </p>
                <h3 className={`font-semibold text-sm ${isHighlighted ? "" : "text-foreground"}`}>{dept.name}</h3>
              </Link>
            );
          })}
        </div>
      </section>

      {/* Verification Banner */}
      <section className="bg-muted">
        <div className="container py-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="font-display text-lg font-bold text-foreground">Official Resource Verification</h3>
            <p className="text-sm text-muted-foreground mt-1 max-w-lg">
              Every resource listed within the Academic Resource Finder has been curated by senior lecturers and verified by the University Digital Curatory board for pedagogical accuracy and relevance to current syllabi.
            </p>
          </div>
          <div className="flex gap-4 text-muted-foreground">
            <Shield className="h-10 w-10" />
            <FileText className="h-10 w-10" />
            <UserCheck className="h-10 w-10" />
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;
