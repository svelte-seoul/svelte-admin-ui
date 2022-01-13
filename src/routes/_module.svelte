<script lang="ts">
  import {goto, url} from '@roxi/routify';
  import {admin} from '../stores/userStore';
  import {getStorage} from '../utils/storage';

  const shouldRedirect = (): boolean => {
    const ignorePath = ['/auth/sign-in', '/auth/sign-up'];
    const currentPath = location.pathname;

    return !ignorePath.includes(currentPath);
  };

  $: if (!$admin) {
    if (getStorage('token')) {
      $admin = {
        displayName: 'admin',
        role: 'MAIN',
      };

      $goto($url('/home/main'));
    } else if (shouldRedirect()) {
      $goto($url('/auth/sign-in'));
    }
  }
</script>

<slot />
