import React from 'react';
import { Stack } from 'expo-router';
import { StickyNavbar } from '../components/StickyNavbar';
import { Footer } from '../components/Footer';
import { Provider } from 'react-redux';
import { store } from '../store';
import '../tailwind.css';

export default function RootLayout() {
  return (
    <Provider store={store}>
      <div className="flex flex-col min-h-screen">
        <StickyNavbar />
        <main className="flex-grow">
          <Stack />
        </main>
        <Footer />
      </div>
    </Provider>
  );
}
