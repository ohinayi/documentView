import React from 'react';
import { Link, usePage } from '@inertiajs/react';
// import { createInertiaApp } from '@inertiajs/react';
// import { Inertia } from '@inertiajs/inertia';
import { router } from '@inertiajs/react'
import Pagination from "@/Components/Pagination";
import Authenticated from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';



const PersonnelIndex = ({auth}) => {
    const { personnels, sort, direction } = usePage().props;

    const handleSort = (field) => {
        router.get(
            route('personnels.index'),
            {
                sort: field,
                direction: sort === field && direction === 'asc' ? 'desc' : 'asc'
            },
            { preserveState: true }
        );
    };

    const SortableHeader = ({ field, children }) => (
        <th
            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer hover:bg-gray-50"
            onClick={() => handleSort(field)}
        >
            <div className="flex items-center">
                {children}
                {sort === field && (
                    <span className="ml-1">
                        {direction === 'asc' ? '▲' : '▼'}
                    </span>
                )}
            </div>
        </th>
    );

    return (
        <Authenticated
        user={auth.user}
        header={<h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">Dashboard</h2>}
    >
        <Head title="Dashboard" />

        <div className="py-12">
            <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg">
                    <div className="p-6 text-gray-900 dark:text-gray-100">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-2xl font-semibold text-gray-900">Personnel List</h1>
                <Link
                    href={route('personnels.create')}
                    className="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                    Add Personnel
                </Link>
            </div>
            <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                        <tr>
                            <SortableHeader field="name">Name</SortableHeader>
                            <SortableHeader field="rank">Rank</SortableHeader>
                            <SortableHeader field="serviceNo">Service No</SortableHeader>
                            <SortableHeader field="nextOfKin">Next of Kin</SortableHeader>
                            <SortableHeader field="unit">Unit</SortableHeader>
                            <SortableHeader field="yearOfPayment">Year of Payment</SortableHeader>
                            <SortableHeader field="dateOfDeath">Date of Death</SortableHeader>
                            <SortableHeader field="remarksStatus">Remarks Status</SortableHeader>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                        {personnels.data.map((personnel) => (
                            <tr key={personnel.id} className="hover:bg-gray-50">
                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{personnel.name}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{personnel.rank}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{personnel.serviceNo}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{personnel.nextOfKin}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{personnel.unit}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{personnel.yearOfPayment}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{personnel.dateOfDeath}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{personnel.remarksStatus}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                                    <Link
                                        href={route('personnels.edit', personnel.id)}
                                        className="text-indigo-600 hover:text-indigo-900"
                                    >
                                        Edit
                                    </Link>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <Pagination links={personnels.links} />
            {/* Add pagination here */}
        </div>

                    </div>
                </div>
            </div>
        </div>
    </Authenticated>

    );
};

export default PersonnelIndex;
