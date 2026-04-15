'use client'
import { CallContext} from '@/app/context/AllContext';
import { useContext } from 'react';

import { IoMdCall } from 'react-icons/io';
import { toast } from 'react-toastify';

const Call = ({friend}) => {

 const {calls,setCalls} = useContext(CallContext);
 console.log(calls,"call dio");
    
const handleCallButton = () => {
//  console.log("cal button Clicked");
  setCalls([...calls,{ ...friend, date: new Date().toLocaleDateString(),time: new Date().toLocaleTimeString()}]) 
   toast.success(`Call logged with ${friend.name}`)

}

    return (
        <div>
                    <button onClick={handleCallButton} className="btn p-8 px-20 flex flex-col ">   
                        <h3 className='text-xl font-bold'><IoMdCall />Call</h3>
                    </button>
        </div>
    );
};

export default Call;