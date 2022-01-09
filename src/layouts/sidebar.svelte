<style lang="postcss">
  .active {
    color: var(--link);
  }

  aside {
    border-right: 1px solid var(--border);
    padding: 40px 0;

    ul {
      list-style-type: none;
      margin: 0px;
      padding: 0px;

      display: grid;
      grid-template-rows: repeat(10, 40px);
      grid-gap: 10px;
      justify-content: center;
      justify-items: center;
    }
  }
</style>

<script lang="ts">
  import {isActive, url} from '@roxi/routify';
  import {_} from 'svelte-i18n';
</script>

<aside>
  <nav>
    <ul>
      <li>
        <a
          class={$isActive($url('/home/main')) ? 'active' : ''}
          href={$url('/home/main')}
        >
          Home
        </a>
      </li>
      <li>
        <a
          class={$isActive($url('/home/users')) ? 'active' : ''}
          href={$url('/home/users')}
        >
          Users
        </a>
      </li>
    </ul>
  </nav>
</aside>
