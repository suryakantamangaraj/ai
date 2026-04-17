import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import api from "@/lib/axios";

const Onboarding = () => {
  const { user, checkAuth } = useAuth();
  const [username, setUsername] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // If not authenticated, or already has a username, redirect out.
    if (!user) {
       // but wait, React Query might still be loading, so check loading state in standard usage
    } else if (user.username) {
      navigate("/");
    }
  }, [user, navigate]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!username.trim() || username.length < 3) {
      toast.error("Username must be at least 3 characters");
      return;
    }

    try {
      setLoading(true);
      await api.put("/api/users/profile", { username: username.trim() });
      toast.success("Profile completed!");
      checkAuth(); // Refresh user data
      navigate("/");
    } catch (error: any) {
      toast.error(error.response?.data?.error || "Error updating profile");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex min-h-[calc(100vh-4rem)] items-center justify-center p-4">
      <div className="w-full max-w-md space-y-8 rounded-xl border border-border/50 bg-background/50 backdrop-blur-xl p-8 shadow-2xl">
        <div className="space-y-2 text-center">
          <h1 className="text-3xl font-bold tracking-tight text-gradient-purple">
            Welcome to AIverse!
          </h1>
          <p className="text-muted-foreground">
            Let's finish setting up your account.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="username">Choose a unique username</Label>
            <Input
              id="username"
              placeholder="e.g. awesome_dev"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="bg-background/50"
              autoFocus
            />
          </div>

          <Button type="submit" className="w-full" disabled={loading}>
            {loading ? "Saving..." : "Complete Setup"}
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Onboarding;
