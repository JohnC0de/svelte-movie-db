import { SECRET_MOVIEDB_TOKEN } from "$env/static/private"
import type { PageServerLoad } from "./$types"

export const load = (async ({ fetch }) => {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/popular?api_key=${SECRET_MOVIEDB_TOKEN}&language=en-US&page=1`
  )
  const data = await res.json()
  if (res.ok) {
    return { popularMovies: data.results }
  }
}) satisfies PageServerLoad
