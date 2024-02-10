<script lang="ts">
  import Download from "./lib/Download.svelte";
  import Settings from "./lib/settings/Settings.svelte";
  import FlagsLogo from "./lib/FlagsLogo.svelte";
  import ScriptPreview from "./lib/ScriptPreview.svelte";
</script>

<main class="mx-auto flex flex-col w-[40%] gap-8 text-gray-300">
  <div class="flex items-center gap-2">
    <FlagsLogo />
    <h1 class="font-semibold text-4xl">Mardroide flags</h1>
  </div>
  <Settings />
  <div class="flex flex-col gap-4">
    <ScriptPreview />
    <Download />
  </div>
</main>
