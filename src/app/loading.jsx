import React from 'react';

const Loading  = () => {
    return (
        <div>
             <div className="min-h-screen flex flex-col items-center justify-center bg-white gap-4">
      <div className="w-12 h-12 rounded-full border-4 border-slate-200 border-t-green-600 animate-spin" />
      <p className="text-slate-400 text-sm tracking-wide">Loading...</p>
    </div>
        </div>
    );
};

export default Loading;