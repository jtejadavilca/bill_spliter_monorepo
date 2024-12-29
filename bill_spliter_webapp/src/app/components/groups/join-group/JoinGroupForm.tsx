import React from "react";
import { IoEnterOutline } from "react-icons/io5";

export const JoinGroupForm = () => {
    return (
        <form>
            <h2 className="text-xl mb-2">Join group:</h2>
            <div className="flex">
                <div className="relative w-full">
                    <input
                        type="search"
                        id="search-dropdown"
                        className="uppercase size-14 block p-2.5 w-full z-20 text-2xl text-gray-900 bg-gray-50 rounded-e-lg rounded-s-gray-100 rounded-s-2 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500"
                        placeholder="Group code"
                    />
                    <button
                        type="submit"
                        className="absolute top-0 end-0 p-2 h-full text-sm font-medium text-white bg-blue-700 rounded-e-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                        <IoEnterOutline size={25} className="mx-2" />
                    </button>
                </div>
            </div>
        </form>
    );
};
