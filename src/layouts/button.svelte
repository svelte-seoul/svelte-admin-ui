<style lang="postcss">
  .button {
    background-color: var(--paper);
    color: var(--text);

    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    &:hover {
      cursor: pointer;
    }
  }

  .small {
    height: 32px;
    padding: 0px 12px;
    border-radius: 4px;
    border: none;
    color: var(--gray70);
    font-weight: bold;
    font-size: 1rem;
  }

  .medium {
    border: 1px solid var(--border);
    border-radius: 4px;
    padding: 0.5rem;
    height: 40px;

    &:hover {
      opacity: 0.7;
    }
  }

  .primary {
    background-color: var(--primary);
    color: white;
  }

  .secondary {
    background-color: var(--secondary);
    color: white;
  }

  .positive {
    background-color: var(--brand);
    color: white;
  }

  .negative {
    background-color: var(--danger);
    color: white;
  }

  .transparent {
    border: none;
    background-color: transparent;
    color: var(--text);

    &:active {
      background-color: transparent;
    }
  }

  .loader {
    border: 2px solid var(--background);
    border-top: 2px solid var(--primary);
    border-radius: 50%;
    width: 24px;
    height: 24px;
    animation: spin 1s linear infinite;
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
</style>

<script lang="ts">
  export let primary = false;
  export let secondary = false;
  export let positive = false;
  export let negative = false;
  export let transparent = false;
  export let size: 'small' | 'medium' = 'medium';
  export let type: 'submit' | undefined = undefined;
  export let style = '';
  export let text = '';
  export let disabled = false;
  export let loading = false;
</script>

<button
  class="button"
  class:primary
  class:secondary
  class:positive
  class:negative
  class:transparent
  class:small={size === 'small'}
  class:medium={size === 'medium'}
  type={type}
  style={style}
  disabled={disabled}
  on:click
>
  {#if loading}
    <div class="loader" data-testid="loader" />
  {:else}
    <slot>
      {#if text}
        <div data-testid="text">{text}</div>
      {/if}
    </slot>
  {/if}
</button>
