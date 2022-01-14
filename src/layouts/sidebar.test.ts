import SideBar from './sidebar.svelte';
import {render} from '@testing-library/svelte';
import {setUpUser} from './../../test/testUtils';

describe('render test', () => {
    it('should render without crash', () => {
        const {container} = render(SideBar, {isMobile: false});

        expect(container).toMatchSnapshot();
    });
});

describe('interaction test', () => {
    it('should change width when a user click icon', async () => {
        const {user, getByRole, getByTestId} = setUpUser(SideBar, {isMobile: false});

        const container = getByTestId('container');
        const icon = getByRole('img');

        const currentWidth = window.getComputedStyle(container).width;

        await user.click(icon);

        const changedWidth = window.getComputedStyle(container).width;

        expect(currentWidth).not.toBe(changedWidth);
    });
});