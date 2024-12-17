import React from 'react';
import './tailwind.css';
import { Provider } from 'react-redux';
import { store } from './store';
import { StickyNavbar } from './navigation/StickyNavbar';
import  HomeScreen  from './screens/HomeScreen';
import  { Footer }  from './components/Footer';

export default function App() {
  return (
    <Provider store={store}>
       <div className="-m-6 max-h-[768px] w-[calc(100%+48px)] overflow-scroll">
        <StickyNavbar />
        <HomeScreen />
        <Footer />
       </div>
    </Provider>
  );
}