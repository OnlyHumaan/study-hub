import { useState } from "react";
import { Users, ShieldCheck, User } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface MockUser {
  id: string;
  name: string;
  email: string;
  role: "admin" | "editor" | "viewer";
  lastActive: string;
}

const mockUsers: MockUser[] = [
  { id: "1", name: "Admin User", email: "admin@university.edu", role: "admin", lastActive: "Today" },
  { id: "2", name: "Dr. Adeyemi", email: "adeyemi@university.edu", role: "editor", lastActive: "Yesterday" },
  { id: "3", name: "Prof. Okafor", email: "okafor@university.edu", role: "editor", lastActive: "2 days ago" },
  { id: "4", name: "Amara Diallo", email: "diallo@university.edu", role: "viewer", lastActive: "3 days ago" },
  { id: "5", name: "Kwame Asante", email: "asante@university.edu", role: "viewer", lastActive: "1 week ago" },
];

const roleBadge = (role: string) => {
  const map: Record<string, string> = { admin: "bg-primary/10 text-primary", editor: "bg-accent/10 text-accent", viewer: "bg-secondary text-muted-foreground" };
  return map[role] || map.viewer;
};

const UserRolesView = () => {
  const [users] = useState(mockUsers);

  return (
    <div className="p-8 space-y-6">
      <div>
        <h1 className="font-display text-2xl font-bold text-foreground">User Roles</h1>
        <p className="text-sm text-muted-foreground">View registered users and their roles</p>
      </div>

      <div className="grid grid-cols-3 gap-6">
        {[
          { label: "Total Users", value: users.length, icon: Users },
          { label: "Admins", value: users.filter((u) => u.role === "admin").length, icon: ShieldCheck },
          { label: "Editors", value: users.filter((u) => u.role === "editor").length, icon: User },
        ].map((s) => (
          <div key={s.label} className="bg-card border border-border rounded-2xl p-5 flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center"><s.icon className="h-6 w-6 text-primary" /></div>
            <div>
              <p className="text-xs text-muted-foreground uppercase tracking-wider">{s.label}</p>
              <p className="text-2xl font-bold text-foreground">{s.value}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-card border border-border rounded-2xl divide-y divide-border">
        {users.map((u) => (
          <div key={u.id} className="flex items-center justify-between px-6 py-4">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-sm">
                {u.name.split(" ").map((n) => n[0]).join("")}
              </div>
              <div>
                <p className="font-medium text-foreground">{u.name}</p>
                <p className="text-xs text-muted-foreground">{u.email}</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <Badge variant="secondary" className={roleBadge(u.role)}>{u.role}</Badge>
              <span className="text-xs text-muted-foreground">{u.lastActive}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserRolesView;
