import React from 'react';
import './tailwind.css';
import { Provider } from 'react-redux';
import { store } from './store';
import Navigator from './navigation/Navigator';
import Footer from './footer/Footer';
import { Button } from '@material-tailwind/react';

export default function App() {
  return (
    <Provider store={store}>

      <Footer/>
        <Navigator />
        <Button >Material Tailwind Button</Button>
    </Provider>
  );
}