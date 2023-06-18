"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "app/components/button/button";
import { Input } from "app/components/input/input";
import classNames from "classnames";
import { useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { FaSpinner } from "react-icons/fa";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { z } from "zod";

export const API_URI = process.env.NEXT_PUBLIC_API_URI;
export const API_KEY = process.env.NEXT_PUBLIC_API_KEY;

const schema = z.object({
  name: z.string().min(1, "Please enter a name"),
  email: z.string().email("Please enter a valid email"),
  message: z.string().min(1, "Please enter a message"),
});

type FormInputs = z.infer<typeof schema>;

export const ContactForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormInputs>({
    resolver: zodResolver(schema),
  });

  const onSubmitSuccess: SubmitHandler<FieldValues> = async (data) => {
    try {
      setIsLoading(true);
      const res = await fetch(`${API_URI}/contact`, {
        method: "POST",
        headers: {
          "x-api-key": API_KEY!,
        },
        body: JSON.stringify({
          name: data.name,
          email: data.email,
          message: data.message,
        }),
      });
      if (res.status !== 200) {
        throw new Error("Received an error from the API");
      }
      toast.success("Thanks for contacting me");
    } catch (error) {
      toast.error("Oops, something went wrong");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmitSuccess)}>
      <div className="mb-4">
        <label className="block mb-2" htmlFor="name">
          Name
        </label>
        <Input
          id="name"
          name="name"
          register={register}
          isError={!!errors.name?.message}
        />
        <span className="text-danger mt-1">{errors.name?.message}</span>
      </div>
      <div className="mb-4">
        <label className="block mb-2" htmlFor="email">
          Email
        </label>
        <Input
          id="email"
          name="email"
          register={register}
          isError={!!errors.email?.message}
        />
        <span className="text-danger mt-1">{errors.email?.message}</span>
      </div>
      <div>
        <label className="block mb-2" htmlFor="message">
          Message
        </label>
        <textarea
          className={classNames({
            "bg-darkGray w-full focus:outline-none focus:border focus:border-primary py-2 px-2 transition-colors resize-none":
              true,
            "border border:danger": !!errors.message,
          })}
          id="message"
          cols={20}
          rows={5}
          {...register("message")}
        ></textarea>
        <span className="text-danger mt-1">{errors.message?.message}</span>
      </div>
      <Button
        type="submit"
        variant={Button.Variants.PRIMARY}
        disabled={isLoading}
        className="mt-4 w-full py-2 md:py-4 font-semibold md:text-lg disabled:opacity-60"
      >
        {isLoading ? (
          <FaSpinner className="animate-spin text-white inline" />
        ) : (
          <span>Let&apos;s Talk</span>
        )}
      </Button>
      <ToastContainer />
    </form>
  );
};
