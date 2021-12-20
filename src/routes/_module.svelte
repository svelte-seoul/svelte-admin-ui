<style lang="postcss">
  .container {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: min-content 1fr;
  }

  .content {
    display: grid;
    grid-template-columns: 180px 1fr;
    grid-template-rows: 1fr;
  }
</style>

<script lang="ts">
  import {context, goto, url} from '@roxi/routify';
  import Header from '../layouts/header.svelte';
  import Sidebar from '../layouts/sidebar.svelte';
</script>

<div class="container">
  <Header context={$context} />
  <div class="content">
    <Sidebar context={$context} />
    <slot />
  </div>
</div>
