<script lang="ts">
  import { Switch, Label } from "bits-ui";
  export let label: string;
  export let description: string;
</script>

<div class="flex flex-col gap-1">
  <Switch.Root>
    <Switch.Thumb />
    <Switch.Input />
  </Switch.Root>
  <Label.Root>{label}</Label.Root>
  <p class="text-sm text-gray-400">
    {description}
  </p>
</div>
