export default function Step6({ register, step, setStep }) {

    const handleNextStep = (event) => {
        event.preventDefault();
        setStep(step + 1);
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
                <button onClick={(event) => { handleNextStep(event) }} className='w-1/4 p-2 bg-[#f5f7f2] text-lg text-black border-[#f5f7f2] border-2 rounded border-[#f5f7f2] hover:bg-transparent hover:cursor-pointer'>Next</button>
            </div>
        </div>
    )
}