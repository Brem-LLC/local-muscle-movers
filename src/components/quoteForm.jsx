import { useForm } from 'react-hook-form';

export default function App() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => {console.log(data)};
  console.log(errors);
  
  return (
    <div className="max-w-xl mx-auto pt-16">
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="grid grid-cols-2 gap-10">
        <div>
        <input type="text" className="rounded-md" placeholder="firstName" {...register("firstName", {required: true})} />
        {errors.firstName?.type === "required" && (
          <p className="text-red-800 font-bold mb-3">First name is required</p>
        )}
        </div>
        <div>
          <input type="text" className="rounded-md" placeholder="lastName" {...register("lastName", {required: true})} />
          {errors.lastName?.type === "required" && (
            <p className="text-red-800 font-bold mb-3">Last name is required</p>
          )}
        </div>
      </div>
      <div className="grid grid-cols-2 gap-10">
        <input type="tel" className="rounded-md mb-3" placeholder="phone" {...register("phone", {required: true})} />
        <input type="text" className="rounded-md mb-3" placeholder="email" {...register("email", {required: true})} />
      </div>
      <input type="submit" />
    </form>
    </div>
  );
}