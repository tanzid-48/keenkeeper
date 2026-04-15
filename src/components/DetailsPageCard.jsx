import Image from 'next/image';
import React from 'react';

import { FaArchive, FaVideo } from 'react-icons/fa';
import { IoMdCall, IoMdText } from 'react-icons/io';
import { MdDeleteForever, MdNotificationsPaused } from 'react-icons/md';
import Call from './interactivity/Call';
import Text from './interactivity/Text';


const DetailsPageCard = ({ friend }) => {

    const { id, name, picture, email, tags, status, days_since_contact, bio, goal, next_due_date } = friend;

      return (
        <div className="grid grid-cols-1 md:grid-cols-[220px_1fr] gap-4 w-11/12 mx-auto items-start py-6">
            <div className="flex flex-col gap-3">
                <div className="bg-white rounded-2xl shadow-sm p-6 flex flex-col items-center text-center gap-3">
                    <Image
                        src={picture}
                        alt={name}
                        width={72}
                        height={72}
                        className="rounded-full object-cover w-18 h-18"
                    />
                    <h4 className="font-semibold text-[17px] text-slate-800 mt-1">{name}</h4>
                  <span className={`badge text-white text-sm px-4 py-3 rounded-full ${status === 'overdue' ? 'bg-red-400' :
                            status === 'almost due' ? 'bg-orange-400' :
                                'bg-green-500'
                            }`}>
                            {status === 'overdue' ? 'Overdue' :
                                status === 'almost due' ? 'Almost Due' :
                                    'On Track'}
                        </span>

                    <div className="flex gap-2 flex-wrap justify-center">
                        {tags.map((tag, i) => (
                            <span key={i} className="bg-green-100 text-green-700 text-[10px] font-bold uppercase px-3 py-1 rounded-full">
                                {tag}
                            </span>
                        ))}
                    </div>

                    <p className="text-slate-400 text-xs italic leading-relaxed">{bio}</p>
                    <p className="text-slate-400 text-xs">
                        Preferred: <span className="text-slate-600 font-medium">email</span>
                    </p>
                </div>
                <div className="bg-white rounded-2xl shadow-sm p-3 flex flex-col gap-1">
                    <button className="flex items-center gap-3 w-full px-3 py-2.5 shadow rounded-xl text-slate-700 text-sm text-left">
                        <MdNotificationsPaused className="text-base shrink-0" /> Snooze 2 Weeks
                    </button>
                    <button className="flex items-center gap-3 w-full px-3 py-2.5 shadow rounded-xl text-left">
                        <FaArchive className="text-sm shrink-0" /> Archive
                    </button>
                    <button className="flex items-center gap-3 w-full px-3 py-2.5 rounded-xl text-red-400 text-sm shadow hover:bg-red-50 transition-colors text-left">
                        <MdDeleteForever className="text-base shrink-0" /> Delete
                    </button>
                </div>

            </div>
               <div className="flex flex-col gap-3">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    <div className="bg-base-100 shadow-sm rounded-xl hover:shadow-md">
 <div className="card-body items-center text-center">
               <h2 className="text-3xl font-bold">{days_since_contact}</h2>
                            <p className="text-slate-400 text-sm">Days Since Contact</p>
                        </div>
                    </div>
                     <div className="bg-base-100 shadow-sm rounded-xl hover:shadow-md">
                        <div className="card-body items-center text-center">
                            <h2 className="text-3xl font-bold">{goal}</h2>
                            <p className="text-slate-400 text-sm">Goal (Days)</p>
                        </div>
                    </div>
                      <div className="bg-base-100 shadow-sm rounded-xl hover:shadow-md">
                        <div className="card-body items-center text-center">
                            <h2 className="text-3xl font-bold">{next_due_date}</h2>
                            <p className="text-slate-400 text-sm">Next Due</p>
                        </div>
                    </div>                  
                </div>
               
                <div className="bg-white rounded-xl shadow-sm p-5 flex items-center justify-between">
                    <div>
                        <p className="text-sm font-semibold text-slate-700 mb-1">Relationship Goal</p>
                        <p className="text-sm text-slate-500">
                            Connect every <span className="font-bold text-slate-800">{goal} days</span>
                        </p>
                    </div>
                    <button className="text-sm border border-slate-200 rounded-lg px-4 py-1.5 text-slate-600 hover:bg-slate-50 transition-colors font-medium">
                        Edit
                    </button>
                </div>
   <div className="bg-white rounded-xl shadow-sm p-5">
                    <p className="text-sm font-semibold text-slate-700 mb-3">Quick Check-In</p>
                    <div className="grid grid-cols-3 sm:grid-cols-3 gap-2">
                     <Call friend = {friend}></Call>
                     <Text friend = {friend}></Text>
                  <button className="btn p-8 flex flex-col">
                        <h3  className='text-xl font-bold'> <FaVideo /> Video</h3>
                    </button>                       
                    </div>
                </div>

            </div>
        </div>
    );
};

export default DetailsPageCard;