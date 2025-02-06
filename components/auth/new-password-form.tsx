"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useSearchParams } from "next/navigation";
import { useState, useTransition } from "react";
import { useForm } from "react-hook-form";
import * as z from "zod";

import { newPassword } from "@/actions/new-password";
import { NewPasswordSchema } from "@/schemas";

export const NewPasswordForm = () => {
  const searchParams = useSearchParams();
  const token = searchParams.get("token");

  const [error, setError] = useState<string | undefined>("");
  const [success, setSuccess] = useState<string | undefined>("");
  const [isPending, startTransition] = useTransition();

  const form = useForm<z.infer<typeof NewPasswordSchema>>({
    resolver: zodResolver(NewPasswordSchema),
    defaultValues: {
      password: "",
    },
  });

  const onSubmit = (values: z.infer<typeof NewPasswordSchema>) => {
    setError("");
    setSuccess("");

    startTransition(() => {
      newPassword(values, token).then((data) => {
        setError(data?.error);
        setSuccess(data?.success);
      });
    });
  };

  return (
    <div className="card-wrapper">
      <h2>Enter a new password</h2>
      <a className="back-button" href="/auth/login">
        Back to login
      </a>
      <form className="space-y-6" onSubmit={form.handleSubmit(onSubmit)}>
        <div className="space-y-4">
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
          Reset password
        </button>
      </form>
    </div>
  );
};
