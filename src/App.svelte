<script lang="ts">
  import Github from './lib/components/Github.svelte';
  import Settings from './lib/components/Settings.svelte';
  import ScriptPreview from './lib/components/ScriptPreview.svelte';
</script>

<main class="mx-auto flex flex-col w-[80%] md:w-[60%] lg:w-[40%] gap-8 text-gray-300">
  <h1 class="font-semibold text-4xl">Mardroide flags</h1>
  <Settings />
  <div class="flex flex-col gap-4">
    <ScriptPreview />
    <Github />
  </div>
</main>
