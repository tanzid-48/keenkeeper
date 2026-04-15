'use client'
import React, { useContext } from 'react';
import { CallContext } from '../context/AllContext';
import { IoMdCall } from 'react-icons/io';

const TimelinePage = () => {

    const {calls,setCalls} =useContext(CallContext);
    console.log(calls,"Timeline");

    return (

      <>
      <h2 className="text-2xl font-bold p-5 ml-15">Timeline</h2>

      <div className="w-11/12 mx-auto flex flex-col gap-3">
        {calls.length === 0 ? (
          <p className="text-center text-slate-400 text-3xl py-10">No calls yet.</p>
        ) : (
          calls.map((call, i) => (
            <div key={i} className="bg-white shadow-sm rounded-xl p-4">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-green-100 flex items-center justify-center">
                  <IoMdCall className="text-green-600 text-lg" />
                </div>
                <div>
                  <p className="text-sm font-bold text-slate-700"><span className='text-slate-500 '>Call With</span> {call.name}</p>
                 <p className="text-xs text-slate-400">{call.date} <br />
                    {call.time}</p>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </>     
    );
};

export default TimelinePage;