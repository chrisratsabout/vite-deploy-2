import { describe, test, expect, it, vi } from 'vitest'
  import { render, screen, fireEvent, getByText } from '@testing-library/react'
  import userEvent  from '@testing-library/user-event'
  import { BrowserRouter } from 'react-router-dom'
  import App from './App'

  describe('<App />', () => {
    test('App mounts properly', () => {
      const wrapper = render(<App />, {wrapper: BrowserRouter})
      expect(wrapper).toBeTruthy()

      // Get by h1
      const h1 = wrapper.container.querySelector('h1')
      expect(h1?.textContent).toBe('Vite + React')

      // Get by text using the React testing library
      const text = screen.getByText(
        /Click on the Vite and React logos to learn more/i
      );
      expect(text.textContent).toBeTruthy()
    })

    it('Click the button', () => {
      const wrapper = render(<App />, {wrapper: BrowserRouter})
      const button = wrapper.container.querySelector(
        'button'
      ) as HTMLButtonElement;
      
      // button mounts with count in 0
      expect(button.textContent).toBe('count is 0')
      
      fireEvent(
        getByText(button, 'count is 0'),
        new MouseEvent('click', {
          bubbles: true
        }),
      )
      
      // The count hook is working
      expect(button.textContent).toBe('count is 1')
    })

    it('Click the Vite logo', async () => {
      // Example with the user event library
      render(<App />, {wrapper: BrowserRouter})
      const user = userEvent.setup()
  
      const spyAnchorTag = vi.spyOn(user, 'click') 
      await user.click(screen.getByAltText('Vite logo'))
      
      expect(spyAnchorTag).toHaveBeenCalledOnce()
    })

    it('Click the about router link', async () => {
      render(<App />, {wrapper: BrowserRouter})
  
      expect(screen.getByText('About')).toBeInTheDocument()
      
      const user = userEvent.setup()
      const about = vi.spyOn(user, 'click')
      const aboutLink = screen.getByText(/About/i)
  
      await user.click(aboutLink)
      expect(about).toHaveBeenCalledTimes(1)
    })
  });