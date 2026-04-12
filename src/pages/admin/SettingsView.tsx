import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { useToast } from "@/hooks/use-toast";

const SettingsView = () => {
  const [siteName, setSiteName] = useState("ARF Academic Resource Finder");
  const [adminEmail, setAdminEmail] = useState("admin@university.edu");
  const [darkMode, setDarkMode] = useState(false);
  const [emailNotifications, setEmailNotifications] = useState(true);
  const { toast } = useToast();

  const handleSave = () => {
    toast({ title: "Settings saved", description: "Your settings have been updated." });
  };

  return (
    <div className="p-8 space-y-8 max-w-2xl">
      <div>
        <h1 className="font-display text-2xl font-bold text-foreground">Settings</h1>
        <p className="text-sm text-muted-foreground">Configure application preferences</p>
      </div>

      <div className="bg-card border border-border rounded-2xl p-6 space-y-6">
        <h3 className="font-display font-bold text-foreground">General</h3>
        <div className="space-y-4">
          <div>
            <Label>Site Name</Label>
            <Input value={siteName} onChange={(e) => setSiteName(e.target.value)} className="mt-1 rounded-lg" />
          </div>
          <div>
            <Label>Admin Email</Label>
            <Input value={adminEmail} onChange={(e) => setAdminEmail(e.target.value)} className="mt-1 rounded-lg" />
          </div>
        </div>
      </div>

      <div className="bg-card border border-border rounded-2xl p-6 space-y-6">
        <h3 className="font-display font-bold text-foreground">Preferences</h3>
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium text-foreground">Dark Mode</p>
              <p className="text-xs text-muted-foreground">Toggle dark theme</p>
            </div>
            <Switch checked={darkMode} onCheckedChange={setDarkMode} />
          </div>
          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium text-foreground">Email Notifications</p>
              <p className="text-xs text-muted-foreground">Receive updates about new resources</p>
            </div>
            <Switch checked={emailNotifications} onCheckedChange={setEmailNotifications} />
          </div>
        </div>
      </div>

      <Button onClick={handleSave} className="rounded-full bg-gradient-to-r from-primary to-accent text-primary-foreground hover:opacity-90">
        Save Settings
      </Button>
    </div>
  );
};

export default SettingsView;
