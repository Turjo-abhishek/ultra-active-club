import React, { useEffect, useState } from 'react';
import './Exercise.css';

const Exercise = (props) => {
    const {name,age,body,time,image} = props.activity;
    return (
        <div>
            <div className="card my-2 mx-auto" style={{width: "18rem"}}>
                    <div className='p-3'>
                    <img src={image} height={186} className="card-img-top rounded" alt="..."></img>
                    </div>
                    <div className="card-body position-relative">
                        <p className='text-start fw-bold fs-5 my-1'>{name}</p>
                        <p className="text-start mb-2" style={{height: "100px"}}>{body}</p>
                        <p className="text-start mb-2"><span className='fw-bold'>Age group:</span> {age}</p>
                        <p className="text-start mb-2"><span className='fw-bold'>Time Required:</span> {time} Seconds</p>
                        <button className='btn-custom position-absolute start-0 bottom-0 end-0'>Add to list</button>
                    </div>
            </div>
        </div>
    );
};

export default Exercise;