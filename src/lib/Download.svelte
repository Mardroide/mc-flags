<script lang="ts">
  import { Button } from 'bits-ui';
  import Icon from '@iconify/svelte';
  import { serverJar, serverRam } from '../store/store';
  import { get } from 'svelte/store';

  const handleDownload = () => {
    if (!get(serverJar).valid || !get(serverRam).valid) {
      console.log('No server jar or ram');
      return;
    }

    // TODO: Download start.sh
  };
</script>

<Button.Root
  class="flex items-center justify-center w-9 h-9 p-2 bg-green-500 rounded-sm"
  on:click={handleDownload}
>
  <Icon icon="material-symbols:download-sharp" class="w-6 h-6" />
</Button.Root>
