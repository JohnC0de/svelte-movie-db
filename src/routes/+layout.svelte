<script>
  import "../app.css"
</script>

<nav class="flex gap-8 bg-gray-800 p-4">
  <span class="text-left text-xl font-semibold tracking-tight text-white">SvelteKit Movie DB</span>

  <div class="flex gap-4 text-sm ">
    <a href="/" class="nav-button">Home</a>
    <a href="/movies" class="nav-button">Movies</a>
  </div>
</nav>

<slot />
