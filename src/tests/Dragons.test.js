import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import Dragons from '../components/Dragons';
import store from '../redux/configureStore';

it('matches snapshot', () => {
  const tree = renderer.create(
    <Provider store={store}>
      <Dragons />
    </Provider>,
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
