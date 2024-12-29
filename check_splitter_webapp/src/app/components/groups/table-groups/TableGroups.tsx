import React, { useEffect, useState } from "react";
import { Group } from "../../../../interfaces";
import { CreateGroupForm } from "../create-group/CreateGroupForm";
import { Loader } from "../../ui/loader/Loader";

interface Props {
    groups: Group[];
    isLoading: boolean;
}

export const TableGroups = ({ groups, isLoading }: Props) => {
    if (isLoading) {
        return <Loader />;
    }

    if (!isLoading && groups.length === 0) {
        return (
            <div className="flex flex-col items-center justify-center h-96">
                <p className="text-gray-500 dark:text-gray-400">No groups found</p>
                <div className="w-full md:max-w-96">
                    <CreateGroupForm />
                </div>
            </div>
        );
    }

    return (
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" className="px-6 py-3">
                            Code
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Name
                        </th>
                        <th scope="col" className="px-6 py-3">
                            # Members
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Type
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Total Amount
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Your Part
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Status
                        </th>
                        <th scope="col" className="px-6 py-3">
                            <span className="sr-only">Edit</span>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {groups.map((group) => (
                        <tr
                            key={group.id}
                            className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                        >
                            <td className="px-6 py-4 whitespace-nowrap dark:text-white">{group.code}</td>
                            <td className="px-6 py-4">{group.name}</td>
                            <td className="px-6 py-4">{group.numMembers}</td>
                            <td className="px-6 py-4">{group.groupType}</td>
                            <td className="px-6 py-4">{group.totalAmount}</td>
                            <td className="px-6 py-4">Your part</td>
                            <td className="px-6 py-4">Status</td>
                            <td className="px-6 py-4 text-right">
                                <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">
                                    Edit
                                </a>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};
