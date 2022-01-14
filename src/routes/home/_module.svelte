<style lang="postcss">
  .container {
    display: grid;
    grid-template-rows: min-content 1fr;
  }
  .content {
    display: grid;
    grid-template-columns: min-content 1fr;
    grid-template-rows: 1fr;
  }
</style>

<script lang="ts">
  import Header from '../../layouts/header.svelte';
  import Sidebar from '../../layouts/sidebar.svelte';
  import {writable, derived} from 'svelte/store';
  import {MOBILE_SIZE} from '../../utils/constant';

  let isClosed = false;
  const main = writable<Element>();
  const width = derived<Readable<unknown>, number>(main, ($main, set) => {
    if (!$main) {
      return;
    }

    const observer = new ResizeObserver(([entry]) => {
      set(entry.contentRect.width);
    });

    observer.observe($main);

    return () => observer.disconnect();
  });

  width.subscribe((value) => {
    if (value > MOBILE_SIZE) {
      isClosed = false;
    } else {
      isClosed = true;
    }
  });
</script>

<main class="container" bind:this={$main}>
  <Header />
  <div class="content">
    <Sidebar
      isMobile={isClosed}
      on:opened={() => {
        isClosed = !isClosed;
      }}
    />
    <slot />
  </div>
</main>
