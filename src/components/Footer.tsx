import { Link } from "react-router-dom";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Footer = () => {
  const { toast } = useToast();

  const handleSocialClick = (name: string) => {
    toast({ title: name, description: `${name} page coming soon!` });
  };

  const handleLinkClick = (label: string) => {
    toast({ title: label, description: `${label} page coming soon!` });
  };

  return (
    <footer className="bg-foreground text-background mt-auto">
      <div className="container py-16">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          {/* Logo & Social */}
          <div className="col-span-2 md:col-span-1">
            <Link to="/" className="font-display text-2xl font-extrabold text-primary-foreground">
              ARF.
            </Link>
            <p className="text-sm opacity-60 mt-3 leading-relaxed">
              Empowering learners worldwide with quality online education and curated resources.
            </p>
            <div className="flex gap-3 mt-5">
              {[
                { Icon: Facebook, name: "Facebook" },
                { Icon: Twitter, name: "Twitter" },
                { Icon: Instagram, name: "Instagram" },
                { Icon: Linkedin, name: "LinkedIn" },
              ].map(({ Icon, name }) => (
                <button
                  key={name}
                  onClick={() => handleSocialClick(name)}
                  className="w-9 h-9 rounded-full bg-background/10 flex items-center justify-center hover:bg-primary transition-colors"
                >
                  <Icon className="h-4 w-4" />
                </button>
              ))}
            </div>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2.5 text-sm opacity-60">
              {["About Us", "Careers", "Blog", "Press"].map((label) => (
                <li key={label}>
                  <button onClick={() => handleLinkClick(label)} className="hover:opacity-100">{label}</button>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-semibold mb-4">Support</h4>
            <ul className="space-y-2.5 text-sm opacity-60">
              {["Help Center", "Terms of Use", "Privacy Policy", "Community"].map((label) => (
                <li key={label}>
                  <button onClick={() => handleLinkClick(label)} className="hover:opacity-100">{label}</button>
                </li>
              ))}
            </ul>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold mb-4">Links</h4>
            <ul className="space-y-2.5 text-sm opacity-60">
              <li><Link to="/departments" className="hover:opacity-100">Courses</Link></li>
              {["Become Teacher", "Webinars", "Services"].map((label) => (
                <li key={label}>
                  <button onClick={() => handleLinkClick(label)} className="hover:opacity-100">{label}</button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-2.5 text-sm opacity-60">
              <li><a href="tel:+15551234567" className="hover:opacity-100">+1 (555) 123-4567</a></li>
              <li><a href="mailto:info@arf.edu" className="hover:opacity-100">info@arf.edu</a></li>
              <li>123 University Ave</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-background/10 mt-12 pt-6 text-center text-sm opacity-50">
          © 2026 ARF. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
