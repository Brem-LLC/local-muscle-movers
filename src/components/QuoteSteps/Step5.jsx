import { useEffect, useState } from "react";
import { FaArrowLeft } from "react-icons/fa6";

export default function Step5({ register, isValid, setStep, step, moveType }) {
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

    useEffect(() => {
        if (moveType !== "Moving with our trucks") {
            setStep(step + 1)
        }
    }, [moveType])

    const handleBackStep = (event) => {
        event.preventDefault();
        setStep(step - 1);
    }

    return (
        <>
            {moveType === "Moving with our trucks" &&
                <div className='flex flex-col gap-5 bg-[#f5f7f2] p-12 rounded-lg'>
                    <h2 className='font-bold text-3xl absolute transform -translate-y-20 bg-[#f5f7f2] pt-2 px-8 rounded-md'>Destination</h2>
                    <div className="flex flex-col gap-5 items-center">
                        <div className='flex flex-col gap-5'>
                            <div className='flex gap-5'>
                                <div className='w-full'>
                                    <label className='font-bold mb-1 text-lg'>Street Address*</label>
                                    <input type="text" className="rounded-md w-full" placeholder="12 Example St." {...register("destinationStreet", { required: true })} />
                                    {missingFields && (
                                        <p className="text-red-800 font-bold mb-3">Street Address is required</p>
                                    )}
                                </div>
                                <div>
                                    <label className='font-bold mb-1 text-lg'>City*</label>
                                    <input type="text" className="rounded-md w-full" placeholder="City" {...register("destinationCity", { required: true })} />
                                    {missingFields && (
                                        <p className="text-red-800 font-bold mb-3">City is required</p>
                                    )}
                                </div>
                            </div>
                            <div className='flex gap-5'>
                                <div className='w-full'>
                                    <label className='font-bold mb-1 text-lg'>State*</label>
                                    <select className='rounded-md mb-3 w-full' defaultValue="Maine" {...register("destinationState", { required: true })}>
                                        <option value="Alabama">Alabama</option>
                                        <option value="Alaska">Alaska</option>
                                        <option value="Arizona">Arizona</option>
                                        <option value="Arkansas">Arkansas</option>
                                        <option value="California">California</option>
                                        <option value="Colorado">Colorado</option>
                                        <option value="Connecticut">Connecticut</option>
                                        <option value="Delaware">Delaware</option>
                                        <option value="District of Columbia">District of Columbia</option>
                                        <option value="Florida">Florida</option>
                                        <option value="Georgia">Georgia</option>
                                        <option value="Hawaii">Hawaii</option>
                                        <option value="Idaho">Idaho</option>
                                        <option value="Illinois">Illinois</option>
                                        <option value="Indiana">Indiana</option>
                                        <option value="Iowa">Iowa</option>
                                        <option value="Kansas">Kansas</option>
                                        <option value="Kentucky">Kentucky</option>
                                        <option value="Louisiana">Louisiana</option>
                                        <option value="Maine">Maine</option>
                                        <option value="Maryland">Maryland</option>
                                        <option value="Massachusetts">Massachusetts</option>
                                        <option value="Michigan">Michigan</option>
                                        <option value="Minnesota">Minnesota</option>
                                        <option value="Mississippi">Mississippi</option>
                                        <option value="Missouri">Missouri</option>
                                        <option value="Montana">Montana</option>
                                        <option value="Nebraska">Nebraska</option>
                                        <option value="Nevada">Nevada</option>
                                        <option value="New Hampshire">New Hampshire</option>
                                        <option value="New Jersey">New Jersey</option>
                                        <option value="New Mexico">New Mexico</option>
                                        <option value="New York">New York</option>
                                        <option value="North Carolina">North Carolina</option>
                                        <option value="North Dakota">North Dakota</option>
                                        <option value="Ohio">Ohio</option>
                                        <option value="Oklahoma">Oklahoma</option>
                                        <option value="Oregon">Oregon</option>
                                        <option value="Pennsylvania">Pennsylvania</option>
                                        <option value="Rhode Island">Rhode Island</option>
                                        <option value="South Carolina">South Carolina</option>
                                        <option value="South Dakota">South Dakota</option>
                                        <option value="Tennessee">Tennessee</option>
                                        <option value="Texas">Texas</option>
                                        <option value="Utah">Utah</option>
                                        <option value="Vermont">Vermont</option>
                                        <option value="Virginia">Virginia</option>
                                        <option value="Washington">Washington</option>
                                        <option value="West Virginia">West Virginia</option>
                                        <option value="Wisconsin">Wisconsin</option>
                                        <option value="Wyoming">Wyoming</option>
                                    </select>
                                    {missingFields && (
                                        <p className="text-red-800 font-bold mb-3">Street Address is required</p>
                                    )}
                                </div>
                                <div>
                                    <label className='font-bold mb-1 text-lg'>Zip*</label>
                                    <input type="text" className="rounded-md w-full" placeholder="Zip" {...register("destinationZip", { required: true })} />
                                    {missingFields && (
                                        <p className="text-red-800 font-bold mb-3">Zip is required</p>
                                    )}
                                </div>
                            </div>
                            <div className='w-full'>
                                <label className='font-bold mb-1 text-lg'>Floors*</label>
                                <div className='flex gap-20 w-full'>
                                    <div>
                                        <div className='flex items-center gap-4'>
                                            <input type='checkbox' value={true} {...register("destFloorBasement")} />
                                            <label className='font-bold text-xl'>Basement</label>
                                        </div>
                                        <div className='flex items-center gap-4'>
                                            <input type='checkbox' value={true} {...register("destFloorFirst")} />
                                            <label className='font-bold text-xl'>1st Floor / Ground Level</label>
                                        </div>
                                        <div className='flex items-center gap-4'>
                                            <input type='checkbox' value={true} {...register("destFloorSecond")} />
                                            <label className='font-bold text-xl'>2nd Floor</label>
                                        </div>
                                    </div>
                                    <div>
                                        <div className='flex items-center gap-4'>
                                            <input type='checkbox' value={true} {...register("destFloorThird")} />
                                            <label className='font-bold text-xl'>3rd Floor</label>
                                        </div>
                                        <div className='flex items-center gap-4'>
                                            <input type='checkbox' value={true} {...register("destFloorFourth")} />
                                            <label className='font-bold text-xl'>4th Floor or Greater</label>
                                        </div>
                                        <div className='flex items-center gap-4'>
                                            <input type='checkbox' value={true} {...register("destFloorElevator")} />
                                            <label className='font-bold text-xl'>Elevator</label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='w-full'>
                                <label className='font-bold mb-1 text-lg'>Distance*</label>
                                <div className='w-full'>
                                    <select className='w-full' defaultValue="" {...register("destDistance", { required: true })}>
                                        <option value="" disabled>How far will we carry your items? (Choose One)</option>
                                        <option value="0 to 15 feet - Loading dock or similar">0 to 15 feet - Loading dock or similar</option>
                                        <option value=" 15 to 25 feet - Very short walk"> 15 to 25 feet - Very short walk</option>
                                        <option value="25 to 50 feet - Short walk">25 to 50 feet - Short walk</option>
                                        <option value="50 to 75 feet - Length of a bowling lane">50 to 75 feet - Length of a bowling lane</option>
                                        <option value="75-100 feet - Length of a tennis court">75-100 feet - Length of a tennis court</option>
                                        <option value="100-250 feet - Multiple long hallways">100-250 feet - Multiple long hallways</option>
                                        <option value="250-500 Length of a football field">250-500 Length of a football field</option>
                                        <option value="Over 500 feet - Very long">Over 500 feet - Very long</option>
                                    </select>
                                    {missingFields && (
                                        <p className="text-red-800 font-bold mb-3">Distance is required</p>
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
            }
        </>
    )
}