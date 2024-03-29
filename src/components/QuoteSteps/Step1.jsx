import { useState } from "react";

export default function Step1({ register, setStep, step, isValid }) {
    const [missingFields, setMissingFields] = useState(false);

    const handleNextStep = async (event) => {
        event.preventDefault();
        if (isValid) {
            setStep(step + 1);
        }
        else {
            setMissingFields(true);
        }
    }

    return (
        <div className='flex flex-col gap-3 bg-[#f4dd973a] p-12 rounded-lg'>
            <h2 className='font-bold text-3xl absolute transform -translate-y-[91px] bg-[#f4dd973a] pt-2 px-8 rounded-md'>Contact Info</h2>
            <div className='flex flex-col gap-5 items-center'>
                <div className='flex flex-col gap-5'>
                    <div className="grid grid-cols-2 gap-5">
                        <div>
                            <label className='font-bold mb-1 text-lg'>First Name*</label>
                            <input type="text" className="rounded-md w-full" placeholder="First Name" {...register("firstName", { required: true })} />
                            {missingFields && (
                                <p className="text-red-800 font-bold mb-3">First name is required</p>
                            )}
                        </div>
                        <div>
                            <label className='font-bold mb-1 text-lg'>Last Name*</label>
                            <input type="text" className="rounded-md w-full" placeholder="Last Name" {...register("lastName", { required: true })} />
                            {missingFields && (
                                <p className="text-red-800 font-bold mb-3">Last name is required</p>
                            )}
                        </div>
                    </div>
                    <div className="flex gap-5 w-full">
                        <div className='w-3/4'>
                            <label className='font-bold mb-1 text-lg'>Phone*</label>
                            <input type="tel" className="rounded-md w-full" placeholder="(123) 555-6789" {...register("phoneNumber", { required: true })} />
                            {missingFields && (
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
                        {missingFields && (
                            <p className="text-red-800 font-bold mb-3">Email is required</p>
                        )}
                    </div>
                </div>
                <div className="flex justify-end w-full">
                    <button onClick={(event) => { handleNextStep(event) }} className='block text-primary rounded-md md:bg-primary px-3 py-3 text-center font-medium md:text-white lg:bg-white lg:text-primary hover:cursor-pointer'>Next</button>
                </div>
            </div>
        </div>
    )
}