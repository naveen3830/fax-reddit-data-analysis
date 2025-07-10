
import React from 'react';

interface StatCardProps {
  title: string;
  value: string | number;
  icon: React.ReactNode;
  iconBgClass?: string;
  iconTextColorClass?: string;
}

const StatCard: React.FC<StatCardProps> = ({ 
  title, 
  value, 
  icon, 
  iconBgClass = 'bg-amber-100 dark:bg-amber-900/50', 
  iconTextColorClass = 'text-amber-600 dark:text-amber-400'
}) => {
  return (
    <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-lg flex items-center space-x-4 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
      <div className={`rounded-full p-3 ${iconBgClass} ${iconTextColorClass}`}>
        {icon}
      </div>
      <div>
        <p className="text-slate-500 dark:text-slate-400 text-sm font-medium">{title}</p>
        <p className="text-2xl font-bold text-slate-900 dark:text-white">{value}</p>
      </div>
    </div>
  );
};

export default StatCard;