import { FaArrowLeft } from "react-icons/fa6";
import { useState } from "react";

export default function Step2({ register, errors, step, setStep, isValid }) {
    const [missingFields, setMissingFields] = useState(false);

    const handleNextStep = (event) => {
        event.preventDefault();
        if (isValid) {
            setStep(step + 1);
        }
        else {
            setMissingFields(true);
        }
    }

    const handleBackStep = (event) => {
        event.preventDefault();
        setStep(step - 1);
    }

    return (
        <div className='flex flex-col gap-5 bg-[#f4dd973a] p-12 rounded-lg'>
            <h3 className='font-bold text-3xl absolute transform -translate-y-[91px] bg-[#f4dd973a] pt-2 px-8 rounded-md'>Service Date</h3>
            <div className='flex flex-col gap-5 items-center'>
                <div className='flex flex-col gap-5'>
                    <div className='flex gap-5 w-full'>
                        <div className='w-1/3'>
                            <h3 className='font-bold mb-1 text-lg'>Desired Date*</h3>
                            <input className='rounded-md mb-3 w-full' type="date" placeholder="mm/dd/yy" {...register("moveDate", { required: true })} />
                            {missingFields && (
                                <p className="text-red-800 font-bold mb-3">Email is required</p>
                            )}
                        </div>
                        <div>
                            <label className='font-bold mb-1 text-lg'>Flexibility*</label>
                            <select className='rounded-md mb-3 w-full' defaultValue="" {...register("flexibility", { required: true })}>
                                <option value="" disabled>How soon do you need services?</option>
                                <option value="Within 1 week">Within 1 week</option>
                                <option value="Within 2 weeks">Within 2 weeks</option>
                                <option value="Within 30 days">Within 30 Days</option>
                                <option value="By the end of this month">By the end of this month</option>
                                <option value="More than one month">More than one month</option>
                            </select>
                            {missingFields && (
                                <p className="text-red-800 font-bold mb-3">Flexibility is required</p>
                            )}
                        </div>
                    </div>
                </div>
                <div className="flex justify-between w-full">
                    <div className='flex items-center'>
                        <FaArrowLeft onClick={(event) => { handleBackStep(event) }} className='hover:cursor-pointer' size='1.25rem' />
                    </div>
                    <div className='flex items-center'>
                        <button onClick={(event) => { handleNextStep(event) }} className='block text-primary rounded-md md:bg-primary px-3 py-3 text-center font-medium md:text-white lg:bg-white lg:text-primary hover:cursor-pointer'>Next</button>
                    </div>
                </div>
            </div>
        </div>
    )
}