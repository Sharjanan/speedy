import React from 'react';
import './tailwind.css';
import { Provider } from 'react-redux';
import { store } from './store';
import { StickyNavbar } from './components/StickyNavbar';
import  HomeScreen  from './screens/HomeScreen';
import  { Footer }  from './components/Footer';
import { motion } from "framer-motion";

export default function App() {
  return (
    <Provider store={store}>
       <div className="-m-6 max-h w-[calc(100%+48px)]">
        
        <StickyNavbar />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <HomeScreen />
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <Footer />
        </motion.div>
       </div>
    </Provider>
  );
}