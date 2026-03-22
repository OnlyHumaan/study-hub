import { Link } from "react-router-dom";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

const Footer = () => (
  <footer className="bg-foreground text-background mt-auto">
    <div className="container py-16">
      <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
        {/* Logo & Social */}
        <div className="col-span-2 md:col-span-1">
          <Link to="/" className="font-display text-2xl font-extrabold text-primary-foreground">
            Etech.
          </Link>
          <p className="text-sm opacity-60 mt-3 leading-relaxed">
            Empowering learners worldwide with quality online education and curated resources.
          </p>
          <div className="flex gap-3 mt-5">
            {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
              <a key={i} href="#" className="w-9 h-9 rounded-full bg-background/10 flex items-center justify-center hover:bg-primary transition-colors">
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        {/* Company */}
        <div>
          <h4 className="font-semibold mb-4">Company</h4>
          <ul className="space-y-2.5 text-sm opacity-60">
            <li><a href="#" className="hover:opacity-100">About Us</a></li>
            <li><a href="#" className="hover:opacity-100">Careers</a></li>
            <li><a href="#" className="hover:opacity-100">Blog</a></li>
            <li><a href="#" className="hover:opacity-100">Press</a></li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h4 className="font-semibold mb-4">Support</h4>
          <ul className="space-y-2.5 text-sm opacity-60">
            <li><a href="#" className="hover:opacity-100">Help Center</a></li>
            <li><a href="#" className="hover:opacity-100">Terms of Use</a></li>
            <li><a href="#" className="hover:opacity-100">Privacy Policy</a></li>
            <li><a href="#" className="hover:opacity-100">Community</a></li>
          </ul>
        </div>

        {/* Links */}
        <div>
          <h4 className="font-semibold mb-4">Links</h4>
          <ul className="space-y-2.5 text-sm opacity-60">
            <li><Link to="/departments" className="hover:opacity-100">Courses</Link></li>
            <li><a href="#" className="hover:opacity-100">Become Teacher</a></li>
            <li><a href="#" className="hover:opacity-100">Webinars</a></li>
            <li><a href="#" className="hover:opacity-100">Services</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-semibold mb-4">Contact Us</h4>
          <ul className="space-y-2.5 text-sm opacity-60">
            <li>+1 (555) 123-4567</li>
            <li>info@etech.edu</li>
            <li>123 University Ave</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-background/10 mt-12 pt-6 text-center text-sm opacity-50">
        © 2026 Etech. All Rights Reserved.
      </div>
    </div>
  </footer>
);

export default Footer;
