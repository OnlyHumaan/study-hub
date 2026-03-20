import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import PublicLayout from "./components/PublicLayout";
import HomePage from "./pages/HomePage";
import DepartmentsPage from "./pages/DepartmentsPage";
import CourseListPage from "./pages/CourseListPage";
import CourseResourcesPage from "./pages/CourseResourcesPage";
import AdminDashboard from "./pages/AdminDashboard";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route element={<PublicLayout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/departments" element={<DepartmentsPage />} />
            <Route path="/departments/:dept" element={<CourseListPage />} />
            <Route path="/courses/:courseId" element={<CourseResourcesPage />} />
          </Route>
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
