import {destroyStorage, getStorage, setStorage} from '../../utils/storage';

import SignIn from './sign-in.svelte';
import type {ThemeStore} from 'svelte-theme';
import { getContext } from 'svelte';
import {render} from '@testing-library/svelte';
import {setUpUser} from '../../../test/testUtils';

describe('render test', () => {
    it('should render without crashing', () => {
        const testingLib = render(SignIn);

        expect(testingLib).toMatchSnapshot();
    });
});

describe('interaction test', () => {
    beforeEach(() => {
        destroyStorage('token');
    });
    
    it('should login when email or password are typed', async () => {
        const {user, getByPlaceholderText, getAllByRole} = setUpUser(SignIn);
    
        const emailInput = getByPlaceholderText('email@email.com');
        const passwordInput = getByPlaceholderText('********');
        const loginButton = getAllByRole('button')[0];

        await user.type(emailInput, 'test');
        await user.type(passwordInput, 'psw');

        await user.click(loginButton);

        expect(getStorage('token')).toBe('temp token')
    });

    it('should redirect to main page when a user already logged in', () => {
        const mockFn = jest.fn();
        window.alert = mockFn; 
        setStorage('token', 'test token');

        render(SignIn);

        expect(mockFn).toBeCalled();
    });
    
    it('should change theme type when a user types [ctrlKey] + .', async () => {
        const {user, getByTestId} = setUpUser(SignIn);

        const container = getByTestId('sign-in-container');

        const currentBackgroundColor = window.getComputedStyle(container);

        await user.keyboard('{ctrlKey>}{.}');

        expect(currentBackgroundColor).not.toEqual(window.getComputedStyle(container))
    });
});
