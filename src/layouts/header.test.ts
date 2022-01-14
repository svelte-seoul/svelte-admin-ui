import Header from './header.svelte';
import {getStorage} from '../utils/storage';
import {render} from '@testing-library/svelte';
import {setUpUser} from './../../test/testUtils';

describe('render test', () => {
    it('render without crashing', () => {
        const {container} = render(Header);

        expect(container).toMatchSnapshot();
    });
});

describe('interaction test', () => {
    it('should log out when a user click logout button', async () => {
        const {getAllByRole, user} = setUpUser(Header);

        const logoutATag = getAllByRole('link')[2];

        await user.click(logoutATag);

        expect(getStorage('token')).toBeNull();
    });
});
