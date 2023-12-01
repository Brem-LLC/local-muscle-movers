import { useState } from 'react';
import { useForm } from 'react-hook-form';
import Step1 from './QuoteSteps/Step1';
import Step2 from './QuoteSteps/Step2';
import Step3 from './QuoteSteps/Step3';
import Step4 from './QuoteSteps/Step4';
import Step5 from './QuoteSteps/Step5';
import Step6 from './QuoteSteps/Step6';
import Step7 from './QuoteSteps/Step7';

export default function QuoteFormDemo() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [step, setStep] = useState(1);
    const [moveType, setMoveType] = useState("Moving with our trucks");

    const { register, handleSubmit, setValue, formState: { errors } } = useForm();
    const onSubmit = async data => {
        setIsSubmitting(true);
        console.log(data);
        // const request = await fetch('/api/quote', {
        //   method: 'POST',
        //   headers: {
        //     'Content-Type': 'application/json'
        //   },
        //   body: JSON.stringify(data)
        // })
        // const response = await request.json();
    }

    return (
        <div className="max-w-3xl mx-auto pt-16 h-lg">
            {!isSubmitting ?
                <form className='flex flex-col gap-16 items-center' onSubmit={handleSubmit(onSubmit)}>
                    <div className='flex flex-col gap-16'>
                        {step === 1 && <Step1 register={register} errors={errors} setValue={setValue} setStep={setStep} step={step} />}
                        {step === 2 && <Step2 register={register} errors={errors} setValue={setValue} setStep={setStep} step={step} />}
                        {step === 3 && <Step3 register={register} errors={errors} setValue={setValue} setStep={setStep} step={step} setMoveType={setMoveType} />}
                        {step === 4 && <Step4 register={register} errors={errors} setValue={setValue} setStep={setStep} step={step} moveType={moveType} />}
                        {step === 5 && <Step5 register={register} errors={errors} setValue={setValue} setStep={setStep} step={step} moveType={moveType }/>}
                        {step === 6 && <Step6 register={register} errors={errors} setValue={setValue} setStep={setStep} step={step} />}
                        {step === 7 && <Step7 register={register} errors={errors} setValue={setValue} isSubmitting={isSubmitting} submit={handleSubmit(onSubmit)} />}
                    </div>
                </form>
                :
                <div className="py-80 text-center text-xl">
                    <h3 className="font-bold">Thank you for your interest in Local Muscle Movers!</h3>
                    <p>We value your interest and time, and we will have your quote ready within soon.</p>
                </div>
            }
        </div>
    )
}