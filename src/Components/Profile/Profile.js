import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot} from '@fortawesome/free-solid-svg-icons';
import myImage from '../../Photos/me.png'
import React, { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Profile = ({exerciseTime}) => {
const second = [
    {
        label:'10s',
        value:'10'
    },
    {
        label:'20s',
        value:'20'
    },
    {
        label:'30s',
        value:'30'
    },
    {
        label:'40s',
        value:'40'
    },
    {
        label:'50s',
        value:'50'
    },
]

const [time,setTime]=useState(0);

const notify = () => toast("Task Completed!");

const addToDb = (value) => {
    setTime(value)
    localStorage.setItem('exerciseTime', value);
}
useEffect(()=>{
    const exercise = localStorage.getItem('exerciseTime');
    setTime(exercise);
},[])

    return (
        <>
        <div className='bg-white p-3 h-100'>
            <div className='d-flex align-items-center gap-2 mt-5'>
                <img className='rounded-pill' src={myImage} width={42} height={42} alt="" />
                <div>
                    <h6 className='fs-6 mb-0'>Abhishek Turjo Dash</h6>
                    <div className='d-flex align-items-center gap-2'>
                        <FontAwesomeIcon icon={faLocationDot}></FontAwesomeIcon>
                        <span>Sylhet, Bangladesh</span>
                    </div>
                </div>
            </div>
            <div className='bg-light d-flex align-items-center justify-content-around gap-3 mt-5 p-1 rounded'>
                <div>
                    <h5 className='fw-bold'>75 <span className='fs-6'>kg</span></h5>
                    <p className='fs-6'>Weight</p>
                </div>
                <div>
                    <h5 className='fw-bold'>5.6 <span className='fs-6'>inch</span></h5>
                    <p className='fs-6'>Height</p>
                </div>
                <div>
                    <h5 className='fw-bold'>25 <span className='fs-6'>years</span></h5>
                    <p className='fs-6'>Age</p>
                </div>
            </div>
                <h5 className='text-start my-3 '>Add a Break</h5>
            <div className='bg-light py-4 px-2 d-flex justify-content-around rounded'>
                {second.map((item,i)=>(
                    <button className={`border-0 rounded-pill fw-semibold ${item.value === time ? 'bg-primary': 'bg-white'}`} style={{height:"40px", width:"40px"}} key={i} onClick={()=> addToDb(item.value)}>{item.label}</button>
                    ))}
            </div>
            <h5 className='text-start my-3 '>Exercise Details</h5>
            <div className='d-flex justify-content-around align-items-center bg-light py-3 rounded mb-4'>
                <h5>Exercise Time</h5>
                <span>{exerciseTime} <span>Seconds</span></span>
            </div>
            <div className='d-flex justify-content-around align-items-center bg-light py-3 rounded'>
                <h5>Break Time</h5>
                <span>{time} <span>Seconds</span></span>
            </div>
            <button onClick={notify} className='btn btn-info btn-lg text-white mt-4 px-5 py-2 fw-semibold'>Activity Completed</button>
        </div>
        <ToastContainer />
        </>
    );
};

export default Profile;