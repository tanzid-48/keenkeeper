import React from 'react';
import { FaPlus } from 'react-icons/fa';

const Hero = () => {
    return (
        <div className='py-12'>
            <div className="hero">
                <div className="hero-content text-center space-y-6">
                    <div className="space-y-4">
                        <h1 className="text-5xl font-bold">Friends to keep close in your life</h1>
                        <p className="text-slate-400">
                            Your personal shelf of meaningful connections. Browse, tend, and nurture the <br />
                            relationships that matter most.
                        </p>
                        <button className="btn bg-green-800 text-white">
                            <FaPlus /> Add a Friend
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;