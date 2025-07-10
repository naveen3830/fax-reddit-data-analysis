
import React, { useState, useMemo } from 'react';
import { RedditData } from '../types';

interface CategoryTableProps {
  data: RedditData[];
}

type SortKey = keyof RedditData;
type SortOrder = 'asc' | 'desc';

interface SortableHeaderProps {
  sortKey: SortKey;
  title: string;
  currentSortKey: SortKey;
  sortOrder: SortOrder;
  onSort: (key: SortKey) => void;
}

const SortableHeader: React.FC<SortableHeaderProps> = ({ sortKey, title, currentSortKey, sortOrder, onSort }: SortableHeaderProps) => {
  const isSorting = currentSortKey === sortKey;
  return (
    <th
      scope="col"
      className="px-6 py-3 text-left text-xs font-bold text-slate-500 dark:text-slate-300 uppercase tracking-wider cursor-pointer select-none"
      onClick={() => onSort(sortKey)}
    >
      <div className="flex items-center">
        {title}
        {isSorting && (
          <span className="ml-2">
            {sortOrder === 'asc' ? '▲' : '▼'}
          </span>
        )}
      </div>
    </th>
  );
};

const CategoryTable: React.FC<CategoryTableProps> = ({ data }: CategoryTableProps) => {
  const [sortKey, setSortKey] = useState<SortKey>('sumOfTraffic');
  const [sortOrder, setSortOrder] = useState<SortOrder>('desc');

  const handleSort = (key: SortKey) => {
    if (key === sortKey) {
      setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
    } else {
      setSortKey(key);
      setSortOrder('desc');
    }
  };

  const sortedData = useMemo(() => {
    const sorted = [...data].sort((a, b) => {
      const aVal = a[sortKey];
      const bVal = b[sortKey];
      if (aVal < bVal) return -1;
      if (aVal > bVal) return 1;
      return 0;
    });
    return sortOrder === 'asc' ? sorted : sorted.reverse();
  }, [data, sortKey, sortOrder]);

  // Update headers to match the image
  const headers: { key: SortKey; title: string }[] = [
    { key: 'category', title: 'CATEGORY NAME' },
    { key: 'totalThreads', title: 'NO OF THREADS' },
    { key: 'sumOfTraffic', title: 'TOTAL TRAFFIC' },
    { key: 'sumOfKeywords', title: 'NO OF KEYWORDS' },
    { key: 'avgKeywordPosition', title: 'AVG. SERP POSITION' },
    { key: 'threadsInTop10', title: 'NO OF THREADS IN TOP 10' },
  ];

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-slate-200 dark:divide-slate-700">
        <thead className="bg-slate-50 dark:bg-slate-700/50">
          <tr>
            {headers.map(header => (
              <SortableHeader
                key={header.key}
                sortKey={header.key}
                title={header.title}
                currentSortKey={sortKey}
                sortOrder={sortOrder}
                onSort={handleSort}
              />
            ))}
          </tr>
        </thead>
        <tbody className="bg-white dark:bg-slate-800 divide-y divide-slate-200 dark:divide-slate-700">
          {sortedData.map((item) => (
            <tr key={item.category} className="hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors duration-150">
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-slate-900 dark:text-white">{`fax from ${item.category}`}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-500 dark:text-slate-300">{item.totalThreads.toLocaleString()}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-500 dark:text-slate-300">{item.sumOfTraffic.toLocaleString()}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-500 dark:text-slate-300">{item.sumOfKeywords.toLocaleString()}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-500 dark:text-slate-300">{item.avgKeywordPosition.toFixed(1)}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-500 dark:text-slate-300">{item.threadsInTop10.toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CategoryTable;
