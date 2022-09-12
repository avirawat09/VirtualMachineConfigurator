import { render, screen } from '@testing-library/react';
import App from './App';
import { AppProvider } from './context'


test('renders learn react link', () => {
  render(<AppProvider><App /></AppProvider>);
  // screen.debug();
  const linkElement = screen.getByText(/HVC/);
  expect(linkElement).toBeInTheDocument();
});
