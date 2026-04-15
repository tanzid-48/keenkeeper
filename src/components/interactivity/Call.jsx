'use client'
import { CallContext} from '@/app/context/AllContext';
import { useContext } from 'react';

import { IoMdCall } from 'react-icons/io';

const Call = ({friend}) => {

 const {calls,setCalls} = useContext(CallContext);
 console.log(calls,"call dio");
    
const handleCallButton = () => {
 console.log("cal button Clicked");
  setCalls([...calls,{ ...friend, date: new Date().toLocaleDateString(),time: new Date().toLocaleTimeString()}]) 

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