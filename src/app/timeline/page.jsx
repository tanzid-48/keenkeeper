'use client'
import React, { useContext, useState } from 'react';
import { CallContext, TextContext, VideoContext } from '../context/AllContext';
import { IoMdCall, IoMdText } from 'react-icons/io';
import { FaVideo } from 'react-icons/fa';

const TimelinePage = () => {

  const { calls } = useContext(CallContext);
  console.log(calls, "Timeline CAlls");
  const { texts } = useContext(TextContext)
  console.log(texts, "TimeLine of TEXT");
  const { videos } = useContext(VideoContext);

  const [filter, setFilter] = useState('all');

  const allActivity = [
    ...calls.map(c => ({ ...c, type: 'Call' })),
    ...texts.map(t => ({ ...t, type: 'Text' })),
    ...videos.map(v => ({ ...v, type: 'Video' })),

  ];

  const filteredData = filter === 'all' ? allActivity : allActivity.filter(item => item.type === filter)
  allActivity.sort((a, b) => b.createdAt - a.createdAt);

  const icon = {
    Call: { icon: <IoMdCall />, bg: 'bg-green-100', color: 'text-green-600' },
    Text: { icon: <IoMdText />, bg: 'bg-blue-100', color: 'text-blue-500' },
    Video: { icon: <FaVideo />, bg: 'bg-purple-100', color: 'text-purple-500' },

  }

  return (

    <>
      <h2 className="text-2xl font-bold p-5 ml-15">Timeline</h2>
     <div className=" ml-13 py-4">
       <select
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
        className="select select-accent"
      >
        <option value="all">All Activity</option>
        <option value="Call">Calls</option>
        <option value="Text">Texts</option>
        <option value="Video">Video Calls</option>
      </select>
     </div>

      <div className="w-11/12 mx-auto flex flex-col gap-3">
        {filteredData.length === 0 ? (
          <p className="text-center text-slate-400 text-3xl py-10">No activity yet.</p>
        ) : (
          filteredData.map((item, i) => (
            <div key={i} className="bg-white shadow-sm rounded-xl p-4">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-green-100 flex items-center justify-center">
                  <span className={icon[item.type].color}>{icon[item.type].icon}</span>
                </div>
                <div>
                  <p className="text-sm font-bold text-slate-700"><span
                    className='text-slate-500 '> {item.type} With</span> {item.name}</p>
                  <p className="text-xs text-slate-400">{item.date} <br />
                    {item.time}</p>
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