import { useState } from "react";
import {
  Plus, Filter, Download, HelpCircle,
  Link as LinkIcon, Search, X,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { departments, courses, resources } from "@/data/mockData";
import {
  Table, TableBody, TableCell, TableHead, TableHeader, TableRow,
} from "@/components/ui/table";
import {
  AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent,
  AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import {
  Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter, DialogClose,
} from "@/components/ui/dialog";
import {
  Popover, PopoverContent, PopoverTrigger,
} from "@/components/ui/popover";
import {
  Select, SelectContent, SelectItem, SelectTrigger, SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import {
  Building2, GraduationCap, FileText,
} from "lucide-react";

interface ResourceRow {
  id: string;
  course: string;
  courseName: string;
  title: string;
  source: string;
  url: string;
}

const buildInitialRows = (): ResourceRow[] => {
  return resources.slice(0, 20).map((r) => {
    const course = courses.find((c) => c.id === r.courseId);
    return {
      id: r.id,
      course: course?.code ?? "",
      courseName: course?.title ?? "",
      title: r.title,
      source: r.sourceWebsite,
      url: r.sourceUrl,
    };
  });
};

interface ResourceForm {
  course: string;
  courseName: string;
  title: string;
  source: string;
  url: string;
}

const emptyForm: ResourceForm = { course: "", courseName: "", title: "", source: "", url: "" };

const PAGE_SIZE = 5;

const statCards = [
  { label: "Total Departments", value: departments.length, icon: Building2 },
  { label: "Total Courses", value: courses.length.toLocaleString(), icon: GraduationCap },
  { label: "Total Resources", value: resources.length.toLocaleString(), icon: FileText },
];

// Build real department distribution from mockData
const deptDistribution = (() => {
  const deptResourceCounts: { name: string; count: number }[] = [];
  departments.forEach((dept) => {
    const deptCourses = courses.filter((c) => c.departmentId === dept.id);
    const count = deptCourses.reduce((sum, c) => {
      return sum + resources.filter((r) => r.courseId === c.id).length;
    }, 0);
    deptResourceCounts.push({ name: dept.name, count });
  });
  deptResourceCounts.sort((a, b) => b.count - a.count);
  return deptResourceCounts.slice(0, 6);
})();

const maxDeptCount = Math.max(...deptDistribution.map((d) => d.count), 1);

const DashboardView = () => {
  const [tableResources, setTableResources] = useState<ResourceRow[]>(buildInitialRows);
  const [searchQuery, setSearchQuery] = useState("");
  const [dialogOpen, setDialogOpen] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [form, setForm] = useState<ResourceForm>(emptyForm);
  const [errors, setErrors] = useState<Partial<ResourceForm>>({});
  const [currentPage, setCurrentPage] = useState(0);
  const [filterCourse, setFilterCourse] = useState("");
  const [filterDept, setFilterDept] = useState("");
  const [showTip, setShowTip] = useState(true);
  const { toast } = useToast();

  // Filter resources
  const filtered = tableResources.filter((r) => {
    const q = searchQuery.toLowerCase();
    const matchesSearch = !q || r.course.toLowerCase().includes(q) || r.courseName.toLowerCase().includes(q) || r.title.toLowerCase().includes(q) || r.source.toLowerCase().includes(q);
    const matchesCourseFilter = !filterCourse || r.course === filterCourse;
    const matchesDeptFilter = !filterDept || (() => {
      const course = courses.find((c) => c.code === r.course);
      return course?.departmentId === filterDept;
    })();
    return matchesSearch && matchesCourseFilter && matchesDeptFilter;
  });

  const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  const safePage = Math.min(currentPage, totalPages - 1);
  const paged = filtered.slice(safePage * PAGE_SIZE, (safePage + 1) * PAGE_SIZE);

  const validate = (): boolean => {
    const e: Partial<ResourceForm> = {};
    if (!form.course.trim()) e.course = "Required";
    if (!form.title.trim()) e.title = "Required";
    if (!form.source.trim()) e.source = "Required";
    if (!form.url.trim()) e.url = "Required";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const openAdd = () => { setEditingId(null); setForm(emptyForm); setErrors({}); setDialogOpen(true); };
  const openEdit = (r: ResourceRow) => { setEditingId(r.id); setForm({ course: r.course, courseName: r.courseName, title: r.title, source: r.source, url: r.url }); setErrors({}); setDialogOpen(true); };

  const handleSave = () => {
    if (!validate()) return;
    if (editingId) {
      setTableResources((prev) => prev.map((r) => r.id === editingId ? { ...r, ...form } : r));
      toast({ title: "Resource updated", description: `"${form.title}" has been updated successfully.` });
    } else {
      setTableResources((prev) => [...prev, { id: String(Date.now()), ...form }]);
      toast({ title: "Resource added", description: `"${form.title}" has been added successfully.` });
    }
    setDialogOpen(false);
  };

  const handleDelete = (id: string, title: string) => {
    setTableResources((prev) => prev.filter((r) => r.id !== id));
    toast({ title: "Resource deleted", description: `"${title}" has been removed.`, variant: "destructive" });
  };

  const downloadCSV = () => {
    const headers = ["Course Code", "Course Name", "Resource Title", "Source", "URL"];
    const rows = filtered.map((r) => [r.course, r.courseName, r.title, r.source, r.url].map((v) => `"${v.replace(/"/g, '""')}"`).join(","));
    const csv = [headers.join(","), ...rows].join("\n");
    const blob = new Blob([csv], { type: "text/csv" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url; a.download = "resources.csv"; a.click();
    URL.revokeObjectURL(url);
    toast({ title: "Downloaded", description: "Resource data exported as CSV." });
  };

  const clearFilters = () => { setFilterCourse(""); setFilterDept(""); };

  const uniqueCourses = [...new Set(tableResources.map((r) => r.course))].sort();

  return (
    <>
      {/* Header */}
      <header className="border-b border-border bg-card px-8 py-6 flex items-center justify-between">
        <div>
          <h1 className="font-display text-2xl font-bold text-foreground">Dashboard</h1>
          <p className="text-sm text-muted-foreground">Manage your academic resources</p>
        </div>
        <div className="flex items-center gap-3">
          <div className="relative">
            <Input
              placeholder="Find a resource..."
              className="pl-9 w-56 bg-secondary rounded-full"
              value={searchQuery}
              onChange={(e) => { setSearchQuery(e.target.value); setCurrentPage(0); }}
            />
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          </div>
          <Button className="gap-2 rounded-full bg-gradient-to-r from-primary to-accent text-primary-foreground hover:opacity-90" onClick={openAdd}>
            <Plus className="h-4 w-4" /> Add New Resource
          </Button>
        </div>
      </header>

      <div className="p-8 space-y-8">
        {/* Stats */}
        <div className="grid grid-cols-3 gap-6">
          {statCards.map((stat) => (
            <div key={stat.label} className="bg-card border border-border rounded-2xl p-6 flex items-center gap-4">
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center">
                <stat.icon className="h-7 w-7 text-primary" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground uppercase tracking-wider font-medium">{stat.label}</p>
                <p className="text-3xl font-bold text-foreground">{stat.value}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Table */}
        <div className="bg-card border border-border rounded-2xl">
          <div className="flex items-center justify-between p-6 border-b border-border">
            <h2 className="font-display text-lg font-bold text-foreground">Resource Registry</h2>
            <div className="flex gap-2">
              <Popover>
                <PopoverTrigger asChild>
                  <Button variant="ghost" size="icon" className={filterCourse || filterDept ? "text-primary" : ""}>
                    <Filter className="h-4 w-4" />
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-72 space-y-4">
                  <div className="flex items-center justify-between">
                    <h4 className="font-medium text-sm">Filter Resources</h4>
                    {(filterCourse || filterDept) && (
                      <button onClick={clearFilters} className="text-xs text-primary hover:underline flex items-center gap-1"><X className="h-3 w-3" /> Clear</button>
                    )}
                  </div>
                  <div>
                    <Label className="text-xs">Course Code</Label>
                    <Select value={filterCourse} onValueChange={(v) => { setFilterCourse(v); setCurrentPage(0); }}>
                      <SelectTrigger className="mt-1"><SelectValue placeholder="All courses" /></SelectTrigger>
                      <SelectContent>
                        {uniqueCourses.map((c) => <SelectItem key={c} value={c}>{c}</SelectItem>)}
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label className="text-xs">Department</Label>
                    <Select value={filterDept} onValueChange={(v) => { setFilterDept(v); setCurrentPage(0); }}>
                      <SelectTrigger className="mt-1"><SelectValue placeholder="All departments" /></SelectTrigger>
                      <SelectContent>
                        {departments.map((d) => <SelectItem key={d.id} value={d.id}>{d.name}</SelectItem>)}
                      </SelectContent>
                    </Select>
                  </div>
                </PopoverContent>
              </Popover>
              <Button variant="ghost" size="icon" onClick={downloadCSV}><Download className="h-4 w-4" /></Button>
            </div>
          </div>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="uppercase text-xs tracking-wider">Course</TableHead>
                <TableHead className="uppercase text-xs tracking-wider">Resource Title</TableHead>
                <TableHead className="uppercase text-xs tracking-wider">Source Website</TableHead>
                <TableHead className="uppercase text-xs tracking-wider text-right">Action</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {paged.length === 0 ? (
                <TableRow><TableCell colSpan={4} className="text-center text-muted-foreground py-8">No resources found.</TableCell></TableRow>
              ) : paged.map((r) => (
                <TableRow key={r.id}>
                  <TableCell>
                    <span className="text-primary font-semibold">{r.course}</span><br />
                    <span className="text-xs text-muted-foreground">{r.courseName}</span>
                  </TableCell>
                  <TableCell className="text-foreground">{r.title}</TableCell>
                  <TableCell>
                    <span className="inline-flex items-center gap-1 bg-primary/10 px-3 py-1 rounded-full text-xs text-primary">
                      <LinkIcon className="h-3 w-3" /> {r.source}
                    </span>
                  </TableCell>
                  <TableCell className="text-right space-x-3">
                    <button onClick={() => openEdit(r)} className="text-sm text-muted-foreground hover:text-primary">Edit</button>
                    <AlertDialog>
                      <AlertDialogTrigger asChild>
                        <button className="text-sm text-destructive hover:text-destructive/80">Delete</button>
                      </AlertDialogTrigger>
                      <AlertDialogContent>
                        <AlertDialogHeader>
                          <AlertDialogTitle>Delete Resource</AlertDialogTitle>
                          <AlertDialogDescription>Are you sure you want to delete "{r.title}"? This action cannot be undone.</AlertDialogDescription>
                        </AlertDialogHeader>
                        <AlertDialogFooter>
                          <AlertDialogCancel>Cancel</AlertDialogCancel>
                          <AlertDialogAction onClick={() => handleDelete(r.id, r.title)} className="bg-destructive text-destructive-foreground hover:bg-destructive/90">Delete</AlertDialogAction>
                        </AlertDialogFooter>
                      </AlertDialogContent>
                    </AlertDialog>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
          <div className="flex items-center justify-between p-4 border-t border-border">
            <p className="text-xs text-muted-foreground uppercase tracking-wider">
              Showing {safePage * PAGE_SIZE + 1}–{Math.min((safePage + 1) * PAGE_SIZE, filtered.length)} of {filtered.length} Resources
            </p>
            <div className="flex gap-2">
              <Button variant="outline" size="sm" className="rounded-full" disabled={safePage === 0} onClick={() => setCurrentPage((p) => p - 1)}>Previous</Button>
              <Button size="sm" className="rounded-full bg-gradient-to-r from-primary to-accent text-primary-foreground hover:opacity-90" disabled={safePage >= totalPages - 1} onClick={() => setCurrentPage((p) => p + 1)}>Next</Button>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="grid grid-cols-5 gap-6">
          <div className="col-span-3 bg-card border border-border rounded-2xl p-6">
            <h3 className="font-display font-bold text-foreground mb-6">Department Distribution</h3>
            <div className="flex items-end justify-around h-48 gap-4">
              {deptDistribution.map((bar) => (
                <div key={bar.name} className="flex flex-col items-center gap-2 flex-1">
                  <span className="text-xs font-semibold text-foreground">{bar.count}</span>
                  <div className="w-full bg-primary/10 rounded-t-lg relative" style={{ height: `${(bar.count / maxDeptCount) * 100}%` }}>
                    <div className="absolute inset-0 bg-gradient-to-t from-primary to-accent/60 rounded-t-lg" />
                  </div>
                  <span className="text-[10px] text-muted-foreground uppercase tracking-wider text-center leading-tight">{bar.name.length > 12 ? bar.name.slice(0, 12) + "…" : bar.name}</span>
                </div>
              ))}
            </div>
          </div>
          {showTip && (
            <div className="col-span-2 bg-gradient-to-br from-primary to-accent rounded-2xl p-6 flex flex-col text-primary-foreground">
              <HelpCircle className="h-10 w-10 mb-4 opacity-80" />
              <h3 className="font-display font-bold text-xl mb-2">Quick Tip</h3>
              <p className="text-sm opacity-90 flex-1">
                Organize resources by 'Source Authority' to improve search relevance for students in postgraduate courses.
              </p>
              <Button variant="outline" className="mt-4 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 rounded-full" onClick={() => setShowTip(false)}>
                Got it
              </Button>
            </div>
          )}
        </div>
      </div>

      {/* Dialog */}
      <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>{editingId ? "Edit Resource" : "Add New Resource"}</DialogTitle>
          </DialogHeader>
          <div className="space-y-4 py-2">
            <div>
              <Label>Course Code *</Label>
              <Input value={form.course} onChange={(e) => setForm({ ...form, course: e.target.value })} placeholder="e.g. CS-201" className="mt-1 rounded-lg" />
              {errors.course && <p className="text-xs text-destructive mt-1">{errors.course}</p>}
            </div>
            <div>
              <Label>Course Name</Label>
              <Input value={form.courseName} onChange={(e) => setForm({ ...form, courseName: e.target.value })} placeholder="e.g. Data Structures" className="mt-1 rounded-lg" />
            </div>
            <div>
              <Label>Resource Title *</Label>
              <Input value={form.title} onChange={(e) => setForm({ ...form, title: e.target.value })} placeholder="e.g. MIT Lecture Series" className="mt-1 rounded-lg" />
              {errors.title && <p className="text-xs text-destructive mt-1">{errors.title}</p>}
            </div>
            <div>
              <Label>Source Website *</Label>
              <Input value={form.source} onChange={(e) => setForm({ ...form, source: e.target.value })} placeholder="e.g. Coursera" className="mt-1 rounded-lg" />
              {errors.source && <p className="text-xs text-destructive mt-1">{errors.source}</p>}
            </div>
            <div>
              <Label>Resource URL *</Label>
              <Input value={form.url} onChange={(e) => setForm({ ...form, url: e.target.value })} placeholder="e.g. https://coursera.org/learn/..." className="mt-1 rounded-lg" />
              {errors.url && <p className="text-xs text-destructive mt-1">{errors.url}</p>}
            </div>
          </div>
          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline" className="rounded-full">Cancel</Button>
            </DialogClose>
            <Button onClick={handleSave} className="rounded-full bg-gradient-to-r from-primary to-accent text-primary-foreground hover:opacity-90">
              {editingId ? "Save Changes" : "Add Resource"}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default DashboardView;
