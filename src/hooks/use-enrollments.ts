import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { api } from "@shared/routes";
import { useToast } from "@/hooks/use-toast";
import { useAuth } from "./use-auth";

export function useMyEnrollments() {
  const { isAuthenticated } = useAuth();
  
  return useQuery({
    queryKey: [api.enrollments.list.path],
    queryFn: async () => {
      const res = await fetch(api.enrollments.list.path, { credentials: "include" });
      if (res.status === 401) throw new Error("Unauthorized");
      if (!res.ok) throw new Error("Failed to fetch enrollments");
      return api.enrollments.list.responses[200].parse(await res.json());
    },
    enabled: isAuthenticated,
  });
}

export function useEnroll() {
  const queryClient = useQueryClient();
  const { toast } = useToast();

  return useMutation({
    mutationFn: async (programId: number) => {
      const res = await fetch(api.enrollments.create.path, {
        method: api.enrollments.create.method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ programId }),
        credentials: "include",
      });

      if (res.status === 401) {
        throw new Error("Please login to enroll");
      }
      
      if (!res.ok) {
        const error = await res.json();
        throw new Error(error.message || "Failed to enroll");
      }
      
      return api.enrollments.create.responses[201].parse(await res.json());
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [api.enrollments.list.path] });
      toast({
        title: "Enrolled Successfully!",
        description: "Welcome to the program. Check your dashboard for details.",
      });
    },
    onError: (error: Error) => {
      toast({
        title: "Enrollment Failed",
        description: error.message,
        variant: "destructive",
      });
    },
  });
}
