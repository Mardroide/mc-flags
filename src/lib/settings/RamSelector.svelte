<script lang="ts">
  import { z } from 'zod';
  import Icon from '@iconify/svelte';

  const schema = z.string().min(3).max(5);

  const validate = (inputValue: string) => {
    valid = schema.safeParse(inputValue).success;
  };

  let valid: boolean = true;
</script>

<div class="flex flex-col gap-1">
  <p>Ram</p>
  <div
    class={`flex items-center bg-[#2C2E33] px-2 rounded-sm ${valid ? null : 'border-2 border-red-500 text-red-500'}`}
  >
    <Icon icon="icon-park-outline:disk" class="text-xl" />
    <input
      type="text"
      value="1024"
      class="w-full bg-transparent p-2 outline-none"
      on:input={(e) => validate(e.target?.value)}
    />
  </div>
  <p class={`text-sm text-red-500 ${valid ? 'hidden' : null}`}>
    Amount of ram must be expresed in megabytes (MB) max 5 chars
  </p>
  <p class="text-sm text-gray-400">
    The amount of ram that the server will have. Minimum amount recommended is
    500MB.
  </p>
</div>
