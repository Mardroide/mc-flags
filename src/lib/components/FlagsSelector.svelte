<script lang="ts">
  import { Select } from 'bits-ui';
  import Icon from '@iconify/svelte';
  import { serverFlags } from '../store/store';

  const flags = [
    { name: 'None', value: 'none' },
    { name: 'Velocity & Waterfall', value: 'velocity' }
  ];
</script>

<div class="flex flex-col gap-1">
  <p>Flags</p>
  <Select.Root
    items={flags}
    onSelectedChange={(e) => ($serverFlags = e?.value || 'none')}
  >
    <Select.Trigger class="flex items-center bg-[#2C2E33] p-2 rounded-sm">
      <div class="flex items-center justify-between w-full">
        <Select.Value placeholder="None" />
        <Icon icon="bx:flag" class="text-xl" />
      </div>
    </Select.Trigger>
    <Select.Content class="mt-2 bg-[#2C2E33] rounded-sm">
      {#each flags as { name, value }}
        <Select.Item
          {value}
          label={name}
          class="flex items-center justify-between p-2 hover:bg-[#373a40] cursor-pointer"
        >
          {name}
          <Select.ItemIndicator asChild={false}>
            <Icon icon="bx:check" class="text-green-500" />
          </Select.ItemIndicator>
        </Select.Item>
      {/each}
    </Select.Content>
    <Select.Input name="FlagsSelector" />
  </Select.Root>
</div>
