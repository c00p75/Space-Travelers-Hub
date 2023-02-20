import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import Rockets from '../components/Rockets/Rockets';
import store from '../redux/configureStore';

it('matches snapshot', () => {
  const tree = renderer.create(
    <Provider store={store}>
      <Rockets />
    </Provider>,
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
