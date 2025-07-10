
import React from 'react';
import { redditData, mainFaxData, ICONS } from '../constants';
import StatCard from './StatCard';
import CategoryTable from './CategoryTable';
import TrafficBarChart from './charts/TrafficBarChart';
import ThreadsPieChart from './charts/ThreadsPieChart';

const Dashboard: React.FC = () => {
  const totalThreads = redditData.reduce((acc, item) => acc + item.totalThreads, 0);
  const totalTraffic = redditData.reduce((acc, item) => acc + item.sumOfTraffic, 0);
  const totalKeywords = redditData.reduce((acc, item) => acc + item.sumOfKeywords, 0);
  const totalThreadsInTop10 = redditData.reduce((acc, item) => acc + item.threadsInTop10, 0);

  return (
    <div className="p-4 sm:p-6 lg:p-8">
      <header className="mb-10 text-center">
        <h1 className="text-4xl font-bold text-slate-900 dark:text-white">Reddit data analysis for the keyword fax</h1>
        <p className="text-slate-500 dark:text-slate-400 mt-2 max-w-3xl mx-auto">
          This dashboard presents an analysis of Reddit data for the keyword "fax". We start with a high-level overview of the entire dataset and then dive into a detailed breakdown of specific, pre-filtered categories.
        </p>
      </header>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-slate-800 dark:text-slate-100 mb-5 pb-3 border-b border-slate-200 dark:border-slate-700">Overall Statistics</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <StatCard 
            title="Total Unique Reddit Threads" 
            value={mainFaxData.totalThreads.toLocaleString()} 
            icon={ICONS.database} 
            iconBgClass="bg-sky-100 dark:bg-sky-900/50"
            iconTextColorClass="text-sky-600 dark:text-sky-300"
          />
          <StatCard 
            title="Total Potential Traffic" 
            value={mainFaxData.sumOfTraffic.toLocaleString()} 
            icon={ICONS.traffic}
            iconBgClass="bg-sky-100 dark:bg-sky-900/50"
            iconTextColorClass="text-sky-600 dark:text-sky-300"
          />
          <StatCard 
            title="Total Associated Keywords" 
            value={mainFaxData.sumOfKeywords.toLocaleString()} 
            icon={ICONS.keywords}
            iconBgClass="bg-sky-100 dark:bg-sky-900/50"
            iconTextColorClass="text-sky-600 dark:text-sky-300"
          />
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-slate-800 dark:text-slate-100 mb-2 pb-3 border-b border-slate-200 dark:border-slate-700">Top 6 Subcategories in Fax</h2>
        <p className="text-slate-500 dark:text-slate-400 mb-6">
          From the total dataset, we've filtered and analyzed several key categories. The metrics below represent the data points within these specific groups.
        </p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <StatCard title="Total Reddit Threads" value={totalThreads.toLocaleString()} icon={ICONS.threads} />
          <StatCard title="Sum of Traffic" value={totalTraffic.toLocaleString()} icon={ICONS.traffic} />
          <StatCard title="Sum of Keywords" value={totalKeywords.toLocaleString()} icon={ICONS.keywords} />
          <StatCard title="Threads in SERP Top 10" value={totalThreadsInTop10.toLocaleString()} icon={ICONS.serp} />
        </div>

        <div className="bg-white dark:bg-slate-800 p-4 sm:p-6 rounded-xl shadow-lg transition-shadow duration-300 hover:shadow-xl mb-8">
          <h3 className="text-xl font-semibold mb-4 text-slate-800 dark:text-slate-100">Detailed Breakdown by Category</h3>
          <CategoryTable data={redditData} />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 mb-8">
          <div className="lg:col-span-3 bg-white dark:bg-slate-800 p-6 rounded-xl shadow-lg transition-shadow duration-300 hover:shadow-xl">
             <h3 className="text-xl font-semibold mb-4 text-slate-800 dark:text-slate-100">Traffic by Category</h3>
             <TrafficBarChart data={redditData} />
          </div>
          <div className="lg:col-span-2 bg-white dark:bg-slate-800 p-6 rounded-xl shadow-lg transition-shadow duration-300 hover:shadow-xl">
              <h3 className="text-xl font-semibold mb-4 text-slate-800 dark:text-slate-100">Thread Distribution</h3>
              <ThreadsPieChart data={redditData} />
          </div>
        </div>
      </section>

       <footer className="text-center mt-12 text-sm text-slate-500 dark:text-slate-400">
        <p>Dashboard created with React & Tailwind CSS. Data sourced from Ahrefs.</p>
      </footer>
    </div>
  );
};

export default Dashboard;