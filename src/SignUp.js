import React, { useState } from 'react'
import NavBar from './component/NavBar'
import "bootstrap/dist/css/bootstrap.min.css";
import './Login.css'
import { createUserWithEmailAndPassword, getAuth , updateProfile } from "firebase/auth";

import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBIcon
}
from 'mdb-react-ui-kit';

function SignUp() {
    const [email, setEmail]= useState("")
    const [password, setPasword]= useState("")
    const [phone, setPhone]= useState("")
    const [name, setName]= useState("")
    const SignUpFun =(e)=>{
        
        const auth = getAuth();
        e.preventDefault()
        console.log(name)
createUserWithEmailAndPassword(auth
    ,email, password)
  .then(response =>{

    return  updateProfile(auth.currentUser , {
        displayName:name,
        
    
    
      }
      )
  }
    
   ).catch(error=>{
    console.log(error.message)
  })
    


    }
    
  return (<>
  <NavBar/>
  
  
    <MDBContainer fluid className='Login'>
    <div className='downLogin'></div>

      <MDBRow className='d-flex justify-content-center align-items-center h-100'>
        <MDBCol col='12'>

          <MDBCard className='bg-dark text-white my-5 mx-auto' style={{borderRadius: '1rem', maxWidth: '400px'}}>
            <MDBCardBody className='p-5 d-flex flex-column align-items-center mx-auto w-100'>

              <h2 className="fw-bold mb-2 text-uppercase">Login</h2>
              <p className="text-white-50 mb-5">Please enter your login and password!</p>
              <form onSubmit={SignUpFun}>

              <MDBInput wrapperClass='mb-4 mx-5 w-100' labelClass='text-white' label='الإسم' id='formControlLg' type='text' size="lg" onChange={e => setName(e.target.value)} value={name}/>

              <MDBInput wrapperClass='mb-4 mx-5 w-100' labelClass='text-white' label='البريد الإلكتروني' id='formControlLg' type='email' size="lg" onChange={e => setEmail(e.target.value)} value={email}/>
              <MDBInput wrapperClass='mb-4 mx-5 w-100' labelClass='text-white' label='كلمة السر' id='formControlLg' type='password' size="lg" onChange={e => setPasword(e.target.value)} value={password}/>
              <MDBInput wrapperClass='mb-4 mx-5 w-100' labelClass='text-white' label='رقم الجوال' id='formControlLg' type='text' size="lg" onChange={e => setPhone(e.target.value)} value={phone}/>

              <p className="small mb-3 pb-lg-2"><a className="text-white-50" href="#!">Forgot password?</a></p>

              <MDBBtn className='mx-2 px-5 logMar' color='dark' size='lg' type='submit'>
                
        إنشاء حساب
      </MDBBtn></form>

              <div className='d-flex flex-row mt-3 mb-5'>
                <MDBBtn tag='a' color='none' className='m-3' style={{ color: 'white' }}> 
                  <MDBIcon fab icon='facebook-f' size="lg"/>
                </MDBBtn>

                <MDBBtn tag='a' color='none' className='m-3' style={{ color: 'white' }}>
                  <MDBIcon fab icon='twitter' size="lg"/>
                </MDBBtn>

                <MDBBtn tag='a' color='none' className='m-3' style={{ color: 'white' }}>
                  <MDBIcon fab icon='google' size="lg"/>
                </MDBBtn>
              </div>

              <div>
                <p className="mb-0">Don't have an account? <a href="#!" className="text-white-50 fw-bold">Sign Up</a></p>

              </div>
            </MDBCardBody>
          </MDBCard>

        </MDBCol>
      </MDBRow>

    </MDBContainer>
    </>
  );
}

export default SignUp;