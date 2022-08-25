import React from 'react';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import store from '../redux/configureStore';
import Myprofile from '../components/myProfile/myProfile';

it('Test if MyProfile rendered', () => {
  const tree = renderer.create(
    <Provider store={store}>
      <Myprofile />
    </Provider>,
  );
  expect(tree).toMatchSnapshot();
});
