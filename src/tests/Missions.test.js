import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import store from '../Redux/configureStore';
import Missions from '../Components/Missions';

describe('Mission Component test', () => {
  it('Renders Mission Row', () => {
    const app = renderer.create(
      <Provider store={store}>
        <Missions />

      </Provider>,
    ).toJSON();
    expect(app).toMatchSnapshot();
  });
});
