import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

interface Props { open: boolean; onOpenChange: (open: boolean) => void; }

const SupportModal = ({ open, onOpenChange }: Props) => {
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const { toast } = useToast();

  const handleSubmit = () => {
    if (!subject.trim() || !message.trim()) return;
    toast({ title: "Support request sent", description: "Our team will get back to you shortly." });
    setSubject(""); setMessage(""); onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader><DialogTitle>Contact Support</DialogTitle></DialogHeader>
        <div className="space-y-4 py-2">
          <div><Label>Subject</Label><Input value={subject} onChange={(e) => setSubject(e.target.value)} placeholder="Describe your issue" className="mt-1 rounded-lg" /></div>
          <div><Label>Message</Label><Textarea value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Provide details..." className="mt-1 rounded-lg min-h-[100px]" /></div>
        </div>
        <Button onClick={handleSubmit} className="w-full rounded-full bg-gradient-to-r from-primary to-accent text-primary-foreground hover:opacity-90">Submit</Button>
      </DialogContent>
    </Dialog>
  );
};

export default SupportModal;
