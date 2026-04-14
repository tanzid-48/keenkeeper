import React from 'react';

const UiCard = () => {

    const stats = [
        { id: 1, value: 10, title: "Total Friends" },
        { id: 2, value: 3, title: "On Track" },
        { id: 3, value: 6, title: "Need Attention" },
        { id: 4, value: 12, title: "Interaction This Month" },
    ];

    return (
        <div className='grid grid-cols-2 md:grid-cols-4 gap-4 w-11/12 mx-auto py-10'>
            {
                stats.map((item) => (
                    <div key={item.id} className="bg-base-200 shadow-sm rounded-xl hover:shadow-md ">
                        <div className="card-body items-center text-center">
                            <h2 className="text-3xl font-bold ">{item.value}</h2>
                            <p className='text-slate-500'>{item.title}</p>
                        </div>
                    </div>
                ))
            }
        </div>
    );
};

export default UiCard;