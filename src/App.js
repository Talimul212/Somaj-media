/* eslint-disable no-unreachable */
import './App.css';
import { Toaster } from 'react-hot-toast';
import {  RouterProvider } from 'react-router-dom';
import router from './Router/Routers/Router';

function App() {
  
  return(
    <div className=' max-w-screen-xl mx-auto bg-sky-100' >
      
    <RouterProvider router={router}></RouterProvider>
    <Toaster></Toaster>
  </div>
  )
}

export default App;
