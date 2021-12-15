import React from "react";
import renderer from 'react-test-renderer';
import { Provider } from "react-redux";
import  store  from "../Redux/configureStore";
import MyProfile from "../Components/MyProfile/MyProfile";



describe('MyProfile Component test', ()=>{
  it ("Renders MyProfile",()=>{
    const app = renderer.create(
      <Provider store={store}>
        <MyProfile />

      </Provider>
    ).toJSON();
    expect(app).toMatchSnapshot();
  })
})