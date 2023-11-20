import { useState } from 'react';
import { useForm } from 'react-hook-form';

export default function Form() {
  const { register, handleSubmit, setValue, formState: { errors } } = useForm();
  const onSubmit = async data => {
    const request = await fetch('/api/quote', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    const response = await request.json();
  }

  const [moveType, setMoveType] = useState("Moving with our trucks");

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

  return (
    <div className="max-w-3xl mx-auto pt-16">
      <form className='flex flex-col gap-16 items-center' onSubmit={handleSubmit(onSubmit)}>
        <div className='flex flex-col gap-16'>
          <div className='flex flex-col gap-3 bg-[#f5f7f2] p-12 rounded-lg'>
            <h2 className='font-bold text-3xl absolute transform -translate-y-20 bg-[#f5f7f2] pt-2 px-8 rounded-md'>Contact Info</h2>
            <div className="grid grid-cols-2 gap-5">
              <div>
                <label className='font-bold mb-1 text-lg'>First Name*</label>
                <input type="text" className="rounded-md w-full" placeholder="First Name" {...register("firstName", { required: false })} />
                {errors.firstName?.type === "required w-full" && (
                  <p className="text-red-800 font-bold mb-3">First name is required</p>
                )}
              </div>
              <div>
                <label className='font-bold mb-1 text-lg'>Last Name*</label>
                <input type="text" className="rounded-md w-full" placeholder="Last Name" {...register("lastName", { required: false })} />
                {errors.lastName?.type === "required" && (
                  <p className="text-red-800 font-bold mb-3">Last name is required</p>
                )}
              </div>
            </div>
            <div className="flex gap-5 w-full">
              <div className='w-3/4'>
                <label className='font-bold mb-1 text-lg'>Phone*</label>
                <input type="tel" className="rounded-md w-full" placeholder="(123) 555-6789" {...register("phone", { required: false })} />
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
              <input type="text" className="rounded-md w-full" placeholder="you@example.com" {...register("email", { required: false })} />
              {errors.email?.type === "required" && (
                <p className="text-red-800 font-bold mb-3">Email is required</p>
              )}
            </div>
          </div>
          <div className='flex flex-col gap-5 bg-[#f5f7f2] p-12 rounded-lg'>
            <label className='font-bold text-3xl absolute transform -translate-y-20 bg-[#f5f7f2] pt-2 px-8 rounded-md'>Service Date</label>
            <div className='flex gap-5 w-full'>
              <div className='w-1/3'>
                <h3 className='font-bold mb-1 text-lg'>Desired Date*</h3>
                <input className='rounded-md mb-3 w-full' type="date" placeholder="mm/dd/yy" {...register("desiredDate", { required: false })} />
                {errors.desiredDate?.type === "required" && (
                  <p className="text-red-800 font-bold mb-3">Email is required</p>
                )}
              </div>
              <div>
                <label className='font-bold mb-1 text-lg'>Flexibility*</label>
                <select className='rounded-md mb-3 w-full' defaultValue="" {...register("flexibility", { required: false })}>
                  <option value="" disabled>How soon do you need services?</option>
                  <option value="Within 1 week">Within 1 week</option>
                  <option value="Within 2 weeks">Within 2 weeks</option>
                  <option value="Within 30 days">Within 30 Days</option>
                  <option value="By the end of this month">By the end of this month</option>
                  <option value="More than one month">More than one month</option>
                </select>
                {errors.flexibility?.type === "required" && (
                  <p className="text-red-800 font-bold mb-3">Email is required</p>
                )}
              </div>
            </div>
          </div>
          <div className='flex flex-col gap-5 bg-[#f5f7f2] p-12 rounded-lg'>
            <h2 className='font-bold text-3xl absolute transform -translate-y-20 bg-[#f5f7f2] pt-2 px-8 rounded-md'>Service Details</h2>
            <div>
              <label className='font-bold mb-1 text-lg'>Size*</label>
              <select className='rounded-md mb-3 w-full' defaultValue="" {...register("size", { required: false })}>
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
              {errors.size?.type === "required" && (
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
              {errors.moveType?.type === "required" && (
                <p className="text-red-800 font-bold mb-3">Type is required</p>
              )}
            </div>
          </div>
          <div className='flex flex-col gap-5 bg-[#f5f7f2] p-12 rounded-lg'>
            <h2 className='font-bold text-3xl absolute transform -translate-y-20 bg-[#f5f7f2] pt-2 px-8 rounded-md'>
              {moveType === "Moving with our trucks" ? "Origin" : "Address"}
            </h2>
            <div className='flex gap-5'>
              <div className='w-full'>
                <label className='font-bold mb-1 text-lg'>Street Address*</label>
                <input type="text" className="rounded-md w-full" placeholder="12 Example St." {...register("originStreet", { required: false })} />
                {errors.originStreet?.type === "required" && (
                  <p className="text-red-800 font-bold mb-3">Street Address is required</p>
                )}
              </div>
              <div>
                <label className='font-bold mb-1 text-lg'>City*</label>
                <input type="text" className="rounded-md w-full" placeholder="City" {...register("originCity", { required: false })} />
                {errors.originCity?.type === "required" && (
                  <p className="text-red-800 font-bold mb-3">City is required</p>
                )}
              </div>
            </div>
            <div className='flex gap-5'>
              <div className='w-full'>
                <label className='font-bold mb-1 text-lg'>State*</label>
                <select className='rounded-md mb-3 w-full' defaultValue="Maine" {...register("originState", { required: false })}>
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
                {errors.originState?.type === "required" && (
                  <p className="text-red-800 font-bold mb-3">Street Address is required</p>
                )}
              </div>
              <div>
                <label className='font-bold mb-1 text-lg'>Zip*</label>
                <input type="text" className="rounded-md w-full" placeholder="Zip" {...register("originZip", { required: false })} />
                {errors.originZip?.type === "required" && (
                  <p className="text-red-800 font-bold mb-3">Zip is required</p>
                )}
              </div>
            </div>
            <div className='w-full'>
              <label className='font-bold mb-1 text-lg'>Floors*</label>
              <div className='flex gap-20 w-full'>
                <div>
                  <div className='flex items-center gap-4'>
                    <input type='checkbox' value={true} {...register("originFloorBasement")} />
                    <label className='font-bold text-xl'>Basement</label>
                  </div>
                  <div className='flex items-center gap-4'>
                    <input type='checkbox' value={true} {...register("originFloorFirst")} />
                    <label className='font-bold text-xl'>1st Floor / Ground Level</label>
                  </div>
                  <div className='flex items-center gap-4'>
                    <input type='checkbox' value={true} {...register("originFloorSecond")} />
                    <label className='font-bold text-xl'>2nd Floor</label>
                  </div>
                </div>
                <div>
                  <div className='flex items-center gap-4'>
                    <input type='checkbox' value={true} {...register("originFloorThird")} />
                    <label className='font-bold text-xl'>3rd Floor</label>
                  </div>
                  <div className='flex items-center gap-4'>
                    <input type='checkbox' value={true} {...register("originFloorFourth")} />
                    <label className='font-bold text-xl'>4th Floor or Greater</label>
                  </div>
                  <div className='flex items-center gap-4'>
                    <input type='checkbox' value={true} {...register("originFloorElevator")} />
                    <label className='font-bold text-xl'>Elevator</label>
                  </div>
                </div>
              </div>
            </div>
            <div className='w-full'>
              <label className='font-bold mb-1 text-lg'>Distance*</label>
              <div className='w-full'>
                <select className='w-full' defaultValue="" {...register("OriginDistance", { required: false })}>
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
                {errors.distance?.type === "required" && (
                  <p className="text-red-800 font-bold mb-3">Distance is required</p>
                )}
              </div>
            </div>
          </div>
          {moveType === "Moving with our trucks" ?
            <div className='flex flex-col gap-5 bg-[#f5f7f2] p-12 rounded-lg'>
              <h2 className='font-bold text-3xl absolute transform -translate-y-20 bg-[#f5f7f2] pt-2 px-8 rounded-md'>Destination</h2>
              <div className='flex gap-5'>
                <div className='w-full'>
                  <label className='font-bold mb-1 text-lg'>Street Address*</label>
                  <input type="text" className="rounded-md w-full" placeholder="12 Example St." {...register("destStreet", { required: false })} />
                  {errors.destStreet?.type === "required" && (
                    <p className="text-red-800 font-bold mb-3">Street Address is required</p>
                  )}
                </div>
                <div>
                  <label className='font-bold mb-1 text-lg'>City*</label>
                  <input type="text" className="rounded-md w-full" placeholder="City" {...register("destCity", { required: false })} />
                  {errors.destCity?.type === "required" && (
                    <p className="text-red-800 font-bold mb-3">City is required</p>
                  )}
                </div>
              </div>
              <div className='flex gap-5'>
                <div className='w-full'>
                  <label className='font-bold mb-1 text-lg'>State*</label>
                  <select className='rounded-md mb-3 w-full' defaultValue="Maine" {...register("destState", { required: false })}>
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
                  {errors.destState?.type === "required" && (
                    <p className="text-red-800 font-bold mb-3">Street Address is required</p>
                  )}
                </div>
                <div>
                  <label className='font-bold mb-1 text-lg'>Zip*</label>
                  <input type="text" className="rounded-md w-full" placeholder="Zip" {...register("destZip", { required: false })} />
                  {errors.destZip?.type === "required" && (
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
                  <select className='w-full' defaultValue="" {...register("destDistance", { required: false })}>
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
                  {errors.distance?.type === "required" && (
                    <p className="text-red-800 font-bold mb-3">Distance is required</p>
                  )}
                </div>
              </div>
            </div>
            : <></>}
          <div className='flex flex-col gap-5 bg-[#f5f7f2] p-12 rounded-lg'>
            <h2 className='font-bold text-3xl absolute transform -translate-y-20 bg-[#f5f7f2] pt-2 px-8 rounded-md'>Location Notes:</h2>
            <div className='w-full'>
              <label className='font-bold mb-1 text-lg'>Please specify any potential obstacles at pickup/dropoff sites (e.g. steep stairwells, tight corners, difficult parking areas etc.)</label>
              <textarea type="text" className="rounded-md w-full" placeholder="Other location notes" {...register("locationNotes")} />
            </div>
          </div>
          <div className='flex flex-col gap-5 bg-[#f5f7f2] p-12 rounded-lg'>
            <h2 className='font-bold text-3xl absolute transform -translate-y-20 bg-[#f5f7f2] pt-2 px-8 rounded-md'>Additional Notes:</h2>
            <div className='w-full'>
              <label className='font-bold mb-1 text-lg'>What is your preferred method of contact (phone, email, text)?</label>
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
              <select className='rounded-md mb-3 w-full' defaultValue="" {...register("inventoryAccuracy", { required: false })}>
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
        </div>
        <input type="submit" className='w-1/4 p-2 bg-green-500 text-white border-green-500 border-2 rounded border-green-500 hover:bg-transparent hover:text-black hover:border-2 hover:border-green-500 hover:cursor-pointer' />
      </form>
    </div>
  );
}