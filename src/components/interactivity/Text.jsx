'use client'
import { TextContext } from '@/app/context/AllContext';
import React, { useContext } from 'react';
import { IoMdText } from 'react-icons/io';
import { toast } from 'react-toastify';

const Text = ({ friend }) => {

    const { texts, setTexts } = useContext(TextContext)

    const handleTextButton = () => {
        setTexts([...texts, { ...friend, date: new Date().toLocaleDateString(), time: new Date().toLocaleTimeString() }]);
        toast.success(`Texted ${friend.name}`)

    }
    return (
        <div>
            <button onClick={handleTextButton} className="btn px-20 p-8 flex flex-col">
                <h3 className='text-xl font-bold' > <IoMdText /> Text</h3>
            </button>
        </div>
    );
};

export default Text;