<script lang="ts">
  import {goto, url} from '@roxi/routify';
  import {admin} from '../stores/userStore';

  if ($admin) {
    $goto($url('/home/main'));
  } else {
    $goto($url('/auth/sign-in'));
  }
</script>
