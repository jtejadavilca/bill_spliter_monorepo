import React, { useState } from "react";
import { MdContentCopy, MdCheckCircleOutline } from "react-icons/md";
import { generateRandonCode } from "../../../../utils/utils";
import { useForm } from "react-hook-form";
import { apiCreateGroup } from "../../../../api";
import { useAuthStore } from "../../../../store";

type GroupFormFields = {
    code: string;
    name: string;
    numMembers: number;
    groupType: string;
    totalAmount: number;
};

interface Props {
    open?: boolean;
    closeModal: () => void;
}
export const CreateGroupModalForm = ({ open = false, closeModal }: Props) => {
    const [isCopied, setIsCopied] = useState<boolean>(false);
    const [generatedCode, setGeneratedCode] = useState<string>("");
    const user = useAuthStore((state) => state.user);
    const logout = useAuthStore((state) => state.logout);

    const { handleSubmit, register, formState } = useForm<GroupFormFields>({
        defaultValues: async () => {
            const gc = generateRandonCode();
            setGeneratedCode(gc);
            return {
                code: gc,
                name: "",
                numMembers: 4,
                groupType: "",
                totalAmount: 0,
            };
        },
    });

    const copyCode = () => {
        setIsCopied(true);
        navigator.clipboard.writeText(generatedCode);
        setTimeout(() => {
            setIsCopied(false);
        }, 3000);
    };

    const onSubmit = async (data: GroupFormFields) => {
        if (!user || !user.id) {
            logout();
            throw new Error("User not found");
        }

        const newGroup = {
            ...data,
            userId: user.id,
        };

        apiCreateGroup(newGroup).then((response) => {
            console.log("Grupo creado correctamente! groupId: ", response?.id);
        });
    };

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
                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4" action="#">
                        <div className="mb-4">
                            <label className="block text-sm font-medium text-gray-700">Code</label>
                            <div className="flex items-center justify-evenly">
                                <input
                                    type="text"
                                    className="uppercase tracking-wider mt-1 block w-full border border-gray-300 bg-slate-200 rounded px-3 py-2 read cursor-not-allowed"
                                    readOnly={true}
                                    placeholder="Code"
                                    {...register("code", { required: true, minLength: 11 })}
                                />
                                {isCopied ? (
                                    <button className="ml-2 text-green-500" disabled={true}>
                                        <MdCheckCircleOutline size={25} />
                                    </button>
                                ) : (
                                    <button className="ml-2" onClick={() => copyCode()}>
                                        <MdContentCopy size={25} />
                                    </button>
                                )}
                            </div>
                        </div>

                        <div className="mb-4">
                            <label className="block text-sm font-medium text-gray-700">Group Name</label>
                            <input
                                type="text"
                                {...register("name", { required: true, minLength: 3 })}
                                className="mt-1 block w-full border border-gray-300 rounded px-3 py-2"
                                placeholder="Jose's farewell"
                            />
                        </div>

                        <div className="mb-4">
                            <label className="block text-sm font-medium text-gray-700"># members</label>
                            <input
                                type="number"
                                {...register("numMembers", { required: true, min: 1 })}
                                className="mt-1 block w-full border border-gray-300 rounded px-3 py-2"
                                placeholder="Ingrese un número"
                            />
                        </div>

                        <div className="mb-4">
                            <label className="block text-sm font-medium text-gray-700">Group type</label>
                            <input
                                type="text"
                                {...register("groupType", { required: true, minLength: 3 })}
                                className="mt-1 block w-full border border-gray-300 rounded px-3 py-2"
                                placeholder="Lunch? Dinner? Birthday?"
                            />
                        </div>

                        <div className="mb-4">
                            <label className="block text-sm font-medium text-gray-700">Amount</label>
                            <input
                                type="text"
                                {...register("totalAmount", { required: true, min: 0.0001 })}
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
