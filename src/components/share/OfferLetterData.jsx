import React from 'react';

const OfferLetterData = () => {
    return (
        <div className='mt-3 '>
        <div className="flex  mx-auto m-3 mr-3">
            <div className="relative items-center mx-auto w-full">
          <label className="sr-only" htmlFor="search"> Search </label>

          <input
            className="h-10 mx-auto w-full items-center text-center rounded-lg border-none bg-white text-sm "
            id="search"
            type="search"
            placeholder="Search website..."
          />

          <button
            type="button"
            className="absolute end-1 top-1/2 -translate-y-1/2 rounded-full bg-gray-50 p-2 text-gray-600 transition hover:text-gray-700"
          >
            <span className="sr-only">Search</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </button>
        </div>
        </div>
                
        {/* table */}

         {/*
  Heads up! 👋

  This component comes with some `rtl` classes. Please remove them if they are not needed in your project.
*/}

<div className="overflow-x-auto rounded-lg border border-gray-200 mr-3">
  <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
    <thead className="ltr:text-left rtl:text-right">
      <tr>
        <button className=" whitespace-nowrap px-4 py-2 font-medium text-gray-900">
            sd
        </button>
        <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Date of Birth</th>
        <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Role</th>
        <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Salary</th>
      </tr>
    </thead>

    <tbody className="divide-y divide-gray-200">
      <tr>
        <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">John Doe</td>
        <td className="whitespace-nowrap px-4 py-2 text-gray-700">24/05/1995</td>
        <td className="whitespace-nowrap px-4 py-2 text-gray-700">Web Developer</td>
        <td className="whitespace-nowrap px-4 py-2 text-gray-700">$120,000</td>
      </tr>

      

   
    </tbody>
  </table>
</div>
        </div>
    );
};

export default OfferLetterData;