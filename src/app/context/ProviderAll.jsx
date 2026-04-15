'use client'
import React, { useState } from 'react';
import { CallContext, TextContext } from './AllContext';


const ProviderAll = ({ children }) => {

    const [calls, setCalls] = useState([]);
    const [texts, setTexts] = useState([]);

    const data = {
        calls,
        setCalls,
        texts,
        setTexts,
    };

    return (
        <CallContext.Provider value={data}>
            <TextContext.Provider value={data}>
                {children}
            </TextContext.Provider>
        </CallContext.Provider>
    );
};

export default ProviderAll;