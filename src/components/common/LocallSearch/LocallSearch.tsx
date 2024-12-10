import React, { useState } from "react";

interface SearchProps {
  filterText: string;
  setFilterText: (text: string) => void;
}

const LocallSearch: React.FC<SearchProps> = ({ filterText, setFilterText }) => {
  return (
    <section className="relative">
      <section className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
        <svg
          className="w-4 h-4 text-gray-500 dark:text-gray-400"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 20 20"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
          />
        </svg>
      </section>

      <input
        type="search"
        id="default-search"
        className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 
          rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
        placeholder=" جستجوی شهرستان"
        value={filterText}
        onChange={(e) => setFilterText(e.target.value)}
      />
    </section>
  );
};

export { LocallSearch };
