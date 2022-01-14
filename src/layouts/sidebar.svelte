<style lang="postcss">
  .profile {
    margin: 15px 0px;
    padding: 15px;
  }

  aside {
    border-right: 1px solid var(--border);
    width: 200px;
    position: relative;
    transition: all 0.4s ease;

    ul {
      list-style-type: none;
      margin: 0px;
      padding: 0px;
      margin-top: 30px;

      display: grid;
      grid-template-rows: repeat(10, 40px);
      grid-gap: 10px;
      justify-content: center;
      justify-items: center;
    }

    .icon {
      cursor: pointer;
      position: absolute;
      top: 25px;
      right: 10px;
      width: 26px;
    }

    .active {
      color: var(--link);
    }
  }
  .open {
    width: 45px;
  }

  .open-list {
    display: none;
  }
</style>

<script lang="ts">
  import {isActive, url} from '@roxi/routify';
  import {svgHamburger} from '../utils/icons';
  import {_} from 'svelte-i18n';
  import {createEventDispatcher} from 'svelte';

  export let isMobile: boolean;

  const dispatch = createEventDispatcher();

  const onHandleOpened = () => {
    dispatch('opened');
  };
</script>

<aside class:open={isMobile}>
  <img
    src={svgHamburger}
    alt="hambuger"
    class="icon"
    on:click={onHandleOpened}
  />
  <div class:open-list={isMobile} class="profile">Profile</div>
  <nav class:open-list={isMobile}>
    <ul>
      <li>
        <a
          class:active={$isActive($url('/home/main'))}
          href={$url('/home/main')}
        >
          {$_('home')}
        </a>
      </li>
      <li>
        <a
          class:active={$isActive($url('/home/users'))}
          href={$url('/home/users')}
        >
          {$_('user')}
        </a>
      </li>
    </ul>
  </nav>
</aside>
