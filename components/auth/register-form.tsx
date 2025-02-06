"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useState, useTransition } from "react";
import { useForm } from "react-hook-form";
import * as z from "zod";

import { register } from "@/actions/register";
import { RegisterSchema } from "@/schemas";

export const RegisterForm = () => {
  const [error, setError] = useState<string | undefined>("");
  const [success, setSuccess] = useState<string | undefined>("");
  const [isPending, startTransition] = useTransition();

  const form = useForm<z.infer<typeof RegisterSchema>>({
    resolver: zodResolver(RegisterSchema),
    defaultValues: {
      email: "",
      password: "",
      name: "",
    },
  });

  const onSubmit = (values: z.infer<typeof RegisterSchema>) => {
    setError("");
    setSuccess("");

    startTransition(() => {
      register(values).then((data) => {
        setError(data.error);
        setSuccess(data.success);
      });
    });
  };

  return (
    <div className="card-wrapper">
      <h2>Create an account</h2>
      <a className="back-button" href="/auth/login">
        Already have an account?
      </a>
      <form className="space-y-6" onSubmit={form.handleSubmit(onSubmit)}>
        <div className="space-y-4">
          <div className="form-item">
            <label className="form-label">Name</label>
            <input
              {...form.register("name")}
              className="input"
              disabled={isPending}
              placeholder="John Doe"
            />
            {form.formState.errors.name && (
              <p className="form-message">
                {form.formState.errors.name.message}
              </p>
            )}
          </div>
          <div className="form-item">
            <label className="form-label">Email</label>
            <input
              {...form.register("email")}
              className="input"
              disabled={isPending}
              placeholder="john.doe@example.com"
              type="email"
            />
            {form.formState.errors.email && (
              <p className="form-message">
                {form.formState.errors.email.message}
              </p>
            )}
          </div>
          <div className="form-item">
            <label className="form-label">Password</label>
            <input
              {...form.register("password")}
              className="input"
              disabled={isPending}
              placeholder="******"
              type="password"
            />
            {form.formState.errors.password && (
              <p className="form-message">
                {form.formState.errors.password.message}
              </p>
            )}
          </div>
        </div>
        {error && <p className="form-error">{error}</p>}
        {success && <p className="form-success">{success}</p>}
        <button className="w-full btn" disabled={isPending} type="submit">
          Create an account
        </button>
      </form>
    </div>
  );
};
