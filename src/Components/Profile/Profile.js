import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot} from '@fortawesome/free-solid-svg-icons';
import myImage from '../../Photos/me.png'
import React, { useState } from 'react';

const Profile = () => {
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

const [time,setTime]=useState(0)

    return (
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
                    <button className='border-0 bg-white rounded-pill fw-semibold' style={{height:"40px", width:"40px"}} key={i} onClick={()=> setTime(item.value)}>{item.label}</button>
                    ))}
            </div>
            <h5 className='text-start my-3 '>Exercise Details</h5>
            <div className='d-flex justify-content-around align-items-center bg-light py-3 rounded mb-4'>
                <h5>Exercise Time</h5>
                <span>{} <span>Seconds</span></span>
            </div>
            
        </div>
    );
};

export default Profile;