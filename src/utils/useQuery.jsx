import fetcher from "./fetcher";
import { useLocation } from "react-router-dom";
import useSWR from "swr";

export default function useQuery(url) {
  const { pathname } = useLocation();

  const { data, isLoading, mutate } = useSWR(url, fetcher, {
    suspense: pathname !== "/",
  });

  return { data, isLoading, mutate };
}
