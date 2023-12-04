import { FaArrowLeft } from "react-icons/fa6";
import { useState } from "react";

export default function Step6({ register, step, setStep, isValid }) {
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
        <div className='flex flex-col gap-5 bg-[#f5f7f2] p-12 rounded-lg'>
            <h2 className='font-bold text-3xl absolute transform -translate-y-20 bg-[#f5f7f2] pt-2 px-8 rounded-md'>Location Notes:</h2>
            <div className='flex flex-col gap-5 items-center'>
                <div className='flex flex-col gap-5'>
                    <div className='w-full'>
                        <label className='font-bold mb-1 text-lg'>Please specify any potential obstacles at pickup/dropoff sites (e.g. steep stairwells, tight corners, difficult parking areas etc.)</label>
                        <textarea type="text" className="rounded-md w-full" placeholder="Other location notes" {...register("locationNotes")} />
                    </div>
                </div>
                <div className="flex justify-between w-full">
                    <div className='flex items-center'>
                        <FaArrowLeft onClick={(event) => { handleBackStep(event) }} className='hover:cursor-pointer' size='1.25rem' />
                    </div>
                    <div className='flex items-center'>
                        <button onClick={(event) => { handleNextStep(event) }} className='w-1/4 p-2 bg-[#f5f7f2] text-lg text-black border-[#f5f7f2] border-2 rounded border-[#f5f7f2] hover:bg-transparent hover:cursor-pointer'>Next</button>
                    </div>
                </div>
            </div>
        </div>
    )
}