'use client'
import React, { useState } from 'react';
import { CallContext } from './AllContext';


const ProviderAll = ({children}) => { 
    
const [calls,setCalls] = useState([]);

    const data = {
        calls,
        setCalls,
    };
    
    return (
<CallContext.Provider value = {data}>
        {children}
 </CallContext.Provider>
    );
};

export default ProviderAll;