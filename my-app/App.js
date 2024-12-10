import React from 'react';
import { Provider } from 'react-redux';
import { store } from './store';
import Navigator from './navigation/Navigator';
import Footer from './footer/Footer';

export default function App() {
  return (
    <Provider store={store}>
      <Navigator />
      <Footer/>
    </Provider>
  );
}