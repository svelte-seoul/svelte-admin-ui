import {SvelteComponent} from 'svelte';
import {render, type RenderResult} from '@testing-library/svelte';
import userEvent from '@testing-library/user-event';
import type {UserEvent} from '@testing-library/user-event/dist/types/setup';

export type Props<T = unknown> = {
    [Symbol.iterator](): Iterator<T>;
    [key: string]: unknown
};


export const setUpUser = (comp: typeof SvelteComponent, props?: Props): {user: UserEvent} & RenderResult=> {
    if(!props) {
        return {
            user: userEvent.setup(),
            ...render(comp),
        };
    }

    return {
        user: userEvent.setup(),
        ...render(comp, ...props),
    };
};