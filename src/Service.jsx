import React, { useState } from "react";
import Cards from "./Cards";
import Sdata from "./Sdata";


const Service=()=>{

const [filteredItem,setfilteredItem]=useState(Sdata);

const handlechange=(e)=>{
setfilteredItem(Sdata.filter((val)=>(val.title.indexOf(e.target.value)>-1)))
}

    return(
        <>
<div className="my-5">
    <h1 className="text-center">Our Services</h1>
    <div style={{textAlign:"center"}}> <input type="text" style={{textAlign:"center"}} placeholder="Search" onChange={handlechange}/></div>

</div>


<div className="container-fluid mb-5">
    <div className="row">
        <div className="col-10 mx-auto">
            <div className="row gy-3">
           {
            filteredItem.map((val,ind)=>{
                return <Cards 
                key={ind}  
                    imgsrc={val.imgsrc} 
                    title={val.title}
                    
                /> 
            })   
           }

            </div>
        </div>
    </div>
</div>
        </>
    );
};

export default Service;