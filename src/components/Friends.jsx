import React from 'react';
import fs from 'fs';
import path from 'path';
import FriendCard from './FriendCard';

const Friends = () => {

    const filePath = path.join(process.cwd(),'public','data.json');
    const friends = JSON.parse(fs.readFileSync(filePath,'utf-8'));
    console.log(friends,"hello");
    return (
        <div className='w-11/12 mx-auto'>
            <h3 className='font-bold text-xl py-6'>Your Friends</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {
                    friends.map(friend => <FriendCard key={friend.id} friend = {friend}></FriendCard>)
                }

            </div>

            
        </div>
    );
};

export default Friends;