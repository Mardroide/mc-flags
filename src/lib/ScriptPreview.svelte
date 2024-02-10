<script lang="ts">
  import { Tabs } from "bits-ui";
  import Icon from "@iconify/svelte";

  const triggers = [
    {
      value: "linux / mac",
      label: "Linux / Mac",
      icon: "tabler:brand-debian",
      content: "a",
    },
    {
      value: "windows",
      label: "Windows",
      icon: "teenyicons:windows-outline",
      content: "b",
    },
    {
      value: "java",
      label: "Java",
      icon: "octicon:command-palette-16",
      content: "c",
    },
  ];
</script>

<Tabs.Root>
  <Tabs.List
    class="flex items-center w-fit border-[1px] border-gray-700 bg-[#2C2E33] divide-x-[1px] divide-gray-700 border-b-0"
  >
    {#each triggers as { value, label, icon }}
      <Tabs.Trigger {value} class="flex items-center gap-2 p-2">
        {#if icon}
          <Icon {icon} class="w-5 h-5" />
        {/if}
        {label}
      </Tabs.Trigger>
    {/each}
  </Tabs.List>
  {#each triggers as { value, content }}
    <Tabs.Content {value} class="p-2 bg-black border-[1px] border-gray-700">
      {content}
    </Tabs.Content>
  {/each}
</Tabs.Root>
