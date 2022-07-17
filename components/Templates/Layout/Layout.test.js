import { render, screen } from '@testing-library/react';
import Layout from './index';

const config = {
  children: <p>Funca!</p>,
};

describe('Layout', () => {
  test('Render', () => {
    render(<Layout>{config.children}</Layout>);

    const main = screen.getByTestId('main');

    expect(main).toContainElement();
  });
});
