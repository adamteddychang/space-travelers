import React from 'react';
import renderer from 'react-test-renderer';
import { HashRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../Redux/configureStore';
import Navbar from '../Components/Navbar';

describe('Navbar Component Test', () => {
  it('Renders NavBar', () => {
    const app = renderer.create(
      <Provider store={store}>
        <Router>
          <Navbar />
        </Router>
      </Provider>,
    ).toJSON();
    expect(app).toMatchSnapshot();
  });
});
