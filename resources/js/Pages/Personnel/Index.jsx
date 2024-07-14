import React, { useState } from 'react';
import { Link, usePage } from '@inertiajs/react';
import { router } from '@inertiajs/react'
import Pagination from "@/Components/Pagination";
import Authenticated from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import { Search } from 'lucide-react';

const PersonnelIndex = ({ auth }) => {
    const { personnels, sort, direction } = usePage().props;
    const [searchTerm, setSearchTerm] = useState('');

    const handleSort = (field) => {
        router.get(
            route('personnels.index'),
            {
                sort: field,
                direction: sort === field && direction === 'asc' ? 'desc' : 'asc',
                search: searchTerm
            },
            { preserveState: true }
        );
    };

    const handleDelete = (id) => {
        if (confirm('Are you sure you want to delete this personnel record?')) {
            router.delete(route('personnels.destroy', id));
        }
    };

    const handleSearch = (e) => {
        e.preventDefault();
        router.get(
            route('personnels.index'),
            { search: searchTerm },
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
            header={<h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">Personnels</h2>}
        >
            <Head title="Dashboard" />
            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900 dark:text-gray-100">
                            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
                                <div className="flex flex-col sm:flex-row justify-between items-center mb-6">
                                    <h1 className="text-2xl font-semibold text-gray-900 mb-4 sm:mb-0">Personnel List</h1>
                                    <Link
                                        href={route('personnels.create')}
                                        className="w-full sm:w-auto px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                    >
                                        Add Personnel
                                    </Link>
                                </div>
                                <form onSubmit={handleSearch} className="mb-4">
                                    <div className="relative">
                                        <input
                                            type="text"
                                            placeholder="Search personnel..."
                                            value={searchTerm}
                                            onChange={(e) => setSearchTerm(e.target.value)}
                                            className="w-full pl-10 pr-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                        />
                                        <button type="submit" className="absolute inset-y-0 left-0 pl-3 flex items-center">
                                            <Search className="h-5 w-5 text-gray-400" />
                                        </button>
                                    </div>
                                </form>
                                <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                                    <div className="hidden overflow-x-auto lg:block">
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
                                                                className="text-indigo-600 hover:text-indigo-900 mr-2"
                                                            >
                                                                Edit
                                                            </Link>
                                                            <button
                                                                onClick={() => handleDelete(personnel.id)}
                                                                className="text-red-600 hover:text-red-900"
                                                            >
                                                                Delete
                                                            </button>
                                                        </td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>
                                    <div className="lg:hidden">
                                        {personnels.data.map((personnel) => (
                                            <div key={personnel.id} className="bg-white px-4 py-5 border-b border-gray-200 sm:px-6">
                                                <div className="flex justify-between items-center mb-2">
                                                    <div className="text-sm font-medium text-gray-900">{personnel.name}</div>
                                                    <div className="flex space-x-2">
                                                        <Link
                                                            href={route('personnels.edit', personnel.id)}
                                                            className="text-indigo-600 hover:text-indigo-900"
                                                        >
                                                            Edit
                                                        </Link>
                                                        <button
                                                            onClick={() => handleDelete(personnel.id)}
                                                            className="text-red-600 hover:text-red-900"
                                                        >
                                                            Delete
                                                        </button>
                                                    </div>
                                                </div>
                                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                                                    <div className="text-sm text-gray-500">Rank: {personnel.rank}</div>
                                                    <div className="text-sm text-gray-500">Service No: {personnel.serviceNo}</div>
                                                    <div className="text-sm text-gray-500">Next of Kin: {personnel.nextOfKin}</div>
                                                    <div className="text-sm text-gray-500">Unit: {personnel.unit}</div>
                                                    <div className="text-sm text-gray-500">Year of Payment: {personnel.yearOfPayment}</div>
                                                    <div className="text-sm text-gray-500">Date of Death: {personnel.dateOfDeath}</div>
                                                    <div className="text-sm text-gray-500 sm:col-span-2">Remarks Status: {personnel.remarksStatus}</div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                <Pagination links={personnels.links} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Authenticated>
    );
};

export default PersonnelIndex;
