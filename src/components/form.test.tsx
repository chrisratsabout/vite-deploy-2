import { describe, test, expect,} from 'vitest'
import { fireEvent, render } from '@testing-library/react';
import Form from "./form.tsx";

describe('<Form />', () => {
  test('The input field and its props', () => {
    render(<Form />)
    const input = document.querySelector(
      'input'
    ) as HTMLInputElement | null;
    
    // input exists in the form component
    expect(input).toBeTruthy()
    
    // is empty
    expect(input?.textContent).toBe('')

    if (input) {
      // test the input text
      input.textContent = 'jane@doe.com'
      expect(input.textContent).toBe('jane@doe.com')

      // test the type prop
      expect(input.type).toBe('email')
      
      // test the name prop
      expect(input.name).toBe('email')

      // test the value prop
      fireEvent.change(input, {
        target: {
          value: 'john@doe.com'
        }
      })
      expect(input.value).toBe('john@doe.com')

      // test the required prop with the jest-dom
      expect(input).toBeRequired()
    }
  });
});
