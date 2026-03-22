import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Search, GraduationCap, BookOpen, Users, Play, Star, ArrowRight, ArrowLeft, Monitor, Calculator, TrendingUp, Mic, Microscope, Landmark, Briefcase, Globe, CheckCircle2, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { departments, courses } from "@/data/mockData";
import heroStudent from "@/assets/hero-student.png";
import teacherImg from "@/assets/teacher.png";
import benefitsImg from "@/assets/benefits-collage.jpg";
import courseWeb from "@/assets/course-web.jpg";
import courseUx from "@/assets/course-ux.jpg";
import courseData from "@/assets/course-data.jpg";

const iconMap: Record<string, React.ElementType> = {
  Monitor, Calculator, TrendingUp, Mic, Microscope, Landmark, Briefcase, Globe, Users,
};

const popularCourses = [
  { title: "Web Design & Development", category: "Web Design", price: "$560.00", lessons: 25, students: 108, image: courseWeb, instructor: "Alex K." },
  { title: "Wireframing & Prototyping", category: "UX/UI Design", price: "$180.00", lessons: 12, students: 411, image: courseUx, instructor: "Jordan M." },
  { title: "Python for Data Science", category: "Data Science", price: "$432.00", lessons: 41, students: 86, image: courseData, instructor: "Alex Taylor" },
];

const testimonials = [
  { name: "Alexis Rodriguez", text: "Enrolling in courses at Etech was a game-changing decision. The platform's extensive learning experience, from lectures to resources, has made a significant impact on my academic journey.", stars: 5 },
  { name: "Emily Chen", text: "Etech covered the practical insights and hands-on training I couldn't find anywhere else. A truly transformative learning experience that accelerated my professional growth.", stars: 5 },
  { name: "James Anderson", text: "Highly recommended! The personalized feedback and diverse curriculum surprised me. The resources have broadened my understanding and skills significantly.", stars: 5 },
];

const perks = [
  "Global Impact", "Creative Freedom",
  "Flexible Schedule", "Monetize Your Expertise",
  "Innovative Teaching Tools", "Professional Development",
  "Recognition and Reputation", "Networking Opportunities",
];

const HomePage = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const [email, setEmail] = useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
    }
  };

  return (
    <>
      {/* Hero */}
      <section className="bg-hero overflow-hidden">
        <div className="container py-16 md:py-24">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-extrabold text-foreground leading-tight">
                Develop your skills in a new and{" "}
                <span className="text-primary">unique way</span>
              </h1>
              <p className="mt-5 text-muted-foreground max-w-md leading-relaxed">
                Explore a transformative approach to skill development on our online learning platform. Discover a new realm of learning experiences and elevate your expertise in cutting-edge ways.
              </p>
              <div className="flex flex-wrap gap-4 mt-8">
                <Button className="rounded-full px-8 py-6 text-base bg-gradient-to-r from-primary to-accent text-primary-foreground hover:opacity-90">
                  Enroll Now
                </Button>
                <Button variant="outline" className="rounded-full px-8 py-6 text-base border-primary text-primary hover:bg-primary/5">
                  <Play className="h-4 w-4 mr-2" /> Watch Demo
                </Button>
              </div>
            </div>
            <div className="relative flex justify-center">
              <div className="w-72 h-72 md:w-96 md:h-96 rounded-full bg-gradient-to-br from-primary/30 to-accent/30 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
              <img src={heroStudent} alt="Student learning online" className="relative z-10 w-72 md:w-96 object-contain" />
              <div className="absolute top-4 right-0 md:right-4 z-20 bg-card rounded-2xl shadow-lg px-4 py-3 flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                  <BookOpen className="h-4 w-4 text-primary" />
                </div>
                <div>
                  <p className="text-xs font-bold text-foreground">50+</p>
                  <p className="text-[10px] text-muted-foreground">Online Courses</p>
                </div>
              </div>
              <div className="absolute bottom-8 left-0 md:left-4 z-20 bg-card rounded-2xl shadow-lg px-4 py-3 flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center">
                  <Users className="h-4 w-4 text-accent" />
                </div>
                <div>
                  <p className="text-xs font-bold text-foreground">15k+</p>
                  <p className="text-[10px] text-muted-foreground">Online Students</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Brand Strip */}
      <section className="bg-gradient-to-r from-primary to-accent py-5">
        <div className="container flex items-center justify-center gap-8 md:gap-16 flex-wrap text-primary-foreground">
          {["Duolingo", "MagicLeap", "Microsoft", "Codecov", "UserTesting"].map((brand) => (
            <span key={brand} className="text-sm md:text-base font-semibold opacity-80 tracking-wide">
              {brand}
            </span>
          ))}
        </div>
      </section>

      {/* Search Section */}
      <section className="container py-16 text-center">
        <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground">Search Courses</h2>
        <form onSubmit={handleSearch} className="mt-6 flex items-center max-w-xl mx-auto bg-card rounded-full shadow-sm border border-border overflow-hidden">
          <div className="flex items-center flex-1 px-5">
            <Search className="h-5 w-5 text-muted-foreground mr-3 shrink-0" />
            <Input
              placeholder="Search for over 50+ courses..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="border-0 shadow-none focus-visible:ring-0 px-0"
            />
          </div>
          <Button type="submit" className="rounded-full h-12 px-8 m-1 bg-gradient-to-r from-primary to-accent text-primary-foreground hover:opacity-90">Search</Button>
        </form>
      </section>

      {/* Benefits Section */}
      <section className="container py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="rounded-3xl border-2 border-dashed border-primary/30 p-4 overflow-hidden">
            <img src={benefitsImg} alt="Students learning" className="rounded-2xl w-full h-80 object-cover" />
          </div>
          <div>
            <h2 className="font-display text-3xl font-bold text-foreground">
              <span className="text-foreground">Benefits </span>
              <span className="text-primary">From Our Online Learning</span>
            </h2>
            <div className="mt-8 space-y-6">
              {[
                { icon: GraduationCap, title: "Online Degrees", desc: "Earn accredited degrees from the comfort of your home, guided by world-class faculty and resources." },
                { icon: BookOpen, title: "Short Courses", desc: "Enhance your skills with bite-sized, focused courses designed for practical learning." },
                { icon: Users, title: "Training From Experts", desc: "Immerse yourself in knowledge with industry experts delivering top-tier instruction." },
                { icon: Play, title: "1.5k+ Video Courses", desc: "Dive into a vast library of over 1.5k video courses covering diverse subjects." },
              ].map(({ icon: Icon, title, desc }) => (
                <div key={title} className="flex gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">{title}</h3>
                    <p className="text-sm text-muted-foreground mt-1">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Popular Courses */}
      <section className="bg-lavender py-16">
        <div className="container">
          <div className="text-center mb-10">
            <h2 className="font-display text-3xl font-bold text-foreground">Our Popular Courses</h2>
            <p className="text-muted-foreground mt-2 max-w-lg mx-auto">
              Discover our most sought-after courses, carefully curated to meet the demands of today's learners.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {popularCourses.map((course) => (
              <div key={course.title} className="bg-card rounded-2xl overflow-hidden shadow-sm border border-border hover:shadow-md transition-shadow">
                <div className="relative">
                  <img src={course.image} alt={course.title} className="w-full h-48 object-cover" />
                  <span className="absolute top-3 left-3 bg-primary/90 text-primary-foreground text-xs font-semibold px-3 py-1 rounded-full">
                    {course.category}
                  </span>
                </div>
                <div className="p-5">
                  <h3 className="font-semibold text-foreground text-lg">{course.title}</h3>
                  <div className="flex items-center justify-between mt-3 text-sm text-muted-foreground">
                    <span>{course.lessons} Classes</span>
                    <span>{course.students} Students</span>
                  </div>
                  <div className="flex items-center justify-between mt-4 pt-4 border-t border-border">
                    <span className="text-lg font-bold text-primary">{course.price}</span>
                    <span className="text-sm text-muted-foreground">{course.instructor}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Instructor CTA */}
      <section className="container py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="font-display text-3xl font-bold text-foreground">
              If You Are A Certified Teacher Then{" "}
              <span className="text-primary">Become An Instructor</span>
            </h2>
            <p className="text-muted-foreground mt-3">
              Unlock the opportunity to inspire and educate by joining our team of instructors.
            </p>
            <h3 className="font-semibold text-foreground mt-6 mb-4">Enjoy Many Perks</h3>
            <div className="grid grid-cols-2 gap-3">
              {perks.map((perk) => (
                <div key={perk} className="flex items-center gap-2 text-sm text-muted-foreground">
                  <CheckCircle2 className="h-4 w-4 text-primary shrink-0" />
                  {perk}
                </div>
              ))}
            </div>
            <Button className="mt-8 rounded-full px-8 py-6 bg-gradient-to-r from-primary to-accent text-primary-foreground hover:opacity-90">
              Become an Instructor
            </Button>
          </div>
          <div className="flex justify-center">
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
              <img src={teacherImg} alt="Become an instructor" className="relative z-10 w-64 md:w-80 object-contain" />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-gradient-to-br from-primary/5 via-accent/5 to-primary/10 py-16">
        <div className="container">
          <div className="text-center mb-10">
            <h2 className="font-display text-3xl font-bold text-foreground">Student's Testimonials</h2>
            <p className="text-muted-foreground mt-2 max-w-lg mx-auto">
              Hear what our students have to say about their transformative learning experiences.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <div key={t.name} className="bg-card rounded-2xl p-6 shadow-sm border border-border">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-primary-foreground font-bold">
                    {t.name[0]}
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">{t.name}</p>
                    <div className="flex gap-0.5">
                      {Array.from({ length: t.stars }).map((_, i) => (
                        <Star key={i} className="h-3.5 w-3.5 fill-accent text-accent" />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">{t.text}</p>
              </div>
            ))}
          </div>
          <div className="flex justify-center gap-3 mt-8">
            <button className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors">
              <ArrowLeft className="h-4 w-4" />
            </button>
            <button className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors">
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </section>

      {/* Browse by Department */}
      <section className="container py-16">
        <div className="text-center mb-10">
          <h2 className="font-display text-3xl font-bold text-foreground">Browse by Department</h2>
          <p className="text-muted-foreground mt-2 max-w-lg mx-auto">
            Navigate through our structured academic archives to find resources specific to your faculty.
          </p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {departments.map((dept) => {
            const Icon = iconMap[dept.icon] || Monitor;
            return (
              <Link
                key={dept.id}
                to={`/departments/${dept.id}`}
                className="group rounded-2xl p-6 bg-card border border-border hover:shadow-md hover:border-primary/30 transition-all"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <Icon className="h-6 w-6 text-primary" />
                </div>
                <p className="text-[10px] uppercase tracking-widest font-medium text-muted-foreground mb-1">{dept.faculty}</p>
                <h3 className="font-semibold text-sm text-foreground">{dept.name}</h3>
              </Link>
            );
          })}
        </div>
        <div className="text-center mt-8">
          <Link to="/departments">
            <Button variant="outline" className="rounded-full px-8 border-primary text-primary hover:bg-primary/5">
              View All Departments <ArrowRight className="h-4 w-4 ml-2" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Newsletter */}
      <section className="bg-gradient-to-r from-primary to-accent py-14">
        <div className="container text-center">
          <h2 className="font-display text-3xl font-bold text-primary-foreground">Get In Touch!</h2>
          <p className="text-primary-foreground/80 mt-2">
            Subscribe to get in touch and to enjoy exclusive discounts, premium courses, and more.
          </p>
          <div className="flex items-center max-w-md mx-auto mt-6 bg-primary-foreground/20 rounded-full overflow-hidden backdrop-blur-sm">
            <div className="flex items-center flex-1 px-5">
              <Mail className="h-5 w-5 text-primary-foreground/70 mr-3 shrink-0" />
              <input
                type="email"
                placeholder="Enter your email..."
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 bg-transparent border-0 outline-none text-primary-foreground placeholder:text-primary-foreground/50 text-sm py-3"
              />
            </div>
            <Button className="rounded-full h-11 px-6 m-1 bg-primary-foreground text-primary hover:bg-primary-foreground/90 font-semibold">
              Subscribe
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;
