import React from 'react';
import {render} from '@testing-library/react-native';
import Text from '../Text';

describe('Text component testing', () => {
  it('Text component to be correct', () => {
    const {getByTestId, getByText} = render(<Text title="something" />);
    expect(getByTestId('something')).toBeTruthy();
    expect(getByText('something')).toBeTruthy();
  });
});
