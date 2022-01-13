<style lang="postcss">
  .header {
    padding: 10px 20px;
    font-size: 1rem;
    border-bottom: 1px solid var(--border);

    display: grid;
    grid-template-columns: repeat(2, 1fr);
    align-items: center;

    @media (--mobile) {
      grid-template-columns: 1fr;
      justify-items: center;
      padding: 20px 0px;
    }

    .logo {
      color: var(--text);
      font-size: 1.5rem;
      text-decoration: none;

      &:hover {
        color: var(--link);
      }
    }

    ul {
      list-style-type: none;
      margin: 0px;
      padding: 0px;

      display: grid;
      grid-template-columns: repeat(2, min-content);
      grid-gap: 30px;
      justify-content: end;

      @media (--mobile) {
        margin-top: 20px;
        justify-items: center;
      }
    }

    .link {
      position: relative;
      text-decoration: none;

      &::before {
        content: '';
        position: absolute;
        height: 3px;
        right: 0px;
        bottom: -3px;
        left: 0px;
      }

      &:hover {
        color: var(--link);
      }

      @media (min-width: 42em) {
        font-size: 1rem;
      }
    }

    .active {
      color: var(--link);
    }
  }
</style>

<script lang="ts">
  import {isActive, url} from '@roxi/routify';
  import {_} from 'svelte-i18n';
  import {destroyStorage} from '../utils/storage';

  const signOut = () => {
    destroyStorage('token');
    location.reload();
  };
</script>

<nav class="header">
  <a class="logo" href={$url('/home/main')}>Svelte-Admin-UI</a>
  <ul>
    <li>
      <a
        class="link"
        class:active={$isActive($url('/home/settings'))}
        href={$url('/home/settings')}
      >
        Settings
      </a>
    </li>
    <li>
      <!-- svelte-ignore a11y-invalid-attribute -->
      <a class="link" href="" on:click|preventDefault={signOut}>
        {$_('logout')}
      </a>
    </li>
  </ul>
</nav>
