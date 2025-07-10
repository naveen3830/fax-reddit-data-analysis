
import React from 'react';
import { RedditData } from '../../types';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

interface TrafficBarChartProps {
  data: RedditData[];
}

const TrafficBarChart: React.FC<TrafficBarChartProps> = ({ data }) => {
  return (
    <div style={{ width: '100%', height: 300 }}>
        <ResponsiveContainer>
            <BarChart
                data={data}
                margin={{
                    top: 5,
                    right: 20,
                    left: -10,
                    bottom: 5,
                }}
            >
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(100, 116, 139, 0.3)" />
                <XAxis dataKey="category" tick={{ fill: 'rgb(100 116 139)' }} fontSize={12} />
                <YAxis tick={{ fill: 'rgb(100 116 139)'}} fontSize={12} />
                <Tooltip 
                    cursor={{fill: 'rgba(203, 213, 225, 0.1)'}}
                    contentStyle={{
                        backgroundColor: 'rgb(15 23 42 / 0.8)',
                        borderColor: 'rgb(30 41 59)',
                        color: '#fff',
                        borderRadius: '0.5rem'
                    }}
                />
                <Legend iconSize={10} wrapperStyle={{fontSize: '14px'}}/>
                <Bar dataKey="sumOfTraffic" name="Sum of Traffic" fill="#38bdf8" radius={[4, 4, 0, 0]} />
            </BarChart>
        </ResponsiveContainer>
    </div>
  );
};

export default TrafficBarChart;