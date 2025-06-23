import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import React from 'react'
import {ScrollTrigger, SplitText} from "gsap/all";


gsap.registerPlugin(ScrollTrigger, SplitText);

const App = () => {
  return (
    <div className='flex-center'>
    <h1 className='text-3xl text-indigo-300'>Hello world</h1>
    Hello world</div>
  )
}

export default App