import React from 'react';
import './tailwind.css';
import { Provider } from 'react-redux';
import { store } from './store';
import Navigator from './navigation/Navigator';
import { Button } from '@material-tailwind/react';

export default function App() {
  return (
    <Provider store={store}>
        <Navigator />
        <Button >Material Tailwind Button</Button>
    </Provider>
  );
}