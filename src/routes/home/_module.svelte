<style lang="postcss">
  .container {
    display: grid;
    grid-template-rows: min-content 1fr;
  }
  .content {
    display: grid;
    grid-template-columns: 180px 1fr;
    grid-template-rows: 1fr;
  }
</style>

<script lang="ts">
  import Header from '../../layouts/header.svelte';
  import Sidebar from '../../layouts/sidebar.svelte';
</script>

<main class="container">
  <Header />
  <div class="content">
    <Sidebar />
    <slot />
  </div>
</main>
