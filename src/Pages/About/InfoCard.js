import React from 'react';

const InfoCard = ({infos}) => {
    
    const {name,email,adress,university,image}=infos;
     
    return (
        <div className="card-body">
          
        <h2 className="text-center font-bold text-2xl">Your Information</h2>
        <div className="avatar  my-3 flex justify-center" style={{height:'150px'}}>
        <div className="rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
            <img src={image} alt='' />
          </div>
        </div>
        <div className='text-center'>
        <p><span className='text-lg font-semibold'>Name:</span> {name}</p>
        <p><span className='text-lg font-semibold'>Email:</span> {email}</p>
        <p><span className='text-lg font-semibold'>University: </span> {university }</p>
        <p><span className='text-lg font-semibold'>Address: </span> {adress}</p>
        </div>
      </div>
    );
};

export default InfoCard;