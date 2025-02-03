import React from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';

const PricingScreen = () => {
  return (
    <section class="px-8 py-24">
  <div class="container mx-auto text-center">
    <h2 class="block antialiased tracking-normal font-sans text-4xl font-semibold leading-[1.3] text-blue-gray-900 mb-4">Pricing Cards</h2>
    <p class="block antialiased font-sans text-base leading-relaxed text-inherit mb-8 font-normal !text-gray-500">Choose the perfect plan for your automotive business</p>
  </div>
  <div class="mt-24">
    <div class="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
      <div class="relative flex flex-col bg-clip-border rounded-xl bg-transparent text-gray-700 shadow-md border border-blue-gray-100">
        <div class="relative bg-clip-border mt-4 mx-4 rounded-xl overflow-hidden bg-transparent text-gray-700 shadow-none !m-0 p-6">
          <h5 class="block antialiased tracking-normal font-sans text-xl font-semibold leading-snug text-blue-gray-900 capitalize">Basic</h5>
          <p class="block antialiased font-sans text-sm leading-normal text-inherit font-normal !text-gray-500">Ideal for small automotive businesses</p>
          <h3 class="antialiased tracking-normal font-sans text-3xl font-semibold leading-snug text-blue-gray-900 flex gap-1 mt-4 mb-8">$29<span class="block antialiased tracking-normal font-sans text-base font-semibold leading-relaxed text-blue-gray-900 -translate-y-0.5 self-end opacity-70"></span></h3><button class="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-2 px-4 rounded-lg bg-gradient-to-tr from-blue-600 to-blue-400 text-white shadow-md shadow-blue-500/20 hover:shadow-lg hover:shadow-blue-500/40 active:opacity-[0.85] block w-full" type="button">buy now</button>
        </div>
        <div class="p-6 border-t border-blue-gray-50">
          <ul class="flex flex-col gap-3">
            <li class="flex items-center gap-3 text-gray-700"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" aria-hidden="true" data-slot="icon" class="h-4 w-4 text-blue-gray-900">
                <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 12.75 6 6 9-13.5"></path>
              </svg>
              <p class="block antialiased font-sans text-sm leading-normal font-normal text-inherit">100</p>
            </li>
            <li class="flex items-center gap-3 text-gray-700"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" aria-hidden="true" data-slot="icon" class="h-4 w-4 text-blue-gray-900">
                <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 12.75 6 6 9-13.5"></path>
              </svg>
              <p class="block antialiased font-sans text-sm leading-normal font-normal text-inherit">50</p>
            </li>
            <li class="flex items-center gap-3 text-gray-700"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" aria-hidden="true" data-slot="icon" class="h-4 w-4 text-blue-gray-900">
                <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 12.75 6 6 9-13.5"></path>
              </svg>
              <p class="block antialiased font-sans text-sm leading-normal font-normal text-inherit">500</p>
            </li>
            <li class="flex items-center gap-3 text-gray-700"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" aria-hidden="true" data-slot="icon" class="h-4 w-4 text-blue-gray-900">
                <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 12.75 6 6 9-13.5"></path>
              </svg>
              <p class="block antialiased font-sans text-sm leading-normal font-normal text-inherit">1-5</p>
            </li>
          </ul>
        </div>
      </div>
      <div class="relative flex flex-col bg-clip-border rounded-xl bg-transparent text-gray-700 shadow-md border border-blue-gray-100">
        <div class="relative bg-clip-border mt-4 mx-4 rounded-xl overflow-hidden bg-transparent text-gray-700 shadow-none !m-0 p-6">
          <h5 class="block antialiased tracking-normal font-sans text-xl font-semibold leading-snug text-blue-gray-900 capitalize">Pro</h5>
          <p class="block antialiased font-sans text-sm leading-normal text-inherit font-normal !text-gray-500">Perfect for growing automotive businesses</p>
          <h3 class="antialiased tracking-normal font-sans text-3xl font-semibold leading-snug text-blue-gray-900 flex gap-1 mt-4 mb-8">$49<span class="block antialiased tracking-normal font-sans text-base font-semibold leading-relaxed text-blue-gray-900 -translate-y-0.5 self-end opacity-70"></span></h3><button class="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-2 px-4 rounded-lg bg-gradient-to-tr from-blue-600 to-blue-400 text-white shadow-md shadow-blue-500/20 hover:shadow-lg hover:shadow-blue-500/40 active:opacity-[0.85] block w-full" type="button">buy now</button>
        </div>
        <div class="p-6 border-t border-blue-gray-50">
          <ul class="flex flex-col gap-3">
            <li class="flex items-center gap-3 text-gray-700"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" aria-hidden="true" data-slot="icon" class="h-4 w-4 text-blue-gray-900">
                <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 12.75 6 6 9-13.5"></path>
              </svg>
              <p class="block antialiased font-sans text-sm leading-normal font-normal text-inherit">500</p>
            </li>
            <li class="flex items-center gap-3 text-gray-700"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" aria-hidden="true" data-slot="icon" class="h-4 w-4 text-blue-gray-900">
                <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 12.75 6 6 9-13.5"></path>
              </svg>
              <p class="block antialiased font-sans text-sm leading-normal font-normal text-inherit">100</p>
            </li>
            <li class="flex items-center gap-3 text-gray-700"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" aria-hidden="true" data-slot="icon" class="h-4 w-4 text-blue-gray-900">
                <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 12.75 6 6 9-13.5"></path>
              </svg>
              <p class="block antialiased font-sans text-sm leading-normal font-normal text-inherit">1000</p>
            </li>
            <li class="flex items-center gap-3 text-gray-700"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" aria-hidden="true" data-slot="icon" class="h-4 w-4 text-blue-gray-900">
                <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 12.75 6 6 9-13.5"></path>
              </svg>
              <p class="block antialiased font-sans text-sm leading-normal font-normal text-inherit">6-10</p>
            </li>
          </ul>
        </div>
      </div>
      <div class="relative flex flex-col bg-clip-border rounded-xl bg-transparent text-gray-700 shadow-md border border-blue-gray-100">
        <div class="relative bg-clip-border mt-4 mx-4 rounded-xl overflow-hidden bg-transparent text-gray-700 shadow-none !m-0 p-6">
          <h5 class="block antialiased tracking-normal font-sans text-xl font-semibold leading-snug text-blue-gray-900 capitalize">Premium</h5>
          <p class="block antialiased font-sans text-sm leading-normal text-inherit font-normal !text-gray-500">Tailored for large automotive businesses</p>
          <h3 class="antialiased tracking-normal font-sans text-3xl font-semibold leading-snug text-blue-gray-900 flex gap-1 mt-4 mb-8">$99<span class="block antialiased tracking-normal font-sans text-base font-semibold leading-relaxed text-blue-gray-900 -translate-y-0.5 self-end opacity-70"></span></h3><button class="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-2 px-4 rounded-lg bg-gradient-to-tr from-blue-600 to-blue-400 text-white shadow-md shadow-blue-500/20 hover:shadow-lg hover:shadow-blue-500/40 active:opacity-[0.85] block w-full" type="button">buy now</button>
        </div>
        <div class="p-6 border-t border-blue-gray-50">
          <ul class="flex flex-col gap-3">
            <li class="flex items-center gap-3 text-gray-700"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" aria-hidden="true" data-slot="icon" class="h-4 w-4 text-blue-gray-900">
                <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 12.75 6 6 9-13.5"></path>
              </svg>
              <p class="block antialiased font-sans text-sm leading-normal font-normal text-inherit">Unlimited</p>
            </li>
            <li class="flex items-center gap-3 text-gray-700"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" aria-hidden="true" data-slot="icon" class="h-4 w-4 text-blue-gray-900">
                <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 12.75 6 6 9-13.5"></path>
              </svg>
              <p class="block antialiased font-sans text-sm leading-normal font-normal text-inherit">200</p>
            </li>
            <li class="flex items-center gap-3 text-gray-700"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" aria-hidden="true" data-slot="icon" class="h-4 w-4 text-blue-gray-900">
                <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 12.75 6 6 9-13.5"></path>
              </svg>
              <p class="block antialiased font-sans text-sm leading-normal font-normal text-inherit">2000</p>
            </li>
            <li class="flex items-center gap-3 text-gray-700"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" aria-hidden="true" data-slot="icon" class="h-4 w-4 text-blue-gray-900">
                <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 12.75 6 6 9-13.5"></path>
              </svg>
              <p class="block antialiased font-sans text-sm leading-normal font-normal text-inherit">11+</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</section>
  );
}

export default PricingScreen;

