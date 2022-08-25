import React from 'react';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import store from '../redux/configureStore';
import MissionHeader from '../components/missions/MissionHeader';

it('Test if footer rendered', () => {
  const tree = renderer.create(
    <Provider store={store}>
      <MissionHeader />
    </Provider>,
  );
  expect(tree).toMatchSnapshot();
});
