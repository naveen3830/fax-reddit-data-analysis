import React from 'react';
import Dashboard from './components/Dashboard';

const App: React.FC = () => {
  return (
    <div className="min-h-screen text-slate-800 dark:text-slate-200">
      <main>
        <Dashboard />
      </main>
    </div>
  );
};

export default App;