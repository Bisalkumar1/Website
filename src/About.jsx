import React from 'react';
import Common from "./Common";
import web from '../src/images/image6.jpg'

const About = () => {
  return (
    <>
 <Common 
        name='Welcome to About Page' 
        imgsrc={web} 
        visit='/contact'
         btname="Contact Us"/>
         </>
  );
}

export default About;