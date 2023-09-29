import React from "react";

import "../node_modules/bootstrap/dist/css/bootstrap.rtl.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";

import { Navigate, Route,Routes} from "react-router-dom";

import Home from "./Home";
import Contact from "./Contact";
import About from "./About";
import Service from "./Service";
import Navbar from "./Navbar";
import Footer from "./Footer";


const App=()=>{
    return(
        <>
        <Navbar/>
        <Routes>
        <Route  path="/" Component={Home}/>
         <Route exact path="/contact" Component={Contact}/>
         <Route exact path="/about" Component={About}/>
         <Route exact path="/service" Component={Service}/>
        <Route path="*" element={<Navigate to="/"/>}/>  {/*if doesn't find any path then directly will go to home page */}
</Routes>
<Footer/>
        </>
    );
};

export default App;