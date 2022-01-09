<script lang="ts">
  import {params} from "@roxi/routify";

  const userId = $params.id as string;

  let string = `This is <strong>User Page! - ${userId}</strong>`;
</script>

<p>{@html string}</p>
