<script lang="ts">
  import { Tabs } from 'bits-ui';
  import Icon from '@iconify/svelte';
  import { content } from '../store/store';
  import { onDestroy } from 'svelte';

  const triggers = [
    {
      label: 'Linux / Mac',
      icon: 'tabler:brand-debian'
    },
    {
      label: 'Windows',
      icon: 'teenyicons:windows-outline'
    },
    {
      label: 'Java',
      icon: 'octicon:command-palette-16'
    }
  ];

  let selected: string = triggers[0].label.toLowerCase();
  let previewContent: string;

  const unsubscribe = content.subscribe((value) => {
    previewContent = value;
  });

  onDestroy(unsubscribe);
</script>

<Tabs.Root>
  <Tabs.List
    class="flex items-center w-fit border-[1px] border-gray-700 bg-[#2C2E33] divide-x-[1px] divide-gray-700 border-b-0"
  >
    {#each triggers as { label, icon }}
      <Tabs.Trigger
        value={label.toLowerCase()}
        class={`flex items-center gap-2 p-2 ${selected === label.toLowerCase() ? 'bg-black' : ''}`}
        on:click={() => {
          selected = label.toLowerCase();
        }}
      >
        {#if icon}
          <Icon {icon} class="w-5 h-5" />
        {/if}
        {label}
      </Tabs.Trigger>
    {/each}
  </Tabs.List>
  {#each triggers as { label }}
    <Tabs.Content
      value={label.toLowerCase()}
      class="p-2 bg-black border-[1px] border-gray-700"
    >
      {previewContent}
    </Tabs.Content>
  {/each}
</Tabs.Root>
