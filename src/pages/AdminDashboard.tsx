import { useState } from "react";
import {
  LayoutDashboard, BarChart3, BookOpen, Users, Settings,
  Building2, GraduationCap, FileText, Plus, Filter, Download,
  HelpCircle, LogOut, LifeBuoy,
  Link as LinkIcon,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
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
import { useToast } from "@/hooks/use-toast";
import { useAuth } from "@/contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import { Label } from "@/components/ui/label";

const sidebarItems = [
  { label: "Dashboard", icon: LayoutDashboard },
  { label: "Analytics", icon: BarChart3 },
  { label: "Course Management", icon: BookOpen },
  { label: "User Roles", icon: Users },
  { label: "Settings", icon: Settings },
];

const statCards = [
  { label: "Total Departments", value: departments.length, icon: Building2, color: "bg-accent" },
  { label: "Total Courses", value: courses.length.toLocaleString(), icon: GraduationCap, color: "bg-accent" },
  { label: "Total Resources", value: resources.length.toLocaleString(), icon: FileText, color: "bg-accent" },
];

const initialTableResources = [
  { id: "1", course: "CS101", courseName: "Introduction to Programming", title: "Algorithmic Foundations PDF", source: "ocw.mit.edu" },
  { id: "2", course: "ECON402", courseName: "Macroeconomics Theory", title: "Global Market Trends 2023", source: "worldbank.org" },
  { id: "3", course: "BIO220", courseName: "Cellular Biology", title: "Mitosis Interactive Simulation", source: "nature.com" },
  { id: "4", course: "HIST112", courseName: "Renaissance Europe", title: "The Medici Archive Project", source: "medici.org" },
];

const barData = [
  { name: "Engineering", height: "55%" },
  { name: "Arts", height: "70%" },
  { name: "Medicine", height: "85%" },
  { name: "Business", height: "60%" },
  { name: "Law", height: "65%" },
];

interface ResourceForm {
  course: string;
  courseName: string;
  title: string;
  source: string;
}

const emptyForm: ResourceForm = { course: "", courseName: "", title: "", source: "" };

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState("Dashboard");
  const [tableResources, setTableResources] = useState(initialTableResources);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [form, setForm] = useState<ResourceForm>(emptyForm);
  const [errors, setErrors] = useState<Partial<ResourceForm>>({});
  const { toast } = useToast();
  const { logout } = useAuth();
  const navigate = useNavigate();

  const validate = (): boolean => {
    const e: Partial<ResourceForm> = {};
    if (!form.course.trim()) e.course = "Required";
    if (!form.title.trim()) e.title = "Required";
    if (!form.source.trim()) e.source = "Required";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const openAdd = () => {
    setEditingId(null);
    setForm(emptyForm);
    setErrors({});
    setDialogOpen(true);
  };

  const openEdit = (r: typeof initialTableResources[0]) => {
    setEditingId(r.id);
    setForm({ course: r.course, courseName: r.courseName, title: r.title, source: r.source });
    setErrors({});
    setDialogOpen(true);
  };

  const handleSave = () => {
    if (!validate()) return;
    if (editingId) {
      setTableResources((prev) => prev.map((r) => r.id === editingId ? { ...r, ...form } : r));
      toast({ title: "Resource updated", description: `"${form.title}" has been updated successfully.` });
    } else {
      const newId = String(Date.now());
      setTableResources((prev) => [...prev, { id: newId, ...form }]);
      toast({ title: "Resource added", description: `"${form.title}" has been added successfully.` });
    }
    setDialogOpen(false);
  };

  const handleDelete = (id: string, title: string) => {
    setTableResources((prev) => prev.filter((r) => r.id !== id));
    toast({ title: "Resource deleted", description: `"${title}" has been removed.`, variant: "destructive" });
  };

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <div className="flex min-h-screen bg-background">
      {/* Sidebar */}
      <aside className="w-56 bg-card border-r border-border flex flex-col shrink-0">
        <div className="p-5 border-b border-border">
          <h2 className="font-display font-bold text-foreground">Admin Panel</h2>
          <p className="text-xs text-muted-foreground">University Oversight</p>
        </div>
        <nav className="flex-1 p-3 space-y-1">
          {sidebarItems.map((item) => (
            <button
              key={item.label}
              onClick={() => setActiveTab(item.label)}
              className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                activeTab === item.label
                  ? "bg-accent text-primary"
                  : "text-muted-foreground hover:bg-secondary"
              }`}
            >
              <item.icon className="h-4 w-4" />
              {item.label}
            </button>
          ))}
        </nav>
        <div className="p-3">
          <Button className="w-full mb-4 gap-2">
            <FileText className="h-4 w-4" /> Generate Report
          </Button>
          <div className="space-y-1 px-3 pb-4">
            <button className="flex items-center gap-2 text-xs text-muted-foreground hover:text-foreground">
              <LifeBuoy className="h-4 w-4" /> Support
            </button>
            <button onClick={handleLogout} className="flex items-center gap-2 text-xs text-muted-foreground hover:text-foreground">
              <LogOut className="h-4 w-4" /> Logout
            </button>
          </div>
        </div>
      </aside>

      {/* Main content */}
      <div className="flex-1 overflow-auto">
        {/* Header */}
        <header className="border-b border-border bg-card px-8 py-6 flex items-center justify-between">
          <div>
            <h1 className="font-display text-2xl font-bold text-foreground">Curatory Dashboard</h1>
            <p className="text-sm text-muted-foreground">Overseeing the academic resource ecosystem.</p>
          </div>
          <div className="flex items-center gap-3">
            <div className="relative">
              <Input placeholder="Find a resource..." className="pl-9 w-56 bg-secondary" />
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">🔍</span>
            </div>
            <Button className="gap-2" onClick={openAdd}>
              <Plus className="h-4 w-4" /> Add New Resource
            </Button>
          </div>
        </header>

        <div className="p-8 space-y-8">
          {/* Stats */}
          <div className="grid grid-cols-3 gap-6">
            {statCards.map((stat) => (
              <div key={stat.label} className="bg-card border border-border rounded-xl p-6 flex items-center gap-4">
                <div className={`w-14 h-14 rounded-xl ${stat.color} flex items-center justify-center`}>
                  <stat.icon className="h-7 w-7 text-primary" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground uppercase tracking-wider font-medium">{stat.label}</p>
                  <p className="text-3xl font-bold text-foreground">{stat.value}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Resource Registry Table */}
          <div className="bg-card border border-border rounded-xl">
            <div className="flex items-center justify-between p-6 border-b border-border">
              <h2 className="font-display text-lg font-bold text-foreground">Resource Registry</h2>
              <div className="flex gap-2">
                <Button variant="ghost" size="icon"><Filter className="h-4 w-4" /></Button>
                <Button variant="ghost" size="icon"><Download className="h-4 w-4" /></Button>
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
                {tableResources.map((r) => (
                  <TableRow key={r.id}>
                    <TableCell>
                      <span className="text-primary font-semibold">{r.course}</span>
                      <br />
                      <span className="text-xs text-muted-foreground">{r.courseName}</span>
                    </TableCell>
                    <TableCell className="text-foreground">{r.title}</TableCell>
                    <TableCell>
                      <span className="inline-flex items-center gap-1 bg-secondary px-3 py-1 rounded-full text-xs text-muted-foreground">
                        <LinkIcon className="h-3 w-3" /> {r.source}
                      </span>
                    </TableCell>
                    <TableCell className="text-right space-x-3">
                      <button onClick={() => openEdit(r)} className="text-sm text-muted-foreground hover:text-foreground">Edit</button>
                      <AlertDialog>
                        <AlertDialogTrigger asChild>
                          <button className="text-sm text-destructive hover:text-destructive/80">Delete</button>
                        </AlertDialogTrigger>
                        <AlertDialogContent>
                          <AlertDialogHeader>
                            <AlertDialogTitle>Delete Resource</AlertDialogTitle>
                            <AlertDialogDescription>
                              Are you sure you want to delete "{r.title}"? This action cannot be undone.
                            </AlertDialogDescription>
                          </AlertDialogHeader>
                          <AlertDialogFooter>
                            <AlertDialogCancel>Cancel</AlertDialogCancel>
                            <AlertDialogAction onClick={() => handleDelete(r.id, r.title)}>
                              Delete
                            </AlertDialogAction>
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
                Showing {tableResources.length} of {tableResources.length} Resources
              </p>
              <div className="flex gap-2">
                <Button variant="outline" size="sm">Previous</Button>
                <Button size="sm">Next</Button>
              </div>
            </div>
          </div>

          {/* Bottom section */}
          <div className="grid grid-cols-5 gap-6">
            <div className="col-span-3 bg-card border border-border rounded-xl p-6">
              <h3 className="font-display font-bold text-foreground mb-6">Department Distribution</h3>
              <div className="flex items-end justify-around h-48 gap-4">
                {barData.map((bar) => (
                  <div key={bar.name} className="flex flex-col items-center gap-2 flex-1">
                    <div className="w-full bg-primary/20 rounded-t-md relative" style={{ height: bar.height }}>
                      <div className="absolute inset-0 bg-primary/40 rounded-t-md" />
                    </div>
                    <span className="text-[10px] text-muted-foreground uppercase tracking-wider">{bar.name}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="col-span-2 bg-tip rounded-xl p-6 flex flex-col text-tip-foreground">
              <HelpCircle className="h-10 w-10 mb-4 opacity-80" />
              <h3 className="font-display font-bold text-xl mb-2">Curatory Tip</h3>
              <p className="text-sm opacity-90 flex-1">
                Organize resources by 'Source Authority' to improve search relevance for students in postgraduate courses.
              </p>
              <Button variant="outline" className="mt-4 border-tip-foreground/30 text-tip-foreground hover:bg-tip-foreground/10">
                View Guidelines
              </Button>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="border-t border-border bg-card px-8 py-6 flex items-center justify-between">
          <p className="text-sm font-semibold text-primary">University Digital Curatory</p>
          <nav className="flex gap-6 text-xs text-muted-foreground uppercase tracking-wide">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
            <a href="#">Accessibility</a>
            <a href="#">Contact Support</a>
          </nav>
          <p className="text-xs text-muted-foreground">© 2024 University Digital Curatory. All Rights Reserved.</p>
        </footer>
      </div>

      {/* Add/Edit Dialog */}
      <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>{editingId ? "Edit Resource" : "Add New Resource"}</DialogTitle>
          </DialogHeader>
          <div className="space-y-4 py-2">
            <div>
              <Label>Course Code *</Label>
              <Input value={form.course} onChange={(e) => setForm({ ...form, course: e.target.value })} placeholder="e.g. CS201" className="mt-1" />
              {errors.course && <p className="text-xs text-destructive mt-1">{errors.course}</p>}
            </div>
            <div>
              <Label>Course Name</Label>
              <Input value={form.courseName} onChange={(e) => setForm({ ...form, courseName: e.target.value })} placeholder="e.g. Data Structures" className="mt-1" />
            </div>
            <div>
              <Label>Resource Title *</Label>
              <Input value={form.title} onChange={(e) => setForm({ ...form, title: e.target.value })} placeholder="e.g. MIT Lecture Series" className="mt-1" />
              {errors.title && <p className="text-xs text-destructive mt-1">{errors.title}</p>}
            </div>
            <div>
              <Label>Source Website *</Label>
              <Input value={form.source} onChange={(e) => setForm({ ...form, source: e.target.value })} placeholder="e.g. ocw.mit.edu" className="mt-1" />
              {errors.source && <p className="text-xs text-destructive mt-1">{errors.source}</p>}
            </div>
          </div>
          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline">Cancel</Button>
            </DialogClose>
            <Button onClick={handleSave}>{editingId ? "Save Changes" : "Add Resource"}</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default AdminDashboard;
