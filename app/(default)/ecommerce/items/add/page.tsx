'use client'
// export const metadata = {
//     title: 'Form - Mosaic',
//     description: 'Page description',
// }

import { useState } from 'react';



import Tooltip from '@/components/tooltip'
import DropdownFull from '@/components/dropdown-full'
export default function FormLibrary() {
    const [selectedFile, setSelectedFile] = useState<any>(null);

    const handleFileChange = (event: any) => {
        const file = event.target.files[0];
        setSelectedFile(file);
    };

    const handleFileUpload = () => {
        if (selectedFile) {
            // Implement your file upload logic here
            console.log('Uploading file:', selectedFile);
        }
    };
    return (
        //   <div className=" bg-white dark:bg-gray-900">
        <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-[96rem] mx-auto">
            {/* Page header */}
            <div className="mb-8">
                <h1 className="text-2xl md:text-3xl text-gray-800 dark:text-gray-100 font-bold">Create Item</h1>
            </div>

            <div>
                {/* Components */}
                <div className="space-y-8 mt-8">
                    {/* Input Types */}
                    <div>
                        <div className="grid gap-5 md:grid-cols-3">
                            <div>
                                {/* Start */}
                                <div>
                                    <label className="block text-sm font-medium mb-1" htmlFor="default">
                                        Item Batch
                                    </label>
                                    <input id="default" className="form-input w-full" type="text" />
                                </div>
                                {/* End */}
                            </div>

                            <div>
                                {/* Start */}
                                <div>
                                    <label className="block text-sm font-medium mb-1" htmlFor="default">
                                        Oem Item Id
                                    </label>
                                    <input id="default" className="form-input w-full" type="text" />
                                </div>
                                {/* End */}
                            </div>

                            <div>
                                {/* Start */}
                                <div>
                                    <label className="block text-sm font-medium mb-1" htmlFor="default">
                                        Seller Item Id
                                    </label>
                                    <input id="default" className="form-input w-full" type="text" />
                                </div>
                                {/* End */}
                            </div>
                            <div>
                                {/* Start */}
                                <div>
                                    <label className="block text-sm font-medium mb-1" htmlFor="default">
                                        Item Firmware
                                    </label>
                                    <input id="default" className="form-input w-full" type="text" />
                                </div>
                                {/* End */}
                            </div>
                            <div>
                                {/* Start */}
                                <div>
                                    <label className="block text-sm font-medium mb-1" htmlFor="mandatory">
                                        Invoice
                                    </label>
                                    <div>
                                        <DropdownFull />
                                    </div>
                                </div>
                                {/* End */}
                            </div>
                            <div>
                                {/* Start */}
                                <div>
                                    <label className="block text-sm font-medium mb-1" htmlFor="mandatory">
                                        Manufacturer
                                    </label>
                                    <div>
                                        <DropdownFull />
                                    </div>
                                </div>
                                {/* End */}
                            </div>

                            <div>
                                {/* Start */}

                                <div className="m-1.5 ">
                                    <button className="btn bg-green-500 hover:bg-green-600 text-white w-full mt-5">Create Item</button>
                                </div>

                                {/* End */}
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <div className="w-full bg-white p-6 rounded-lg shadow-md mt-10">
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                    <input
                        type="file"
                        onChange={handleFileChange}
                        className="hidden"
                        id="fileInput"
                    />
                    <label
                        htmlFor="fileInput"
                        className="cursor-pointer block w-full"
                    >
                        <div className="flex flex-col items-center justify-center space-y-4">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-12 w-12 text-gray-400"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                                />
                            </svg>
                            <p className="text-gray-600">
                                {selectedFile
                                    ? `Selected: ${selectedFile.name}`
                                    : 'Drag and drop a file or click to select'}
                            </p>
                        </div>
                    </label>

                    {selectedFile && (
                        <button
                            onClick={handleFileUpload}
                            className="mt-4 w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition-colors"
                        >
                            Upload File
                        </button>
                    )}
                </div>
            </div>
        </div>
        //   </div>
    )
}
