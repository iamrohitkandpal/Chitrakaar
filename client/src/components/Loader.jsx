import React from 'react';

const Loader = () => (
  <div role="status" className="flex flex-col items-center space-y-3">
    <div className="relative">
      <div className="w-12 h-12 border-4 border-gray-200 dark:border-gray-700 rounded-full animate-pulse"></div>
      <div className="absolute top-0 left-0 w-12 h-12 border-4 border-primary-600 dark:border-primary-400 border-t-transparent rounded-full animate-spin"></div>
    </div>
    <div className="text-sm font-medium text-gray-600 dark:text-gray-300 animate-pulse">
      Creating magic...
    </div>
    <div className="flex space-x-1">
      <div className="w-2 h-2 bg-primary-600 dark:bg-primary-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
      <div className="w-2 h-2 bg-primary-600 dark:bg-primary-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
      <div className="w-2 h-2 bg-primary-600 dark:bg-primary-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
    </div>
  </div>
);

export default Loader;