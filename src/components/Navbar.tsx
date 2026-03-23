import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Search, Menu, X } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [searchQuery, setSearchQuery] = useState("");
  const [mobileOpen, setMobileOpen] = useState(false);
  const isActive = (path: string) => location.pathname === path;

  const navLinks = [
    { label: "Courses", path: "/departments" },
    { label: "Teachers", path: "#teachers" },
    { label: "Offers", path: "#offers" },
    { label: "Contact", path: "#contact" },
  ];

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
    }
  };

  const handleNavClick = (link: { label: string; path: string }) => {
    setMobileOpen(false);
    if (link.path.startsWith("#")) {
      if (location.pathname !== "/") {
        navigate("/");
      }
      toast({ title: `${link.label}`, description: `${link.label} section coming soon!` });
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-nav border-b border-border/50 backdrop-blur-sm">
      <div className="container flex h-16 items-center justify-between">
        <Link to="/" className="font-display text-2xl font-extrabold text-primary">
          Etech.
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          <Link
            to="/"
            className={`text-sm font-medium transition-colors hover:text-primary ${
              isActive("/") ? "text-primary" : "text-foreground"
            }`}
          >
            Home
          </Link>
          {navLinks.map((link) =>
            link.path.startsWith("/") ? (
              <Link
                key={link.label}
                to={link.path}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  isActive(link.path) ? "text-primary" : "text-foreground"
                }`}
              >
                {link.label}
              </Link>
            ) : (
              <button
                key={link.label}
                onClick={() => handleNavClick(link)}
                className="text-sm font-medium transition-colors hover:text-primary text-foreground"
              >
                {link.label}
              </button>
            )
          )}
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <form onSubmit={handleSearch} className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search courses..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-9 w-48 h-9 bg-secondary border-border text-sm rounded-full"
            />
          </form>
          <Link to="/admin" className="text-sm font-medium text-foreground hover:text-primary">
            Sign In
          </Link>
          <Button
            onClick={() => navigate("/departments")}
            className="rounded-full px-6 bg-gradient-to-r from-primary to-accent text-primary-foreground hover:opacity-90"
          >
            Free Trial
          </Button>
        </div>

        <button className="md:hidden p-2" onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {mobileOpen && (
        <div className="md:hidden border-t border-border bg-nav px-4 pb-4 space-y-3">
          <Link to="/" className="block py-2 text-sm font-medium text-foreground" onClick={() => setMobileOpen(false)}>Home</Link>
          {navLinks.map((link) =>
            link.path.startsWith("/") ? (
              <Link key={link.label} to={link.path} className="block py-2 text-sm font-medium text-foreground" onClick={() => setMobileOpen(false)}>
                {link.label}
              </Link>
            ) : (
              <button key={link.label} className="block py-2 text-sm font-medium text-foreground w-full text-left" onClick={() => handleNavClick(link)}>
                {link.label}
              </button>
            )
          )}
          <Link to="/admin" className="block py-2 text-sm font-medium text-foreground" onClick={() => setMobileOpen(false)}>Sign In</Link>
          <Button onClick={() => { setMobileOpen(false); navigate("/departments"); }} className="w-full rounded-full bg-gradient-to-r from-primary to-accent text-primary-foreground">Free Trial</Button>
        </div>
      )}
    </header>
  );
};

export default Navbar;
