export default function Step7({ register, errors, isSubmitting }) {
    return (
        <div className='flex flex-col gap-5 bg-[#f5f7f2] p-12 rounded-lg'>
            <h2 className='font-bold text-3xl absolute transform -translate-y-20 bg-[#f5f7f2] pt-2 px-8 rounded-md'>Additional Notes:</h2>
            <div className='flex flex-col gap-5 items-center'>
                <div className='flex flex-col gap-5'>
                    <div className='w-full'>
                        <label className='font-bold mb-1 text-lg'>What is your preferred method of contact (phone, email, text)?*</label>
                        <select className='rounded-md mb-3 w-full' defaultValue="" {...register("preferredContact", { required: false })}>
                            <option value="" disabled>Select One:</option>
                            <option value="phone">Phone</option>
                            <option value="email">Email</option>
                            <option value="text">Text</option>
                        </select>
                        {errors.preferredContact?.type === "required" && (
                            <p className="text-red-800 font-bold mb-3">Preferred contact method is required</p>
                        )}
                    </div>
                    <div className='w-full'>
                        <label className='font-bold mb-1 text-lg'>Are you interested in Mi-Box portable storage (recommended for larger moves under tight deadlines or renovations)?*</label>
                        <select className='rounded-md mb-3 w-full' defaultValue="" {...register("includeMiBox", { required: false })}>
                            <option value="" disabled>Select One:</option>
                            <option value="yes">Yes</option>
                            <option value="no">No</option>
                        </select>
                        {errors.includeMiBox?.type === "required" && (
                            <p className="text-red-800 font-bold mb-3">Please indicate your interest in Mi-Box portable storage</p>
                        )}
                    </div>
                    <div className='w-full'>
                        <label className='font-bold mb-1 text-lg'>Will any disassembly or reassembly be involved?*</label>
                        <select className='rounded-md mb-3 w-full' defaultValue="" {...register("assemblyRequired", { required: false })}>
                            <option value="" disabled>Select One:</option>
                            <option value="yes">Yes</option>
                            <option value="no">No</option>
                        </select>
                        {errors.assemblyRequired?.type === "required" && (
                            <p className="text-red-800 font-bold mb-3">Please indicate if disassembly or reassembly is involved</p>
                        )}
                    </div>
                    <div className='w-full'>
                        <label className='font-bold mb-1 text-lg'>Are there any obstacles with parking, access points or tight/narrow hallways or stairwells?*</label>
                        <select className='rounded-md mb-3 w-full' defaultValue="" {...register("accessObstacles", { required: false })}>
                            <option value="" disabled>Select One:</option>
                            <option value="yes">Yes</option>
                            <option value="no">No</option>
                        </select>
                        {errors.accessObstacles?.type === "required" && (
                            <p className="text-red-800 font-bold mb-3">This field is required</p>
                        )}
                    </div>
                    <div className='w-full'>
                        <label className='font-bold mb-1 text-lg'>Are any of your items 200+ lbs?*</label>
                        <select className='rounded-md mb-3 w-full' defaultValue="" {...register("weightThreshold", { required: false })}>
                            <option value="" disabled>Select One:</option>
                            <option value="yes">Yes</option>
                            <option value="no">No</option>
                        </select>
                        {errors.weightThreshold?.type === "required" && (
                            <p className="text-red-800 font-bold mb-3">This field is required</p>
                        )}
                    </div>
                    <div className='w-full'>
                        <label className='font-bold mb-1 text-lg'>Will you ensure the inventory submitted is accurate? We can’t guarantee we can accommodate last minute additions.*</label>
                        <select className='rounded-md mb-3 w-full' defaultValue="" {...register("inventoryAccuracy", { required: true })}>
                            <option value="" disabled>Select One:</option>
                            <option value="yes">Yes</option>
                            <option value="no">No</option>
                        </select>
                        {errors.inventoryAccuracy?.type === "required" && (
                            <p className="text-red-800 font-bold mb-3">This field is required</p>
                        )}
                    </div>
                    <div className='w-full'>
                        <label className='font-bold mb-1 text-lg'>Is there any additional information you may have about the size and scope of your move?</label>
                        <textarea type="text" className="rounded-md w-full" placeholder="Additional Information" {...register("additionalInfo")} />
                    </div>
                </div>
                <button disabled={isSubmitting} type="submit" className='w-1/4 p-2 bg-[#f5f7f2] text-lg text-black border-[#f5f7f2] border-2 rounded border-[#f5f7f2] hover:bg-transparent hover:cursor-pointer'>Submit</button>
            </div>
        </div>
    )
}