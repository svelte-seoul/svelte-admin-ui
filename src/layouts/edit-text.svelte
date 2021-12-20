<!-- svelte-ignore css-unused-selector -->
<style lang="postcss">
  .edit-text {
    display: grid;
    grid-template-rows: 1fr min-content;
    grid-auto-flow: row;
    border: 1px solid var(--border, #3d3d3d);

    &:focus-within {
      border: 1px solid var(--text);
    }

    .container {
      box-sizing: border-box;
      border-radius: 4px;
      grid-auto-flow: column;

      filter: invert(0.5);

      &:focus-within {
        filter: var(--logo);
      }

      display: grid;
      grid-template-columns: min-content 1fr min-content;
      align-items: center;
    }

    input {
      background-color: transparent;
      color: white;
      caret-color: white;
      text-transform: none;
      font-size: var(--font-size, 14px);
      padding: 12px 16px;
      font-family: inherit;
      border: none;

      &:focus {
        outline: none;
      }

      &:-webkit-autofill {
        -webkit-box-shadow: 0 0 0 1000px var(--paper) inset !important;
        -webkit-text-fill-color: var(--text, 'black') !important;
      }
    }

    .errorText {
      color: red;
      font-size: var(--font-size, 14px);
      display: grid;
      justify-self: start;
    }
  }
</style>

<script lang="ts">
  import {createEventDispatcher} from 'svelte';

  export let placeholder = '';
  export let type = 'text';
  export let containerStyle = '';
  export let inputStyle = '';
  export let errorText = '';
  export let value = '';
  const dispatch = createEventDispatcher();
  // @ts-ignore
  const onChanged = (e) => {
    value = /^(number|range)$/.exec(type) ? +e.target.value : e.target.value;
    dispatch('changed', value);
  };
</script>

<div class="edit-text" style={containerStyle}>
  <div class="container">
    <slot name="leftElement"><div /></slot>
    <input
      style={inputStyle}
      type={type}
      placeholder={placeholder}
      on:input={onChanged}
    />
    <slot name="rightElement"><div /></slot>
  </div>
  <div class="errorText">
    <span style="margin-left: 15px">
      {errorText}
    </span>
  </div>
</div>
