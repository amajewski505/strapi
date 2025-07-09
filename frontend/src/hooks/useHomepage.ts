'use client'

import { useQuery } from "@tanstack/react-query";
import { fetchFromStrapi } from "../lib/api";
import { HomepageResponse } from "../types/homepage.types"

export function useHomepage() {
    return useQuery<HomepageResponse>({
        queryKey: ["homepage"],
        queryFn: () => fetchFromStrapi<HomepageResponse>("/api/homepage"),
        staleTime: 1000 * 60 * 5, // 5 min
    });
}