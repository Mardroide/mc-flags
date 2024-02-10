<script lang="ts">
  import { Avatar } from "bits-ui";
  import OrgLogo from "/org.png"
</script>

<Avatar.Root class="w-9 h-9 rounded-sm border-[1px] border-gray-800">
  <Avatar.Image
    src={OrgLogo}
    alt="@mardroide"
    class="object-cover w-full h-full rounded-sm"
  />
  <Avatar.Fallback>MF</Avatar.Fallback>
</Avatar.Root>
