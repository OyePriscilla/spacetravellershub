import React from 'react';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import store from '../redux/configureStore';
import Footer from '../components/missions/footer';

it('Test if footer rendered', () => {
  const tree = renderer.create(
    <Provider store={store}>
      <Footer />
    </Provider>,
  );
  expect(tree).toMatchSnapshot();
});
