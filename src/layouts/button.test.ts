import Button from './button.svelte';
import {render} from '@testing-library/svelte';

it('should render without error', () => {
  const testingLib = render(Button);

  expect(testingLib.container).toMatchSnapshot();
});
