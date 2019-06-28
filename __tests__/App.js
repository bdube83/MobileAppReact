import 'react-native';
import React from 'react';
import App from '../App';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  const tree = renderer.create(
    <App />
  );
});

const initialState = Navigator.router.getStateForAction(initialAction);

describe('navigation', () => {
    it('navigator should navigate correctly', () => {
        expect(Navigator.router.getStateForAction(initialState, action)).toEqual({
            index: 1
        })
    })
});
