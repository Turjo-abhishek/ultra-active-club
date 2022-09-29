import React from 'react';
import logo from '../../Photos/download.png';
import Exercise from '../Exercise/Exercise';
import './Container.css'
import { useState, useEffect } from 'react';
import Profile from '../Profile/Profile';

const Container = () => {
    const [activities, setActivities] = useState([]);
    const [exerciseTime, setExerciseTime] = useState(0);

    const handleBtnValue = (activity) =>{
        setExerciseTime(exerciseTime + activity)
    }
    
    useEffect(() => {
        fetch('data.json')
        .then(res => res.json())
        .then(data => setActivities(data))
    },[]);
    return (
        <div className='bg-info bg-opacity-10 custom-container'>
            <div>
                <div className='d-flex align-items-center gap-2 px-5 py-2 mt-5'>
                    <img className='rounded-pill' height={50} width={50} src={logo} alt="" />
                    <h3>Activities Club</h3>
                </div>
                <h4 className='text-start px-5 my-4'>Select today's activities</h4>
                <div className='custom-activities-container w-100 mx-auto'>
                {
                    activities.map(activity => <Exercise key={activity.id} activity={activity} handleBtnValue={handleBtnValue}></Exercise>)
                }
                </div>
            </div>
            <div className='profile-container'> 
                <Profile exerciseTime={exerciseTime} />
            </div>

        </div>
    );
};

export default Container;