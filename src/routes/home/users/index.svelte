<style lang="postcss">
  .container {
    padding: 60px;

    display: grid;
  }

  table {
    display: grid;
    border-collapse: collapse;
    grid-auto-rows: min-content;
    min-width: 100%;
    /* These are just initial values which are overriden using JavaScript when a column is resized */
    grid-template-columns:
      minmax(150px, 1fr)
      minmax(150px, 1.67fr)
      minmax(150px, 1.67fr)
      minmax(150px, 1.67fr)
      minmax(150px, 1.67fr)
      minmax(150px, 1.67fr);

    thead,
    tbody,
    tr {
      display: contents;
      cursor: pointer;
    }

    th,
    td {
      padding: 15px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;

      justify-items: start;
    }

    th {
      position: sticky;
      top: 0;
      background: var(--border);
      text-align: left;
      font-weight: normal;
      font-size: 1.1rem;
      color: var(--text);
      position: relative;
    }

    th:last-child {
      border: 0;
    }

    .resize-handle {
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      background: black;
      opacity: 0;
      width: 3px;
      cursor: col-resize;
    }

    td {
      padding-top: 10px;
      padding-bottom: 10px;
      color: #808080;
      text-align: left;
    }

    tr:nth-child(even) td {
      background: #f8f6ff;
    }
  }
</style>

<script lang="ts">
  import {url} from '@roxi/routify';

  type User = {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    street: string;
    country: string;
  };

  const users: User[] = [
    {
      id: '00001',
      firstName: 'Lani',
      lastName: 'Ovendale',
      email: 'Email',
      street: 'Street',
      country: 'United Kingdom',
    },
    {
      id: '00002',
      firstName: 'Israel',
      lastName: 'Tassel',
      email: 'itassell1@ow.ly',
      street: '245 Merchant Circle',
      country: 'Macedonia',
    },
    {
      id: '00003',
      firstName: 'Eveleen',
      lastName: 'Mercer',
      email: 'emercer2@ow.ly',
      street: '70700 Kipling Pass',
      country: 'Portugal',
    },
  ];

  const handleClick = (user: User) => {
    location.href = $url('/home/users/[id]', {id: user.id});
  };
</script>

<div class="container">
  <table>
    <thead>
      <tr>
        <th data-type="numeric">ID <span class="resize-handle" /></th>
        <th data-type="text-short">First name <span class="resize-handle" /></th
        >
        <th data-type="text-short">Last name <span class="resize-handle" /></th>
        <th data-type="text-short">Email <span class="resize-handle" /></th>
        <th data-type="text-long">Street <span class="resize-handle" /></th>
        <th data-type="text-short">Country <span class="resize-handle" /></th>
      </tr>
    </thead>
    <tbody>
      {#each users as user}
        <tr on:click={() => handleClick(user)}>
          <td>{user.id}</td>
          <td>{user.firstName}</td>
          <td>{user.lastName}</td>
          <td>{user.email}</td>
          <td>{user.street}</td>
          <td>{user.country}</td>
        </tr>
      {/each}
    </tbody>
  </table>
</div>
