<script lang="ts">
  import Icon from '@iconify/svelte';
  import { z } from 'zod';
  import { serverRam } from '../store/store';

  let valid: boolean = true;
  let amount: string = '1024';

  const schema = z.number().min(500).max(1024 * 24);

  $: $serverRam.valid = valid = schema.safeParse(parseInt(amount)).success;
  $: $serverRam.amount = amount;
</script>

<div class="flex flex-col gap-1">
  <p>Ram</p>
  <div
    class={`flex items-center bg-[#2C2E33] px-2 rounded-sm ${valid ? null : 'border-2 border-red-500 text-red-500'}`}
  >
    <Icon icon="icon-park-outline:disk" class="text-xl" />
    <input
      type="text"
      class="w-full bg-transparent p-2 outline-none"
      bind:value={amount}
    />
  </div>
  <p class={`text-sm text-red-500 ${valid ? 'hidden' : null}`}>
    Amount of ram must be expresed in megabytes. Amount recommended is between 500 and 24.576.
  </p>
  <p class="text-sm text-gray-400">
    The amount of ram that the server will have. Minimum amount recommended is
    500MB.
  </p>
</div>
