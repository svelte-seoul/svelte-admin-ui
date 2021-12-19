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
    filter: invert(0.5);
  }

  .text {
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
  import {svgLock, svgLogo, svgMail} from '../utils/icons';
  import EditText from '../layouts/edittext.svelte';
  import Button from '../layouts/button.svelte';

  let loading = false;
  let email: string;
  let password: string;

  const handleLogin = async () => {
    // try {
    //   loading = true;
    //   const {error} = await supabase.auth.signIn({
    //     email,
    //     password,
    //   });
    //   if (error) {
    //     throw error;
    //   }
    // } catch (error) {
    //   console.log(error);
    // } finally {
    //   loading = false;
    // }
  };
</script>

<div class="container">
  <img class="logo" src={svgLogo} alt="logo" />
  <h3>{$_('sign-in.title')}</h3>
  <EditText
    containerStyle="margin-bottom: 8px"
    inputStyle="font-size: 14px;"
    type="email"
    placeholder="email@email.com"
  >
    <img slot="leftElement" class="icon" src={svgMail} alt="email" />
  </EditText>
  <EditText
    containerStyle="margin-bottom: 8px"
    inputStyle="font-size: 14px;"
    type="password"
    placeholder="********"
  >
    <img slot="leftElement" class="icon" src={svgLock} alt="lock" />
  </EditText>
  <Button on:click={handleLogin} primary disabled={loading} loading={loading}>
    <div class="text" style="font-weight: 500;">
      {$_('sign-in.login')}
    </div>
  </Button>
</div>
