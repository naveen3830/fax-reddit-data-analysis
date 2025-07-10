import React from 'react';
import { RedditData } from './types';

export const redditData: RedditData[] = [
  {
    category: 'iPhone',
    totalThreads: 15,
    sumOfTraffic: 1805,
    sumOfKeywords: 676,
    avgKeywordPosition: 15.7,
    threadsInTop10: 7,
  },
  {
    category: 'computer',
    totalThreads: 293,
    sumOfTraffic: 5369,
    sumOfKeywords: 2769,
    avgKeywordPosition: 27.7,
    threadsInTop10: 128,
  },
  {
    category: 'printer',
    totalThreads: 126,
    sumOfTraffic: 709,
    sumOfKeywords: 1203,
    avgKeywordPosition: 21.7,
    threadsInTop10: 34,
  },
  {
    category: 'email',
    totalThreads: 33,
    sumOfTraffic: 1497,
    sumOfKeywords: 925,
    avgKeywordPosition: 18.7,
    threadsInTop10: 20,
  },
  {
    category: 'phone',
    totalThreads: 29,
    sumOfTraffic: 505,
    sumOfKeywords: 588,
    avgKeywordPosition: 13.6,
    threadsInTop10: 18,
  },
  {
    category: 'HIPPA',
    totalThreads: 8,
    sumOfTraffic: 520,
    sumOfKeywords: 213,
    avgKeywordPosition: 12.8,
    threadsInTop10: 5,
  },
];

export const mainFaxData = {
  totalThreads: 2779,
  sumOfTraffic: 31341,
  sumOfKeywords: 20274,
};

export const ICONS = {
    threads: <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a2 2 0 01-2-2V4a2 2 0 012-2h8z M7 4v12" /></svg>,
    traffic: <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>,
    keywords: <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M7 20l4-16m2 16l4-16M6 9h14M4 15h14" /></svg>,
    serp: <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>,
    database: <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4M4 7v5c0 2.21 3.582 4 8 4s8-1.79 8-4V7" /></svg>,
};