import React, { useState } from "react";
import { IoAdd } from "react-icons/io5";
import { CreateGroupModalForm } from "./CreateGroupModalForm";

export const CreateGroupForm = () => {
    const [openModal, setOpenModal] = useState(false);
    const onNewGroup = () => {
        console.log("openModal...");
        setOpenModal(true);
    };

    return (
        <>
            <div className="mt-10 w-full">
                <button
                    type="button"
                    data-modal-target="create-group-modal"
                    data-modal-toggle="create-group-modal"
                    className="group relative flex items-center justify-center text-white bg-gradient-to-br h-12 from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mb-2 w-full overflow-hidden"
                    onClick={() => onNewGroup()}
                >
                    <IoAdd
                        size={30}
                        className="font-bold absolute left-1/2 transform -translate-x-1/2 transition-all duration-300 group-hover:left-24 group-hover:transform-none"
                    />
                    <span className="text-lg opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:ml-8">
                        Create group
                    </span>
                </button>
            </div>
            <CreateGroupModalForm open={openModal} closeModal={() => setOpenModal(false)} />
        </>
    );
};
