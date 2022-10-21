import { render, screen } from '@testing-library/react';
import InputSearch from '.';

describe('Input Search Component', () => {
  it('Input Search successfully rendered', () => {
    render(<InputSearch />);

    expect(
      screen.getAllByPlaceholderText('Search for a country...')
    ).toBeInTheDocument();
  });
});
