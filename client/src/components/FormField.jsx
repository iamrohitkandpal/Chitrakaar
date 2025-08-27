import React from 'react';

const FormField = ({
  labelName,
  type,
  name,
  placeholder,
  value,
  handleChange,
  isSurpriseMe,
  handleSurpriseMe,
}) => (
  <div className='space-y-2'>
    <div className="flex items-center justify-between">
      <label
        htmlFor={name}
        className="block text-sm font-semibold text-gray-900 dark:text-gray-100 transition-colors duration-200"
      >
        {labelName}
      </label>
      {isSurpriseMe && (
        <button
          type="button"
          onClick={handleSurpriseMe}
          className="font-semibold text-xs bg-gradient-to-r from-primary-100 to-primary-200 dark:from-primary-900/30 dark:to-primary-800/30 py-2 px-3 rounded-lg text-primary-700 dark:text-primary-300 border border-primary-200 dark:border-primary-700 hover:from-primary-200 hover:to-primary-300 dark:hover:from-primary-800/40 dark:hover:to-primary-700/40 transition-all duration-200 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 dark:focus:ring-offset-dark-800"
        >
          ✨ Surprise me
        </button>
      )}
    </div>
    <input
      type={type}
      id={name}
      name={name}
      className="bg-white dark:bg-dark-700 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-gray-100 text-sm rounded-lg focus:ring-2 focus:ring-primary-500 dark:focus:ring-primary-400 focus:border-primary-500 dark:focus:border-primary-400 outline-none block w-full p-3.5 transition-all duration-200 placeholder:text-gray-500 dark:placeholder:text-gray-300 hover:border-gray-400 dark:hover:border-gray-500"
      placeholder={placeholder}
      value={value}
      onChange={handleChange}
      required
    />
  </div>
);

export default FormField;