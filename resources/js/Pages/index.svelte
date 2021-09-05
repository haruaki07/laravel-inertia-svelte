<script context="module">
  import Layout from "@/Shared/Layout.svelte";
  export const layout = Layout;
</script>

<script>
  import { inertia } from "@inertiajs/inertia-svelte";
</script>

<div class="text-red-500">
  <a use:inertia href="/about">about</a>
</div>
