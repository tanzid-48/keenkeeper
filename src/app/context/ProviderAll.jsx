'use client'
import React, { useState } from 'react';
import { CallContext, TextContext, VideoContext } from './AllContext';


const ProviderAll = ({ children }) => {

    const [calls, setCalls] = useState([]);
    const [texts, setTexts] = useState([]);
    const [videos, setVideos] = useState([]);

    return (
        <CallContext.Provider value={{
            calls,
            setCalls
        }}>
            <TextContext.Provider value={{  texts,
        setTexts}}>
                <VideoContext.Provider value={{videos,
        setVideos}}>
                    {children}
                </VideoContext.Provider>
            </TextContext.Provider>
        </CallContext.Provider>
    );
};

export default ProviderAll;