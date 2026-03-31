import { useState } from "react";
import { departments, courses as initialCourses, type Course } from "@/data/mockData";
import { Plus, Pencil, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Table, TableBody, TableCell, TableHead, TableHeader, TableRow,
} from "@/components/ui/table";
import {
  Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter, DialogClose,
} from "@/components/ui/dialog";
import {
  AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent,
  AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import {
  Select, SelectContent, SelectItem, SelectTrigger, SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

interface CourseForm {
  code: string;
  title: string;
  description: string;
  departmentId: string;
  level: string;
}

const emptyForm: CourseForm = { code: "", title: "", description: "", departmentId: "", level: "Undergraduate" };

const CourseManagementView = () => {
  const [courseList, setCourseList] = useState<Course[]>([...initialCourses]);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [form, setForm] = useState<CourseForm>(emptyForm);
  const [search, setSearch] = useState("");
  const { toast } = useToast();

  const filtered = courseList.filter((c) => {
    const q = search.toLowerCase();
    return !q || c.code.toLowerCase().includes(q) || c.title.toLowerCase().includes(q);
  });

  const openAdd = () => { setEditingId(null); setForm(emptyForm); setDialogOpen(true); };
  const openEdit = (c: Course) => {
    setEditingId(c.id);
    setForm({ code: c.code, title: c.title, description: c.description, departmentId: c.departmentId, level: c.level });
    setDialogOpen(true);
  };

  const handleSave = () => {
    if (!form.code.trim() || !form.title.trim() || !form.departmentId) return;
    if (editingId) {
      setCourseList((prev) => prev.map((c) => c.id === editingId ? { ...c, ...form, level: form.level as Course["level"] } : c));
      toast({ title: "Course updated", description: `"${form.title}" updated.` });
    } else {
      const newCourse: Course = { id: `course-${Date.now()}`, code: form.code, title: form.title, description: form.description, departmentId: form.departmentId, level: form.level as Course["level"], resourceCount: 0 };
      setCourseList((prev) => [...prev, newCourse]);
      toast({ title: "Course added", description: `"${form.title}" added.` });
    }
    setDialogOpen(false);
  };

  const handleDelete = (id: string, title: string) => {
    setCourseList((prev) => prev.filter((c) => c.id !== id));
    toast({ title: "Course deleted", description: `"${title}" removed.`, variant: "destructive" });
  };

  return (
    <div className="p-8 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="font-display text-2xl font-bold text-foreground">Course Management</h1>
          <p className="text-sm text-muted-foreground">Add, edit, or remove courses</p>
        </div>
        <div className="flex gap-3">
          <Input placeholder="Search courses..." value={search} onChange={(e) => setSearch(e.target.value)} className="w-56 rounded-full bg-secondary" />
          <Button onClick={openAdd} className="gap-2 rounded-full bg-gradient-to-r from-primary to-accent text-primary-foreground hover:opacity-90">
            <Plus className="h-4 w-4" /> Add Course
          </Button>
        </div>
      </div>

      <div className="bg-card border border-border rounded-2xl">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="uppercase text-xs tracking-wider">Code</TableHead>
              <TableHead className="uppercase text-xs tracking-wider">Title</TableHead>
              <TableHead className="uppercase text-xs tracking-wider">Department</TableHead>
              <TableHead className="uppercase text-xs tracking-wider">Level</TableHead>
              <TableHead className="uppercase text-xs tracking-wider text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filtered.map((c) => (
              <TableRow key={c.id}>
                <TableCell className="text-primary font-semibold">{c.code}</TableCell>
                <TableCell className="text-foreground">{c.title}</TableCell>
                <TableCell className="text-muted-foreground text-sm">{departments.find((d) => d.id === c.departmentId)?.name}</TableCell>
                <TableCell><span className="bg-primary/10 text-primary text-xs px-2 py-0.5 rounded-full">{c.level}</span></TableCell>
                <TableCell className="text-right space-x-2">
                  <button onClick={() => openEdit(c)} className="text-muted-foreground hover:text-primary"><Pencil className="h-4 w-4 inline" /></button>
                  <AlertDialog>
                    <AlertDialogTrigger asChild><button className="text-destructive hover:text-destructive/80"><Trash2 className="h-4 w-4 inline" /></button></AlertDialogTrigger>
                    <AlertDialogContent>
                      <AlertDialogHeader><AlertDialogTitle>Delete Course</AlertDialogTitle><AlertDialogDescription>Delete "{c.title}"? This cannot be undone.</AlertDialogDescription></AlertDialogHeader>
                      <AlertDialogFooter><AlertDialogCancel>Cancel</AlertDialogCancel><AlertDialogAction onClick={() => handleDelete(c.id, c.title)} className="bg-destructive text-destructive-foreground">Delete</AlertDialogAction></AlertDialogFooter>
                    </AlertDialogContent>
                  </AlertDialog>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
        <DialogContent>
          <DialogHeader><DialogTitle>{editingId ? "Edit Course" : "Add Course"}</DialogTitle></DialogHeader>
          <div className="space-y-4 py-2">
            <div><Label>Course Code *</Label><Input value={form.code} onChange={(e) => setForm({ ...form, code: e.target.value })} placeholder="e.g. CS-201" className="mt-1 rounded-lg" /></div>
            <div><Label>Title *</Label><Input value={form.title} onChange={(e) => setForm({ ...form, title: e.target.value })} placeholder="e.g. Data Structures" className="mt-1 rounded-lg" /></div>
            <div><Label>Description</Label><Input value={form.description} onChange={(e) => setForm({ ...form, description: e.target.value })} placeholder="Brief description" className="mt-1 rounded-lg" /></div>
            <div>
              <Label>Department *</Label>
              <Select value={form.departmentId} onValueChange={(v) => setForm({ ...form, departmentId: v })}>
                <SelectTrigger className="mt-1"><SelectValue placeholder="Select department" /></SelectTrigger>
                <SelectContent>{departments.map((d) => <SelectItem key={d.id} value={d.id}>{d.name}</SelectItem>)}</SelectContent>
              </Select>
            </div>
            <div>
              <Label>Level</Label>
              <Select value={form.level} onValueChange={(v) => setForm({ ...form, level: v })}>
                <SelectTrigger className="mt-1"><SelectValue /></SelectTrigger>
                <SelectContent>
                  {["Undergraduate", "Masters", "Doctoral", "Core Curriculum"].map((l) => <SelectItem key={l} value={l}>{l}</SelectItem>)}
                </SelectContent>
              </Select>
            </div>
          </div>
          <DialogFooter>
            <DialogClose asChild><Button variant="outline" className="rounded-full">Cancel</Button></DialogClose>
            <Button onClick={handleSave} className="rounded-full bg-gradient-to-r from-primary to-accent text-primary-foreground hover:opacity-90">{editingId ? "Save" : "Add"}</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default CourseManagementView;
