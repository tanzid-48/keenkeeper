'use client'
import { Pie, PieChart, Tooltip} from 'recharts';
import { useContext } from 'react';
import { CallContext, TextContext, VideoContext } from '../context/AllContext';

const ActivityChart = () => {
  const { calls } = useContext(CallContext);
  const { texts } = useContext(TextContext);
  const { videos } = useContext(VideoContext);

  const data = [
    { name: 'Calls',  value: calls.length,  fill: '#4ade80' },
    { name: 'Texts',  value: texts.length,  fill: '#60a5fa' },
    { name: 'Videos', value: videos.length, fill: '#c084fc' },
  ];

  const total = calls.length + texts.length + videos.length;
 if (total === 0) return (
    <div className="bg-white rounded-2xl shadow-sm p-6 flex flex-col items-center justify-center h-48">
      <p className="text-slate-400 text-4xl">No activity yet </p>
    </div>
  );

  return (
    <div className="bg-white rounded-2xl shadow-sm p-6 flex flex-col items-center">
      <h3 className="text-sm font-semibold text-slate-700 mb-4">Activity Breakdown</h3>
      <PieChart width={200} height={200}>
        <Pie
          data={data}
          innerRadius="70%"
          outerRadius="100%"
          cornerRadius="50%"
          paddingAngle={5}
          dataKey="value"
        />
        <Tooltip />
      </PieChart>
      <div className="flex gap-4 mt-4">
        {data.map((d) => (
          <div key={d.name} className="flex items-center gap-1.5">
            <div className="w-2.5 h-2.5 rounded-full" style={{ background: d.fill }} />
            <span className="text-xs text-slate-500">{d.name} ({d.value})</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ActivityChart;