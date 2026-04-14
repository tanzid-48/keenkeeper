import React from 'react';

const FriendCard = ({friend}) => {

    const {id,name} = friend;
    return (
        <div>
             <h4 className='font-bold text-lg'>{name}</h4>
            
        </div>
    );
};

export default FriendCard;
