<script lang="ts">
  import type { PageServerLoad } from "./$types"
  export let data: PageServerLoad
</script>

<div>
  <h1 class="text-3xl font-bold underline">Hello world!</h1>
  <pre class="mt-4 text-sm text-gray-500">{JSON.stringify(data, null, 2)}</pre>
</div>
