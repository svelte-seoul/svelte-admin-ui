<style lang="postcss">
  .container {
    color: var(--text);
    grid-template-columns: 1fr;
    grid-template-rows: 1fr;
    align-self: center;
    justify-self: center;
    width: 60%;

    display: grid;
    justify-content: center;
    align-content: center;
    grid-row-gap: 8px;

    :global(.edit-text) {
      margin-top: 6px;
    }

    :global(.button) {
      margin-top: 8px;
    }
  }

  .logo {
    filter: var(--logo);
    width: 20%;
    align-self: center;
    justify-self: center;
  }

  .icon {
    margin-left: 12px;
    width: 24px;
  }

  .black {
    color: var(--text-contrast);
  }

  h3 {
    margin-bottom: 60px;
    font-size: 28px;
    font-weight: 400;
  }
</style>

<script lang="ts">
  import {_} from 'svelte-i18n';
  import {svgLock, svgLogo, svgMail} from '../../utils/icons';
  import EditText from '../../layouts/edit-text.svelte';
  import Button from '../../layouts/button.svelte';
  import {admin} from '../../stores/userStore';
  import {goto, url} from '@roxi/routify';
  import {setStorage} from '../../utils/storage';

  let loading = false;
  let email: string;
  let password: string;

  if ($admin) {
    alert($_('already_signed_in'));

    $goto($url('/home/main'));
  }

  export const handleLogin = () => {
    if (!email || !password) {
      return;
    }

    loading = true;

    $admin = {
      displayName: 'admin',
      role: 'MAIN',
    };

    setStorage('token', 'temp token');

    $goto($url('/home/main'));
  };
</script>

<div class="container" data-testid="sign-in-container">
  <img class="logo" src={svgLogo} alt="logo" />
  <h3>{$_('sign-in.title')}</h3>
  <EditText type="email" placeholder="email@email.com" bind:value={email}>
    <img slot="leftElement" class="icon" src={svgMail} alt="email" />
  </EditText>
  <EditText type="password" placeholder="********" bind:value={password}>
    <img slot="leftElement" class="icon" src={svgLock} alt="lock" />
  </EditText>
  <Button on:click={handleLogin} primary disabled={loading} loading={loading}>
    <div class="black">
      {$_('sign-in.login')}
    </div>
  </Button>
  <Button
    on:click={() => {}}
    disabled={loading}
    loading={loading}
    text={$_('sign-in.sign-up')}
  />
  <Button
    style="margin-top: -2px; font-size: 14px; text-decoration: underline;"
    transparent
    on:click={() => {}}
    disabled={loading}
    loading={loading}
    text={$_('sign-in.look-around')}
  />
</div>
