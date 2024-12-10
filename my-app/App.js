import React from 'react';
import './tailwind.css';
import { Provider } from 'react-redux';
import { store } from './store';
import { StickyNavbar } from './navigation/StickyNavbar';


export default function App() {
  return (
    <Provider store={store}>
        <StickyNavbar />
    </Provider>
  );
}