"use client"
import { Input } from "@/components/ui/input";
import Image from "next/image";
import * as React from "react";
import SignUpWithGoogleImage from '../../../../public/icons8-google-48.png'
import { SubmitHandler, useForm } from "react-hook-form"

interface InputFieldProps {
  label: string;
  placeholder: string;
}

type FormFields = {
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
}

const onSubmit: SubmitHandler<FormFields> = (data) => {
  console.log(data)
}

const SignupForm: React.FC = () => {
  const { register, handleSubmit } = useForm<FormFields>();
  return (
    <div className="px-10 pt-12 pb-10 mt-5 mb-4 max-w-full rounded-2xl bg-slate-50 w-[490px] max-md:px-5">
      <form
        onSubmit={handleSubmit(onSubmit)}

        className="flex flex-col ">
        <h1 className="text-4xl font-semibold text-neutral-600 text-center">
          Signup
          <br />
        </h1>

        <div className=" flex flex-col mt-4  ">
          <span className=" text-neutral-800  ">Username</span>
          <Input
            {...register("username")}
            className="text-md "
            type="text" placeholder="Enter a username" />
          <div className=" h-px border border-solid bg-neutral-400 border-neutral-400" />
        </div>

        <div className=" flex flex-col mt-4  ">
          <span className=" text-neutral-800  ">Email</span>
          <Input

            {...register("email")}
            className="text-md "
            type="text" placeholder="Enter your email" />
          <div className=" h-px border border-solid bg-neutral-400 border-neutral-400" />
        </div>

        <div className=" flex flex-col mt-4  ">
          <span className=" text-neutral-800  ">Password</span>
          <Input
            {...register("password")}
            className="text-md "
            type="text" placeholder="Enter a password" />
          <div className=" h-px border border-solid bg-neutral-400 border-neutral-400" />
        </div>

        <div className=" flex flex-col mt-4  ">
          <span className=" text-neutral-800  ">Confirm Password</span>
          <Input
            {...register("confirmPassword")}
            className="text-md "
            type="text" placeholder="Confirm passwrod" />
          <div className=" h-px border border-solid bg-neutral-400 border-neutral-400" />
        </div>

        <button
          type="submit"
          className="justify-center items-center px-16 py-5 mt-10 text-xl whitespace-nowrap rounded-[100px] text-white text-opacity-80 max-md:px-5 max-md:mt-10 bg-gradient-to-r from-blue-700 to bg-purple-600"
        >
          SIGNUP
        </button>
      </form>
      <Divider />
      <div className=" w-full flex justify-center ">
        <Image
          alt="Signup with Google"
          src={SignUpWithGoogleImage}
        />
      </div>
      <div className="flex gap-1.5 self-center mt-7 text-[1.2rem]">
        <div className="text-neutral-500">
          Already have an account?
        </div>
        <a href="#" className="text-purple-500">
          Login
        </a>
      </div>
    </div>
  );
};

const Divider: React.FC = () => {
  return (
    <div className="flex gap-2 mt-7 text-xl text-black whitespace-nowrap max-md:mt-10 ml-3">
      <div className="flex gap-1">
        <div className="shrink-0 my-auto h-0.5 border border-solid bg-neutral-400 border-neutral-400 w-[175px]" />
        <div>OR</div>
      </div>
      <div className="shrink-0 my-auto h-0.5 border border-solid bg-neutral-400 border-neutral-400 w-[175px]" />
    </div>
  );
};

const MyComponent: React.FC = () => {
  return (
    <div className="flex flex-col justify-center text-base bg-gradient-to-tr to-[#A348DF] from-[#7143E2] h-screen ">
      <div className="flex justify-center items-center px-16 py-20 w-full max-md:px-5 max-md:max-w-full">
        <div className="flex flex-col">
          <SignupForm />
        </div>
      </div>
    </div>
  );
};

export default MyComponent;