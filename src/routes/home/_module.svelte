<style lang="postcss">
  .container {
    display: grid;
    grid-template-rows: min-content 1fr;

    .content {
      display: grid;
      grid-template-columns: min-content 1fr;
      grid-template-rows: 1fr;
    }

    .main-content {
      overflow: auto;
    }
  }
</style>

<script lang="ts">
  import Header from '../../layouts/header.svelte';
  import Sidebar from '../../layouts/sidebar.svelte';
  import {writable, derived} from 'svelte/store';
  import {MOBILE_SIZE} from '../../utils/constant';

  const container = writable<Element>();
  const containerWidth = derived<Readable<unknown>, number>(
    container,
    ($container, set) => {
      if (!$container) {
        return;
      }

      const observer = new ResizeObserver(([entry]) => {
        set(entry.contentRect.width);
      });

      observer.observe($container);

      return () => observer.disconnect();
    },
  );

  $: isMobile = $containerWidth < MOBILE_SIZE;
</script>

<main class="container" bind:this={$container}>
  <Header />
  <div class="content">
    <Sidebar isMobile={isMobile} />
    <div class="main-content">
      <slot />
    </div>
  </div>
</main>
