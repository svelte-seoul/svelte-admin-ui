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
    // eslint-disable-next-line @typescript-eslint/unbound-method
    const {reload} = window.location;

    beforeAll(() => {
      Object.defineProperty(window, 'location', {
        writable: true,
        value: {reload: jest.fn()},
      });
    });

    afterAll(() => {
      window.location.reload = reload;
    });

    it('should log out when a user click logout button', async () => {
        const {getAllByRole, user} = setUpUser(Header);

        const logoutATag = getAllByRole('link')[2];

        await user.click(logoutATag);

        expect(getStorage('token')).toBeNull();
        // eslint-disable-next-line @typescript-eslint/unbound-method
        expect(window.location.reload).toHaveBeenCalledTimes(1);
    });
});
