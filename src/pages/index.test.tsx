import { describe, expect, it } from 'bun:test';
import { render } from 'brisa/test';
import Home from '.';

describe('Index', () => {
  it('should render "Welcome to Brisa"', async () => {
    const { container } = await render(<Home />);

    expect(container).toContainTextContent('Welcome to Brisa');
  });
});
