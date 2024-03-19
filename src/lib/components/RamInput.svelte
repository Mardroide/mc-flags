<script lang="ts">
  import Icon from '@iconify/svelte';
  import { z } from 'zod';
  import { serverRam } from '../store/store';
  import { onDestroy } from 'svelte';

  let valid: boolean = true;
  let amount: number = 1024;

  const schema = z.number();

  const unsubscribe = serverRam.subscribe((value) => {
    value.valid = valid;
    value.amount = amount;
  });

  const validate = (event: any) => {
    const inputValue: number = parseInt(event.target.value);
    const status: boolean = schema.safeParse(inputValue).success;

    if (inputValue < 500) {
      valid = false;
      return;
    }

    serverRam.update((value) => {
      value.valid = status;
      value.amount = inputValue;
      return value;
    });

    valid = status;
  };

  onDestroy(unsubscribe);
</script>

<div class="flex flex-col gap-1">
  <p>Ram</p>
  <div
    class={`flex items-center bg-[#2C2E33] px-2 rounded-sm ${valid ? null : 'border-2 border-red-500 text-red-500'}`}
  >
    <Icon icon="icon-park-outline:disk" class="text-xl" />
    <input
      type="text"
      value={amount}
      class="w-full bg-transparent p-2 outline-none"
      on:input={validate}
    />
  </div>
  <p class={`text-sm text-red-500 ${valid ? 'hidden' : null}`}>
    Amount of ram must be expresed in megabytes (MB). Minimum amount recommended.
  </p>
  <p class="text-sm text-gray-400">
    The amount of ram that the server will have. Minimum amount recommended is
    500MB.
  </p>
</div>
