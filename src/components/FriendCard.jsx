import Image from 'next/image';
import React from 'react';

const FriendCard = ({friend}) => {

    const {id,name, picture, email, tags, status, days_since_contact} = friend;
    return (
        <div className='bg-base-100 rounded-2xl p-6 shadow-sm flex flex-col items-center text-center gap-3'>
             <Image
                    src={picture}
                    alt={name}
                    width={80}
                    height={80}
                    className='rounded-full object-cover w-20 h-20'
                />
              <h4 className='font-bold text-lg mt-2'>{name}</h4>
              <p className='text-slate-400 text-sm'>{days_since_contact}d ago</p>

              <div className='flex gap-2 flex-wrap justify-center bg-green-100'>
                    {tags.map((tag, index) => (
                        <span key={index} className='badge badge-outline text-xs uppercase'>
                            {tag}
                        </span>
                    ))}
                </div>
              <span className={`badge text-white text-sm px-4 py-3 rounded-full ${
                    status === 'overdue' ? 'bg-red-400' :
                    status === 'almost due' ? 'bg-orange-400' :
                    'bg-green-500'
                }`}>
                    {status === 'overdue' ? 'Overdue' :
                     status === 'almost due' ? 'Almost Due' :
                     'On Track'}
                </span>
               
             
            
        </div>
    );
};

export default FriendCard;
