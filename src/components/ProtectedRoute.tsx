import { useAuth } from "@/contexts/AuthContext";
import AdminLogin from "@/components/AdminLogin";

const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const { isAdmin, loading } = useAuth();

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary" />
      </div>
    );
  }

  if (!isAdmin) {
    return <AdminLogin />;
  }

  return <>{children}</>;
};

export default ProtectedRoute;
