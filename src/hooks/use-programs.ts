import { useQuery } from "@tanstack/react-query";
import { api } from "@shared/routes";

export function usePrograms(category?: string) {
  return useQuery({
    queryKey: [api.programs.list.path, category],
    queryFn: async () => {
      const url = category 
        ? `${api.programs.list.path}?category=${category}` 
        : api.programs.list.path;
      
      const res = await fetch(url);
      if (!res.ok) throw new Error("Failed to fetch programs");
      return api.programs.list.responses[200].parse(await res.json());
    },
  });
}

export function useProgram(id: number) {
  return useQuery({
    queryKey: [api.programs.get.path, id],
    queryFn: async () => {
      const url = api.programs.get.path.replace(':id', String(id));
      const res = await fetch(url);
      if (res.status === 404) return null;
      if (!res.ok) throw new Error("Failed to fetch program");
      return api.programs.get.responses[200].parse(await res.json());
    },
    enabled: !!id,
  });
}
