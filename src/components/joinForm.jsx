import { useState } from 'react';
import { useForm } from 'react-hook-form';

export default function Form() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { register, handleSubmit, setValue, formState: { errors } } = useForm();
  const onSubmit = async data => {
    setIsSubmitting(true)
    const request = await fetch('/api/join', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    if (request.status === 200) {
      setSent(true)
    }
  }

  return (
    <div className="max-w-3xl mx-auto pt-24">
      {!isSubmitting ?
        <form className='flex flex-col gap-16 items-center' onSubmit={handleSubmit(onSubmit)}>
          <div className='flex flex-col gap-24'>
            <div className='flex flex-col gap-3 bg-[#f4dd973a] p-12 rounded-lg'>
              <h2 className='font-bold text-3xl absolute transform -translate-y-20 bg-[#f4dd973a] pt-2 px-8 rounded-md'>Contact Info</h2>
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
                  <input type="tel" className="rounded-md w-full" placeholder="(123) 555-6789" {...register("phoneNumber", { required: false })} />
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
            <div className='flex flex-col gap-3 bg-[#f4dd973a] p-12 rounded-lg'>
              <h2 className='font-bold text-3xl absolute transform -translate-y-20 bg-[#f4dd973a] pt-2 px-8 rounded-md'>Location</h2>
              <div className="grid grid-cols-2 gap-5">
                <div>
                  <label className='font-bold mb-1 text-lg'>Which branch are you interested in contacting?</label>
                  <select className="rounded-md w-full" defaultValue=" " {...register("location", { required: true })}>
                    <option value=" " disabled>Select One:</option>
                    <option value="Portland, ME">Portland, ME</option>
                    <option value="Burlington, VT" >Burlington, VT</option>
                  </select>
                  {errors.location?.type === "required w-full" && (
                    <p className="text-red-800 font-bold mb-3">Locaiton is required</p>
                  )}
                </div>
              </div>
            </div>
            <div className='flex flex-col gap-5 bg-[#f4dd973a] p-12 rounded-lg items-center'>
              <div>
                <h2 className='font-bold text-3xl absolute transform -translate-y-20 bg-[#f4dd973a] pt-2 px-8 rounded-md'>Tell us about yourself</h2>
                <div className='w-full'>
                  <label className='font-bold mb-1 text-lg'>Your interests, work history, availability, anything you think is relevant:</label>
                  <textarea type="text" className="rounded-md w-full" placeholder="Additional Information" {...register("additionalInfo")} />
                </div>
              </div>
              <button disabled={isSubmitting} type="submit" className='w-1/4 p-2 bg-[#f4dd973a] text-lg text-black border-[#f5f7f2] border-2 rounded border-[#f5f7f2] hover:bg-transparent hover:text-black hover:cursor-pointer'>Submit</button>
            </div>
          </div>
        </form>
        :
        <div class="py-80 text-center text-xl">
          <h3 class="font-bold">Thank you for your interest in Local Muscle Movers!</h3>
          <p>We value your interest and time. We will review your information and get back to you shortly!</p>
        </div>
      }
    </div>
  );
}