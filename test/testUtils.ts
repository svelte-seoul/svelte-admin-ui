import {SvelteComponent} from 'svelte';
import {render, type RenderResult} from '@testing-library/svelte';
import userEvent from '@testing-library/user-event';
import type {UserEvent} from '@testing-library/user-event/dist/types/setup';

export type Props = {
    [key: string]: unknown
};


export const setUpUser = (comp: typeof SvelteComponent, props?: Props): {user: UserEvent} & RenderResult=> {
    return {
        user: userEvent.setup(),
        ...render(comp, props),
    };
};