import React from "react";

import Common from "./Common";
import web from '../src/images/image1.jpg'
const Home=()=>{
   
    return(
  <>
   <Common 
   name='Grow your Business with' 
   imgsrc={web} 
   visit='/about'
    btname="Get Started"/>
  </>
    );
};

export default Home;
