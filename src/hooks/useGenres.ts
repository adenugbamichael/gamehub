import { useQuery } from "@tanstack/react-query"
import apiClient from "../services/api-clients"
import genres from "../data/genres"
import { FetchResponse } from "./useData"
export interface Genre {
  id: number
  name: string
  image_background: string
}

const useGenres = () =>
  useQuery({
    queryKey: ["genres"],
    queryFn: () => apiClient.get<FetchResponse<Genre>>("/genres"),
    stableTime: 24 * 60 * 60 * 1000, // 24h
    initialData: { count: genres.length, results: genres },
  })

export default useGenres
