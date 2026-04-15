'use client'
import { VideoContext } from '@/app/context/AllContext';
import { useContext } from 'react';
import { FaVideo } from 'react-icons/fa';
import { toast } from 'react-toastify';

const Videos = ({ friend }) => {

     const {videos,setVideos} = useContext(VideoContext)

     const handleVideoButton = () => {
            setVideos([...videos,{ ...friend, date: new Date().toLocaleDateString(), time: new Date().toLocaleTimeString(),
            createdAt: Date.now()
             }]);
            toast.success(`Video call${friend.name}`)
            
    
        }
    return (
        <div>
            <button onClick={handleVideoButton} className="btn p-8 px-20 flex flex-col">
                        <h3  className='text-xl font-bold'> <FaVideo /> Video</h3>
                    </button>  
        </div>
    );
};

export default Videos;