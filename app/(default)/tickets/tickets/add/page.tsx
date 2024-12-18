export const metadata = {
    title: 'Form - Mosaic',
    description: 'Page description',
}

import Tooltip from '@/components/tooltip'
import DropdownFull from '@/components/dropdown-full'
export default function FormLibrary() {
    return (
        //   <div className=" bg-white dark:bg-gray-900">
        <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-[96rem] mx-auto">
            {/* Page header */}
            <div className="mb-8">
                <h1 className="text-2xl md:text-3xl text-gray-800 dark:text-gray-100 font-bold">Create a Ticket</h1>
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
                                    <label className="block text-sm font-medium mb-1" htmlFor="mandatory">
                                        Incident Type
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
                                        Assigned To
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
                                        Assigned By
                                    </label>
                                    <div >
                                        <DropdownFull />
                                    </div>
                                </div>
                                {/* End */}
                            </div>

                            <div>
                                {/* Start */}
                                <div>
                                    <label className="block text-sm font-medium mb-1" htmlFor="mandatory">
                                        Status
                                    </label>
                                    <div >
                                        <DropdownFull />
                                    </div>
                                </div>
                                {/* End */}
                            </div>
                            <div>
                                {/* Start */}
                                <div>
                                    <label className="block text-sm font-medium mb-1" htmlFor="mandatory">
                                        Priority
                                    </label>
                                    <div >
                                        <DropdownFull />
                                    </div>
                                </div>
                                {/* End */}
                            </div>

                            <div>
                                {/* Start */}
                                <div>
                                    <label className="block text-sm font-medium mb-1" htmlFor="default">
                                        Description
                                    </label>
                                    <textarea id="feedback" className="form-textarea w-full px-2 py-1" rows={4} ></textarea>
                                </div>
                                {/* End */}
                            </div>


                            <div>
                                {/* Start */}
                                <div>
                                    {/* <label className="block text-sm font-medium mb-1" htmlFor="default">
                                        Description
                                    </label>
                                    <textarea id="feedback" className="form-textarea w-full px-2 py-1" rows={4} ></textarea> */}
                                </div>
                                {/* End */}
                            </div>

                            <div>
                                {/* Start */}

                                {/* End */}
                            </div>

                            <div>
                                {/* Start */}
                                <div className="m-1.5 ">
                                    <button className="btn bg-green-500 hover:bg-green-600 text-white w-full">Create Inventory</button>
                                </div>
                                {/* End */}
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
        //   </div>
    )
}
