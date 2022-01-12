import {render, screen} from '@testing-library/svelte';

import Edittext from './edit-text.svelte';
import {setUpUser} from '../../test/testUtils';

describe('render and props test', () => {
  it('should render without error', () => {
    const testingLib = render(Edittext);

    expect(testingLib.container).toMatchSnapshot();
  });

  it('has placeholder props', () => {
   const {getByRole}  = render(Edittext, {placeholder: 'test'});

   expect(getByRole('textbox')).toHaveAttribute('placeholder', 'test');
  });

  it('has type props', () => {
    const {getByAltText}  = render(Edittext, {type: 'number'});

    expect(getByAltText('alt-input')).toHaveAttribute('type', 'number');
  });

  it('has containerStyle props', () => {
    const {getByTestId}  = render(Edittext, {containerStyle: "background-color: red"});

    const container = getByTestId('container');

    expect(container).toHaveStyle('background-color: red');
  });

  it('has inputStyle props', () => {
    const {getByAltText}  = render(Edittext, {inputStyle: "color: red"});

    const input = getByAltText('alt-input');

    expect(input).toHaveStyle('color: red');
  });

  it('has errorText props', () => {
    const {getByText}  = render(Edittext, {errorText: 'error message'});

    expect(getByText('error message')).toBeTruthy();
  });
});

describe('interaction test', () => {
  it('value props should be same with value which typed in input', async () => {
    const {user} = setUpUser(Edittext);

    const input = screen.getByAltText('alt-input');
    
    await user.type(input, '1234');

    expect(input).toHaveValue('1234');
  });
});