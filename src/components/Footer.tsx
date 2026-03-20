const Footer = () => (
  <footer className="border-t border-border bg-card mt-auto">
    <div className="container py-8 flex flex-col md:flex-row items-center justify-between gap-4">
      <p className="text-sm font-semibold text-primary">University Digital Curatory</p>
      <nav className="flex flex-wrap items-center gap-6 text-xs font-medium tracking-wide text-muted-foreground uppercase">
        <a href="#" className="hover:text-foreground">Privacy Policy</a>
        <a href="#" className="hover:text-foreground">Terms of Service</a>
        <a href="#" className="hover:text-foreground">Accessibility</a>
        <a href="#" className="hover:text-foreground">Contact Support</a>
      </nav>
      <p className="text-xs text-muted-foreground">
        © 2024 University Digital Curatory. All Rights Reserved.
      </p>
    </div>
  </footer>
);

export default Footer;
