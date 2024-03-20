<script lang="ts">
  import { Tabs } from 'bits-ui';
  import Icon from '@iconify/svelte';
  import {
    serverJar,
    serverRam,
    guiCheckbox,
    serverFlags
  } from '../store/store';

  const triggers = [
    {
      label: 'Linux / Mac',
      icon: 'tabler:brand-debian'
    },
    {
      label: 'Windows',
      icon: 'teenyicons:windows-outline'
    }
  ];

  let selected: string = triggers[0].label;
</script>

<Tabs.Root>
  <Tabs.List
    class="flex items-center w-fit border-[1px] border-gray-700 bg-[#2C2E33] divide-x-[1px] divide-gray-700 border-b-0"
  >
    {#each triggers as { label, icon }}
      <Tabs.Trigger
        value={label}
        class={`flex items-center gap-2 p-2 ${selected === label ? 'bg-black' : ''}`}
        on:click={() => (selected = label)}
      >
        <Icon {icon} class="w-5 h-5" />
        {label}
      </Tabs.Trigger>
    {/each}
  </Tabs.List>
  {#each triggers as { label }}
    <Tabs.Content
      value={label}
      class="p-2 bg-black border-[1px] border-gray-700"
    >
      <div>
        {#if label === 'Linux / Mac'}
          <p>#!/bin/bash</p>
        {/if}

        java -Xms{$serverRam.amount}M -Xmx{$serverRam.amount}M

        {#if $serverFlags === 'velocity'}
          -XX:+UseG1GC -XX:G1HeapRegionSize=4M -XX:+UnlockExperimentalVMOptions
          -XX:+ParallelRefProcEnabled -XX:MaxInlineLevel=15
        {/if}

        -jar {$serverJar.name}
        {$guiCheckbox ? '' : '--nogui'}
      </div>
    </Tabs.Content>
  {/each}
</Tabs.Root>
