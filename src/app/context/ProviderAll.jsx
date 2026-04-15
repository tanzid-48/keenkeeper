'use client'
import React, { useState } from 'react';
import { CallContext, TextContext, VideoContext } from './AllContext';


const ProviderAll = ({ children }) => {

    const [calls, setCalls] = useState([]);
    const [texts, setTexts] = useState([]);
    const [videos, setVideos] = useState([]);


    const data = {
        calls,
        setCalls,
        texts,
        setTexts,
        videos,
        setVideos
    };

    return (
        <CallContext.Provider value={data}>
            <TextContext.Provider value={data}>
                <VideoContext.Provider value={data}>
                    {children}
            </VideoContext.Provider>
            </TextContext.Provider>
        </CallContext.Provider>
    );
};

export default ProviderAll;