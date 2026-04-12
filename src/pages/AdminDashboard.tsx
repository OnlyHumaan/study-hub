import { useState } from "react";
import {
  LayoutDashboard, BarChart3, BookOpen, Users, Settings,
  FileText, LifeBuoy, LogOut,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";
import { departments, courses, resources } from "@/data/mockData";
import DashboardView from "./admin/DashboardView";
import AnalyticsView from "./admin/AnalyticsView";
import CourseManagementView from "./admin/CourseManagementView";
import UserRolesView from "./admin/UserRolesView";
import SettingsView from "./admin/SettingsView";
import SupportModal from "./admin/SupportModal";

const sidebarItems = [
  { label: "Dashboard", icon: LayoutDashboard },
  { label: "Analytics", icon: BarChart3 },
  { label: "Course Management", icon: BookOpen },
  { label: "User Roles", icon: Users },
  { label: "Settings", icon: Settings },
];

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState("Dashboard");
  const [supportOpen, setSupportOpen] = useState(false);
  const { toast } = useToast();
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => { logout(); navigate("/"); };

  const generateReport = () => {
    const headers = ["Course Code", "Course Name", "Resource Title", "Source", "URL"];
    const rows = resources.map((r) => {
      const course = courses.find((c) => c.id === r.courseId);
      return [course?.code ?? "", course?.title ?? "", r.title, r.sourceWebsite, r.sourceUrl]
        .map((v) => `"${v.replace(/"/g, '""')}"`)
        .join(",");
    });
    const csv = [headers.join(","), ...rows].join("\n");
    const blob = new Blob([csv], { type: "text/csv" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url; a.download = "arf_report.csv"; a.click();
    URL.revokeObjectURL(url);
    toast({ title: "Report generated", description: "CSV report has been downloaded." });
  };

  const renderView = () => {
    switch (activeTab) {
      case "Analytics": return <AnalyticsView />;
      case "Course Management": return <CourseManagementView />;
      case "User Roles": return <UserRolesView />;
      case "Settings": return <SettingsView />;
      default: return <DashboardView />;
    }
  };

  return (
    <div className="flex min-h-screen bg-background">
      {/* Sidebar */}
      <aside className="w-56 bg-card border-r border-border flex flex-col shrink-0">
        <div className="p-5 border-b border-border">
          <h2 className="font-display font-bold text-primary text-xl">ARF.</h2>
          <p className="text-xs text-muted-foreground">Admin Panel</p>
        </div>
        <nav className="flex-1 p-3 space-y-1">
          {sidebarItems.map((item) => (
            <button
              key={item.label}
              onClick={() => setActiveTab(item.label)}
              className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                activeTab === item.label
                  ? "bg-primary/10 text-primary"
                  : "text-muted-foreground hover:bg-secondary"
              }`}
            >
              <item.icon className="h-4 w-4" />
              {item.label}
            </button>
          ))}
        </nav>
        <div className="p-3">
          <Button onClick={generateReport} className="w-full mb-4 gap-2 rounded-xl bg-gradient-to-r from-primary to-accent text-primary-foreground hover:opacity-90">
            <FileText className="h-4 w-4" /> Generate Report
          </Button>
          <div className="space-y-1 px-3 pb-4">
            <button onClick={() => setSupportOpen(true)} className="flex items-center gap-2 text-xs text-muted-foreground hover:text-foreground">
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
        {renderView()}

        <footer className="border-t border-border bg-card px-8 py-6 flex items-center justify-between">
          <p className="text-sm font-semibold text-primary">ARF Admin</p>
          <nav className="flex gap-6 text-xs text-muted-foreground uppercase tracking-wide">
            <a href="#">Privacy</a>
            <a href="#">Terms</a>
            <button onClick={() => setSupportOpen(true)} className="uppercase">Support</button>
          </nav>
          <p className="text-xs text-muted-foreground">© 2026 ARF. All Rights Reserved.</p>
        </footer>
      </div>

      <SupportModal open={supportOpen} onOpenChange={setSupportOpen} />
    </div>
  );
};

export default AdminDashboard;
