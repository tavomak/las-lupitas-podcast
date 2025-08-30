import { render, screen } from '@testing-library/react';
import Modal from './index';

const config = {
  title: 'Modal Title',
  showModal: true,
};
test('Render content', () => {
  render(<Modal title={config.title} showModal={config.showModal} />);

  expect(screen.getByTestId('modal')).toBeInTheDocument();
});
