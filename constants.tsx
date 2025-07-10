import React from 'react';
import { RedditData } from './types';

export const redditData: RedditData[] = [
  {
    category: 'computer',
    totalThreads: 262,
    sumOfTraffic: 5101,
    sumOfKeywords: 2586,
    avgKeywordPosition: 27.0,
    threadsInTop10: 117,
    sampleThreads: [
      'https://www.reddit.com/r/Adulting/comments/r4ygly/how_do_i_receive_faxes/',
      'https://www.reddit.com/r/VOIP/comments/1lno42s/can_t30_only_fax_machines_work_at_all_with_voip//'
    ]
  },
  {
    category: 'iPhone',
    totalThreads: 15,
    sumOfTraffic: 1805,
    sumOfKeywords: 676,
    avgKeywordPosition: 15.7,
    threadsInTop10: 7,
    sampleThreads: [
      'https://www.reddit.com/r/apps/comments/1iyf4ge/best_iphone_app_for_faxing/',
      'https://www.reddit.com/r/ios/comments/1c6efbi/does_anyone_know_a_good_reliable_fax_app/'
    ]
  },
  {
    category: 'email',
    totalThreads: 33,
    sumOfTraffic: 1497,
    sumOfKeywords: 925,
    avgKeywordPosition: 18.7,
    threadsInTop10: 20,
    sampleThreads: [
      'https://www.reddit.com/r/Adulting/comments/r4ygly/comment/hmji1iz/',
      'https://www.reddit.com/r/AskNYC/comments/1jxaa1k/why_do_city_agencies_still_require_fax_why_cant//'
    ]
  },
  {
    category: 'printer',
    totalThreads: 126,
    sumOfTraffic: 709,
    sumOfKeywords: 1203,
    avgKeywordPosition: 21.7,
    threadsInTop10: 34,
    sampleThreads: [
      'https://www.reddit.com/r/printers/comments/1htz94s/how_to_fax/',
      'https://www.reddit.com/r/printers/comments/1fep765/ifax_with_brother_mfc2750dw/'
    ]
  },
  {
    category: 'HIPAA',
    totalThreads: 9,
    sumOfTraffic: 520,
    sumOfKeywords: 214,
    avgKeywordPosition: 12.7,
    threadsInTop10: 5,
    sampleThreads: [
      'https://www.reddit.com/r/VOIP/comments/ude38a/any_hipaacompliant_voip_fax_services/',
      'https://www.reddit.com/r/Psychologists/comments/1i8xgje/fax_recommendations/'
    ]
  },
  {
    category: 'phone',
    totalThreads: 39,
    sumOfTraffic: 569,
    sumOfKeywords: 743,
    avgKeywordPosition: 13.8,
    threadsInTop10: 23,
    sampleThreads: [
      'https://www.reddit.com/r/taxpros/comments/1iq7b4h/printercopyscanfax_that_works_with_google_phone/',
      'https://www.reddit.com/r/VOIP/comments/1eyt53w/small_business_phone_setup/'
    ]
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