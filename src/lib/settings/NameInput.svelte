<script lang="ts">
  import Icon from '@iconify/svelte';
  import { z } from 'zod';

  const schema = z.string().endsWith('.jar').min(4);

  const validate = (inputValue: string) => {
    valid = schema.safeParse(inputValue).success;
  };

  let valid: boolean = true;
</script>

<div class="flex flex-col gap-1">
  <p>Filename</p>
  <div
    class={`flex items-center bg-[#2C2E33] px-2 rounded-sm ${valid ? null : 'border-2 border-red-500 text-red-500'}`}
  >
    <Icon icon="bx:box" class="text-xl" />
    <input
      type="text"
      value="server.jar"
      class="w-full bg-transparent p-2 outline-none"
      on:input={(e) => validate(e.target?.value)}
    />
  </div>
  <p class={`text-sm text-red-500 ${valid ? 'hidden' : null}`}>
    Filename must end with .jar
  </p>
  <p class="text-sm text-gray-400">
    The file used to launch the server. Located in the same directory as your
    configuration files.
  </p>
</div>
