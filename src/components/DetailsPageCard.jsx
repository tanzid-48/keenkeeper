import React from 'react';

const DetailsPageCard = ({friend}) => {

 const {id,name}= friend;
    return (
        <div>
             <h3>Friend details here</h3>
            <h3>{name}</h3>
        </div>
    );
};

export default DetailsPageCard;