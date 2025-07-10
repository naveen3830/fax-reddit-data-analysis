
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
      const aVal = a[sortKey] ?? 0;
      const bVal = b[sortKey] ?? 0;
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

  const [expanded, setExpanded] = useState<{ [key: string]: boolean }>({});

  const toggleExpand = (category: string) => {
    setExpanded((prev) => ({ ...prev, [category]: !prev[category] }));
  };

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
            <React.Fragment key={item.category}>
              <tr className="hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors duration-150">
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-slate-900 dark:text-white">
                  <button
                    className="mr-2 text-sky-400 hover:text-sky-600 focus:outline-none"
                    onClick={() => toggleExpand(item.category)}
                    aria-label={expanded[item.category] ? 'Collapse' : 'Expand'}
                  >
                    <span className={expanded[item.category] ? 'rotate-90 inline-block transition-transform' : 'inline-block transition-transform'}>
                      ▼
                    </span>
                  </button>
                  {`fax from ${item.category}`}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-500 dark:text-slate-300">{item.totalThreads.toLocaleString()}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-500 dark:text-slate-300">{item.sumOfTraffic.toLocaleString()}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-500 dark:text-slate-300">{item.sumOfKeywords.toLocaleString()}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-500 dark:text-slate-300">{item.avgKeywordPosition.toFixed(1)}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-500 dark:text-slate-300">{item.threadsInTop10.toLocaleString()}</td>
              </tr>
              {expanded[item.category] && item.sampleThreads && (
                <tr>
                  <td colSpan={6} className="bg-slate-100 dark:bg-slate-700 px-8 py-4">
                    <div className="mb-2 font-semibold text-slate-700 dark:text-slate-200">Sample Reddit Threads:</div>
                    <ul className="list-disc pl-6">
                      {item.sampleThreads.map((url, idx) => (
                        <li key={url}>
                          <a href={url} target="_blank" rel="noopener noreferrer" className="text-sky-400 hover:underline break-all">{url}</a>
                        </li>
                      ))}
                    </ul>
                  </td>
                </tr>
              )}
            </React.Fragment>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CategoryTable;
