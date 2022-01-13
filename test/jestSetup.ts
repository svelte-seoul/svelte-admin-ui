import '@testing-library/jest-dom';
import '../src/i18n';

jest.mock('@roxi/routify', () => {
    const SvelteStore = jest.requireActual('svelte/store')

    return {
        url: SvelteStore.readable(() => 'mockURL'),
        goto: SvelteStore.readable(() => 'mockGoto'),
    }
})