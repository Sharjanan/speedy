import React from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';

const ContactScreen = () => {
  return (
    <section class="p-6 lg:p-8">
  <div class="grid items-center grid-cols-12 p-8 bg-gray-900 rounded-2xl">
    <div class="text-left col-span-full lg:col-span-7 xl:col-span-8">
      <div class="relative flex flex-col bg-clip-border rounded-xl bg-transparent text-gray-700 shadow-md xl:pl-32">
        <div class="lg:max-w-lg">
          <h2 class="block antialiased tracking-normal font-sans font-semibold leading-[1.3] text-white mb-4 text-3xl lg:text-4xl">Contact Us</h2>
          <p class="block antialiased font-sans text-xl font-normal leading-relaxed text-white mb-9 opacity-70">Get in touch with us for any inquiries or reservations.</p>
          <p class="block antialiased font-sans text-xl font-normal leading-relaxed text-white opacity-70"></p>
          <div class="grid gap-6 my-16">
            <div class="flex items-center gap-4"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" data-slot="icon" class="w-6 h-6 text-white">
                <path fill-rule="evenodd" d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z" clip-rule="evenodd"></path>
              </svg>
              <p class="block antialiased font-sans text-base leading-relaxed text-inherit font-bold !text-white"></p>
            </div>
            <div class="flex items-center gap-4"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" data-slot="icon" class="w-6 h-6 text-white">
                <path d="M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67Z"></path>
                <path d="M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908Z"></path>
              </svg>
              <p class="block antialiased font-sans text-base leading-relaxed text-inherit font-bold !text-white"></p>
            </div>
            <div class="flex items-center gap-4"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" data-slot="icon" class="w-6 h-6 text-white">
                <path fill-rule="evenodd" d="M1.5 6.375c0-1.036.84-1.875 1.875-1.875h17.25c1.035 0 1.875.84 1.875 1.875v3.026a.75.75 0 0 1-.375.65 2.249 2.249 0 0 0 0 3.898.75.75 0 0 1 .375.65v3.026c0 1.035-.84 1.875-1.875 1.875H3.375A1.875 1.875 0 0 1 1.5 17.625v-3.026a.75.75 0 0 1 .374-.65 2.249 2.249 0 0 0 0-3.898.75.75 0 0 1-.374-.65V6.375Zm15-1.125a.75.75 0 0 1 .75.75v.75a.75.75 0 0 1-1.5 0V6a.75.75 0 0 1 .75-.75Zm.75 4.5a.75.75 0 0 0-1.5 0v.75a.75.75 0 0 0 1.5 0v-.75Zm-.75 3a.75.75 0 0 1 .75.75v.75a.75.75 0 0 1-1.5 0v-.75a.75.75 0 0 1 .75-.75Zm.75 4.5a.75.75 0 0 0-1.5 0V18a.75.75 0 0 0 1.5 0v-.75ZM6 12a.75.75 0 0 1 .75-.75H12a.75.75 0 0 1 0 1.5H6.75A.75.75 0 0 1 6 12Zm.75 2.25a.75.75 0 0 0 0 1.5h3a.75.75 0 0 0 0-1.5h-3Z" clip-rule="evenodd"></path>
              </svg>
              <p class="block antialiased font-sans text-base leading-relaxed text-inherit font-bold !text-white">Open Support Ticket </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="relative flex flex-col bg-clip-border text-gray-700 shadow-md w-full h-full px-8 py-12 text-left bg-gray-white col-span-full rounded-xl lg:col-span-5 lg:px-16 lg:py-40 xl:col-span-4">
      <form action="#">
        <div class="mb-4">
          <div class="relative w-full min-w-[200px] h-11 !min-w-full"><input type="text" name="Name" class="peer w-full h-full bg-transparent text-blue-gray-700 font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 border focus:border-2 border-t-transparent focus:border-t-transparent text-sm px-3 py-3 rounded-md !text-white border-white focus:border-white" placeholder=" " /><label class="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal !overflow-visible truncate peer-placeholder-shown:text-blue-gray-500 leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] before:content[&#x27; &#x27;] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[&#x27; &#x27;] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[4.1] !text-white peer-focus:text-white before:border-white peer-focus:before:!border-white after:border-white peer-focus:after:!border-white">Your Name </label></div>
        </div>
        <div class="mb-4">
          <div class="relative w-full min-w-[200px] h-11 !min-w-full"><input type="email" name="Email" class="peer w-full h-full bg-transparent text-blue-gray-700 font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 border focus:border-2 border-t-transparent focus:border-t-transparent text-sm px-3 py-3 rounded-md !text-white border-white focus:border-white" placeholder=" " /><label class="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal !overflow-visible truncate peer-placeholder-shown:text-blue-gray-500 leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] before:content[&#x27; &#x27;] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[&#x27; &#x27;] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[4.1] !text-white peer-focus:text-white before:border-white peer-focus:before:!border-white after:border-white peer-focus:after:!border-white">Your Email </label></div>
        </div>
        <div class="mb-4">
          <div class="relative w-full min-w-[200px] h-11 !min-w-full"><input type="textarea" name="Message" class="peer w-full h-full bg-transparent text-blue-gray-700 font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 border focus:border-2 border-t-transparent focus:border-t-transparent text-sm px-3 py-3 rounded-md !text-white border-white focus:border-white" placeholder=" " /><label class="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal !overflow-visible truncate peer-placeholder-shown:text-blue-gray-500 leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] before:content[&#x27; &#x27;] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[&#x27; &#x27;] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[4.1] !text-white peer-focus:text-white before:border-white peer-focus:before:!border-white after:border-white peer-focus:after:!border-white">Your Message </label></div>
        </div>
        <div class="inline-flex items-center"><label class="relative flex items-center cursor-pointer p-3 rounded-full -ml-2.5" for=":Ra:"><input type="checkbox" class="peer relative appearance-none w-5 h-5 border rounded-md border-blue-gray-200 cursor-pointer transition-all before:content[&#x27;&#x27;] before:block before:bg-blue-gray-500 before:w-12 before:h-12 before:rounded-full before:absolute before:top-2/4 before:left-2/4 before:-translate-y-2/4 before:-translate-x-2/4 before:opacity-0 hover:before:opacity-10 before:transition-opacity checked:bg-gray-900 checked:border-gray-900 checked:before:bg-gray-900" id=":Ra:" /><span class="text-white absolute top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 pointer-events-none opacity-0 peer-checked:opacity-100 transition-opacity"><svg xmlns="http://www.w3.org/2000/svg" class="h-3.5 w-3.5" viewBox="0 0 20 20" fill="currentColor" stroke="currentColor" stroke-width="1">
                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
              </svg></span></label><label class="text-gray-700 font-light select-none cursor-pointer mt-px" for=":Ra:">
            <p class="block antialiased font-sans text-base leading-relaxed text-inherit font-normal !text-gray-500">You agree to <a href="#" class="font-medium text-gray-700 hover:text-gray-900">Privacy Policy</a>.</p>
          </label></div><button class="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-sm py-3.5 px-7 rounded-lg bg-white text-blue-gray-900 shadow-md shadow-blue-gray-500/10 hover:shadow-lg hover:shadow-blue-gray-500/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none block w-full mt-6" type="button">send message</button>
      </form>
    </div>
  </div>
</section>
  );
}

export default ContactScreen;

