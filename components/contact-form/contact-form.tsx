"use client";

import { Button } from "@components/button/button";
import { Input } from "@components/input/input";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import {
  FieldValues,
  SubmitErrorHandler,
  SubmitHandler,
  useForm,
} from "react-hook-form";
import { FaSpinner } from "react-icons/fa";
import { toast } from "react-toastify";
import { z } from "zod";

export const API_URI = process.env.NEXT_PUBLIC_API_URI;
export const API_KEY = process.env.NEXT_PUBLIC_API_KEY;

const schema = z.object({
  name: z.string({ required_error: "Name is required" }),
  email: z
    .string({ required_error: "Email is required" })
    .email("Please enter a valid email"),
  message: z.string({ required_error: "Message is required" }),
});

export const ContactForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
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
      toast("Success", { type: "success" });
    } catch (error) {
      toast("Error while contacting user", { type: "error" });
    } finally {
      setIsLoading(false);
    }
  };

  const onSubmitError: SubmitErrorHandler<FieldValues> = (err) => {
    toast("Error in validating form", { type: "error" });
  };

  return (
    <form onSubmit={handleSubmit(onSubmitSuccess, onSubmitError)}>
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
        <Input
          id="message"
          name="message"
          register={register}
          isError={!!errors.message?.message}
        />
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
    </form>
  );
};
