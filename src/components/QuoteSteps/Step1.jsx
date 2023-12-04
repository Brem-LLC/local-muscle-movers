export default function Step1({ register, errors, setStep, step }) {

    const handleNextStep = async (event) => {
        event.preventDefault();
        setStep(step + 1);
    }

    return (
        <div className='flex flex-col gap-3 bg-[#f5f7f2] p-12 rounded-lg'>
            <h2 className='font-bold text-3xl absolute transform -translate-y-20 bg-[#f5f7f2] pt-2 px-8 rounded-md'>Contact Info</h2>
            <div className='flex flex-col gap-5 items-center'>
                <div className='flex flex-col gap-5'>
                    <div className="grid grid-cols-2 gap-5">
                        <div>
                            <label className='font-bold mb-1 text-lg'>First Name*</label>
                            <input type="text" className="rounded-md w-full" placeholder="First Name" {...register("firstName", { required: true })} />
                            {errors.firstName?.type === "required w-full" && (
                                <p className="text-red-800 font-bold mb-3">First name is required</p>
                            )}
                        </div>
                        <div>
                            <label className='font-bold mb-1 text-lg'>Last Name*</label>
                            <input type="text" className="rounded-md w-full" placeholder="Last Name" {...register("lastName", { required: true })} />
                            {errors.lastName?.type === "required" && (
                                <p className="text-red-800 font-bold mb-3">Last name is required</p>
                            )}
                        </div>
                    </div>
                    <div className="flex gap-5 w-full">
                        <div className='w-3/4'>
                            <label className='font-bold mb-1 text-lg'>Phone*</label>
                            <input type="tel" className="rounded-md w-full" placeholder="(123) 555-6789" {...register("phoneNumber", { required: true })} />
                            {errors.phone?.type === "required" && (
                                <p className="text-red-800 font-bold mb-3">Phone number is required</p>
                            )}
                        </div>
                        <div className='w-1/4'>
                            <label className='font-bold mb-1 text-lg'>Ext.</label>
                            <input type="number" className='rounded-md w-full' placeholder='#' {...register("extention", { required: false })} />
                        </div>
                    </div>
                    <div className='grid grid-cols-1'>
                        <label className='font-bold mb-1 text-lg'>Email*</label>
                        <input type="text" className="rounded-md w-full" placeholder="you@example.com" {...register("email", { required: true })} />
                        {errors.email?.type === "required" && (
                            <p className="text-red-800 font-bold mb-3">Email is required</p>
                        )}
                    </div>
                </div>
                <div className="flex justify-end w-full">
                    <button onClick={(event) => { handleNextStep(event) }} className='w-1/4 p-2 bg-[#f5f7f2] text-lg text-black border-[#f5f7f2] border-2 rounded border-[#f5f7f2] hover:bg-transparent hover:cursor-pointer'>Next</button>
                </div>
            </div>
        </div>
    )
}