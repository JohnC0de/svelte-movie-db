<script lang="ts">
  import type { PageServerLoad } from "./$types"
  export let data: PageServerLoad
</script>

<div class="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-4 p-4">
  {#each data.popularMovies as movie}
    <div class="group rounded-2xl bg-slate-300 p-2">
      <div>
        <img
          class="mb-4 h-full w-full rounded-2xl object-cover"
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={`Poster for ${movie.title}`}
        />
      </div>
      <div class="rounded-2xl bg-slate-200 p-2 text-gray-800 ">
        <p class="text-center text-lg leading-none tracking-tighter text-gray-800">
          {movie.title}
        </p>
        <!-- <p class="hidden text-center text-sm leading-none tracking-tighter text-gray-800 group-hover:block">
          {movie.overview}
        </p> -->
        <p>Rating: {movie.vote_average} / 10 ⭐</p>
        <p>Release Date: {movie.release_date}</p>
      </div>
    </div>
  {/each}
</div>
