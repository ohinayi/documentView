import React from "react";
import { useForm } from "@inertiajs/react";
import InputLabel from "@/Components/InputLabel";
import TextInput from "@/Components/TextInput";
import InputError from "@/Components/InputError";
import Authenticated from "@/Layouts/AuthenticatedLayout";

const PersonnelForm = ({ personnel = {}, auth, isEditing = false }) => {
    const currentYear = new Date().getFullYear();
    const years = Array.from({ length: currentYear - 2009 }, (_, i) => currentYear - i);

    const nigerianOfficerRanks = [
        "Second Lieutenant",
        "Lieutenant",
        "Captain",
        "Major",
        "Lieutenant Colonel",
        "Colonel",
        "Brigadier General",
        "Major General",
        "Lieutenant General",
        "General",
        "Field Marshal"
    ];

    const { data, setData, post, put, processing, errors } = useForm({
        name: personnel.name || "",
        rank: personnel.rank || "",
        serviceNo: personnel.serviceNo || "",
        nextOfKin: personnel.nextOfKin || "",
        unit: personnel.unit || "",
        yearOfPayment: personnel.yearOfPayment || currentYear.toString(),
        dateOfDeath: personnel.dateOfDeath || "",
        remarksStatus: personnel.remarksStatus || "",
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        if (isEditing) {
            put(route("personnels.update", personnel.id));
        } else {
            post(route("personnels.store"));
        }
    };

    return (
        <Authenticated
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
                    {isEditing ? "Edit Personnel" : "Add Personnel"}
                </h2>
            }
        >
            <div className="py-12">
                <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900 dark:text-gray-100">
                            <form onSubmit={handleSubmit} className="space-y-4">
                                <div>
                                    <InputLabel htmlFor="name" value="Name" />
                                    <TextInput
                                        id="name"
                                        type="text"
                                        name="name"
                                        value={data.name}
                                        className="mt-1 block w-full"
                                        onChange={(e) => setData("name", e.target.value)}
                                        required
                                    />
                                    <InputError message={errors.name} className="mt-2" />
                                </div>

                                <div>
                                    <InputLabel htmlFor="rank" value="Rank" />
                                    <select
                                        id="rank"
                                        name="rank"
                                        value={data.rank}
                                        className="mt-1 block w-full border-gray-300 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 focus:border-indigo-500 dark:focus:border-indigo-600 focus:ring-indigo-500 dark:focus:ring-indigo-600 rounded-md shadow-sm"
                                        onChange={(e) => setData("rank", e.target.value)}
                                        required
                                    >
                                        <option value="">Select Rank</option>
                                        {nigerianOfficerRanks.map((rank) => (
                                            <option key={rank} value={rank}>{rank}</option>
                                        ))}
                                    </select>
                                    <InputError message={errors.rank} className="mt-2" />
                                </div>

                                <div>
                                    <InputLabel htmlFor="serviceNo" value="Service Number" />
                                    <TextInput
                                        id="serviceNo"
                                        type="text"
                                        name="serviceNo"
                                        value={data.serviceNo}
                                        className="mt-1 block w-full"
                                        onChange={(e) => setData("serviceNo", e.target.value)}
                                        required
                                    />
                                    <InputError message={errors.serviceNo} className="mt-2" />
                                </div>

                                <div>
                                    <InputLabel htmlFor="nextOfKin" value="Next of Kin" />
                                    <TextInput
                                        id="nextOfKin"
                                        type="text"
                                        name="nextOfKin"
                                        value={data.nextOfKin}
                                        className="mt-1 block w-full"
                                        onChange={(e) => setData("nextOfKin", e.target.value)}
                                        required
                                    />
                                    <InputError message={errors.nextOfKin} className="mt-2" />
                                </div>

                                <div>
                                    <InputLabel htmlFor="unit" value="Unit" />
                                    <TextInput
                                        id="unit"
                                        type="text"
                                        name="unit"
                                        value={data.unit}
                                        className="mt-1 block w-full"
                                        onChange={(e) => setData("unit", e.target.value)}
                                        required
                                    />
                                    <InputError message={errors.unit} className="mt-2" />
                                </div>

                                <div>
                                    <InputLabel htmlFor="yearOfPayment" value="Year of Payment" />
                                    <select
                                        id="yearOfPayment"
                                        name="yearOfPayment"
                                        value={data.yearOfPayment}
                                        className="mt-1 block w-full border-gray-300 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 focus:border-indigo-500 dark:focus:border-indigo-600 focus:ring-indigo-500 dark:focus:ring-indigo-600 rounded-md shadow-sm"
                                        onChange={(e) => setData("yearOfPayment", e.target.value)}
                                        required
                                    >
                                        <option value="">Select Year</option>
                                        {years.map((year) => (
                                            <option key={year} value={year.toString()}>{year}</option>
                                        ))}
                                    </select>
                                    <InputError message={errors.yearOfPayment} className="mt-2" />
                                </div>

                                <div>
                                    <InputLabel htmlFor="dateOfDeath" value="Date of Death" />
                                    <TextInput
                                        id="dateOfDeath"
                                        type="date"
                                        name="dateOfDeath"
                                        value={data.dateOfDeath}
                                        className="mt-1 block w-full"
                                        onChange={(e) => setData("dateOfDeath", e.target.value)}
                                        required
                                    />
                                    <InputError message={errors.dateOfDeath} className="mt-2" />
                                </div>

                                <div>
                                    <InputLabel htmlFor="remarksStatus" value="Remarks Status" />
                                    <select
                                        id="remarksStatus"
                                        name="remarksStatus"
                                        value={data.remarksStatus}
                                        className="mt-1 block w-full border-gray-300 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 focus:border-indigo-500 dark:focus:border-indigo-600 focus:ring-indigo-500 dark:focus:ring-indigo-600 rounded-md shadow-sm"
                                        onChange={(e) => setData("remarksStatus", e.target.value)}
                                        required
                                    >
                                        <option value="">Select Status</option>
                                        <option value="Pending">Pending</option>
                                        <option value="Paid">Paid</option>
                                        <option value="Declined">Declined</option>
                                    </select>
                                    <InputError message={errors.remarksStatus} className="mt-2" />
                                </div>

                                <div>
                                    <button
                                        type="submit"
                                        disabled={processing}
                                        className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                    >
                                        {isEditing ? "Update Personnel" : "Add Personnel"}
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </Authenticated>
    );
};

export default PersonnelForm;
