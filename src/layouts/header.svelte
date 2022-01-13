<style lang="postcss">
  .active {
    color: var(--link);
  }

  nav {
    padding: 10px;
    font-size: 1rem;
    border-bottom: 1px solid var(--border);

    @media (--mobile) {
      padding: 20px;
      background-color: red;
    }

    ul {
      list-style-type: none;
      margin: 0px;
      padding: 0px;

      display: grid;
      grid-template-columns: repeat(3, 100px);
      grid-gap: 10px;
      justify-content: center;
      justify-items: center;

      @media (min-width: 600px) {
        grid-template-columns: 1fr repeat(3, fit-content(50px));
        grid-gap: 20px;
        justify-items: end;
      }

      li:nth-child(1) {
        grid-column: 1 / 4;

        @media (min-width: 600px) {
          grid-column: 1 / 2;
          justify-self: start;
        }
      }
    }

    a {
      position: relative;
      text-decoration: none;
      pointer: cursor;

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

<nav>
  <ul>
    <li>
      <a class={$isActive($url('/home')) ? 'active' : ''} href={$url('/home')}>
        Home
      </a>
    </li>
    <li>
      <a
        class={$isActive($url('/home/settings')) ? 'active' : ''}
        href={$url('/home/settings')}
      >
        Settings
      </a>
    </li>
    <li>
      <!-- svelte-ignore a11y-invalid-attribute -->
      <a href="" on:click|preventDefault={signOut}>
        {$_('logout')}
      </a>
    </li>
  </ul>
</nav>
