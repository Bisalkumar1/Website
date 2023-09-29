import React, { useState } from "react";


const Contact=()=>{

const [data,newdata]=useState({
    FullName:"",
    MobileNumber:'',
    Email:'',
    Query:'',
});

const InputEvent=(event)=>{ 
const {name,value}=event.target;
newdata((preVal)=>{
    return {
        ...preVal,
        [name]:value,
    };
});

};

// const FormSubmit=(e)=>{
// e.preventDefault();
// alert(`My Name is ${data.FullName}.My mobile number is ${data.MobileNumber} and email is ${data.Email}, Here is What I have query about ${data.Query} `);

// };

const mapstyle={
    border:"0",
   
};
    return(
        <>
<div className="my-5">
    <h2 className="text-center font">Contact Us</h2>
</div>
<div className="map">
<iframe className="mb-3" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3482.024535237228!2d87.25253803284326!3d23.522815379614443!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f772f2f8b4e11d%3A0x82fac39ade3f7c32!2sSMART%20GYM!5e1!3m2!1sen!2sin!4v1689405562130!5m2!1sen!2sin" 
width="50%" 
height="400" 
 style={{mapstyle}} 
 allowFullScreen="" 
 loading="lazy" 
 referrerpolicy="no-referrer-when-downgrade">
</iframe>
</div>
<div className="container contact_div">
    <div className="row">
        <div className="col-md-6 col-10 mx-auto">
            <form  action="https://formspree.io/f/xpzgzgkj" method="POST">
            <div className="mb-3">
  <label for="exampleFormControlInput1" className="form-label">Enter Your Name</label>
  <input type="text" className="form-control" id="exampleFormControlInput1" name="FullName" value={data.FullName} onChange={InputEvent} placeholder="Your Full Name" required/>
</div>

<div className="mb-3">
  <label for="exampleFormControlInput1" className="form-label">Mobile Number</label>
  <input type="number" className="form-control" id="exampleFormControlInput1" name="MobileNumber" value={data.MobileNumber} onChange={InputEvent} placeholder="1234567890" required/>
</div>
 <div className="mb-3">
  <label for="exampleFormControlInput1" className="form-label">Email Address</label> 
  <input type="email" className="form-control" id="exampleFormControlInput1" name="Email" value={data.Email} onChange={InputEvent} placeholder="name@example.com"/>
</div>
<div className="mb-2">
  <label for="exampleFormControlTextarea1" className="form-label">Your Queries</label>
  <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" name="Query" value={data.Query} onChange={InputEvent} placeholder="Describe your Queries"></textarea>
</div>
 <div className="col-12">
    <button className="btn btn-outline-primary" type="submit" value="send">Submit form</button>
  </div>
            </form>
        </div>
    </div>
</div>
        </>
    );
};

export default Contact;