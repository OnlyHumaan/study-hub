import { Link, useLocation } from "react-router-dom";
import { Search, Bell, User } from "lucide-react";
import { Input } from "@/components/ui/input";

const Navbar = () => {
  const location = useLocation();
  const isActive = (path: string) => location.pathname === path;

  const navLinks = [
    { label: "Home", path: "/" },
    { label: "Departments", path: "/departments" },
    { label: "Resources", path: "/resources" },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-nav">
      <div className="container flex h-14 items-center justify-between">
        <Link to="/" className="font-display text-lg font-bold text-primary">
          Academic Resource Finder
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-sm font-medium transition-colors hover:text-primary ${
                isActive(link.path)
                  ? "text-primary underline underline-offset-[18px] decoration-2"
                  : "text-muted-foreground"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <div className="relative hidden lg:block">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search resources..."
              className="pl-9 w-52 h-9 bg-secondary border-border text-sm"
            />
          </div>
          <button className="p-2 rounded-md hover:bg-secondary text-muted-foreground">
            <Bell className="h-5 w-5" />
          </button>
          <button className="p-2 rounded-md hover:bg-secondary text-muted-foreground">
            <User className="h-5 w-5" />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
