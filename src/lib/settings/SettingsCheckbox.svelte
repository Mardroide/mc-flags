<script lang="ts">
  import { Checkbox, Label } from 'bits-ui';
  import Icon from '@iconify/svelte';
  import { onDestroy } from 'svelte';
  import { guiCheckbox, autoStartCheckbox } from '../../store/store';

  export let label: string;
  export let description: string;
  let isChecked: boolean = false;

  const unsubscribeGui = guiCheckbox.subscribe((value) => {
    value.enabled = isChecked;
  });

  const unsubscribeAutoStart = autoStartCheckbox.subscribe((value) => {
    value.enabled = isChecked;
  });

  const handleCheckedChange = () => {
    guiCheckbox.update((value) => {
      value.enabled = isChecked;
      return value;
    });

    autoStartCheckbox.update((value) => {
      value.enabled = isChecked;
      return value;
    });
  };

  onDestroy(() => {
    unsubscribeGui();
    unsubscribeAutoStart();
  });
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
