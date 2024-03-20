<script lang="ts">
  import Icon from '@iconify/svelte';
  import { z } from 'zod';
  import { serverJar } from '../store/store';

  let valid: boolean = true;
  let fileName: string = 'server.jar';

  const schema = z.string().min(5).max(10).endsWith('.jar');

  $: $serverJar.valid = valid = schema.safeParse(fileName).success;
  $: $serverJar.name = fileName;
</script>

<div class="flex flex-col gap-1">
  <p>Filename</p>
  <div
    class={`flex items-center bg-[#2C2E33] px-2 rounded-sm ${valid ? null : 'border-2 border-red-500 text-red-500'}`}
  >
    <Icon icon="bx:box" class="text-xl" />
    <input
      type="text"
      class="w-full bg-transparent p-2 outline-none"
      bind:value={fileName}
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
