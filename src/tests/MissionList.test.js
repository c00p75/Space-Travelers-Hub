import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import MissionsList from '../components/Mission/MissionsList';
import store from '../redux/configureStore';

it('matches snapshot', () => {
  const tree = renderer.create(
    <Provider store={store}>
      <MissionsList />
    </Provider>,
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
