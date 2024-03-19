<script lang="ts">
  import { Checkbox, Label } from 'bits-ui';
  import Icon from '@iconify/svelte';
  import { onDestroy } from 'svelte';
  import type { Writable } from 'svelte/store';

  export let label: string;
  export let description: string;
  export let writeable: Writable<{ enabled: boolean }>;
  let isChecked: boolean = false;

  const unsubscribe = writeable.subscribe((value) => {
    value.enabled = isChecked;
  });

  const handleCheckedChange = () => {
    writeable.update((value) => {
      value.enabled = isChecked;
      return value;
    });
  };

  onDestroy(unsubscribe);
</script>

<div class="flex flex-col gap-1">
  <div class="flex items-center gap-2">
    <Checkbox.Root
      class="flex items-center justify-center w-5 h-5 border-[1px] border-gray-700 bg-[#2C2E33] rounded-sm"
      onCheckedChange={() => {
        isChecked = !isChecked;
        handleCheckedChange();
      }}
    >
      <Checkbox.Indicator class="flex items-center justify-center w-5 h-5">
        {#if isChecked}
          <Icon icon="bx:check" class="text-green-500" />
        {/if}
      </Checkbox.Indicator>
    </Checkbox.Root>
    <Label.Root>{label}</Label.Root>
  </div>
  <p class="text-sm text-gray-400">
    {description}
  </p>
</div>
