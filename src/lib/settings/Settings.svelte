<script lang="ts">
  import FlagsSelector from './FlagsSelector.svelte';
  import SettingsCheckbox from './SettingsCheckbox.svelte';
  import NameInput from './NameInput.svelte';
  import RamSelector from './RamSelector.svelte';

  const switchs = [
    {
      label: 'GUI',
      description:
        "Enables the server's GUI control panel. Automatically disabled in environments without a desktop."
    },
    {
      label: 'Auto-Restart',
      description:
        'Automatically restarts the server after it crashes or is stopped. Press CTRL + C to exit the script.'
    }
  ];
</script>

<div class="grid grid-cols-2 gap-8">
  <NameInput  />
  <FlagsSelector />
  <div class="flex flex-col gap-2">
    {#each switchs as { label, description }}
      <SettingsCheckbox {label} {description} />
    {/each}
  </div>
  <RamSelector />
</div>
