<script lang="ts">
  import Icon from "@iconify/svelte";
</script>

<div class="flex flex-col gap-1">
  <p>Filename</p>
  <div class="flex items-center bg-[#2C2E33] px-2 rounded-sm">
    <Icon icon="bx:box" class="text-xl" />
    <input
      type="text"
      value="server.jar"
      class="w-full bg-transparent p-2 outline-none"
    />
  </div>
  <p class="text-sm text-gray-400">
    The file used to launch the server. Located in the same directory as your
    configuration files.
  </p>
</div>
