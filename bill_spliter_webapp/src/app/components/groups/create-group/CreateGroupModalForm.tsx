import React, { useEffect, useState } from "react";
import clsx from "clsx";

interface Props {
    open?: boolean;
    closeModal: () => void;
}
export const CreateGroupModalForm = ({ open = false, closeModal }: Props) => {
    return (
        open && (
            <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-40">
                <div className="bg-white w-96 p-6 rounded shadow-lg relative z-50">
                    {/* Botón para cerrar */}
                    <button onClick={closeModal} className="absolute top-2 right-2 text-gray-400 hover:text-gray-600">
                        &#10005;
                    </button>

                    {/* Título */}
                    <h2 className="text-lg font-bold mb-4">Create New Group</h2>

                    {/* Formulario */}
                    <form>
                        <div className="mb-4">
                            <label className="block text-sm font-medium text-gray-700">Code</label>
                            <input
                                type="text"
                                className="mt-1 block w-full border border-gray-300 rounded px-3 py-2"
                                placeholder="Code"
                            />
                        </div>

                        <div className="mb-4">
                            <label className="block text-sm font-medium text-gray-700">Campo 2</label>
                            <input
                                type="text"
                                className="mt-1 block w-full border border-gray-300 rounded px-3 py-2"
                                placeholder="Group name"
                            />
                        </div>

                        <div className="mb-4">
                            <label className="block text-sm font-medium text-gray-700"># members</label>
                            <input
                                type="number"
                                className="mt-1 block w-full border border-gray-300 rounded px-3 py-2"
                                placeholder="Ingrese un número"
                            />
                        </div>

                        <div className="mb-4">
                            <label className="block text-sm font-medium text-gray-700">Group type</label>
                            <input
                                type="text"
                                className="mt-1 block w-full border border-gray-300 rounded px-3 py-2"
                                placeholder="Lunch? Dinner? Birthday?"
                            />
                        </div>

                        <div className="mb-4">
                            <label className="block text-sm font-medium text-gray-700">Amount</label>
                            <input
                                type="text"
                                className="mt-1 block w-full border border-gray-300 rounded px-3 py-2"
                                placeholder="20.50"
                            />
                        </div>

                        {/* <div className="mb-4">
                            <label className="block text-sm font-medium text-gray-700">Selección</label>
                            <select className="mt-1 block w-full border border-gray-300 rounded px-3 py-2">
                                <option value="">Seleccione una opción</option>
                                <option value="1">Opción 1</option>
                                <option value="2">Opción 2</option>
                                <option value="3">Opción 3</option>
                            </select>
                        </div> */}

                        {/* Botón guardar */}
                        <button type="submit" className="bnt-primary w-full mt-6">
                            Guardar
                        </button>
                    </form>
                </div>
            </div>
        )
    );
};
