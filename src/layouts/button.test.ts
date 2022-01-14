import Button from './button.svelte';
import {render} from '@testing-library/svelte';
import {setUpUser} from './../../test/testUtils';

describe('render and props test', () => {
  it('should render without error', () => {
    const testingLib = render(Button);
  
    expect(testingLib.container).toMatchSnapshot();
  });

  it('should activate the class when props(primary, secondary, positive, negative, transparent) is true', () =>{
    const {getByRole} = render(Button, {primary: true});

    expect(getByRole('button')).toHaveClass('primary');
  });

  it('should change the size according to props - size(small, medium)', () => {
    const {getByRole} = render(Button, {size: 'small'});

    expect(getByRole('button')).toHaveStyle('height: 32px');
  });

  it('should render loader when loading props is true', () => {
    const {getByTestId} = render(Button, {loading: true});

    expect(getByTestId('loader')).toBeTruthy();
  });

  it('should render text inside a button according to text props', () => {
    const {getByText} = render(Button, {text: 'button text'});

    expect(getByText('button text')).toBeTruthy();
  });
});


describe('interaction test', () => {
  it('should call a function when a user clicks the button', async () => {
    const {getByRole, component, user} = setUpUser(Button);
    const button = getByRole('button');
    const mockFn = jest.fn();
    
    component.$on('click', mockFn);
  
    await user.click(button);
  
    expect(mockFn).toHaveBeenCalledTimes(1);
  });

  it('should be disabled when disabled props is true', async () => {
    const {getByRole, component, user} = setUpUser(Button, {disabled: true});
    const button = getByRole('button');
    const mockFn = jest.fn();

    component.$on('click', mockFn);

    await user.click(button);

    expect(mockFn).not.toHaveBeenCalled();
  });
});
