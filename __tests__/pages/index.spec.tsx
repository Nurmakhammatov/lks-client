import { render } from '@testing-library/react';
import StyledApp from 'components/pages/StyledApp';
import Index from 'pages/index';

test('render index page', () => {
  const { getByText } = render(
    <StyledApp>
      <Index />
    </StyledApp>
  );
  const helloWorldElement = getByText('Hello, World!');

  expect(helloWorldElement).toBeInTheDocument();
});
