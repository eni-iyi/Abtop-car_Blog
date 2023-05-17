import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {v4 as uuidv4} from "uuid";
import { toast } from "react-toastify";

const Register = () => {
  const [name, setName] = useState("");
    const [address, setAddress] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [phoneNo, setPhoneNo] = useState("");

    const handleName = (e) => {
        setName(e.target.value)
    }
    const handleAddress = (e) => {
        setAddress(e.target.value)
    }
    const handleEmail = (e) =>{
        setEmail(e.target.value)
    }
    const handlePassword = (e) => {
        setPassword(e.target.value)
    }
    const handlePhoneNo = (e) => {
        setPhoneNo(e.target.value)
    }

    const handleSubmit = () => {
        console.log(name, address, email, password, phoneNo);

        const details = { id: uuidv4(), name, address, email, password, phoneNo} 

        if(!name || !address || !email || !password || !phoneNo) {
          toast.warning("All field required");
          return;
        }
    }
  return (
    <div>
         <div className='w-[400px] h-[100vh] mx-auto '>
            <h1 className='mt-[100px]'>AbTop</h1>
            <div className='w-[400px] h-[450px]  border-2 shadow-lg px-2 bg-black text-black rounded-lg'>
                <h3 className='text-white'>Welcome, please register your details to be able to access our resources</h3>
                <div className=''>
                    <input className='w-[350px] mt-[10px] rounded-md'
                    id='name'
                    name='name'
                    type='text'
                    placeholder='Name'
                    onChange={handleName}
                    />
                </div>
                <br /> 
                <div >
                    <input className='w-[350px] mt-[10px] rounded-md'
                    id='Address'
                    name='address'
                    type='text'
                    placeholder='Address'
                    onChange={handleAddress}
                    />
                </div>
                <br /> 
                <div >
                    <input className='w-[350px] mt-[10px] rounded-md'
                    id='email'
                    name='email'
                    type='text'
                    placeholder='Email'
                    onChange={handleEmail}
                    />
                </div>
                <br /> 
                <div>
                <input className='w-[350px] rounded-md'
                    id='password'
                    name='password'
                    type='password'
                    placeholder='password'
                    onChange={handlePassword}
                    />
                </div>
                <br />
                <div >
                    <input className='w-[350px] mt-[10px] rounded-md'
                    id='phoneNo'
                    name='phoneNo'
                    type='text'
                    placeholder='Phone No:'
                    onChange={handlePhoneNo}
                    />
                </div>
                <br /> 
                <div className='w-[200px] bg-white mx-auto rounded-md text-black'>
                <button className='text-center'onClick={handleSubmit}><span className='ml-[76px]'>SUBMIT</span></button>
                </div>
           
                <br />
                <Link to="/login">
                    <button className='w-[200px] bg-white mx-auto rounded-md text-black ml-[85px]'>Already registered ?</button>
                </Link>
            </div>
        </div>
    </div>
  )
}

export default Register