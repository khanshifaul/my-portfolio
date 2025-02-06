"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useState, useTransition } from "react";
import { useForm } from "react-hook-form";
import * as z from "zod";

import { reset } from "@/actions/reset";
import { ResetSchema } from "@/schemas";

export const ResetForm = () => {
  const [error, setError] = useState<string | undefined>("");
  const [success, setSuccess] = useState<string | undefined>("");
  const [isPending, startTransition] = useTransition();

  const form = useForm<z.infer<typeof ResetSchema>>({
    resolver: zodResolver(ResetSchema),
    defaultValues: {
      email: "",
    },
  });

  const onSubmit = (values: z.infer<typeof ResetSchema>) => {
    setError("");
    setSuccess("");

    startTransition(() => {
      reset(values).then((data) => {
        setError(data?.error);
        setSuccess(data?.success);
      });
    });
  };

  return (
    <div className="card-wrapper">
      <h2>Forgot your password?</h2>
      <a className="back-button" href="/auth/login">
        Back to login
      </a>
      <form className="space-y-6" onSubmit={form.handleSubmit(onSubmit)}>
        <div className="space-y-4">
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
        </div>
        {error && <p className="form-error">{error}</p>}
        {success && <p className="form-success">{success}</p>}
        <button className="w-full btn" disabled={isPending} type="submit">
          Send reset email
        </button>
      </form>
    </div>
  );
};
