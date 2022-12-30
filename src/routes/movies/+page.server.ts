import { SECRET_MOVIEDB_TOKEN } from "$env/static/private"
import type { PageServerLoad } from "./$types"

export interface PopularMoviesData {
  page: number
  results: Result[]
  total_pages: number
  total_results: number
}

export interface Result {
  adult: boolean
  backdrop_path: string
  genre_ids: number[]
  id: number
  original_language: string
  original_title: string
  overview: string
  popularity: number
  poster_path: string
  release_date: string
  title: string
  video: boolean
  vote_average: number
  vote_count: number
}

export const load = (async ({ fetch }) => {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/popular?api_key=${SECRET_MOVIEDB_TOKEN}&language=en-US&page=1`
  )
  const data = (await res.json()) as PopularMoviesData
  if (res.ok) {
    return { popularMovies: data.results }
  }
}) satisfies PageServerLoad
