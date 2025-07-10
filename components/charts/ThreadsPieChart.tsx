
import React from 'react';
import { RedditData } from '../../types';
import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from 'recharts';

interface ThreadsPieChartProps {
  data: RedditData[];
}

const COLORS = [
  '#38bdf8', // sky-400
  '#f59e0b', // amber-500
  '#2dd4bf', // teal-400
  '#a78bfa', // violet-400
  '#a3e635', // lime-500
  '#e879f9', // fuchsia-400
];

const ThreadsPieChart: React.FC<ThreadsPieChartProps> = ({ data }: ThreadsPieChartProps) => {
  return (
    <div style={{ width: '100%', height: 300 }}>
      <ResponsiveContainer>
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            labelLine={false}
            outerRadius={80}
            fill="#8884d8"
            dataKey="totalThreads"
            nameKey="category"
            label={({ cx, cy, midAngle, innerRadius, outerRadius, percent }: {
              cx?: number;
              cy?: number;
              midAngle?: number;
              innerRadius?: number;
              outerRadius?: number;
              percent?: number;
            }) => {
                const rInner = innerRadius ?? 0;
                const rOuter = outerRadius ?? 0;
                const rCx = cx ?? 0;
                const rCy = cy ?? 0;
                const rMid = midAngle ?? 0;
                const rPercent = percent ?? 0;
                const radius = rInner + (rOuter - rInner) * 0.5;
                const x = rCx + radius * Math.cos(-rMid * (Math.PI / 180));
                const y = rCy + radius * Math.sin(-rMid * (Math.PI / 180));
                return (
                  <text x={x} y={y} fill="white" textAnchor={x > rCx ? 'start' : 'end'} dominantBaseline="central" fontSize={12} fontWeight="bold">
                    {`${(rPercent * 100).toFixed(0)}%`}
                  </text>
                );
            }}
          >
            {data.map((entry, index) => (
              <Cell key={`cell-fax-from-${entry.category}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip
            cursor={{ fill: 'rgba(203, 213, 225, 0.1)' }}
            content={({ active, payload }: { active?: boolean; payload?: any[] }) => {
              if (active && payload && payload.length) {
                const entry = payload[0].payload as RedditData;
                return (
                  <div style={{ background: 'rgba(15,23,42,0.95)', border: '1px solid #1e293b', borderRadius: '0.5rem', padding: 12 }}>
                    <div style={{ color: '#fff', fontWeight: 'bold' }}>{`fax from ${entry.category}`}</div>
                    <div style={{ color: '#fff' }}>{`Threads: ${entry.totalThreads}`}</div>
                  </div>
                );
              }
              return null;
             }}
          />
          <Legend iconSize={10} wrapperStyle={{fontSize: '14px'}} layout="vertical" verticalAlign="middle" align="right"/>
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ThreadsPieChart;