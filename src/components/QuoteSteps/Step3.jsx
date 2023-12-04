import { FaArrowLeft } from "react-icons/fa6";
import { useState } from "react";
import { set } from "react-hook-form";

export default function Step3({ register, isValid, setValue, step, setStep, setMoveType }) {

    function toggleType(option) {
        const allOptions = document.querySelectorAll('[name=moveType]');
        const selected = document.querySelector(`#${option}`);
        const radioDiv = selected.parentNode;
        allOptions.forEach((op) => {
            if (op !== selected) {
                op.parentNode.classList.remove('bg-green-200');
            }
        });
        selected.checked = true;
        radioDiv.classList.add("bg-green-200");
        setMoveType(selected.value);
        setValue('moveType', selected.value);
    }

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
            <h2 className='font-bold text-3xl absolute transform -translate-y-20 bg-[#f5f7f2] pt-2 px-8 rounded-md'>Service Details</h2>
            <div className='flex flex-col gap-5 items-center'>
                <div className='flex flex-col gap-5'>
                    <div>
                        <label className='font-bold mb-1 text-lg'>Size*</label>
                        <select className='rounded-md mb-3 w-full' defaultValue="" {...register("moveSize", { required: true })}>
                            <option value="" disabled>Select a size</option>
                            <option value="Single Room or Less (600 SQFT)">Single Room or Less (600 SQFT)</option>
                            <option value="" disabled>---</option>
                            <option value="Small Commercial Space (Under 600 SQFT)">Small Commercial Space (Under 600 SQFT)</option>
                            <option value="Medium Commercial Space (600-1000 SQFT)">Medium Commercial Space (600-1000 SQFT)</option>
                            <option value="Large Commercial Space (1000-1500 SQFT)">Large Commercial Space (1000-1500 SQFT)</option>
                            <option value="Very Large Commercial Space (1500-2000 SQFT)">Very Large Commercial Space (1500-2000 SQFT)</option>
                            <option value=" Jumbo Commercial Space (2000+ SQFT)"> Jumbo Commercial Space (2000+ SQFT)</option>
                            <option value="" disabled>---</option>
                            <option value="Studio Apartment (600 SQFT)">Studio Apartment (600 SQFT)</option>
                            <option value="1 Bedroom Apartment (600-1000 SQFT)">1 Bedroom Apartment (600-1000 SQFT)</option>
                            <option value="2 Bedroom Apartment (1000-1400 SQFT)">2 Bedroom Apartment (1000-1400 SQFT)</option>
                            <option value="3 Bedroom Apartment (1400-2000 SQFT)">3 Bedroom Apartment (1400-2000 SQFT)</option>
                            <option value="" disabled>---</option>
                            <option value="1 Bedroom House (800-1000 SQFT)">1 Bedroom House (800-1000 SQFT)</option>
                            <option value="1 Bedroom House (Large) (1000-1200 SQFT)">1 Bedroom House (Large) (1000-1200 SQFT)</option>
                            <option value="2 Bedroom House (1400-1600 SQFT)">2 Bedroom House (1400-1600 SQFT)</option>
                            <option value=" 2 Bedroom House (Large) (1600-1800 SQFT)"> 2 Bedroom House (Large) (1600-1800 SQFT)</option>
                            <option value="3 Bedroom House (2000-2200 SQFT)">3 Bedroom House (2000-2200 SQFT)</option>
                            <option value=" 3 Bedroom House (Large) (2200-2400 SQFT)"> 3 Bedroom House (Large) (2200-2400 SQFT)</option>
                            <option value="4 Bedroom House (2600-2800 SQFT)">4 Bedroom House (2600-2800 SQFT)</option>
                            <option value=" 4 Bedroom House (Large) (2800-3000 SQFT)"> 4 Bedroom House (Large) (2800-3000 SQFT)</option>
                            <option value="5 Bedroom House (3300-3600 SQFT)">5 Bedroom House (3300-3600 SQFT)</option>
                            <option value="5 Bedroom House (Large) (3600-4000 SQFT)">5 Bedroom House (Large) (3600-4000 SQFT)</option>
                            <option value="" disabled>---</option>
                            <option value="5 X 10 Storage Unit">5 X 10 Storage Unit</option>
                            <option value="5 X 15 Storage Unit">5 X 15 Storage Unit</option>
                            <option value="10 X 10 Storage Unit">10 X 10 Storage Unit</option>
                            <option value="10 X 15 Storage Unit">10 X 15 Storage Unit</option>
                            <option value="10 X 20 Storage Unit">10 X 20 Storage Unit</option>
                        </select>
                        {missingFields && (
                            <p className="text-red-800 font-bold mb-3">Size is required</p>
                        )}
                    </div>
                    <div>
                        <label className='font-bold mb-2 text-lg'>Type*</label>
                        <div className='flex flex-col justify-start gap-3 w-1/2'>
                            <div className='bg-[#e0e1e2] w-72 py-2 px-4 text-lg shadow-lg' onClick={() => toggleType("type-1")}>
                                <input id="type-1" className='opacity-0' type='radio' value="Moving with our trucks" {...register("moveType", { required: false })} />
                                <label>Moving with our trucks</label>
                            </div>
                            <div className='bg-[#e0e1e2] w-72 py-2 px-4 text-lg shadow-lg' onClick={() => toggleType("type-2")}>
                                <input id='type-2' className='opacity-0' type='radio' value="Single Site Rearrangement" {...register("moveType", { required: false })} />
                                <label>Single Site Rearrangement</label>
                            </div>
                            <div className='bg-[#e0e1e2] w-72 py-2 px-4 text-lg shadow-lg' onClick={() => toggleType("type-3")}>
                                <input id='type-3' className='opacity-0' type='radio' value="Storage/Rental Load Only" {...register("moveType", { required: false })} />
                                <label>Storage/Rental Load Only</label>
                            </div>
                            <div className='bg-[#e0e1e2] w-72 py-2 px-4 text-lg shadow-lg' onClick={() => toggleType("type-4")}>
                                <input id='type-4' className='opacity-0' type='radio' value="Storage/Rental Unload Only" {...register("moveType", { required: false })} />
                                <label>Storage/Rental Unload Only</label>
                            </div>
                        </div>
                        {missingFields && (
                            <p className="text-red-800 font-bold mb-3">Type is required</p>
                        )}
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