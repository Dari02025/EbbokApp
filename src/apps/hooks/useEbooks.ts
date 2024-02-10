import { useQuery } from "@tanstack/react-query";
import { fetchEbooks } from "services/ebook.service";

export function useFetchEbooks() {
  return useQuery({ queryFn: () => fetchEbooks(), queryKey: ["ebooks"] });
}
