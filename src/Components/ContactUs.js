import React, { useRef } from 'react'
import Input from './Input'
import classes from './ContactUs.module.css'

const ContactUs = () => {
    const userName = useRef();
    const emailId = useRef();
    const phoneNumber = useRef()

    const submitHandler = async(event)=>{
        event.preventDefault()
        const userDetail = {
            userName:userName.current.value,
            emailId:emailId.current.value,
            phoneNumber:phoneNumber.current.value,
        }
        console.log(userDetail)
        const response = await fetch('https://react-http-c5d67-default-rtdb.firebaseio.com/userDetail.json',{
            method:'POST',
            body:JSON.stringify(userDetail),
            headers:{
                'Content-Type':'application/json'
            }
        })
        const data = await response.json()
    }

  return (
    <form onSubmit={submitHandler} className={classes.form} >
     <Input label={'Name'} ref = {userName} />
     <Input label={'E-mail'} ref = {emailId}/>
     <Input label={'Phone Number'} ref = {phoneNumber}/>
     <button>Submit</button>
    </form>
  )
}

export default ContactUs