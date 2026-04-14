import Image from 'next/image';
import React from 'react';
import { MdDeleteForever, MdNotificationsPaused } from 'react-icons/md';
import { FaArchive, FaVideo } from 'react-icons/fa';
import { IoMdCall, IoMdText } from 'react-icons/io';


const DetailsPageCard = ({ friend }) => {

    const { id, name, picture, email, tags, status, days_since_contact, bio, goal, next_due_date } = friend;
    return (

        <div className='grid grid-cols-2 gap-4 w-10/12 mx-auto items-center justify-center '>

            <div className=" p-6 flex flex-col items-center text-center gap-3 shadow-sm">
                <div className="space-y-5  rounded-2xl shadow-sm ">
                    <Image
                        src={picture}
                        alt={name}
                        width={80}
                        height={80}
                        className='rounded-full object-cover w-20 h-20 mx-auto'
                    />
                    <h4 className='font-bold text-lg mt-2 text-center'>{name}</h4>
                    <div className="flex justify-center">
                        <span className={`badge text-white text-sm px-4 py-3 rounded-full ${status === 'overdue' ? 'bg-red-400' :
                            status === 'almost due' ? 'bg-orange-400' :
                                'bg-green-500'
                            }`}>
                            {status === 'overdue' ? 'Overdue' :
                                status === 'almost due' ? 'Almost Due' :
                                    'On Track'}
                        </span>
                    </div>
                    <div className='flex gap-2 flex-wrap justify-center'>
                        {tags.map((tag, index) => (
                            <span key={index} className='badge bg-green-100 text-green-700 border-0 text-xs uppercase font-semibold'>
                                {tag}
                            </span>
                        ))}
                    </div>
                    <p className='text-slate-400 text-xs italic'> {bio}</p>
                    <p className='text-slate-400 text-xs'>Preferred: <span className='text-slate-600'>email</span></p>
                </div>
                <div className="flex flex-col w-full mt-2 p-6 rounded-2xl shadow-sm space-y-4">
                    <button className='btn btn-ghost w-full justify-start gap-2 text-slate-700'>
                        <MdNotificationsPaused className='text-lg' /> Snooze 2 Weeks
                    </button>
                    <button className='btn btn-ghost w-full justify-start gap-2 text-slate-700'>
                        <FaArchive className='text-sm' /> Archive
                    </button>
                    <button className='btn btn-ghost w-full justify-start gap-2 text-red-400 hover:bg-red-50'>
                        <MdDeleteForever className='text-lg' /> Delete
                    </button>
                </div>

            </div>

            <div className=" p-6 grid grid-cols-3  items-center text-center gap-3 shadow-sm">

                <div className="grid grid-cols-3 items-center gap-4">


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

                <div className="bg-base-100 shadow-sm rounded-xl py-10">
                    <div className="flex justify-between">
                        <h3>RelationShip Goal</h3>
                        <button className='btn'>Edit</button>
                    </div>
                    <h3>Connect every <span className='font-bold '>30 day</span></h3>
                </div>

                <div className=" bg-base-100 shadow-sm rounded-xl py-10 grid grid-cols-3">
                    <h3 className='text-left'>Quick Check-In</h3>
                    <button className="btn p-4 flex flex-col">
                        <IoMdCall />
                        <h3>Call</h3>
                    </button>
                    <button className="btn p-4  flex flex-col">
                        <IoMdText />
                        <h3>Text</h3>
                    </button>
                    <button className="btn p-5  flex flex-col">
                        <FaVideo />
                        <h3>Video</h3>
                    </button>
                </div>
            </div>


        </div>
    );
};

export default DetailsPageCard;