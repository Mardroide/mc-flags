<script lang="ts">
  import { Button } from "bits-ui";
  import Icon from "@iconify/svelte";
</script>

<Button.Root
  class="flex items-center justify-center w-9 h-9 p-2 bg-green-600 rounded-sm"
  on:click={() => console.log("Hello world!")}
>
  <Icon icon="material-symbols:download-sharp" class="w-6 h-6" />
</Button.Root>
