import React,{useState,useRef} from "react";
import emailjs from '@emailjs/browser';

const Email = () => {
    const form = useRef();
    
    const[data,setData]=useState(false)
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_hds9zf7', 'template_f5xwwyn', form.current, 'XJi0WyJAgT_t9anAX')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
          e.target.reset()
      };

      const msgShow = (e) =>{
        setData("Succesfull..😈😈!")
      };
      
  return (
    <div className="maindiv">
    <div className="emdiv">
    <form style={{marginLeft:"50px"}} ref={form} onSubmit={sendEmail} className='myform'>
        
        <h1 style={{color:"green"}}>🤖Welcome to Aditya email services🤖</h1>
        {/* <label for="fname">First Name : </label> */}
        <input type="text" name="fname" placeholder="enter your name" className="inpt inpt1"/>
        <br />
        <br />
        <br />

        {/* <label for="mail">Email : </label> */}
        <input type="email" name="mail" placeholder="enter your email id" className="inpt inpt1"/>
        <br />
        <br />
        <br />

        <textarea name="message" placeholder="Send Message" cols="30" rows="10" className="inpt inptt">
        </textarea>
        <br />
        <br />
        <br />
        
        <button type="submit" onClick={msgShow}>send message</button>

        <h1 style={{marginLeft:"0px",marginTop:"20px",color:"green"}}>
        Status : <span style={{color:"red"}}>{data}</span>
      </h1>
        </form>

        
    </div>
      
    </div>
  );
};

export default Email;
