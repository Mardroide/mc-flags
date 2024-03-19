<script lang="ts">
  import FlagsSelector from './FlagsSelector.svelte';
  import Checkbox from './Checkbox.svelte';
  import NameInput from './NameInput.svelte';
  import RamInput from './RamInput.svelte';
  import { guiCheckbox, autoStartCheckbox } from '../store/store';

  const switchs = [
    {
      label: 'GUI',
      description:
        "Enables the server's GUI control panel. Automatically disabled in environments without a desktop.",
      writeable: guiCheckbox
    },
    {
      label: 'Auto-Restart',
      description:
        'Automatically restarts the server after it crashes or is stopped. Press CTRL + C to exit the script.',
      writeable: autoStartCheckbox
    }
  ];
</script>

<div class="grid grid-cols-2 gap-8 max-sm:grid-cols-1">
  <NameInput />
  <FlagsSelector />
  <div class="flex flex-col gap-2">
    {#each switchs as { label, description, writeable }}
      <Checkbox {label} {description} {writeable} />
    {/each}
  </div>
  <RamInput />
</div>
